<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import articles from "virtual:blog-articles";
  import { ref } from "vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import InlineButton from "../../components/InlineButton.vue";
  import LargeTitle from "../../components/LargeTitle.vue";
  import LogInForm from "../../components/LogInForm.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import VStack from "../../components/VStack.vue";
  import { isDark } from "../../composables/isDark";
  import { dateOf } from "../../composables/useDateOf";
  import {
    connected,
    session,
    socket,
    titleOf,
    willNotifyForBlog,
  } from "../../main";

  const categories = articles
    .map((e) => e.frontmatter.category)
    .filter((e): e is string => !!e)
    .filter((e, i, a) => a.indexOf(e) === i);

  articles.sort((a, b) => {
    if (!a.frontmatter.date) return 1;
    if (!b.frontmatter.date) return -1;

    const dateA: Date = new Date(a.frontmatter.date);
    const dateB: Date = new Date(b.frontmatter.date);

    return dateB.valueOf() - dateA.valueOf();
  });

  const filter = ref<string>("");
  const isDesktop = useMediaQuery("(min-width: 1080px)");
  const open = ref(false);

  const colors: Record<string, number> = {
    camp: 0,
    code: 4,
    language: 2,
    math: 1,
    meta: 5,
    saurs: 3,
  };

  function colorOf(label?: string) {
    return colors[label || ""];
  }

  const lightColors = [
    "#990000",
    "#996300",
    "#999900",
    "#009900",
    "#000099",
    "#990099",
  ];

  const darkColors = [
    "#ff6666",
    "#ffc966",
    "#f0f060",
    "#66ff66",
    "#8888ff",
    "#ff66ff",
  ];

  function gradientFor(dark: boolean, category?: string) {
    const pc = 75 * Math.random() + 12.5;
    const color = (dark ? lightColors : darkColors)[colorOf(category)];

    const bg = `linear-gradient(to right, transparent, transparent ${pc}%, ${color})`;
    return `background: ${bg}`;
  }
</script>

<template>
  <LogInForm v-model:open="open" />

  <DocumentDisplay small>
    <LargeTitle>Blog Articles</LargeTitle>

    <p v-if="session" class="text-color">
      You
      {{ willNotifyForBlog ? "are currently receiving" : "will not receive" }}
      notifications for updates to the zSnout blog.

      <template v-if="connected">
        Click
        <InlineButton
          @click="
            socket.emit('blog:update:will-notify', session, !willNotifyForBlog)
          "
        >
          here
        </InlineButton>
        to opt-{{ willNotifyForBlog ? "out of" : "in to" }} notifications.
      </template>

      <template v-else>
        You cannot change notification settings when offline.
      </template>
    </p>

    <p v-else class="text-color">
      <InlineButton @click="open = true">Log in</InlineButton>
      to a zSnout account or
      <InlineButton @click="open = true">sign up</InlineButton>
      to receive notification for new blog posts.
    </p>

    <SearchableCardGrid :sizes="['list']">
      <template v-for="article in articles" :key="article.path">
        <VStack
          v-if="!filter || article.frontmatter.category?.includes(filter)"
          class="card"
          :space="0"
          :style="gradientFor(isDark, article.frontmatter.category)"
          :data-keywords="`${
            article.frontmatter.author !== 'sakawi'
              ? article.frontmatter.author
              : ''
          } ${article.frontmatter.keywords || ''} ${dateOf(
            article.frontmatter.date
          )}`"
        >
          <RouterLink class="no-link" :to="article.path.slice(0, -3)">
            <p class="title">
              {{ titleOf(article.path.slice(6, -3)) }}
            </p>
          </RouterLink>

          <!-- category -->

          <p
            v-if="
              article.frontmatter.author &&
              article.frontmatter.author !== 'sakawi'
            "
            class="intro"
          >
            By {{ article.frontmatter.author }}
          </p>

          <p v-if="article.frontmatter.date" class="intro">
            Published on {{ dateOf(article.frontmatter.date) }}
          </p>

          <p v-if="article.frontmatter.excerpt" class="spacer" />

          <p class="text-color">{{ article.frontmatter.excerpt }}</p>
        </VStack>
      </template>
    </SearchableCardGrid>

    <template #help>
      <p>
        You can
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

          <li v-for="name in categories" :key="name">
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

<style lang="scss" scoped>
  .card {
    padding: 0.5em 0;
    padding-right: 0.5em;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }

  .title {
    margin: 0;
    font-weight: 600;
    font-size: 1.5em;
  }

  .intro {
    margin-top: 0;
    margin-bottom: 2em;
    color: #404040;
    font-weight: 600;
    font-size: 0.875em;
    line-height: 1.75em;

    .dark & {
      color: #c0c0c0;
      font-weight: 500;
    }

    + .intro {
      margin-top: -2em;
    }
  }

  .spacer {
    height: 0.5rem;
  }
</style>
