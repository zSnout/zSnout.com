if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.26a05856.js",revision:null},{url:"assets/AceEditor.77bed9b1.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/BlobbyGradient.1f4368dd.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/BookmarkIcon.72a22b26.js",revision:null},{url:"assets/BookmarkIcon.e8b86b20.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.9357afc6.js",revision:null},{url:"assets/CodeEditor.d0db597f.js",revision:null},{url:"assets/Compiler.88a6a52f.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.49fcb727.css",revision:null},{url:"assets/ComplexExplorer.8f9eb8a9.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.e5ec0a25.js",revision:null},{url:"assets/CoordinateCanvas2d.93160d18.js",revision:null},{url:"assets/DocumentDisplay.3a6e7cfd.js",revision:null},{url:"assets/DocumentDisplay.7db56506.css",revision:null},{url:"assets/Dropdown.1ad7cd08.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Editor2.7757daf8.js",revision:null},{url:"assets/Editor3.3e6d4ab2.js",revision:null},{url:"assets/Ellipses.9ca8cf0f.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Evaluator.a2132110.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/Fireline.f8660991.js",revision:null},{url:"assets/FractalExplorer.5819dba2.js",revision:null},{url:"assets/FractalExplorer.98226ded.css",revision:null},{url:"assets/FractalPresets.9c9a7d28.js",revision:null},{url:"assets/FullscreenDisplay.d5d9306c.css",revision:null},{url:"assets/FullscreenDisplay.deb8a43e.js",revision:null},{url:"assets/Grid.6c304765.js",revision:null},{url:"assets/Home.61cfb9f3.css",revision:null},{url:"assets/Home.72ee75a2.js",revision:null},{url:"assets/ImageCard.5a7fb2ef.css",revision:null},{url:"assets/ImageCard.d246bbc0.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/Index.70a520c6.js",revision:null},{url:"assets/Index.7f543826.js",revision:null},{url:"assets/index.9e93d580.css",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.c96b1a8d.js",revision:null},{url:"assets/index.ea562662.js",revision:null},{url:"assets/InlineCheckboxField.030298db.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/InlineRangeField.e4ce1be1.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.e7cfe2f0.js",revision:null},{url:"assets/Leopards.28455b35.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.bf69b485.js",revision:null},{url:"assets/Metaballs.37eba6de.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.cc1224d9.js",revision:null},{url:"assets/PixelatedRainbow.d25ca911.js",revision:null},{url:"assets/preset.91e7e7d6.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.db8416f9.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.791018cf.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.4e31b301.js",revision:null},{url:"assets/SearchableCardGrid.4cab3db5.js",revision:null},{url:"assets/SearchableCardGrid.5ff79033.css",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Slider.a3c050fc.js",revision:null},{url:"assets/Title.4dee6869.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Turntable.d99b6aa1.js",revision:null},{url:"assets/Uniforms.faf6b34b.js",revision:null},{url:"assets/useCanvas.95722b9e.js",revision:null},{url:"assets/useGlsl.b990d597.js",revision:null},{url:"assets/useLocationHash.54c828aa.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.92615050.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/v1-editor.aa40224d.js",revision:null},{url:"assets/v2-compiler.50119144.js",revision:null},{url:"assets/v2-editor.0354cf88.js",revision:null},{url:"assets/v3-compiler.f0a84c71.js",revision:null},{url:"assets/v3-editor.e599984f.js",revision:null},{url:"assets/v4-compiler.bfb846d4.js",revision:null},{url:"assets/v4-editor.eda372a4.js",revision:null},{url:"assets/Verify.fcd74f12.js",revision:null},{url:"assets/WebGlCanvas.9cac64d0.js",revision:null},{url:"index.html",revision:"fa03a0fcf5b892e9fb5c6593240e1125"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
