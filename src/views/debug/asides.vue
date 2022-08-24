<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
</script>

<template>
  <DocumentDisplay>
    <template #aside>
      <h1>hello world</h1>

      <p>my aside</p>
    </template>

    <h1>main content</h1>
  </DocumentDisplay>
</template>
