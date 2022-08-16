<script setup lang="ts">
  defineProps<{ page: string; note?: string }>();
</script>

<template>
  <h1>Color Sliders</h1>

  <p>
    {{ page }} and many other pages on zSnout share the same set of sliders, so
    it's good to get used to them. The best way to understand the sliders is to
    play with them, although a description is included anyway. {{ note }}
  </p>

  <p>
    <strong>Color Offset</strong>
    rotates through the color wheel. If you slide it a bit, red will turn to
    orange, orange to yellow, etc. If you slide it a lot, red will turn to
    green, orange to blue, etc.
  </p>

  <p>
    <strong>Color Repetition</strong>
    modifies how often colors appear. By moving it, you may make a color cycle
    of red-orange-yellow-green-blue-purple change to
    red-green-blue-red-green-blue in the same amount of space. Notice how red
    appears more often now.
  </p>

  <p>
    <strong>Color Spectrum</strong>
    changes how many colors appear. By setting this to halfway, only half of the
    colors on the color wheel will appear (e.g. red, orange, and yellow).
  </p>
</template>
