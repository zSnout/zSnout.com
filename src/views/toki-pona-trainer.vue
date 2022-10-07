<!--
  This trainer follows jan Misali's sona pi toki pona playlist.
  https://www.youtube.com/playlist?list=PLuYLhuXt4HrQIv3xnDxZqRaLfmxB2U5rJ

  It's very unfinished and may never be completed due to the complexity involved
  in generating language.
-->

<script lang="ts" setup>
  import { useLocalStorage } from "@vueuse/core";
  import { computed, ref } from "vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import { useRandomItem } from "../composables/useRandomItem";
  import Button from "../components/Button.vue";
  import MiddleText from "../components/MiddleText.vue";
  import Field from "../components/Field.vue";
  import VStack from "../components/VStack.vue";
  import Spacer from "../components/Spacer.vue";
  import Dropdown from "../components/Dropdown.vue";

  const enum Level {
    ReadingAndWhatnot = 1,
    SentenceStructure = 2,
    E = 3,
    Adjectives = 4,
    La = 5,
    CompoundSentences = 6,
    YouKnowNotKnow = 7,
    OnAddressing = 8,
    Adpositions = 9,
    ALotMultipleAtLeastThreeOrExactlyTwenty = 10,
    FullOfEels = 11,
    WrappingItUp = 12,
  }

  type Question = {
    readonly question: string;
    readonly example: string;
    readonly level: Level;
  };

  const question = ref<Question>({
    question: "Since language is hard to model, you must grade yourself.",
    example:
      "The example translation will appear here. It is an approximation, not the correct answer.",
    level: Level.ReadingAndWhatnot,
  });

  const submitted = ref(true);

  type Phrase = readonly [level: number, phrase: string, translation: string];
  type PhraseList = readonly Phrase[];

  const MI: Phrase = [Level.ReadingAndWhatnot, "mi", "I"];
  const SINA: Phrase = [Level.ReadingAndWhatnot, "sina", "you"];
  const ONA: Phrase = [Level.ReadingAndWhatnot, "ona", "they"];

  const subjects: PhraseList = [
    MI,
    SINA,
    ONA,
    [Level.ReadingAndWhatnot, "jan", "person"],
    [Level.ReadingAndWhatnot, "ijo", "thing"],
    [Level.Adjectives, "mama", "parent"],
  ];

  const nouns: PhraseList = [
    [Level.ReadingAndWhatnot, "toki", "language"],
    [Level.ReadingAndWhatnot, "jan", "person"],
    [Level.ReadingAndWhatnot, "moku", "food"],
    [Level.ReadingAndWhatnot, "ijo", "thing"],
    [Level.SentenceStructure, "telo", "water"],
    [Level.SentenceStructure, "suno", "light"],
    [Level.SentenceStructure, "ilo", "tool"],
    [Level.SentenceStructure, "kili", "fruit"],
    [Level.SentenceStructure, "pipi", "pest"],
    [Level.SentenceStructure, "ma", "place"],
    [Level.SentenceStructure, "pakala", "mistake"],
    [Level.E, "esun", "shop"],
    [Level.E, "lukin", "eye"],
    [Level.E, "kute", "ear"],
    [Level.E, "kalama", "sound"],
    [Level.Adjectives, "lipu", "document"],
    [Level.Adjectives, "kulupu", "group"],
    [Level.Adjectives, "tenpo", "time"],
    [Level.Adjectives, "linja", "rope"],
    [Level.Adjectives, "luka", "hand"],
    [Level.Adjectives, "noka", "foot"],
    [Level.Adjectives, "lawa", "head"],
    [Level.Adjectives, "mama", "parent"],
  ];

  const modifiers: PhraseList = [
    [Level.ReadingAndWhatnot, "pona", "good"],
    [Level.ReadingAndWhatnot, "ike", "bad"],
    [Level.ReadingAndWhatnot, "suli", "big"],
    [Level.SentenceStructure, "lili", "small"],
    [Level.E, "nasa", "stupid"],
    [Level.Adjectives, "jaki", "gross"],
    [Level.Adjectives, "luka", "hand of"],
    [Level.Adjectives, "noka", "foot of"],
    [Level.Adjectives, "lawa", "head of"],
    [Level.Adjectives, "mama", "parent of"],
  ];

  /** These modifiers should be the last ones applied to a noun. */
  const modifiersLast: PhraseList = [
    [Level.ReadingAndWhatnot, "mi", "my"],
    [Level.ReadingAndWhatnot, "sina", "your"],
    [Level.ReadingAndWhatnot, "ona", "their"],
  ];

  const globalVerbs: PhraseList = [
    [Level.E, "esun", "buy"],
    [Level.E, "lukin", "see"],
    [Level.E, "wile", "want"],
    [Level.E, "kute", "hear"],
  ];

  const verbsWithoutE: PhraseList = [
    ...globalVerbs,
    [Level.ReadingAndWhatnot, "moku", "eat"],
    [Level.ReadingAndWhatnot, "pona", "is/am/are good"],
    [Level.ReadingAndWhatnot, "lape", "sleep"],
    [Level.ReadingAndWhatnot, "toki", "speak"],
    [Level.E, "pali", "make"],
    [Level.E, "kalama", "make a sound"],
    [Level.E, "nasa", "is/am/are stupid"],
  ];

  const verbsWithE: PhraseList = [
    ...globalVerbs,
    [Level.ReadingAndWhatnot, "moku", "eat"],
    [Level.ReadingAndWhatnot, "pona", "improve"],
    [Level.ReadingAndWhatnot, "lape", "put to sleep"],
    [Level.E, "jo", "have"],
    [Level.E, "pana", "give"],
    [Level.E, "pali", "make"],
    [Level.E, "kalama", "make the sound of"],
  ];

  const level = useLocalStorage<Level>("toki-pona-trainer:level", 1);
  level.value = Math.floor(level.value);

  if (level.value <= 0 || level.value > 12) {
    level.value = Level.ReadingAndWhatnot;
  }

  function filter(array: PhraseList): PhraseList {
    return array.filter((item) => item[0] <= level.value);
  }

  function mergeText(a: string, b: string): string {
    if (!a || !b) return a || b;
    return a + " " + b;
  }

  function combine(
    phrase: readonly (Phrase | string)[],
    isModifier = false
  ): Phrase {
    if (phrase.length === 0) {
      throw new RangeError("Cannot combine zero phrases.");
    }

    const output = phrase.reduce((prev, next) => {
      if (typeof prev === "string") {
        if (typeof next === "string") {
          return mergeText(prev, next);
        } else {
          return [next[0], mergeText(prev, next[1]), mergeText(prev, next[2])];
        }
      } else {
        if (typeof next === "string") {
          return [prev[0], mergeText(prev[1], next), mergeText(prev[2], next)];
        } else {
          return [
            Math.max(prev[0], next[0]),
            mergeText(prev[1], next[1]),
            isModifier ||
            modifiers.includes(next) ||
            modifiersLast.includes(next)
              ? mergeText(next[2], prev[2])
              : mergeText(prev[2], next[2]),
          ];
        }
      }
    });

    if (typeof output === "string") {
      return [Level.ReadingAndWhatnot, output, ""];
    }

    return output;
  }

  function capitalize(text: string) {
    return text[0].toUpperCase() + text.slice(1) + ".";
  }

  function random(phrases: PhraseList) {
    return useRandomItem(filter(phrases));
  }

  const LI: Phrase = [Level.ReadingAndWhatnot, "li", ""];
  const E: Phrase = [Level.E, "e", ""];
  const PI: Phrase = [Level.Adjectives, "pi", "of"];

  function addModifiers(phrase: Phrase) {
    if (phrase == MI || phrase == SINA || phrase == ONA) {
      return phrase;
    }

    let exitChance = 0.5;

    while (true) {
      if (Math.random() < exitChance) {
        // 50% chance to add my, your, ...
        if (Math.random() < 0.5) {
          phrase = combine([phrase, random(modifiersLast)]);
        }

        break;
      }

      if (level.value >= Level.Adjectives && Math.random() < 0.3) {
        phrase = combine(
          [phrase, PI, combine([random(modifiers), random(modifiers)])],
          true
        );
      }

      phrase = combine([phrase, random(modifiers)]);

      // Square roots of decimals increase them.
      exitChance = Math.sqrt(exitChance);
    }

    return phrase;
  }

  function generate() {
    let result: Phrase;

    const subject = random(subjects);

    if (level.value < Level.E || Math.random() < level.value / 6) {
      const verb = random(verbsWithoutE);

      // Only use 'li' if the subject isn't mi or sina.
      if (subject == MI || subject == SINA) {
        result = combine([subject, verb]);
      } else {
        result = combine([addModifiers(subject), LI, verb]);
      }
    } else {
      const verb = random(verbsWithE);
      const object = random(nouns);

      // Only use 'li' if the subject isn't mi or sina.
      if (subject == MI || subject == SINA) {
        result = combine([subject, verb, E, addModifiers(object)]);
      } else {
        result = combine([
          addModifiers(subject),
          LI,
          verb,
          E,
          addModifiers(object),
        ]);
      }
    }

    question.value = {
      question: result[1],
      example: result[2],
      level: result[0],
    };
  }

  const field = ref("");

  function onSubmit(event: Event) {
    event.preventDefault();

    if (submitted.value) {
      submitted.value = false;
      field.value = "";
      generate();
    } else {
      if (!field.value) return;
      submitted.value = true;
    }
  }

  function onInput(event: Event) {
    if (submitted.value) {
      event.preventDefault();
    }
  }

  const dropdown = computed({
    get() {
      return "" + level.value;
    },
    set(v) {
      level.value = Math.floor(+v);
      if (level.value <= 0 || level.value > 12) level.value = 1;
    },
  });
</script>

<template>
  <DocumentDisplay center>
    <MiddleText>
      <form @submit="onSubmit">
        <VStack>
          <p class="question">{{ question.question }}</p>

          <div v-if="submitted">{{ capitalize(question.example) }}</div>
          <Spacer v-else />

          <Field
            v-model="field"
            placeholder="Enter your translation..."
            @input="onInput"
          />

          <Button class="generate" @click="onSubmit">
            {{ submitted ? "Try Another" : "Submit Answer" }}
          </Button>

          <Dropdown v-model="dropdown">
            <option value="1">1: Reading and Whatnot</option>
            <option value="2">2: Sentence Structure</option>
            <option value="3">3: E</option>
            <option value="4">4: Adjectives</option>
            <option value="5">5: La</option>
            <option value="6">6: Compound Sentences</option>
            <option value="7">7: You Know Not Know</option>
            <option value="8">8: On Addressing</option>
            <option value="9">9: Adpositions</option>
            <option value="10">10: A Lot, Multiple, ...</option>
            <option value="11">11: Full of Eels</option>
            <option value="12">12: Wrapping it Up</option>
          </Dropdown>
        </VStack>
      </form>
    </MiddleText>
  </DocumentDisplay>
</template>

<style scoped>
  .question {
    text-align: center;
  }

  .generate {
    width: 100%;
  }
</style>
