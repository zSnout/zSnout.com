import{u as n,F as r}from"./useWebGL.5519b411.js";import{d as i,m as c,aw as f,ad as p,c as u,a,o as h,b as e}from"./index.07daa670.js";import"./Modal.790b4b1b.js";const d=e("p",null,[e("strong",null,"What is this?")],-1),m=e("p",null," This is a WebGL debug page. The left side should be a yellow bar, the right a green bar, the top blue, and the bottom red. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. ",-1),y=i({name:"WebglDebug",setup(b){const o=c();return n(o,`
    precision highp float;

    in vec2 pos;
    out vec4 color;

    uniform float left;

    void main() {
      if (pos.x < left) {
        color = vec4(1, 1, 0, 1);
      } else if (pos.y < 0.01) {
        color = vec4(1, 0, 0, 1);
      } else if (pos.x > 0.99) {
        color = vec4(0, 1, 0, 1);
      } else if (pos.y > 0.99) {
        color = vec4(0, 0, 1, 1);
      } else {
        color = vec4(pos.x, pos.y, 0.5, 1);
      }
    }`).then(t=>{const s=f(10,{immediate:!0}),l=p(()=>s.value/1e3%1);t.useUniform("left","f",l)}),(t,s)=>(h(),u(r,null,{options:a(()=>[d,m]),default:a(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{y as default};
