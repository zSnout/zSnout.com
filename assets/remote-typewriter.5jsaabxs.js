import{V as I,B as T}from"./VStack.3evi6szx.js";import{D as P}from"./DocumentDisplay.6d0yf2eg.js";import{M as V}from"./MiddleText.496cwyq8.js";import{H as N}from"./BookmarkIcon.46krkaf8.js";import{l as j,r as p,w as z,a as A,x as f,y as E,C as b,a8 as e,ae as F,F as w,D as d,G,H as i,E as H,I as h,u as _,ac as M,ad as q}from"./runtime-core.esm-bundler.55v0mz3f.js";import{a as R}from"./_plugin-vue_export-helper.4yxwi37t.js";import"./main.200onzgm.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./Field.5c7fkv56.js";const m=v=>(M("data-v-5e9915d2"),v=v(),q(),v),U={style:{"margin-bottom":"1em"}},W=m(()=>e("p",null,"This page lets you type using an AirPod as a remote.",-1)),$=m(()=>e("p",null," Get a pair of AirPods 3 or Pro. At the beginning of each character, every value from a-z and spaces will be available. Click the stem ",-1)),J=m(()=>e("p",null,[e("strong",null,"once"),i(" to pick the first character set, "),e("br"),e("strong",null,"twice"),i(" to pick the second set, and "),e("br"),e("strong",null,"thrice"),i(" to pick the final set. ")],-1)),K=m(()=>e("h1",null,"Alternative Setup",-1)),L=m(()=>e("p",null,[i(" If you don't have a pair of AirPods 3 or Pro, grab another set of remote earpods. Then check your earpods' guide for how to click the "),e("strong",null,"play/pause,"),e("strong",null,"previous track,"),i(" and "),e("strong",null,"next track"),i(" buttons. zSnout uses these for the first, second, and third characters sets, respectively. ")],-1)),O=j({__name:"remote-typewriter",setup(v){const g=p(),S=p(!1),C=p(!1),o=[[],["","  ab"," cde"," fgh"],[""," ijk"," lmn"," opq"],[""," rst"," uvw"," xyz"]];o[0]=o,o[1][0]=o[1],o[2][0]=o[2],o[3][0]=o[3];const n=p(0),c=p(0),s=p("");function u({action:t}){const a=t==="previoustrack"?3:t==="nexttrack"?2:1;if(n.value)if(c.value){const r=o[n.value][c.value][a],l=s.value[s.value.length-2],x=l===","||l==="."?2:1;r===","?s.value=s.value.slice(0,-x)+", ":r==="."?s.value=s.value.slice(0,-x)+". ":s.value+=r,n.value=0,c.value=0}else c.value=a;else n.value=a}function D(){S.value=!0,navigator.mediaSession.setActionHandler("pause",u),navigator.mediaSession.setActionHandler("play",u),navigator.mediaSession.setActionHandler("previoustrack",u),navigator.mediaSession.setActionHandler("nexttrack",u),navigator.mediaSession.setActionHandler("seekbackward",u),navigator.mediaSession.setActionHandler("seekforward",u),g.value.volume=.01}function y(t){return typeof t=="string"?t.length===1?t.replace(" ","_"):t.slice(1).replace(" ","_"):t.slice(1).map(a=>a.slice(1).replace(" ","_")).join(" ")}z(s,()=>{const t=s.value[s.value.length-1],a=s.value[s.value.length-2];o[1][1]=t===" "?a===","?" .ab":" ,ab":"  ab"});const k=A(()=>n.value?c.value?o.slice(1).map((t,a)=>a===n.value-1?t.slice(1).map((r,l)=>l===c.value-1?y(r):"   ").join(" "):""):o.slice(1).map((t,a)=>a===n.value-1?y(t):""):o.slice(1).map(y)),B=A(()=>s.value.replace(/\bi\b/g,"I").replace(/\. \w|^\w/g,t=>t.toUpperCase()).replace(/ $/,"_"));return(t,a)=>(f(),E(G,null,[(f(),b(F,{to:"body"},[e("video",{ref_key:"media",ref:g,class:"media",loop:"",playsinline:"",src:"https://mdn.github.io/learning-area/html/multimedia-and-embedding/video-and-audio-content/rabbit320.mp4",onPlaying:D},null,544)])),w(P,{center:""},{help:d(()=>[W,$,J,K,L]),default:d(()=>[C.value?H("",!0):(f(),b(V,{key:0},{default:d(()=>[w(I,null,{default:d(()=>[S.value?H("",!0):(f(),b(T,{key:0,style:{"margin-bottom":"1.5em"},onClick:a[0]||(a[0]=r=>{var l;return(l=g.value)==null||l.play(),r.preventDefault()})},{default:d(()=>[i(" Click this button to set everything up. ")]),_:1})),e("p",U,h(_(B)||"Well, start typing something!"),1),w(N,{class:"characters",stretch:""},{default:d(()=>[e("p",null,h(_(k)[0]),1),e("p",null,h(_(k)[1]),1),e("p",null,h(_(k)[2]),1)]),_:1})]),_:1})]),_:1}))]),_:1})],64))}});const ie=R(O,[["__scopeId","data-v-5e9915d2"]]);export{ie as default};
