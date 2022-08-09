import{u as c,_ as m}from"./ColorSliders.681876a1.js";import{F as f}from"./FullscreenDisplay.7a2d1c8c.js";import{u as v}from"./useCanvas.74f3fb2a.js";import{k as l,j as _,_ as p,$ as g,Q as h,d as x,o as b,c as w,w as u,b as C,u as k,a as y}from"./index.15748092.js";import{W as F}from"./WebGlCanvas.3b7c9a3c.js";import"./useOption.ac5dad0a.js";import"./InlineRangeField.b6ba855e.js";import"./BookmarkIcon.fd3553c6.js";import"./Labeled.87d7b1ca.js";function D(a){const e=l();function r(){var o;e.value&&e.value.getTracks().map(t=>t.stop()),(o=navigator.mediaDevices)==null||o.getUserMedia({...a,video:{...typeof(a==null?void 0:a.video)=="object"&&(a==null?void 0:a.video),aspectRatio:{ideal:innerWidth/innerHeight}}}).then(t=>e.value=t).catch(()=>{throw new Error("Your device doesn't work with camera applications.")})}return r(),setTimeout(r,1e3),_("resize",p(r,250)),g(()=>{e.value&&e.value.getTracks().map(o=>o.stop())}),e}function M(a,e){const r=document.createElement("video");return r.playsInline=!0,r.muted=e!=null?e:!1,h(()=>{var o;r.srcObject=(o=a.value)!=null?o:null,r.srcObject&&r.play()}),r}const $=x({__name:"CameraModifier",setup(a){const e=l(),r=c(),o=D({audio:!1,video:{facingMode:{ideal:"user"}}}),t=M(o,!0),d=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${c}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return v(e).then(n=>{const{canvas:i}=n,s=new F(i,{fragmentString:d});s.setTexture("u_texture",t),s.on("render",()=>r.setGlsl(s))}),(n,i)=>(b(),w(f,null,{options:u(()=>[C(m,{sliders:k(r)},null,8,["sliders"])]),default:u(()=>[y("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{$ as default};
