import{d as p,I as l,a3 as m,L as u,o as a,c as _,w as d,ao as f,h as i,E as h,A as x,F as v,_ as y}from"./index.5v55a00n.js";import{i as z}from"./_virtual_image-list.566lvfae.js";import{F as g}from"./FullscreenDisplay.421pqk6v.js";import{u as F}from"./useRandomItem.3g35iz2c.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.6d7g92uw.js";import"./Field.2ydu2jt8.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.238jku1n.js";const I=["src"],M=p({__name:"screensaver",setup(k){const s=l([]);let r=0;function n(){const e=Math.floor(3*Math.random());return e===r?n():r=e}function o(){const e=(n()+1)*80;s.push({id:Math.random(),size:e,speed:e/160,src:F(z),x:Math.floor(Math.random()*(innerWidth-e)),y:innerHeight+16})}function c(){for(const e of s)e.y<-e.size-16&&s.splice(s.indexOf(e),1),e.y-=e.speed}return o(),m(o,()=>1920/f.value*1e3),u(c),(e,w)=>(a(),_(g,null,{default:d(()=>[(a(!0),i(v,null,h(s,t=>(a(),i("img",{key:t.id,class:"image shadow",src:t.src,style:x({left:`${t.x}px`,top:`${t.y}px`,width:`${t.size}px`,height:`${t.size}px`})},null,12,I))),128))]),_:1}))}});const A=y(M,[["__scopeId","data-v-eee15b8f"]]);export{A as default};
