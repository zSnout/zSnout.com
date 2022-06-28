export function currentFrame(video: HTMLVideoElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;

  return {
    canvas,
    update: () => {
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      ctx.drawImage(video, 0, 0);
    },
  };
}
