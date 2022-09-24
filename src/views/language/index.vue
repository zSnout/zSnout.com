<script lang="ts" setup>
  import DocumentDisplay from "../../components/DocumentDisplay.vue";
  import Heading from "../../components/Heading.vue";
  import Title from "../../components/Title.vue";
</script>

<template>
  <DocumentDisplay>
    <Title>The zSnout Language (aka zLang)</Title>

    <p>
      This page is a
      <em>huge</em>
      work in progress. It's zSnout's attempt to make a language from scratch.
      We're still working on a good name for it.
    </p>

    <Heading id="consonants">The consonants in zLang</Heading>

    <p>
      zLang uses j, k, l, m, n, p, s, t, and w as consonants. In the
      International Phonetic Alphabet, /j/ makes the English y sound, so the j
      in zLang makes the same noise. We use these consonants because they are
      easily distinguishable and are used in most major languages.
    </p>

    <template #aside>
      <nav>
        <ul>
          <li>
            <RouterLink to="#consonants">Consonants</RouterLink>
          </li>
        </ul>
      </nav>
    </template>
  </DocumentDisplay>
</template>
