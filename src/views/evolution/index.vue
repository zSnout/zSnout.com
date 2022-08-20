<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import ImageCard from "../../components/ImageCard.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import Title from "../../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Evolution</Title>

    <p>
      While making zSnout, I've gone through seven major versions of the
      website. I'm trying to get a recreation of the homepage from each one
      here, bit by bit.
    </p>

    <SearchableCardGrid :sizes="['normal', 'small', 'icon']">
      <ImageCard
        alt="The homepage of zSnout 6"
        description="The first version to use the Vue framework."
        src="/images/evolution/v6.png"
        title="zSnout 6"
        to="/evolution/v6"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
