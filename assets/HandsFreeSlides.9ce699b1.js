import{d as I,s as a,o as l,f as g,c as y,a as e,at as F,q as k,ay as B,b as x,w as u,t as T,F as N,e as o,p as z,g as G,ap as R}from"./index.775470d7.js";import{_ as U,V as $,B as V}from"./VStack.a8ad7d87.js";import{D as E}from"./DocumentDisplay.3f533a3b.js";import{H as M,F as q}from"./SharedNav.20d92b25.js";import{M as L}from"./MiddleText.b1498ec2.js";const i=_=>(z("data-v-452723f6"),_=_(),G(),_),Z={key:0,ref:"presentation",class:"presentation"},j=["src"],J=["src"],K=["src"],O=o(" Click this button to set everything up. "),Q=o("Start"),W={key:0},X={key:1,style:{color:"transparent"}},Y=i(()=>e("h1",null,"How do I use this?",-1)),ee=i(()=>e("p",null," This page lets you control a Google Slides presentation using an AirPod as a remote. ",-1)),te=i(()=>e("p",null," Get a pair of AirPods 3 or Pro. To control your presentation, click the stem: ",-1)),ae=i(()=>e("p",null,[e("strong",null,"once"),o(" to go to the "),e("strong",null,"next slide,"),e("br"),e("strong",null,"twice"),o(" to go to the "),e("strong",null,"previous slide,"),o(" and "),e("br"),e("strong",null,"thrice"),o(" to go to the "),e("strong",null,"first slide.")],-1)),oe=i(()=>e("p",null,"Reload or close this app to exit.",-1)),ne=i(()=>e("h1",null,"Alternative Setup",-1)),se=i(()=>e("p",null,[o(" If you don't have a pair of AirPods 3 or Pro, you can use any set of remote headphones. Simply tap the "),e("br"),e("strong",null,"play/pause"),o(" button to go to the next slide, "),e("br"),e("strong",null,"previous track"),o(" to go to the previous slide, and "),e("br"),e("strong",null,"next track"),o(" to go to the first slide. ")],-1)),le=i(()=>e("p",null,' For AirPods 1 and 2, you can modify the double-tap actions in Settings to correspond to "play/pause" and "next track," allowing you to go to the next and previous slides. ',-1)),ie=I({__name:"HandsFreeSlides",setup(_){const r=a("try"),b=a(),S=a(!1),m=a(!1),w=a(""),H=a(""),f=a(1),d=a(2),n=a(1),c=a(3),C=R(()=>r.value="",500);function p({action:s}){const t=s==="previoustrack"?"first":s==="nexttrack"?"previous":"next";m.value?t==="first"?(d.value=2,n.value=1,c.value=3,f.value=1):t==="previous"&&f.value>1?(f.value--,[d.value,n.value,c.value]=[c.value,d.value,n.value]):t==="next"&&(f.value++,[d.value,n.value,c.value]=[n.value,c.value,d.value]):(r.value=t,C())}function D(){S.value=!0,navigator.mediaSession.setActionHandler("pause",p),navigator.mediaSession.setActionHandler("play",p),navigator.mediaSession.setActionHandler("previoustrack",p),navigator.mediaSession.setActionHandler("nexttrack",p),navigator.mediaSession.setActionHandler("seekbackward",p),navigator.mediaSession.setActionHandler("seekforward",p),b.value.volume=.01}function P(s){if(s.preventDefault(),m.value)return;const t=w.value.match(/\/d\/([A-Za-z0-9\-\_]+)/);if(!t){r.value="invalid";return}H.value=t[1],m.value=!0}function A(s){const t=d.value,h=n.value,v=f.value;return c.value,`https://docs.google.com/presentation/d/${H.value}/preview?rm=minimal&slide=${h===s?v:t===s?v-1:v+1}`}return(s,t)=>(l(),g(N,null,[(l(),y(B,{to:"body"},[e("video",{ref_key:"media",ref:b,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:D},null,544),m.value?(l(),g("div",Z,[e("iframe",{class:F([{active:n.value===1},"frame"]),src:A(1)},null,10,j),e("iframe",{class:F([{active:n.value===2},"frame"]),src:A(2)},null,10,J),e("iframe",{class:F([{active:n.value===3},"frame"]),src:A(3)},null,10,K)],512)):k("",!0)])),x(E,{center:""},{help:u(()=>[Y,ee,te,ae,oe,ne,se,le]),default:u(()=>[m.value?k("",!0):(l(),y(L,{key:0},{default:u(()=>[e("form",{onSubmit:P},[x($,null,{default:u(()=>[S.value?k("",!0):(l(),y(V,{key:0,style:{"margin-bottom":"1em"},onClick:t[0]||(t[0]=h=>{var v;return(v=b.value)==null||v.play(),h.preventDefault()})},{default:u(()=>[O]),_:1})),S.value?(l(),y(M,{key:1,style:{"margin-bottom":"1em"}},{default:u(()=>[x(q,{modelValue:w.value,"onUpdate:modelValue":t[1]||(t[1]=h=>w.value=h),placeholder:"Presentation URL"},null,8,["modelValue"]),x(V,{onClick:P},{default:u(()=>[Q]),_:1})]),_:1})):k("",!0),e("p",null,[r.value?(l(),g("em",W,T(r.value==="try"?"Try clicking the stem!":r.value==="invalid"?"Invalid presentation code.":`Going to the ${r.value} slide.`),1)):(l(),g("em",X,"placeholder"))])]),_:1})],32)]),_:1}))]),_:1})],64))}});var ve=U(ie,[["__scopeId","data-v-452723f6"]]);export{ve as default};
