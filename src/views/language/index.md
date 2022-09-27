<script setup lang="ts">
  import { output, splitParagraph } from "./index.ts";
  import WordLink from "../../components/WordLink.vue";
</script>

# The zSnout Language (aka Lang)

Disclaimer: this is a work in progress. It's zSnout's attempt to create our own
language and we're still thinking of a good name for it.

## The Alphabet

Lang uses _j_, _k_, _l_, _m_, _n_, _p_, _s_, _t_, and _w_ as consonants. In
Lang, the letter _j_ makes the same sound as English's "y". We use these
consonants because they are easily distinguishable and are used in many popular
languages. For vowels, Lang has _a_ (ah in English), _e_ (eh) _i_ (eee), _o_ (aw
in awkward), and _u_ (oo). This is the classing five-vowel system employed by
Spanish and Swahili.

To write zSnout in Lang using the native symbols, we would type Sisnaot. The `i`
makes the `ee` sound in zee, and the a and o combined make the `ah o` sound of
`zee sn ah oh t`. Lang doesn't have a z sound, so we'll make do with an s. It's
not perfect, but it will do.

In Lang's alphabet, the letter order is this: _a e i o u j k l m n p s t w_.
Notice how the vowels are placed before consonants instead of being sporadically
placed like in English and other languages.

## Capitalization

In Lang, the only capitalized words are proper nouns. This excludes the
beginning of sentences and titles.

## Gender

In Lang, nothing has a gender by default. When describing relatives, the ma- and
pa- prefixes may be added to indicate a female or male person. In other cases,
the words <WordLink word="man" /> and <WordLink word="pan" /> may be used.

## Pronouns

Each pronoun is labeled using its role (1st, 2nd, or 3rd) person as well as a
gender.

| Participant | Singular | Plural          |
| ----------- | -------- | --------------- |
| 1st person  | me       | nas / nes / nos |
| 2nd person  | te       | tos             |
| 3rd person  | lat      | los             |

The 1st person plural, denoted by "we" in English, has three different forms in
Lang, depending on whether you are including or excluding the 2nd and 3rd
persons.

| Form | Participants    | English             |
| ---- | --------------- | ------------------- |
| nas  | 1st + 2nd       | me and you          |
| nes  | 1st + 2nd + 3rd | me and you and them |
| nos  | 1st + 3rd       | me and them         |

## The Dictionary

<div
  v-for="(info, word) in output"
  :id="`word-${word}`"
  style="margin-top: 2em"
  tabindex="-1"
>

**{{ word }}** ({{ info.category }}) ⇒ **{{ info.translation }}**

<p>
  <WordLink
    v-for="word in splitParagraph(info.notes)"
    :is-text="word.isText" :word="word.word"
  />
</p>

<p v-if="Array.isArray(info.plural)">
  <b>Plural forms:</b>{{" "}}
  <WordLink
    v-for="(word, index) in info.plural"
    :comma="index !== info.plural.length - 1"
    :word="word"
  />
</p>

<p v-if="typeof info.plural === 'string'">
  <b>Plural form:</b>{{" "}}
  <WordLink :word="info.plural" />
</p>

<p v-if="Array.isArray(info.singular)">
  <b>Singular forms:</b>{{" "}}
  <WordLink
    v-for="(word, index) in info.singular"
    :comma="index !== info.singular.length - 1"
    :word="word"
  />
</p>

<p v-if="typeof info.singular === 'string'">
  <b>Singular form:</b>{{" "}}
  <WordLink :word="info.singular" />
</p>

**Examples:**

<p v-for="[source, trans] in info.examples" style="margin-left: 1em">
  <WordLink
    v-for="word in splitParagraph(source, true)"
    :is-text="word.isText" :word="word.word"
  />
  <br>
  <WordLink
    v-for="word in splitParagraph(trans)"
    :is-text="word.isText" :word="word.word"
  />
</p>
