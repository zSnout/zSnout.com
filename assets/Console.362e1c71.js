import{d as v,o as r,c as _,w as p,r as w,q as b,aM as B,h as d,az as V,n as S,B as E,aB as C,F as g,b as m,t as y,u as N,a as M,b5 as x,e as D,p as F,l as I}from"./index.b750fc01.js";import{V as K,B as L}from"./Button.f50eaa40.js";import{D as T}from"./Dropdown.39096384.js";import{F as $,H as U}from"./SharedNav.6ef85c65.js";import{L as j}from"./Labeled.66e3f168.js";import{_ as q}from"./plugin-vue_export-helper.21dcd24c.js";const z=v({__name:"MaybeLabeled",props:{label:null},setup(n){return(s,a)=>n.label?(r(),_(j,{key:0,label:n.label},{default:p(()=>[w(s.$slots,"default")]),_:3},8,["label"])):w(s.$slots,"default",{key:1})}}),A=v({__name:"Node",props:{node:null},setup(n){const{node:s}=n,a=b();return B(()=>{var c;(c=a.value)==null||c.replaceWith(s)}),(c,u)=>(r(),d("div",{ref_key:"el",ref:a},null,512))}});const H=n=>(F("data-v-2f2b0038"),n=n(),I(),n),O=H(()=>M("option",{disabled:"",value:""},"Choose an option...",-1)),W=["value"],G={key:1,class:"log"},J={key:2,class:"log"},Q={key:3,class:"log"},R=["onSubmit"],X=D("\u2714");function se(){const n={...globalThis.console,bindKey(t,e){n.focus(),f.push((l,o)=>(t===l&&(o(),e()),!0))},clear(){s.splice(0,s.length)},error(t,...e){s.push({type:"error",id:Math.random(),content:e.length?[t,...e]:t})},focus(){var t;(t=s.focus)==null||t.call(s)},key(t){return new Promise(e=>{n.focus(),f.push((l,o)=>{if(t===l){o(),e();return}return!0})})},line(){s.push({type:"line",id:Math.random()})},log(t,...e){s.push({type:"log",id:Math.random(),content:e.length?[t,...e]:t})},prompt(t,e){return a.value=t,n.focus(),new Promise(l=>{e?i.push(o=>{if(o)a.value="",l(o);else return!0}):i.push(o=>{a.value="",l(o)})})},select(t,e){const l=Math.random();return s.push({id:l,label:t,options:e,type:"select"}),setTimeout(n.focus),new Promise(o=>{u[l]=o})},user(t,...e){s.push({type:"user",id:Math.random(),content:e.length?[t,...e]:t})},warn(t,...e){s.push({type:"warn",id:Math.random(),content:e.length?[t,...e]:t})}},s=E([]),a=b(""),c=b(""),u=Object.create(null),i=[],f=[];return{console:n,field:c,messages:s,placeholder:a,onKey(t,e){f.splice(0,f.length,...f.filter(l=>l(t,e)))},onSelect(t,e){var l;(l=u[t])==null||l.call(u,e),delete u[t]},onSubmit(t){i.splice(0,i.length,...i.filter(e=>e(t)))}}}const Y=v({__name:"Console",props:{field:null,messages:null,placeholder:null,stretch:{type:Boolean}},emits:["key","select","submit","update:field","update:messages"],setup(n,{emit:s}){const a=n;function c(){if(a.field){const e={type:"user",id:Math.random(),content:a.field};s("update:messages",a.messages.concat(e))}s("update:field",""),s("submit",a.field?a.field:void 0)}function u(e){let l=!1;s("key","Enter",()=>l=!0),l?e.preventDefault():c()}const i=b();a.messages.focus=()=>{var e,l;(l=(e=V(i))==null?void 0:e.querySelector("select:not([disabled]), input"))==null||l.focus()};const f=a.messages,t=e=>e instanceof globalThis.Node;return(e,l)=>(r(),_(K,{ref_key:"consoleEl",ref:i,class:S([{stretch:n.stretch},"console"])},{default:p(()=>[(r(!0),d(g,null,C(N(f),o=>(r(),d(g,{key:o.id},[o.type==="select"?(r(),_(z,{key:0,class:"log",label:o.label,style:{"margin-bottom":"0.25em"}},{default:p(()=>[m(T,{class:"select",disabled:!!o.selected,"model-value":o.selected||"","onUpdate:modelValue":h=>h&&(o.selected=h)&&e.$emit("select",o.id,h)},{default:p(()=>[O,(r(!0),d(g,null,C(o.options,(h,k)=>(r(),d("option",{key:k,value:k},y(h),9,W))),128))]),_:2},1032,["disabled","model-value","onUpdate:modelValue"])]),_:2},1032,["label"])):o.type==="line"?(r(),d("hr",G)):Array.isArray(o.content)?(r(),d("p",J,y(o.content.join(" ")),1)):t(o.content)?(r(),d("p",Q,[m(A,{node:o.content},null,8,["node"])])):(r(),d("p",{key:4,class:S([o.type,"log"])},y(o.content),3))],64))),128)),M("form",{class:"form",style:{"margin-top":"auto"},onSubmit:x(c,["prevent"])},[m(U,{space:.75},{default:p(()=>[m($,{ref:"fieldEl",class:"field","model-value":n.field?n.field:"",placeholder:n.placeholder,onKeydown:l[0]||(l[0]=o=>e.$emit("key",o.key,()=>o.preventDefault())),"onUpdate:modelValue":l[1]||(l[1]=o=>e.$emit("update:field",o))},null,8,["model-value","placeholder"]),m(L,{onClick:u},{default:p(()=>[X]),_:1})]),_:1},8,["space"])],40,R)]),_:1},8,["class"]))}});var ne=q(Y,[["__scopeId","data-v-2f2b0038"]]);export{ne as C,se as u};