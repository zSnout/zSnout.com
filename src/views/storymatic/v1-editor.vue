<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor1 from "../../components/storymatic/Editor1.vue";
  import Viewer1 from "../../components/storymatic/Viewer1.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`@global $money = 500
@global $eggs = 0
@global $name = (no name)

start
  $name = @input What is your name?
  @run market

market
  $name, you have $$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      Eggs
        @run eggs
      Go Back
        @pass
    @run market

eggs
  $egg = @number How many dozens do you want to buy?
  $eggprice = 6
  $eggprice *= $egg
  @nowait $egg dozen eggs will cost $$eggprice.
  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      Yes
        $money -= $eggprice
        $eggs += $egg
      No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);
</script>

<template>
  <EditorAndViewer>
    <Editor1 v-model="code" round />

    <Viewer1 :code="code" />
  </EditorAndViewer>
</template>
