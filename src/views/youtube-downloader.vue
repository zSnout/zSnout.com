<script lang="ts" setup>
  import { reactive, ref } from "vue";
  import { VideoFormat } from "../../shared.client";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import Heading from "../components/Heading.vue";
  import HStack from "../components/HStack.vue";
  import MiddleText from "../components/MiddleText.vue";
  import Spacer from "../components/Spacer.vue";
  import VStack from "../components/VStack.vue";
  import { socket } from "../main";

  const url = ref("");
  const title = ref("");
  const thumbnail = ref("");
  const formats = reactive<VideoFormat[]>([]);
  const showForm = ref(true);
  const waiting = ref(false);

  function score(format: VideoFormat) {
    // We give `hasVideo` a weight of 2 and `hasAudio` a weight of 1.
    // This returns a bitmask between 1 and 3.

    return 2 * +format.hasVideo + +format.hasAudio;
  }

  function onSubmit(event: Event) {
    event.preventDefault();

    let videoID = url.value;
    try {
      const id = new URL(videoID).searchParams.get("v");
      if (id) videoID = id;
    } catch {}

    showForm.value = false;
    waiting.value = true;
    socket.emit("youtube:request", videoID);

    socket.once("youtube:results", (id, info) => {
      if (id !== videoID) return;

      waiting.value = false;
      thumbnail.value = info.thumbnail;
      title.value = info.title;

      formats.push(
        ...info.formats
          .filter((video) => {
            const quality = video.quality || video.audio;

            return (
              info.formats.find((other) => {
                return (
                  (other.quality || other.audio) === quality &&
                  other.hasAudio === video.hasAudio &&
                  other.hasVideo === video.hasVideo
                );
              }) === video
            );
          })
          .sort((a, b) => parseInt(b.quality) - parseInt(a.quality))
          .sort((a, b) => score(b) - score(a))
      );
    });
  }
</script>

<template>
  <DocumentDisplay center>
    <MiddleText>
      <Heading v-if="showForm || waiting">YouTube Video Downloader</Heading>

      <form v-if="showForm" @submit="onSubmit">
        <VStack>
          <Field v-model="url" placeholder="Paste the video URL..." />

          <Button @click="onSubmit">Download Video</Button>
        </VStack>
      </form>

      <div v-if="waiting">Downloading your video...</div>

      <template v-if="!showForm && !waiting">
        <Heading>{{ title }}</Heading>

        <img class="second-layer thumbnail" :src="thumbnail" />

        <VStack>
          <HStack v-for="format in formats" class="format" stretch>
            <p class="format">
              {{
                format.quality ||
                (format.audio === "AUDIO_QUALITY_LOW" ? "Low" : "High")
              }}
            </p>

            <Spacer />

            <p class="format">
              {{
                format.hasVideo && format.hasAudio
                  ? "Video/Audio"
                  : format.hasVideo
                  ? "Video Only"
                  : format.hasAudio
                  ? "Audio Only"
                  : "Nonexistent"
              }}
            </p>

            <Spacer />
            <Spacer />
            <Spacer />

            <a class="second-layer" :href="format.url" target="_blank">
              Download
            </a>
          </HStack>
        </VStack>
      </template>
    </MiddleText>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .format {
    display: flex;
    align-items: center;
    justify-content: center;
    white-space: pre;
  }

  .thumbnail.thumbnail {
    position: sticky;
    top: 3.5em + 2em;
    width: 100%;
    margin-bottom: 1em;
    padding: 0;

    @media (max-width: 400px) {
      top: 2.5em + 1.5em;
    }
  }
</style>
