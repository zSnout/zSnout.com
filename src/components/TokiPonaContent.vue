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

  <div v-else-if="content.type == 'nobreak'" class="nobreak">
    <TokiPonaContent :content="content.content" :hidden="hidden" />
  </div>

  <p v-else />
</template>

<style lang="scss" scoped>
  p {
    margin: 0;
  }

  div {
    margin: 0;

    &.nobreak > p:first-child {
      margin-top: -1em;
    }
  }
</style>
