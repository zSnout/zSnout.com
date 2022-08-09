import{u as d,_ as p}from"./ColorSliders.803bf543.js";import{F as g}from"./FullscreenDisplay.24cb500f.js";import{u as h}from"./useCanvas.43fdd045.js";import{k as c,j as C,_ as w,$ as x,Q as y,d as b,o as k,c as F,w as i,b as D,u as M,a as m}from"./index.1cb9f9b2.js";import{W as O}from"./WebGlCanvas.2f1b6715.js";import"./useOption.747e368b.js";import"./InlineRangeField.3807f471.js";import"./BookmarkIcon.1e6e20a7.js";import"./Labeled.e5a31d43.js";function S(a){const o=c();function e(){o.value&&o.value.getTracks().map(t=>t.stop())}function r(){var t;e(),(t=navigator.mediaDevices)==null||t.getUserMedia({...a,video:{...typeof(a==null?void 0:a.video)=="object"&&(a==null?void 0:a.video),aspectRatio:{ideal:innerWidth/innerHeight}}}).then(n=>o.value=n).catch(()=>{throw new Error("Your device doesn't work with camera applications.")})}return r(),setTimeout(r,1e3),C("resize",w(r,250)),x(e),{stream:o,stop:e,setOpts(t){a=t,r()},retry:r}}function j(a,o){const e=document.createElement("video");return e.playsInline=!0,e.muted=o!=null?o:!1,y(()=>{var r;e.srcObject=(r=a.value)!=null?r:null,e.srcObject&&e.play()}),e}const N=b({__name:"CameraModifier",setup(a){const o=c(),e=d(),r=c("user"),{stream:t,setOpts:n}=S({audio:!1,video:{facingMode:{ideal:r.value}}});function f(){r.value=r.value==="user"?"environment":"user",n({audio:!1,video:{facingMode:{ideal:r.value}}})}const v=j(t,!0),_=`
  uniform sampler2D u_texture;
  uniform vec2 u_resolution;

  ${d}

  void main() {
    vec3 color = texture2D(u_texture, gl_FragCoord.xy / u_resolution).rgb;
    color = use_color_sliders(color.rbg);

    gl_FragColor = vec4(color, 1.0);
  }
  `;return h(o).then(u=>{const{canvas:l}=u,s=new O(l,{fragmentString:_});s.setTexture("u_texture",v),s.on("render",()=>e.setGlsl(s))}),(u,l)=>(k(),F(g,null,{options:i(()=>[D(p,{sliders:M(e)},null,8,["sliders"])]),indicator:i(()=>[m("span",{style:{cursor:"pointer"},onClick:f},"Switch Camera")]),default:i(()=>[m("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{N as default};
