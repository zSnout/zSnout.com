if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.c1ccdb8e.js",revision:null},{url:"assets/AceEditor.27a8be46.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/BlobbyGradient.0d7d98e3.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.ad0a69c2.js",revision:null},{url:"assets/CodeEditor.c2b7cdd6.js",revision:null},{url:"assets/Compiler.beca1932.js",revision:null},{url:"assets/compiler3.8ff8648d.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.bdf02829.js",revision:null},{url:"assets/CoordinateCanvas2d.1c1d3c8b.js",revision:null},{url:"assets/DocumentDisplay.283cf100.js",revision:null},{url:"assets/DocumentDisplay.b8216300.css",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.804de5bd.js",revision:null},{url:"assets/Editor2.12f0fe96.js",revision:null},{url:"assets/Editor3.bfba5c00.js",revision:null},{url:"assets/Ellipses.0f014a47.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Evaluator.8050e11f.js",revision:null},{url:"assets/Field.1c8970d4.js",revision:null},{url:"assets/Field.55d40313.css",revision:null},{url:"assets/Fireline.48907491.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/FractalExplorer.98226ded.css",revision:null},{url:"assets/FractalExplorer.ce86a573.js",revision:null},{url:"assets/FractalPresets.dd765912.js",revision:null},{url:"assets/FullscreenDisplay.765026f4.js",revision:null},{url:"assets/FullscreenDisplay.b0cd83ae.css",revision:null},{url:"assets/Grid.eb1a0fae.js",revision:null},{url:"assets/Home.629aa376.css",revision:null},{url:"assets/Home.a5c103a3.js",revision:null},{url:"assets/ImageCard.4792ceaf.js",revision:null},{url:"assets/ImageCard.5a7fb2ef.css",revision:null},{url:"assets/Index.000dee7b.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.4e70ee86.css",revision:null},{url:"assets/index.b085a846.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.fee352fe.js",revision:null},{url:"assets/Index.ff1ba748.js",revision:null},{url:"assets/InlineCheckboxField.593a543d.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineRangeField.561c3dfa.js",revision:null},{url:"assets/InlineRangeField.60b16e4c.css",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.f355e203.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.b99b7f4e.js",revision:null},{url:"assets/LogIn.ed5a8301.js",revision:null},{url:"assets/Mandelbrot.ef91f531.js",revision:null},{url:"assets/Metaballs.d20aeef4.js",revision:null},{url:"assets/Modal.4242ea3e.css",revision:null},{url:"assets/Modal.74b639bc.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.a0a8a252.js",revision:null},{url:"assets/preset.e8bf3dea.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.c7b18c50.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.448f41c8.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.fad68c09.js",revision:null},{url:"assets/SearchableCardGrid.11ffcef7.js",revision:null},{url:"assets/SearchableCardGrid.5ff79033.css",revision:null},{url:"assets/SignUp.fe38d3c5.js",revision:null},{url:"assets/Slider.28cfdd57.js",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Title.e45a13dd.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Turntable.adde2b19.js",revision:null},{url:"assets/Uniforms.ac844a8c.js",revision:null},{url:"assets/useApi.9f2beb7d.js",revision:null},{url:"assets/useCanvas.3e53a329.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useLocationHash.b891f490.js",revision:null},{url:"assets/useOption.58894b67.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/v1-editor.91240f6f.js",revision:null},{url:"assets/v2-compiler.44599b95.js",revision:null},{url:"assets/v2-editor.9df05de1.js",revision:null},{url:"assets/v3-compiler.b99aec8d.js",revision:null},{url:"assets/v3-editor.3a7f1555.js",revision:null},{url:"assets/v4-compiler.02a8542a.js",revision:null},{url:"assets/v4-editor.3bbda1bb.js",revision:null},{url:"assets/Verify.9bdd4e3a.js",revision:null},{url:"assets/WebGlCanvas.52909bf2.js",revision:null},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));