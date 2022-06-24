<script lang="ts" setup>
  import Card from "../../components/Card.vue";
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import GridSpacer from "../../components/GridSpacer.vue";
  import SearchableCardGrid from "../../components/SearchableCardGrid.vue";
  import Title from "../../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>Storymatic</Title>

    <SearchableCardGrid>
      <Card
        description="Use our custom programming language to create your own text adventures."
        title="V1 Editor"
        to="/storymatic/v1-editor"
      />

      <Card
        description="Experiment with the second edition of the Storymatic language."
        title="V2 Editor"
        to="/storymatic/v2-editor"
      />

      <Card
        description="Create your own stories using the simple third version of Storymatic."
        title="V3 Editor"
        to="/storymatic/v3-editor"
      />

      <Card
        description="Use the first version of Storymatic based off of CoffeeScript and TypeScript."
        title="V4 Editor"
        to="/storymatic/v4-editor"
      />

      <GridSpacer />

      <div />

      <Card
        description="Watch the behind the scenes magic of how Storymatic 2 runs your code."
        title="V2 Compiler"
        to="/storymatic/v2-compiler"
      />

      <Card
        description="View the JavaScript representation of any Storymatic 3 code you've written."
        title="V3 Compiler"
        to="/storymatic/v3-compiler"
      />

      <Card
        description="See the TypeScript and JavaScript versions of your Storymatic 4 code."
        title="V4 Compiler"
        to="/storymatic/v4-compiler"
      />

      <GridSpacer />

      <Card
        description="Learn all the tips and tricks of Storymatic 1 in our online documentation."
        title="V1 Documentation"
        to="https://zsnout.github.io/story.py/"
      />

      <div />

      <div />

      <Card
        description="Master the Storymatic 4 language with our interactive playgrounds."
        title="V4 Documentation"
        to="https://storymatic.zsnout.com/"
      />
    </SearchableCardGrid>
  </DocumentDisplay>
</template>
