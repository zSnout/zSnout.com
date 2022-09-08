import{F as t}from"./FullscreenDisplay.5h55kk3b.js";import{W as l}from"./WebGlCanvas.1rb17qef.js";import{d as n,q as c,aN as i,aY as f,g as u,o as p,c as m,w as v,a as _}from"./index.3a6d11oo.js";import"./SharedNav.4wpq3a9c.js";import"./Button.3tf6rlyu.js";import"./_plugin-vue_export-helper.35ltfn2z.js";import"./LogoLight.539ztpd2.js";const w=n({__name:"uniforms",setup(g){const e=c(),r=`
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
  }`;return i(()=>{if(!e.value)return;const o=new l(e.value,{fragmentString:r}),a=f(10),s=u(()=>a.value/1e3%1);o.useUniform("left",s)}),(o,a)=>(p(),m(t,null,{default:v(()=>[_("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{w as default};
