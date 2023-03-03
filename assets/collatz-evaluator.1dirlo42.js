import{D as x}from"./DocumentDisplay.6d0yf2eg.js";import{M as b}from"./MiddleText.496cwyq8.js";import{_ as k}from"./NumericField.vue_vue_type_script_setup_true_lang.6a9nia33.js";import{d as w,r as m,V as T,G as z,o as C,c as V,w as r,e as d,b as I,a as s,t as M,u as S,p as D,h as q,_ as B}from"./index.4z0bzixf.js";import{T as E}from"./Title.4eiq6n5a.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const p=n=>(D("data-v-d55b1f8f"),n=n(),q(),n),N={class:"sticky"},j={class:"result"},O=p(()=>s("p",null," To generate a Collatz sequence for a number, you start with a positive integer. If the number is even, halve it. If it is odd, multiply it by three and add one. Repeat this until you get stuck in a loop. ",-1)),R=p(()=>s("p",null," The Collatz conjecture states that every positive integer eventually gets stuck in the 4-2-1 loop. Try finding a Collatz sequence by entering any number you like into the evaluator! ",-1)),G=p(()=>s("p",null," The graph shows the peaks and valleys of the sequence based off of your number. ",-1)),P=w({__name:"collatz-evaluator",setup(n){const o=m(),u=m(17),_=T(()=>{let a=Math.max(1,Math.round(u.value));const e=[a];for(;a!==1;)a%2===0?a/=2:a=3*a+1,e.push(a);if(e.length===1&&e.push(e[0]),o.value){const i=Math.max(e.length-1,10),v=o.value.width=50*i,c=o.value.height=10*i,t=o.value.getContext("2d");if(!t)return e;const y=Math.max(...e),h=l=>c-(l-1)*(c-1)/y,f=l=>l/(e.length-1)*v;z.value?t.strokeStyle="white":t.strokeStyle="dark";let g=0;t.clearRect(0,0,o.value.width,o.value.height),t.beginPath(),t.moveTo(f(0),h(e[0]));for(const l of e.slice(1))t.lineTo(f(++g),h(l));t.lineWidth=c/40,t.stroke()}return e});return(a,e)=>(C(),V(x,{center:""},{help:r(()=>[O,R,G]),default:r(()=>[d(b,null,{default:r(()=>[d(E,null,{default:r(()=>[I("Collatz Evaluator")]),_:1}),s("div",N,[d(k,{modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=i=>u.value=i)},null,8,["modelValue"]),s("canvas",{ref_key:"canvas",ref:o,class:"canvas",height:"200"},null,512)]),s("p",j,M(S(_).join(", ")),1)]),_:1})]),_:1}))}});const Z=B(P,[["__scopeId","data-v-d55b1f8f"]]);export{Z as default};
