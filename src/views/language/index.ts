import { load } from "js-yaml";
import { reactive, ref } from "vue";

export const output = reactive<[string, WordInfo][]>([]);
export const field = ref("");

import("./words.yml?raw").then((doc) => {
  const result = load(doc.default) as Record<string, WordInfo>;
  output.push(...Object.entries(result));
});

const wordRegex = /\w/;

export function sort() {
  output.sort(([a], [b]) => (a === b ? 0 : a < b ? -1 : 1));
  if (!field.value.trim()) return output;

  return output.sort(([a, ai], [b, bi]) => {
    const am = matches(a, ai);
    const bm = matches(b, bi);
    const ae = matchesExact(a, ai);
    const be = matchesExact(b, bi);

    if (ae && be) {
      return am && bm ? 0 : am ? -1 : bm ? 1 : 0;
    } else if (ae) {
      return -1;
    } else if (be) {
      return 1;
    } else {
      return am && bm ? 0 : am ? -1 : bm ? 1 : 0;
    }
  });
}

export function splitParagraph(text: string, isSource?: boolean) {
  if (isSource) {
    return (text.match(/_\w+_|(?:(?!_)\w)+|[^\w_]+/g) || []).map((text) => {
      if (text.startsWith("_")) {
        return { isText: true, word: text.slice(1, -1) };
      }

      if (wordRegex.test(text)) {
        return { word: text };
      }

      return { isText: true, word: text };
    });
  }

  return (text.match(/_\w+_|[^_]+/g) || []).map((text) => {
    if (text.startsWith("_")) {
      return { word: text.slice(1, -1) };
    }

    return { isText: true, word: text };
  });
}

interface WordInfo {
  antonym?: string[] | string;
  category: string | string[];
  examples?: [source: string, translation: string][];
  notes?: string;
  plural?: string[] | string;
  similar?: string[] | string;
  singular?: string[] | string;
  synonym?: string[] | string;
  translation: string;
}

export function matches(word: string, info: WordInfo) {
  const query = field.value.trim().toLowerCase().split(/\s+/g);
  if (query.length === 0 || !query[0]) return true;

  return query.every((query) => {
    return (
      word.toLowerCase().includes(query) ||
      info.translation.toLowerCase().includes(query)
    );
  });
}

export function matchesExact(word: string, info: WordInfo) {
  const query = field.value.trim().toLowerCase().split(/\s+/g);
  if (query.length === 0 || !query[0]) return true;

  return query.every((query) => {
    return (
      word.toLowerCase() === query ||
      info.translation.toLowerCase().split(" ").includes(query)
    );
  });
}

export function getReferences() {
  return new Set(
    [...document.querySelectorAll("[href^='#word-']")]
      .filter((e): e is HTMLAnchorElement => e instanceof HTMLAnchorElement)
      .map((link) => link.hash.slice(6))
      .sort()
  );
}

export function getActiveWords() {
  return new Set(
    [...document.querySelectorAll("[id^='word-']")]
      .map((el) => el.id.slice(5))
      .sort()
  );
}

export function broken() {
  const references = getReferences();

  for (const word of getActiveWords()) {
    references.delete(word);
  }

  for (const word of references) {
    document
      .querySelectorAll(`a[href='#word-${word}']`)
      .forEach((node) => ((node as HTMLAnchorElement).style.color = "red"));
  }

  return references;
}

export function dev() {
  return import.meta.env.DEV;
}
