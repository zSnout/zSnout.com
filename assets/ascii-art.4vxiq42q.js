import{d as R,q as g,aH as j,o as q,c as E,w,a as x}from"./index.3wtsgydi.js";import{F as L}from"./FullscreenDisplay.6alzznsv.js";import{u as O}from"./useCanvas.87p0yoq7.js";import{u as T,a as U}from"./useVideoFromStream.r6hxu1yk.js";import"./SharedNav.40at9hg6.js";import"./Button.49gbgcb2.js";import"./_plugin-vue_export-helper.35ltfn2z.js";import"./LogoLight.539ztpd2.js";function V(c){const o=document.createElement("canvas"),h=o.getContext("2d");return{canvas:o,ctx:h,update:(i=c.videoWidth,r=c.videoHeight)=>{o.width=i,o.height=r,h.drawImage(c,0,0,i,r)}}}const G=R({__name:"ascii-art",setup(c){const i="$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,\"^`'.  ",r=g(),l=g("user"),{stream:u,setOpts:b}=T({audio:!1,video:{facingMode:{ideal:l.value}}});function M(){l.value=l.value==="user"?"environment":"user",b({audio:!1,video:{facingMode:{ideal:l.value}}})}const z=U(u,!0),{ctx:d,update:_}=V(z);return O(r,{useDevicePixelRatio:!1}).then(m=>{const{canvas:n}=m,a=n.getContext("2d");if(!a)throw new Error("Your device doesn't support HTML5 canvases.");j(()=>{if(!u.value)return;_(~~(n.width/7.5),~~(n.height/9));const t=d.getImageData(0,0,d.canvas.width,d.canvas.height);a.beginPath(),a.fillStyle="black",a.fillRect(0,0,n.width,n.height);for(let e=0;e<t.height;e++)for(let s=0;s<t.width;s++){const[f,p,v]=t.data.subarray(4*(e*t.width+s),4*(e*t.width+s)+3),[C,y,H]=t.data.subarray(4*(e*t.width+Math.max(0,s-1)),4*(e*t.width+Math.max(0,s-1))+3),[k,W,B]=t.data.subarray(4*(Math.max(0,e-1)*t.width+s),4*(Math.max(0,e-1)*t.width+s)+3),F=(Math.abs(f-C)+Math.abs(f-k))/2,S=(Math.abs(p-y)+Math.abs(p-W))/2,D=(Math.abs(v-H)+Math.abs(v-B))/2,I=.2126*F+.7152*S+.0722*D,P=i[i.length-1-~~(I*i.length/256)];a.beginPath(),a.fillStyle="white",a.font=`${9}px monospace`,a.textAlign="center",a.textBaseline="middle",a.fillText(P,s*7.5+7.5/2,e*9+9/2)}})}),(m,n)=>(q(),E(L,null,{indicator:w(()=>[x("span",{style:{cursor:"pointer"},onClick:M},"Switch Camera")]),default:w(()=>[x("canvas",{ref_key:"canvas",ref:r},null,512)]),_:1}))}});export{G as default};
