import{d as k,k as p,a8 as F,a2 as L,a9 as f,o as n,f as w,O as U,T as M,u as e,aa as H,$ as N,ab as W,a as v,n as V,c as u,w as m,b as a,ac as h,e as x,t as $,ad as b,m as _,_ as z,Y as A,F as Y,p as q,g as R}from"./index.9fb64e80.js";import{_ as S,c as J,V as O}from"./BookmarkIcon.809e7ebf.js";import{D as Z}from"./DocumentDisplay.ce2bc95f.js";import{I as t}from"./ImageCard.4b238f42.js";import{T as K}from"./Title.165d90a3.js";import{S as Q}from"./SearchableCardGrid.9a5223fa.js";import"./CardGrid.507be280.js";var C=["/images/404.png","/images/complex-explorer.png","/images/fractal-explorer.png","/images/hands-free-slides.png","/images/leopards.png","/images/maze-game.png","/images/my-account.png","/images/my-notes.png","/images/reaction-time-tester.png","/images/same-number-generator.png","/images/account/log-in.png","/images/account/sign-up.png","/images/art/blobby-gradient.png","/images/art/ellipses.png","/images/art/fireline.png","/images/art/index.png","/images/art/metaballs.png","/images/art/pixelated-rainbow.png","/images/art/rainbow-blobs.png","/images/art/rectangles.png","/images/debug/index.png","/images/drawing/slider.png","/images/drawing/turntable.png","/images/fractal-presets/burning-ship.png","/images/fractal-presets/chinese-lantern.png","/images/fractal-presets/feather-fractal.png","/images/fractal-presets/flower.png","/images/fractal-presets/index.png","/images/fractal-presets/mandelbrot-set.png","/images/fractal-presets/mandelbrots-necklace.png","/images/fractal-presets/multibrot-set.png","/images/fractal-presets/puddles.png","/images/fractal-presets/raindrop.png","/images/fractal-presets/snowflake.png","/images/fractal-presets/sunlight.png","/images/fractal-presets/telescope.png","/images/lambda-calculus/compiler.png","/images/lambda-calculus/evaluator.png","/images/storymatic/index.png"];const X=["src"],ee=k({__name:"BlurredImage",props:{sensitivity:null,src:null},setup(s){const o=p(!1),i=p(Math.random()),c=p(Math.random()),{x:d,y}=F(),l=L(()=>f.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),r=L(()=>f.value<400?"1.5em":"2em"),g=p(!1);function G(){g.value||(g.value=!0,setTimeout(()=>{i.value=Math.random(),c.value=Math.random(),setTimeout(()=>{g.value=!1},300)}))}return(ce,B)=>{var D,E;return n(),w("img",{class:U([{moving:g.value},"image"]),src:s.src,style:M({display:o.value?void 0:"none",top:`calc(${e(l)} + (var(--app-height) - ${e(l)} - ${e(r)} - 320px) * ${c.value} + ${e(y)-e(H)/2}px / 100 * ${(D=s.sensitivity)!=null?D:1})`,left:`calc(${e(r)} + (var(--app-width) - 2 * ${e(r)} - 320px) * ${i.value} + ${e(d)-e(f)/2}px / 100 * ${(E=s.sensitivity)!=null?E:1})`}),draggable:"false",onClick:G,onLoad:B[0]||(B[0]=de=>o.value=!0)},null,46,X)}}});var I=S(ee,[["__scopeId","data-v-5f6f66b6"]]);const ae=k({__name:"Cover",setup(s){const o=document.getElementsByClassName("nav-root");let i=p(58);o[0]&&({height:i}=N(o[0],void 0,{box:"border-box"}));const c=p(),{height:d}=N(c),{y}=W(window),l=L(()=>{const r=`(${H.value-i.value}px - ${f.value<400?3:4}em)`;return`min(${y.value/2}px, calc((${r} - ${d.value}px) / 2))`});return(r,g)=>(n(),w("div",{class:"cover",style:M({height:`calc(${e(H)-e(i)}px - ${e(f)<400?3:4}em)`})},[v("div",{ref_key:"content",ref:c,class:"content",style:M(`top: ${e(l)}`)},[V(r.$slots,"default",{},void 0,!0)],4)],4))}});var te=S(ae,[["__scopeId","data-v-6dd36fe0"]]);const se=k({__name:"LargeTitle",setup(s){return(o,i)=>(n(),u(K,{class:"title"},{default:m(()=>[V(o.$slots,"default",{},void 0,!0)]),_:3}))}});var P=S(se,[["__scopeId","data-v-5b9ee71c"]]);function T(s){return s[~~(Math.random()*s.length)]}const j=s=>(q("data-v-a7013680"),s=s(),R(),s),re=x("Welcome to zSnout."),ne=j(()=>v("p",{class:"text-color",style:{"line-height":"2"}},[x(" zSnout is a website made by "),v("a",{href:"https://github.com/zsakowitz",target:"_blank",class:"link"},"Zachary Sakowitz"),x(" to create and test various projects. This edition, zSnout 7, is a collection of many of these projects and their archived versions, such as the four versions of Storymatic. You can support Zachary at "),v("a",{class:"link",href:"https://store.zsnout.com/",target:"_blank"},"the zSnout store.")],-1)),oe=j(()=>v("p",{class:"text-color",style:{"margin-top":"-1em"}}," Scroll down and select a page! ",-1)),ie={key:2},le=k({__name:"Home",setup(s){const o=T(C),i=T(C),c=T(C),d=p(!1);return(y,l)=>(n(),w(Y,null,[a(I,{class:"hide-600",src:e(o)},null,8,["src"]),a(I,{class:"hide-800",sensitivity:2,src:e(i)},null,8,["src"]),a(I,{sensitivity:3,src:e(c)},null,8,["src"]),a(J,{open:d.value,"onUpdate:open":l[0]||(l[0]=r=>d.value=r)},null,8,["open"]),a(Z,null,{default:m(()=>[a(te,null,{default:m(()=>[a(O,{class:"stack",space:2},{default:m(()=>[e(h)?(n(),u(P,{key:0},{default:m(()=>[x(" Welcome to zSnout, @"+$(e(h))+". ",1)]),_:1})):(n(),u(P,{key:1},{default:m(()=>[re]),_:1})),ne,oe,e(h)&&e(b)!==!1?(n(),w("p",ie," Hey @"+$(e(h))+"! Your account will be deleted in "+$(e(b)>=120*1e3?`${~~(e(b)/(60*1e3))} minutes`:`${~~(e(b)/1e3)} seconds`)+" unless you verify it with the email we sent you. ",1)):_("",!0)]),_:1})]),_:1}),a(Q,{sizes:["normal","small","icon"],style:{position:"relative","z-index":"2"}},{default:m(()=>[e(z)&&e(A)?(n(),u(t,{key:0,alt:"An outline of a person's head and upper body",bg:"white",description:"Log out of your account, change your username, and modify other account settings.",keywords:"log out",src:"/images/my-account.png",title:"My Account",to:"/my-account"})):_("",!0),e(z)&&!e(A)?(n(),u(t,{key:1,alt:"Someone holding up a sign saying 'Sign Up'",description:"Create a new account on zSnout to save fractals, Storymatic projects, and more.",keywords:"account",src:"/images/account/sign-up.png",title:"Sign Up or Log In",onClick:l[1]||(l[1]=r=>d.value=!0)})):_("",!0),a(t,{alt:"The Mandelbrot Set in a raindow background",description:"View amazing fractal images and interact with them live on your computer.",keywords:"math mandelbrot set",src:"/images/fractal-explorer.png",title:"Fractal Explorer",to:"/fractal-explorer"}),a(t,{alt:"Light green blobs in a blue background",description:"See a carefully curated collection of various interactive fractals.",keywords:"math",src:"/images/fractal-presets/index.png",title:"Fractal Presets",to:"/fractal-presets"}),a(t,{alt:"A sample Storymatic program about groceries",description:"Experiment with 4 versions of a programming language designed by zSnout.",keywords:"programming languages custom",src:"/images/storymatic/index.png",title:"Storymatic",to:"/storymatic/"}),a(t,{alt:"Multicolored overlapping rectangles with unique border styles",description:"See a collection of simple yet beautiful examples of abstract art.",keywords:"gradients squares rectangles circles ellipses",src:"/images/art/index.png",title:"Art",to:"/art/"}),e(z)&&e(A)?(n(),u(t,{key:2,alt:"A notepad",description:"Create notes that will sync across your devices using our simple editor.",keywords:"text editor cloud syncing",src:"/images/my-notes.png",title:"My Notes",to:"/my-notes"})):_("",!0),a(t,{alt:"A black ball at a corner in a maze",description:"Twist and turn your phone or tablet to move a ball around in a randomly generated maze.",keywords:"orientation mobile",src:"/images/maze-game.png",title:"Maze Game",to:"/maze-game"}),a(t,{alt:"An AirPod superimposed on top of the Google Slides logo",description:"Use your AirPods 3 or Pro as a remote for a Google Slides presentation.",keywords:"google presentation airpods remote",src:"/images/hands-free-slides.png",title:"Hands Free Slides",to:"/hands-free-slides"}),a(t,{alt:"Leopards stacked on top of each other",description:"A leap of leopards (look it up) appear and fill your device's screen.",keywords:"images",src:"/images/leopards.png",title:"Leopards",to:"/leopards"}),a(t,{alt:"A flower created from a rainbow gradient with a vignette on its exterior.",description:"Experiment with amazing transformations of the complex plane.",keywords:"math number equation",src:"/images/complex-explorer.png",title:"Complex Explorer",to:"/complex-explorer"}),a(t,{alt:"A white circle with black segments drawn within it",description:"Draw on a rotating tabletop using our simple drawing interface.",keywords:"spinner drawings",src:"/images/drawing/turntable.png",title:"Turntable",to:"/drawing/turntable"}),a(t,{alt:"A sign saying 'Hi' with arrows pointing right",description:"Draw on a table that moves beneath your finger as you create.",keywords:"moving drawings",src:"/images/drawing/slider.png",title:"Slider",to:"/drawing/slider"}),a(t,{alt:"A clock with flames trailing behind it",description:"See what your reaction time is with our simple tester.",keywords:"speed",src:"/images/reaction-time-tester.png",title:"Reaction Time Tester",to:"/reaction-time-tester"}),a(t,{alt:"A lambda calculus program defining the numerals 0 through 9",description:"Run your lambda calculus functions in our interactive editor.",keywords:"programming languages",src:"/images/lambda-calculus/evaluator.png",title:"Lambda Calculus Evaluator",to:"/lambda-calculus/evaluator"}),a(t,{alt:"A comparison of the lambda calculus Mockingbird combinator being applied to itself and its JavaScript counterpart.",description:"Convert your lambda calculus functions into valid and runnable JavaScript code.",keywords:"programming languages javascript",src:"/images/lambda-calculus/compiler.png",title:"Lambda Calculus Compiler",to:"/lambda-calculus/compiler"}),a(t,{alt:"A preview of the 'Same Number Generator' page",description:"It's like a random number generator, but it generates the same number every time.",keywords:"random numbers passkey password",src:"/images/same-number-generator.png",title:"Same Number Generator",to:"/same-number-generator"}),a(t,{alt:"A symbol representing an image with the text 'image not found' beneath the symbol.",description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",src:"/images/404.png",title:"404 page",to:"/404"}),a(t,{alt:"A magnifying glass inspects a bug hidden amongst bookshelves",description:"A collection of pages used to debug and test interfaces such as the canvas APIs.",keywords:"webgl canvas",src:"/images/debug/index.png",title:"Debug Pages",to:"/debug/"})]),_:1})]),_:1})],64))}});var he=S(le,[["__scopeId","data-v-a7013680"]]);export{he as default};
