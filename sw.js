if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.1424b546.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.d4c8fcbd.js",revision:null},{url:"assets/BlobbyGradient.48319cc5.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.9277a5f5.js",revision:null},{url:"assets/CodeEditor.0d337bad.js",revision:null},{url:"assets/Compiler.62875233.js",revision:null},{url:"assets/compiler3.8ff8648d.js",revision:null},{url:"assets/Console.3862f156.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/DocumentDisplay.49993fc8.css",revision:null},{url:"assets/DocumentDisplay.ac03bcdd.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.99101bac.js",revision:null},{url:"assets/Editor2.4c25bc0f.js",revision:null},{url:"assets/Editor3.bd348fcb.js",revision:null},{url:"assets/Ellipses.08113ad6.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Evaluator.65d83fa9.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Field.93e5f898.js",revision:null},{url:"assets/Fireline.d29bff29.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/FractalExplorer.98226ded.css",revision:null},{url:"assets/FractalExplorer.f9b1b3dc.js",revision:null},{url:"assets/FractalPresets.6df8ae90.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/FullscreenDisplay.c6accaeb.js",revision:null},{url:"assets/Grid.1284e367.js",revision:null},{url:"assets/Home.84532931.js",revision:null},{url:"assets/Home.94f1d16f.css",revision:null},{url:"assets/ImageCard.77472d4f.css",revision:null},{url:"assets/ImageCard.d99bcc89.js",revision:null},{url:"assets/Index.109a469f.js",revision:null},{url:"assets/index.128ee84d.js",revision:null},{url:"assets/Index.15919a93.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.4e70ee86.css",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.d2c9de81.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.e846171e.js",revision:null},{url:"assets/InlineRangeField.60b16e4c.css",revision:null},{url:"assets/InlineRangeField.e76237e1.js",revision:null},{url:"assets/Labeled.556886c8.css",revision:null},{url:"assets/Labeled.591aa1bc.js",revision:null},{url:"assets/Leopards.5f0dde5d.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.1eb4db5b.js",revision:null},{url:"assets/Metaballs.863bb56b.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/Modal.45d3c35e.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/preset.9e06e5de.js",revision:null},{url:"assets/ReactionTimeTester.1673dd57.css",revision:null},{url:"assets/ReactionTimeTester.b6efd1d3.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.9aa87868.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.29b13293.js",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Slider.a9f67443.js",revision:null},{url:"assets/Title.b9f64f10.css",revision:null},{url:"assets/Title.ea392e33.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Turntable.d9a14988.js",revision:null},{url:"assets/Uniforms.ec9f521f.js",revision:null},{url:"assets/useCanvas.773d5704.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useLocationHash.f7dbce20.js",revision:null},{url:"assets/useMovableCanvas.e4446910.js",revision:null},{url:"assets/useOption.321089ee.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useWebGL.0985ae15.js",revision:null},{url:"assets/v1-editor.21ca84e0.js",revision:null},{url:"assets/v2-compiler.6c477c74.js",revision:null},{url:"assets/v2-editor.c269ef18.js",revision:null},{url:"assets/v3-compiler.3e2b2d79.js",revision:null},{url:"assets/v3-editor.0feccec0.js",revision:null},{url:"assets/v4-compiler.39ab1524.js",revision:null},{url:"assets/v4-editor.4f237ebe.js",revision:null},{url:"index.html",revision:"0cd0d720d7fc4bc8fc3723549acdb85a"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
