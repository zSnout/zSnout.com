<script lang="ts" setup>
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import ImageCard from "../components/ImageCard.vue";
  import SearchableCardGrid from "../components/SearchableCardGrid.vue";
  import Title from "../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Fractal Presets</Title>

    <SearchableCardGrid :sizes="['normal', 'small', 'icon']">
      <ImageCard
        alt="An iconic image of the Mandelbrot Set with a multicolored background"
        description="View math's poster child of fractals and diagrams: the amazing Mandelbrot Set!"
        force-reload
        src="/images/fractal-presets/mandelbrot-set.webp"
        title="Mandelbrot Set"
        to="/fractal-explorer?equation=z%5E2%2Bc"
      />

      <ImageCard
        alt="A Mandelbrot Set with three outer bulbs as opposed to one"
        description="A Mandelbrot Set-like fractal with multiple flower petals instead of one."
        force-reload
        src="/images/fractal-presets/multibrot-set.webp"
        title="Multibrot Set"
        to="/fractal-explorer?equation=z%5E4%2Bc"
      />

      <ImageCard
        alt="A black burning ship with a purple and blue background"
        description="Named for an image in its bottom-right corner, this is a close cousin of Mandelbrot."
        force-reload
        src="/images/fractal-presets/burning-ship.webp"
        title="Burning Ship"
        to="/fractal-explorer?equation=abs%28z%29%5E2%2Bc%23fx&theme=trig"
      />

      <ImageCard
        alt="A strange black shape surrounded by a purple and green halo"
        description="Another cousin of Mandelbrot with amazing swirls mimicking wind patterns."
        force-reload
        src="/images/fractal-presets/feather-fractal.webp"
        title="Feather Fractal"
        to="/fractal-explorer?equation=z%5E3%2F%28z%23z%2B1%29%2Bc%23fy&limit=10&theme=trig&altColors=true"
      />

      <ImageCard
        alt="A many-layered red shape with green shadows"
        description="An infinite flower with petals getting smaller and smaller as they fade out."
        force-reload
        src="/images/fractal-presets/flower.webp"
        title="Flower"
        to="/fractal-explorer?equation=z%5E2%2Bz%2Bc&theme=gradient"
      />

      <ImageCard
        alt="A shape with many Mandelbrot bulbs in its multicolored interior"
        description="An inverted version of the Mandelbrot Set fading to the end of the world."
        force-reload
        src="/images/fractal-presets/raindrop.webp"
        title="Raindrop"
        to="/fractal-explorer?equation=z%5E2%2B1%2Fc"
      />

      <ImageCard
        alt="A parabola rotated with its tail to the right and surrounded by darkness"
        description="A telescope with pillars shrinking into nothingness and an infinitely long tail."
        force-reload
        src="/images/fractal-presets/telescope.webp"
        title="Telescope"
        to="/fractal-explorer?equation=z%5E2%2Bz%2B1%2Fc&theme=gradient&split=true&xStart=-2&xEnd=6&yStart=-4&yEnd=4"
      />

      <ImageCard
        alt="A many-colored shape with infinite tails, each smaller than the last"
        description="Several rays of sunlight fading into eternal light. Not to be confused with the actual sun."
        force-reload
        src="/images/fractal-presets/sunlight.webp"
        title="Sunlight"
        to="/fractal-explorer?equation=z%5E2-z%2B1%2Fc&theme=gradient&split=true&xStart=-4&xEnd=4&yStart=-4&yEnd=4"
      />

      <ImageCard
        alt="Rays of turquoise and deep blue centered on a point with a pink and white background"
        description="A snowflake with infinite layers stacked on top of each other. Includes an amazing gradient."
        force-reload
        src="/images/fractal-presets/snowflake.webp"
        title="Snowflake"
        to="/fractal-explorer?equation=z^3-z^2-z-c&theme=gradient"
      />

      <ImageCard
        alt="Purple and blue orbs glowing within a yellow background"
        description="An amazing attempt at recreating Picasso-style artwork using math and glowing tails."
        force-reload
        src="/images/fractal-presets/puddles.webp"
        title="Puddles"
        to="/fractal-explorer?equation=%28z%5E3%2B1%29%2F%28cz%5E2%2B1%29&theme=gradient&xStart=-8&xEnd=8&yStart=-8&yEnd=8"
      />

      <ImageCard
        alt="A Mandelbrot bulb outlined by circles instead of a solid background"
        description="A necklace created from circles containing the Mandelbrot Set and an amazing rainbow."
        force-reload
        src="/images/fractal-presets/mandelbrots-necklace.webp"
        title="Mandelbrot's Necklace"
        to="/fractal-explorer?equation=z-%28zzz%2Bz*%28c-1%29-c%29%2F%283zz%2Bc-1%29"
      />

      <ImageCard
        alt="A spike of multicolored circles shooting into the top right corner"
        description="A fractal known as the Lantern."
        force-reload
        src="/images/fractal-presets/lantern.webp"
        title="Lantern"
        to="/fractal-explorer?equation=1%2F%28z%5E4%2Bc%2B1%29"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
~/.zshrc