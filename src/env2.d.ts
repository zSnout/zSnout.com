declare module "virtual:image-list" {
  const images: readonly string[];
  export default images;
}

declare module "*.md" {
  import { DefineComponent } from "vue";

  const comp: DefineComponent;
  export default comp;
}
