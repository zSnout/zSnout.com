<script lang="ts" setup>
  import { CSSProperties, reactive } from "vue";
  import FullscreenDisplay from "../components/FullscreenDisplay.vue";
  import { useResolved } from "../composables/useResolved";

  interface Image extends CSSProperties {
    id: number;
    src: string;
  }

  const images = [
    "https://images.squarespace-cdn.com/content/v1/551d418fe4b05cce10fa9d0c/1507494796262-FIJNUGTBA1463ZMEFU2S/snowleopard.png?format=1000w",
    "https://freepngimg.com/thumb/leopard/11-2-leopard-transparent.png",
    "https://cdn.picpng.com/leopard/leopard-transparent-23628.png",
    "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/07af64a2-7d6d-4552-9279-33758b2622af/d6fsw1b-86acec80-fb81-46fd-82ad-77e5e862ce0f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA3YWY2NGEyLTdkNmQtNDU1Mi05Mjc5LTMzNzU4YjI2MjJhZlwvZDZmc3cxYi04NmFjZWM4MC1mYjgxLTQ2ZmQtODJhZC03N2U1ZTg2MmNlMGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.dt_neG0NLQBUkBiRkKzbQmfuyrDFOHfvmAfPVEiHN2I",
    "https://cdn.shopify.com/s/files/1/1371/3415/products/leopard-cub-jungle-animals-wall-decal-sticker_60e9d319-14fc-493e-875a-d1a0726eef74_grande.png?v=1475787809",
  ].map((url) => {
    return new Promise<HTMLImageElement>((resolve) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.src = url;
    });
  });

  const loaded = useResolved(images);

  const urls = reactive<Image[]>([]);

  setInterval(() => {
    if (loaded.length) {
      const image = loaded[~~(Math.random() * loaded.length)];
      const height = (200 * image.naturalHeight) / image.naturalWidth;

      urls.push({
        id: Math.random(),
        left: `calc(${Math.random()} * var(--app-width) - 100px)`,
        src: image.src,
        top: `calc(${Math.random()} * var(--app-height) - ${height / 2}px)`,
        transform: `rotate(${Math.random() * 360}deg)`,
      });
    }
  });
</script>

<template>
  <FullscreenDisplay>
    <img
      v-for="url in urls"
      :key="url.id"
      class="image"
      :src="url.src"
      :style="url"
    />

    <div class="overlay">
      <p>
        {{
          loaded.length === images.length
            ? ""
            : loaded.length
            ? `Downloaded ${loaded.length} images...`
            : "Downloading leopards..."
        }}
      </p>
    </div>
  </FullscreenDisplay>
</template>

<style scoped>
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: var(--app-width);
    height: var(--app-height);
    font-size: 2em;
  }

  .image {
    position: fixed;
    width: 200px;
  }
</style>
