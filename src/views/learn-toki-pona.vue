<!--
  The source code for the original toki pona trainer is available at
  https://github.com/zSnout/zSnout.com/blob/fdd4f5e0de1981bc1a61a19b7168461027d5e7be/src/views/toki-pona-trainer.vue
-->

<script lang="ts" setup>
  import { useEventListener, useLocalStorage } from "@vueuse/core";
  import { useClamp } from "@vueuse/math";
  import { computed, ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Field from "../components/Field.vue";
  import HStack from "../components/HStack.vue";
  import MiddleText from "../components/MiddleText.vue";
  import ProgressCircle from "../components/ProgressCircle.vue";
  import TokiPonaContent, { Content } from "../components/TokiPonaContent.vue";
  import TokiPonaText from "../components/TokiPonaText.vue";
  import VStack from "../components/VStack.vue";
  import { shuffleInPlace } from "../composables/useShuffle";
  import { has } from "../composables/useStringSearch";

  const allWords = [
    "a",
    "akesi",
    "ala",
    "alasa",
    "ale",
    "anpa",
    "ante",
    "anu",
    "awen",
    "e",
    "en",
    "epiku",
    "esun",
    "ijo",
    "ike",
    "ilo",
    "insa",
    "jaki",
    "jan",
    "jasima",
    "jelo",
    "jo",
    "kala",
    "kalama",
    "kama",
    "kasi",
    "ken",
    "kepeken",
    "kijetesantakalu",
    "kili",
    "kin",
    "kipisi",
    "kiwen",
    "ko",
    "kokosila",
    "kon",
    "ku",
    "kule",
    "kulupu",
    "kute",
    "la",
    "lanpan",
    "lape",
    "laso",
    "lawa",
    "leko",
    "len",
    "lete",
    "li",
    "lili",
    "linja",
    "lipu",
    "loje",
    "lon",
    "luka",
    "lukin",
    "lupa",
    "ma",
    "mama",
    "mani",
    "meli",
    "meso",
    "mi",
    "mije",
    "misikeke",
    "moku",
    "moli",
    "monsi",
    "monsuta",
    "mu",
    "mun",
    "musi",
    "mute",
    "n",
    "namako",
    "nanpa",
    "nasa",
    "nasin",
    "nena",
    "ni",
    "nimi",
    "noka",
    "o",
    "oko",
    "olin",
    "ona",
    "open",
    "pakala",
    "pali",
    "palisa",
    "pan",
    "pana",
    "pi",
    "pilin",
    "pimeja",
    "pini",
    "pipi",
    "poka",
    "poki",
    "pona",
    "pu",
    "sama",
    "seli",
    "selo",
    "seme",
    "sewi",
    "sijelo",
    "sike",
    "sin",
    "sina",
    "sinpin",
    "sitelen",
    "soko",
    "sona",
    "soweli",
    "suli",
    "suno",
    "supa",
    "suwi",
    "tan",
    "taso",
    "tawa",
    "telo",
    "tenpo",
    "toki",
    "tomo",
    "tonsi",
    "tu",
    "unpa",
    "uta",
    "utala",
    "walo",
    "wan",
    "waso",
    "wawa",
    "weka",
    "wile",
  ] as const;

  type TokiPonaWord = (typeof allWords)[number];

  type Display =
    | {
        readonly type: "article";
        readonly content: readonly Content[];
      }
    | (Question & { type: "selection" | "validated" });

  type Lesson =
    | {
        readonly type: "article";
        readonly content: readonly Content[];
        readonly title: string;
        readonly vocab: TokiPonaWord[];
      }
    | {
        readonly type: "quiz";
        readonly description?: string;
        readonly questions: readonly Question[];
        readonly title: string;
      };

  type Question =
    | {
        readonly type: "no-field";
        readonly question: Content;
        readonly answer: Content;
      }
    | {
        readonly type: "open-ended";
        readonly question: Content;
        readonly answer: Content;
      }
    | {
        readonly type: "selection";
        readonly answers: readonly Answer[];
        readonly question: Content;
        readonly size?: "full" | "medium" | "small";
      }
    | {
        readonly type: "validated";
        readonly remark?: Content;
        readonly question: Content;
        validate(value: string): ValidationResult;
      };

  interface Answer {
    readonly correct?: boolean;
    readonly label: string;
    readonly remark?: string;
  }

  interface ValidationResult {
    readonly remark?: Content;
    readonly valid: boolean;
  }

  const success = (remark?: Content): ValidationResult => ({
    valid: true,
    remark,
  });

  const failure = (remark?: Content): ValidationResult => ({
    valid: false,
    remark,
  });

  const levels: readonly Lesson[] = [
    {
      type: "article",
      title: "Introduction",
      vocab: [],
      content: [
        "Hello, new Toki Pona learner! This is an interactive system that can help you learn Toki Pona. This system has many levels, each exploring a very small topic. You can skip between them by clicking the circles at the top of the page or go in order.",
        "It looks like you already know how to advance paragraphs, but here's a tip for keyboard users: just press the Space bar or Enter key to go to the next item.",
        "Let's get straight into your first lesson!",
      ],
    },
    {
      type: "article",
      title: "Letters and Pronunciation",
      vocab: [],
      content: [
        "Toki Pona is a minimalist language created by Sonja Lang. It is an experiment created to see how few words a language can have before it becomes unusable. As of 2022, it only has 137 words.",
        "It has nine consonants: j, k, l, m, n, p, s, t, and w. These sound exactly like you'd expect them to in English, except for j. In toki pona, the letter J sounds like the English letter Y.",
        [
          "It also has five consonants: a, e, i, o, and u. Here are how they sound:",
          "|letter A| - ah as in father",
          "|letter E| - eh as in bed",
          "|letter I| - ee as in deep",
          "|letter O| - oh as in go",
          "|letter U| - oo as in moose",
        ],
        "Don't be worried if you mispronounce some words. Toki Pona has so few sounds that you can pronounce things slightly off and people will still be able to understand you.",
        "In Toki Pona, all words are in lowercase, even at the beginning of a sentence. Additionally, stress is always on the first syllable. _toki_ is pronounced TO-kee, not to-KEE.",
        "That's literally all you need to know to read toki pona aloud. Think you're ready for your first quiz? We're going to practice pronunciation. For this quiz, we're going to give you the question. Think about your answer before pressing the \"What's the answer?\" button and revealing the solution. Remember: your answer may slightly differ from ours.",
      ],
    },
    {
      type: "quiz",
      title: "Pronunciation",
      description:
        "Pronounce the following phrase. It should sound like an English word.",
      questions: [
        {
          type: "no-field",
          question: "_jaki_",
          answer: "yucky",
        },
        {
          type: "no-field",
          question: "_jelo_",
          answer: "yellow",
        },
        {
          type: "no-field",
          question: "_ike_",
          answer: "icky",
        },
        {
          type: "no-field",
          question: "_ken_",
          answer: "can",
        },
        {
          type: "no-field",
          question: "_mani_",
          answer: "money",
        },
        {
          type: "no-field",
          question: "_mun_",
          answer: "moon",
        },
      ],
    },
    {
      type: "article",
      title: "Nouns and Basic Sentences",
      vocab: [
        "ijo",
        "jan",
        "kili",
        "li",
        "lipu",
        "mije",
        "ni",
        "soweli",
        "toki",
      ],
      content: [
        "Because Toki Pona has so few words, most words perform many functions at once. In fact, Toki Pona barely distinguishes between nouns, adjectives, and verbs, and calls them all content words.",
        "Here are a few content words:",
        [
          "_ijo_: something",
          "_jan_: person",
          "_kili_: fruit or vegetable",
          "_lipu_: book, document, paper, website",
          "_mije_: man",
          "_ni_: this, that",
          "_soweli_: land mammal",
          "_toki_: communication, language, speech",
        ],
        'You\'ll notice that Toki Pona doesn\'t have articles like "a" or "the." _jan_ can mean "a person" or "the person," depending on the context.',
        'Additionally, Toki Pona doesn\'t distinguish between singular and plural. _jan_ can mean "a person" or "many people," depending on the context.',
        "Toki Pona also has particles, which perform a grammar-related function without adding to the core meaning of a phrase.",
        "And your first particle:",
        {
          type: "nobreak",
          content:
            "_li_: Separates the subject from the predicate of a sentence.",
        },
        "To make a basic sentence, write _|subj X| ~li |pred Y|_. In a sentence like this, |subj X| is the subject while |pred Y| is the predicate. This sentence can mean that |subj X| is |pred Y| or that |subj X| is doing the action |pred Y|, based on the context. All sentences will follow this format.",
        {
          type: "large",
          content: "|subj [subject]| ~li |pred [predicate]|",
        },
        "For your first example, I'll highlight what each part of the sentence represents. What does _|subj jan| ~li |pred mije|_ mean?",
        'We\'ll break it down. We know that _|subj jan|_ means person and _|pred mije|_ means man, so _|subj jan| ~li |pred mije|_ means "|subj A person| _|li is|_ |pred a man|."',
        "That wasn't so hard, was it? Let's try another, but without colors this time. What does _ni li soweli_ mean?",
        'It means "This is a land mammal."',
        "On to the practice session!",
      ],
    },
    {
      type: "quiz",
      title: "Nouns and Basic Sentences",
      description: "Translate the following phrase.",
      questions: [
        {
          type: "open-ended",
          question: "_jan li mije._",
          answer: "The person is male.",
        },
        {
          type: "open-ended",
          question: '"The bear is male."',
          answer: "_soweli li mije._",
        },
        {
          type: "open-ended",
          question: "_ni li jan._",
          answer: "That is a person.",
        },
        {
          type: "open-ended",
          question: '"That is an apple."',
          answer: "_ni li kili._",
        },
        {
          type: "open-ended",
          question: "Translate _ni li soweli._",
          answer: "This is a whale.",
        },
        {
          type: "open-ended",
          question: 'Translate "Broccoli is something."',
          answer: "_kili ni ijo._",
        },
        {
          type: "validated",
          question: "_ni li lipu._",
          remark:
            'We translated it as "That is a document," but you might have a slightly different interpretation.',
          validate(value) {
            if (
              !has(value, "this") &&
              !has(value, "that") &&
              !has(value, "those") &&
              !has(value, "these")
            ) {
              return failure("Don't forget the subject, _ni._");
            }

            if (!/book|document|paper|sheet|website/.test(value)) {
              return failure("Don't forget the predicate, _lipu._");
            }

            return success();
          },
        },
        {
          type: "open-ended",
          question: '"This is a language."',
          answer: "_ni li toki._",
        },
        {
          type: "validated",
          question: "_ijo li jan._",
          remark:
            'We translated it as "Something is a person," but you might have a slightly different interpretation.',
          validate(value) {
            if (!has(value, "thing")) {
              return failure("Don't forget the subject, _ijo._");
            }

            if (!has(value, "person") && !has(value, "people")) {
              return failure("Don't forget the predicate, _jan._");
            }

            return success();
          },
        },
        {
          type: "open-ended",
          question: '"Something is a speech."',
          answer: "_ijo li toki._",
        },
      ],
    },
    {
      type: "article",
      title: "Greetings",
      vocab: [],
      content: [
        'Remember how _toki_ means communication or speech? If used as an interjection (_toki!_), it also means "Communication is starting." Naturally, this is a common way to say hello to people in Toki Pona.',
        "That's it for now. We'll learn more short phrases and greetings when we learn more words.",
      ],
    },
    {
      type: "article",
      title: "Modifiers",
      vocab: ["pona", "ike", "ilo", "lili", "suli", "telo", "tomo"],
      content: [
        "Before we start this lesson, let's go over some words that we'll use.",
        [
          "_pona_: good, simple",
          "_ike_: bad, complex",
          "_ilo_: tool",
          "_lili_: small",
          "_suli_: big",
          "_telo_: water, liquid",
          "_tomo_: house, room",
        ],
        "Knowing these words, how would you translate _ni li pona?_",
        {
          type: "nobreak",
          content: 'If you said "That is good," you would be correct!',
        },
        "Let's try one more example before continuing our lesson. What is _ijo li suli?_",
        {
          type: "nobreak",
          content: '"Something is big."',
        },
        "We're going to introduce a new element of Toki Pona grammar: modifiers. These are like adjectives in English.",
        "To modify a noun, just place another word after it. In Toki Pona, the modifier comes _after_ the thing we're modifying, which is the opposite order that English uses.",
        'For example, _telo suli_ means "big water." You\'ll often see this translated as lake, ocean, or sea, depending on the context. This is a general pattern of Toki Pona, where two Toki Pona words can combine to form one English word.',
        "You might think that you need to memorize a bunch of word combinations now, but you don't! The beauty of Toki Pona is that these combinations are often very intuitive and follow from the clear rules outlined in the grammar.",
        'How might you say "watermelon?" Think about what a watermelon literally is in the real world.',
        { type: "nobreak", content: "That's right, it's _kili telo._" },
        'How might you translate "friend?"',
        {
          type: "nobreak",
          content:
            'This is a tricky one, but it\'s _jan pona,_ or "good person," because what is a friend other than a good person?',
        },
        "Here's another one: what do think _kili ni_ means?",
        {
          type: "nobreak",
          content:
            'In this case, _ni_ modifies _kili_ by changing it from "fruit" to "that fruit."',
        },
        'You can have multiple modifiers on an object. In that case, you apply them from left to right. _jan pona lili_ means "small good person," not "person of little good."',
        "With that, let's jump into a practice session!",
      ],
    },
    {
      type: "quiz",
      title: "Modifiers",
      description: "Translate the following phrase.",
      questions: [
        {
          type: "open-ended",
          question: "_kili ni li pona._",
          answer: "That fruit is good.",
        },
        {
          type: "open-ended",
          question: "The little tool is good.",
          answer: "_ilo lili li pona._",
        },
        {
          type: "open-ended",
          question: "_tomo soweli li ijo._",
          answer: "The doghouse is something.",
        },
        {
          type: "open-ended",
          question: "Dogs are large animals.",
          answer: "_soweli li soweli suli._",
        },
        {
          type: "open-ended",
          question: "_jan pona lili li jan._",
          answer: "Small friends are people.",
        },
        {
          type: "open-ended",
          question: "That ocean is large.",
          answer: "_telo suli ni li suli._",
        },
        {
          type: "open-ended",
          question: "_tomo telo ni li lili._",
          answer: "This water room (aquarium) is small.",
        },
        {
          type: "open-ended",
          question: "This is a good language.",
          answer: "_ni li toki pona._",
        },
      ],
    },
    {
      type: "article",
      title: "Me, You, and Them",
      vocab: ["mi", "sina", "ona"],
      content: [
        "Like most lessons, let's start with some basic vocabulary.",
        [
          "_mi_: I, me, my, we, our",
          "_sina_: you, your",
          "_ona_: he, she, they, it, their",
        ],
        'We may not be learning many words in this lesson, but they sure are important! Listen to a conversation and you\'ll notice how often words like "I," "me", "you," and "they" pop up. _mi_ and _sina_ are used so frequently that they have special syntax and don\'t need _li_.',
        "At first, this rule may be confusing to you, but as time goes on, you'll notice that omitting _li_ around _mi_ and _sina_ is very useful. For example, to say \"I'm well,\" you only need to say _mi pona_ instead of _mi li pona._",
        "By the way, this rule isn't optional. Never use _li_ if the subject is ONLY _mi_ or _sina._",
        "Let's do some practice. What does _sina pona_ mean?",
        { type: "nobreak", content: "You are well." },
        'Try translating "They are an evil person."',
        { type: "nobreak", content: "_ona li jan ike._" },
        'Notice how none of these words distinguish between plurality and gender. This can especially be confusing for _mi_, because it can mean "I" or "we." In most cases, this is easily determined by context. If not, assume _mi_ is used in the singular.',
        "Looks like we have to update the sentence diagram!",
        {
          type: "large",
          content: "|subj [subject]| ~li~? |pred [predicate]|",
        },
        "Now we have to omit ~li if the |subj [subject]| is _|subj mi|_ or _|subj sina|_.",
        "Before we move on to the practice quiz, let's learn about one more use of modifiers.",
      ],
    },
    {
      type: "article",
      title: "Possessives",
      vocab: ["meli", "tonsi", "kulupu", "sin", "lawa", "esun"],
      content: [
        "Let's add some words to our vocabulary:",
        [
          "_meli_: woman, female",
          "_tonsi_: non-binary, non-binary person",
          "_kulupu_: community, group",
          "_sin_: new, another, fresh",
          "_lawa_: leader, head",
          "_esun_: market, business",
        ],
        'In addition to modifiers representing adjectives, they can also be used to indicate ownership. For example, _soweli mi_ means "my land mammal" and _meli sina_ means "your woman" (commonly translated as "your wife").',
        'Try translating "This is my house."',
        { type: "nobreak", content: "_ni li tomo mi._" },
        "What about _telo suli sina li pona?_",
        { type: "nobreak", content: "Your lake (big water) is good." },
        "Notice how even though the noun _telo suli sina_ ends in _sina_, we still keep the _li_. This is because we only omit _li_ if the subject is ONLY _mi_ or _sina_.",
        "On to the practice session!",
      ],
    },
    {
      type: "quiz",
      title: "Me, You, Them, and Possessives",
      description: "Translate the following phrase.",
      questions: [
        {
          type: "open-ended",
          question: "_soweli sin mi li pona._",
          answer: '"My new dog is good."',
        },
        {
          type: "open-ended",
          question: '"You are the club\'s leader."',
          answer: "_sina lawa kulupu._",
        },
        {
          type: "open-ended",
          question: "_sina kulupu lipu._",
          answer: '"We are the book club."',
        },
        {
          type: "open-ended",
          question: '"My farmers (fruit / vegetable) market is a large room."',
          answer: "_esun kili mi li tomo suli._",
        },
        {
          type: "open-ended",
          question: "_kulupu mi li sin._",
          answer: '"Our community is new."',
        },
        {
          type: "open-ended",
          question: '"Your vegetables are large."',
          answer: "_kili sina li suli._",
        },
        {
          type: "open-ended",
          question: "_telo suli li pona._",
          answer: '"The oceans are good."',
        },
        {
          type: "open-ended",
          question: '"The children (little people) are a community."',
          answer: "_jan lili li kulupu._",
        },
      ],
    },
    {
      type: "article",
      title: "Verbs",
      vocab: ["ala", "e", "kalama", "kute", "moku", "mute", "olin", "sona"],
      content: [
        "Let's start off with some vocab:",
        [
          "_ala_: no, not, zero",
          "_kalama_: a sound, to recite",
          "_kute_: to listen, to obey, an ear",
          "_moku_: food, to eat, to drink",
          "_mute_: many, very",
          "_olin_: to love",
          "_sona_: to know, to have knowledge of",
        ],
        "Today we're going to learn how to use verbs. Basically, just place the verb you want to use after _li_, unless the subject is ONLY _mi_ or _sina_. In that case, omit the _li_.",
        "Let's practice a bit. What does _mi moku_ mean?",
        { type: "nobreak", content: 'If you said "I eat," you\'d be correct.' },
        'However, "I am food" is also correct. In this case, you need some context to distinguish what you should translate _mi moku_ as. Usually it\'s the first one.',
        "What about _ona li kalama_?",
        { type: "nobreak", content: '"They listen."' },
        "Now that you've got basic verbs down, let's learn one more concept: direct objects.",
        "Sometimes a verb needs an object to work properly. For example, _sona_ accepts an object describing what you know. In these cases, add an object after your _li_-clause and prepend it with _e_. I'll update the sentence diagram to show this:",
        {
          type: "large",
          content:
            "|subj [subject]| ~li~? |pred [predicate]| ~(~e |obj [object]|~)~?",
        },
        "Now try translating _|subj mi| |pred sona| ~e |obj toki pona|._",
        {
          type: "nobreak",
          content: 'This means "|subj I| |pred know| |obj a good language|."',
        },
        "Try translating _mi olin e sina._",
        { type: "nobreak", content: '"I love you."' },
        "What about _jan mute li kute e toki_?",
        { type: "nobreak", content: '"Many people listen to the speech."' },
      ],
    },
    {
      type: "quiz",
      title: "Verbs",
      description: "Translate the following phrase.",
      questions: [
        {
          type: "open-ended",
          question: "_soweli sina li kalama e kalama suli._",
          answer: '"Your dog barks (recites a big sound)."',
        },
        {
          type: "open-ended",
          question: '"I obey that sound."',
          answer: "_mi kute e kalama ni._",
        },
        {
          type: "open-ended",
          question: "_esun mi li pona._",
          answer: '"My business is good."',
        },
        {
          type: "open-ended",
          question: '"No people are evil."',
          answer: "_jan ala li ike._",
        },
        {
          type: "open-ended",
          question: "_kulupu lipu sina li sona e toki pona._",
          answer: '"Your book club knows about a simple language."',
        },
        {
          type: "open-ended",
          question: '"The group of monkeys drink oceans."',
          answer: "_kulupu soweli li moku e telo suli._",
        },
        {
          type: "open-ended",
          question: "_mi kalama._",
          answer: '"I recite."',
        },
        {
          type: "open-ended",
          question: '"I love the new sounds."',
          answer: "_mi olin e kalama sin._",
        },
        {
          type: "open-ended",
          question: "_meli mute li olin e kulupu ona._",
          answer: '"Many women love their community."',
        },
        {
          type: "open-ended",
          question: '"Your food is delicious."',
          answer: "_moku sina li pona._",
        },
      ],
    },
    {
      type: "article",
      title: "Using Adjectives as Verbs",
      vocab: ["lete", "seli", "pali", "lukin", "sewi", "pilin"],
      content: [
        "Today's vocab:",
        [
          "_lete_: cold, uncooked",
          "_lukin_: to look",
          "_pali_: to create, to do",
          "_pilin_: feeling, emotion, to feel",
          "_seli_: warm, hot, to cook",
          "_sewi_: divine, elevated, god",
        ],
      ],
    },
    {
      type: "article",
      title: "End",
      vocab: [],
      content: [
        "Looks like you've made it through the whole course! Pat yourself on the back. You should now know every Toki Pona word (unless more have been added).",
      ],
    },
  ];

  const usedWords = new Set<TokiPonaWord>(
    levels
      .filter(
        (lesson): lesson is Lesson & { type: "article" } =>
          lesson.type == "article"
      )
      .flatMap((lesson) => lesson.vocab)
      .filter((e): e is TokiPonaWord => e !== undefined)
  );

  const unusedWords = allWords.filter((word) => !usedWords.has(word));

  // TODO: Remove this
  console.log(unusedWords);

  for (const level of levels) {
    if (level.type == "quiz") {
      shuffleInPlace(level.questions as any);

      for (const question of level.questions) {
        if (question.type == "selection") {
          shuffleInPlace(question.answers as any);
        }
      }
    }
  }

  const levelNum = (() => {
    const levelNum = useClamp(
      useLocalStorage("learn-toki-pona:level", 1),
      0,
      levels.length - 1
    );

    if (levelNum.value !== levelNum.value) {
      levelNum.value = 0;
    }

    return computed({
      get() {
        return levelNum.value;
      },
      set(v) {
        levelNum.value = v;
        level.value = levels[levelNum.value];
        start();
      },
    });
  })();

  const level = ref(levels[levelNum.value]);
  const display = ref<Display>(levels[0] as Lesson & { type: "article" });
  const revealed = ref(0);
  const questionIndex = ref(0);
  const selectedAnswerIndex = ref(-1);
  const field = ref("");
  const remark = ref<Content>("");

  start();

  function start() {
    selectedAnswerIndex.value = -1;
    field.value = "";
    remark.value = "";

    if (level.value.type == "article") {
      revealed.value = 1;
      display.value = level.value;
    } else if (level.value.type == "quiz") {
      revealed.value = 1;

      const question = level.value.questions[questionIndex.value];
      if (question.type == "no-field") {
        const content: Content[] = [
          question.question,
          { type: "nobreak", content: question.answer },
        ];

        if (level.value.description) {
          content.unshift(level.value.description);
          revealed.value++;
        }

        display.value = {
          type: "article",
          content,
        };
      } else if (question.type == "selection") {
        display.value = {
          ...question,
          question: level.value.description
            ? [level.value.description, question.question]
            : question.question,
        };
      } else if (question.type == "validated") {
        display.value = {
          ...question,
          question: level.value.description
            ? [level.value.description, question.question]
            : question.question,
        };

        setTimeout(() => {
          const [fieldEl] = document.getElementsByClassName("tp-field");

          if (fieldEl instanceof HTMLElement) {
            fieldEl.focus();
          }
        });
      } else if (question.type == "open-ended") {
        let content: Content = question.question;

        if (level.value.description) {
          content = [level.value.description, content];
        }

        display.value = {
          type: "validated",
          question: content,
          remark: ["Compare your answer against ours:", question.answer],
          validate: () => success(),
        };

        setTimeout(() => {
          const [fieldEl] = document.getElementsByClassName("tp-field");

          if (fieldEl instanceof HTMLElement) {
            fieldEl.focus();
          }
        });
      }
    }
  }

  function nextQuestion() {
    if (level.value.type == "article") {
      levelNum.value++;
      questionIndex.value = 0;
      start();
    } else if (level.value.type == "quiz") {
      const index = ++questionIndex.value;

      if (index == level.value.questions.length) {
        levelNum.value++;
        questionIndex.value = 0;
        start();
        return;
      }

      start();
    }
  }

  useEventListener("keydown", (event) => {
    if (
      event.target instanceof HTMLButtonElement ||
      event.target instanceof HTMLAnchorElement ||
      event.target instanceof HTMLInputElement
    ) {
      return;
    }

    if (
      event.altKey ||
      event.ctrlKey ||
      event.metaKey ||
      (event.key != " " && event.key != "Enter")
    ) {
      return;
    }

    const next = document.querySelector(".next");
    if (next instanceof HTMLElement) {
      next.click();
      event.preventDefault();
    }
  });

  function onSubmit(event?: Event) {
    if (display.value.type != "validated") {
      return;
    }

    event?.preventDefault();

    if (revealed.value == 2) {
      nextQuestion();
    } else {
      const value = field.value
        .toLowerCase()
        .trim()
        .replace(/\s+/g, " ")
        .replace(/\s+([.,:;?!])/g, "$1");

      if (!value) return;

      const { valid, remark: r } = display.value.validate(value);
      remark.value = r || "";

      if (valid) {
        revealed.value = 2;
      }
    }
  }

  function showCurrentLevel() {
    const el = document.querySelector(".tp-current-level");

    if (el instanceof HTMLElement) {
      el.scrollIntoView({
        inline: "center",
        block: "center",
      });
    }
  }

  function showCurrent() {
    const el = document.querySelector(".tp-current");

    if (el instanceof HTMLElement) {
      el.scrollIntoView({
        inline: "center",
        block: "center",
        behavior: "smooth",
      });
    }
  }

  setTimeout(showCurrentLevel);
</script>

<template>
  <div class="sticky">
    <div class="levels">
      <div class="x-spacer" />

      <ProgressCircle
        v-for="(_, levelIndex) in levels"
        :key="`${levelNum} ${questionIndex} ${levelIndex}`"
        :class="{ 'tp-current-level': levelNum == levelIndex }"
        :action="() => (levelNum = levelIndex)"
        :progress="
          levelNum < levelIndex
            ? 0
            : levelNum > levelIndex
            ? 1
            : level.type == 'article'
            ? revealed / level.content.length
            : level.type == 'quiz'
            ? (2 * questionIndex + revealed) / (2 * level.questions.length)
            : 0.5
        "
      >
        {{ levelIndex }}
      </ProgressCircle>

      <div class="x-spacer" />
    </div>
  </div>

  <DocumentDisplay no-footer>
    <VStack :space="1" style="min-height: 100%; align-items: center">
      <div style="height: 6rem" />

      <VStack class="question">
        <div style="flex: 1" />

        <h1 class="title">
          {{ level.title }}
        </h1>

        <MiddleText>
          <VStack v-if="display.type == 'article'" :space="1">
            <div
              v-for="(item, index) in display.content"
              :key="`${levelNum} ${questionIndex} ${index}`"
              :class="{ 'tp-current': revealed == index + 1 }"
              style="position: relative"
            >
              <Button
                v-if="display.content.length != revealed && revealed == index"
                class="next overlay"
                @click="revealed++, showCurrent()"
              >
                {{
                  level.type == "quiz"
                    ? "What's the answer?"
                    : "Tell me more..."
                }}
              </Button>

              <TokiPonaContent
                :key="`${levelNum} ${questionIndex} ${index}`"
                :content="item"
                :hidden="index >= revealed"
              />
            </div>

            <Button
              v-if="levelNum + 1 != levels.length"
              class="next"
              :style="{
                visibility:
                  display.content.length == revealed ? undefined : 'hidden',
              }"
              @click="nextQuestion"
            >
              {{
                level.type == "quiz" &&
                questionIndex + 1 != level.questions.length
                  ? "Okay, next question."
                  : "Okay, next lesson."
              }}
            </Button>
          </VStack>

          <VStack v-else-if="display.type == 'selection'" :space="1">
            <TokiPonaContent
              :key="`${levelNum} ${questionIndex}`"
              :content="display.question"
            />

            <HStack
              :wraps="
                display.size == 'full'
                  ? '100%'
                  : display.size == 'medium'
                  ? '8em'
                  : display.size == 'small'
                  ? '6em'
                  : '12em'
              "
              stretch
            >
              <Button
                v-for="(answer, index) in display.answers"
                :key="`${levelNum} ${questionIndex} ${index}`"
                :class="{
                  selected: revealed == 2 && selectedAnswerIndex == index,
                }"
                :disabled="revealed == 2"
                :style="{
                  visibility:
                    revealed == 1 || answer.correct ? undefined : 'hidden',
                }"
                @click="
                  (selectedAnswerIndex = index),
                    display.type == 'selection'
                      ? answer.correct
                        ? (revealed = 2)
                        : ($event.target.disabled = true)
                      : null
                "
              >
                <TokiPonaText :content="answer.label" />
              </Button>
            </HStack>

            <p
              :style="{
                visibility: selectedAnswerIndex == -1 ? 'hidden' : undefined,
                textAlign: 'left',
              }"
            >
              <TokiPonaText
                :key="`${levelNum} ${questionIndex} ${selectedAnswerIndex}`"
                :content="
                  display.answers[selectedAnswerIndex]?.remark ??
                  (display.answers[selectedAnswerIndex]?.correct
                    ? 'That is the correct answer!'
                    : 'Sorry, try again.')
                "
              />
            </p>

            <Button
              class="next"
              :disabled="revealed != 2"
              :style="{ visibility: revealed == 2 ? undefined : 'hidden' }"
              style="width: 100%; margin-top: 0 !important"
              @click="nextQuestion"
            >
              {{
                level.type == "quiz" &&
                questionIndex + 1 != level.questions.length
                  ? "Okay, next question."
                  : "Okay, next lesson."
              }}
            </Button>
          </VStack>

          <VStack v-else-if="display.type == 'validated'" :space="1">
            <TokiPonaContent
              :key="`${levelNum} ${questionIndex} ${revealed}`"
              :content="display.question"
            />

            <form @submit="onSubmit">
              <Field
                v-model="field"
                class="selected tp-field"
                :disabled="revealed == 2"
                style="margin-bottom: 0"
              />
            </form>

            <div
              :style="{
                visibility: remark || revealed == 2 ? undefined : 'hidden',
                textAlign: 'left',
              }"
            >
              <TokiPonaContent
                :key="`${levelNum} ${questionIndex} ${revealed} ${remark}`"
                :content="
                  (remark,
                  display,
                  revealed,
                  remark ||
                    display.remark ||
                    (revealed == 2
                      ? 'That is the correct answer!'
                      : 'Sorry, try again.'))
                "
              />
            </div>

            <Button
              class="next"
              :disabled="!field"
              style="width: 100%; margin-top: 0 !important"
              @click="onSubmit"
            >
              {{
                revealed != 2
                  ? "Check my answer."
                  : level.type == "quiz" &&
                    questionIndex + 1 != level.questions.length
                  ? "Okay, next question."
                  : "Okay, next lesson."
              }}
            </Button>
          </VStack>
        </MiddleText>

        <div style="flex: 1" />
      </VStack>
    </VStack>
  </DocumentDisplay>
</template>

<style lang="scss" scoped>
  p {
    margin: 0;
  }

  .question {
    flex: 1;
    padding-bottom: 2.5em;
  }

  .sticky {
    position: fixed;
    top: 3.5em;
    z-index: 3;
    width: 100%;
    padding-top: 2em;
    padding-bottom: 1em;
    overflow: auto;
    -webkit-backdrop-filter: blur(0.5em);
    backdrop-filter: blur(0.5em);

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 400px) {
      top: 2.5em;
      padding-top: 1.5rem;
    }
  }

  .x-spacer {
    display: block;
    min-width: max((100vw - 1000px) / 2 - 0.5em, 1.5em);
    color: transparent;

    @media (max-width: 400px) {
      min-width: max((100vw - 1000px) / 2 - 0.5em, 1em);
    }
  }

  .levels {
    display: flex;
    flex-direction: row;
    gap: 0.5em;
    font-size: 1rem;
    background-clip: content-box;
  }

  .title {
    margin: 0;
    font-size: 1.75rem;
    text-align: center;
  }

  .next {
    min-width: 250px;
    max-width: min(250px, 100%);

    .stack > & {
      margin: 0 auto !important;
      margin-top: 0.5em !important;
    }
  }

  .overlay {
    position: absolute;
    left: calc((100% - min(250px, 100%)) / 2);
    margin: 0 auto;
    margin-top: 0;
  }
</style>
