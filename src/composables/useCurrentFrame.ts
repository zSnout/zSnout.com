export function currentFrame(video: HTMLVideoElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  return {
    canvas,
    ctx,
    update: (width = video.videoWidth, height = video.videoHeight) => {
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(video, 0, 0, width, height);
    },
  };
}
