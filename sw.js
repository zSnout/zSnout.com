if(!self.define){let s,e={};const l=(l,r)=>(l=new URL(l+".js",r).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(r,i)=>{const n=s||("document"in self?document.currentScript.src:"")||location.href;if(e[n])return;let u={};const a=s=>l(s,n),o={module:{uri:n},exports:u,require:a};e[n]=Promise.all(r.map((s=>o[s]||a(s)))).then((s=>(i(...s),u)))}}define(["./workbox-b3e22772"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"404.html",revision:"d95150021d370aba800d3beb3b8e944a"},{url:"assets/__vite-browser-external.2d3e1c2d.js",revision:null},{url:"assets/_commonjsHelpers.294d03c4.js",revision:null},{url:"assets/3d.1c807ce7.js",revision:null},{url:"assets/404.e4d8b502.js",revision:null},{url:"assets/AceEditor.613955f7.js",revision:null},{url:"assets/AceEditor.86988308.css",revision:null},{url:"assets/ascii-art.647bd38c.js",revision:null},{url:"assets/blobby-gradient.048c8bf8.css",revision:null},{url:"assets/blobby-gradient.917aa9a2.js",revision:null},{url:"assets/browser.960229ac.js",revision:null},{url:"assets/camera-modifier.026390f6.js",revision:null},{url:"assets/Card.03446c7a.css",revision:null},{url:"assets/Card.7b5d9e67.js",revision:null},{url:"assets/CardGrid.4ad4cf2e.js",revision:null},{url:"assets/CardGrid.dbda6991.css",revision:null},{url:"assets/code-editor.7a97e92c.js",revision:null},{url:"assets/ColorSliders.33bde3d3.js",revision:null},{url:"assets/compiler.1f4e6fdb.js",revision:null},{url:"assets/compiler3.e1bd1ac4.js",revision:null},{url:"assets/complex-explorer.833402f6.css",revision:null},{url:"assets/complex-explorer.942dc6f2.js",revision:null},{url:"assets/Console.5cb63203.js",revision:null},{url:"assets/Console.84b1a11f.css",revision:null},{url:"assets/CoordinateCanvas2d.17a0a47b.js",revision:null},{url:"assets/DocumentDisplay.103f6d4c.css",revision:null},{url:"assets/DocumentDisplay.6f6c1407.js",revision:null},{url:"assets/Dropdown.297df829.css",revision:null},{url:"assets/Dropdown.58ef0789.js",revision:null},{url:"assets/Editor2.886dc416.js",revision:null},{url:"assets/Editor3.97e5ffe5.js",revision:null},{url:"assets/Ellipses.bab09200.css",revision:null},{url:"assets/Ellipses.be813679.js",revision:null},{url:"assets/evaluator.ea5f2d4a.js",revision:null},{url:"assets/Fireline.79262f85.js",revision:null},{url:"assets/Fireline.8f18e393.css",revision:null},{url:"assets/fractal-explorer.3564b035.js",revision:null},{url:"assets/fractal-explorer.e96558c2.css",revision:null},{url:"assets/fractal-presets.48ec22ee.js",revision:null},{url:"assets/FullscreenDisplay.a2b370ee.css",revision:null},{url:"assets/FullscreenDisplay.e4ced142.js",revision:null},{url:"assets/Grid.e705d0b5.js",revision:null},{url:"assets/hands-free-slides.2a04d325.css",revision:null},{url:"assets/hands-free-slides.f6ebc508.js",revision:null},{url:"assets/Home.4e6e916d.css",revision:null},{url:"assets/Home.63822920.js",revision:null},{url:"assets/hyperbolic-explorer.9780f254.js",revision:null},{url:"assets/ImageCard.461c8643.js",revision:null},{url:"assets/ImageCard.cfdacb28.css",revision:null},{url:"assets/Index.1e6c70f6.css",revision:null},{url:"assets/Index.76a15adb.js",revision:null},{url:"assets/index.842908fa.css",revision:null},{url:"assets/Index.97ad2ca6.js",revision:null},{url:"assets/Index.a9853ef7.js",revision:null},{url:"assets/index.b3c6be41.js",revision:null},{url:"assets/index.b8c482a4.js",revision:null},{url:"assets/index.e9cc25ec.js",revision:null},{url:"assets/InlineCheckboxField.66760296.css",revision:null},{url:"assets/InlineCheckboxField.b5618c4c.js",revision:null},{url:"assets/InlineField.aec3398f.css",revision:null},{url:"assets/InlineField.d0b22cf6.js",revision:null},{url:"assets/InlineRangeField.7c5af70c.css",revision:null},{url:"assets/InlineRangeField.b51f5dce.js",revision:null},{url:"assets/Labeled.66b2293d.js",revision:null},{url:"assets/Labeled.6d2bf923.css",revision:null},{url:"assets/Leopards.86ceeb25.css",revision:null},{url:"assets/Leopards.f9ee8ae4.js",revision:null},{url:"assets/Mandelbrot.80ba58c7.js",revision:null},{url:"assets/maze-game.6a5bb89c.js",revision:null},{url:"assets/maze-game.cf20c7c1.css",revision:null},{url:"assets/Metaballs.9cb5ca50.js",revision:null},{url:"assets/MiddleText.237fd31b.css",revision:null},{url:"assets/MiddleText.9f1ef330.js",revision:null},{url:"assets/mode-javascript.e6176182.js",revision:null},{url:"assets/MovableCanvas2d.67bffe48.js",revision:null},{url:"assets/my-account.8235f215.js",revision:null},{url:"assets/my-notes.056b49f6.js",revision:null},{url:"assets/my-notes.2ddb0a95.css",revision:null},{url:"assets/Note.7c1584ee.css",revision:null},{url:"assets/Note.e802c822.js",revision:null},{url:"assets/Os.7fab1e8c.js",revision:null},{url:"assets/Os.d017a109.css",revision:null},{url:"assets/pixelated-rainbow.6e72ea03.js",revision:null},{url:"assets/preset.60c4ef11.js",revision:null},{url:"assets/privacy-policy.05d1aca8.js",revision:null},{url:"assets/Prose.5e567385.js",revision:null},{url:"assets/Prose.703837e7.css",revision:null},{url:"assets/rainbow-blobs.e4c46ee3.js",revision:null},{url:"assets/reaction-time-tester.16f0bd2e.js",revision:null},{url:"assets/reaction-time-tester.e89fb1be.css",revision:null},{url:"assets/Rectangles.55c76259.js",revision:null},{url:"assets/Rectangles.5707e4b8.css",revision:null},{url:"assets/remote-typewriter.6b59c689.css",revision:null},{url:"assets/remote-typewriter.c4ed89af.js",revision:null},{url:"assets/same-number-generator.26bdf20b.js",revision:null},{url:"assets/same-number-generator.d267ba73.css",revision:null},{url:"assets/SearchableCardGrid.05fbc736.css",revision:null},{url:"assets/SearchableCardGrid.dae33cd2.js",revision:null},{url:"assets/SharedNav.57e661d0.js",revision:null},{url:"assets/SharedNav.6291f144.css",revision:null},{url:"assets/Slider.f7b01f38.css",revision:null},{url:"assets/Slider.fd758d72.js",revision:null},{url:"assets/Title.66d72a53.css",revision:null},{url:"assets/Title.8dbe4c1e.js",revision:null},{url:"assets/Turntable.1e04762c.js",revision:null},{url:"assets/Turntable.c785f725.css",revision:null},{url:"assets/Uniforms.cbcc295d.js",revision:null},{url:"assets/useCanvas.7cddf4b3.js",revision:null},{url:"assets/useGlsl.9495b1d0.js",revision:null},{url:"assets/useLocationHash.421b2f74.js",revision:null},{url:"assets/useLocationHash.76e5dc49.css",revision:null},{url:"assets/useOption.7ce5b27b.js",revision:null},{url:"assets/useRandint.07e5b532.js",revision:null},{url:"assets/useRandomColor.1a4538c9.js",revision:null},{url:"assets/useTypewrite.705f091f.js",revision:null},{url:"assets/useVideoFromStream.4fd3547a.js",revision:null},{url:"assets/v1-editor.00ecf765.js",revision:null},{url:"assets/v2-compiler.a2c10c7a.js",revision:null},{url:"assets/v2-editor.a5f3c5df.js",revision:null},{url:"assets/v3-compiler.e108903a.js",revision:null},{url:"assets/v3-editor.27066db1.js",revision:null},{url:"assets/v4-compiler.fb719ab0.js",revision:null},{url:"assets/v4-editor.3979e545.js",revision:null},{url:"assets/verify-account.3959fb15.js",revision:null},{url:"assets/VStack.0421b3da.css",revision:null},{url:"assets/VStack.7090fa40.js",revision:null},{url:"assets/WebGlCanvas.a21875db.js",revision:null},{url:"index.html",revision:"1366261afa2e6437c893f1a5ea5052f9"},{revision:null,url:"/CNAME"},{revision:null,url:"/android-chrome-192x192.png"},{revision:null,url:"/android-chrome-512x512.png"},{revision:null,url:"/apple-touch-icon.png"},{revision:null,url:"/browserconfig.xml"},{revision:null,url:"/favicon-16x16.png"},{revision:null,url:"/favicon-32x32.png"},{revision:null,url:"/favicon.ico"},{revision:null,url:"/manifest.json"},{revision:null,url:"/mstile-150x150.png"},{revision:null,url:"/pwa-192x192.png"},{revision:null,url:"/pwa-512x512.png"},{revision:null,url:"/robots.txt"},{revision:null,url:"/safari-pinned-tab.svg"},{revision:null,url:"/zsnout.icns"},{url:"manifest.webmanifest",revision:"c32e84594414cb6378a5516a383d25c1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
