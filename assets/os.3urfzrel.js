import{V as D,B as F}from"./VStack.6d7g92uw.js";import{M as X}from"./MiddleText.j1cutmtm.js";import{d as B,q as m,g as _,ao as P,ar as M,C as Y,Y as E,o as w,h as k,a as n,A as S,z as L,u as g,_ as H,I as N,e as x,w as I,F as T,E as q,b as l,c as A,p as G,l as O}from"./index.5v55a00n.js";import{u as h}from"./index.55wflef3.js";const R={class:"bar"},Z=B({__name:"MovableFrame",props:{left:null,top:null},emits:["close","interact"],setup(i,{emit:u}){const{left:a,top:z}=i;L(p=>({"6223801a":g(r),"3b6e8c3c":g(v),"676b4f4b":g(o),"6c2fa042":g(s)}));const d=m(!1),o=h(500,300,_(()=>P.value)),s=h(300,300,_(()=>M.value)),r=h(z-s.value/2,0,_(()=>M.value-s.value)),v=h(a-o.value/2,0,_(()=>P.value-o.value)),y=m(!1),c=m(!1),b=m(!1);Y("pointerup",()=>{y.value=!1,c.value=!1});const C=m();E(()=>{var e;const p=(e=C.value)==null?void 0:e.contentWindow,t=()=>u("interact");for(const W of["focus","keydown","mousedown","scroll"])p==null||p.addEventListener(W,t,{passive:!0})});function V(){innerWidth>innerHeight?(v.value=v.value?0:innerWidth/2,r.value=0,o.value=innerWidth/2,s.value=innerHeight):(v.value=0,r.value=r.value?0:innerHeight/2,o.value=innerWidth,s.value=innerHeight/2),d.value=!0,setTimeout(()=>d.value=!1,500)}return(p,t)=>(w(),k("div",{class:"wrapper second-layer",style:S(d.value?"transition: top 0.3s, left 0.3s, width 0.3s, height 0.3s, var(--transitions)":""),onMousedown:t[11]||(t[11]=e=>p.$emit("interact"))},[n("iframe",{ref_key:"frame",ref:C,class:"frame",src:"/"},null,512),n("div",{class:"sizer",style:{bottom:"0",left:"0",cursor:"nesw-resize"},onPointerdown:t[0]||(t[0]=e=>(c.value=!0,e.target.setPointerCapture(e.pointerId),e.stopPropagation())),onPointermove:t[1]||(t[1]=e=>c.value&&(o.value-=e.movementX,v.value+=e.movementX,s.value+=e.movementY)),onTouchmove:t[2]||(t[2]=e=>e.preventDefault())},null,32),n("div",{class:"sizer",style:{bottom:"0",right:"0",cursor:"nwse-resize"},onPointerdown:t[3]||(t[3]=e=>(c.value=!0,e.target.setPointerCapture(e.pointerId),e.stopPropagation())),onPointermove:t[4]||(t[4]=e=>c.value&&(o.value+=e.movementX,s.value+=e.movementY)),onTouchmove:t[5]||(t[5]=e=>e.preventDefault())},null,32),n("div",R,[n("div",{class:"mover",onClick:t[6]||(t[6]=e=>!b.value&&V()),onPointerdown:t[7]||(t[7]=e=>(y.value=!0,b.value=!1,e.target.setPointerCapture(e.pointerId),e.stopPropagation())),onPointermove:t[8]||(t[8]=e=>y.value&&(b.value=!0,v.value+=e.movementX,r.value+=e.movementY)),onTouchmove:t[9]||(t[9]=e=>e.preventDefault())}," \u2022\u2022\u2022 ",32)]),n("div",{class:"close",onClick:t[10]||(t[10]=e=>u("close"))},"x")],36))}});const j=H(Z,[["__scopeId","data-v-d6ce32f8"]]),f=i=>(G("data-v-48194a1b"),i=i(),O(),i),J=f(()=>n("p",null," This is zSnout OS. Click an empty space to create a window there. Then, you may: ",-1)),K=f(()=>n("p",null,[l(" move the window by dragging the "),n("strong",null,"three dots"),l(" in the top middle, ")],-1)),Q=f(()=>n("p",null,[l(" activate split screen by clicking the "),n("strong",null,"three dots"),l(" in the top middle, ")],-1)),U=f(()=>n("p",null,[l(" resize the window via the "),n("strong",null,"bottom left"),l(" or "),n("strong",null,"bottom right"),l(" corners, or ")],-1)),$=f(()=>n("p",null,[l(" close the window by clicking the red button in the "),n("strong",null,"top left.")],-1)),ee={class:"no-link",href:"/",style:{display:"block",width:"100%","margin-top":"1em"}},te=B({__name:"os",setup(i){const u=m(0),a=N([]);return(z,d)=>(w(),k(T,null,[n("div",{class:"page",onClick:d[0]||(d[0]=o=>o.target===o.currentTarget&&a.length<10&&a.push({id:Math.random(),zIndex:++u.value,top:o.clientY,left:o.clientX}))},[x(X,null,{default:I(()=>[x(D,null,{default:I(()=>[J,K,Q,U,$,n("a",ee,[x(F,{style:{width:"100%"}},{default:I(()=>[l("Go Back Home")]),_:1})])]),_:1})]),_:1})]),(w(!0),k(T,null,q(a,o=>(w(),A(j,{key:o.id,left:o.left,style:S({zIndex:o.zIndex}),top:o.top,onClose:s=>a.splice(a.findIndex(({id:r})=>r===o.id),1),onInteract:s=>o.zIndex!=u.value&&(o.zIndex=++u.value)},null,8,["left","style","top","onClose","onInteract"]))),128))],64))}});const ae=H(te,[["__scopeId","data-v-48194a1b"]]);export{ae as default};
