import{d as m,f as d,g as r,o,h as u,r as s,e as l,w as a,m as c,u as p,c as h,i as f,F as v,j as y,_ as $}from"./index.v5ospewp.js";import{F as g,_ as k}from"./Navigation.vue_vue_type_script_setup_true_lang.4huvb0n5.js";import{S as D}from"./SharedNav.28xyli12.js";const B=m({__name:"DocumentDisplay",props:{center:{type:Boolean},explicitHeight:{type:Boolean},maxWidth:{type:Boolean},noFooter:{type:Boolean},small:{type:Boolean}},setup(t){const i=d("(max-width: 400px)"),n=r(()=>i.value?"3":"3.5");return(e,F)=>(o(),u(v,null,[s(e.$slots,"navigation",{},()=>[l(k,{small:t.small},y({_:2},[e.$slots.aside?{name:"aside",fn:a(()=>[s(e.$slots,"aside",{},void 0,!0)]),key:"0"}:void 0,e.$slots.buttons?{name:"buttons",fn:a(()=>[s(e.$slots,"buttons",{},void 0,!0)]),key:"1"}:void 0,e.$slots.help?{name:"help",fn:a(()=>[s(e.$slots,"help",{},void 0,!0)]),key:"2"}:void 0,e.$slots.indicator?{name:"indicator",fn:a(()=>[s(e.$slots,"indicator",{},void 0,!0)]),key:"3"}:void 0,e.$slots.options?{name:"options",fn:a(()=>[s(e.$slots,"options",{},void 0,!0)]),key:"4"}:void 0]),1032,["small"])],!0),l(D,c({class:[{center:t.center},"page-content"],aside:!!e.$slots.aside,"explicit-height":t.explicitHeight,flex:t.center,"max-width":t.maxWidth,"min-height":`calc(var(--app-height) - ${p(n)}rem)`,small:t.small,bottom:"",top:""},e.$attrs),{default:a(()=>[s(e.$slots,"default",{},void 0,!0)]),_:3},16,["class","aside","explicit-height","flex","max-width","min-height","small"]),t.noFooter?f("",!0):(o(),h(g,{key:0,aside:!!e.$slots.aside,small:t.small},null,8,["aside","small"]))],64))}});const x=$(B,[["__scopeId","data-v-fd66086a"]]);export{x as D};