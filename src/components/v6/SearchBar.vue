<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from "vue";
  import SearchItem from "./SearchItem.vue";

  export interface Link {
    to: string | (() => void);
    title: string;
    description: string;
    show?: boolean;
    keywords?: string;
  }

  let { links, autofocus } = defineProps<{
    links: Link[];
    autofocus?: boolean;
  }>();

  for (let link of links) {
    let keywords = link.keywords?.split(/\s+/) || [];
    keywords.push(...link.title.match(/\w+/g)!);
    link.keywords = keywords.map((x) => x.toLowerCase()).join(" ");
  }

  let field = ref("");

  function matches(keywords: string, query: string) {
    if (!query.trim()) return true;

    return query
      .trim()
      .split(" ")
      .every((e) => keywords.includes(e));
  }

  function getGridColumnCount() {
    if (linksEl.value) {
      let style = getComputedStyle(linksEl.value).gridTemplateColumns;
      return style.split(" ").length;
    } else return 0;
  }

  function onKeyDown(event: KeyboardEvent) {
    if (autofocus && (event.key === "Escape" || event.key == "/")) {
      event.preventDefault();
      fieldEl.value?.focus();
    }

    let active = document.activeElement;
    if (fieldEl.value && active == fieldEl.value) {
      if (event.key == "ArrowRight" || event.key == "ArrowDown")
        (linksEl.value?.children[0] as HTMLElement).focus();
    } else if (linksEl.value && active?.parentElement == linksEl.value) {
      if (event.key == "ArrowLeft") {
        (active.previousElementSibling as HTMLElement)?.focus();
      } else if (event.key == "ArrowRight") {
        (active.nextElementSibling as HTMLElement)?.focus();
      } else if (event.key == "ArrowUp" || event.key == "ArrowDown") {
        let travel = getGridColumnCount() * (event.key == "ArrowUp" ? -1 : 1);
        let index = Array.from(linksEl.value.children).indexOf(active);

        let newIndex = Math.max(index + travel, 0);
        newIndex = Math.min(newIndex, linksEl.value.children.length - 1);

        let next = linksEl.value.children[newIndex];
        (next as HTMLElement)?.focus();
      }

      if (event.key.startsWith("Arrow")) event.preventDefault();
    }
  }

  let fieldEl = ref<HTMLElement | null>(null);
  let linksEl = ref<HTMLElement | null>(null);

  onMounted(() => {
    if (autofocus && !scrollY && !matchMedia("(pointer: coarse)").matches) {
      fieldEl.value?.focus();
    }

    window.addEventListener("keydown", onKeyDown);
  });

  onUnmounted(() => {
    window.removeEventListener("keydown", onKeyDown);
  });
</script>

<template>
  <div class="search-box">
    <input
      ref="fieldEl"
      v-model="field"
      class="search second-layer focusline"
      placeholder="Search..."
      type="search"
    />

    <div ref="linksEl" class="links">
      <SearchItem
        v-for="(link, i) in links"
        v-show="link.show || matches(link.keywords!, field.toLowerCase())"
        :key="i"
        :description="link.description"
        :title="link.title"
        :to="link.to"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .search {
    display: block;
    width: 100%;
    height: 2em;
    margin-bottom: 0.75em;
    color: inherit;
    font-size: inherit;

    &::-webkit-search-cancel-button {
      display: none;
    }
  }

  .links {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(12em, 100%), 1fr));
    gap: 0.75em;
  }

  .link-cap {
    flex-grow: 100;
  }

  .daily-tip {
    margin-block-start: -0.5em;
  }
</style>
