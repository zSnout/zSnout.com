<script lang="ts" setup>
  import { computed } from "vue";
  import JSONViewer from "../JSONViewer.vue";
  import { Storymatic } from "./runner2";

  const props = defineProps<{ code: string; round?: boolean }>();
  const story = computed(() => Storymatic.parse(props.code));
</script>

<template>
  <JSONViewer :round="round" :value="story" />
</template>
