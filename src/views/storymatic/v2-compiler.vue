<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Compiler2 from "../../components/storymatic/Compiler2.vue";
  import Editor2 from "../../components/storymatic/Editor2.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`#importall

$money = 500
$eggs = 0
$name = (no name)

@start
  @input $name What is your name?
  @market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      @option Eggs
        @eggs
      @option Go Back
        @pass
    @market

@eggs
  @number $egg How many dozens do you want to buy?
  $eggprice @= 6 * $egg
  @nowait $egg dozen eggs will cost $$$eggprice.

  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      @option Yes
        $money -= $eggprice
        $eggs += $egg
      @option No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor2 v-model="code" round />

    <Compiler2 :code="code" round />
  </EditorAndViewer>
</template>
