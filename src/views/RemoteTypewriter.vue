<script lang="ts" setup>
  import { computed, ref, watch } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import MiddleText from "../components/MiddleText.vue";
  import VStack from "../components/VStack.vue";
  import HStack from "../components/HStack.vue";

  const media = ref<HTMLVideoElement>();
  const playing = ref(false);
  const ready = ref(false);

  type Set = string | Set[];

  const sets: Set[][] = [
    [],
    ["", "  ab", " cde", " fgh"],
    ["", " ijk", " lmn", " opq"],
    ["", " rst", " uvw", " xyz"],
  ];

  sets[0] = sets;
  sets[1][0] = sets[1];
  sets[2][0] = sets[2];
  sets[3][0] = sets[3];

  const setA = ref<0 | 1 | 2 | 3>(0);
  const setB = ref<0 | 1 | 2 | 3>(0);
  const text = ref("");

  function handler({ action: a }: MediaSessionActionDetails) {
    const action = a === "previoustrack" ? 3 : a === "nexttrack" ? 2 : 1;

    if (setA.value) {
      if (setB.value) {
        const char = sets[setA.value][setB.value][action];
        const last2 = text.value[text.value.length - 2];
        const puncDist = last2 === "," || last2 === "." ? 2 : 1;

        if (char === ",") {
          text.value = text.value.slice(0, -puncDist) + ", ";
        } else if (char === ".") {
          text.value = text.value.slice(0, -puncDist) + ". ";
        } else {
          text.value += char;
        }

        setA.value = 0;
        setB.value = 0;
      } else {
        setB.value = action;
      }
    } else {
      setA.value = action;
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

  function setDesc(set: Set): string {
    if (typeof set === "string") {
      if (set.length === 1) return set.replace(" ", "_");
      return set.slice(1).replace(" ", "_");
    } else {
      return (set as string[])
        .slice(1)
        .map((e) => e.slice(1).replace(" ", "_"))
        .join(" ");
    }
  }

  watch(text, () => {
    const last = text.value[text.value.length - 1];
    const last2 = text.value[text.value.length - 2];

    sets[1][1] = last === " " ? (last2 === "," ? " .ab" : " ,ab") : "  ab";
  });

  const nextSets = computed(() => {
    if (setA.value) {
      if (setB.value) {
        return sets.slice(1).map((text, i) =>
          i === setA.value - 1
            ? text
                .slice(1)
                .map((char, j) => {
                  return j === setB.value - 1 ? setDesc(char) : "   ";
                })
                .join(" ")
            : ""
        );
      } else {
        return sets
          .slice(1)
          .map((text, i) => (i === setA.value - 1 ? setDesc(text) : ""));
      }
    } else {
      return sets.slice(1).map(setDesc);
    }
  });

  const output = computed(() => {
    return text.value
      .replace(/\bi\b/g, "I")
      .replace(/\. \w|^\w/g, (x) => x.toUpperCase())
      .replace(/ $/, "_");
  });
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
  </Teleport>

  <DocumentDisplay center>
    <MiddleText v-if="!ready">
      <VStack>
        <Button
          v-if="!playing"
          style="margin-bottom: 1.5em"
          @click="media?.play(), $event.preventDefault()"
        >
          Click this button to set everything up.
        </Button>

        <p style="margin-bottom: 1em">
          {{ output || "Well, start typing something!" }}
        </p>

        <HStack stretch class="characters">
          <p>{{ nextSets[0] }}</p>
          <p>{{ nextSets[1] }}</p>
          <p>{{ nextSets[2] }}</p>
        </HStack>
      </VStack>
    </MiddleText>

    <template #help>
      <p>This page lets you type using an AirPod as a remote.</p>

      <p>
        Get a pair of AirPods 3 or Pro. At the beginning of each character,
        every value from a-z and spaces will be available. Click the stem
      </p>

      <p>
        <strong>once</strong>
        to pick the first character set,

        <br />

        <strong>twice</strong>
        to pick the second set, and

        <br />

        <strong>thrice</strong>
        to pick the final set.
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

  .characters {
    font-family: Courier, monospace;
    white-space: pre;
  }
</style>
