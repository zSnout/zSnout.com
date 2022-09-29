import{d as k,o as r,c as g,w as f,r as S,q as y,Y as B,h as c,I as V,D as E,E as w,F as _,e as m,t as b,n as C,u as D,a as M,b as N,ah as I,p as F,l as K,_ as L}from"./index.49e43vj6.js";import{B as T,V as $}from"./VStack.6d7g92uw.js";import{D as x}from"./Dropdown.5andrccq.js";import{F as U}from"./Field.2ydu2jt8.js";import{H as j}from"./BookmarkIcon.3wmuqdow.js";import{L as q}from"./Labeled.29mn7ohi.js";const A=k({__name:"MaybeLabeled",props:{label:null},setup(n){return(l,a)=>n.label?(r(),g(q,{key:0,label:n.label},{default:f(()=>[S(l.$slots,"default")]),_:3},8,["label"])):S(l.$slots,"default",{key:1})}}),H=k({__name:"Node",props:{node:null},setup(n){const{node:l}=n,a=y();return B(()=>{var u;(u=a.value)==null||u.replaceWith(l)}),(u,d)=>(r(),c("div",{ref_key:"el",ref:a},null,512))}}),z=n=>(F("data-v-3536536f"),n=n(),K(),n),O=z(()=>M("option",{disabled:"",value:""},"Choose an option...",-1)),W=["value"],Y={key:1,class:"log"},G={key:2,class:"log"},J={key:3,class:"log"},Q=["onSubmit"];function se(){const n={...globalThis.console,bindKey(t,e){n.focus(),p.push((s,o)=>(t===s&&(o(),e()),!0))},clear(){l.splice(0,l.length)},error(t,...e){l.push({type:"error",id:Math.random(),content:e.length?[t,...e]:t})},focus(){var t;(t=l.focus)==null||t.call(l)},key(t){return new Promise(e=>{n.focus(),p.push((s,o)=>{if(t===s){o(),e();return}return!0})})},line(){l.push({type:"line",id:Math.random()})},log(t,...e){l.push({type:"log",id:Math.random(),content:e.length?[t,...e]:t})},prompt(t,e){return a.value=t,n.focus(),new Promise(s=>{e?i.push(o=>{if(o)a.value="",s(o);else return!0}):i.push(o=>{a.value="",s(o)})})},select(t,e){const s=Math.random();return l.push({id:s,label:t,options:e,type:"select"}),setTimeout(n.focus),new Promise(o=>{d[s]=o})},user(t,...e){l.push({type:"user",id:Math.random(),content:e.length?[t,...e]:t})},warn(t,...e){l.push({type:"warn",id:Math.random(),content:e.length?[t,...e]:t})}},l=V([]),a=y(""),u=y(""),d=Object.create(null),i=[],p=[];return{console:n,field:u,messages:l,placeholder:a,onKey(t,e){p.splice(0,p.length,...p.filter(s=>s(t,e)))},onSelect(t,e){var s;(s=d[t])==null||s.call(d,e),delete d[t]},onSubmit(t){i.splice(0,i.length,...i.filter(e=>e(t)))}}}const R=k({__name:"Console",props:{field:null,messages:null,placeholder:null,stretch:{type:Boolean}},emits:["key","select","submit","update:field","update:messages"],setup(n,{emit:l}){const a=n;function u(){if(a.field){const e={type:"user",id:Math.random(),content:a.field};l("update:messages",a.messages.concat(e))}l("update:field",""),l("submit",a.field?a.field:void 0)}function d(e){let s=!1;l("key","Enter",()=>s=!0),s?e.preventDefault():u()}const i=y();a.messages.focus=()=>{var e,s;(s=(e=E(i))==null?void 0:e.querySelector("select:not([disabled]), input"))==null||s.focus()};const p=a.messages,t=e=>e instanceof globalThis.Node;return(e,s)=>(r(),g($,{ref_key:"consoleEl",ref:i,class:C([{stretch:n.stretch},"console"])},{default:f(()=>[(r(!0),c(_,null,w(D(p),o=>(r(),c(_,{key:o.id},[o.type==="select"?(r(),g(A,{key:0,class:"log",label:o.label,style:{"margin-bottom":"0.25em"}},{default:f(()=>[m(x,{class:"select",disabled:!!o.selected,"model-value":o.selected||"","onUpdate:modelValue":h=>h&&(o.selected=h)&&e.$emit("select",o.id,h)},{default:f(()=>[O,(r(!0),c(_,null,w(o.options,(h,v)=>(r(),c("option",{key:v,value:v},b(h),9,W))),128))]),_:2},1032,["disabled","model-value","onUpdate:modelValue"])]),_:2},1032,["label"])):o.type==="line"?(r(),c("hr",Y)):Array.isArray(o.content)?(r(),c("p",G,b(o.content.join(" ")),1)):t(o.content)?(r(),c("p",J,[m(H,{node:o.content},null,8,["node"])])):(r(),c("p",{key:4,class:C([o.type,"log"])},b(o.content),3))],64))),128)),M("form",{class:"form",style:{"margin-top":"auto"},onSubmit:I(u,["prevent"])},[m(j,{space:.75},{default:f(()=>[m(U,{ref:"fieldEl",class:"field","model-value":n.field?n.field:"",placeholder:n.placeholder,onKeydown:s[0]||(s[0]=o=>e.$emit("key",o.key,()=>o.preventDefault())),"onUpdate:modelValue":s[1]||(s[1]=o=>e.$emit("update:field",o))},null,8,["model-value","placeholder"]),m(T,{onClick:d},{default:f(()=>[N("\u2714")]),_:1})]),_:1},8,["space"])],40,Q)]),_:1},8,["class"]))}});const le=L(R,[["__scopeId","data-v-3536536f"]]);export{le as C,se as u};
