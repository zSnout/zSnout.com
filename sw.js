if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/3Dimensions.b7e6a661.js",revision:null},{url:"assets/404.3fa8cbbf.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.902cec66.js",revision:null},{url:"assets/AsciiArt.38003823.js",revision:null},{url:"assets/BlobbyGradient.cc9f0603.css",revision:null},{url:"assets/BlobbyGradient.fbd8a0d4.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CameraModifier.ee8f6a9c.js",revision:null},{url:"assets/Card.03446c7a.css",revision:null},{url:"assets/Card.1f2fa802.js",revision:null},{url:"assets/CardGrid.6c0b546e.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/CodeEditor.383c8ba9.js",revision:null},{url:"assets/ColorSliders.8f44f9c0.js",revision:null},{url:"assets/Compiler.7def5483.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.7c577234.js",revision:null},{url:"assets/ComplexExplorer.faa6a25f.css",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.e0bde01f.js",revision:null},{url:"assets/CoordinateCanvas2d.3ab21b10.js",revision:null},{url:"assets/DocumentDisplay.0e84324d.css",revision:null},{url:"assets/DocumentDisplay.ac1bd95f.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.aa295cc8.js",revision:null},{url:"assets/Editor2.7d8b6c00.js",revision:null},{url:"assets/Editor3.86257c75.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/Ellipses.d15b3a09.js",revision:null},{url:"assets/Evaluator.a018165d.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/Fireline.abde5011.js",revision:null},{url:"assets/FractalExplorer.cf2abf30.css",revision:null},{url:"assets/FractalExplorer.ef296613.js",revision:null},{url:"assets/FractalPresets.098f984f.js",revision:null},{url:"assets/FullscreenDisplay.5962c21d.js",revision:null},{url:"assets/FullscreenDisplay.8c336462.css",revision:null},{url:"assets/Grid.737a9669.js",revision:null},{url:"assets/HandsFreeSlides.6e1fd107.css",revision:null},{url:"assets/HandsFreeSlides.71ea354c.js",revision:null},{url:"assets/Home.ae284eeb.css",revision:null},{url:"assets/Home.bffbab5b.js",revision:null},{url:"assets/HyperbolicExplorer.c8e98776.js",revision:null},{url:"assets/ImageCard.78683c05.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.05ed741f.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/Index.27ffef59.js",revision:null},{url:"assets/index.48f305af.js",revision:null},{url:"assets/Index.7cabb64d.js",revision:null},{url:"assets/index.842908fa.css",revision:null},{url:"assets/index.8cc95afd.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.99668abd.js",revision:null},{url:"assets/InlineField.71bffdf5.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.7c5af70c.css",revision:null},{url:"assets/InlineRangeField.7ed6d6a0.js",revision:null},{url:"assets/Labeled.206d29d2.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.8f330b48.js",revision:null},{url:"assets/Mandelbrot.fe83475e.js",revision:null},{url:"assets/MazeGame.0bd8471b.css",revision:null},{url:"assets/MazeGame.eff0b653.js",revision:null},{url:"assets/Metaballs.5d0550b7.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.b8141836.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.b16d745c.js",revision:null},{url:"assets/MyAccount.a2ed6d49.js",revision:null},{url:"assets/MyNotes.0cf98f4d.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Note.95205f32.js",revision:null},{url:"assets/Os.d017a109.css",revision:null},{url:"assets/Os.e5d30f37.js",revision:null},{url:"assets/PixelatedRainbow.4f160940.js",revision:null},{url:"assets/preset.a03bd5ae.js",revision:null},{url:"assets/PrivacyPolicy.13d0ca87.js",revision:null},{url:"assets/Prose.3a3f2c34.js",revision:null},{url:"assets/Prose.703837e7.css",revision:null},{url:"assets/RainbowBlobs.23058958.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.d710afc9.js",revision:null},{url:"assets/Rectangles.1f7e713d.js",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/RemoteTypewriter.0d3429e4.css",revision:null},{url:"assets/RemoteTypewriter.47e5cebb.js",revision:null},{url:"assets/SameNumberGenerator.7055659e.js",revision:null},{url:"assets/SameNumberGenerator.8a3a533b.css",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SearchableCardGrid.397bd6f4.js",revision:null},{url:"assets/SharedNav.09f2adfd.js",revision:null},{url:"assets/SharedNav.3e1eaf7b.css",revision:null},{url:"assets/Slider.0266fd87.js",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Title.7697bf16.js",revision:null},{url:"assets/Turntable.2532cf38.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Uniforms.8a04231c.js",revision:null},{url:"assets/useCanvas.980257b6.js",revision:null},{url:"assets/useGlsl.e7d88fb3.js",revision:null},{url:"assets/useLocationHash.3cd99748.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.0c728f02.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.5bfee86b.js",revision:null},{url:"assets/v1-editor.d9fe0bda.js",revision:null},{url:"assets/v2-compiler.c8eb5de5.js",revision:null},{url:"assets/v2-editor.d14e9798.js",revision:null},{url:"assets/v3-compiler.8e7b8e23.js",revision:null},{url:"assets/v3-editor.794694a4.js",revision:null},{url:"assets/v4-compiler.63d8740d.js",revision:null},{url:"assets/v4-editor.f3925e2d.js",revision:null},{url:"assets/VerifyAccount.c92e3d95.js",revision:null},{url:"assets/VStack.0421b3da.css",revision:null},{url:"assets/VStack.f7aa5462.js",revision:null},{url:"assets/WebGlCanvas.ca3a0ffe.js",revision:null},{url:"index.html",revision:"2691c40ffd2c8e18d8cb96cf74ae40c7"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
