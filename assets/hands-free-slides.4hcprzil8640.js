import{d as I,q as a,o as l,h as g,c as y,a as e,n as F,k,T,b as x,w as u,F as B,t as N,e as o,p as z,l as G,aq as R}from"./index.4gjs789qwis0.js";import{V as U,B as V}from"./Button.32h7782uxra0.js";import{D as $}from"./DocumentDisplay.f38sgubl5e80.js";import{H as q,F as E}from"./SharedNav.1lm7nnzuivvk.js";import{M}from"./MiddleText.401km5ky6i00.js";import{_ as L}from"./plugin-vue_export-helper.62h235na3u80.js";import"./Navigation.64w2aw5yn6g0.js";import"./Logo.4djlqykqmru0.js";import"./LogoLight.11xzt69hf600.js";const i=_=>(z("data-v-1632a844"),_=_(),G(),_),Z={key:0,ref:"presentation",class:"presentation"},j=["src"],J=["src"],K=["src"],O=o(" Click this button to set everything up. "),Q=o("Start"),W={key:0},X={key:1,style:{color:"transparent"}},Y=i(()=>e("h1",null,"How do I use this?",-1)),ee=i(()=>e("p",null," This page lets you control a Google Slides presentation using an AirPod as a remote. ",-1)),te=i(()=>e("p",null," Get a pair of AirPods 3 or Pro. To control your presentation, click the stem: ",-1)),ae=i(()=>e("p",null,[e("strong",null,"once"),o(" to go to the "),e("strong",null,"next slide,"),e("br"),e("strong",null,"twice"),o(" to go to the "),e("strong",null,"previous slide,"),o(" and "),e("br"),e("strong",null,"thrice"),o(" to go to the "),e("strong",null,"first slide.")],-1)),oe=i(()=>e("p",null,"Reload or close this app to exit.",-1)),ne=i(()=>e("h1",null,"Alternative Setup",-1)),se=i(()=>e("p",null,[o(" If you don't have a pair of AirPods 3 or Pro, you can use any set of remote headphones. Simply tap the "),e("br"),e("strong",null,"play/pause"),o(" button to go to the next slide, "),e("br"),e("strong",null,"previous track"),o(" to go to the previous slide, and "),e("br"),e("strong",null,"next track"),o(" to go to the first slide. ")],-1)),le=i(()=>e("p",null,' For AirPods 1 and 2, you can modify the double-tap actions in Settings to correspond to "play/pause" and "next track," allowing you to go to the next and previous slides. ',-1)),ie=I({__name:"hands-free-slides",setup(_){const r=a("try"),b=a(),S=a(!1),m=a(!1),w=a(""),H=a(""),h=a(1),d=a(2),n=a(1),c=a(3),C=R(()=>r.value="",500);function p({action:s}){const t=s==="previoustrack"?"first":s==="nexttrack"?"previous":"next";m.value?t==="first"?(d.value=2,n.value=1,c.value=3,h.value=1):t==="previous"&&h.value>1?(h.value--,[d.value,n.value,c.value]=[c.value,d.value,n.value]):t==="next"&&(h.value++,[d.value,n.value,c.value]=[n.value,c.value,d.value]):(r.value=t,C())}function D(){S.value=!0,navigator.mediaSession.setActionHandler("pause",p),navigator.mediaSession.setActionHandler("play",p),navigator.mediaSession.setActionHandler("previoustrack",p),navigator.mediaSession.setActionHandler("nexttrack",p),navigator.mediaSession.setActionHandler("seekbackward",p),navigator.mediaSession.setActionHandler("seekforward",p),b.value.volume=.01}function P(s){if(s.preventDefault(),m.value)return;const t=w.value.match(/\/d\/([A-Za-z0-9\-\_]+)/);if(!t){r.value="invalid";return}H.value=t[1],m.value=!0}function A(s){const t=d.value,f=n.value,v=h.value;return c.value,`https://docs.google.com/presentation/d/${H.value}/preview?rm=minimal&slide=${f===s?v:t===s?v-1:v+1}`}return(s,t)=>(l(),g(B,null,[(l(),y(T,{to:"body"},[e("video",{ref_key:"media",ref:b,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:D},null,544),m.value?(l(),g("div",Z,[e("iframe",{class:F([{active:n.value===1},"frame"]),src:A(1)},null,10,j),e("iframe",{class:F([{active:n.value===2},"frame"]),src:A(2)},null,10,J),e("iframe",{class:F([{active:n.value===3},"frame"]),src:A(3)},null,10,K)],512)):k("",!0)])),x($,{center:""},{help:u(()=>[Y,ee,te,ae,oe,ne,se,le]),default:u(()=>[m.value?k("",!0):(l(),y(M,{key:0},{default:u(()=>[e("form",{onSubmit:P},[x(U,null,{default:u(()=>[S.value?k("",!0):(l(),y(V,{key:0,style:{"margin-bottom":"1em"},onClick:t[0]||(t[0]=f=>{var v;return(v=b.value)==null||v.play(),f.preventDefault()})},{default:u(()=>[O]),_:1})),S.value?(l(),y(q,{key:1,style:{"margin-bottom":"1em"}},{default:u(()=>[x(E,{modelValue:w.value,"onUpdate:modelValue":t[1]||(t[1]=f=>w.value=f),placeholder:"Presentation URL"},null,8,["modelValue"]),x(V,{onClick:P},{default:u(()=>[Q]),_:1})]),_:1})):k("",!0),e("p",null,[r.value?(l(),g("em",W,N(r.value==="try"?"Try clicking the stem!":r.value==="invalid"?"Invalid presentation code.":`Going to the ${r.value} slide.`),1)):(l(),g("em",X,"placeholder"))])]),_:1})],32)]),_:1}))]),_:1})],64))}});var _e=L(ie,[["__scopeId","data-v-1632a844"]]);export{_e as default};
