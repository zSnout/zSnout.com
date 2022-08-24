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
npm i --legacy-peer-deps
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
the index for a folder, name it `folder/index.vue`.

The system that assigns page titles and paths bases them on a page's file name,
so make sure to use a short yet descriptive file name.

If a page has an associated cover image, it should be a square 320x320 PNG and
be placed in the `public/images` directory. The file path of the image should
match the output URL of the original path. If the page is an index, the image
should be named `folder/index.png`.

## Display modes

Almost every page starts with a display mode. Displays add the navigation bar
and create a consistent layout across all pages. Currently, there are three
different display modes. Each mode has its pros and cons, and there are
different use cases for each of them. Additionally, each display mode has
additional features such as an indicator, help screen, and options menu.

The first display mode is DocumentDisplay. DocumentDisplay is for pages that
primarily have text with no background features. Two good examples of this are
the [Same Number Generator](https://zsnout.com/same-number-generator) and the
[Trope Highlighter](https://zsnout.com/trope-highlighter). Both of these pages
have a maximum width of 1000 pixels and have no background elements that take up
the entire page. This is also a good display mode for blog articles, as it adds
padding on all edges and allows easy scrolling through a document. In fact,
Markdown files automatically use this display mode. Additionally,
DocumentDisplay handles rounded corners on certail mobile devices, making sure
that your document looks good on all of them.

For those who feel constrained by DocumentDisplay's short width, you may pass
the `max-width` prop to its Vue component. This remove the 1000 pixel width
constraint, but keeps padding on all edges. The
[Storymatic editors](https://zsnout.com/storymatic/v4-editor) use this combined
with a custom 1200 pixel width to allow more space for coding.

The second display mode is FullscreenDisplay. This is primarily combined with an
HTML5 canvas. FullscreenDisplay uses a floating navigation bar instead of a
sticky one, and the bar doesn't have a background. FullscreenDisplay provides no
padding or margins and may extend its contents in a device's rounded edges, if
you're using an iPhone or another device with these corners. A good example of
FullscreenDisplay is the
[Fractal Explorer](https://zsnout.com/fractal-explorer).

The third display mode is MultiPageDisplay. This is meant for layouts with
multiple sections where each section has unique background elements. It also
supports using CSS Scroll Snap to snap between different sections when its Vue
component is passed a `snap` property. MultiPageDisplay has a sticky navigation
bar and a footer at the bottom of the page.

On a MultiPageDisplay, you must include Pages as children. Each Page takes up
the size of the screen minus the navigation bar automatically. A page alone
provides no padding or margins from the edge of the screen or nearby Pages.
However, you may use a PageContent component to create the same effect that a
DocumentDisplay has by default. A good example of MultiPageDisplay is the
[Homepage](https://zsnout.com/) page.

## Enabling server features

In development mode, a Socket.io server is automatically created on the same
port as the main Vite server, and no setup is needed.

When the project is built, the `dist` directory will contain a file called
`server.mjs`. It is your responsibility to load this as an ES module and call
its `.start()` method. This will create a Socket.io server on localhost on port
`process.env.PORT || 3000`. You must serve static files normally and forward
Socket.io connections to this server.

If you do not create a Socket.io server and forward requests properly, zSnout
will still work properly. However, accounts, cloud bookmarks, and other server
features will not work.

## Using a database

If you're using a Socket.io server, you should also add a database. This enables
account log in, cloud bookmarks, and other features.

To do this, create a MongoDB database called `zsnout` and get a connection URL
similar to this one:

```
mongodb+srv://<username>:<password>@<name>.<code>.mongodb.net/?retryWrites=true&w=majority
```

Then set an environment variable in your shell called `ZSNOUT_DATABASE` to the
URL.

The database will be populated by collections specified in the `Database`
interface in
[server/database.ts](https://github.com/zSnout/zsnout-next/blob/main/server/database.ts#L32).

## Using a mail system

In addition to a database, a mail system is also required to create accounts. To
do this, get your mail host, port, username, and password, and stuff these into
the following environment variables:

```
ZSNOUT_MAIL_HOST
ZSNOUT_MAIL_PORT
ZSNOUT_MAIL_USER
ZSNOUT_MAIL_PASSWORD
```

You should also specify the email you are sending from with `ZSNOUT_MAIL_FROM`.

zSnout uses Nodemailer to send emails. It will attempt a secure connection to
your email server if the specified port is 465.

## Our system for z-indices

1. Background images
2. Page content
3. Page footer
4. Indicator
5. Bookmark window
6. Navigation bar
7. Modal windows

## Special breakpoints

Any display with a width of at most 400px is considered `small`. At this point,
the navigation bar shrinks and DocumentDisplay and PageContent paddings will be
reduced.

A typical DocumentDisplay or PageContent is at most 1000px wide. Displays with
at least this many pixels (wide) are considered `medium`.

Any display with a width of at least 1080px is considered `large`. Large
displays will show Asides without needing a toggle button.
