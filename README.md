# Welcome to zSnout 7!

We're thrilled you decided to look at our GitHub repository. If you're
interested in running and contributing to zSnout, here are some instructions.

## Downloading the project

To download zSnout, clone it via Git.

```sh
git clone https://github.com/zsnout/zsnout-next
```

Once you've downloaded the project, install the dependencies using

```sh
npm i
```

## Running the project

If you've downloaded the dependencies, you can use a variety of commands to run
zSnout locally.

To start a devlopment server, run

```sh
npm run dev
```

Unfortunately, some of the Vue features zSnout uses don't have support with
Vite's hot reloading, so you may need to reload your browser window if you're
editing the project on the fly.

You can build the project into a `dist` directory using

```sh
npm run build
```

You can preview a built project by running

```sh
npm run preview
```

## Conventions

The final URLs of pages should be lowercase and dash-separated. Because their
names are their URLs, files and folders in the `public` folder should adhere to
this syntax.

Files and folders in the `src` folder should use camelCase. If they are Vue
components, they should begin with an uppercase letter. zSnout has a page titler
and path assigner system that assumes views are using this syntax.

All utilities should go in the `src/composables` folder, even if they do not
accept refs. However, utilities tightly coupled with their components may stay
in the `src/components` folder.

## Creating new pages

To create a new page, add a new Vue file to `src/views`. If you want it to be
the index for a folder, name it `folder/Index.vue`.

The system that assigns page titles and paths bases them on a page's file name,
so make sure to use a short yet descriptive file name.

If a page has an associated cover image, it should be a square 320x320 PNG and
be placed in the `public/images` directory. The file path of the image should
match the output URL of the original path. If the page is an index, the image
should be named `folder/index.png`.
