import{d as Z,q as b,f as z,o as r,h as l,b as u,w as i,F as c,a as d,t as f,u as o,aB as k,e as a,s as v,aW as y,aF as S,aD as C,c as T,b4 as B,k as D}from"./index.5044v8rtsf00.js";import{C as I}from"./Card.1jxehhenqlog.js";import{D as L}from"./DocumentDisplay.f38sgubl5e80.js";import{I as m}from"./InlineButton.5n1jm7t3mp80.js";import{L as q}from"./LargeTitle.5cf3iod64040.js";import{_ as F}from"./SharedNav.1lm7nnzuivvk.js";import{S as O}from"./SearchableCardGrid.28jm0e74otus.js";import{d as $}from"./useDateOf.86m05b59vpk0.js";import"./index.577400siwc80.js";import"./plugin-vue_export-helper.62h235na3u80.js";import"./Navigation.64w2aw5yn6g0.js";import"./Logo.4djlqykqmru0.js";import"./LogoLight.11xzt69hf600.js";import"./Button.32h7782uxra0.js";import"./Title.2yqtfkd2j540.js";import"./CardGrid.5dgkfhei0cs0.js";var g=[{path:"/blog/divisibility-rules.md",frontmatter:{excerpt:`
You probably know how to find out if a number is divisible by 2, 5, or 10. But
did you know that there's simple divisibility rules for other numbers? Let's
check them out, from 2 to 12!`,author:"Zachary Sakowitz",category:"math",date:"2021-12-07T00:00:00.000Z"}},{path:"/blog/does-0-equal-1.md",frontmatter:{excerpt:`
The "0 = 1" paradox states that the numbers 0 and 1 are equivalent. We can
easily prove this. Once done, we'll show you how you can use this to prove that
any two numbers are equivalent!`,author:"Zachary Sakowitz",category:"math",date:"2021-12-08T00:00:00.000Z"}},{path:"/blog/github-copilot-is-amazing.md",frontmatter:{excerpt:`
GitHub Copilot is an amazing tool that can autocomplete code snippets for you.
In this article I share my experience using GitHub Copilot: the upsides, the
downsides, and what I think it could become.`,author:"Zachary Sakowitz",category:"code",date:"2021-12-09T00:00:00.000Z"}},{path:"/blog/infinity-is-negative-one-twelfth.md",frontmatter:{excerpt:`
Did you know that the sum of all whole numbers is equal to -1/12? In this
article we find out how it's possible and prove it ourselves using simple
algebra and math!`,author:"Zachary Sakowitz",category:"math",date:"2021-12-08T00:00:00.000Z"}},{path:"/blog/is-climate-change-the-8th-extinction.md",frontmatter:{excerpt:`Some people think that climate change is the 8th extinction. Is this really
true? Let's look at some example of why or why not this would be the case.
`,author:"Zachary Sakowitz",category:"camp",date:"2022-07-12T00:00:00.000Z"}},{path:"/blog/make-people-think-of-numbers.md",frontmatter:{excerpt:`
Did you know that using math we can force people to think of certain numbers? We
can use 9, 1089, or any other number you can think of using the simple tricks
described below.`,author:"Zachary Sakowitz",category:"math",date:"2021-12-07T00:00:00.000Z"}},{path:"/blog/mathemagical-tricks.md",frontmatter:{excerpt:`
Have you ever wanted to convince your friend that you have psychic powers? In
this article you'll learn how to use amazing mathematical principles to help you
on your noble quest.`,author:"Zachary Sakowitz",category:"math",date:"2022-04-03T00:00:00.000Z"}},{path:"/blog/the-day-for-any-date.md",frontmatter:{excerpt:`
Ever wondered what day your friend's birthday occurred, or whether the next July
4th will be a Thursday? You can calculate it using simple math, which you'll
learn here!`,author:"Zachary Sakowitz",category:"math",date:"2021-12-07T00:00:00.000Z"}},{path:"/blog/what-makes-zsnout-different.md",frontmatter:{excerpt:"Many things stand out about zSnout that aren't seen in other websites. Let's explore zSnout's purpose, theme system, and offline capabilities.",author:"Zachary Sakowitz",category:"meta",date:"2021-12-09T00:00:00.000Z",updated:"2022-09-04T00:00:00.000Z"}}];const N=a("Blog Articles"),Y={key:0},V=a(" Click "),G=a(" here "),H=a(" You cannot change notification settings when offline. "),W={key:1},A=a("Log in"),E=a(" to a zSnout account or "),M=a("sign up"),U=a(" to receive notification for new blog posts. "),J=d("p",null,[d("strong",null,"Filter By:")],-1),Q=a("Reset Filter"),dt=Z({__name:"index",setup(R){const _=g.map(s=>s.frontmatter.category).filter(s=>!!s).filter((s,e,t)=>t.indexOf(s)===e);g.sort((s,e)=>{if(!s.frontmatter.date)return 1;if(!e.frontmatter.date)return-1;const t=new Date(s.frontmatter.date);return new Date(e.frontmatter.date).valueOf()-t.valueOf()});const h=b(""),x=z("(min-width: 1080px)"),p=b(!1);return(s,e)=>(r(),l(c,null,[u(F,{open:p.value,"onUpdate:open":e[0]||(e[0]=t=>p.value=t)},null,8,["open"]),u(L,null,{help:i(()=>[d("p",null," You can "+f(o(x)?"use the sidebar to filter the pages.":"use the table of contents to filter the pages."),1)]),aside:i(()=>[J,d("nav",null,[d("ul",null,[d("li",null,[u(m,{onClick:e[4]||(e[4]=t=>h.value="")},{default:i(()=>[Q]),_:1})]),(r(!0),l(c,null,k(o(_),t=>(r(),l("li",{key:t},[u(m,{active:h.value===t,onClick:n=>h.value===t?h.value="":h.value=t},{default:i(()=>[a(f(t[0].toUpperCase()+t.slice(1)),1)]),_:2},1032,["active","onClick"])]))),128))])])]),default:i(()=>[u(q,null,{default:i(()=>[N]),_:1}),o(v)?(r(),l("p",Y,[a(" You "+f(o(y)?"are currently receiving":"will not receive")+" notifications for updates to the zSnout blog. ",1),o(S)?(r(),l(c,{key:0},[V,u(m,{onClick:e[1]||(e[1]=t=>o(C).emit("blog:update:will-notify",o(v),!o(y)))},{default:i(()=>[G]),_:1}),a(" to opt-"+f(o(y)?"out of":"in to")+" notifications. ",1)],64)):(r(),l(c,{key:1},[H],64))])):(r(),l("p",W,[u(m,{onClick:e[2]||(e[2]=t=>p.value=!0)},{default:i(()=>[A]),_:1}),E,u(m,{onClick:e[3]||(e[3]=t=>p.value=!0)},{default:i(()=>[M]),_:1}),U])),u(O,{sizes:["list","small"]},{default:i(({size:t})=>[(r(!0),l(c,null,k(o(g),n=>{var w;return r(),l(c,{key:n.path},[!h.value||((w=n.frontmatter.category)==null?void 0:w.includes(h.value))?(r(),T(I,{key:0,date:n.frontmatter.date,description:n.frontmatter.excerpt||"",label:n.frontmatter.category,title:t==="small"?o($)(n.frontmatter.date):o(B)(n.path.slice(6,-3)),to:n.path.slice(0,-3)},null,8,["date","description","label","title","to"])):D("",!0)],64)}),128))]),_:1})]),_:1})],64))}});export{dt as default};
