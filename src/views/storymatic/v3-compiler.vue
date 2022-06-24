<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Compiler3 from "../../components/storymatic/Compiler3.vue";
  import Editor3 from "../../components/storymatic/Editor3.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`$money = 500
$eggs = 0

$name = @input "What is your name?"
@market

def @market
  "$name, you have $$money and $eggs dozen eggs."
  @menu "What would you like to buy?"
    @option "Eggs"
      @eggsfn
    @option "Go Back"
  @market

def @eggsfn
  $egg = @inputint "How many dozen eggs do you want to buy?"
  $eggprice = 6 * $egg
  "$egg dozen eggs will cost $$eggprice."
  @menu "Are you sure you want to buy them?"
    @option "Yes"
      if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      else if $money = $eggprice
        "You have just enough money for these eggs."
        $money -= $eggprice
        $eggs += $egg
      else
        "You don't have enough money for these eggs!"
    @option "No"
      "Okay, let's go back to the store."`);
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor3 v-model="code" round />

    <Compiler3 :code="code" round />
  </EditorAndViewer>
</template>
