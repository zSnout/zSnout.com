if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,n)=>{const i=s||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let u={};const a=s=>l(s,i),o={module:{uri:i},exports:u,require:a};e[i]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(n(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/404.0e36769e.js",revision:null},{url:"assets/AceEditor.32a568bd.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/BlobbyGradient.2f3219eb.js",revision:null},{url:"assets/BlobbyGradient.7df44841.css",revision:null},{url:"assets/BookmarkIcon.24f042c8.js",revision:null},{url:"assets/BookmarkIcon.767ecbb7.css",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Card.3ed57466.css",revision:null},{url:"assets/Card.dd55682b.js",revision:null},{url:"assets/CardGrid.49c8b304.js",revision:null},{url:"assets/CardGrid.efd7c596.css",revision:null},{url:"assets/CodeEditor.0eafc77d.js",revision:null},{url:"assets/ColorSliders.ddf141e3.js",revision:null},{url:"assets/Compiler.d8e52810.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/ComplexExplorer.07f37060.js",revision:null},{url:"assets/ComplexExplorer.faa6a25f.css",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/Console.ded12d97.js",revision:null},{url:"assets/CoordinateCanvas2d.1c81619e.js",revision:null},{url:"assets/DocumentDisplay.727d8a33.js",revision:null},{url:"assets/DocumentDisplay.7db56506.css",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.9dafe95d.js",revision:null},{url:"assets/Editor2.e07fce90.js",revision:null},{url:"assets/Editor3.8922ec90.js",revision:null},{url:"assets/Ellipses.7f22fb99.js",revision:null},{url:"assets/Ellipses.a306d576.css",revision:null},{url:"assets/Evaluator.9c949b7e.js",revision:null},{url:"assets/Fireline.cd5050c4.js",revision:null},{url:"assets/Fireline.e2d27f77.css",revision:null},{url:"assets/FractalExplorer.75c833cc.js",revision:null},{url:"assets/FractalExplorer.dbc86218.css",revision:null},{url:"assets/FractalPresets.74064b2a.js",revision:null},{url:"assets/FullscreenDisplay.94d11cf4.js",revision:null},{url:"assets/FullscreenDisplay.d5d9306c.css",revision:null},{url:"assets/Grid.9985533b.js",revision:null},{url:"assets/Home.9b192322.js",revision:null},{url:"assets/Home.9e2f933f.css",revision:null},{url:"assets/ImageCard.3bf8a4d1.js",revision:null},{url:"assets/ImageCard.5a7fb2ef.css",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.61112aa2.js",revision:null},{url:"assets/Index.73e85a1b.js",revision:null},{url:"assets/Index.a2b07820.js",revision:null},{url:"assets/index.b3c9091c.css",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/Index.bad63858.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.aef1afb5.js",revision:null},{url:"assets/InlineField.47c30daf.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.8986e856.js",revision:null},{url:"assets/InlineRangeField.98fc63de.css",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Labeled.a1e0ea05.js",revision:null},{url:"assets/Leopards.813b344c.js",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Mandelbrot.a98ae231.js",revision:null},{url:"assets/Metaballs.85fb1468.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.798bceeb.js",revision:null},{url:"assets/MyAccount.98ecb0bb.js",revision:null},{url:"assets/MyNotes.6c066c27.js",revision:null},{url:"assets/MyNotes.c2fb4be9.css",revision:null},{url:"assets/Note.5c7b31cf.js",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/PixelatedRainbow.1fd63fd9.js",revision:null},{url:"assets/preset.f08d91ed.js",revision:null},{url:"assets/RainbowBlobs.bb66cefa.js",revision:null},{url:"assets/ReactionTimeTester.120219a8.css",revision:null},{url:"assets/ReactionTimeTester.acc69186.js",revision:null},{url:"assets/Rectangles.00e983ae.css",revision:null},{url:"assets/Rectangles.e36e4e2c.js",revision:null},{url:"assets/SameNumberGenerator.217ce8ef.css",revision:null},{url:"assets/SameNumberGenerator.b13235fc.js",revision:null},{url:"assets/SearchableCardGrid.986c3045.css",revision:null},{url:"assets/SearchableCardGrid.cbb007bb.js",revision:null},{url:"assets/Slider.42abe34d.js",revision:null},{url:"assets/Slider.62079ab9.css",revision:null},{url:"assets/Title.62178052.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Turntable.740e025c.js",revision:null},{url:"assets/Turntable.92183cea.css",revision:null},{url:"assets/Uniforms.502c90ff.js",revision:null},{url:"assets/useCanvas.31bd2232.js",revision:null},{url:"assets/useGlsl.b990d597.js",revision:null},{url:"assets/useLocationHash.06a90c36.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.61b7d9e7.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/v1-editor.386cd9a6.js",revision:null},{url:"assets/v2-compiler.30af02ff.js",revision:null},{url:"assets/v2-editor.883eba51.js",revision:null},{url:"assets/v3-compiler.ba65b329.js",revision:null},{url:"assets/v3-editor.148d8fe7.js",revision:null},{url:"assets/v4-compiler.d36eb806.js",revision:null},{url:"assets/v4-editor.866e2d31.js",revision:null},{url:"assets/VerifyAccount.9bad2355.js",revision:null},{url:"assets/WebGlCanvas.beeeb60d.js",revision:null},{url:"index.html",revision:"cd8b13f2d8d83d2d47ab3a61f6acbe2c"},{revision:null,url:"/404.html"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
