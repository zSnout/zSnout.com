import{d as l,x as _,q as f,g as m,r as u,c as d,w as h,a2 as x,o as a,f as c,v,n as y,F as z,_ as g}from"./index.xh0zaea0.js";import{_ as F}from"./_virtual_image-list.r1g9ayy6.js";import{F as k}from"./FullscreenDisplay.75rpamat.js";import{u as I}from"./useRandomItem.3s2ay99w.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const $=["src"],b=l({__name:"screensaver",setup(w){const t=_([]);let r=0;function n(){const e=Math.floor(3*Math.random());return e===r?n():r=e}function o(){const e=(n()+1)*80;t.push({id:Math.random(),size:e,speed:e/160,src:I(F),x:Math.random(),y:innerHeight+16})}function i(){for(const e of t)e.y<-e.size-100&&t.splice(t.indexOf(e),1),e.y-=e.speed}o(),f(o,()=>1920/x.value*1e3),m(i);const p=u();return(e,M)=>(a(),d(k,{ref_key:"parent",ref:p},{default:h(()=>[(a(!0),c(z,null,v(t,s=>(a(),c("img",{key:s.id,class:"image shadow",src:s.src,style:y({left:`calc(${s.x} * (100% - ${s.size}px))`,top:`${s.y}px`,width:`${s.size}px`,height:`${s.size}px`})},null,12,$))),128))]),_:1},512))}});const O=g(b,[["__scopeId","data-v-fb2aa05b"]]);export{O as default};
