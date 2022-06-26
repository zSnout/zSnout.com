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
        description="View amazing fractal images and interact with them live on your computer."
        keywords="fractals math mandelbrot set"
        title="Fractal Explorer"
        to="/fractal-explorer"
      />

      <Card
        description="Experiment with 4 versions of a programming language designed by zSnout."
        keywords="programming languages custom"
        title="Storymatic"
        to="/storymatic/"
      />

      <Card
        description="A leap of leopards (look it up) appear and fill your device's screen."
        keywords="images"
        title="Leopards"
        to="/leopards"
      />

      <Card
        description="Draw on a rotating tabletop using our easy to use drawing interface."
        keywords="images draw"
        title="Drawing Spinner"
        to="/spinner"
      />

      <Card
        description="It's like a random number generator, but it generates the same number every time."
        keywords="random numbers passkey password"
        title="Same Number Generator"
        to="/same-number-generator"
      />

      <Card
        description="Run your lambda calculus functions in our interactive editor."
        keywords="programming languages"
        title="Lambda Calculus Evaluator"
        to="/lambda-calculus/evaluator"
      />

      <Card
        description="Convert your lambda calculus functions into valid and runnable JavaScript code."
        keywords="programming languages javascript"
        title="Lambda Calculus Compiler"
        to="/lambda-calculus/compiler"
      />

      <Card
        description="We're not sure why you'd go to the 404 page, but here's a link if you need it."
        keywords="not found error page"
        title="404 page"
        to="/404"
      />

      <Card
        description="A collection of pages used to debug and test interfaces such as the canvas APIs."
        keywords="webgl canvas"
        title="Debug Pages"
        to="/debug/"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
