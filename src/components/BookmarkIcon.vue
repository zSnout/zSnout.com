<!-- https://www.svgrepo.com/svg/98665/bookmark-outline -->

<script lang="ts">
  function getBookmarks() {
    try {
      const stored = JSON.parse(localStorage.bookmarks);
      if (Array.isArray(stored)) {
        for (const entry of stored) {
          if (
            typeof entry !== "object" ||
            entry === null ||
            typeof entry.name !== "string" ||
            !entry.name ||
            typeof entry.url !== "string" ||
            !entry.url
          ) {
            return;
          }
        }
      }

      bookmarks.splice(0, bookmarks.length, ...stored);
    } catch {}
  }

  export function addThis(
    url = location.pathname + location.search + location.href
  ) {
    url = new URL(url, location.href).href;
    if (bookmarks.some((e) => e.url === url)) return;

    bookmarks.push({ name: document.title.slice(0, -9) || "zSnout", url });
    socket.emit("bookmarks:update", session.value, bookmarks);
  }

  const bookmarks = reactive<Bookmark[]>([]);
  getBookmarks();

  const conflict = ref<Bookmark[]>();

  window.addEventListener("storage", (event) => {
    if (event.storageArea === localStorage && event.key === "bookmarks") {
      getBookmarks();
    }
  });

  watchDebounced(
    bookmarks,
    (value) => {
      if (session.value && !conflict.value) {
        socket.emit("bookmarks:update", session.value, value);
      }

      localStorage.bookmarks = JSON.stringify(bookmarks);
    },
    { debounce: 500 }
  );

  watchEffect(() => {
    if (session.value) {
      socket.emit("bookmarks:request", session.value);
    }
  });

  socket.on("bookmarks:list", (list) => {
    const serverUrls = list.map((e) => e.url);
    const clientUrls = bookmarks.map((e) => e.url);

    if (clientUrls.filter((e) => !serverUrls.includes(e)).length) {
      conflict.value = list;
    } else {
      conflict.value = undefined;
      bookmarks.splice(0, bookmarks.length, ...list);
    }
  });
</script>

<script lang="ts" setup>
  import { watchDebounced } from "@vueuse/core";
  import { reactive, ref, watchEffect } from "vue";
  import { RouterLink } from "vue-router";
  import { Bookmark } from "../../shared.client";
  import { connected, session, socket } from "../main";
  import Button from "./Button.vue";
  import HStack from "./HStack.vue";
  import LogInForm from "./LogInForm.vue";
  import Modal from "./Modal.vue";
  import TrashIcon from "./TrashIcon.vue";
  import VStack from "./VStack.vue";

  defineProps<{ fullscreen?: boolean }>();

  const isOpen = ref(false);
  const visible = ref(false);
  const logInOpen = ref(false);
  const editing = ref(false);

  function open() {
    isOpen.value = true;
    visible.value = true;
  }

  function close() {
    isOpen.value = false;
    editing.value = false;
    setTimeout(() => visible.value && (visible.value = false), 300);
  }

  const updateMessage = ref("");
  const isUpdating = ref(false);
  const forceUpdate = ref<() => void>();

  function updateLocal() {
    updateMessage.value =
      "Updating your local copy will overwrite your bookmarks with ones loaded from the cloud. This is not revertable.";

    isUpdating.value = true;

    forceUpdate.value = () => {
      if (conflict.value) {
        bookmarks.splice(0, bookmarks.length, ...conflict.value);
        conflict.value = undefined;
      }
    };
  }

  function updateCloud() {
    updateMessage.value =
      "Updating your cloud copy will copy the bookmarks from this device onto your account and sync them across your devices. This is not revertable.";

    isUpdating.value = true;

    forceUpdate.value = () => {
      if (session.value) {
        conflict.value = undefined;
        socket.emit("bookmarks:update", session.value, bookmarks);
      }
    };
  }
</script>

<template>
  <svg
    class="icon"
    role="button"
    viewBox="100 0 403.511 603.511"
    xmlns="http://www.w3.org/2000/svg"
    @click="isOpen ? close() : open()"
    v-bind="$attrs"
  >
    <path
      d="M103.468,58.64v486.202c0,8.186,1.659,16.096,4.931,23.513c3.116,7.063,7.548,13.345,13.173,18.669
      c10.894,10.31,25.135,15.987,40.101,15.987c12.797,0,24.977-4.138,35.224-11.963l104.859-80.09l104.857,80.089
      c10.247,7.826,22.428,11.963,35.225,11.963c14.967,0,29.208-5.678,40.102-15.988c5.624-5.323,10.057-11.604,13.172-18.667
      c3.272-7.417,4.932-15.328,4.932-23.514V58.64c0-32.059-26.081-58.14-58.14-58.14H161.608
      C129.549,0.5,103.468,26.582,103.468,58.64z M457.204,58.64v486.202c0,9.071-7.442,15.329-15.365,15.329
      c-3.144,0-6.361-0.985-9.222-3.169l-121.574-92.856c-2.742-2.094-6.014-3.141-9.287-3.141c-3.273,0-6.545,1.047-9.287,3.141
      l-121.574,92.855c-2.859,2.185-6.079,3.169-9.222,3.169c-7.923,0-15.365-6.257-15.365-15.328V58.64c0-8.45,6.85-15.3,15.3-15.3
      h280.296C450.354,43.34,457.204,50.19,457.204,58.64z"
    />

    <path
      d="M161.673,603.511c-15.094,0-29.458-5.727-40.444-16.124c-5.674-5.37-10.144-11.705-13.287-18.83
      c-3.3-7.48-4.974-15.459-4.974-23.715V58.64c0-32.334,26.306-58.64,58.64-58.64h280.295c32.334,0,58.64,26.306,58.64,58.64
      v486.201c0,8.256-1.674,16.234-4.975,23.716c-3.141,7.122-7.611,13.457-13.285,18.828c-10.986,10.398-25.351,16.125-40.445,16.125
      c-12.907,0-25.193-4.172-35.528-12.065l-104.554-79.857l-104.555,79.858C186.864,599.339,174.579,603.511,161.673,603.511z
       M161.608,1c-31.783,0-57.64,25.857-57.64,57.64v486.202c0,8.116,1.645,15.959,4.889,23.311
      c3.089,7.003,7.483,13.229,13.06,18.508c10.8,10.222,24.919,15.851,39.757,15.851c12.685,0,24.76-4.102,34.921-11.86
      l105.162-80.321l0.304,0.231l104.857,80.089c10.159,7.759,22.234,11.86,34.921,11.86c14.838,0,28.958-5.63,39.758-15.852
      c5.577-5.279,9.971-11.505,13.059-18.506c3.244-7.353,4.889-15.196,4.889-23.312V58.64c0-31.783-25.857-57.64-57.64-57.64H161.608
      z M441.839,560.671c-3.428,0-6.722-1.131-9.525-3.271l-121.574-92.856c-2.603-1.987-5.709-3.038-8.983-3.038
      s-6.381,1.051-8.983,3.038l-121.574,92.855c-2.801,2.141-6.095,3.271-9.525,3.271c-7.63,0-15.865-6.052-15.865-15.828V58.64
      c0-8.712,7.088-15.8,15.8-15.8h280.296c8.712,0,15.8,7.088,15.8,15.8v486.202C457.704,554.619,449.469,560.671,441.839,560.671z
       M301.756,460.505c3.495,0,6.812,1.121,9.591,3.243l121.574,92.856c2.628,2.006,5.711,3.066,8.918,3.066
      c7.149,0,14.865-5.67,14.865-14.829V58.64c0-8.161-6.64-14.8-14.8-14.8H161.608c-8.161,0-14.8,6.639-14.8,14.8v486.202
      c0,9.159,7.716,14.828,14.865,14.828c3.208,0,6.292-1.061,8.918-3.066l121.574-92.855
      C294.944,461.626,298.26,460.505,301.756,460.505z"
    />
  </svg>

  <Teleport to="body">
    <div
      :class="{ fullscreen, open: isOpen, visible }"
      class="container"
      @click="close()"
    >
      <VStack class="bookmarks second-layer" @click="$event.stopPropagation()">
        <p v-if="!session && connected" style="text-align: center">
          <!-- prettier-ignore -->
          <span class="link" style="cursor: pointer" @click="logInOpen = true">Log in</span>
          to save bookmarks to the cloud.
        </p>

        <template v-if="conflict && session">
          <p style="text-align: center">
            Your local bookmarks and cloud bookmarks are in conflict. This can
            occur when you delete bookmarks on another devices or modify your
            list offline.
          </p>

          <HStack stretch>
            <Button @click="updateLocal">Update Local</Button>

            <Button @click="updateCloud">Update Cloud</Button>
          </HStack>
        </template>

        <HStack stretch>
          <Button @click="addThis">Add this page</Button>

          <Button @click="editing = !editing">
            {{ editing ? "Save" : "Edit" }}
          </Button>
        </HStack>

        <p v-if="bookmarks.length === 0" style="text-align: center">
          Click "Add this page" to create a link that always takes you to this
          page, then click "Edit" to change the bookmark's name. You can save
          fractals and Storymatic programs as well.{{
            connected
              ? session
                ? " Additionally, your bookmarks are synced to the cloud and your other devices."
                : " If you log in, you can even sync bookmarks to the cloud!"
              : ""
          }}
        </p>

        <template v-for="(bookmark, index) in bookmarks">
          <HStack v-if="editing">
            <input
              class="bookmark second-layer focusline"
              :value="bookmark.name"
              style="flex: 1"
              @input="bookmark.name = $event.target!.value"
            />

            <div
              class="second-layer trash-div"
              @click="bookmarks.splice(index, 1)"
            >
              <TrashIcon class="trash" />
            </div>
          </HStack>

          <a
            v-else-if="bookmark.url.includes('?') || bookmark.url.includes('#')"
            class="bookmark second-layer hoverline focusline"
            :href="bookmark.url"
            style="text-decoration: none; color: inherit"
          >
            {{ bookmark.name }}
          </a>

          <RouterLink
            v-else
            class="bookmark second-layer hoverline focusline"
            :to="bookmark.url"
            style="text-decoration: none; color: inherit"
          >
            {{ bookmark.name }}
          </RouterLink>
        </template>
      </VStack>
    </div>
  </Teleport>

  <LogInForm v-model:open="logInOpen" />

  <Modal :open="conflict !== undefined && session !== '' && isUpdating">
    <p>{{ updateMessage }}</p>

    <template #buttons>
      <Button @click="forceUpdate?.()">OK</Button>

      <Button cancel @click="isUpdating = false">Cancel</Button>
    </template>
  </Modal>
</template>

<style lang="scss" scoped>
  .icon {
    transform: scale(0.83);
    cursor: pointer;
    fill: currentColor;

    &.fullscreen {
      transform: none;
      stroke: white !important;
      stroke-width: 0.5em;
      stroke-linecap: round;
    }
  }

  .container {
    position: fixed;
    top: calc(3.5em + 1px);
    left: 0;
    z-index: 9;
    width: var(--app-width);
    height: calc(var(--app-height) - 3.5em - 1px);
    background-color: #0004;
    visibility: hidden;
    opacity: 0;
    -webkit-backdrop-filter: blur(0.5em);
    backdrop-filter: blur(0.5em);
    transition: var(--transitions), opacity 0.3s;

    &.fullscreen {
      top: 0;
      height: var(--app-height);
    }

    @media (max-width: 400px) {
      top: calc(2.5em + 1px);
      height: calc(var(--app-height) - 2.5em - 1px);

      &.fullscreen {
        top: 0;
        height: var(--app-height);
      }
    }

    &.open {
      opacity: 1;
    }

    &.visible {
      visibility: visible;
    }
  }

  .bookmarks {
    position: relative;
    left: 400px;
    width: 400px;
    max-width: 100%;
    height: 100%;
    margin-left: auto;
    overflow-y: auto;
    transition: var(--transitions), left 0.3s;

    &.bookmarks {
      border-radius: 0;
    }

    .fullscreen & {
      padding-top: calc(3.5em + 0.5em + 1px);

      @media (max-width: 400px) {
        padding-top: calc(2.5em + 0.5em + 1px);
      }
    }

    .open & {
      left: 0;
    }
  }

  .bookmark {
    width: 100%;
    height: 2.5em;
    font-size: inherit;
    cursor: pointer;
  }

  .trash {
    width: 1.5em;
    height: 1.5em;
    color: var(--text-color);
  }

  .trash-div {
    height: 2.5em;
  }
</style>
