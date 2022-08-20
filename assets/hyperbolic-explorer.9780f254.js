import{u as t,_ as u}from"./ColorSliders.33bde3d3.js";import{F as f}from"./FullscreenDisplay.e4ced142.js";import{M as p}from"./MovableCanvas2d.67bffe48.js";import{d as c,s as a,aO as i,o as m,c as _,w as r,b as d,u as v,a as x}from"./index.e9cc25ec.js";import"./useOption.7ce5b27b.js";import"./InlineRangeField.b51f5dce.js";import"./VStack.7090fa40.js";import"./Labeled.66b2293d.js";import"./SharedNav.57e661d0.js";import"./CoordinateCanvas2d.17a0a47b.js";import"./WebGlCanvas.a21875db.js";const N=c({__name:"hyperbolic-explorer",setup(y){const s=t(),l=`
  uniform vec2 u_scale;
  uniform vec2 u_offset;
  uniform vec2 us_scale;
  uniform vec2 us_offset;
  uniform vec2 u_resolution;

  ${t}

  float sinh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / 2.0;
  }

  float cosh(float val) {
    float tmp = exp(val);
    return (tmp + 1.0 / tmp) / 2.0;
  }

  float tanh(float val) {
    float tmp = exp(val);
    return (tmp - 1.0 / tmp) / (tmp + 1.0 / tmp);
  }

  float arcosh(float val) {
    return log(val + sqrt(val * val - 1.0));
  }

  void main() {
    vec2 pos = (gl_FragCoord.xy / u_resolution) * u_scale + u_offset;
    vec2 center = 0.5 * u_scale + u_offset;
    vec2 square = (gl_FragCoord.xy / u_resolution * us_scale + us_offset) * 1.2;

    if (square.x * square.x + square.y * square.y > 1.0) {
      gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0);
      return;
    }

    pos -= center;
    pos *= -1.2;
    if (abs(pos.x) < 0.00001) pos.x = 0.00001;

    /* Poincare to Hyperboloid */
    float a = (1.0 - pos.y * pos.y) / (pos.x * pos.x) - 1.0;
    float b = -2.0 / pos.x;

    float x = -b / a; // other is x = 0
    float y = pos.y / pos.x * x;
    float z = x / pos.x - 1.0;

    x -= 2.0 * center.x;
    y -= 2.0 * center.y;

    float d = floor(abs(x)) + floor(abs(y));
    if (x < 0.0) d -= 1.0;
    if (y < 0.0) d += 1.0;

    gl_FragColor = vec4(use_color_sliders(d / 20.0), 1.0);
  }
  `,e=a(),n=a();return i(()=>{if(!e.value)return;const o=new p(e.value,{fragmentString:l,saveBounds:!0,bounds:{xStart:-1,xEnd:1,yStart:-1,yEnd:1}});o.on("render",()=>s.setGlsl(o)),n.value=()=>{o.setBounds({xStart:-1,xEnd:1,yStart:-1,yEnd:1})}}),(o,g)=>(m(),_(f,null,{options:r(()=>[d(u,{sliders:v(s)},null,8,["sliders"])]),default:r(()=>[x("canvas",{ref_key:"canvas",ref:e},null,512)]),_:1}))}});export{N as default};
