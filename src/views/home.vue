<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import images from "virtual:image-list";
  import { ref } from "vue";
  import BlurredImage from "../components/BlurredImage.vue";
  import Cover from "../components/Cover.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import ImageCard from "../components/ImageCard.vue";
  import InlineButton from "../components/InlineButton.vue";
  import LargeTitle from "../components/LargeTitle.vue";
  import LogInForm from "../components/LogInForm.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import VStack from "../components/VStack.vue";
  import { Group, groups, homeIcons } from "../composables/useHomeIcons";
  import { useRandomItem } from "../composables/useRandomItem";
  import { timeLeftBeforeAccountDeletion, username } from "../main";

  const a = useRandomItem(images);
  const b = useRandomItem(images);
  const c = useRandomItem(images);

  const open = ref(false);
  const filter = ref<Group | "">("");
  const isDesktop = useMediaQuery("(min-width: 1080px)");
</script>

<template>
  <BlurredImage class="hide-600" :src="a" />

  <BlurredImage class="hide-800" :sensitivity="2" :src="b" />

  <BlurredImage :sensitivity="3" :src="c" />

  <LogInForm v-model:open="open" />

  <DocumentDisplay>
    <VStack class="stack" :space="2">
      <LargeTitle v-if="username">
        Welcome to zSnout, {{ username }}.
      </LargeTitle>

      <LargeTitle v-else>Welcome to zSnout.</LargeTitle>

      <p v-if="username && timeLeftBeforeAccountDeletion !== false">
        Hey {{ username }}! Your account will be deleted in
        {{
          timeLeftBeforeAccountDeletion >= 120 * 1000
            ? `${~~(timeLeftBeforeAccountDeletion / (60 * 1000))} minutes`
            : `${~~(timeLeftBeforeAccountDeletion / 1000)} seconds`
        }}
        unless you verify it with the email we sent you.
      </p>
    </VStack>

    <SearchableCardGrid :sizes="['normal', 'small', 'icon']">
      <template v-for="(card, index) in homeIcons" :key="index">
        <ImageCard
          v-if="!filter || card.group.includes(filter)"
          :alt="card.alt"
          :description="card.description"
          :label="card.isIndex ? 'menu' : ''"
          :src="card.src"
          :title="card.title"
          :to="card.to === 'login' ? undefined : card.to"
          @click="card.to === 'login' && (open = true)"
        />
      </template>
    </SearchableCardGrid>

    <template #help>
      <p>
        Looks like you've found the Help menu! Many pages on zSnout have this
        button in the top-right corner. Simply click it to reveal instructions
        and more details about the page you're viewing.
      </p>

      <p>
        Some of the cards on the homepage are marked with a triangle that says
        "menu." These pages lead to submenus with even more pages, such as
        Storymatic or the blog.
      </p>

      <p>
        You can also
        {{
          isDesktop
            ? "use the sidebar to filter the pages."
            : "use the table of contents to filter the pages."
        }}
      </p>
    </template>

    <template #aside>
      <p><strong>Filter By:</strong></p>

      <nav>
        <ul>
          <li>
            <InlineButton @click="filter = ''">Reset Filter</InlineButton>
          </li>

          <li v-for="name in groups" :key="name">
            <InlineButton
              :active="filter === name"
              @click="filter === name ? (filter = '') : (filter = name)"
            >
              {{ name[0].toUpperCase() + name.slice(1) }}
            </InlineButton>
          </li>
        </ul>
      </nav>
    </template>
  </DocumentDisplay>
</template>

<style scoped>
  .stack {
    position: relative;
    margin-bottom: 2em;
    user-select: none;
    pointer-events: none;
  }

  .link {
    pointer-events: initial;
  }

  @media (max-width: 800px) {
    .hide-800 {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .hide-600 {
      display: none;
    }
  }
</style>
