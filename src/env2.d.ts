import { DefineComponent } from "vue";

declare module "virtual:image-list" {
  const images: readonly string[];
  export default images;
}

declare module "*.md" {
  const comp: DefineComponent;
  export default comp;
}
