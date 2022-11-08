import { KnownAsTypeMap } from "vite";

type ItemType<T extends ReadonlySet<any>> = T extends ReadonlySet<infer U>
  ? U
  : never;

const allWords = new Set([
  "a",
  "akesi",
  "ala",
  "alasa",
  "ale",
  "ali",
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
] as const);

type TextWord = ItemType<typeof allWords>;

/*
  Usages scraped from https://en.wiktionary.org/wiki/Category:Toki_Pona_lemmas
  using the following code:
  ```
  const category = document.querySelector(".mw-category")
  const lists = [...category.children].map((div) => div.children[1])
  const elements = lists.flatMap((ul) => [...ul.children])
  let texts = elements.map((li) => li.textContent)
  texts = texts.map((text) => text.match(/^Appendix:Toki Pona\/(\w+)$/)?.[1])
  texts = texts.filter((text) => text !== undefined)
  const text = "set(['" + texts.join("', '") + "'])"
  console.log(text)
  ```
 */

function isOfficialWord(word: string): word is TextWord {
  return allWords.has(word as any);
}

function set<T extends TextWord>(iterable: Iterable<T>): ReadonlySet<T> {
  return new Set<T>(iterable);
}

const Category = {
  Adjective: set([
    "a",
    "akesi",
    "ala",
    "ale",
    "ali",
    "anpa",
    "ante",
    "awen",
    "epiku",
    "esun",
    "ike",
    "insa",
    "jaki",
    "jan",
    "jelo",
    "jo",
    "kala",
    "kama",
    "kasi",
    "ken",
    "kin",
    "kiwen",
    "ko",
    "kon",
    "ku",
    "kule",
    "kulupu",
    "kute",
    "lape",
    "laso",
    "lawa",
    "len",
    "lete",
    "lili",
    "linja",
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
    "mun",
    "musi",
    "mute",
    "namako",
    "nanpa",
    "nasa",
    "nasin",
    "nena",
    "ni",
    "nimi",
    "noka",
    "oko",
    "ona",
    "open",
    "pakala",
    "pali",
    "palisa",
    "pan",
    "pana",
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
    "seme",
    "sewi",
    "sike",
    "sin",
    "sina",
    "sinpin",
    "suli",
    "suwi",
    "taso",
    "tawa",
    "toki",
    "tomo",
    "tonsi",
    "unpa",
    "uta",
    "walo",
    "wan",
    "wawa",
    "weka",
  ]),
  Adverb: set(["ala", "anpa", "ken", "mute", "sin"]),
  Conjunction: set(["ante", "anu", "en", "kin", "taso"]),
  Interjection: set([
    "a",
    "ala",
    "ike",
    "jaki",
    "kin",
    "mu",
    "n",
    "pakala",
    "pona",
    "toki",
  ]),
  Noun: set([
    "akesi",
    "ala",
    "alasa",
    "ale",
    "anpa",
    "ante",
    "anu",
    "awen",
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
    "kipisi",
    "kiwen",
    "ko",
    "kon",
    "ku",
    "kule",
    "kulupu",
    "kute",
    "lape",
    "laso",
    "lawa",
    "leko",
    "len",
    "lete",
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
    "namako",
    "nanpa",
    "nasa",
    "nasin",
    "nena",
    "ni",
    "nimi",
    "noka",
    "oko",
    "olin",
    "open",
    "pakala",
    "pali",
    "palisa",
    "pan",
    "pana",
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
    "tawa",
    "telo",
    "tenpo",
    "toki",
    "tomo",
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
  ]),
  Preposition: set(["kepeken", "lon", "sama", "tan", "tawa"]),
  Preverb: set([
    "awen",
    "kama",
    "ken",
    "lukin",
    "open",
    "pini",
    "sona",
    "wile",
  ]),
  Pronoun: set(["mi", "ona", "seme", "sina"]),
  Verb: set([
    "akesi",
    "ala",
    "alasa",
    "ale",
    "anpa",
    "ante",
    "anu",
    "awen",
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
    "kili",
    "kipisi",
    "ko",
    "kokosila",
    "kon",
    "ku",
    "kule",
    "kulupu",
    "kute",
    "lanpan",
    "lape",
    "laso",
    "lawa",
    "len",
    "lete",
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
    "namako",
    "nanpa",
    "nasa",
    "nasin",
    "nena",
    "ni",
    "nimi",
    "noka",
    "oko",
    "olin",
    "open",
    "pakala",
    "pali",
    "palisa",
    "pan",
    "pana",
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
    "seme",
    "sin",
    "sitelen",
    "sona",
    "suli",
    "suwi",
    "tawa",
    "telo",
    "toki",
    "tu",
    "unpa",
    "utala",
    "walo",
    "wan",
    "wawa",
    "weka",
    "wile",
  ]),
} as const;

interface KnownWord<T extends TextWord = TextWord> {
  readonly type: "word";
  readonly word: T;
}

interface UnknownItem {
  readonly type: "unknown";
  readonly item: string;
}

interface Name {
  readonly type: "name";
  readonly name: string;
}

interface Number {
  readonly type: "number";
  readonly value: number;
}

interface EndingSymbol {
  readonly type: "symbol:end";
  readonly symbol: ":" | ";" | "." | "!" | "?";
}

interface ModifierGroup {
  readonly type: "modifier:group";
  readonly root: KnownWord<"nanpa" | "pi" | "tenpo">;
  readonly modifiers: readonly SingleModifier[];
}

interface SingleModifier {
  readonly type: "modifier";
  readonly word: KnownWord<ItemType<typeof Category.Adjective>>;
}

type Modifier = ModifierGroup | SingleModifier | Name;

interface Noun {
  readonly type: "noun";
  readonly root: KnownWord<ItemType<typeof Category.Noun>>;
  readonly modifiers: readonly Modifier[];
}

interface Alternate {
  readonly type: "alternate";
  readonly options: readonly Noun[];
}

type Phrase = Noun | Alternate;

interface Preverb {
  readonly type: "preverb";
  readonly preverb: KnownWord<ItemType<typeof Category.Preverb>>;
}

interface Verb {
  readonly type: "verb";
  readonly verb: KnownWord<ItemType<typeof Category.Verb>>;
}

interface Adverb {
  readonly type: "adverb";
  readonly adverb: KnownWord<ItemType<typeof Category.Adverb>>;
}

interface Action {
  readonly type: "verb";
  readonly preverb?: Preverb;
  readonly verb: Verb;
  readonly adverbs?: Adverb;
  readonly isQuestion: boolean;
}

interface Object {
  readonly type: "object";
  readonly object: Phrase;
}

interface Preposition {
  readonly type: "preposition";
  readonly preposition: KnownWord<ItemType<typeof Category.Preposition>>;
  readonly content: Phrase;
}

interface Predicate {
  readonly type: "predicate";
  readonly action: Action;
  readonly objects: readonly Object[];
  readonly prepositions: readonly Preposition[];
}

interface Context {
  readonly type: "context";
  readonly context: Phrase | Sentence;
}

interface Addressee {
  readonly type: "addressee";
  readonly addressee?: Phrase;
  readonly isCommand: boolean;
}

interface Connection {
  readonly type: "connection";
  readonly sentence: Sentence;
}

interface Sentence {
  readonly type: "sentence";
  readonly addressee?: Addressee;
  readonly context: readonly Context[];
  readonly subject: readonly Phrase[];
  readonly predicate: readonly Predicate[];
  readonly connections: readonly Connection[];
  readonly endingSymbol: EndingSymbol;
}

interface Paragraph {
  readonly type: "paragraph";
  readonly sentences: readonly Sentence[];
}

/** Doesn't indent the first line. */
function indent(text: string) {
  return text.split("\n").join("\n  ");
}

type Diagrammable =
  | string
  | readonly Diagrammable[]
  | {
      readonly type: string;
      readonly [x: string]: Diagrammable;
    };

export function diagram(item: Diagrammable): string {
  if (typeof item == "string") {
    return `"${item}"`;
  } else if (Array.isArray(item)) {
    return item.map(diagram).join("\n");
  } else {
    return `${item.type} –\n  ${indent(
      Object.entries(item)
        .filter(([key]) => key !== "type")
        .map(([key, value]) => `${key}: ${diagram(value)}`)
        .join("\n")
    )}`;
  }
}

export function log(item: Diagrammable) {
  console.log(diagram(item));
}

const wordRegex = /^[A-Za-z]+$/;
const numberRegex = /^\d+$/;

type Element = EndingSymbol | KnownWord | Name | Number | UnknownItem;

function toElement(word: string): Element | undefined {
  word = word.trim().toLowerCase();

  if (isOfficialWord(word)) {
    return { type: "word", word: word };
  } else if (wordRegex.test(word)) {
    return { type: "name", name: word[0].toUpperCase() + word.slice(1) };
  } else if (numberRegex.test(word)) {
    return { type: "number", value: +word };
  } else if (
    word == ":" ||
    word == ";" ||
    word == "." ||
    word == "!" ||
    word == "?"
  ) {
    return { type: "symbol:end", symbol: word };
  }
}

const itemRegex = /\b[A-Za-z]+\b|\d+|[:;.!?]/g;

function toInput(text: string): Input {
  const words = text.match(itemRegex) || [];
  const parsed = words.map(toElement);
  const noUndef = parsed.filter((element): element is Element => !!element);

  return noUndef;
}

function split<T extends Element, U extends T>(
  input: Input<T>,
  splitFn: (element: T) => element is U
): Input<Exclude<T, U>> {
  const output: Exclude<T, U>[] = [];

  for (const element of input) {
    if (!element) break;
  }

  return output;
}

type Input<T extends Element = Element> = readonly (T | undefined)[];

export type Result<T> =
  | { ok: false; value: string; input?: undefined }
  | { ok: true; value: T; input: Input };

function fail(reason: string): Result<never> {
  return { ok: false, value: reason };
}

function succeed<T>(value: T, input: Input): Result<T> {
  return { ok: true, value, input };
}

type Parser<T> = (input: Input) => Result<T>;

namespace Parsers {
  function map<T, U>(parser: Parser<T>, map: (value: T) => U): Parser<U> {
    return (input: Input) => {
      const { input: i, ok, value } = parser(input);

      if (ok) {
        return succeed(map(value), i);
      }

      return fail(value);
    };
  }

  function flatMap<T, U>(
    parser: Parser<T>,
    map: (value: T, input: Input) => Result<U>
  ): Parser<U> {
    return (input: Input) => {
      const { input: i, ok, value } = parser(input);

      if (ok) {
        return map(value, i);
      }

      return fail(value);
    };
  }

  function seq<T extends readonly any[]>(
    ...parsers: { [K in keyof T]: Parser<T[K]> }
  ): Parser<T> {
    return (input: Input) => {
      const output: any[] = [];

      for (let index = 0; index < parsers.length; index++) {
        const { ok, value, input: i } = parsers[index](input);
        if (!ok) return fail(value);
        input = i;
        output[index] = value;
      }

      return succeed(output as any, input);
    };
  }

  function many<T>(parser: Parser<T>): Parser<readonly T[]> {
    return (input: Input) => {
      const output: T[] = [];

      while (true) {
        const { input: i, ok, value } = parser(input);

        if (ok) {
          output.push(value);
          input = i;
          continue;
        }

        return succeed(output, input);
      }
    };
  }

  function many1<T>(parser: Parser<T>): Parser<readonly T[]> {
    return (input: Input) => {
      const output: T[] = [];

      while (true) {
        const { input: i, ok, value } = parser(input);

        if (ok) {
          output.push(value);
          input = i;
          continue;
        }

        if (output.length == 0) {
          return fail("No items were matched.");
        }

        return succeed(output, input);
      }
    };
  }

  function until<T>(parser: Parser<any>): Parser<readonly Element[]> {
    return (rawInput: Input) => {
      const input = rawInput.slice();
      const output: Element[] = [];

      while (true) {
        if (input.length == 0) {
          return succeed(output, input);
        }

        const { ok } = parser(input);

        if (ok) {
          return succeed(output, input);
        }

        output.push(input[0]!);
        input.shift();
      }
    };
  }

  function lookahead<T>(parser: Parser<T>): Parser<T> {
    return (input: Input) => {
      const { ok, value } = parser(input);

      if (ok) {
        return succeed(value, input);
      } else {
        return fail(value);
      }
    };
  }

  function not<T>(parser: Parser<T>): Parser<true> {
    return (input: Input) => {
      const { ok } = parser(input);

      if (ok) {
        return fail(`The parser passed to 'not' was matched.`);
      } else {
        return succeed(true, input);
      }
    };
  }

  function sepBy1<T>(
    parser: Parser<T>,
    separator: Parser<unknown>
  ): Parser<readonly T[]> {
    return (input: Input) => {
      const output: T[] = [];

      while (true) {
        const { input: i, ok, value } = parser(input);

        if (ok) {
          input = i;

          const { input: j, ok } = separator(input);

          if (ok) {
            output.push(value);
            input = j;
            continue;
          }
        }

        if (output.length == 0) {
          return fail("No items were matched.");
        }

        return succeed(output, input);
      }
    };
  }

  function has<T>(category: ReadonlySet<T>, item: any): item is T {
    return category.has(item);
  }

  function category<T extends TextWord>(
    category: ReadonlySet<T>
  ): Parser<KnownWord<T>> {
    return ([first, ...input]: Input) => {
      if (!first || first.type !== "word") {
        return fail("'category' can only match words.");
      }

      if (has(category, first.word)) {
        return succeed(first as KnownWord<T>, input);
      }

      return fail(`'category' failed to match the word '${first.word}'`);
    };
  }

  function any<T extends readonly any[]>(
    ...parsers: { [K in keyof T]: Parser<T[K]> }
  ): Parser<T[number]> {
    return (input: Input) => {
      for (const parser of parsers) {
        const { input: i, ok, value } = parser(input);

        if (!ok) {
          continue;
        }

        return succeed(value, i);
      }

      return fail("None of the parsers in 'any' matched.");
    };
  }

  function deferred<T>(fn: () => Parser<T>): Parser<T> {
    return (input) => fn()(input);
  }

  function merge<T, U extends Partial<T>>(source: T, merged: U): T {
    const output = { ...source };

    for (const key in merged) {
      if (merged[key]) {
        (output as any)[key] = merged[key];
      }
    }

    return output;
  }

  function word<T extends TextWord>(word: T): Parser<KnownWord<T>> {
    return ([first, ...input]: Input) => {
      if (!first || first.type != "word") {
        return fail("'word' cannot match a non-word.");
      }

      if (first.word == word) {
        return succeed({ type: "word", word }, input);
      }

      return fail(`'word' failed to match '${first.word}.'`);
    };
  }

  function optional<T>(parser: Parser<T>): Parser<T | undefined> {
    return (input: Input) => {
      const { input: i, ok, value } = parser(input);

      if (ok) {
        return succeed(value, i);
      } else {
        return succeed(undefined, input);
      }
    };
  }

  function fork<T, A, B>(
    parser: Parser<T>,
    onSuccess: (value: T, input: Input) => Result<A>,
    onFailure: Parser<B>
  ): Parser<A | B> {
    return (rawInput: Input) => {
      const { input, ok, value } = parser(rawInput);

      if (ok) {
        return onSuccess(value, input);
      } else {
        return onFailure(rawInput);
      }
    };
  }

  export const Adjective: Parser<SingleModifier> = map(
    category(Category.Adjective),
    (word): SingleModifier => ({ type: "modifier", word })
  );

  export const Adverb: Parser<Adverb> = map(
    category(Category.Adverb),
    (adverb) => ({ type: "adverb", adverb })
  );

  export const Conjunction = category(Category.Conjunction);
  export const Interjection = category(Category.Interjection);
  export const Noun = category(Category.Noun);

  export const Preverb: Parser<Preverb> = map(
    category(Category.Preverb),
    (preverb) => ({ type: "preverb", preverb })
  );

  export const Preposition = category(Category.Preposition);
  export const Pronoun = category(Category.Pronoun);
  export const Verb = category(Category.Verb);

  export const Ordinal = map(
    seq(word("nanpa"), many1(Adjective)),
    ([root, modifiers]): ModifierGroup => ({
      type: "modifier:group",
      modifiers,
      root,
    })
  );

  export const Time = map(
    seq(word("tenpo"), many1(Adjective)),
    ([root, modifiers]): ModifierGroup => ({
      type: "modifier:group",
      modifiers,
      root,
    })
  );

  export const Pi = map(
    seq(word("pi"), many1(Adjective)),
    ([root, modifiers]): ModifierGroup => ({
      type: "modifier:group",
      modifiers,
      root,
    })
  );

  export const ModifierGroup: Parser<ModifierGroup> = any(Ordinal, Time, Pi);

  export function Name([first, ...input]: Input): Result<Name> {
    if (!first || first.type != "name") {
      return fail("'name' can only match a name.");
    }

    return succeed(first, input);
  }

  export const Modifier: Parser<Modifier> = any(Name, Adjective, ModifierGroup);

  export const Phrase: Parser<Phrase> = map(
    seq(Noun, many(Modifier)),
    ([root, modifiers]): Phrase => ({
      type: "noun",
      modifiers,
      root,
    })
  );

  export function EndingSymbol([first, ...input]: Input): Result<EndingSymbol> {
    if (!first || first.type != "symbol:end") {
      return fail("'EndingSymbol' cannot match a non-symbol.");
    }

    return succeed(first, input);
  }

  /** Possible VerbalPhrase formats:
   * PreVerbWithPolarity VerbalPhrase
   * PrepositionalPhrase !"e"
   * Phrase
   */

  type P = ItemType<typeof Category.Preverb>;
  type V = ItemType<typeof Category.Verb>;
  type A = ItemType<typeof Category.Adverb>;

  export const Action = flatMap(
    until(any(word("li"), word("e"), word("la"), EndingSymbol, Preposition)),
    (elements, input): Result<Action> => {
      if (elements.length == 0) {
        return fail("An action must have at least one word.");
      }

      return fail("The action failed to match.");
    }
  );
}
