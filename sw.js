if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/3Dimensions.0dcaf0ff.js",revision:null},{url:"assets/404.b68d9983.js",revision:null},{url:"assets/AceEditor.17752ea7.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AsciiArt.49fcc66e.js",revision:null},{url:"assets/BlobbyGradient.6a095f43.js",revision:null},{url:"assets/BlobbyGradient.cc9f0603.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CameraModifier.5d8d7179.js",revision:null},{url:"assets/Card.206f1db4.js",revision:null},{url:"assets/Card.3343be0d.css",revision:null},{url:"assets/CardGrid.2505017f.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/CodeEditor.7b96d0c7.js",revision:null},{url:"assets/ColorSliders.49ae42f8.js",revision:null},{url:"assets/Compiler.f82e4717.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.9fdbe9a3.js",revision:null},{url:"assets/ComplexExplorer.faa6a25f.css",revision:null},{url:"assets/Console.83a4aecc.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/CoordinateCanvas2d.f18fdde5.js",revision:null},{url:"assets/DocumentDisplay.16410634.js",revision:null},{url:"assets/DocumentDisplay.d75bf3f7.css",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.72e0d132.js",revision:null},{url:"assets/Editor2.f1509af5.js",revision:null},{url:"assets/Editor3.f8af482c.js",revision:null},{url:"assets/Ellipses.67c11cab.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/Evaluator.f6e328a9.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/Fireline.df06fe27.js",revision:null},{url:"assets/FractalExplorer.41f10513.js",revision:null},{url:"assets/FractalExplorer.dbc86218.css",revision:null},{url:"assets/FractalPresets.deb4cc9d.js",revision:null},{url:"assets/FullscreenDisplay.7ce53f2a.js",revision:null},{url:"assets/FullscreenDisplay.8c336462.css",revision:null},{url:"assets/Grid.eeacc89b.js",revision:null},{url:"assets/HandsFreeSlides.a9700b50.css",revision:null},{url:"assets/HandsFreeSlides.fde919b1.js",revision:null},{url:"assets/Home.18f8c53a.css",revision:null},{url:"assets/Home.fcf13eb0.js",revision:null},{url:"assets/HyperbolicExplorer.688fe166.js",revision:null},{url:"assets/ImageCard.9edeff0f.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.1ca67f8a.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.1f0d5520.css",revision:null},{url:"assets/index.549208cd.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.ba1c2b07.js",revision:null},{url:"assets/index.f7adb33e.js",revision:null},{url:"assets/Index.f88c1be5.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.b534f396.js",revision:null},{url:"assets/InlineField.96793ee1.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.4e678eea.js",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.99182cb6.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.937a951b.js",revision:null},{url:"assets/Mandelbrot.9ea0071f.js",revision:null},{url:"assets/MazeGame.0bd8471b.css",revision:null},{url:"assets/MazeGame.a40e2422.js",revision:null},{url:"assets/Metaballs.b157428a.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.cdef1b09.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.cfa4f203.js",revision:null},{url:"assets/MyAccount.9d856bda.js",revision:null},{url:"assets/MyNotes.983034ce.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.4ae75e61.js",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Os.8160e000.js",revision:null},{url:"assets/Os.d017a109.css",revision:null},{url:"assets/PixelatedRainbow.b67390c9.js",revision:null},{url:"assets/preset.9721b538.js",revision:null},{url:"assets/Prose.703837e7.css",revision:null},{url:"assets/Prose.70e28924.js",revision:null},{url:"assets/RainbowBlobs.7a2d62be.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.254305f7.js",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/Rectangles.969caa94.js",revision:null},{url:"assets/SameNumberGenerator.41fdf8e5.js",revision:null},{url:"assets/SameNumberGenerator.8a3a533b.css",revision:null},{url:"assets/SearchableCardGrid.057fb27d.js",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SharedNav.38a9afb2.css",revision:null},{url:"assets/SharedNav.cf80e2c2.js",revision:null},{url:"assets/Slider.e6127e3c.js",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Title.83cbb76a.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Turntable.f88590a1.js",revision:null},{url:"assets/Uniforms.620a3344.js",revision:null},{url:"assets/useCanvas.5aaf4e43.js",revision:null},{url:"assets/useGlsl.e7d88fb3.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useLocationHash.b4db757f.js",revision:null},{url:"assets/useOption.905e1fad.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.31a86a0f.js",revision:null},{url:"assets/v1-editor.4f22808b.js",revision:null},{url:"assets/v2-compiler.269cbfc0.js",revision:null},{url:"assets/v2-editor.697c9eab.js",revision:null},{url:"assets/v3-compiler.5c972738.js",revision:null},{url:"assets/v3-editor.fac64ae0.js",revision:null},{url:"assets/v4-compiler.1f0c43a4.js",revision:null},{url:"assets/v4-editor.1721f5df.js",revision:null},{url:"assets/VerifyAccount.c08ee41f.js",revision:null},{url:"assets/VStack.0421b3da.css",revision:null},{url:"assets/VStack.c8a162cb.js",revision:null},{url:"assets/WebGlCanvas.c5ef6710.js",revision:null},{url:"index.html",revision:"264c3b6bb08c1526ea14fd74d4018849"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
