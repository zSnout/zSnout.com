if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.ec39d767.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.b988a65c.js",revision:null},{url:"assets/AsciiArt.c5134508.js",revision:null},{url:"assets/BlobbyGradient.85e6a2a6.js",revision:null},{url:"assets/BlobbyGradient.cc9f0603.css",revision:null},{url:"assets/BookmarkIcon.8dca6511.js",revision:null},{url:"assets/BookmarkIcon.df10c075.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/CameraModifier.847bb874.js",revision:null},{url:"assets/Card.3343be0d.css",revision:null},{url:"assets/Card.8c12bd86.js",revision:null},{url:"assets/CardGrid.3094a7db.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/CodeEditor.bc3c3eb1.js",revision:null},{url:"assets/ColorSliders.2bf6f478.js",revision:null},{url:"assets/Compiler.a1d5bc8d.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.cc7d7304.js",revision:null},{url:"assets/ComplexExplorer.faa6a25f.css",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.c4af706a.js",revision:null},{url:"assets/CoordinateCanvas2d.54a74f40.js",revision:null},{url:"assets/DocumentDisplay.7db56506.css",revision:null},{url:"assets/DocumentDisplay.9e742cd6.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.a3dcd251.js",revision:null},{url:"assets/Editor2.33de2886.js",revision:null},{url:"assets/Editor3.2389fbc6.js",revision:null},{url:"assets/Ellipses.495e790a.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/Evaluator.d7355905.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/Fireline.a17a6f98.js",revision:null},{url:"assets/FractalExplorer.7c5398e3.js",revision:null},{url:"assets/FractalExplorer.dbc86218.css",revision:null},{url:"assets/FractalPresets.ae57d2b4.js",revision:null},{url:"assets/FullscreenDisplay.5a76a0e7.css",revision:null},{url:"assets/FullscreenDisplay.de0ed3d0.js",revision:null},{url:"assets/Grid.fc41dac7.js",revision:null},{url:"assets/HandsFreeSlides.35986ef0.js",revision:null},{url:"assets/HandsFreeSlides.a9700b50.css",revision:null},{url:"assets/Home.18f8c53a.css",revision:null},{url:"assets/Home.56775419.js",revision:null},{url:"assets/HyperbolicExplorer.c9dd4012.js",revision:null},{url:"assets/ImageCard.83b71fe7.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.0de6f32f.js",revision:null},{url:"assets/index.1a6ff106.js",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.6f162f50.css",revision:null},{url:"assets/index.6fd38de8.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.c95231a9.js",revision:null},{url:"assets/Index.e8eba021.js",revision:null},{url:"assets/InlineCheckboxField.494dadff.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineField.fb245849.js",revision:null},{url:"assets/InlineRangeField.41b559c1.js",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.d8315c55.js",revision:null},{url:"assets/Leopards.2c5f5fee.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.17c0ec13.js",revision:null},{url:"assets/MazeGame.0bd8471b.css",revision:null},{url:"assets/MazeGame.25051362.js",revision:null},{url:"assets/Metaballs.6c88b48f.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.5bbf666a.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.24ccf8f2.js",revision:null},{url:"assets/MyAccount.a3b1164f.js",revision:null},{url:"assets/MyNotes.5f303a7a.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.768ad5c5.js",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Os.d017a109.css",revision:null},{url:"assets/Os.ed1f82e5.js",revision:null},{url:"assets/PixelatedRainbow.18ac1a26.js",revision:null},{url:"assets/preset.406d8832.js",revision:null},{url:"assets/Prose.332e6253.js",revision:null},{url:"assets/Prose.703837e7.css",revision:null},{url:"assets/RainbowBlobs.9f34092b.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.262890ad.js",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/Rectangles.d7932789.js",revision:null},{url:"assets/SameNumberGenerator.8a3a533b.css",revision:null},{url:"assets/SameNumberGenerator.b60bee5d.js",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SearchableCardGrid.96974b3b.js",revision:null},{url:"assets/Slider.2de573d3.js",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/Title.4326d71d.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Turntable.a3cb6a4a.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Uniforms.4ba7c08c.js",revision:null},{url:"assets/useCanvas.43aca520.js",revision:null},{url:"assets/useGlsl.0c9126ed.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useLocationHash.c29702dd.js",revision:null},{url:"assets/useOption.09504db0.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.cfd9b9c4.js",revision:null},{url:"assets/v1-editor.f0aa1757.js",revision:null},{url:"assets/v2-compiler.d2d23afd.js",revision:null},{url:"assets/v2-editor.50ce03b0.js",revision:null},{url:"assets/v3-compiler.4adbdb3a.js",revision:null},{url:"assets/v3-editor.fb855588.js",revision:null},{url:"assets/v4-compiler.5b88f046.js",revision:null},{url:"assets/v4-editor.3d72d523.js",revision:null},{url:"assets/VerifyAccount.cf8d95d1.js",revision:null},{url:"assets/VStack.0099a460.js",revision:null},{url:"assets/VStack.0421b3da.css",revision:null},{url:"assets/WebGlCanvas.55c1ba96.js",revision:null},{url:"index.html",revision:"812f53c07c0cdc5f891c0b41af0de347"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
