<script lang="ts" setup>
  import { useMediaQuery } from "@vueuse/core";
  import articles from "virtual:blog-articles";
  import { ref } from "vue";
  import Card from "../../components/Card.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import InlineButton from "../../components/InlineButton.vue";
  import LargeTitle from "../../components/LargeTitle.vue";
  import LogInForm from "../../components/LogInForm.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
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
</script>

<template>
  <LogInForm v-model:open="open" />

  <DocumentDisplay>
    <LargeTitle>Blog Articles</LargeTitle>

    <p v-if="session">
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

    <p v-else>
      <InlineButton @click="open = true">Log in</InlineButton>
      to a zSnout account or
      <InlineButton @click="open = true">sign up</InlineButton>
      to receive notification for new blog posts.
    </p>

    <SearchableCardGrid :sizes="['list', 'small']" v-slot="{ size }">
      <template v-for="article in articles" :key="article.path">
        <Card
          v-if="!filter || article.frontmatter.category?.includes(filter)"
          :date="article.frontmatter.date"
          :description="article.frontmatter.excerpt || ''"
          :label="article.frontmatter.category"
          :title="
            size === 'small'
              ? dateOf(article.frontmatter.date)
              : titleOf(article.path.slice(6, -3))
          "
          :to="article.path.slice(0, -3)"
        />
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
