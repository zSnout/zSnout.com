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
