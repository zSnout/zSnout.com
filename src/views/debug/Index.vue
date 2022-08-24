<script lang="ts" setup>
  import Card from "../../components/Card.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import Title from "../../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Debug Pages</Title>

    <SearchableCardGrid :sizes="['normal', 'small']">
      <Card
        description="Creates a code editor using Ace and tests the ability to use dynamic refs and options."
        keywords="code"
        title="Ace Editor"
        to="/debug/code-editor"
      />

      <Card
        description="A short document with a sidebar."
        title="Asides"
        to="/debug/asides"
      />

      <Card
        description="Moves a yellow bar across the screen in a test of using Vue's refs with WebGL uniforms."
        keywords="webgl animations"
        title="Reactive Uniforms"
        to="/debug/webgl/uniforms"
      />

      <Card
        description="Contains a gradient and reacts to changes in location and scale. Tests canvas direction."
        keywords="webgl canvas direction"
        title="XY Plane and Gradient"
        to="/debug/webgl/grid"
      />

      <Card
        description="A grayscale Mandelbrot Set with boxes showing the current bounds, next zoom bounds, and pointer location."
        keywords="webgl fractals"
        title="Mandelbrot Set"
        to="/debug/webgl/mandelbrot"
      />

      <Card
        description="A rotating box with multicolored faces."
        keywords="webgl 3d"
        title="3 Dimensions"
        to="/debug/webgl/3-dimensions"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
