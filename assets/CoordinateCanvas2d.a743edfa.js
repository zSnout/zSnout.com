var _=Object.defineProperty,T=Object.defineProperties;var N=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var u=(i,r,e)=>r in i?_(i,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[r]=e,g=(i,r)=>{for(var e in r||(r={}))E.call(r,e)&&u(i,e,r[e]);if(f)for(var e of f(r))v.call(r,e)&&u(i,e,r[e]);return i},p=(i,r)=>T(i,N(r));var C=(i,r)=>{var e={};for(var t in i)E.call(i,t)&&r.indexOf(t)<0&&(e[t]=i[t]);if(i!=null&&f)for(var t of f(i))r.indexOf(t)<0&&v.call(i,t)&&(e[t]=i[t]);return e};var d=(i,r,e)=>(u(i,typeof r!="symbol"?r+"":r,e),e);import{W as l}from"./WebGlCanvas.51114c85.js";import{p as o}from"./useOption.ac4700b6.js";import{s as F}from"./index.9ca8b3d8.js";class R extends l{constructor(e,x={}){var c=x,{bounds:t,fragmentString:s,saveBounds:n}=c,a=C(c,["bounds","fragmentString","saveBounds"]);var m,h,y,S;typeof s=="string"&&(s=l.extend(s,"uniform vec2 u_scale;uniform vec2 u_offset;"),s=l.extend(s,"uniform vec2 u_resolution;"),s=l.extendMain(s,"vec2 pos=(gl_FragCoord.xy/u_resolution)*u_scale+u_offset;"));super(e,p(g({},a),{fragmentString:s}));d(this,"saveBounds");d(this,"navTimer",!0);d(this,"bounds");this.saveBounds=n!=null?n:!1,n&&(t={xStart:Number.isFinite(+o.xStart)?+o.xStart:-2,xEnd:Number.isFinite(+o.xEnd)?+o.xEnd:2,yStart:Number.isFinite(+o.yStart)?+o.yStart:-2,yEnd:Number.isFinite(+o.yEnd)?+o.yEnd:2}),this.setBounds({xStart:(m=t==null?void 0:t.xStart)!=null?m:-2,xEnd:(h=t==null?void 0:t.xEnd)!=null?h:2,yStart:(y=t==null?void 0:t.yStart)!=null?y:-2,yEnd:(S=t==null?void 0:t.yEnd)!=null?S:2}),F(this.canvas,()=>this.setBounds(this.bounds))}getNormalizedBounds(){let{xStart:e,xEnd:t,yStart:s,yEnd:n}=this.bounds;const a=e+t,x=s+n,c=(t-e)/2,m=(n-s)/2,{width:h,height:y}=this.canvas;return h>y?(e=a-h/y*c,t=a+h/y*c):(s=x-y/h*m,n=x+y/h*m),{xStart:e,xEnd:t,yStart:s,yEnd:n}}getAdjusters(){const{width:e,height:t}=this.canvas,{xStart:s,xEnd:n,yStart:a,yEnd:x}=this.getNormalizedBounds();return e>t?{scale:{x:n-s,y:x-a},offset:{x:(s-(n-s)/2)/2,y:a}}:{scale:{x:n-s,y:x-a},offset:{x:s,y:(a-(x-a)/2)/2}}}setBounds(e){const{xStart:t,xEnd:s,yStart:n,yEnd:a}=this.bounds=e;this.saveBounds&&this.navTimer&&(o.xStart=""+t,o.xEnd=""+s,o.yStart=""+n,o.yEnd=""+a,this.navTimer=!1,setTimeout(()=>this.navTimer=!0,1e3));const{offset:x,scale:c}=this.getAdjusters();this.setUniform("u_offset",x.x,x.y),this.setUniform("u_scale",c.x,c.y)}pxToCoords(e,t){const{offset:s,scale:n}=this.getAdjusters();return{x:e/this.canvas.clientWidth*n.x+s.x,y:(1-t/this.canvas.clientHeight)*n.y+s.y}}mouseToCoords(){return this.pxToCoords(this.mouse.x,this.canvas.clientHeight-this.mouse.y)}}export{R as C};
