import{d as k,s as d,a4 as U,aJ as L,aP as f,o,f as x,at as F,au as M,u as e,aQ as H,P as D,aR as R,a as y,m as V,c as u,w as c,b as t,aS as b,e as h,t as z,aT as w,q as _,aE as $,aC as A,F as W,p as q,g as J}from"./index.b536fd91.js";import{_ as S,V as Y}from"./VStack.258b179b.js";import{D as Z}from"./DocumentDisplay.0a83e34d.js";import{I as a}from"./ImageCard.27099169.js";import{T as O}from"./Title.712abce7.js";import{_ as Q}from"./SharedNav.2c352519.js";import{S as K}from"./SearchableCardGrid.5a0d793d.js";import"./CardGrid.38bab384.js";var C=["/images/404.png","/images/ascii-art.png","/images/camera-modifier.png","/images/complex-explorer.png","/images/fractal-explorer.png","/images/hands-free-slides.png","/images/leopards.png","/images/maze-game.png","/images/my-account.png","/images/my-notes.png","/images/reaction-time-tester.png","/images/remote-typewriter.png","/images/same-number-generator.png","/images/account/log-in.png","/images/account/sign-up.png","/images/art/blobby-gradient.png","/images/art/ellipses.png","/images/art/fireline.png","/images/art/index.png","/images/art/metaballs.png","/images/art/pixelated-rainbow.png","/images/art/rainbow-blobs.png","/images/art/rectangles.png","/images/debug/index.png","/images/drawing/slider.png","/images/drawing/turntable.png","/images/fractal-presets/burning-ship.png","/images/fractal-presets/chinese-lantern.png","/images/fractal-presets/feather-fractal.png","/images/fractal-presets/flower.png","/images/fractal-presets/index.png","/images/fractal-presets/mandelbrot-set.png","/images/fractal-presets/mandelbrots-necklace.png","/images/fractal-presets/multibrot-set.png","/images/fractal-presets/puddles.png","/images/fractal-presets/raindrop.png","/images/fractal-presets/snowflake.png","/images/fractal-presets/sunlight.png","/images/fractal-presets/telescope.png","/images/lambda-calculus/compiler.png","/images/lambda-calculus/evaluator.png","/images/storymatic/index.png"];const X=["src"],ee=k({__name:"BlurredImage",props:{sensitivity:null,src:null},setup(s){const i=d(!1),n=d(Math.random()),m=d(Math.random()),{x:p,y:v}=U(),l=L(()=>f.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),r=L(()=>f.value<400?"1.5em":"2em"),g=d(!1);function G(){g.value||(g.value=!0,setTimeout(()=>{n.value=Math.random(),m.value=Math.random(),setTimeout(()=>{g.value=!1},300)}))}return(me,P)=>{var B,E;return o(),x("img",{class:F([{moving:g.value},"image"]),src:s.src,style:M({display:i.value?void 0:"none",top:`calc(${e(l)} + (var(--app-height) - ${e(l)} - ${e(r)} - 320px) * ${m.value} + ${e(v)-e(H)/2}px / 100 * ${(B=s.sensitivity)!=null?B:1})`,left:`calc(${e(r)} + (var(--app-width) - 2 * ${e(r)} - 320px) * ${n.value} + ${e(p)-e(f)/2}px / 100 * ${(E=s.sensitivity)!=null?E:1})`}),draggable:"false",onClick:G,onLoad:P[0]||(P[0]=pe=>i.value=!0)},null,46,X)}}});var I=S(ee,[["__scopeId","data-v-5f6f66b6"]]);const te=k({__name:"Cover",setup(s){const i=document.getElementsByClassName("nav-root");let n=d(58);i[0]&&({height:n}=D(i[0],void 0,{box:"border-box"}));const m=d(),{height:p}=D(m),{y:v}=R(window),l=L(()=>{const r=`(${H.value-n.value}px - ${f.value<400?3:4}em)`;return`min(${v.value/2}px, calc((${r} - ${p.value}px) / 2))`});return(r,g)=>(o(),x("div",{class:"cover",style:M({height:`calc(${e(H)-e(n)}px - ${e(f)<400?3:4}em)`})},[y("div",{ref_key:"content",ref:m,class:"content",style:M(`top: ${e(l)}`)},[V(r.$slots,"default",{},void 0,!0)],4)],4))}});var ae=S(te,[["__scopeId","data-v-6dd36fe0"]]);const se=k({__name:"LargeTitle",setup(s){return(i,n)=>(o(),u(O,{class:"title"},{default:c(()=>[V(i.$slots,"default",{},void 0,!0)]),_:3}))}});var N=S(se,[["__scopeId","data-v-5b9ee71c"]]);function T(s){return s[~~(Math.random()*s.length)]}const j=s=>(q("data-v-35ea0957"),s=s(),J(),s),re=h("Welcome to zSnout."),oe=j(()=>y("p",{class:"text-color",style:{"line-height":"2"}},[h(" zSnout is a website made by "),y("a",{href:"https://github.com/zsakowitz",target:"_blank",class:"link"},"Zachary Sakowitz"),h(" to create and test various projects. This edition, zSnout 7, is a collection of many of these projects and their archived versions, such as the four versions of Storymatic. You can support Zachary at "),y("a",{class:"link",href:"https://store.zsnout.com/",target:"_blank"},"the zSnout store.")],-1)),ie=j(()=>y("p",{class:"text-color",style:{"margin-top":"-1em"}}," Scroll down and select a page! ",-1)),ne={key:2},le=h(" Looks like you've found the Help menu! Many pages on zSnout have this button in the top-right corner. Simply click it to reveal instructions and more details about the page you're viewing. "),ce=k({__name:"Home",setup(s){const i=T(C),n=T(C),m=T(C),p=d(!1);return(v,l)=>(o(),x(W,null,[t(I,{class:"hide-600",src:e(i)},null,8,["src"]),t(I,{class:"hide-800",sensitivity:2,src:e(n)},null,8,["src"]),t(I,{sensitivity:3,src:e(m)},null,8,["src"]),t(Q,{open:p.value,"onUpdate:open":l[0]||(l[0]=r=>p.value=r)},null,8,["open"]),t(Z,null,{help:c(()=>[le]),default:c(()=>[t(ae,null,{default:c(()=>[t(Y,{class:"stack",space:2},{default:c(()=>[e(b)?(o(),u(N,{key:0},{default:c(()=>[h(" Welcome to zSnout, @"+z(e(b))+". ",1)]),_:1})):(o(),u(N,{key:1},{default:c(()=>[re]),_:1})),oe,ie,e(b)&&e(w)!==!1?(o(),x("p",ne," Hey @"+z(e(b))+"! Your account will be deleted in "+z(e(w)>=120*1e3?`${~~(e(w)/(60*1e3))} minutes`:`${~~(e(w)/1e3)} seconds`)+" unless you verify it with the email we sent you. ",1)):_("",!0)]),_:1})]),_:1}),t(K,{sizes:["normal","small","icon"],style:{position:"relative","z-index":"2"}},{default:c(()=>[e($)&&e(A)?(o(),u(a,{key:0,alt:"An outline of a person's head and upper body",bg:"white",description:"Log out of your account, change your username, and modify other account settings.",keywords:"log out",src:"/images/my-account.png",title:"My Account",to:"/my-account"})):_("",!0),e($)&&!e(A)?(o(),u(a,{key:1,alt:"Someone holding up a sign saying 'Sign Up'",description:"Create a new account on zSnout to save fractals, Storymatic projects, and more.",keywords:"account",src:"/images/account/sign-up.png",title:"Sign Up or Log In",onClick:l[1]||(l[1]=r=>p.value=!0)})):_("",!0),t(a,{alt:"The Mandelbrot Set in a raindow background",description:"View amazing fractal images and interact with them live on your computer.",keywords:"math mandelbrot set",src:"/images/fractal-explorer.png",title:"Fractal Explorer",to:"/fractal-explorer"}),t(a,{alt:"Light green blobs in a blue background",description:"See a carefully curated collection of various interactive fractals.",keywords:"math",src:"/images/fractal-presets/index.png",title:"Fractal Presets",to:"/fractal-presets"}),t(a,{alt:"A sample Storymatic program about groceries",description:"Experiment with 4 versions of a programming language designed by zSnout.",keywords:"programming languages custom",src:"/images/storymatic/index.png",title:"Storymatic",to:"/storymatic/"}),t(a,{alt:"Multicolored overlapping rectangles with unique border styles",description:"See a collection of simple yet beautiful examples of abstract art.",keywords:"gradients squares rectangles circles ellipses",src:"/images/art/index.png",title:"Art",to:"/art/"}),t(a,{alt:"A strangely colored bookshelf",description:"Use our color controls to make strange images from your camera",keywords:"colors editor image live overcolorifier",src:"/images/camera-modifier.png",title:"Camera Modifier",to:"/camera-modifier"}),t(a,{alt:"A typewriter with the words 'Typed via zSnout magic' on the paper sheet",description:"Use a set of AirPods to type text on your screen without touching the keyboard.",keywords:"airpods text",src:"/images/remote-typewriter.png",title:"Remote Typewriter",to:"/remote-typewriter"}),t(a,{alt:"An ASCII art version of Zachary's face (the creator of zSnout)",description:"Watch your own face and world transform into letters and symbols.",keywords:"camera live text",src:"/images/ascii-art.png",title:"ASCII Art",to:"/ascii-art"}),e($)&&e(A)?(o(),u(a,{key:2,alt:"A notepad",description:"Create notes that will sync across your devices using our simple editor.",keywords:"text editor cloud syncing",src:"/images/my-notes.png",title:"My Notes",to:"/my-notes"})):_("",!0),t(a,{alt:"An AirPod superimposed on top of the Google Slides logo",description:"Use your AirPods 3 or Pro as a remote for a Google Slides presentation.",keywords:"google presentation airpods remote",src:"/images/hands-free-slides.png",title:"Hands Free Slides",to:"/hands-free-slides"}),t(a,{alt:"Leopards stacked on top of each other",description:"A leap of leopards (look it up) appear and fill your device's screen.",keywords:"images",src:"/images/leopards.png",title:"Leopards",to:"/leopards"}),t(a,{alt:"A flower created from a rainbow gradient with a vignette on its exterior.",description:"Experiment with amazing transformations of the complex plane.",keywords:"math number equation",src:"/images/complex-explorer.png",title:"Complex Explorer",to:"/complex-explorer"}),t(a,{alt:"A white circle with black segments drawn within it",description:"Draw on a rotating tabletop using our simple drawing interface.",keywords:"spinner drawings",src:"/images/drawing/turntable.png",title:"Turntable",to:"/drawing/turntable"}),t(a,{alt:"A black ball at a corner in a maze",description:"Twist and turn your phone or tablet to move a ball around in a randomly generated maze.",keywords:"orientation mobile",src:"/images/maze-game.png",title:"Maze Game",to:"/maze-game"}),t(a,{alt:"A sign saying 'Hi' with arrows pointing right",description:"Draw on a table that moves beneath your finger as you create.",keywords:"moving drawings",src:"/images/drawing/slider.png",title:"Slider",to:"/drawing/slider"}),t(a,{alt:"A clock with flames trailing behind it",description:"See what your reaction time is with our simple tester.",keywords:"speed",src:"/images/reaction-time-tester.png",title:"Reaction Time Tester",to:"/reaction-time-tester"}),t(a,{alt:"A lambda calculus program defining the numerals 0 through 9",description:"Run your lambda calculus functions in our interactive editor.",keywords:"programming languages",src:"/images/lambda-calculus/evaluator.png",title:"Lambda Calculus Evaluator",to:"/lambda-calculus/evaluator"}),t(a,{alt:"A comparison of the lambda calculus Mockingbird combinator being applied to itself and its JavaScript counterpart.",description:"Convert your lambda calculus functions into valid and runnable JavaScript code.",keywords:"programming languages javascript",src:"/images/lambda-calculus/compiler.png",title:"Lambda Calculus Compiler",to:"/lambda-calculus/compiler"}),t(a,{alt:"A preview of the 'Same Number Generator' page",description:"It's like a random number generator, but it generates the same number every time.",keywords:"random numbers passkey password",src:"/images/same-number-generator.png",title:"Same Number Generator",to:"/same-number-generator"}),t(a,{alt:"A symbol representing an image with the text 'image not found' beneath the symbol.",description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",src:"/images/404.png",title:"404 page",to:"/404"}),t(a,{alt:"A magnifying glass inspects a bug hidden amongst bookshelves",description:"A collection of pages used to debug and test interfaces such as the canvas APIs.",keywords:"webgl canvas",src:"/images/debug/index.png",title:"Debug Pages",to:"/debug/"})]),_:1})]),_:1})],64))}});var we=S(ce,[["__scopeId","data-v-35ea0957"]]);export{we as default};
