import{f as k}from"./main.200onzgm.js";import{u as S}from"./index.dlnn8pzg.js";import{F as g}from"./FullscreenDisplay.od9apf4f.js";import{H as w}from"./BookmarkIcon.46krkaf8.js";import{u as R}from"./useCanvas.3phirwm2.js";import{s as b}from"./useOption.1pf10ib0.js";import{r as o}from"./useRandint.48fktzm0.js";import{r as x}from"./useRandomColor.2q4zn31b.js";import{l as z,r as y,x as D,C as F,D as p,F as I,a9 as r,ad as B,ae as H}from"./runtime-core.esm-bundler.47vl3tei.js";import{a as L}from"./_plugin-vue_export-helper.4yxwi37t.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";const N=a=>(B("data-v-3bd1004c"),a=a(),H(),a),V=N(()=>r("span",null,"/",-1)),$=z({__name:"rectangles",setup(a){const u=y(),n=y(),s=S(50,5,1e3);return b("size",s),R(u,{useDevicePixelRatio:!1}).then(m=>{const{canvas:t,onDispose:l,onResize:C,size:h}=m,{width:f,height:d}=h,e=t.getContext("2d");if(!e)throw new Error("Your device doesn't support HTML5 canvases.");n.value=()=>{e.fillStyle="white",e.fillRect(0,0,f.value,d.value)},n.value(),C(n.value),l(k(()=>{for(let A of Array(10)){e.fillStyle=x(),e.strokeStyle=x();const c=o(0,s.value),i=o(0,s.value),v=o(0,f.value-c),_=o(0,d.value-i);e.fillRect(v,_,c,i),e.strokeRect(v,_,c,i)}}).pause)}),(m,t)=>(D(),F(g,null,{indicator:p(()=>[I(w,null,{default:p(()=>[r("span",{class:"button",onClick:t[0]||(t[0]=l=>s.value-=1)},"Smaller"),V,r("span",{class:"button",onClick:t[1]||(t[1]=l=>s.value+=1)},"Larger")]),_:1})]),default:p(()=>[r("canvas",{ref_key:"canvas",ref:u},null,512)]),_:1}))}});const X=L($,[["__scopeId","data-v-3bd1004c"]]);export{X as default};
