<script lang="ts" setup>
  import { Prop, PropType } from "vue";
  import TokiPonaText from "./TokiPonaText.vue";

  export type Content = string | ContentArray | NoBreak;

  export interface ContentArray extends ReadonlyArray<Content> {}

  export interface NoBreak {
    readonly type: "nobreak";
    readonly content: Content;
  }

  defineProps({
    hidden: Boolean,
    content: 0 as Prop<Content, { required: true }>,
  });
</script>

<template>
  <p v-if="content == undefined" />

  <p
    v-else-if="typeof content == 'string'"
    :style="{ visibility: hidden ? 'hidden' : undefined }"
  >
    <TokiPonaText :content="content" />
  </p>

  <div v-else-if="Array.isArray(content)">
    <TokiPonaContent v-for="item in content" :content="item" :hidden="hidden" />
  </div>

  <div v-else-if="content.type == 'nobreak'" style="margin-top: -1em">
    <TokiPonaContent :content="content.content" :hidden="hidden" />
  </div>
</template>
