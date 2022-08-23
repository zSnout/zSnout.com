<script lang="ts" setup>
  import images from "virtual:image-list";
  import { ref } from "vue";
  import BlurredImage from "../components/BlurredImage.vue";
  import Cover from "../components/Cover.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import ImageCard from "../components/ImageCard.vue";
  import LargeTitle from "../components/LargeTitle.vue";
  import LogInForm from "../components/LogInForm.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import VStack from "../components/VStack.vue";
  import { homeIcons } from "../composables/useHomeIcons";
  import { useRandomItem } from "../composables/useRandomItem";
  import { timeLeftBeforeAccountDeletion, username } from "../main";

  const a = useRandomItem(images);
  const b = useRandomItem(images);
  const c = useRandomItem(images);

  const open = ref(false);
</script>

<template>
  <BlurredImage class="hide-600" :src="a" />

  <BlurredImage class="hide-800" :sensitivity="2" :src="b" />

  <BlurredImage :sensitivity="3" :src="c" />

  <LogInForm v-model:open="open" />

  <DocumentDisplay>
    <Cover>
      <VStack class="stack" :space="2">
        <LargeTitle v-if="username">
          Welcome to zSnout, {{ username }}.
        </LargeTitle>

        <LargeTitle v-else>Welcome to zSnout.</LargeTitle>

        <p class="text-color" style="line-height: 2">
          zSnout is a website made by
          <!-- prettier-ignore -->
          <a href="https://github.com/zsakowitz" target="_blank" class="link">Zachary Sakowitz</a>
          to create and test various projects. This edition, zSnout 7, is a
          collection of many of these projects and their archived versions, such
          as the four versions of Storymatic. You can support Zachary at
          <!-- prettier-ignore -->
          <a class="link" href="https://store.zsnout.com/" target="_blank">the zSnout store.</a>
        </p>

        <p class="text-color" style="margin-top: -1em">
          Scroll down and select a page!
        </p>

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
    </Cover>

    <SearchableCardGrid :sizes="['normal', 'small', 'icon']">
      <ImageCard
        v-for="card in homeIcons"
        :alt="card.alt"
        :description="card.description"
        :src="card.src"
        :title="card.title"
        :to="card.to === 'login' ? undefined : card.to"
        @click="card.to === 'login' && (open = true)"
      />
    </SearchableCardGrid>

    <template #help>
      Looks like you've found the Help menu! Many pages on zSnout have this
      button in the top-right corner. Simply click it to reveal instructions and
      more details about the page you're viewing.
    </template>
  </DocumentDisplay>
</template>

<style scoped>
  .stack {
    position: relative;
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
