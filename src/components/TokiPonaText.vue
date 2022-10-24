<script lang="ts" setup>
  type Match = [tag: string | undefined, content: string];

  const { content } = defineProps<{ content: string }>();
  const matches = content.match(/_[^_]*_|[^_]*/g) || [];

  function subMatch(text: string) {
    const matches =
      text.match(/\|[a-z]+\s+[^|~]+\||~[a-z]+|~[()?]|[^|~]+/g) || [];

    const withTags = matches.map<Match>((match) => {
      if (match.startsWith("|")) {
        const [tag, content] = match.slice(1, -1).split(" ", 2);
        return [tag, content];
      } else if (match.startsWith("~")) {
        if (match == "~?") {
          return ["_?", "?"];
        } else {
          return ["_" + match.slice(1), match.slice(1)];
        }
      } else {
        return [undefined, match];
      }
    });

    return withTags.map(([tag, content], index) => {
      if (tag == "_?") {
        const previous: Match | undefined = withTags[index - 1];
        if (!previous) return [tag, content];
        return [tag + " " + previous[0], content];
      } else {
        return [tag, content];
      }
    });
  }
</script>

<template>
  <template v-for="match in matches">
    <em v-if="match.startsWith('_')" class="text-color">
      <span v-for="[tag, content] in subMatch(match.slice(1, -1))" :class="tag">
        {{ content }}
      </span>
    </em>

    <span v-else class="text-color">
      <span v-for="[tag, content] in subMatch(match)" :class="tag">
        {{ content }}
      </span>
    </span>
  </template>
</template>

<style lang="scss" scoped>
  .letter {
    font-weight: bold;

    &:first-child {
      display: inline-block;
      width: 1ch;
      text-align: center;
    }
  }

  .subj {
    color: #068f8f;
    font-weight: bold;
  }

  ._li {
    color: #c040c0;
  }

  .pred {
    color: #800080;
    font-weight: bold;
  }

  ._e {
    color: #ff9500;
  }

  .obj {
    color: #cf7800;
    font-weight: bold;
  }

  ._\(,
  ._\) {
    color: #606060;
  }

  ._\? {
    font-size: 0.6em;
  }
</style>
