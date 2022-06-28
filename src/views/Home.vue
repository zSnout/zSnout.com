<script lang="ts" setup>
  import BlurredImage from "../components/BlurredImage.vue";
  import Cover from "../components/Cover.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import ImageCard from "../components/ImageCard.vue";
  import LargeTitle from "../components/LargeTitle.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import VStack from "../components/VStack.vue";
</script>

<template>
  <BlurredImage class="hide-600" src="/images/fractal-explorer.png" />

  <BlurredImage
    class="hide-800"
    :sensitivity="2"
    src="/images/art/fireline.png"
  />

  <BlurredImage :sensitivity="3" src="/images/art/ellipses.png" />

  <DocumentDisplay>
    <Cover>
      <VStack class="stack" :space="2">
        <LargeTitle>Welcome to zSnout.</LargeTitle>

        <p class="text-color" style="line-height: 2">
          zSnout is a website made by
          <!-- prettier-ignore -->
          <a href="https://github.com/zsakowitz" target="_blank" class="link">Zachary Sakowitz</a>
          to create and test various projects. This edition, zSnout 7, is a
          collection of many of these projects and their archived versions, such
          as the four versions of Storymatic.
        </p>

        <p class="text-color" style="margin-top: -1em">
          Scroll down and select a page!
        </p>
      </VStack>
    </Cover>

    <SearchableCardGrid style="position: relative; z-index: 2">
      <ImageCard
        description="View amazing fractal images and interact with them live on your computer."
        keywords="math mandelbrot set"
        src="/images/fractal-explorer.png"
        title="Fractal Explorer"
        to="/fractal-explorer"
      />

      <ImageCard
        description="See a carefully curated collection of various interactive fractals."
        keywords="math"
        src="/images/fractal-presets/index.png"
        title="Fractal Presets"
        to="/fractal-presets"
      />

      <ImageCard
        description="Experiment with 4 versions of a programming language designed by zSnout."
        keywords="programming languages custom"
        src="/images/storymatic/index.png"
        title="Storymatic"
        to="/storymatic/"
      />

      <ImageCard
        description="See a collection of simple yet beautiful examples of abstract art."
        keywords="gradients squares rectangles circles ellipses"
        src="/images/art/index.png"
        title="Art"
        to="/art/"
      />

      <ImageCard
        description="A leap of leopards (look it up) appear and fill your device's screen."
        keywords="images"
        src="/images/leopards.png"
        title="Leopards"
        to="/leopards"
      />

      <ImageCard
        description="Draw on a rotating tabletop using our simple drawing interface."
        keywords="spinner drawings"
        src="/images/drawing/turntable.png"
        title="Turntable"
        to="/drawing/turntable"
      />

      <ImageCard
        description="Draw on a table that moves beneath your finger as you create."
        keywords="moving drawings"
        src="/images/drawing/slider.png"
        title="Slider"
        to="/drawing/slider"
      />

      <ImageCard
        description="Watch this real-time animation of bouncing and merging circles. It's great as a screensaver."
        keywords="bouncing screensavers"
        src="/images/metaballs.png"
        title="Metaballs"
        to="/metaballs"
      />

      <ImageCard
        description="Watch this real-time animation of bouncing and merging circles. It's great as a screensaver."
        keywords="bouncing screensavers"
        src="/images/reaction-time-tester.png"
        title="Reaction Time Tester"
        to="/reaction-time-tester"
      />

      <ImageCard
        description="Run your lambda calculus functions in our interactive editor."
        keywords="programming languages"
        src="/images/lambda-calculus/evaluator.png"
        title="Lambda Calculus Evaluator"
        to="/lambda-calculus/evaluator"
      />

      <ImageCard
        description="Convert your lambda calculus functions into valid and runnable JavaScript code."
        keywords="programming languages javascript"
        src="/images/lambda-calculus/compiler.png"
        title="Lambda Calculus Compiler"
        to="/lambda-calculus/compiler"
      />

      <ImageCard
        description="It's like a random number generator, but it generates the same number every time."
        keywords="random numbers passkey password"
        src="/images/same-number-generator.png"
        title="Same Number Generator"
        to="/same-number-generator"
      />

      <ImageCard
        description="We're not sure why you'd go to the 404 page, but here's a link if you need it."
        keywords="not found error page"
        src="/images/404.png"
        title="404 page"
        to="/404"
      />

      <ImageCard
        description="A collection of pages used to debug and test interfaces such as the canvas APIs."
        keywords="webgl canvas"
        src="/images/debug/index.png"
        title="Debug Pages"
        to="/debug/"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>

<style scoped>
  .stack {
    position: relative;
    z-index: 2;
    user-select: none;
    pointer-events: none;
  }

  .link {
    pointer-events: initial;
  }

  @media (max-width: 800px) {
    .hide-800 {
      display: none;
    }
  }

  @media (max-width: 600px) {
    .hide-600 {
      display: none;
    }
  }
</style>
