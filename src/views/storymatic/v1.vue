<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import HStack from "../../components/HStack.vue";
  import Editor1 from "../../components/storymatic/Editor1.vue";
  import Viewer1 from "../../components/storymatic/Viewer1.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`@global $money = 500
@global $eggs = 0
@global $name = (no name)
$eggprice = 6

start
  @if $name = (no name)
    $name = @input What is your name?
  @run market

market
  $name, you have $$money and $eggs dozen eggs.
  @menu What would you like to buy?
    Eggs
      @context
        @run eggs
    Go Back
      @pass
  @run market

eggs
  $egg = @number How many dozen eggs do you want to buy?
  $eggprice *= $egg
  $egg dozen eggs will cost $$eggprice.
  @menu Are you sure you want to buy them?
    Yes
      @if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      @elseif $money = $eggprice
        You have just enough money for these eggs.
        $money -= $eggprice
        $eggs += $egg
      @else
        You don't have enough money for these eggs!
    No
      Okay, let's go back to the store.
  @stop`);
</script>

<template>
  <DocumentDisplay center explicit-height max-width>
    <HStack
      class="stack"
      :space="0.75"
      style="height: 100%; justify-content: center"
    >
      <Editor1 v-model="code" round style="flex: 1; max-width: 800px" />

      <Viewer1 class="viewer" :code="code" />
    </HStack>
  </DocumentDisplay>
</template>

<style scoped>
  .viewer {
    width: min(400px, 100%);
  }

  @media screen and (max-width: 850px) {
    .stack.stack {
      flex-direction: column;
    }

    .viewer {
      width: 100%;
    }
  }
</style>
