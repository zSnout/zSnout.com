import{d as _,k as m,aa as V,aB as $,aG as v,o as l,f as I,an as j,ar as z,u as a,aH as C,W as B,aI as W,a as h,n as E,c as f,w as g,b as e,F as P,aJ as u,e as y,t as F,aw as G,m as H,ax as q,p as J,g as R}from"./index.f821c653.js";import{_ as w,c as U,V as O}from"./BookmarkIcon.ae90fb57.js";import{D as Y}from"./DocumentDisplay.9242818d.js";import{I as t}from"./ImageCard.b4686395.js";import{T as Z}from"./Title.cfc1dfc0.js";import{S as K}from"./SearchableCardGrid.825c5c01.js";var x=["/images/404.png","/images/complex-explorer.png","/images/fractal-explorer.png","/images/leopards.png","/images/metaballs.png","/images/reaction-time-tester.png","/images/same-number-generator.png","/images/account/log-in.png","/images/account/log-out.png","/images/account/sign-up.png","/images/art/blobby-gradient.png","/images/art/ellipses.png","/images/art/fireline.png","/images/art/index.png","/images/art/pixelated-rainbow.png","/images/art/rectangles.png","/images/debug/index.png","/images/drawing/slider.png","/images/drawing/turntable.png","/images/fractal-presets/burning-ship.png","/images/fractal-presets/chinese-lantern.png","/images/fractal-presets/feather-fractal.png","/images/fractal-presets/flower.png","/images/fractal-presets/index.png","/images/fractal-presets/mandelbrot-set.png","/images/fractal-presets/mandelbrots-necklace.png","/images/fractal-presets/multibrot-set.png","/images/fractal-presets/puddles.png","/images/fractal-presets/raindrop.png","/images/fractal-presets/snowflake.png","/images/fractal-presets/sunlight.png","/images/fractal-presets/telescope.png","/images/lambda-calculus/compiler.png","/images/lambda-calculus/evaluator.png","/images/storymatic/index.png"];const Q=["src"],X=_({__name:"BlurredImage",props:{sensitivity:null,src:null},setup(s){const i=m(!1),o=m(Math.random()),c=m(Math.random()),{x:p,y:b}=V(),r=$(()=>v.value<400?"(2.5em + 1px + 1.5em)":"(3.5em + 1px + 2em)"),n=$(()=>v.value<400?"1.5em":"2em"),d=m(!1);function N(){d.value||(d.value=!0,setTimeout(()=>{o.value=Math.random(),c.value=Math.random(),setTimeout(()=>{d.value=!1},300)}))}return(oe,A)=>{var T,L;return l(),I("img",{class:j([{moving:d.value},"image"]),src:s.src,style:z({display:i.value?void 0:"none",top:`calc(${a(r)} + (var(--app-height) - ${a(r)} - ${a(n)} - 320px) * ${c.value} + ${a(b)-a(C)/2}px / 100 * ${(T=s.sensitivity)!=null?T:1})`,left:`calc(${a(n)} + (var(--app-width) - 2 * ${a(n)} - 320px) * ${o.value} + ${a(p)-a(v)/2}px / 100 * ${(L=s.sensitivity)!=null?L:1})`}),draggable:"false",onClick:N,onLoad:A[0]||(A[0]=le=>i.value=!0)},null,46,Q)}}});var k=w(X,[["__scopeId","data-v-5f6f66b6"]]);const ee=_({__name:"Cover",setup(s){const i=document.getElementsByClassName("nav-root");let o=m(58);i[0]&&({height:o}=B(i[0],void 0,{box:"border-box"}));const c=m(),{height:p}=B(c),{y:b}=W(window),r=$(()=>{const n=`(${C.value-o.value}px - ${v.value<400?3:4}em)`;return`min(${b.value/2}px, calc((${n} - ${p.value}px) / 2))`});return(n,d)=>(l(),I("div",{class:"cover",style:z({height:`calc(${a(C)-a(o)}px - ${a(v)<400?3:4}em)`})},[h("div",{ref_key:"content",ref:c,class:"content",style:z(`top: ${a(r)}`)},[E(n.$slots,"default",{},void 0,!0)],4)],4))}});var ae=w(ee,[["__scopeId","data-v-6dd36fe0"]]);const te=_({__name:"LargeTitle",setup(s){return(i,o)=>(l(),f(Z,{class:"title"},{default:g(()=>[E(i.$slots,"default",{},void 0,!0)]),_:3}))}});var M=w(te,[["__scopeId","data-v-5b9ee71c"]]);function S(s){return s[~~(Math.random()*s.length)]}const D=s=>(J("data-v-3e41c508"),s=s(),R(),s),se=y("Welcome to zSnout."),re=D(()=>h("p",{class:"text-color",style:{"line-height":"2"}},[y(" zSnout is a website made by "),h("a",{href:"https://github.com/zsakowitz",target:"_blank",class:"link"},"Zachary Sakowitz"),y(" to create and test various projects. This edition, zSnout 7, is a collection of many of these projects and their archived versions, such as the four versions of Storymatic. You can support Zachary at "),h("a",{class:"link",href:"https://store.zsnout.com/",target:"_blank"},"the zSnout store.")],-1)),ne=D(()=>h("p",{class:"text-color",style:{"margin-top":"-1em"}}," Scroll down and select a page! ",-1)),ie=_({__name:"Home",setup(s){const i=S(x),o=S(x),c=S(x),p=m(!1);return(b,r)=>(l(),I(P,null,[e(k,{class:"hide-600",src:a(i)},null,8,["src"]),e(k,{class:"hide-800",sensitivity:2,src:a(o)},null,8,["src"]),e(k,{sensitivity:3,src:a(c)},null,8,["src"]),e(U,{open:p.value,"onUpdate:open":r[0]||(r[0]=n=>p.value=n)},null,8,["open"]),e(Y,null,{default:g(()=>[e(ae,null,{default:g(()=>[e(O,{class:"stack",space:2},{default:g(()=>[a(u)?(l(),f(M,{key:0},{default:g(()=>[y(" Welcome to zSnout, @"+F(a(u))+". ",1)]),_:1})):(l(),f(M,{key:1},{default:g(()=>[se]),_:1})),re,ne]),_:1})]),_:1}),e(K,{style:{position:"relative","z-index":"2"}},{default:g(()=>[a(u)?(l(),f(t,{key:0,alt:"A demonstration of how to integrate logarithms",description:"Log out of your zSnout account.",keywords:"account",src:"/images/account/log-out.png",title:"Log Out",onClick:r[1]||(r[1]=n=>(u.value="",G.value=""))})):H("",!0),!a(u)&&a(q)?(l(),f(t,{key:1,alt:"Someone holding up a sign saying 'Sign Up'",description:"Create a new account on zSnout to save fractals, Storymatic projects, and more.",keywords:"account",src:"/images/account/sign-up.png",title:"Sign Up or Log In",onClick:r[2]||(r[2]=n=>p.value=!0)})):H("",!0),e(t,{alt:"The Mandelbrot Set in a raindow background",description:"View amazing fractal images and interact with them live on your computer.",keywords:"math mandelbrot set",src:"/images/fractal-explorer.png",title:"Fractal Explorer",to:"/fractal-explorer"}),e(t,{alt:"Light green blobs in a blue background",description:"See a carefully curated collection of various interactive fractals.",keywords:"math",src:"/images/fractal-presets/index.png",title:"Fractal Presets",to:"/fractal-presets"}),e(t,{alt:"A sample Storymatic program about groceries",description:"Experiment with 4 versions of a programming language designed by zSnout.",keywords:"programming languages custom",src:"/images/storymatic/index.png",title:"Storymatic",to:"/storymatic/"}),e(t,{alt:"Multicolored overlapping rectangles with unique border styles",description:"See a collection of simple yet beautiful examples of abstract art.",keywords:"gradients squares rectangles circles ellipses",src:"/images/art/index.png",title:"Art",to:"/art/"}),e(t,{alt:"Leopards stacked on top of each other",description:"A leap of leopards (look it up) appear and fill your device's screen.",keywords:"images",src:"/images/leopards.png",title:"Leopards",to:"/leopards"}),e(t,{alt:"A flower created from a rainbow gradient with a vignette on its exterior.",description:"Experiment with amazing transformations of the complex plane.",keywords:"math number equation",src:"/images/complex-explorer.png",title:"Complex Explorer",to:"/complex-explorer"}),e(t,{alt:"A white circle with black segments drawn within it",description:"Draw on a rotating tabletop using our simple drawing interface.",keywords:"spinner drawings",src:"/images/drawing/turntable.png",title:"Turntable",to:"/drawing/turntable"}),e(t,{alt:"A sign saying 'Hi' with arrows pointing right",description:"Draw on a table that moves beneath your finger as you create.",keywords:"moving drawings",src:"/images/drawing/slider.png",title:"Slider",to:"/drawing/slider"}),e(t,{alt:"A black background with some white blobs that merge together",description:"Watch this real-time animation of bouncing and merging circles. It's great as a screensaver.",keywords:"bouncing screensavers",src:"/images/metaballs.png",title:"Metaballs",to:"/metaballs"}),e(t,{alt:"A clock with flames trailing behind it",description:"See what your reaction time is with our simple tester.",keywords:"speed",src:"/images/reaction-time-tester.png",title:"Reaction Time Tester",to:"/reaction-time-tester"}),e(t,{alt:"A lambda calculus program defining the numerals 0 through 9",description:"Run your lambda calculus functions in our interactive editor.",keywords:"programming languages",src:"/images/lambda-calculus/evaluator.png",title:"Lambda Calculus Evaluator",to:"/lambda-calculus/evaluator"}),e(t,{alt:"A comparison of the lambda calculus Mockingbird combinator being applied to itself and its JavaScript counterpart.",description:"Convert your lambda calculus functions into valid and runnable JavaScript code.",keywords:"programming languages javascript",src:"/images/lambda-calculus/compiler.png",title:"Lambda Calculus Compiler",to:"/lambda-calculus/compiler"}),e(t,{alt:"A preview of the 'Same Number Generator' page",description:"It's like a random number generator, but it generates the same number every time.",keywords:"random numbers passkey password",src:"/images/same-number-generator.png",title:"Same Number Generator",to:"/same-number-generator"}),e(t,{alt:"A symbol representing an image with the text 'image not found' beneath the symbol.",description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",src:"/images/404.png",title:"404 page",to:"/404"}),e(t,{alt:"A magnifying glass inspects a bug hidden amongst bookshelves",description:"A collection of pages used to debug and test interfaces such as the canvas APIs.",keywords:"webgl canvas",src:"/images/debug/index.png",title:"Debug Pages",to:"/debug/"})]),_:1})]),_:1})],64))}});var fe=w(ie,[["__scopeId","data-v-3e41c508"]]);export{fe as default};
