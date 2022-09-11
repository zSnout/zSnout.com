<script lang="ts" setup>
  import { useDebounceFn } from "@vueuse/shared";
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import HStack from "../components/HStack.vue";
  import MiddleText from "../components/MiddleText.vue";
  import VStack from "../components/VStack.vue";

  // I took inspiration from https://glitch.com/~next-slide-please.

  const event = ref("try");
  const media = ref<HTMLVideoElement>();
  const playing = ref(false);
  const ready = ref(false);
  const url = ref("");
  const id = ref("");

  const slideNum = ref(1);
  const prevFrame = ref<1 | 2 | 3>(2);
  const activeFrame = ref<1 | 2 | 3>(1);
  const nextFrame = ref<1 | 2 | 3>(3);

  const hideEvent = useDebounceFn(() => (event.value = ""), 500);

  function handler({ action: a }: MediaSessionActionDetails) {
    const action =
      a === "previoustrack" ? "first" : a === "nexttrack" ? "previous" : "next";

    if (ready.value) {
      if (action === "first") {
        prevFrame.value = 2;
        activeFrame.value = 1;
        nextFrame.value = 3;
        slideNum.value = 1;
      } else if (action === "previous" && slideNum.value > 1) {
        slideNum.value--;

        [prevFrame.value, activeFrame.value, nextFrame.value] = [
          nextFrame.value,
          prevFrame.value,
          activeFrame.value,
        ];
      } else if (action === "next") {
        slideNum.value++;

        [prevFrame.value, activeFrame.value, nextFrame.value] = [
          activeFrame.value,
          nextFrame.value,
          prevFrame.value,
        ];
      }
    } else {
      event.value = action;
      hideEvent();
    }
  }

  function onReady() {
    playing.value = true;
    navigator.mediaSession.setActionHandler("pause", handler);
    navigator.mediaSession.setActionHandler("play", handler);
    navigator.mediaSession.setActionHandler("previoustrack", handler);
    navigator.mediaSession.setActionHandler("nexttrack", handler);
    navigator.mediaSession.setActionHandler("seekbackward", handler);
    navigator.mediaSession.setActionHandler("seekforward", handler);

    media.value!.volume = 0.01;
  }

  function onSubmit(_event: Event) {
    _event.preventDefault();

    if (ready.value) return;

    const match = url.value.match(/\/d\/([A-Za-z0-9\-\_]+)/);

    if (!match) {
      event.value = "invalid";
      return;
    }

    id.value = match[1];
    ready.value = true;
  }

  function getPreviewUrl(frameNum: 1 | 2 | 3) {
    const p = prevFrame.value;
    const a = activeFrame.value;
    const num = slideNum.value;
    nextFrame.value;

    return `https://docs.google.com/presentation/d/${
      id.value
    }/preview?rm=minimal&slide=${
      a === frameNum ? num : p === frameNum ? num - 1 : num + 1
    }`;
  }
</script>

<template>
  <Teleport to="body">
    <video
      ref="media"
      class="media"
      loop
      playsinline
      src="https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4"
      @playing="onReady"
    />

    <div v-if="ready" ref="presentation" class="presentation">
      <iframe
        :class="{ active: activeFrame === 1 }"
        class="frame"
        :src="getPreviewUrl(1)"
      />

      <iframe
        :class="{ active: activeFrame === 2 }"
        class="frame"
        :src="getPreviewUrl(2)"
      />

      <iframe
        :class="{ active: activeFrame === 3 }"
        class="frame"
        :src="getPreviewUrl(3)"
      />
    </div>
  </Teleport>

  <DocumentDisplay center>
    <MiddleText v-if="!ready">
      <form @submit="onSubmit">
        <VStack>
          <Button
            v-if="!playing"
            style="margin-bottom: 1em"
            @click="media?.play(), $event.preventDefault()"
          >
            Click this button to set everything up.
          </Button>

          <HStack v-if="playing" style="margin-bottom: 1em">
            <Field v-model="url" placeholder="Presentation URL" />

            <Button @click="onSubmit">Start</Button>
          </HStack>

          <p>
            <em v-if="event">
              {{
                event === "try"
                  ? "Try clicking the stem!"
                  : event === "invalid"
                  ? "Invalid presentation code."
                  : `Going to the ${event} slide.`
              }}
            </em>

            <em v-else style="color: transparent">placeholder</em>
          </p>
        </VStack>
      </form>
    </MiddleText>

    <template #help>
      <h1>How do I use this?</h1>

      <p>
        This page lets you control a Google Slides presentation using an AirPod
        as a remote.
      </p>

      <p>
        Get a pair of AirPods 3 or Pro. To control your presentation, click the
        stem:
      </p>

      <p>
        <strong>once</strong>
        to go to the
        <strong>next slide,</strong>
        <br />
        <strong>twice</strong>
        to go to the
        <strong>previous slide,</strong>
        and
        <br />
        <strong>thrice</strong>
        to go to the
        <strong>first slide.</strong>
      </p>

      <p>Reload or close this app to exit.</p>

      <h1>Alternative Setup</h1>

      <p>
        If you don't have a pair of AirPods 3 or Pro, you can use any set of
        remote headphones. Simply tap the
        <br />
        <strong>play/pause</strong>
        button to go to the next slide,
        <br />
        <strong>previous track</strong>
        to go to the previous slide, and
        <br />
        <strong>next track</strong>
        to go to the first slide.
      </p>

      <p>
        For AirPods 1 and 2, you can modify the double-tap actions in Settings
        to correspond to "play/pause" and "next track," allowing you to go to
        the next and previous slides.
      </p>
    </template>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .media {
    position: fixed;
    top: 0;
    left: 0;
    opacity: 0;
    pointer-events: none;
  }

  .presentation {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 6;
    width: var(--app-width);
    height: var(--app-height);
    overflow: hidden;
    background-color: black;
  }

  .frame {
    position: fixed;
    top: 0;
    left: 0;
    width: var(--app-width);
    height: var(--app-height);
    border: 0;
    opacity: 0;
    pointer-events: none;

    &.active {
      opacity: 1;
      pointer-events: initial;
    }
  }
</style>
