<script lang="ts" setup>
  import AnimatedList from "../components/AnimatedList.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import { ref } from "vue";
  import { useEventListener } from "@vueuse/core";
  import HStack from "../components/HStack.vue";
  import VStack from "../components/VStack.vue";
  import Button from "../components/Button.vue";
  import Spacer from "../components/Spacer.vue";

  function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  function showNext() {
    index++;
    if (index <= 75) oldNums.value.unshift(currentNum.value);
    if (index >= 75) return (index = 75);
    currentNum.value = nums[index];
  }

  function showPrevious() {
    index--;
    if (index < 0) index = 0;
    if (index >= 0) oldNums.value.shift();
    currentNum.value = nums[index];
  }

  const nums = shuffle(
    Array.from({ length: 75 }, (_, i) => "BINGO"[Math.floor(i / 15)] + (i + 1))
  );
  const currentNum = ref(nums[0]);
  const oldNums = ref<string[]>([]);
  let index = 0;

  useEventListener("keydown", (event) => {
    if (!event.altKey && !event.ctrlKey && !event.metaKey) {
      if (event.key === "ArrowLeft") {
        showPrevious();
      } else if (event.key === "ArrowRight") {
        showNext();
      }
    }
  });
</script>

<template>
  <DocumentDisplay>
    <HStack style="min-height: 100%">
      <div class="large" style="flex: 1; display: flex">
        <VStack class="large-inner" style="flex: 1">
          <div class="number">
            {{ currentNum }}
          </div>

          <Spacer />

          <HStack class="buttons">
            <Button @click="showPrevious">Previous Number</Button>

            <Button @click="showNext">Next Number</Button>
          </HStack>
        </VStack>
      </div>

      <div class="old">
        <AnimatedList>
          <div v-for="num in oldNums" :key="num">
            {{ num }}
          </div>
        </AnimatedList>
      </div>
    </HStack>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  .large {
    width: 75%;
    font-weight: bold;
    text-align: center;

    @media (max-width: 600px) {
      width: 66%;
      font-size: 8em;
    }
  }

  .number {
    position: sticky;
    top: 6rem;
    font-size: 12em;
  }

  .large-inner {
    position: sticky;
    top: 0;
  }

  .buttons {
    position: sticky;
    bottom: 2rem;
    font-size: 1rem;

    @media (max-width: 400px) {
      bottom: 1.5rem;
    }
  }

  .old {
    width: 25%;
    height: 100%;
    overflow-y: auto;
    font-size: 6em;
    text-align: center;

    @media (max-width: 600px) {
      width: 34%;
      font-size: 4em;
    }
  }
</style>
