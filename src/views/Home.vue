<script lang="ts" setup>
  import images from "virtual:image-list";
  import { ref } from "vue";
  import BlurredImage from "../components/BlurredImage.vue";
  import Cover from "../components/Cover.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import ImageCard from "../components/ImageCard.vue";
  import LargeTitle from "../components/LargeTitle.vue";
  import LogInForm from "../components/LogInForm.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import VStack from "../components/VStack.vue";
  import { useRandomItem } from "../composables/useRandomItem";
  import {
    connected,
    session,
    timeLeftBeforeAccountDeletion,
    username,
  } from "../main";
  import Button from "../components/Button.vue";

  const a = useRandomItem(images);
  const b = useRandomItem(images);
  const c = useRandomItem(images);

  const open = ref(false);
</script>

<template>
  <BlurredImage class="hide-600" :src="a" />

  <BlurredImage class="hide-800" :sensitivity="2" :src="b" />

  <BlurredImage :sensitivity="3" :src="c" />

  <LogInForm v-model:open="open" />

  <DocumentDisplay>
    <Cover>
      <VStack class="stack" :space="2">
        <LargeTitle v-if="username">
          Welcome to zSnout, @{{ username }}.
        </LargeTitle>

        <LargeTitle v-else>Welcome to zSnout.</LargeTitle>

        <p class="text-color" style="line-height: 2">
          zSnout is a website made by
          <!-- prettier-ignore -->
          <a href="https://github.com/zsakowitz" target="_blank" class="link">Zachary Sakowitz</a>
          to create and test various projects. This edition, zSnout 7, is a
          collection of many of these projects and their archived versions, such
          as the four versions of Storymatic. You can support Zachary at
          <!-- prettier-ignore -->
          <a class="link" href="https://store.zsnout.com/" target="_blank">the zSnout store.</a>
        </p>

        <p class="text-color" style="margin-top: -1em">
          Scroll down and select a page!
        </p>

        <p v-if="username && timeLeftBeforeAccountDeletion !== false">
          Hey @{{ username }}! Your account will be deleted in
          {{
            timeLeftBeforeAccountDeletion >= 120 * 1000
              ? `${~~(timeLeftBeforeAccountDeletion / (60 * 1000))} minutes`
              : `${~~(timeLeftBeforeAccountDeletion / 1000)} seconds`
          }}
          unless you verify it with the email we sent you.
        </p>
      </VStack>
    </Cover>

    <SearchableCardGrid
      :sizes="['normal', 'small', 'icon']"
      style="position: relative; z-index: 2"
    >
      <ImageCard
        v-if="connected && session"
        alt="An outline of a person's head and upper body"
        bg="white"
        description="Log out of your account, change your username, and modify other account settings."
        keywords="log out"
        src="/images/my-account.png"
        title="My Account"
        to="/my-account"
      />

      <ImageCard
        v-if="connected && !session"
        alt="Someone holding up a sign saying 'Sign Up'"
        description="Create a new account on zSnout to save fractals, Storymatic projects, and more."
        keywords="account"
        src="/images/account/sign-up.png"
        title="Sign Up or Log In"
        @click="open = true"
      />

      <ImageCard
        alt="The Mandelbrot Set in a raindow background"
        description="View amazing fractal images and interact with them live on your computer."
        keywords="math mandelbrot set"
        src="/images/fractal-explorer.png"
        title="Fractal Explorer"
        to="/fractal-explorer"
      />

      <ImageCard
        alt="Light green blobs in a blue background"
        description="See a carefully curated collection of various interactive fractals."
        keywords="math"
        src="/images/fractal-presets/index.png"
        title="Fractal Presets"
        to="/fractal-presets"
      />

      <ImageCard
        alt="A sample Storymatic program about groceries"
        description="Experiment with 4 versions of a programming language designed by zSnout."
        keywords="programming languages custom"
        src="/images/storymatic/index.png"
        title="Storymatic"
        to="/storymatic/"
      />

      <ImageCard
        alt="Multicolored overlapping rectangles with unique border styles"
        description="See a collection of simple yet beautiful examples of abstract art."
        keywords="gradients squares rectangles circles ellipses"
        src="/images/art/index.png"
        title="Art"
        to="/art/"
      />

      <ImageCard
        alt="A strangely colored bookshelf"
        description="Use our color controls to make strange images from your camera"
        keywords="colors editor image live overcolorifier"
        src="/images/camera-modifier.png"
        title="Camera Modifier"
        to="/camera-modifier"
      />

      <ImageCard
        alt="An ASCII art version of Zachary's face (the creator of zSnout)"
        description="Watch your own face and world transform into letters and symbols."
        keywords="camera live text"
        src="/images/ascii-art.png"
        title="ASCII Art"
        to="/ascii-art"
      />

      <ImageCard
        v-if="connected && session"
        alt="A notepad"
        description="Create notes that will sync across your devices using our simple editor."
        keywords="text editor cloud syncing"
        src="/images/my-notes.png"
        title="My Notes"
        to="/my-notes"
      />

      <ImageCard
        alt="A black ball at a corner in a maze"
        description="Twist and turn your phone or tablet to move a ball around in a randomly generated maze."
        keywords="orientation mobile"
        src="/images/maze-game.png"
        title="Maze Game"
        to="/maze-game"
      />

      <ImageCard
        alt="An AirPod superimposed on top of the Google Slides logo"
        description="Use your AirPods 3 or Pro as a remote for a Google Slides presentation."
        keywords="google presentation airpods remote"
        src="/images/hands-free-slides.png"
        title="Hands Free Slides"
        to="/hands-free-slides"
      />

      <ImageCard
        alt="Leopards stacked on top of each other"
        description="A leap of leopards (look it up) appear and fill your device's screen."
        keywords="images"
        src="/images/leopards.png"
        title="Leopards"
        to="/leopards"
      />

      <ImageCard
        alt="A flower created from a rainbow gradient with a vignette on its exterior."
        description="Experiment with amazing transformations of the complex plane."
        keywords="math number equation"
        src="/images/complex-explorer.png"
        title="Complex Explorer"
        to="/complex-explorer"
      />

      <ImageCard
        alt="A white circle with black segments drawn within it"
        description="Draw on a rotating tabletop using our simple drawing interface."
        keywords="spinner drawings"
        src="/images/drawing/turntable.png"
        title="Turntable"
        to="/drawing/turntable"
      />

      <ImageCard
        alt="A sign saying 'Hi' with arrows pointing right"
        description="Draw on a table that moves beneath your finger as you create."
        keywords="moving drawings"
        src="/images/drawing/slider.png"
        title="Slider"
        to="/drawing/slider"
      />

      <ImageCard
        alt="A clock with flames trailing behind it"
        description="See what your reaction time is with our simple tester."
        keywords="speed"
        src="/images/reaction-time-tester.png"
        title="Reaction Time Tester"
        to="/reaction-time-tester"
      />

      <ImageCard
        alt="A lambda calculus program defining the numerals 0 through 9"
        description="Run your lambda calculus functions in our interactive editor."
        keywords="programming languages"
        src="/images/lambda-calculus/evaluator.png"
        title="Lambda Calculus Evaluator"
        to="/lambda-calculus/evaluator"
      />

      <ImageCard
        alt="A comparison of the lambda calculus Mockingbird combinator being applied to itself and its JavaScript counterpart."
        description="Convert your lambda calculus functions into valid and runnable JavaScript code."
        keywords="programming languages javascript"
        src="/images/lambda-calculus/compiler.png"
        title="Lambda Calculus Compiler"
        to="/lambda-calculus/compiler"
      />

      <ImageCard
        alt="A preview of the 'Same Number Generator' page"
        description="It's like a random number generator, but it generates the same number every time."
        keywords="random numbers passkey password"
        src="/images/same-number-generator.png"
        title="Same Number Generator"
        to="/same-number-generator"
      />

      <ImageCard
        alt="A symbol representing an image with the text 'image not found' beneath the symbol."
        description="We're not sure why you'd go to the 404 page, but here's a link if you need it."
        keywords="not found error page"
        src="/images/404.png"
        title="404 page"
        to="/404"
      />

      <ImageCard
        alt="A magnifying glass inspects a bug hidden amongst bookshelves"
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
