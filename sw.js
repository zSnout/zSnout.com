if(!self.define){let s,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(i,r)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let a={};const u=s=>l(s,n),o={module:{uri:n},exports:a,require:u};e[n]=Promise.all(i.map((s=>o[s]||u(s)))).then((s=>(r(...s),a)))}}define(["./workbox-855e063c"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/3d.65b0b4c1.js",revision:null},{url:"assets/404.bb2df6cc.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/AceEditor.93e93fa3.js",revision:null},{url:"assets/ascii-art.c8020b48.js",revision:null},{url:"assets/asides.67acd081.js",revision:null},{url:"assets/blobby-gradient.048c8bf8.css",revision:null},{url:"assets/blobby-gradient.ad1b477a.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/Button.385cc417.js",revision:null},{url:"assets/Button.9e9fd2ea.css",revision:null},{url:"assets/camera-modifier.0ba5807a.js",revision:null},{url:"assets/Card.03446c7a.css",revision:null},{url:"assets/Card.37b2e113.js",revision:null},{url:"assets/CardGrid.2c45182a.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/code-editor.15b8abff.js",revision:null},{url:"assets/ColorSliders.129bafb1.js",revision:null},{url:"assets/compiler.8fd552be.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/complex-explorer.09a97a55.js",revision:null},{url:"assets/complex-explorer.833402f6.css",revision:null},{url:"assets/Console.79bdf235.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/CoordinateCanvas2d.b6637fb9.js",revision:null},{url:"assets/divisibility-rules.4ed2ad82.js",revision:null},{url:"assets/DocumentDisplay.1eb160a0.css",revision:null},{url:"assets/DocumentDisplay.6daf289f.js",revision:null},{url:"assets/does-0-equal-1.b23f220f.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.a48136b4.js",revision:null},{url:"assets/Editor2.eb17a239.js",revision:null},{url:"assets/Editor3.f98c84cc.js",revision:null},{url:"assets/Ellipses.470283c4.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/evaluator.5f7cf520.js",revision:null},{url:"assets/Fireline.802a7885.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/fractal-explorer.e163b568.js",revision:null},{url:"assets/fractal-explorer.e96558c2.css",revision:null},{url:"assets/fractal-presets.77e800f2.js",revision:null},{url:"assets/FullscreenDisplay.97a7eba8.js",revision:null},{url:"assets/FullscreenDisplay.c4aeed9c.css",revision:null},{url:"assets/github-copilot-is-amazing.6e347a88.js",revision:null},{url:"assets/Grid.5bb65126.js",revision:null},{url:"assets/hands-free-slides.3228edc9.css",revision:null},{url:"assets/hands-free-slides.e461dcf1.js",revision:null},{url:"assets/home.a4e20751.js",revision:null},{url:"assets/home.d373c8e5.css",revision:null},{url:"assets/hyperbolic-explorer.af4ae8c8.js",revision:null},{url:"assets/ImageCard.4bba788b.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/index.2bc1071e.js",revision:null},{url:"assets/index.39d8035b.js",revision:null},{url:"assets/index.4c078825.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/index.b9c13d64.css",revision:null},{url:"assets/Index.bea8aaa6.js",revision:null},{url:"assets/index.c921b981.js",revision:null},{url:"assets/index.cbb4c548.css",revision:null},{url:"assets/Index.f2d095c8.js",revision:null},{url:"assets/Index.fa27e49d.js",revision:null},{url:"assets/infinity-is-negative-one-twelfth.cf633e11.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.ae8808cf.js",revision:null},{url:"assets/InlineField.3415dd72.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineRangeField.7c5af70c.css",revision:null},{url:"assets/InlineRangeField.ed08fc25.js",revision:null},{url:"assets/Labeled.2f22cb29.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/LargeTitle.47b34d14.js",revision:null},{url:"assets/LargeTitle.f68362eb.css",revision:null},{url:"assets/leopards.48a4fa9b.js",revision:null},{url:"assets/leopards.d1151646.css",revision:null},{url:"assets/Logo.cc161a45.js",revision:null},{url:"assets/LogoLight.c48f5ba5.js",revision:null},{url:"assets/made-on-iphone.28136caf.js",revision:null},{url:"assets/make-people-think-of-numbers.e26de67a.js",revision:null},{url:"assets/Mandelbrot.b99e104e.js",revision:null},{url:"assets/mathemagical-tricks.a658a700.js",revision:null},{url:"assets/maze-game.28532692.js",revision:null},{url:"assets/maze-game.cf20c7c1.css",revision:null},{url:"assets/Metaballs.2275b21a.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.4b4e6066.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.02828877.js",revision:null},{url:"assets/my-account.e1052ee9.js",revision:null},{url:"assets/my-notes.2ddb0a95.css",revision:null},{url:"assets/my-notes.b64cf425.js",revision:null},{url:"assets/Navigation.30c1c40a.css",revision:null},{url:"assets/Navigation.e1d5681a.js",revision:null},{url:"assets/note.50689923.css",revision:null},{url:"assets/note.b3ee5653.js",revision:null},{url:"assets/os.4452bf8f.js",revision:null},{url:"assets/os.bbe5e059.css",revision:null},{url:"assets/pixelated-rainbow.589ebfdd.js",revision:null},{url:"assets/plugin-vue_export-helper.21dcd24c.js",revision:null},{url:"assets/preset.9c5b52f7.js",revision:null},{url:"assets/privacy-policy.31a410cc.js",revision:null},{url:"assets/Prose.3b446f47.js",revision:null},{url:"assets/Prose.ebe382c2.css",revision:null},{url:"assets/rainbow-blobs.47cc3bfd.js",revision:null},{url:"assets/reaction-time-tester.a2a2a514.js",revision:null},{url:"assets/reaction-time-tester.e89fb1be.css",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/Rectangles.6a29af1c.js",revision:null},{url:"assets/remote-typewriter.5b565ee1.js",revision:null},{url:"assets/remote-typewriter.6b59c689.css",revision:null},{url:"assets/same-number-generator.d267ba73.css",revision:null},{url:"assets/same-number-generator.ef3f12fd.js",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SearchableCardGrid.a8814f80.js",revision:null},{url:"assets/SharedNav.20b68e8c.css",revision:null},{url:"assets/SharedNav.b6ca6276.js",revision:null},{url:"assets/Slider.3b2a8f0c.js",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/the-day-for-any-date.104800ca.js",revision:null},{url:"assets/Title.b0bfa2ee.css",revision:null},{url:"assets/Title.b158beb0.js",revision:null},{url:"assets/trope-highlighter.1a75f73d.js",revision:null},{url:"assets/trope-highlighter.9aa8b38d.css",revision:null},{url:"assets/Turntable.5b7e6d94.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Uniforms.af62a788.js",revision:null},{url:"assets/useCanvas.05e68ec9.js",revision:null},{url:"assets/useGlsl.9495b1d0.js",revision:null},{url:"assets/useHomeIcons.48581c5a.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useLocationHash.ac9ca517.js",revision:null},{url:"assets/useOption.bd2fff96.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.b5df2f5a.js",revision:null},{url:"assets/v1-editor.5e1b5a0e.js",revision:null},{url:"assets/v2-compiler.ad963f51.js",revision:null},{url:"assets/v2-editor.8e7f2233.js",revision:null},{url:"assets/v3-compiler.7f98426b.js",revision:null},{url:"assets/v3-editor.7cffee0c.js",revision:null},{url:"assets/v4-compiler.de872e1b.js",revision:null},{url:"assets/v4-editor.f5fbda00.js",revision:null},{url:"assets/v6.2b30307c.css",revision:null},{url:"assets/v6.fe0117bc.js",revision:null},{url:"assets/verify-account.7738c963.js",revision:null},{url:"assets/WebGlCanvas.d3d8296f.js",revision:null},{url:"assets/what-makes-zsnout-different.38b8eb89.js",revision:null},{url:"index.html",revision:"8bf394f0d9fe2e9200d7108e199df9ee"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"))),s.registerRoute((({request:s})=>"image"===s.destination),new s.StaleWhileRevalidate({cacheName:"images-cache",plugins:[new s.ExpirationPlugin({purgeOnQuotaError:!0,maxAgeSeconds:2592e3})]}),"GET"),s.registerRoute((({url:s})=>s.pathname.startsWith("/socket.io")),new s.NetworkOnly({cacheName:"api-cache",plugins:[]}),"GET"),s.registerRoute((({url:s})=>!s.pathname.startsWith("/socket.io")),new s.NetworkFirst({cacheName:"main-cache",plugins:[]}),"GET")}));
