if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/404.8ee7940d.js",revision:null},{url:"assets/DocumentDisplay.065ad054.js",revision:null},{url:"assets/DocumentDisplay.9c100fd3.css",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.c9d75442.js",revision:null},{url:"assets/FractalExplorer.9cee31f0.js",revision:null},{url:"assets/FractalExplorer.a91e2715.css",revision:null},{url:"assets/FullscreenDisplay.6b04c29c.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.066998c3.js",revision:null},{url:"assets/Home.2eb167b9.js",revision:null},{url:"assets/index.7a72582a.css",revision:null},{url:"assets/Index.c8a557c9.js",revision:null},{url:"assets/index.e189680b.js",revision:null},{url:"assets/Leopards.0daaa73a.css",revision:null},{url:"assets/Leopards.5644e649.js",revision:null},{url:"assets/Mandelbrot.6f892a33.js",revision:null},{url:"assets/Modal.034dce65.js",revision:null},{url:"assets/Modal.0789f34f.css",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.fba68508.js",revision:null},{url:"assets/Title.6ec2fc00.js",revision:null},{url:"assets/Title.eae9c088.css",revision:null},{url:"assets/Uniforms.31d65664.js",revision:null},{url:"assets/useMovableCanvas.e7cbc947.js",revision:null},{url:"assets/useWebGL.835922fd.js",revision:null},{url:"index.html",revision:"bc6e7b53ba8eea282d695a42d70eba04"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
