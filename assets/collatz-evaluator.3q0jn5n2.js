import{D as x}from"./DocumentDisplay.f38sgubl.js";import{M as k}from"./MiddleText.401km5ky.js";import{_ as w}from"./NumericField.5g1ob2jp.js";import{d as b,q as m,g as T,o as z,c as C,w as r,y as I,b as d,a as s,t as M,u as S,e as V,p as q,l as D}from"./index.5eygmsav.js";import{T as B}from"./Title.2yqtfkd2.js";import{_ as E}from"./plugin-vue_export-helper.62h235na.js";import"./Navigation.64w2aw5y.js";import"./SharedNav.3q0ndcho.js";import"./Button.32h7782u.js";import"./Logo.4djlqykq.js";import"./LogoLight.11xzt69h.js";const p=n=>(q("data-v-f08e9cfc"),n=n(),D(),n),N=V("Collatz Evaluator"),j={class:"sticky"},O={class:"result"},R=p(()=>s("p",null," To generate a Collatz sequence for a number, you start with a positive integer. If the number is even, halve it. If it is odd, multiply it by three and add one. Repeat this until you get stuck in a loop. ",-1)),P=p(()=>s("p",null," The Collatz conjecture states that every positive integer eventually gets stuck in the 4-2-1 loop. Try finding a Collatz sequence by entering any number you like into the evaluator! ",-1)),U=p(()=>s("p",null," The graph shows the peaks and valleys of the sequence based off of your number. ",-1)),W=b({__name:"collatz-evaluator",setup(n){const o=m(),c=m(17),v=T(()=>{let a=Math.max(1,Math.round(c.value));const e=[a];for(;a!==1;)a%2===0?a/=2:a=3*a+1,e.push(a);if(e.length===1&&e.push(e[0]),o.value){const i=Math.max(e.length-1,10),_=o.value.width=50*i,u=o.value.height=10*i,t=o.value.getContext("2d");if(!t)return e;const y=Math.max(...e),h=l=>u-(l-1)*(u-1)/y,f=l=>l/(e.length-1)*_;I.value?t.strokeStyle="white":t.strokeStyle="dark";let g=0;t.clearRect(0,0,o.value.width,o.value.height),t.beginPath(),t.moveTo(f(0),h(e[0]));for(const l of e.slice(1))t.lineTo(f(++g),h(l));t.lineWidth=u/40,t.stroke()}return e});return(a,e)=>(z(),C(x,{center:""},{help:r(()=>[R,P,U]),default:r(()=>[d(k,null,{default:r(()=>[d(B,null,{default:r(()=>[N]),_:1}),s("div",j,[d(w,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=i=>c.value=i)},null,8,["modelValue"]),s("canvas",{ref_key:"canvas",ref:o,class:"canvas",height:"200"},null,512)]),s("p",O,M(S(v).join(", ")),1)]),_:1})]),_:1}))}});var Z=E(W,[["__scopeId","data-v-f08e9cfc"]]);export{Z as default};