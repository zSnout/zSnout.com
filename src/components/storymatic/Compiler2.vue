<script lang="ts" setup>
  import { computed } from "@vue/reactivity";
  import JSONViewer from "../JSONViewer.vue";
  import { Storymatic } from "./runner2";

  const props = defineProps<{ code: string }>();
  const story = computed(() => Storymatic.parse(props.code));
</script>

<template>
  <JSONViewer :value="story" />
</template>
