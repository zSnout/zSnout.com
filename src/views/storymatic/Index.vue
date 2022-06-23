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
        description="Use our Python-based language to create your own text adventures."
        title="V1 Editor"
        to="/storymatic/v1"
      />

      <Card
        description="Experiment with the first JavaScript edition of the Storymatic language."
        title="V2 Editor"
        to="/storymatic/v2"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
