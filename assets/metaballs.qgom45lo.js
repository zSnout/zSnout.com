import{F as c}from"./FullscreenDisplay.75rpamat.js";import{W as d}from"./WebGlCanvas.5wwm3cvm.js";import{d as f,r as m,j as x,c as y,w as p,o as g,a as u}from"./index.xh0zaea0.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const h=`
  uniform float scale;
  uniform vec3 metaballs[50];

  void main() {
    vec2 pos = gl_FragCoord.xy / scale;
    float dist;

    for (int i = 0; i < 50; i++) {
      vec3 mb = metaballs[i];

      float dx = mb.x - pos.x;
      dx = min(dx, 1.0 - dx);

      float dy = mb.y - pos.y;
      dy = min(dy, 1.0 - dy);

      dist += 1.0 / (dx * dx + dy * dy);
    }

    if (dist > 1000.0) gl_FragColor = vec4(1, 1, 1, 1);
    else gl_FragColor = vec4(0, 0, 0, 1);
  }
  `,L=f({__name:"metaballs",setup(v){const e=Array.from({length:50},()=>{const t=Math.random(),o=Math.random(),n=Math.random()*5+5,a=(Math.random()-.5)*2/200,s=(Math.random()-.5)*2/200;return{x:t,y:o,r:n,dx:a,dy:s}}),r=m();return x(()=>{if(!r.value)return;const t=new d(r.value,{fragmentString:h});t.on("render",()=>{e.map(a=>{a.x+=a.dx,a.x<0?a.x=1-a.x:a.x>1&&(a.x=a.x-1),a.y+=a.dy,a.y<0?a.y=1-a.y:a.y>1&&(a.y=a.y-1)});const o=new Float32Array(e.length*3);for(let a=0;a<e.length;a++){const{x:s,y:l,r:i}=e[a];o[a*2]=s,o[a*2+1]=l,o[a*2+2]=i}const n=t.gl.getUniformLocation(t.program,"metaballs");t.gl.uniform3fv(n,o),t.setUniform("scale",Math.max(t.width,t.height))})}),(t,o)=>(g(),y(c,null,{default:p(()=>[u("canvas",{ref_key:"canvas",ref:r},null,512)]),_:1}))}});export{L as default};