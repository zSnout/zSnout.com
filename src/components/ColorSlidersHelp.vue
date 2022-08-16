<script setup lang="ts">
  defineProps<{ page: string; note?: string }>();
</script>

<template>
  <h1>Color Sliders</h1>

  <p>
    {{ page }} and many other pages on zSnout share the same set of sliders, so
    it's good to get used to them. The best way to understand the sliders is to
    play with them, although a description is included anyway.{{
      note && ` ${note}`
    }}
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

  <p>
    <strong>Separation</strong>
    changes the level of smoothness between colors. If you increase
    "Separation", the fractal may only use two or three colors instead of a
    range of many. For example, a palette using every color in the rainbow may
    switch to only using red, lime, turquoise, and purple.
  </p>

  <p>
    <strong>Randomness</strong>
    changes each color in the scene by a random amount. This amount is animated
    and changes from frame to frame. The slider controls how much each color is
    allowed to deviate from its normal value.
  </p>

  <p>
    <strong>Grayscale</strong>
    forces colors that are within a range of grayness to turn completely gray.
    For example, setting "Grayscale" to a low value would only turn white,
    black, and very dark or very light colors into their grayscale forms, while
    preserving other colors.
  </p>

  <p>
    <strong>Overcoloring</strong>
    chooses how much to "overcolorify" pixels. A fully overcolored frame will
    transform any light red and dark red to the brightest form of red possible.
    While similar to saturation, this has a different effect.
  </p>
</template>
