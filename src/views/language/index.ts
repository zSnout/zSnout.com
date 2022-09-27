import { load } from "js-yaml";
import { reactive } from "vue";

export const output = reactive({});

import("./words.yml?raw").then((doc) => {
  Object.assign(output, load(doc.default));
});

export function splitParagraph(text: string) {
  return (text.match(/_\w+_|[^_]+/g) || []).map((text) => {
    if (text.startsWith("_")) {
      return { word: text.slice(1, -1) };
    }

    return { isText: true, word: text };
  });
}
