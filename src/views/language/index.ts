import { load } from "js-yaml";
import { reactive } from "vue";

export const output = reactive({});

import("./words.yml?raw").then((doc) => {
  Object.assign(output, load(doc.default));
});

const wordRegex = /\w/;

export function splitParagraph(text: string, isSource?: boolean) {
  if (isSource) {
    return (text.match(/\w+|[^\w]+/g) || []).map((text) => {
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

export function matches(field: string, word: string, info: WordInfo) {
  const query = field.trim().split(/\s+/g);
  if (query.length === 0 || !query[0]) return true;

  return query.every((query) => {
    return word.includes(query) || info.translation.includes(query);
  });
}
