import{F as l}from"./FullscreenDisplay.a4360b3b.js";import{W as n}from"./WebGlCanvas.8976ae90.js";import{d as t,k as c,aL as i,b6 as f,a9 as u,o as p,c as v,w as _,a as m}from"./index.ea2ab528.js";import"./BookmarkIcon.6af38a46.js";import"./VStack.9479ad49.js";const k=t({__name:"Uniforms",setup(g){const e=c(),r=`
  uniform vec2 u_resolution;
  uniform float left;

  varying vec4 v_position;

  void main() {
    vec2 pos = gl_FragCoord.xy / u_resolution;

    if (pos.x < left) {
      gl_FragColor = vec4(1, 1, 0, 1);
    } else if (pos.y < 0.01) {
      gl_FragColor = vec4(1, 0, 0, 1);
    } else if (pos.x > 0.99) {
      gl_FragColor = vec4(0, 1, 0, 1);
    } else if (pos.y > 0.99) {
      gl_FragColor = vec4(0, 0, 1, 1);
    } else {
      gl_FragColor = vec4(pos.xy, 0.5, 1);
    }
  }`;return i(()=>{if(!e.value)return;const o=new n(e.value,{fragmentString:r}),a=f(10),s=u(()=>a.value/1e3%1);o.useUniform("left",s)}),(o,a)=>(p(),v(l,null,{default:_(()=>[m("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{k as default};
