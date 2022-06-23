export function useTypewrite(text: string, ms: number) {
  const el = document.createElement("p");

  return {
    el,
    done: new Promise<void>((resolve) => {
      let index = 1;
      el.textContent += text[0] || "";

      if (text.length <= 1) {
        setTimeout(resolve, ms);
        return;
      }

      const interval = setInterval(() => {
        el.textContent += text[index++] || "";

        if (index >= text.length) {
          clearInterval(interval);
          resolve();
        }
      }, ms / (text.length - 1));
    }),
  };
}
