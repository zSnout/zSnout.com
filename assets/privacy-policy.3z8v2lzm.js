import{l as n,x as i,C as r,D as t,ab as l,a8 as e,H as o}from"./runtime-core.esm-bundler.55v0mz3f.js";const u=e("div",{class:"markdown-body"},[e("h1",{id:"zsnout%E2%80%99s-privacy-policy",tabindex:"-1"},"zSnout’s Privacy Policy"),e("p",null,"zSnout’s privacy policy does not contain legal advice and is not legally binding. It is an overview of how your data is stored."),e("p",null,[e("strong",null,"As long as this policy is active, zSnout promises never to share any of your personal information with third parties.")]),e("blockquote",null,[e("p",null,"Many browsers and devices have their own implementations of a bookmark system and notes app. In the context of zSnout, we almost always mean our own apps.")]),e("h2",{id:"what-is-open-source%3F",tabindex:"-1"},"What is open source?"),e("p",null,[o("Before we even get into how your data is collected, you (the reader) should know that zSnout is an open source project. All of our source code (what powers this website) is publicly available and can be used by other people under the "),e("a",{href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GNU General Public License"),o(".")]),e("p",null,[o("If you need a longer explanation of what open source is, check out "),e("a",{href:"https://opensource.com/resources/what-open-source"},"this article at OpenSource.com"),o(".")]),e("p",null,[o("All of zSnout’s code is available at "),e("a",{href:"https://github.com/zSnout/zSnout.com"},"zSnout/zSnout.com on GitHub"),o(". It’s mostly written in Vue, TypeScript, SCSS, CSS, and HTML. If you know what that means, great. If you don’t, then don’t worry about it.")]),e("h2",{id:"what-data-is-collected%3F",tabindex:"-1"},"What data is collected?"),e("p",null,"If you’re browsing our site without an account, no data will be collected on the zSnout servers about you. Your browser will store your preferred theme (light or dark), preferred grid size (whether to show text descriptions on the home page), and your bookmarks."),e("p",null,"Some pages (e.g. Fractal Explorer and Storymatic) will save settings for that page in the URL. This is not shared with the server, but it allows you to save the page as a bookmark in your browser or with zSnout’s bookmark system."),e("p",null,"zSnout does not use advertising systems or analytics trackers."),e("p",null,"When you create an account with us, we store:"),e("ul",null,[e("li",null,"the creation time and date of your account,"),e("li",null,"your username,"),e("li",null,[o("your password ("),e("a",{href:"https://nordpass.com/blog/password-hash/"},"hashed using bcrypt"),o("),")]),e("li",null,"your session ID (see below for more details),"),e("li",null,"your email address,"),e("li",null,"whether you’ve been verified,"),e("li",null,"your verification code (see below for more details),"),e("li",null,"a list of your bookmarks, and"),e("li",null,"an index of your notes"),e("li",null,"a list of your chats and their messages")]),e("h3",{id:"what-is-a-session-id%3F",tabindex:"-1"},"What is a session ID?"),e("p",null,"To prevent malicious access to your account, zSnout creates a session ID for you automatically when you sign up or log in. This is stored on your device and in our servers. Whenever you take an action that requires a login (e.g. changing your password), your browser’s session ID is checked against the server’s. If they match, we allow you to perform the action. If they don’t match, we log you out immediately."),e("p",null,[o("By going to the "),e("a",{href:"/my-account"},"My Account"),o(" page, you can click “Log Out of Other Devices” to reset your session ID immediately. Because of this, your other devices will be logged out once they connect to our servers.")]),e("p",null,"If you’re logged out, simply log in again and we’ll send over the latest session ID to your device, allowing you to browse as normal."),e("h3",{id:"what-is-a-verification-code%3F",tabindex:"-1"},"What is a verification code?"),e("p",null,"When you first create an account, zSnout sends you an email to make sure that you’re not a robot. The email contains a link to verify your account with a special code. When you click the link, your verification code is checked against the server’s. If they match, you’ll be logged in and your account will be verified. If they don’t, nothing will happen and your account will stay unverified."),e("h2",{id:"bookmarks",tabindex:"-1"},"Bookmarks"),e("p",null,"Because many pages need to save data in the cloud, zSnout has a built-in bookmark system. If you don’t have an account, bookmarks are saved locally on your device. Each bookmark has an name and a URL."),e("p",null,"If you’re logged in to an account, zSnout automatically syncs your bookmarks with our servers. The server will keep a copy of the list and your browser will keep another copy."),e("p",null,"There is currently no way to opt-out of bookmark syncing."),e("h2",{id:"notes",tabindex:"-1"},"Notes"),e("p",null,"zSnout has a Notes application that allows users to store up to 100 notes, each with a 99 character title and 10kb body. These notes are only stored server side, and the Notes app itself is only accessible when you’re online and logged in."),e("h2",{id:"chats",tabindex:"-1"},"Chats"),e("p",null,"zSnout has a Chats application that allows users to create chats with a 100-character title and 1kb messages. The chats are only stored server side, and the Chats app itself is only accessible when you’re logged in."),e("h2",{id:"stories",tabindex:"-1"},"Stories"),e("p",null,"zSnout has a Stories application that allows users to create and share stories where each user can only see the previous sentence of a story. These stories are only stored server side, and the Stories app itself is only accessible when you’re online and logged in.")],-1),c=e("nav",null,[e("ul",null,[e("li",null,[e("a",{href:"#what-is-open-source%3F"},"What is open source?")]),e("li",null,[e("a",{href:"#what-data-is-collected%3F"},"What data is collected?"),e("ul",null,[e("li",null,[e("a",{href:"#what-is-a-session-id%3F"},"What is a session ID?")]),e("li",null,[e("a",{href:"#what-is-a-verification-code%3F"},"What is a verification code?")])])]),e("li",null,[e("a",{href:"#bookmarks"},"Bookmarks")]),e("li",null,[e("a",{href:"#notes"},"Notes")]),e("li",null,[e("a",{href:"#chats"},"Chats")]),e("li",null,[e("a",{href:"#stories"},"Stories")])])],-1),h={hasToc:!0},m="",f=n({__name:"privacy-policy",setup(d,{expose:a}){return a({frontmatter:{hasToc:!0},excerpt:void 0}),(y,p)=>{const s=l("prose");return i(),r(s,{frontmatter:h},{aside:t(()=>[c]),default:t(()=>[u]),_:1})}}});export{f as default,m as excerpt,h as frontmatter};
