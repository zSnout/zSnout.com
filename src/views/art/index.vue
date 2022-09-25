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

    <SearchableCardGrid :sizes="['normal', 'small', 'icon']">
      <ImageCard
        alt="A gradient of differently sized rainbow blobs in puddles of darkness"
        description="Watch a live animation of multicolored puddles moving across your screen."
        src="/images/art/rainbow-blobs.png"
        title="Rainbow Blobs"
        to="/art/rainbow-blobs"
      />

      <ImageCard
        alt="A three dimensional tunnel filled with colors and lasers"
        description="View an amazing interactive and animated 3D tunnel of colors and lasers."
        src="/images/art/the-tunnel.png"
        title="The Tunnel"
        to="/art/the-tunnel"
      />

      <ImageCard
        alt="A gradient being created from thick paint strokes"
        description="Create your own blobby gradient with a custom size and color scheme."
        keywords="circles"
        src="/images/art/blobby-gradient.png"
        title="Blobby Gradient"
        to="/art/blobby-gradient"
      />

      <ImageCard
        alt="Several fires stacked on each other with a red border and yellow flames"
        description="Watch some simple yet entrancing fires bounce across your screen."
        keywords="fires multi"
        src="/images/art/fireline.png"
        title="Fireline"
        to="/art/fireline"
      />

      <ImageCard
        alt="A rainbow gradient created by randomizing pixel colors and their lightness."
        description="A rainbow gradient created by randomizing pixel colors and their lightness."
        keywords="gradient randomized"
        src="/images/art/pixelated-rainbow.png"
        title="Pixelated Rainbow"
        to="/art/pixelated-rainbow"
      />

      <ImageCard
        alt="A black background with some white blobs that merge together"
        description="Watch this real-time animation of bouncing and merging circles. It's great as a screensaver."
        keywords="bouncing screensavers"
        src="/images/art/metaballs.png"
        title="Metaballs"
        to="/art/metaballs"
      />

      <ImageCard
        alt="Multicolored overlapping rectangles with unique border styles"
        description="Watch an amazing display of colorful rectangles and change their sizes."
        keywords="squares"
        src="/images/art/rectangles.png"
        title="Rectangles"
        to="/art/rectangles"
      />

      <ImageCard
        alt="Multicolored overlapping ellipses with unique border styles"
        description="View a vast and vivid variety of vibrant ellipses (and V-words)."
        keywords="circles"
        src="/images/art/ellipses.png"
        title="Ellipses"
        to="/art/ellipses"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
