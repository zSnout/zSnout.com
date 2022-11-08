<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { useRoute } from "vue-router";
  import {
    CompletedThread,
    StoryPermissionLevel,
    StoryStats,
    UUID,
  } from "../../shared.client";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Dropdown from "../components/Dropdown.vue";
  import Field from "../components/Field.vue";
  import HStack from "../components/HStack.vue";
  import InlineButton from "../components/InlineButton.vue";
  import InlineField from "../components/InlineField.vue";
  import MiddleText from "../components/MiddleText.vue";
  import Modal from "../components/Modal.vue";
  import Spacer from "../components/Spacer.vue";
  import StickyTopRegion from "../components/StickyTopRegion.vue";
  import TrashIcon from "../components/TrashIcon.vue";
  import VStack from "../components/VStack.vue";
  import {
    connected,
    error,
    router,
    session,
    socket,
    username,
    useSocketListener,
  } from "../main";
  import TimeAgo from "javascript-time-ago";
  import en from "javascript-time-ago/locale/en";

  TimeAgo.addDefaultLocale(en);
  const timeAgo = new TimeAgo("en-US");

  const title = ref("Loading title...");
  const isLogInOpen = ref(false);
  const id = "" + useRoute().query.id;
  const permission = ref<StoryPermissionLevel | "waiting">("waiting");
  const gems = ref(0);
  const completableThreadCount = ref(0);
  const completedThreadCount = ref(0);
  const activeThreadCount = ref(0);
  const stats = ref<StoryStats>({
    contributions: [],
    period: "week",
    total: 0,
    last: [],
  });

  useSocketListener("story:details", (details) => {
    if (details.id !== id) return;

    title.value = details.title;
    completableThreadCount.value = details.completableThreadCount;
    completedThreadCount.value = details.completedThreadCount;
    activeThreadCount.value = details.activeThreadCount;
  });

  useSocketListener("story:update:permission", (storyId, level) => {
    if (storyId !== id) return;
    permission.value = level;
  });

  useSocketListener("story:update:gems", (storyId, _gems) => {
    if (storyId !== id) return;
    gems.value = _gems;
  });

  useSocketListener("story:update:title", (storyId, _title) => {
    if (storyId !== id) return;
    title.value = _title;
  });

  socket.emit("story:request:details", session.value, id);

  const isCreateThreadModalOpen = ref(false);
  const createdThreadFirstSentence = ref("");

  function createThread(event?: Event) {
    event?.preventDefault();

    const sentence = createdThreadFirstSentence.value.trim();

    if (sentence.length < 20 || sentence.length >= 1000) {
      return;
    }

    isCreateThreadModalOpen.value = false;
    socket.emit(
      "story:create:thread",
      session.value,
      id,
      sentence.slice(0, 100)
    );
  }

  const isAddToThreadOpen = ref(false);
  let prevId: UUID | undefined;
  const prevSentence = ref("");
  const nextSentence = ref("");

  useSocketListener("story:thread", (storyId, prev) => {
    if (storyId != id) {
      return;
    }

    nextSentence.value = "";
    prevSentence.value = prev.content;
    prevId = prev.id;

    isAddToThreadOpen.value = true;
  });

  const willComplete = ref(false);

  function addToThread(event?: Event) {
    event?.preventDefault();

    if (!prevId) {
      return;
    }

    const next = nextSentence.value.trim();
    if (next.length < 20 || next.length >= 1000) {
      return;
    }

    socket.emit(
      "story:update:thread",
      session.value,
      id,
      prevId,
      next,
      willComplete.value
    );

    isAddToThreadOpen.value = false;
  }

  const isFailedToAddOpen = ref(false);

  useSocketListener("story:fail", (storyId) => {
    if (storyId != id) {
      return;
    }

    isFailedToAddOpen.value = true;
  });

  const members = reactive<Record<string, StoryPermissionLevel>>(
    Object.create(null)
  );

  useSocketListener("story:update:members", (storyId, _members) => {
    if (storyId === id) {
      for (const key in members) {
        delete members[key];
      }

      Object.assign(members, _members);
    }
  });

  const isMembersListOpen = ref(false);

  function showMembers() {
    if (permission.value !== "manage") return;

    socket.emit("story:request:members", session.value, id);
    isMembersListOpen.value = true;
  }

  const newUser = ref("");

  function addNewUser(event?: Event) {
    event?.preventDefault();
    if (!newUser.value) return;

    members[newUser.value] = "write";
    newUser.value = "";
  }

  function removeMember(member: string) {
    delete members[member];
  }

  function updateMembers() {
    if (permission.value !== "manage") return;

    socket.emit("story:update:members", session.value, id, members);
  }

  const isLeaveOpen = ref(false);

  function leaveThisStory() {
    isLeaveOpen.value = true;
  }

  function actuallyLeave() {
    isLeaveOpen.value = false;
    socket.emit("story:leave", session.value, id);
    router.push("/my-stories");
  }

  const isCompletedPickerOpen = ref(false);
  const completed = ref<CompletedThread[]>([]);

  useSocketListener("story:completed", (storyId, threads) => {
    if (storyId != id) {
      return;
    }

    isCompletedPickerOpen.value = true;
    completed.value = threads;
  });

  const isCompletedOpen = ref(false);
  const picked = ref("");

  function pick(value: string) {
    isCompletedPickerOpen.value = false;
    isCompletedOpen.value = true;
    picked.value = value;
  }

  const isStatsOpen = ref(false);

  useSocketListener("story:stats", (storyId, _stats) => {
    if (storyId !== id) return;

    stats.value = _stats;
    isStatsOpen.value = true;
  });
</script>

<template>
  <DocumentDisplay center no-footer>
    <StickyTopRegion>
      <p v-if="!connected">
        Looks like you're temporarily offline. zSnout is reconnecting...
      </p>

      <p v-if="!session">
        You're not logged in.
        <InlineButton @click="isLogInOpen = true">Log in</InlineButton>
        or
        <InlineButton @click="isLogInOpen = true">sign up</InlineButton>
        to access this story.
      </p>

      <p v-else-if="permission === 'none'">
        Looks like you don't have permission to access this story!
      </p>

      <HStack v-else-if="connected && permission === 'manage'" wraps>
        <InlineField
          :maxlength="100"
          :model-value="title"
          style="flex: 1"
          @update:model-value="
            socket.emit('story:update:title', session, id, (title = $event))
          "
        />

        <Button pre style="font-size: 1rem" @click="showMembers">
          Edit Members
        </Button>
      </HStack>

      <HStack v-else-if="connected" wraps>
        <p style="flex: 1">{{ title }}</p>

        <Button pre style="font-size: 1rem" @click="leaveThisStory">
          Leave this Story
        </Button>
      </HStack>

      <p v-else-if="connected">{{ title }}</p>
    </StickyTopRegion>

    <Spacer>{{ "" }}</Spacer>

    <HStack>
      <Spacer />

      <MiddleText>
        <VStack>
          <HStack>
            <div>{{ gems }} Gem{{ gems == 1 ? "" : "s" }}</div>

            <Spacer />

            <div>
              {{ activeThreadCount }} Active Thread{{
                activeThreadCount == 1 ? "" : "s"
              }}
            </div>
          </HStack>

          <Button
            :disabled="
              activeThreadCount <= 0 ||
              permission == 'none' ||
              permission == 'view'
            "
            @click="
              socket.emit(
                'story:request:thread',
                session,
                id,
                (willComplete = false)
              )
            "
          >
            {{
              activeThreadCount <= 0
                ? "No threads are active right now."
                : "Add to a Thread (+1 gem)"
            }}
          </Button>

          <Button
            :disabled="
              gems < 10 || permission == 'none' || permission == 'view'
            "
            @click="
              (isCreateThreadModalOpen = true),
                (createdThreadFirstSentence = '')
            "
          >
            {{
              gems < 10
                ? "Earn at least 10 gems to create a thread."
                : "Create a Thread (costs 10 gems)"
            }}
          </Button>

          <Button
            :disabled="
              gems < 10 ||
              completableThreadCount <= 0 ||
              permission == 'none' ||
              permission == 'view'
            "
            @click="
              socket.emit(
                'story:request:thread',
                session,
                id,
                (willComplete = true)
              )
            "
          >
            {{
              completableThreadCount <= 1 // We always need at least one available thread.
                ? "No threads can be completed right now."
                : gems < 10
                ? "Earn at least 10 gems to complete a thread."
                : "Complete a Thread (costs 10 gems)"
            }}
          </Button>

          <Button
            :disabled="completedThreadCount <= 0"
            @click="socket.emit('story:request:completed', session, id)"
          >
            {{
              completedThreadCount <= 0
                ? "No threads have been completed yet."
                : "View Completed Threads"
            }}
          </Button>

          <Button
            @click="socket.emit('story:request:stats', session, id, 'week')"
          >
            View Contribution Stats
          </Button>

          <div>
            Need help? Click the "?" icon in the navigation bar for more
            information about this page.
          </div>
        </VStack>
      </MiddleText>

      <Spacer />
    </HStack>

    <Spacer>{{ "" }}</Spacer>

    <template #help>
      <h1>Single Sentence Stories</h1>

      <p>
        This application lets you create silly stories with friends with a small
        twist: you can only see the previous sentence of the story, instead of
        the whole thing. When you create, add to, or complete a thread, you'll
        only be able to see the last thing someone typed and
        <em>not</em>
        the entire previous story. This can make using context a bit more
        difficult and makes stories much more interesting.
      </p>

      <h1>The Gem System</h1>

      <p>
        To prevent users from creating too many stories and not being able to
        add to enough of them, zSnout puts a restriction on the amount of
        stories you can create a complete through the gem system. It's a very
        simple system. Each time you add to an existing thread, you earn 1 gem.
        Creating or completing a thread costs 10 gems. This means that, on
        average, users will create and complete one thread for every twenty they
        add to.
      </p>
    </template>
  </DocumentDisplay>

  <Modal :open="isCreateThreadModalOpen">
    <form @submit="createThread">
      <Field
        v-model="createdThreadFirstSentence"
        autocomplete="off"
        maxlength="1000"
        placeholder="Enter the first sentence..."
        style="margin-bottom: 0"
      />
    </form>

    <p>
      {{
        createdThreadFirstSentence.length < 20
          ? "Make your sentence longer."
          : ""
      }}
    </p>

    <template #buttons>
      <Button cancel @click="isCreateThreadModalOpen = false">Cancel</Button>

      <Button @click="createThread">OK</Button>
    </template>
  </Modal>

  <Modal :open="isAddToThreadOpen">
    <p>{{ prevSentence }}</p>

    <form @submit="addToThread">
      <Field
        v-model="nextSentence"
        autocomplete="off"
        maxlength="1000"
        placeholder="Enter the next sentence..."
        style="margin-bottom: 0"
      />
    </form>

    <p>
      {{ nextSentence.length < 20 ? "Make your sentence longer." : "" }}
    </p>

    <template #buttons>
      <Button cancel @click="isAddToThreadOpen = false">Cancel</Button>

      <Button @click="addToThread">OK</Button>
    </template>
  </Modal>

  <Modal :open="isFailedToAddOpen">
    <p>{{ error }}</p>

    <template #buttons>
      <Button cancel @click="(isFailedToAddOpen = false), (error = '')">
        OK
      </Button>
    </template>
  </Modal>

  <Modal :open="permission === 'manage' && isMembersListOpen">
    <form @submit="addNewUser">
      <HStack>
        <Field v-model="newUser" placeholder="Type someone's username..." />

        <Button pre @click="addNewUser">Add Member</Button>
      </HStack>
    </form>

    <HStack v-for="(_, member) in members" :key="member" class="member">
      <div class="second-layer">
        {{ member }}
      </div>

      <Spacer />

      <div v-if="member === username" class="second-layer">Not Removable</div>

      <template v-else>
        <Dropdown v-model="members[member]" class="level">
          <option value="view">Viewer</option>
          <option value="write">Writer</option>
          <option value="manage">Manager</option>
        </Dropdown>

        <div class="second-layer trash-div">
          <TrashIcon class="trash" @click="removeMember(member)" />
        </div>
      </template>
    </HStack>

    <template #buttons>
      <Button @click="updateMembers(), (isMembersListOpen = false)">OK</Button>

      <Button
        cancel
        @click="
          socket.emit('story:request:members', session, id),
            (isMembersListOpen = false)
        "
      >
        Cancel
      </Button>
    </template>
  </Modal>

  <Modal
    :open="(permission === 'view' || permission === 'write') && isLeaveOpen"
  >
    <p>
      Are you sure you want to leave {{ title }}? You can always contact the
      story's owner to be re-added.
    </p>

    <template #buttons>
      <Button cancel @click="isLeaveOpen = false">Cancel</Button>

      <Button @click="actuallyLeave">OK</Button>
    </template>
  </Modal>

  <Modal :open="isCompletedPickerOpen">
    <Button v-for="thread in completed" @click="pick(thread.content)">
      {{ thread.first }}
    </Button>

    <template #buttons>
      <Button cancel @click="isCompletedPickerOpen = false">Cancel</Button>
    </template>
  </Modal>

  <Modal :open="isCompletedOpen">
    <p>{{ picked }}</p>

    <template #buttons>
      <Button cancel @click="isCompletedOpen = false">OK</Button>
    </template>
  </Modal>

  <Modal :open="isStatsOpen">
    <HStack stretch>
      <Button
        :disabled="stats.period == 'day'"
        @click="socket.emit('story:request:stats', session, id, 'day')"
      >
        Day
      </Button>

      <Button
        :disabled="stats.period == 'week'"
        @click="socket.emit('story:request:stats', session, id, 'week')"
      >
        Week
      </Button>

      <Button
        :disabled="stats.period == 'all'"
        @click="socket.emit('story:request:stats', session, id, 'all')"
      >
        All Time
      </Button>
    </HStack>

    <h1 class="stats-title">
      Showing stats for
      {{ stats.period == "all" ? "all time" : "the last " + stats.period }}
    </h1>

    <VStack :space="0.25">
      <HStack>
        <p>Total contributions:</p>

        <Spacer />

        <p>{{ stats.total }}</p>
      </HStack>

      <HStack v-for="[username, amount] in stats.contributions">
        <p>{{ username }}</p>

        <Spacer />

        <p>{{ amount }}</p>
      </HStack>
    </VStack>

    <VStack :space="0.25">
      <HStack>
        <p>Most recent contribution:</p>

        <Spacer />

        <p>
          {{
            stats.last[0]?.[1] ? timeAgo.format(stats.last[0]?.[1]) : "unknown"
          }}
        </p>
      </HStack>

      <HStack v-for="[username, timestamp] in stats.last">
        <p>{{ username }}</p>

        <Spacer />

        <p>{{ timeAgo.format(timestamp) }}</p>
      </HStack>
    </VStack>

    <template #buttons>
      <Button cancel @click="isStatsOpen = false">OK</Button>
    </template>
  </Modal>
</template>

<style scoped>
  .trash-div {
    height: 2.5em;
    cursor: pointer;
  }

  .level.level {
    width: auto;
  }

  .trash {
    width: 1.5em;
    height: 1.5em;
    color: var(--text-color);
  }

  .stats-title {
    margin-top: 0.25rem !important;
    font-size: 1.2em;
  }
</style>
