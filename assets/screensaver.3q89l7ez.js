import{d as l,I as _,a3 as f,L as m,q as u,o as a,c as d,w as h,ap as x,h as c,E as y,A as v,F as z,_ as F}from"./index.5r9exxgm.js";import{_ as I}from"./_virtual_image-list.4xv98lbk.js";import{F as g}from"./FullscreenDisplay.hao6npqe.js";import{u as k}from"./useRandomItem.3g35iz2c.js";import"./BookmarkIcon.1thszj4g.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const $=["src"],b=l({__name:"screensaver",setup(w){const t=_([]);let r=0;function n(){const e=Math.floor(3*Math.random());return e===r?n():r=e}function o(){const e=(n()+1)*80;t.push({id:Math.random(),size:e,speed:e/160,src:k(I),x:Math.random(),y:innerHeight+16})}function i(){for(const e of t)e.y<-e.size-100&&t.splice(t.indexOf(e),1),e.y-=e.speed}o(),f(o,()=>1920/x.value*1e3),m(i);const p=u();return(e,M)=>(a(),d(g,{ref_key:"parent",ref:p},{default:h(()=>[(a(!0),c(z,null,y(t,s=>(a(),c("img",{key:s.id,class:"image shadow",src:s.src,style:v({left:`calc(${s.x} * (100% - ${s.size}px))`,top:`${s.y}px`,width:`${s.size}px`,height:`${s.size}px`})},null,12,$))),128))]),_:1},512))}});const H=F(b,[["__scopeId","data-v-fb2aa05b"]]);export{H as default};
