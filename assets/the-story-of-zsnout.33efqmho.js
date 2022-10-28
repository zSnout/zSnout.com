import{d as i,o as s,c as r,w as o,k as l,a as e,b as t}from"./index.5g74v6w3.js";const d=e("div",{class:"markdown-body"},[e("p",null,"Have you ever wondered how zSnout began? Let\u2019s hear the story together and take a deep dive into the early years of zSnout."),e("h2",{id:"life-before-zsnout",tabindex:"-1"},"Life Before zSnout"),e("p",null,[t("Back in third grade I taught myself Python and learned how to make simple turtle programs and text adventures. Throughout 2018 I used my knowledge to construct "),e("a",{href:"https://sites.google.com/view/how2py"},"a website where you can learn Python"),t(" using Google Sites that\u2019s still active today. We started learning Python in class in fourth grade and I was able to help lots of people out while they were starting out. It was a fun adventure and I learned a lot along the way.")]),e("p",null,[t("Fourth grade was also the year my math teacher started using Khan Academy to help us practice our skills and learn new ones. I\u2019ve always enjoyed math and it was fun for me. While using the site I took an interest in "),e("a",{href:"https://khanacademy.org/computing/computer-programming"},"Khan Academy"),t("\u2019s computer programming courses. Specifically, I started using their Intro to JS course to learn the foundations of JavaScript. Armed with an introduction to programming in JS and Python, I began making small programs and started learning other languages, such as HTML, CSS, and the jQuery library.")]),e("h2",{id:"beginning-of-covid",tabindex:"-1"},"Beginning of COVID"),e("p",null,"When COVID first started in the United States I was in fourth grade. Our teachers assured us that we\u2019d be back in a few weeks (or years) and that we\u2019d have enough to work on at home. Every day we had three Zoom classes that would be over by noon, leaving the rest of the day for an \u201Casynchronous\u201D class where we\u2019d work on anything the teachers assigned us. I usually got all my work done before the end of the day and didn\u2019t have anything left to do!"),e("p",null,[t("To remedy my boredom I started creating an online chat application using "),e("a",{href:"https://www.000webhost.com/"},"000webhost"),t(". To do this I taught myself PHP and MySQL. My basic implementation was slow and taxing on network requests, but it worked flawlessly. I started adding more to it and created my first application, FastChat. Sadly, I created it using a school Google account that I no longer have access to and it\u2019s gone down.")]),e("p",null,"Sometime near the beginning of April I decided that I would need a better system to keep working on my projects. Since 000webhost had a way to upgrade to Hostinger, I used my allowance to buy a subscription on Hostinger and started work on a bigger site. I wanted to buy a domain name that was related to me without using my personal data. My dad came up with the name zSnout, short for Zorro\u2019s Snout with Zorro being my dog. I bought the domain and set up my site using PHP and MySQL on April 3rd."),e("p",null,[t("I started working on the site and got an account system working which was to be the base of the project. I then began work on implementing FastChat using the new account system and it worked really well. FastChat would grow to become my favorite app and I would continue to work on it for a long time. I also created a timeline app called TimelineOnline and even made a "),e("a",{href:"https://fileinfo.com/extension/tline"},"custom file extension"),t(" for it as well as the first iteration of Storymatic (then called "),e("a",{href:"https://github.com/zSnout/story.py"},"Story.py"),t("). I kept working on this version of the site until early February of 2020.")]),e("h2",{id:"security-considerations",tabindex:"-1"},"Security Considerations"),e("p",null,"The problem with jumping into coding before learning about all the things I needed to consider was that my systems had many flaws. For example, I forgot to verify users via email allowing my databases to become clogged with spam. I also didn\u2019t know how to set up a package manager and had to write all my code from scratch which, while fun in its own way, can be very unproductive. To combat these problems I decided to rewrite zSnout from scratch."),e("p",null,"I moved the old files into a separate directory so they wouldn\u2019t be lost to time and started the rebuilding process. It took a lot of effort to get everything back online but I got everything finished by April 3rd of 2020 and released zSnout 2 on its original birthday. I continued working on this version through July of 2021 and kept it up to date with the latest features and security updates."),e("p",null,"I still hadn\u2019t learned how to use a package manager, Git, or environment variables. For these and other reasons, the site is not available publicly for download and inspection. I did manage to retrieve a copy of the source code and store it in my Google Drive to prevent it being lost to time forever, but looking through all the code for security vulnerabilities is a very time consuming process and I\u2019d rather keep it out of the public eye than risk an attack on zSnout."),e("h2",{id:"node.js-enters-the-game",tabindex:"-1"},"Node.JS Enters the Game"),e("p",null,[t("While working on zSnout I started hearing about a language that allowed you to program in JavaScript \u2026 on the server! I became excited about the prospect of only needing one language for all my scripting needs instead of relying on "),e("a",{href:"https://www.php.net/"},"PHP"),t(", an outdated language missing the features I loved from JavaScript. I decided to learn "),e("a",{href:"https://nodejs.dev/"},"Node.JS"),t(".")]),e("p",null,[t("The first course I took explained how to set up a static directory, modifiable views, and a database with Express. I loved working with Express because it provided a solid foundation for my code and didn\u2019t fall too far from my standard idea of writing all my code myself. I thought it was interesting and began constructing zSnout using this technology in "),e("a",{href:"https://github.com/zSnout/v3.zsnout.com"},"this GitHub repo"),t(". The first commit to the repo was made during August 2021 but I began working on the project long before that date.")]),e("p",null,[t("It was also my first introduction to the "),e("a",{href:"https://code.visualstudio.com/"},"VSCode editor"),t(", which I use to this day. I like VSCode because it has amazing integration with all the tools I work with. For me it was exciting because it also let me use autocomplete in my code which let me work faster and get more work done on zSnout. I even managed to install a tool called GitHub Copilot that helped me tremendously with coding. You can "),e("a",{href:"/blog/github-copilot-is-amazing"},"read my review here"),t(".")]),e("p",null,"Working with Node.JS was also amazing because of the vast number of packaged code available to me. Suddenly I could build chess apps with instant interaction and create chat applications with very little effort. I even managed to create a full video calling app in less than 150 lines of code!"),e("h2",{id:"growing-with-typescript",tabindex:"-1"},"Growing with TypeScript"),e("p",null,"After working with Node.JS, Express, EJS, and MongoDB for a while, I began to notice a two major issues. One of them was strange errors popping up across the site. My code seemed to be working, but without proper tooling, I\u2019d run into more and more scalability issues. I\u2019d heard about a language called TypeScript that claimed to solve these problems and decided to learn it. I rewrote the codebase in TypeScript and it was a huge success. Everything seemed to work more fluidly and the transition went seamlessly."),e("p",null,"The other major advantage of using TypeScript was better autocomplete. While VSCode\u2019s internal JavaScript tooling services capture function return values and variable types well, I was able to autocomplete object keys and other data much better when using TypeScript, making my development much faster. Without TypeScript and Node.JS, zSnout wouldn\u2019t be at the level it is today."),e("h2",{id:"modularizing-the-site",tabindex:"-1"},"Modularizing the Site"),e("p",null,"The other huge issue I had was that the site was too tightly coupled together. I wanted zSnout to work seamlessly without needing complex dependency structures. The best solution for that was to make it modular. I had my choice of several different libraries offering these capabilities, but decided to make my own system by separating the code into seperate NPM packages."),e("p",null,[t("As you may expect, trying to do that without solving common problems or putting much thought into the system didn\u2019t work out well for me. In fact, I probably spent more time on the TypeScript typings for "),e("a",{href:"https://www.npmjs.com/package/@zsnout/core"},"@zsnout/core"),t(" than I did on the content of "),e("a",{href:"https://github.com/zSnout/v4.zsnout.com"},"zSnout 4"),t(". It only lasted for about two months before I realized that this system wouldn\u2019t work and I decided to switch to a different approach.")]),e("p",null,[t("I started work on "),e("a",{href:"https://github.com/zSnout/v5.zsnout.com"},"zSnout 5"),t(" in December of 2021. In an attempt to make everything simpler, I tried to just use EJS and MongoDB rather than trying out new technologies. This was the first new version that got a chance on the main site, "),e("a",{href:"https://zsnout.com/"},"zsnout.com"),t(". I got it up and running and continued to work on it for a long time. I imported over most of the original apps and added tons of new ones, including our new Fractal Explorer.")]),e("p",null,"However, something didn\u2019t feel right about my approach to the site. I had to use plenty of hacks to get around TypeScript\u2019s limits and my approach to build tools was not the most elegant. I started looking into frameworks and other ways to improve the site."),e("h2",{id:"working-with-vue",tabindex:"-1"},"Working with Vue"),e("p",null,[t("I started learning a new framework called "),e("a",{href:"https://vuejs.org/"},"Vue"),t(" in January of 2022. I thought it was interesting because it turned every part of an application into a seperate component. For me, Vue seemed like an amazing choice to build zSnout on and I got to work transferring our existing codebase to it.")]),e("p",null,[t("While coding, I began to notice how Vue tries to make you split components apart. For example, I have one small 40-line component called "),e("code",{class:""},"ImageGrid"),t(" that creates the base grid for several images. I also have another small component called "),e("code",{class:""},"GridElement"),t(" that is meant to fit inside "),e("code",{class:""},"ImageGrid"),t(", but could be used anywhere.")]),e("p",null,[t("I noticed that many tree of related components were being built that I used all over the site. For example, the Fractal Explorer uses the "),e("code",{class:""},"CoordinateCanvas"),t(" conponent which in turn uses "),e("code",{class:""},"WebGL2Canvas"),t(" which uses "),e("code",{class:""},"FullscreenCanvas"),t(" which uses "),e("code",{class:""},"FullscreenDisplay"),t(" which uses "),e("code",{class:""},"Navigation"),t(" et cetera. This was good because it meant that each individual component only needed to focus on its own desires and not worry about the other components.")]),e("p",null,[t("Another nice thing about Vue is its community of packages. For example, I can use the "),e("a",{href:"https://router.vuejs.org/"},"vue-router"),t(" plugin to allow smooth transitions between pages without reloading. I can also use "),e("a",{href:"https://npmjs.com/package/vite-plugin-pwa"},"vite-plugin-pwa"),t(" to make the site work offline without needing to set up anything myself. In fact, I\u2019m writing this article from a Markdown file and compiling it into something Vue understands using "),e("a",{href:"https://npmjs.com/package/vite-plugin-md"},"vite-plugin-md"),t(".")]),e("p",null,"The best part of working with Vue and JavaScript is that I can use open source and let anyone who wants to contribute to zSnout, submit issues, and fix my typos. I hope that zSnout grows as a project that our community makes together.")],-1),h=e("nav",null,[e("ul",null,[e("li",null,[e("a",{href:"#life-before-zsnout"},"Life Before zSnout")]),e("li",null,[e("a",{href:"#beginning-of-covid"},"Beginning of COVID")]),e("li",null,[e("a",{href:"#security-considerations"},"Security Considerations")]),e("li",null,[e("a",{href:"#node.js-enters-the-game"},"Node.JS Enters the Game")]),e("li",null,[e("a",{href:"#growing-with-typescript"},"Growing with TypeScript")]),e("li",null,[e("a",{href:"#modularizing-the-site"},"Modularizing the Site")]),e("li",null,[e("a",{href:"#working-with-vue"},"Working with Vue")])])],-1),u={author:"Zachary Sakowitz",category:"meta",date:16462656e5,updated:"2022-09-07T00:00:00.000Z",hasToc:!0},w="",y=i({__name:"the-story-of-zsnout",setup(c,{expose:a}){return a({frontmatter:{author:"Zachary Sakowitz",category:"meta",date:16462656e5,updated:"2022-09-07T00:00:00.000Z",hasToc:!0},excerpt:void 0}),(p,g)=>{const n=l("prose");return s(),r(n,{frontmatter:u},{aside:o(()=>[h]),default:o(()=>[d]),_:1})}}});export{y as default,w as excerpt,u as frontmatter};
