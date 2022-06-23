<script lang="ts" setup>
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import Title from "../../components/Title.vue";
  import Card from "../../components/Card.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Storymatic</Title>

    <SearchableCardGrid>
      <Card
        description="Use our custom programming language to create your own text adventures."
        title="V1 Editor"
        to="/storymatic/v1"
      />

      <Card
        description="Experiment with the second edition of the Storymatic language."
        title="V2 Editor"
        to="/storymatic/v2"
      />

      <Card
        description="Create your own stories using the third version of Storymatic."
        title="V3 Editor"
        to="/storymatic/v3"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
