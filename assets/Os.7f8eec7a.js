import{d as B,av as j,s as p,a9 as h,aP as P,aQ as M,j as D,aL as F,o as w,f as I,a as n,au as S,u as g,r as X,b as x,w as k,F as T,k as L,p as N,g as O,e as s,c as Y}from"./index.5ecff434.js";import{u as b}from"./index.6ce012c2.js";import{_ as H,V as E,B as G}from"./VStack.0cf8ef58.js";import{M as Q}from"./MiddleText.48935709.js";const R={class:"bar"},Z=B({__name:"MovableFrame",props:{left:null,top:null},emits:["close","interact"],setup(r,{emit:u}){const{left:l,top:z}=r;j(c=>({"36a1f41a":g(i),c4ce743c:g(v),"161cc34b":g(o),d8a6a77c:g(a)}));const d=p(!1),o=b(500,300,h(()=>P.value)),a=b(300,300,h(()=>M.value)),i=b(z-a.value/2,0,h(()=>M.value-a.value)),v=b(l-o.value/2,0,h(()=>P.value-o.value)),_=p(!1),m=p(!1),y=p(!1);D("pointerup",()=>{_.value=!1,m.value=!1});const C=p();F(()=>{var e;const c=(e=C.value)==null?void 0:e.contentWindow,t=()=>u("interact");for(const W of["focus","keydown","mousedown","scroll"])c==null||c.addEventListener(W,t,{passive:!0})});function V(){innerWidth>innerHeight?(v.value=v.value?0:innerWidth/2,i.value=0,o.value=innerWidth/2,a.value=innerHeight):(v.value=0,i.value=i.value?0:innerHeight/2,o.value=innerWidth,a.value=innerHeight/2),d.value=!0,setTimeout(()=>d.value=!1,500)}return(c,t)=>(w(),I("div",{class:"wrapper second-layer",style:S(d.value?"transition: top 0.3s, left 0.3s, width 0.3s, height 0.3s, var(--transitions)":""),onMousedown:t[11]||(t[11]=e=>c.$emit("interact"))},[n("iframe",{ref_key:"frame",ref:C,class:"frame",src:"/"},null,512),n("div",{class:"sizer",style:{bottom:"0",left:"0",cursor:"nesw-resize"},onPointerdown:t[0]||(t[0]=e=>(m.value=!0,e.target.setPointerCapture(e.pointerId),e.stopPropagation())),onPointermove:t[1]||(t[1]=e=>m.value&&(o.value-=e.movementX,v.value+=e.movementX,a.value+=e.movementY)),onTouchmove:t[2]||(t[2]=e=>e.preventDefault())},null,32),n("div",{class:"sizer",style:{bottom:"0",right:"0",cursor:"nwse-resize"},onPointerdown:t[3]||(t[3]=e=>(m.value=!0,e.target.setPointerCapture(e.pointerId),e.stopPropagation())),onPointermove:t[4]||(t[4]=e=>m.value&&(o.value+=e.movementX,a.value+=e.movementY)),onTouchmove:t[5]||(t[5]=e=>e.preventDefault())},null,32),n("div",R,[n("div",{class:"mover",onClick:t[6]||(t[6]=e=>!y.value&&V()),onPointerdown:t[7]||(t[7]=e=>(_.value=!0,y.value=!1,e.target.setPointerCapture(e.pointerId),e.stopPropagation())),onPointermove:t[8]||(t[8]=e=>_.value&&(y.value=!0,v.value+=e.movementX,i.value+=e.movementY)),onTouchmove:t[9]||(t[9]=e=>e.preventDefault())}," \u2022\u2022\u2022 ",32)]),n("div",{class:"close",onClick:t[10]||(t[10]=e=>u("close"))},"x")],36))}});var q=H(Z,[["__scopeId","data-v-9351dbc4"]]);const f=r=>(N("data-v-0b64fb80"),r=r(),O(),r),A=f(()=>n("p",null," This is zSnout OS. Click an empty space to create a window there. Then, you may: ",-1)),J=f(()=>n("p",null,[s(" move the window by dragging the "),n("strong",null,"three dots"),s(" in the top middle, ")],-1)),K=f(()=>n("p",null,[s(" activate split screen by clicking the "),n("strong",null,"three dots"),s(" in the top middle, ")],-1)),U=f(()=>n("p",null,[s(" resize the window via the "),n("strong",null,"bottom left"),s(" or "),n("strong",null,"bottom right"),s(" corners, or ")],-1)),$=f(()=>n("p",null,[s(" close the window by clicking the red button in the "),n("strong",null,"top left.")],-1)),ee={class:"no-link",href:"/",style:{display:"block",width:"100%","margin-top":"1em"}},te=s("Go Back Home"),oe=B({__name:"Os",setup(r){const u=p(0),l=X([]);return(z,d)=>(w(),I(T,null,[n("div",{class:"page",onClick:d[0]||(d[0]=o=>o.target===o.currentTarget&&l.length<10&&l.push({id:Math.random(),zIndex:++u.value,top:o.clientY,left:o.clientX}))},[x(Q,null,{default:k(()=>[x(E,null,{default:k(()=>[A,J,K,U,$,n("a",ee,[x(G,{style:{width:"100%"}},{default:k(()=>[te]),_:1})])]),_:1})]),_:1})]),(w(!0),I(T,null,L(l,o=>(w(),Y(q,{key:o.id,left:o.left,style:S({zIndex:o.zIndex}),top:o.top,onClose:a=>l.splice(l.findIndex(({id:i})=>i===o.id),1),onInteract:a=>o.zIndex!=u.value&&(o.zIndex=++u.value)},null,8,["left","style","top","onClose","onInteract"]))),128))],64))}});var ie=H(oe,[["__scopeId","data-v-0b64fb80"]]);export{ie as default};