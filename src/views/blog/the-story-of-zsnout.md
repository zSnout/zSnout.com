---
author: sakawi
category: meta
date: 2022-03-02
updated: 2022-09-07
---

Have you ever wondered how zSnout began? Let's hear the story together and take
a deep dive into the early years of zSnout.

## Life Before zSnout

Back in third grade I taught myself Python and learned how to make simple turtle
programs and text adventures. Throughout 2018 I used my knowledge to construct
[a website where you can learn Python][1] using Google Sites that's still active
today. We started learning Python in class in fourth grade and I was able to
help lots of people out while they were starting out. It was a fun adventure and
I learned a lot along the way.

Fourth grade was also the year my math teacher started using Khan Academy to
help us practice our skills and learn new ones. I've always enjoyed math and it
was fun for me. While using the site I took an interest in [Khan Academy][2]'s
computer programming courses. Specifically, I started using their Intro to JS
course to learn the foundations of JavaScript. Armed with an introduction to
programming in JS and Python, I began making small programs and started learning
other languages, such as HTML, CSS, and the jQuery library.

## Beginning of COVID

When COVID first started in the United States I was in fourth grade. Our
teachers assured us that we'd be back in a few weeks (or years) and that we'd
have enough to work on at home. Every day we had three Zoom classes that would
be over by noon, leaving the rest of the day for an "asynchronous" class where
we'd work on anything the teachers assigned us. I usually got all my work done
before the end of the day and didn't have anything left to do!

To remedy my boredom I started creating an online chat application using
[000webhost][3]. To do this I taught myself PHP and MySQL. My basic
implementation was slow and taxing on network requests, but it worked
flawlessly. I started adding more to it and created my first application,
FastChat. Sadly, I created it using a school Google account that I no longer
have access to and it's gone down.

Sometime near the beginning of April I decided that I would need a better system
to keep working on my projects. Since 000webhost had a way to upgrade to
Hostinger, I used my allowance to buy a subscription on Hostinger and started
work on a bigger site. I wanted to buy a domain name that was related to me
without using my personal data. My dad came up with the name zSnout, short for
Zorro's Snout with Zorro being my dog. I bought the domain and set up my site
using PHP and MySQL on April 3rd.

I started working on the site and got an account system working which was to be
the base of the project. I then began work on implementing FastChat using the
new account system and it worked really well. FastChat would grow to become my
favorite app and I would continue to work on it for a long time. I also created
a timeline app called TimelineOnline and even made a [custom file extension][4]
for it as well as the first iteration of Storymatic (then called [Story.py][5]).
I kept working on this version of the site until early February of 2020.

## Security Considerations

The problem with jumping into coding before learning about all the things I
needed to consider was that my systems had many flaws. For example, I forgot to
verify users via email allowing my databases to become clogged with spam. I also
didn't know how to set up a package manager and had to write all my code from
scratch which, while fun in its own way, can be very unproductive. To combat
these problems I decided to rewrite zSnout from scratch.

I moved the old files into a separate directory so they wouldn't be lost to time
and started the rebuilding process. It took a lot of effort to get everything
back online but I got everything finished by April 3rd of 2020 and released
zSnout 2 on its original birthday. I continued working on this version through
July of 2021 and kept it up to date with the latest features and security
updates.

I still hadn't learned how to use a package manager, Git, or environment
variables. For these and other reasons, the site is not available publicly for
download and inspection. I did manage to retrieve a copy of the source code and
store it in my Google Drive to prevent it being lost to time forever, but
looking through all the code for security vulnerabilities is a very time
consuming process and I'd rather keep it out of the public eye than risk an
attack on zSnout.

## Node.JS Enters the Game

While working on zSnout I started hearing about a language that allowed you to
program in JavaScript ... on the server! I became excited about the prospect of
only needing one language for all my scripting needs instead of relying on
[PHP][6], an outdated language missing the features I loved from JavaScript. I
decided to learn [Node.JS][7].

The first course I took explained how to set up a static directory, modifiable
views, and a database with Express. I loved working with Express because it
provided a solid foundation for my code and didn't fall too far from my standard
idea of writing all my code myself. I thought it was interesting and began
constructing zSnout using this technology in [this GitHub repo][8]. The first
commit to the repo was made during August 2021 but I began working on the
project long before that date.

It was also my first introduction to the [VSCode editor][9], which I use to this
day. I like VSCode because it has amazing integration with all the tools I work
with. For me it was exciting because it also let me use autocomplete in my code
which let me work faster and get more work done on zSnout. I even managed to
install a tool called GitHub Copilot that helped me tremendously with coding.
You can [read my review here][10].

Working with Node.JS was also amazing because of the vast number of packaged
code available to me. Suddenly I could build chess apps with instant interaction
and create chat applications with very little effort. I even managed to create a
full video calling app in less than 150 lines of code!

## Growing with TypeScript

After working with Node.JS, Express, EJS, and MongoDB for a while, I began to
notice a two major issues. One of them was strange errors popping up across the
site. My code seemed to be working, but without proper tooling, I'd run into
more and more scalability issues. I'd heard about a language called TypeScript
that claimed to solve these problems and decided to learn it. I rewrote the
codebase in TypeScript and it was a huge success. Everything seemed to work more
fluidly and the transition went seamlessly.

The other major advantage of using TypeScript was better autocomplete. While
VSCode's internal JavaScript tooling services capture function return values and
variable types well, I was able to autocomplete object keys and other data much
better when using TypeScript, making my development much faster. Without
TypeScript and Node.JS, zSnout wouldn't be at the level it is today.

## Modularizing the Site

The other huge issue I had was that the site was too tightly coupled together. I
wanted zSnout to work seamlessly without needing complex dependency structures.
The best solution for that was to make it modular. I had my choice of several
different libraries offering these capabilities, but decided to make my own
system by separating the code into seperate NPM packages.

As you may expect, trying to do that without solving common problems or putting
much thought into the system didn't work out well for me. In fact, I probably
spent more time on the TypeScript typings for [@zsnout/core][11] than I did on
the content of [zSnout 4][12]. It only lasted for about two months before I
realized that this system wouldn't work and I decided to switch to a different
approach.

I started work on [zSnout 5][13] in December of 2021. In an attempt to make
everything simpler, I tried to just use EJS and MongoDB rather than trying out
new technologies. This was the first new version that got a chance on the main
site, [zsnout.com][14]. I got it up and running and continued to work on it for
a long time. I imported over most of the original apps and added tons of new
ones, including our new Fractal Explorer.

However, something didn't feel right about my approach to the site. I had to use
plenty of hacks to get around TypeScript's limits and my approach to build tools
was not the most elegant. I started looking into frameworks and other ways to
improve the site.

## Working with Vue

I started learning a new framework called [Vue][15] in January of 2022. I
thought it was interesting because it turned every part of an application into a
seperate component. For me, Vue seemed like an amazing choice to build zSnout on
and I got to work transferring our existing codebase to it.

While coding, I began to notice how Vue tries to make you split components
apart. For example, I have one small 40-line component called `ImageGrid` that
creates the base grid for several images. I also have another small component
called `GridElement` that is meant to fit inside `ImageGrid`, but could be used
anywhere.

I noticed that many tree of related components were being built that I used all
over the site. For example, the Fractal Explorer uses the `CoordinateCanvas`
conponent which in turn uses `WebGL2Canvas` which uses `FullscreenCanvas` which
uses `FullscreenDisplay` which uses `Navigation` et cetera. This was good
because it meant that each individual component only needed to focus on its own
desires and not worry about the other components.

Another nice thing about Vue is its community of packages. For example, I can
use the [vue-router][16] plugin to allow smooth transitions between pages
without reloading. I can also use [vite-plugin-pwa][17] to make the site work
offline without needing to set up anything myself. In fact, I'm writing this
article from a Markdown file and compiling it into something Vue understands
using [vite-plugin-md][18].

The best part of working with Vue and JavaScript is that I can use open source
and let anyone who wants to contribute to zSnout, submit issues, and fix my
typos. I hope that zSnout grows as a project that our community makes together.

[1]: https://sites.google.com/view/how2py
[2]: https://khanacademy.org/computing/computer-programming
[3]: https://www.000webhost.com/
[4]: https://fileinfo.com/extension/tline
[5]: https://github.com/zSnout/story.py
[6]: https://www.php.net/
[7]: https://nodejs.dev/
[8]: https://github.com/zSnout/v3.zsnout.com
[9]: https://code.visualstudio.com/
[10]: /blog/github-copilot-is-amazing
[11]: https://www.npmjs.com/package/@zsnout/core
[12]: https://github.com/zSnout/v4.zsnout.com
[13]: https://github.com/zSnout/v5.zsnout.com
[14]: https://zsnout.com/
[15]: https://vuejs.org/
[16]: https://router.vuejs.org/
[17]: https://npmjs.com/package/vite-plugin-pwa
[18]: https://npmjs.com/package/vite-plugin-md
