const canvas = document.createElement("canvas");
const context = canvas.getContext("2d")!;

export function useImageData(element: HTMLImageElement) {
  if (!context) return new ImageData(1, 1);

  canvas.width = element.naturalWidth;
  canvas.height = element.naturalHeight;
  context.drawImage(element, 0, 0, element.naturalWidth, element.naturalHeight);
  return context.getImageData(0, 0, canvas.width, canvas.height);
}
