import{d,f as m,g as r,o,h as c,e as l,i as u,w as a,m as p,u as h,c as v,j as y,F as f,r as s,_ as g}from"./index.49e43vj6.js";import{N as $,F as k}from"./Navigation.2xu1kz2a.js";import{S as D}from"./SharedNav.238jku1n.js";const B=d({__name:"DocumentDisplay",props:{center:{type:Boolean},explicitHeight:{type:Boolean},maxWidth:{type:Boolean},noFooter:{type:Boolean},small:{type:Boolean}},setup(t){const i=m("(max-width: 400px)"),n=r(()=>i.value?"3":"3.5");return(e,b)=>(o(),c(f,null,[l($,{small:t.small},u({_:2},[e.$slots.aside?{name:"aside",fn:a(()=>[s(e.$slots,"aside",{},void 0,!0)]),key:"0"}:void 0,e.$slots.buttons?{name:"buttons",fn:a(()=>[s(e.$slots,"buttons",{},void 0,!0)]),key:"1"}:void 0,e.$slots.help?{name:"help",fn:a(()=>[s(e.$slots,"help",{},void 0,!0)]),key:"2"}:void 0,e.$slots.indicator?{name:"indicator",fn:a(()=>[s(e.$slots,"indicator",{},void 0,!0)]),key:"3"}:void 0,e.$slots.options?{name:"options",fn:a(()=>[s(e.$slots,"options",{},void 0,!0)]),key:"4"}:void 0]),1032,["small"]),l(D,p({class:[{center:t.center},"page-content"],aside:!!e.$slots.aside,"explicit-height":t.explicitHeight,flex:t.center,"max-width":t.maxWidth,"min-height":`calc(var(--app-height) - ${h(n)}rem)`,small:t.small,bottom:"",top:""},e.$attrs),{default:a(()=>[s(e.$slots,"default",{},void 0,!0)]),_:3},16,["class","aside","explicit-height","flex","max-width","min-height","small"]),t.noFooter?y("",!0):(o(),v(k,{key:0,aside:!!e.$slots.aside,small:t.small},null,8,["aside","small"]))],64))}});const N=g(B,[["__scopeId","data-v-0dc74aba"]]);export{N as D};