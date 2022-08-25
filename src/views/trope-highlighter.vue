<script lang="ts" setup>
  import { ref } from "vue";
  import Button from "../components/Button.vue";
  import DocumentDisplay from "../components/DocumentDisplay.vue";
  import Overlay from "../components/Overlay.vue";

  const field = ref<HTMLDivElement>();

  /** The possible names for Torah tropes. */
  type TropeNames = keyof typeof Tropes;

  /** A list of Torah tropes. */
  const Tropes = {
    Etnachta: "ב֑",
    SofPassuk: "סֽ",
    Segol: "ב֒",
    Shalsheconst: "ב֓",
    ZakefKatan: "ב֔",
    ZakefGadol: "ב֕",
    Tifcha: "ב֖",
    Rivia: "ב֗",
    Zarka: "ב֮",
    Pashta: "ב֙",
    Yetiv: "ב֚",
    Tevir: "ב֛",
    Pazer: "ב֡",
    QarneFarah: "ב֟",
    TelishaGedola: "ב֠",
    Geresh: "ב֜",
    Gershayim: "ב֞",
    Mercha: "ב֥",
    Munach: "ב֣",
    Mahpach: "ב֤",
    Darga: "ב֧",
    Kadma: "ב֨",
    TelishaKetana: "ב֩",
    MerchaKefula: "ב֦",
    YerachBenYomo: "ב֪",
  };

  for (const [key, val] of Object.entries(Tropes)) {
    (Tropes as any)[key] = val[1];
  }

  const tropes = Object.entries(Tropes) as [TropeNames, string][];

  function tropeOf(word: string) {
    let lastIndex = -1;
    let lastName: TropeNames | `Munach${TropeNames}` | null = null;

    for (const [name, trope] of tropes) {
      if (word.indexOf(trope) > lastIndex) {
        lastIndex = word.indexOf(trope);
        lastName = name;
      }
    }

    return lastName;
  }

  function onPaste(event: ClipboardEvent) {
    event.preventDefault();
    const data = event.clipboardData!;
    if (!data) return;

    const text = data.getData("text/plain");
    if (!text) return;

    // Modified from https://htmldom.dev/paste-as-plain-text/

    const selection = document.getSelection()!;
    if (!selection) return;

    const range = selection.getRangeAt(0);
    range.deleteContents();

    const textNode = document.createTextNode(text);
    range.insertNode(textNode);
    range.selectNodeContents(textNode);
    range.collapse(false);

    selection.removeAllRanges();
    selection.addRange(range);

    onInput();
    highlight();
  }

  function highlight() {
    if (!field.value) return;
    const text = [...field.value.childNodes]
      .map((e) => (e.textContent || "").trim())
      .join(" ");
    if (!text) return;

    const span = document.createElement("span");
    span.textContent = text.trim().replace(/\s+/g, " ");

    const words = span.innerHTML.split(" ");
    const initial = words.map((word) => ({ word, trope: tropeOf(word) })); // First check for tropes
    const final = initial.map(({ word, trope }, index, array) => {
      // Second check to ensure that Munach____ tropes are captured properly
      if (trope == "Munach" && array[index + 1].trope)
        return { word, trope: `Munach${array[index + 1].trope}` };
      else return { word, trope: trope as string };
    });

    const elements = final.map(({ word, trope }) => {
      const element = document.createElement("span");
      element.textContent = word;
      element.classList.add(trope);
      return element;
    });

    const nodes: (Node | string)[] = [elements[0]];
    for (const el of elements.slice(1)) {
      nodes.push(" ", el);
    }

    field.value.replaceChildren(...nodes);
  }

  function onInput() {
    if (!field.value) return;
    field.value.classList.toggle("empty", !!field.value.textContent);
  }
</script>

<template>
  <DocumentDisplay>
    <div
      ref="field"
      class="field second-layer"
      contenteditable
      @paste="onPaste"
    >
      ...Type or paste some Hebrew text here
    </div>
  </DocumentDisplay>

  <Overlay>
    <Button class="color light" @click="highlight">Add Coloring</Button>
  </Overlay>
</template>

<style lang="scss" scoped>
  $tropes: (
    Etnachta: #38761d40,
    SofPassuk: #5b0f0040,
    Segol: #0097a740,
    Shalshelet: none,
    ZakefKatan: #9900ff40,
    ZakefGadol: #1b00af40,
    Tifcha: #ff000040,
    Rivia: #0000ff40,
    Zarka: #d3ff0040,
    Pashta: #00ffff40,
    Yetiv: #ffff0040,
    Tevir: #00008040,
    Pazer:
      linear-gradient(
        110deg,
        #ff000040,
        #ffff0040,
        #00ff0040,
        #0000ff40,
        #ff00ff40
      ),
    QarneFarah: none,
    TelishaGedola: #90909040,
    Geresh: #7f600040,
    Gershayim: #ff00ff40,
    Mercha: #ff990040,
    Munach: none,
    Mahpach: #ffff0040,
    Darga: #98000040,
    Kadma: #00ffff40,
    TelishaKetana: #90909040,
    MerchaKefula: none,
    YerachBenYomo: none,
    MunachEtnachta: #00ff0040,
    MunachSofPassuk: none,
    MunachSegol: none,
    MunachShalshelet: none,
    MunachZakefKatan: #cb7eff40,
    MunachZakefGadol: none,
    MunachTifcha: none,
    MunachRivia: #6d9eeb40,
    MunachZarka: #69800040,
    MunachPashta: none,
    MunachYetiv: none,
    MunachTevir: none,
    MunachPazer: none,
    MunachQarneFarah: none,
    MunachTelishaGedola: #00000040,
    MunachGeresh: none,
    MunachGershayim: none,
    MunachMercha: none,
    MunachMunach: none,
    MunachMahpach: none,
    MunachDarga: none,
    MunachKadma: none,
    MunachTelishaKetana: #00000040,
    MunachMerchaKefula: none,
    MunachYerachBenYomo: none,
  );

  .field {
    height: 100%;
    padding: 1.5rem 2rem;
    color: black;
    font-size: 3em;
    font-family: "Frank Ruhl Libre", "Times New Roman", serif;
    line-height: 1.5em;
    direction: rtl;
    background-color: white;
    outline: none;

    @each $trope, $color in $tropes {
      :deep() .#{$trope} {
        background: $color;
      }
    }

    :deep() span {
      margin: 0 -0.09375em;
      padding: 0.125em;
      white-space: nowrap;
    }
  }

  .color {
    position: absolute;
    right: 1.5em;
    bottom: 1.5em;
  }
</style>
