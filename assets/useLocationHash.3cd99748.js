import{D as r}from"./DocumentDisplay.ac1bd95f.js";import{H as d}from"./SharedNav.09f2adfd.js";import{_ as n}from"./VStack.f7aa5462.js";import{d as c,o as l,c as u,w as a,b as p,q as f,av as m,D as h,ah as _}from"./index.8cc95afd.js";const v=c({__name:"EditorAndViewer",props:{dualEditor:{type:Boolean}},setup(t){return(e,x)=>(l(),u(r,{center:"","explicit-height":"","max-width":""},{default:a(()=>[p(d,{class:m([{dualEditor:t.dualEditor},"stack"]),space:.75,style:{height:"100%","justify-content":"center"}},{default:a(()=>[f(e.$slots,"default",{},void 0,!0)]),_:3},8,["class","space"])]),_:3}))}});var y=n(v,[["__scopeId","data-v-28670d65"]]);const o=h();function s(){if(!o.value.hash)return"";let t=decodeURIComponent(o.value.hash);return t=t==null?void 0:t.slice(1),t==="#"?"":t!=null&&t.startsWith("#")?t.slice(1):t}function i(t){t||(t="#");const e=new URL(globalThis.location.href);e.hash=encodeURIComponent(t),globalThis.location.replace(e)}function C(t){return t&&!s()&&i(t),_({get(){return s()},set(e){i(e)}})}export{y as E,C as u};
