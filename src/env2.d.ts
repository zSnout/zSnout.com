declare module "virtual:blog-articles" {
  import { Frontmatter } from "vite-plugin-md";

  export interface Article {
    path: string;
    frontmatter: Frontmatter;
  }

  const articles: Article[];
  export default articles;
}

declare module "virtual:image-list" {
  const images: readonly string[];
  export default images;
}

declare module "*.md" {
  import { DefineComponent } from "vue";

  const comp: DefineComponent;
  export default comp;
}

declare module "*.vue" {
  import { DefineComponent } from "vue";

  const comp: DefineComponent;
  export default comp;
}
