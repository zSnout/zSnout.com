<script setup lang="ts">
  import { reactive } from "vue";
  import Field from "../../components/Field.vue";
  import WordLink from "../../components/WordLink.vue";
  import {
    broken,
    dev,
    field,
    matches,
    output,
    sort,
    splitParagraph,
  } from "./index.js";

  const brokenWords = reactive(new Set<string>());

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

Lang uses _j_, _k_, _l_, _m_, _n_, _p_, _s_, _t_, and _w_ as consonants. We have
these consonants because they are easily distinguishable and are used in many
popular languages. For vowels, Lang has _a_, _e_, _i_, _o_, and _u_. This is the
same five-vowel system employed by Spanish and Swahili. Each of these letters
makes the same sound as its IPA (International Phonetic Alphabet) symbol.
English speakers should note that _j_ makes the sound of an English "y," as that
is the pronounciation of _j_ in the IPA.

In Lang's alphabet, the letter order is this: _a e i j k l m n o p s t u w_.

## Phonology

Lang uses CVN phonology. Every syllable starts with a consonant, has a vowel,
and optionally ends with the letter _n_. There are a few more rules, but they're
pretty simple.

1. The first syllable of a word doesn't need to start with a consonant. Every
   other syllable does.
2. You can't have the letters _nm_ or _nn_ in a row.
3. You can't have two vowels in a row.
4. The syllables _ji_, _ti_, _wo_, and _wu_ are disallowed. Some speakers cannot
   distinguish between _ti_ and other _i_ syllables. Additionally, _ji_, _wo_,
   and _wu_ sound very similar to _i_, _o_, and _u_.

## Capitalization

In Lang, the only capitalized words are proper nouns. This excludes the
beginning of sentences and titles.

## Gender

In Lang, nothing has a gender by default. When describing relatives, the ma- and
pa- prefixes may be added to indicate a female or male person. In other cases,
the words <WordLink word="man" /> and <WordLink word="pan" /> may be used.

## Sentences

In Lang, a sentence ends with a `.` if it is a statement or command, `?` if it
is a question, and `!` if it is an exclamation. These are the same symbols as
English and many romance languages.

## Types of Words

Lang has three main types of words: content words, verbs, and particles. Content
words encompass what English calls nouns and adjectives, verbs represent
actions, and particles refer to anything that creates a grammar.

## Content Words

In Lang, every content word is both a noun and an adjective. For example, _me_
means "me" and "my," depending on the context. To modify a noun, just place
additional content words after it. If _sowo_ means "dog," then _sowo_ _me_ would
mean "my dog," and _sowo_ _wile_ _me_ means "my strange dog." Notice how _me_'s
adjective form means "my." If we use a noun as a modifier, then it means "X
owned by Y." If we use an adjective as a modifier, then it means "X that is Y."
This is a general pattern.

## Verbs

In Lang, a verb is denoted by its `-li` or `-ali` suffix. This suffix transforms
a noun or adjective into a verb. For example, <WordLink word="ka" /> means "a
greeting," but <WordLink word="kali" /> means "to greet." To use verbs, write
them before a subject. For example, "<WordLink word="kali" /> {{}}
<WordLink word="sowo" />" means "A dog greets." If the action requires something
to act on (an object), write "verb subject <WordLink word="a" /> target." For
example, "<WordLink word="kali" /> <WordLink word="sowo" /> {{}}
<WordLink word="a" /> <WordLink word="kato" />." means "A dog greets a cat."

## Numbers

Numbers are really annoying in most languages. For example, 100 in Spanish is
"cien," but only if it's alone. If it's 101 then it's "ciento uno" and it's
impossible to remember when you need to add "y" ("ciento y uno"). English is
worse in some ways. It has a clear pattern for 13-19 in the form of "thirteen,
fourteen, ..., nineteen." But "fourteen" and "nineteen" use the words "four" and
"nine" whereas "thirteen" uses "thir" instead of "three." It even has exceptions
for "eleven" and "twelve!" Why do numbers need to be this confusing? Why can't
we just say "one two?"

Lang uses a system where you just say the digits of whatever number you want to
enunciate. To say 1, you write <WordLink word="wan" />. To say 3, you write
<WordLink word="nak" />. And to say 13, you write <WordLink word="wan" />
<WordLink word="nak" />. Easy!

We do recognize that large numbers pose a challenge, as you would need to write
<WordLink word="wan" /> <WordLink word="lo" /> <WordLink word="lo" /> {{}}
<WordLink word="lo" /> <WordLink word="lo" /> <WordLink word="lo" /> {{}}
<WordLink word="lo" /> <WordLink word="lo" /> <WordLink word="lo" /> {{}}
<WordLink word="lo" /> to say "one billion." Because of this, we allow the use
of the "-ol" suffix on any digit to mean one followed by n many zeroes. For
example, <WordLink word="nakol" /> means 1000, or 10 to the
<WordLink word="nak" />th (3rd) power. Thus, four thousand is a measly
<WordLink word="wan" /> <WordLink word="nakol" /> (4 \* 1000). That's nine
characters compared to English's thirteen!

An important note: to say 3,000,400, you would NOT write 3,000,000 400. Instead,
you write 3,000 400, or <WordLink word="nak" /> <WordLink word="nakol" /> {{}}
<WordLink word="sam" /> <WordLink word="natol" />.

It is generally preferred to use -ol over <WordLink word="lo" /> whenever you
have two or more <WordLink word="lo" />s in a row. However, don't use
<WordLink word="wanol" /> unless you're writing the number 10.

## Describing Relatives

Lang takes a unique approach to describing relatives. In Lang, there are three
core words, <WordLink word="kan" />, <WordLink word="lan" />, and
<WordLink word="nal" />, that respectively mean spouse, parent, and child. The
first two letters of each of these words (ka-, la-, and na-) may be used as
prefixes on each other. For example, a grandparent may be referred to as
_lalan_. It directly translates as "parent of parent," or "grandparents." To say
sibling, we would write <WordLink word="nalan" />, or "child of parent." While
"child of parent" could mean the original target (e.g. you), we assume that
these paths exclude anyone who could be written in a shorter way. Since "me"
could be written as <WordLink word="me" />, which is shorter, they're not
matched by this genealogical path.

These paths combine extremely well and are easy to write. For example, an aunt
or uncle is the sibling of a parent, or the <WordLink word="nalan" /> of a
<WordLink word="lan" />. Thus, we write an uncle or aunt as a _nalalan_.
However, lalan may be cumbersome to write and say, so we introduce a shorter
form. Instead of writing _lalan_, we may write <WordLink word="lun" />, and
instead of _nanal_, we may write <WordLink word="nul" />. The u-forms also
introduce the word for ex-spouse, or <WordLink word="kun" />. This means we
could write an aunt or uncle as a <WordLink word="nalun" />. Similarly, a cousin
would be <WordLink word="nulun" />.

You may notice that all of these word are genderless. This is on purpose and
matches one of the core goals of Lang. If you need to specify the gender of a
relative, however, you may use the ma- and pa- prefixes to mean female and male,
respectively. Lang does not include a gender neutral prefix as gender neutrality
is the default for all words.

For example, "father" may be written as _palan_, or "male parent." Similarly,
"grandmother" may be written as _malun_, or "female grandparent." You can also
express "grandfather on my mother's side" in one short word: palamalan, or "male
parent of female parent."

<WordLink word="kan" /> also allows you to easily write in-law relationships.
For example, "my parent in-law" would be written as _lakan_, or "parent of
spouse". You can also use the word <WordLink word="kun" /> to mean ex-spouse.

The word _kalan_ usually means a non-biological parent. Literally, it translates
as "spouse of parent," but as this would just mean parent, we give it this
secondary role. Thus, a stepsibling would be a _nakalan_, or "child of spouse of
parent."

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

## About the Dictionary

The dictionary lists every word in Lang with an (approximate) English
translation and a category (adjective, noun, verb, ...). Some words also have
antonyms, synonyms, similar words, examples, and additional notes. Each example
has a sentence or phrase in Lang with an English translation below it. Each word
in the Lang phrase is clickable and leads to the definition of that word.

Some examples use placeholders (X, Y, Z) instead of phrases to highlight how a
phrase transforms into its English equivalent. The placeholders may be replaced
with actual phrases to create a valid sentence.

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
  @input="sort"
/> </p>

<template v-for="[word, info] in output">

<div
  v-if="matches(word, info)"
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
