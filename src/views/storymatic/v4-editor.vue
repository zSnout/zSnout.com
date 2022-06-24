<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Editor4 from "../../components/storymatic/Editor4.vue";
  import Viewer4 from "../../components/storymatic/Viewer4.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(`money = 500
eggs = 0
name = await prompt "What is your name?"

market = ->
  print "#{name}, you have $#{money} and #{eggs} dozen eggs."
  idx = await select "What would you like to buy?", ["Eggs", "Go Back"]
  if idx == 0
    await eggsfn()
  await market()

eggsfn = ->
  egg = +(await prompt "How many dozen eggs do you want to buy?")
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

await market()`);
</script>

<template>
  <EditorAndViewer>
    <Editor4 v-model="code" round />

    <Viewer4 :code="code" round />
  </EditorAndViewer>
</template>
