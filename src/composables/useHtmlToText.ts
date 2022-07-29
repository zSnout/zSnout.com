export function htmlToText(html: string) {
  const el = document.createElement("p");
  el.innerHTML = html;
  return el.textContent || "";
}
