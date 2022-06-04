<script lang="ts" setup>
  import Card from "../components/Card.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import Title from "../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Welcome to zSnout!</Title>

    <SearchableCardGrid>
      <Card
        description="We're not sure why you'd go to the 404 page, but here's a link if you need it."
        keywords="not found error page"
        title="404 page"
        to="/404"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
