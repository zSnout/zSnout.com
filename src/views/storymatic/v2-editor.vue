<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor2 from "../../components/storymatic/Editor2.vue";
  import Viewer2 from "../../components/storymatic/Viewer2.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`$money = 500
$eggs = 0
$name = (no name)

@start
  $name = @input What is your name?
  @run market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @menu What would you like to buy?
    Eggs
      @eggs
    Go Back
      @pass
  @market

@eggs
  $egg = @number How many dozen eggs do you want to buy?
  $eggprice @= 6 * $egg
  $egg dozen eggs will cost $$$eggprice.
  @menu Are you sure you want to buy them?
    @option Yes
      @if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      @elseif $money = $eggprice
        You have just enough money for these eggs.
        $money -= $eggprice
        $eggs += $egg
      @else
        You don't have enough money for these eggs!
    @option No
      Okay, let's go back to the store.`);
</script>

<template>
  <EditorAndViewer>
    <Editor2 v-model="code" round />

    <Viewer2 :code="code" />
  </EditorAndViewer>
</template>
