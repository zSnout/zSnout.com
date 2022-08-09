import{u as d,_ as p}from"./ColorSliders.c839b9f3.js";import{F as g}from"./FullscreenDisplay.26e96a2b.js";import{u as h}from"./useCanvas.7e8d1018.js";import{k as c,j as C,_ as w,$ as x,Q as b,d as y,o as k,c as F,w as i,b as D,u as M,a as m}from"./index.5bcce4fc.js";import{W as O}from"./WebGlCanvas.9d9b40d0.js";import"./useOption.05608264.js";import"./InlineRangeField.c924674c.js";import"./BookmarkIcon.929a48f2.js";import"./Labeled.d288000a.js";function S(a){const o=c();function e(){o.value&&o.value.getTracks().map(t=>t.stop())}function r(){var t;e(),(t=navigator.mediaDevices)==null||t.getUserMedia({...a,video:{...typeof(a==null?void 0:a.video)=="object"&&(a==null?void 0:a.video),aspectRatio:{ideal:innerWidth/innerHeight}}}).then(n=>o.value=n).catch(()=>{throw new Error("Your device doesn't work with camera applications.")})}return r(),setTimeout(r,1e3),C("resize",w(r,250)),x(e),{stream:o,stop:e,setOpts(t){a=t,r()},retry:r}}function j(a,o){const e=document.createElement("video");return e.playsInline=!0,e.muted=o!=null?o:!1,b(()=>{var r;e.srcObject=(r=a.value)!=null?r:null,e.srcObject&&e.play()}),e}const N=y({__name:"CameraModifier",setup(a){const o=c(),e=d(),r=c("user"),{stream:t,setOpts:n}=S({audio:!1,video:{facingMode:{ideal:r.value}}});function f(){r.value=r.value==="user"?"environment":"user",n({audio:!1,video:{facingMode:{ideal:r.value}}})}const v=j(t,!0),_=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${d}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return h(o).then(u=>{const{canvas:l}=u,s=new O(l,{fragmentString:_});s.setTexture("u_texture",v),s.on("render",()=>e.setGlsl(s))}),(u,l)=>(k(),F(g,null,{options:i(()=>[D(p,{sliders:M(e)},null,8,["sliders"])]),indicator:i(()=>[m("span",{onClick:f},"Switch Camera")]),default:i(()=>[m("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{N as default};
