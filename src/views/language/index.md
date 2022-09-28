<script setup lang="ts">
  import { reactive, ref } from "vue";
  import { broken, dev, matches, output, splitParagraph } from "./index.ts";
  import Field from "../../components/Field.vue";
  import WordLink from "../../components/WordLink.vue";

  const brokenWords = reactive(new Set<string>());
  const field = ref("");

  function checkBrokenLinks() {
    brokenWords.clear();

    for (const word of broken()) {
      brokenWords.add(word);
    }
  }

  setTimeout(checkBrokenLinks, 100);
</script>

# The zSnout Language (aka Lang)

Disclaimer: this is a work in progress. It's zSnout's attempt to create our own
language and we're still thinking of a good name for it.

## The Alphabet

Lang uses _j_, _k_, _l_, _m_, _n_, _p_, _r_, _s_, _t_, and _w_ as consonants. In
Lang, the letter _j_ makes the same sound as English's "y". We use these
consonants because they are easily distinguishable and are used in many popular
languages. For vowels, Lang has _a_ (ah in English), _e_ (eh) _i_ (eee), _o_ (aw
in awkward), and _u_ (oo). This is the classing five-vowel system employed by
Spanish and Swahili.

To write zSnout in Lang using the native symbols, we would type Sisnaot. The `i`
makes the `ee` sound in zee, and the a and o combined make the `ah o` sound of
`zee sn ah oh t`. Lang doesn't have a z sound, so we'll make do with an s. It's
not perfect, but it will do.

In Lang's alphabet, the letter order is this: a e i o u j k l m n p r s t w.
Notice how the vowels are placed before consonants instead of being sporadically
placed like in English and other languages.

## Capitalization

In Lang, the only capitalized words are proper nouns. This excludes the
beginning of sentences and titles.

## Gender

In Lang, nothing has a gender by default. When describing relatives, the ma- and
pa- prefixes may be added to indicate a female or male person. In other cases,
the words <WordLink word="man" /> and <WordLink word="pan" /> may be used.

## Sentences

In Lang, a sentence ends with a `.` if it is a statement, `?` if it is a request
or question, and `!` if it is an exclamation.

## Grammatical Constructs

In Lang, a verb is denoted by its `-li` or `-ali` suffix. This suffix transforms
a noun or adjective into a verb. For example, <WordLink word="ka" /> means "a
greeting," but <WordLink word="kali" /> means "to greet." To use verbs, write
them before a subject. For example, "<WordLink word="kali" /> {{}}
<WordLink word="soro" />" means "A dog greets." If the action requires something
to act on (an object), write "verb subject a target." For example,
"<WordLink word="kali" /> <WordLink word="soro" /> <WordLink word="a" /> {{}}
<WordLink word="kato" />." means "A dog greets a cat."

## The Relative System

Lang takes a unique approach to describing relatives. In Lang, there are three
core words, <WordLink word="ban" />, <WordLink word="lan" />, and
<WordLink word="nal" />, that respectively mean spouse, parent, and child. The
first two letters of each of these words (ba-, la-, and na-) may be used as
prefixes on each other. For example, a grandparent may be referred to as
<WordLink word="lalan" />. It directly translates as "parent of parent," or
"grandparents." To say sibling, we would write <WordLink word="nalan" />, or
"child of parent." While "child of parent" could mean the original target (e.g.
you), we assume that these paths exclude anyone who could be written in a
shorter way. Since "me" could be written as <WordLink word="me" />, which is
shorter, they're not matched by this genealogical path.

These paths combine extremely well and are easy to write. For example, an aunt
or uncle is the sibling of a parent, or the <WordLink word="nalan" /> of a
<WordLink word="lan" />. Thus, we write an uncle or aunt as a
<WordLink word="nalalan" />. However, lalan may be cumbersome to write and say,
so we introduce a shorter form. Instead of writing <WordLink word="lalan" />, we
may write <WordLink word="lun" />, and instead of <WordLink word="nanal" />, we
may write <WordLink word="nul" />. The u-forms also introduce the word for
ex-spouse, or <WordLink word="bun" />. This means we could write an aunt or
uncle as a <WordLink word="nalun" />. Similarly, a cousin would be
<WordLink word="nulun" />.

You may notice that all of these word are genderless. This is on purpose and
matches one of the core goals of Lang. If you need to specify the gender of a
relative, however, you may use the ma- and pa- prefixes to mean female and male,
respectively. Lang does not include a gender neutral prefix as gender neutrality
is the default for all words.

For example, "father" may be written as <WordLink word="palan" />, or "male
parent." Similarly, "grandmother" may be written as <WordLink word="malun" />,
or "female grandparent." You can also express "grandfather on my mother's side"
in one short word: <WordLink word="palamalan" />, or "male parent of female
parent."

<WordLink word="ban" /> also allows you to easily write in-law relationships.
For example, "my parent in-law" would be written as <WordLink word="laban" />,
or "parent of spouse". You can also use <WordLink word="bun" />, or "ex-spouse,"
for other relationships.

## Pronouns

Each pronoun is labeled using its role (1st, 2nd, or 3rd) person as well as a
gender.

| Participant | Singular               | Plural                                                                      |
| ----------- | ---------------------- | --------------------------------------------------------------------------- |
| 1st person  | <WordLink word="me" /> | <WordLink word="nas" /> / <WordLink word="nes" /> / <WordLink word="nos" /> |
| 2nd person  | <WordLink word="te" /> | <WordLink word="tos" />                                                     |
| 3rd person  | <WordLink word="le" /> | <WordLink word="los" />                                                     |

The 1st person plural, denoted by "we" in English, has three different forms in
Lang, depending on whether you are including or excluding the 2nd and 3rd
persons.

| Form | Participants    | English             |
| ---- | --------------- | ------------------- |
| nas  | 1st + 2nd       | me and you          |
| nes  | 1st + 2nd + 3rd | me and you and them |
| nos  | 1st + 3rd       | me and them         |

## The Dictionary

<p style="margin-bottom: 2em">
  Today, the dictionary has {{ Object.keys(output).length }} words.
</p>

<p v-if="dev()" style="margin-bottom: 2em" @click="checkBrokenLinks">
  Broken words: {{ [...brokenWords].join(", ") }}
</p>

<p class="field-outer"> <Field
  v-model="field"
  id="language-field"
  placeholder="Type to search the dictionary..."
  type="search"
/> </p>

<template v-for="(info, word) in output">

<div
  v-if="matches(field, word, info)"
  :id="`word-${word}`"
  style="margin-top: 2em; scroll-margin-top: 8.5em"
  tabindex="-1"
>

**{{ word }}**
({{ Array.isArray(info.category) ? info.category.join(", ") : info.category }})
⇒ **{{ info.translation }}**

<p v-for="note in info.notes?.split(/\n+/g)">
  <WordLink
    v-for="word in splitParagraph(note)"
    :is-text="word.isText" :word="word.word"
  />
</p>

<p v-if="Array.isArray(info.similar)">
  <b>Similar to:</b>{{" "}}
  <WordLink
    v-for="(word, index) in info.similar"
    :comma="index !== info.similar.length - 1"
    :word="word"
  />
</p>

<p v-if="typeof info.similar === 'string'">
  <b>Similar to:</b>{{" "}}
  <WordLink :word="info.similar" />
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

<p v-if="Array.isArray(info.synonym)">
  <b>Synonyms:</b>{{" "}}
  <WordLink
    v-for="(word, index) in info.synonym"
    :comma="index !== info.synonym.length - 1"
    :word="word"
  />
</p>

<p v-if="typeof info.synonym === 'string'">
  <b>Synonym:</b>{{" "}}
  <WordLink :word="info.synonym" />
</p>

<p v-if="Array.isArray(info.antonym)">
  <b>Antonyms:</b>{{" "}}
  <WordLink
    v-for="(word, index) in info.antonym"
    :comma="index !== info.antonym.length - 1"
    :word="word"
  />
</p>

<p v-if="typeof info.antonym === 'string'">
  <b>Antonym:</b>{{" "}}
  <WordLink :word="info.antonym" />
</p>

<b v-if="info.examples">Examples:</b>

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

</div>

</template>

<style scoped>
  .field-outer {
    position: sticky;
    top: calc(3.5em + 1px + 2em);
    width: calc(100% - 4em);
    z-index: 2;
    margin-left: 2em;
  }

  @media (max-width: 400px) {
    .field-outer {
      top: calc(2.5em + 1px + 1.5em);
      margin-left: 1em;
      width: calc(100% - 2em);
    }
  }
</style>
