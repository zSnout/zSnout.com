<script lang="ts" setup>
  import Card from "../../components/Card.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import Title from "../../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Art Pages</Title>

    <SearchableCardGrid>
      <Card
        description="Create your own blobby gradient with a custom size and color scheme."
        keywords="circles"
        title="Blobby Gradient"
        to="/art/blobby-gradient"
      />

      <Card
        description="Watch some simple yet entrancing fires bounce across your screen."
        keywords="fires multi"
        title="Fireline"
        to="/art/fireline"
      />

      <Card
        description="Watch an amazing display of colorful rectangles and change their sizes."
        keywords="squares"
        title="Rectangles"
        to="/art/rectangles"
      />

      <Card
        description="View a vast and vivid variety of vibrant ellipses (and V-words)."
        keywords="circles"
        title="Ellipses"
        to="/art/ellipses"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
