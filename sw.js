if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/3Dimensions.1b5bff79.js",revision:null},{url:"assets/404.e9294fd8.js",revision:null},{url:"assets/AceEditor.44fee4bf.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AsciiArt.762ec89a.js",revision:null},{url:"assets/BlobbyGradient.cc9f0603.css",revision:null},{url:"assets/BlobbyGradient.e2f56077.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CameraModifier.e4d86702.js",revision:null},{url:"assets/Card.3343be0d.css",revision:null},{url:"assets/Card.86a37e29.js",revision:null},{url:"assets/CardGrid.28e54da2.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/CodeEditor.c9f64a10.js",revision:null},{url:"assets/ColorSliders.ac16c83b.js",revision:null},{url:"assets/Compiler.23b9cef8.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.3061a558.js",revision:null},{url:"assets/ComplexExplorer.faa6a25f.css",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.e9eb39a2.js",revision:null},{url:"assets/CoordinateCanvas2d.4fe558a5.js",revision:null},{url:"assets/DocumentDisplay.5244f314.js",revision:null},{url:"assets/DocumentDisplay.d75bf3f7.css",revision:null},{url:"assets/Dropdown.0e82c47d.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Editor2.f67fe7e0.js",revision:null},{url:"assets/Editor3.05f080a0.js",revision:null},{url:"assets/Ellipses.b7bb47bc.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/Evaluator.3ad5e08a.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/Fireline.ca5422c9.js",revision:null},{url:"assets/FractalExplorer.dbc86218.css",revision:null},{url:"assets/FractalExplorer.edb7970b.js",revision:null},{url:"assets/FractalPresets.b48b9b72.js",revision:null},{url:"assets/FullscreenDisplay.8c336462.css",revision:null},{url:"assets/FullscreenDisplay.e92230c5.js",revision:null},{url:"assets/Grid.0389b02c.js",revision:null},{url:"assets/HandsFreeSlides.5d9e21e5.js",revision:null},{url:"assets/HandsFreeSlides.a9700b50.css",revision:null},{url:"assets/Home.18f8c53a.css",revision:null},{url:"assets/Home.7b76055d.js",revision:null},{url:"assets/HyperbolicExplorer.5eef9f9c.js",revision:null},{url:"assets/ImageCard.15a436e3.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.1f0d5520.css",revision:null},{url:"assets/index.46a3afb1.js",revision:null},{url:"assets/Index.511ea69e.js",revision:null},{url:"assets/index.6a5302d5.js",revision:null},{url:"assets/Index.7d315bef.js",revision:null},{url:"assets/Index.87ab5f60.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.e6753fc0.js",revision:null},{url:"assets/InlineField.9376675e.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.65d0fc75.js",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/Labeled.30cb5975.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Leopards.2e763d88.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.857647e8.js",revision:null},{url:"assets/MazeGame.0bd8471b.css",revision:null},{url:"assets/MazeGame.80b406c2.js",revision:null},{url:"assets/Metaballs.5a641df2.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.5057ec83.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.a9f34314.js",revision:null},{url:"assets/MyAccount.804ac2d5.js",revision:null},{url:"assets/MyNotes.b8766e7d.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Note.bdcf0149.js",revision:null},{url:"assets/Os.1aca053c.js",revision:null},{url:"assets/Os.d017a109.css",revision:null},{url:"assets/PixelatedRainbow.4125148b.js",revision:null},{url:"assets/preset.f788e8eb.js",revision:null},{url:"assets/Prose.703837e7.css",revision:null},{url:"assets/Prose.d42829fb.js",revision:null},{url:"assets/RainbowBlobs.a19fcdd1.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.aa528aa9.js",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/Rectangles.f7efd62d.js",revision:null},{url:"assets/SameNumberGenerator.5dd6b0f5.js",revision:null},{url:"assets/SameNumberGenerator.8a3a533b.css",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SearchableCardGrid.2483930a.js",revision:null},{url:"assets/SharedNav.38a9afb2.css",revision:null},{url:"assets/SharedNav.fce4c113.js",revision:null},{url:"assets/Slider.b8e257b5.js",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/Title.2f7c2e78.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Turntable.a98ffd82.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Uniforms.cafa9997.js",revision:null},{url:"assets/useCanvas.abd556fe.js",revision:null},{url:"assets/useGlsl.e7d88fb3.js",revision:null},{url:"assets/useLocationHash.09b91a2c.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.743fd148.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.9a200924.js",revision:null},{url:"assets/v1-editor.3686ee83.js",revision:null},{url:"assets/v2-compiler.fe498e45.js",revision:null},{url:"assets/v2-editor.c3fa65a6.js",revision:null},{url:"assets/v3-compiler.bfcf43f9.js",revision:null},{url:"assets/v3-editor.c81b1683.js",revision:null},{url:"assets/v4-compiler.0abcceb5.js",revision:null},{url:"assets/v4-editor.0b3044d1.js",revision:null},{url:"assets/VerifyAccount.a42ba3dd.js",revision:null},{url:"assets/VStack.0421b3da.css",revision:null},{url:"assets/VStack.ad6c64f6.js",revision:null},{url:"assets/WebGlCanvas.95a7e8c2.js",revision:null},{url:"index.html",revision:"5f485c43d945a98b0a539298d9bbdbb4"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
