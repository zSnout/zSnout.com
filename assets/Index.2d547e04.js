import{u as n,F as r}from"./useWebGL.9b63311b.js";import{d as c,m as i,ax as f,ad as u,c as p,a,o as d,b as e}from"./index.98247306.js";import"./Modal.b645af15.js";const h=e("p",null,[e("strong",null,"What is this?")],-1),m=e("p",null," This is a WebGL debug page. The left side should be a yellow bar, the right a green bar, the top blue, and the bottom red. A gradient should be contained within these with a bottom-left corner of blue, a top-left of mint, a top-right of yellow, and a bottom-right of magenta. ",-1),x=c({name:"Index",setup(b){const o=i();return n(o,"in vec2 pos;out vec4 color;uniform float left;void main(){if(pos.x<left){color=vec4(1,1,0,1);}else if(pos.y<0.01){color=vec4(1,0,0,1);}else if(pos.x>0.99){color=vec4(0,1,0,1);}else if(pos.y>0.99){color=vec4(0,0,1,1);}else{color=vec4(pos.x,pos.y,0.5,1);}}").then(t=>{const s=f(10,{immediate:!0}),l=u(()=>s.value/1e3%1);t.useUniform("left","f",l)}),(t,s)=>(d(),p(r,null,{options:a(()=>[h,m]),default:a(()=>[e("canvas",{ref_key:"canvas",ref:o},null,512)]),_:1}))}});export{x as default};
