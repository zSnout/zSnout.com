<script lang="ts" setup>
  import EditorAndViewer from "../../components/EditorAndViewer.vue";
  import Compiler from "../../components/lambda/Compiler.vue";
  import Editor from "../../components/lambda/Editor.vue";
  import { useLocationHash } from "../../composables/useLocationHash";

  const code = useLocationHash(
    `
U = λf.(f f)
Y = λf.(λx.(x x) λx.(f λy.((x x) y)))
void = λx.(U U)

succ = λn.λf.λx.f(n f x)
0 = λf.λx.x
1 = λf.λx.f x
2 = succ 1
3 = succ 2
4 = succ 3
5 = succ 4
6 = succ 5
7 = succ 6
8 = succ 7
9 = succ 8
10 = succ 9

10
`.trim()
  );
</script>

<template>
  <EditorAndViewer dual-editor>
    <Editor v-model="code" round />

    <Compiler :code="code" round />
  </EditorAndViewer>
</template>
