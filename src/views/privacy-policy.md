# zSnout's Privacy Policy

zSnout's privacy policy does not contain legal advice and is not legally
binding. It is an overview of how your data is stored.

**As long as this policy is active, zSnout promises never to share any of your
personal information with third parties.**

> Many browsers and devices have their own implementations of a bookmark system
> and notes app. In the context of zSnout, we almost always mean our own apps.

## What is open source?

Before we even get into how your data is collected, you (the reader) should know
that zSnout is an open source project. All of our source code (what powers this
website) is publicly available and can be used by other people under the
[GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html).

If you need a longer explanation of what open source is, check out
[this article at OpenSource.com](https://opensource.com/resources/what-open-source).

All of zSnout's code is available at
[zSnout/zSnout.com on GitHub](https://github.com/zSnout/zSnout.com). It's mostly
written in Vue, TypeScript, SCSS, CSS, and HTML. If you know what that means,
great. If you don't, then don't worry about it.

## What data is collected?

If you're browsing our site without an account, no data will be collected on the
zSnout servers about you. Your browser will store your preferred theme (light or
dark), preferred grid size (whether to show text descriptions on the home page),
and your bookmarks.

Some pages (e.g. Fractal Explorer and Storymatic) will save settings for that
page in the URL. This is not shared with the server, but it allows you to save
the page as a bookmark in your browser or with zSnout's bookmark system.

zSnout does not use advertising systems or analytics trackers.

When you create an account with us, we store:

- the creation time and date of your account,
- your username,
- your password
  ([hashed using bcrypt](https://nordpass.com/blog/password-hash/)),
- your session ID (see below for more details),
- your email address,
- whether you've been verified,
- your verification code (see below for more details),
- a list of your bookmarks, and
- an index of your notes
- a list of your chats and their messages

### What is a session ID?

To prevent malicious access to your account, zSnout creates a session ID for you
automatically when you sign up or log in. This is stored on your device and in
our servers. Whenever you take an action that requires a login (e.g. changing
your password), your browser's session ID is checked against the server's. If
they match, we allow you to perform the action. If they don't match, we log you
out immediately.

By going to the [My Account](/my-account) page, you can click "Log Out of Other
Devices" to reset your session ID immediately. Because of this, your other
devices will be logged out once they connect to our servers.

If you're logged out, simply log in again and we'll send over the latest session
ID to your device, allowing you to browse as normal.

### What is a verification code?

When you first create an account, zSnout sends you an email to make sure that
you're not a robot. The email contains a link to verify your account with a
special code. When you click the link, your verification code is checked against
the server's. If they match, you'll be logged in and your account will be
verified. If they don't, nothing will happen and your account will stay
unverified.

## Bookmarks

Because many pages need to save data in the cloud, zSnout has a built-in
bookmark system. If you don't have an account, bookmarks are saved locally on
your device. Each bookmark has an name and a URL.

If you're logged in to an account, zSnout automatically syncs your bookmarks
with our servers. The server will keep a copy of the list and your browser will
keep another copy.

There is currently no way to opt-out of bookmark syncing.

## Notes

zSnout has a Notes application that allows users to store up to 100 notes, each
with a 99 character title and 10kb body. These notes are only stored server
side, and the Notes app itself is only accessible when you're online and logged
in.

## Chats

zSnout has a Chats application that allows users to create chats with a
100-character title and 1kb messages. The chats are only stored server side, and
the Chats app itself is only accessible when you're logged in. The chats app
stores: the creation time, the default permission level, a list of members and
their permissions levels, a list of chat messages, and the chat title. Each chat
message stores who the message was sent by, the 1kb body of the message, and the
timestamp of when the message was sent.
