var E=Object.defineProperty;var l=(y,h,s)=>h in y?E(y,h,{enumerable:!0,configurable:!0,writable:!0,value:s}):y[h]=s;var S=(y,h,s)=>(l(y,typeof h!="symbol"?h+"":h,s),s);import{am as d}from"./index.4z0bzixf.js";import{p as n}from"./useOption.1pf10ib0.js";import{W as g}from"./WebGlCanvas.5wwm3cvm.js";class B extends g{constructor(s,{bounds:t,fragmentString:r,saveBounds:e,...a}={}){super(s,{...a,fragmentString:r});S(this,"saveBounds");S(this,"navTimer",!0);S(this,"bounds");this.saveBounds=e??!1,e&&(t={xStart:Number.isFinite(+n.xStart)?+n.xStart:t==null?void 0:t.xStart,xEnd:Number.isFinite(+n.xEnd)?+n.xEnd:t==null?void 0:t.xEnd,yStart:Number.isFinite(+n.yStart)?+n.yStart:t==null?void 0:t.yStart,yEnd:Number.isFinite(+n.yEnd)?+n.yEnd:t==null?void 0:t.yEnd}),this.setBounds({xStart:(t==null?void 0:t.xStart)??-2,xEnd:(t==null?void 0:t.xEnd)??.5,yStart:(t==null?void 0:t.yStart)??-1.25,yEnd:(t==null?void 0:t.yEnd)??1.25}),d(this.canvas,()=>this.setBounds(this.bounds)),this.on("render",()=>{const{x:i,y:x}=this.mouseToCoords();this.setUniform("mouse",i,x)})}async load(s,t){const r=await super.load(s,t);return this.setBounds(this.bounds),r}getNormalizedBounds(s=this.bounds){let{xStart:t,xEnd:r,yStart:e,yEnd:a}=s;const i=t+r,x=e+a,o=(r-t)/2,c=(a-e)/2,{width:f,height:m}=this.canvas;return f>m?(t=i-f/m*o,r=i+f/m*o):(e=x-m/f*c,a=x+m/f*c),{xStart:t,xEnd:r,yStart:e,yEnd:a}}getAdjusters(s=this.bounds){const{width:t,height:r}=this.canvas,{xStart:e,xEnd:a,yStart:i,yEnd:x}=this.getNormalizedBounds(s);return t>r?{scale:{x:a-e,y:x-i},offset:{x:(e-(a-e)/2)/2,y:i}}:{scale:{x:a-e,y:x-i},offset:{x:e,y:(i-(x-i)/2)/2}}}setBounds(s){const{xStart:t,xEnd:r,yStart:e,yEnd:a}=this.bounds=s;this.saveBounds&&this.navTimer&&(n.xStart=""+t,n.xEnd=""+r,n.yStart=""+e,n.yEnd=""+a,this.navTimer=!1,setTimeout(()=>this.navTimer=!0,1e3));const{offset:i,scale:x}=this.getAdjusters();this.setUniform("u_offset",i.x,i.y),this.setUniform("u_scale",x.x,x.y);const{offset:o,scale:c}=this.getAdjusters({xStart:-1,xEnd:1,yStart:-1,yEnd:1});this.setUniform("us_offset",o.x,o.y),this.setUniform("us_scale",c.x,c.y)}pxToCoords(s,t){const{offset:r,scale:e}=this.getAdjusters();return{x:s/this.canvas.clientWidth*e.x+r.x,y:(1-t/this.canvas.clientHeight)*e.y+r.y}}mouseToCoords(){return this.pxToCoords(this.pointer.x,this.pointer.y)}}export{B as C};
