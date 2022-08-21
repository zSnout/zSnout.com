import{F as d}from"./FullscreenDisplay.d63693d1.js";import{W as f}from"./WebGlCanvas.2890f34a.js";import{d as m,s as x,aM as y,o as p,c as g,w as u,a as h}from"./index.307c9757.js";import"./SharedNav.13deb094.js";import"./VStack.a5267f59.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./LogoLight.1b2c95c2.js";const A=m({__name:"Metaballs",setup(v){const e=Array.from({length:50},()=>{const t=Math.random(),o=Math.random(),n=Math.random()*5+5,a=(Math.random()-.5)*2/200,s=(Math.random()-.5)*2/200;return{x:t,y:o,r:n,dx:a,dy:s}}),r=x(),l=`
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
  `;return y(()=>{if(!r.value)return;const t=new f(r.value,{fragmentString:l});t.on("render",()=>{e.map(a=>{a.x+=a.dx,a.x<0?a.x=1-a.x:a.x>1&&(a.x=a.x-1),a.y+=a.dy,a.y<0?a.y=1-a.y:a.y>1&&(a.y=a.y-1)});const o=new Float32Array(e.length*3);for(let a=0;a<e.length;a++){const{x:s,y:i,r:c}=e[a];o[a*2]=s,o[a*2+1]=i,o[a*2+2]=c}const n=t.gl.getUniformLocation(t.program,"metaballs");t.gl.uniform3fv(n,o),t.setUniform("scale",Math.max(t.width,t.height))})}),(t,o)=>(p(),g(d,null,{default:u(()=>[h("canvas",{ref_key:"canvas",ref:r},null,512)]),_:1}))}});export{A as default};
