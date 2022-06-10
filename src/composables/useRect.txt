void useRect(in Bounds bounds, float r, float g, float b) {
  if (
    bounds.xStart <= pos.x && pos.x <= bounds.xEnd &&
    bounds.yStart <= pos.y && pos.y <= bounds.yEnd
  ) {
    color.r += r;
    color.g += g;
    color.b += b;
  }
}
