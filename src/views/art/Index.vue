<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import ImageCard from "../../components/ImageCard.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import Title from "../../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Art Pages</Title>

    <p>
      <em>
        "Beauty is in the eye of the beholder; behold, for I see beauty here." -
        Sun Tzu, The Art of War
      </em>
    </p>

    <SearchableCardGrid>
      <ImageCard
        description="Create your own blobby gradient with a custom size and color scheme."
        keywords="circles"
        src="/images/art/blobby-gradient.png"
        title="Blobby Gradient"
        to="/art/blobby-gradient"
      />

      <ImageCard
        description="Watch some simple yet entrancing fires bounce across your screen."
        keywords="fires multi"
        src="/images/art/fireline.png"
        title="Fireline"
        to="/art/fireline"
      />

      <ImageCard
        description="Watch an amazing display of colorful rectangles and change their sizes."
        keywords="squares"
        src="/images/art/rectangles.png"
        title="Rectangles"
        to="/art/rectangles"
      />

      <ImageCard
        description="View a vast and vivid variety of vibrant ellipses (and V-words)."
        keywords="circles"
        src="/images/art/ellipses.png"
        title="Ellipses"
        to="/art/ellipses"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
