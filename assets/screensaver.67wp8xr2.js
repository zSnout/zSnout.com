import{d as p,I as l,aB as u,L as _,o as a,c as d,w as m,an as f,h as i,E as h,A as x,F as v,_ as y}from"./index.158tmzqu.js";import{i as z}from"./_virtual_image-list.62ylnk5k.js";import{F as g}from"./FullscreenDisplay.421pqk6v.js";import{u as F}from"./useRandomItem.3g35iz2c.js";import"./BookmarkIcon.108uetaj.js";import"./VStack.6d7g92uw.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.2mn301v0.js";const I=["src"],M=p({__name:"screensaver",setup(k){const t=l([]);let r=0;function n(){const e=Math.floor(3*Math.random());return e===r?n():r=e}function o(){const e=(n()+1)*80;t.push({id:Math.random(),size:e,speed:e/160,src:F(z),x:Math.floor(Math.random()*(innerWidth-e)),y:innerHeight+16})}function c(){for(const e of t)e.y<-e.size-16&&t.splice(t.indexOf(e),1),e.y-=e.speed}return o(),u(o,()=>1920/f.value*1e3),_(c),(e,w)=>(a(),d(g,null,{default:m(()=>[(a(!0),i(v,null,h(t,s=>(a(),i("img",{key:s.id,class:"image shadow",src:s.src,style:x({left:`${s.x}px`,top:`${s.y}px`,width:`${s.size}px`,height:`${s.size}px`})},null,12,I))),128))]),_:1}))}});const W=y(M,[["__scopeId","data-v-eee15b8f"]]);export{W as default};
