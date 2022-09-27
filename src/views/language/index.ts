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
