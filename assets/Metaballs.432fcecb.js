import{F as d}from"./FullscreenDisplay.cdaef9d7.js";import{W as f}from"./WebGlCanvas.5f3e9c5e.js";import{d as x,s as y,aL as m,o as g,c as p,w as u,a as h}from"./index.60c5bb9e.js";import"./SharedNav.c05e4eb8.js";import"./VStack.5f861068.js";const k=x({__name:"Metaballs",setup(v){const e=Array.from({length:50},()=>{const t=Math.random(),o=Math.random(),r=Math.random()*5+5,a=(Math.random()-.5)*2/200,s=(Math.random()-.5)*2/200;return{x:t,y:o,r,dx:a,dy:s}}),n=y(),l=`
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
  `;return m(()=>{if(!n.value)return;const t=new f(n.value,{fragmentString:l});t.on("render",()=>{e.map(a=>{a.x+=a.dx,a.x<0?a.x=1-a.x:a.x>1&&(a.x=a.x-1),a.y+=a.dy,a.y<0?a.y=1-a.y:a.y>1&&(a.y=a.y-1)});const o=new Float32Array(e.length*3);for(let a=0;a<e.length;a++){const{x:s,y:i,r:c}=e[a];o[a*2]=s,o[a*2+1]=i,o[a*2+2]=c}const r=t.gl.getUniformLocation(t.program,"metaballs");t.gl.uniform3fv(r,o),t.setUniform("scale",Math.max(t.width,t.height))})}),(t,o)=>(g(),p(d,null,{default:u(()=>[h("canvas",{ref_key:"canvas",ref:n},null,512)]),_:1}))}});export{k as default};
