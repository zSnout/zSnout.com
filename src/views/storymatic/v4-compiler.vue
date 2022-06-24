<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor4 from "../../components/storymatic/Editor4.vue";
  import Compiler4 from "../../components/storymatic/Compiler4.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`money = 500
eggs = 0

name = prompt "What is your name?"
await market()

market = ->
  print "#{name}, you have $#{money} and #{eggs} dozen eggs."
  idx = await select "What would you like to buy?", ["Eggs", "Go Back"]
  if idx == 0
    await eggs()
  await market()

eggs = ->
  egg = +(prompt "How many dozen eggs do you want to buy?")
  eggprice = 6 * egg
  print "#{egg} dozen eggs will cost $#{eggprice}."
  if money > eggprice
    idx = await select "Are you sure you want to buy them?", ["Yes", "No"]
    if idx == 0
      money -= eggprice
      eggs += egg
    else
      print "Okay, let's go back to the store."
  else if money == eggprice
    print "You have just enough money for these eggs."
    money -= eggprice
    eggs += egg
  else
    print "You don't have enough money for these eggs!"
`);
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor4 v-model="code" round />

    <Compiler4 :code="code" round />
  </EditorAndViewer>
</template>
