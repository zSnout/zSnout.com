import{u as Ve,E as je}from"./useLocationHash.249f44bd.js";import{a as ne,A as ze}from"./AceEditor.952c0710.js";import{d as J,o as Y,c as X,b9 as x,ai as Ce,ao as Me,a1 as De,u as $,aI as Z,w as Be,b as oe}from"./index.5081a4d9.js";import{u as qe,C as Ue}from"./Console.895a172c.js";import"./DocumentDisplay.ee317282.js";import"./SharedNav.de900e72.js";import"./VStack.ce9b91bf.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.2f327a57.js";import"./LogoLight.9c1b4e00.js";import"./Dropdown.0bee570b.js";import"./Labeled.777a3eee.js";const Ze=J({__name:"Editor1",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(t){return ne.define("ace/mode/storymatic1",(e,r)=>{const a=e("ace/lib/oop"),o=e("ace/mode/text").Mode,i=e("ace/mode/storymatic1_highlight_rules").StorymaticHighlightRules,s=function(){this.HighlightRules=i};a.inherits(s,o),r.Mode=s}),ne.define("ace/mode/storymatic1_highlight_rules",(e,r)=>{const a=e("ace/lib/oop"),o=e("ace/mode/text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:["entity.name.function","text","variable.storymatic","text"],regex:/^(@global)( +)(\$[A-Za-z0-9_]+)( *= *)/,next:"startString"},{token:["variable.storymatic","text"],regex:/^(\$[A-Za-z0-9_]+)( *= *)/,next:"startString"},{token:"language.constant.character",regex:/^[A-Za-z0-9_]+$/,next:"code"},{defaultToken:"invalid.illegal"}],startString:[{regex:/$/,next:"start"},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:"variable.storymatic",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],code:[{regex:/^$/,next:"start"},{token:"text",regex:/^ +$/},{token:["text","entity.name.function","text"],regex:/^( +)(@nowait)( +)/,next:"codeText"},{token:["text","variable.storymatic","keyword.operator","entity.name.function","string.unquoted","keyword.operator","string.unquoted"],regex:/^( +)(\$[A-Za-z0-9_]+)( *= *)(@random +)([1-9][0-9]{0,5})( *, *)([1-9][0-9]{0,5})$/},{token:["text","variable.storymatic","text","keyword.operator","text","entity.name.function","text"],regex:/^( +)(\$[A-Za-z0-9_]+)( *)(\+=|-=|\*=|\/=|\.=|=)( *)(@input|@number|)( *)/,next:"codeString"},{token:["text","entity.name.function","text"],regex:/^( +)(@(?:else)?if)( +)/,next:"codeCondition"},{token:["text","entity.name.function","text","language.constant.character"],regex:/^( +)(@run|@goto)( +)([A-Za-z0-9_]+)$/},{token:["text","entity.name.function"],regex:/^( +)(@context|@base|@pass|@stop|@kill|@else)$/},{token:["text","entity.name.function","text","string.unquoted"],regex:/^( +)(@(?:sleep|wait|timeout))( +)(10|[1-9]|[0-9]?\.[1-9]|[0-9]?\.[0-9][1-9])$/},{token:["text","entity.name.function","text"],regex:/^( +)(@for)( +)/,next:"forDefn"},{token:["text","entity.name.function","text"],regex:/^( +)(@(?:do)?while)( +)/,next:"codeCondition"},{token:["text","entity.name.function","text","string.unquoted"],regex:/^( +)(@repeat)( +)([1-9][0-9]?)$/,next:"code"},{token:["text","entity.name.function","text"],regex:/^( +)(@menu)( +)/,next:"codeString"},{token:["text","entity.name.function"],regex:/^( +)(@menu)$/,next:"code"},{token:"text",regex:/^ +/,next:"codeText"},{defaultToken:"text"}],codeText:[{regex:/$/,next:"code"},{token:["keyword.operator.bold","variable.storymatic.bold","keyword.operator.bold"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:"variable.storymatic.bold",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator.bold","variable.storymatic.bold","keyword.operator.bold"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic.bold",regex:/@runfrom|@reference/},{defaultToken:"bold"}],codeString:[{regex:/$/,next:"code"},{token:"variable.storymatic",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],codeCondition:[{regex:/$/,next:"code"},{token:"keyword.operator",regex:/<=|>=|<|>|!=|=|or|and/},{token:"variable.storymatic",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],forDefn:[{token:"text",regex:/;/,next:"forCondition"},{token:"variable.storymatic",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic",regex:/@runfrom|@reference/},{token:"keyword.operator",regex:/\+=|-=|\*=|\/=|\.=|=/},{defaultToken:"string.unquoted"}],forCondition:[{token:"text",regex:/;/,next:"forInc"},{token:"keyword.operator",regex:/<=|>=|<|>|!=|=|or|and/},{token:"variable.storymatic",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],forInc:[{regex:/$/,next:"code"},{token:"variable.storymatic",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.storymatic","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.storymatic",regex:/@runfrom|@reference/},{token:"keyword.operator",regex:/\+=|-=|\*=|\/=|\.=|=|\+\+|--/},{defaultToken:"string.unquoted"}]}};a.inherits(i,o),r.StorymaticHighlightRules=i}),(e,r)=>{var a;return Y(),X(ze,{modelValue:t.modelValue,placeholder:(a=t.placeholder)!=null?a:"Write a story...",readonly:t.readonly,round:t.round,mode:"storymatic1",onInit:r[0]||(r[0]=o=>e.$emit("init",o)),onSave:r[1]||(r[1]=o=>e.$emit("save",o)),"onUpdate:modelValue":r[2]||(r[2]=o=>e.$emit("update:modelValue",o))},null,8,["modelValue","placeholder","readonly","round"])}}});function w(t,e,r,a){return new(r||(r=Promise))(function(o,i){function s(c){try{p(a.next(c))}catch(u){i(u)}}function f(c){try{p(a.throw(c))}catch(u){i(u)}}function p(c){var u;c.done?o(c.value):(u=c.value,u instanceof r?u:new r(function(y){y(u)})).then(s,f)}p((a=a.apply(t,e||[])).next())})}var T,ae,C,ie,he={exports:{}};he.exports=function(){function t(d){return!isNaN(parseFloat(d))&&isFinite(d)}function e(d){return d.charAt(0).toUpperCase()+d.substring(1)}function r(d){return function(){return this[d]}}var a=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],s=["args"],f=["evalOrigin"],p=a.concat(o,i,s,f);function c(d){if(d)for(var _=0;_<p.length;_++)d[p[_]]!==void 0&&this["set"+e(p[_])](d[p[_]])}c.prototype={getArgs:function(){return this.args},setArgs:function(d){if(Object.prototype.toString.call(d)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=d},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(d){if(d instanceof c)this.evalOrigin=d;else{if(!(d instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new c(d)}},toString:function(){var d=this.getFileName()||"",_=this.getLineNumber()||"",g=this.getColumnNumber()||"",k=this.getFunctionName()||"";return this.getIsEval()?d?"[eval] ("+d+":"+_+":"+g+")":"[eval]:"+_+":"+g:k?k+" ("+d+":"+_+":"+g+")":d+":"+_+":"+g}},c.fromString=function(d){var _=d.indexOf("("),g=d.lastIndexOf(")"),k=d.substring(0,_),z=d.substring(_+1,g).split(","),O=d.substring(g+1);if(O.indexOf("@")===0)var A=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(O,""),F=A[1],P=A[2],b=A[3];return new c({functionName:k,args:z||void 0,fileName:F,lineNumber:P||void 0,columnNumber:b||void 0})};for(var u=0;u<a.length;u++)c.prototype["get"+e(a[u])]=r(a[u]),c.prototype["set"+e(a[u])]=function(d){return function(_){this[d]=Boolean(_)}}(a[u]);for(var y=0;y<o.length;y++)c.prototype["get"+e(o[y])]=r(o[y]),c.prototype["set"+e(o[y])]=function(d){return function(_){if(!t(_))throw new TypeError(d+" must be a Number");this[d]=Number(_)}}(o[y]);for(var h=0;h<i.length;h++)c.prototype["get"+e(i[h])]=r(i[h]),c.prototype["set"+e(i[h])]=function(d){return function(_){this[d]=String(_)}}(i[h]);return c}();var _e=(T=he.exports,ae=/(^|@)\S+:\d+/,C=/^\s*at .*(\S+:\d+|\(native\))/m,ie=/^(eval@)?(\[native code])?$/,{parse:function(t){if(t.stacktrace!==void 0||t["opera#sourceloc"]!==void 0)return this.parseOpera(t);if(t.stack&&t.stack.match(C))return this.parseV8OrIE(t);if(t.stack)return this.parseFFOrSafari(t);throw new Error("Cannot parse given Error object")},extractLocation:function(t){if(t.indexOf(":")===-1)return[t];var e=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(t.replace(/[()]/g,""));return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(t){return t.stack.split(`
`).filter(function(e){return!!e.match(C)},this).map(function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(\),.*$)/g,""));var r=e.replace(/^\s+/,"").replace(/\(eval code/g,"("),a=r.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(r=a?r.replace(a[0],""):r).split(/\s+/).slice(1),i=this.extractLocation(a?a[1]:o.pop()),s=o.join(" ")||void 0,f=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];return new T({functionName:s,fileName:f,lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseFFOrSafari:function(t){return t.stack.split(`
`).filter(function(e){return!e.match(ie)},this).map(function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),e.indexOf("@")===-1&&e.indexOf(":")===-1)return new T({functionName:e});var r=/((.*".+"[^@]*)?[^@]*)(?:@)/,a=e.match(r),o=a&&a[1]?a[1]:void 0,i=this.extractLocation(e.replace(r,""));return new T({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseOpera:function(t){return!t.stacktrace||t.message.indexOf(`
`)>-1&&t.message.split(`
`).length>t.stacktrace.split(`
`).length?this.parseOpera9(t):t.stack?this.parseOpera11(t):this.parseOpera10(t)},parseOpera9:function(t){for(var e=/Line (\d+).*script (?:in )?(\S+)/i,r=t.message.split(`
`),a=[],o=2,i=r.length;o<i;o+=2){var s=e.exec(r[o]);s&&a.push(new T({fileName:s[2],lineNumber:s[1],source:r[o]}))}return a},parseOpera10:function(t){for(var e=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,r=t.stacktrace.split(`
`),a=[],o=0,i=r.length;o<i;o+=2){var s=e.exec(r[o]);s&&a.push(new T({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:r[o]}))}return a},parseOpera11:function(t){return t.stack.split(`
`).filter(function(e){return!!e.match(ae)&&!e.match(/^Error created at/)},this).map(function(e){var r,a=e.split("@"),o=this.extractLocation(a.pop()),i=a.shift()||"",s=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;i.match(/\(([^)]*)\)/)&&(r=i.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var f=r===void 0||r==="[arguments not available]"?void 0:r.split(",");return new T({functionName:s,args:f,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})},this)}});let n={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preloadedWasm:{},preRun:[]},l={};n.API=l;let m={};n.hiwire=m;let Q={};function Ke(t,e,r){e&&(n.print=e),r&&(n.printErr=r),t&&n.preRun.push(function(){n.FS.init(function(a){const o=new TextEncoder;let i=new Uint8Array(0),s=-1;function f(){try{if(s===-1){let p=a();if(p==null)return null;if(typeof p!="string")throw new TypeError(`Expected stdin to return string, null, or undefined, got type ${typeof p}.`);p.endsWith(`
`)||(p+=`
`),i=o.encode(p),s=0}if(s<i.length){let p=i[s];return s++,p}return s=-1,null}catch(p){throw console.error("Error thrown in stdin:"),console.error(p),p}}return f}(t),null,null)})}l.tests=Q;const S=typeof process!="undefined"&&process.release&&process.release.name==="node"&&process.browser===void 0;let ge,K,ve,L,V,N;if(V=S?function(t,e){return w(this,void 0,void 0,function*(){if(e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")){let r=yield K(e);if(!r.ok)throw new Error(`Failed to load '${e}': request failed.`);return yield r.arrayBuffer()}{const r=yield L.readFile(`${t}${e}`);return new Uint8Array(r.buffer,r.byteOffset,r.byteLength)}})}:function(t,e){return w(this,void 0,void 0,function*(){const r=new URL(t,location),a=new URL(e,r);let o=yield fetch(a);if(!o.ok)throw new Error(`Failed to load '${a}': request failed.`);return new Uint8Array(yield o.arrayBuffer())})},globalThis.document)N=t=>w(void 0,void 0,void 0,function*(){return yield x(()=>import(t),[])});else if(globalThis.importScripts)N=t=>w(void 0,void 0,void 0,function*(){try{globalThis.importScripts(t)}catch(e){if(!(e instanceof TypeError))throw e;yield x(()=>import(t),[])}});else{if(!S)throw new Error("Cannot determine runtime environment");N=function(t){return w(this,void 0,void 0,function*(){t.startsWith("file://")&&(t=t.slice(7)),t.includes("://")?ve.runInThisContext(yield(yield K(t)).text()):yield x(()=>import(ge.resolve(t)),[])})}}function ee(t){return!!t&&t.$$!==void 0&&t.$$.type==="PyProxy"}l.isPyProxy=ee,globalThis.FinalizationRegistry?n.finalizationRegistry=new FinalizationRegistry(([t,e])=>{e.leaked=!0,we(e);try{n._Py_DecRef(t)}catch(r){l.fatal_error(r)}}):n.finalizationRegistry={register(){},unregister(){}};let M,W,D=new Map;function v(t){let e=t.$$.ptr;if(e===0)throw new Error(t.$$.destroyed_msg);return e}n.pyproxy_alloc_map=D,n.enable_pyproxy_allocation_tracing=function(){M=function(t){D.set(t,Error().stack)},W=function(t){D.delete(t)}},n.disable_pyproxy_allocation_tracing=function(){M=function(t){},W=function(t){}},n.disable_pyproxy_allocation_tracing(),n.pyproxy_new=function(t,e){let r,a=n._pyproxy_getflags(t),o=n.getPyProxyClass(a);256&a?(r=Reflect.construct(Function,[],o),delete r.length,delete r.name,r.prototype=void 0):r=Object.create(o.prototype),!e&&(e={cacheId:m.new_value(new Map),refcnt:0}),e.refcnt++,Object.defineProperty(r,"$$",{value:{ptr:t,type:"PyProxy",cache:e}}),n._Py_IncRef(t);let i=new Proxy(r,Qe);return M(i),n.finalizationRegistry.register(i,[t,e],i),i};let se=new Map;n.getPyProxyClass=function(t){const e=[[1,We],[2,He],[4,Ge],[8,Je],[16,Ye],[32,Xe],[64,et],[128,rt],[256,xe]];let r=se.get(t);if(r)return r;let a={};for(let[s,f]of e)t&s&&Object.assign(a,Object.getOwnPropertyDescriptors(f.prototype));a.constructor=Object.getOwnPropertyDescriptor(le.prototype,"constructor"),Object.assign(a,Object.getOwnPropertyDescriptors({$$flags:t}));let o=Object.create(le.prototype,a);function i(){}return i.prototype=o,se.set(t,i),i},n.PyProxy_getPtr=v;function we(t){if(t&&(t.refcnt--,t.refcnt===0)){let e=m.pop_value(t.cacheId);for(let r of e.values()){const a=m.pop_value(r);t.leaked||n.pyproxy_destroy(a,"This borrowed attribute proxy was automatically destroyed in the process of destroying the proxy it was borrowed from. Try using the 'copy' method.")}}}n.pyproxy_destroy=function(t,e){if(t.$$.ptr===0)return;let r=v(t);n.finalizationRegistry.unregister(t),e=e||"Object has already been destroyed";let a,o=t.type;try{a=t.toString()}catch(i){if(i.pyodide_fatal_error)throw i}t.$$.ptr=0,e+=`
The object was of type "${o}" and `,e+=a?`had repr "${a}"`:"an error was raised when trying to generate its repr",t.$$.destroyed_msg=e,we(t.$$.cache);try{n._Py_DecRef(r),W(t)}catch(i){l.fatal_error(i)}},n.callPyObjectKwargs=function(t,...e){let r=e.pop(),a=e.length,o=Object.keys(r),i=Object.values(r),s=o.length;e.push(...i);let f,p=m.new_value(e),c=m.new_value(o);try{f=n.__pyproxy_apply(t,p,a,c,s)}catch(y){l.fatal_error(y)}finally{m.decref(p),m.decref(c)}f===0&&n._pythonexc2js();let u=m.pop_value(f);return u&&u.type==="coroutine"&&u._ensure_future&&u._ensure_future(),u},n.callPyObject=function(t,...e){return n.callPyObjectKwargs(t,...e,{})};class le{constructor(){throw new TypeError("PyProxy is not a constructor")}get[Symbol.toStringTag](){return"PyProxy"}get type(){let e=v(this);return m.pop_value(n.__pyproxy_type(e))}toString(){let e,r=v(this);try{e=n.__pyproxy_repr(r)}catch(a){l.fatal_error(a)}return e===0&&n._pythonexc2js(),m.pop_value(e)}destroy(e){n.pyproxy_destroy(this,e)}copy(){let e=v(this);return n.pyproxy_new(e,this.$$.cache)}toJs({depth:e=-1,pyproxies:r,create_pyproxies:a=!0,dict_converter:o,default_converter:i}={}){let s,f,p=v(this),c=0,u=0;f=a?r?m.new_value(r):m.new_value([]):0,o&&(c=m.new_value(o)),i&&(u=m.new_value(i));try{s=n._python2js_custom(p,e,f,c,u)}catch(y){l.fatal_error(y)}finally{m.decref(f),m.decref(c),m.decref(u)}return s===0&&n._pythonexc2js(),m.pop_value(s)}supportsLength(){return!!(1&this.$$flags)}supportsGet(){return!!(2&this.$$flags)}supportsSet(){return!!(4&this.$$flags)}supportsHas(){return!!(8&this.$$flags)}isIterable(){return!!(48&this.$$flags)}isIterator(){return!!(32&this.$$flags)}isAwaitable(){return!!(64&this.$$flags)}isBuffer(){return!!(128&this.$$flags)}isCallable(){return!!(256&this.$$flags)}}class We{get length(){let e,r=v(this);try{e=n._PyObject_Size(r)}catch(a){l.fatal_error(a)}return e===-1&&n._pythonexc2js(),e}}class He{get(e){let r,a=v(this),o=m.new_value(e);try{r=n.__pyproxy_getitem(a,o)}catch(i){l.fatal_error(i)}finally{m.decref(o)}if(r===0){if(!n._PyErr_Occurred())return;n._pythonexc2js()}return m.pop_value(r)}}class Ge{set(e,r){let a,o=v(this),i=m.new_value(e),s=m.new_value(r);try{a=n.__pyproxy_setitem(o,i,s)}catch(f){l.fatal_error(f)}finally{m.decref(i),m.decref(s)}a===-1&&n._pythonexc2js()}delete(e){let r,a=v(this),o=m.new_value(e);try{r=n.__pyproxy_delitem(a,o)}catch(i){l.fatal_error(i)}finally{m.decref(o)}r===-1&&n._pythonexc2js()}}class Je{has(e){let r,a=v(this),o=m.new_value(e);try{r=n.__pyproxy_contains(a,o)}catch(i){l.fatal_error(i)}finally{m.decref(o)}return r===-1&&n._pythonexc2js(),r===1}}class Ye{[Symbol.iterator](){let e,r=v(this),a={};try{e=n._PyObject_GetIter(r)}catch(i){l.fatal_error(i)}e===0&&n._pythonexc2js();let o=function*(i,s){try{let f;for(;f=n.__pyproxy_iter_next(i);)yield m.pop_value(f)}catch(f){l.fatal_error(f)}finally{n.finalizationRegistry.unregister(s),n._Py_DecRef(i)}n._PyErr_Occurred()&&n._pythonexc2js()}(e,a);return n.finalizationRegistry.register(o,[e,void 0],a),o}}class Xe{[Symbol.iterator](){return this}next(e){let r,a,o=m.new_value(e),i=n.stackSave(),s=n.stackAlloc(4);try{r=n.__pyproxyGen_Send(v(this),o,s)}catch(p){l.fatal_error(p)}finally{m.decref(o)}let f=n.HEAPU32[0+(s>>2)];return n.stackRestore(i),r===-1&&n._pythonexc2js(),a=r===0,{done:a,value:m.pop_value(f)}}}let Qe={isExtensible:()=>!0,has:(t,e)=>!!Reflect.has(t,e)||typeof e!="symbol"&&(e.startsWith("$")&&(e=e.slice(1)),function(r,a){let o,i=v(r),s=m.new_value(a);try{o=n.__pyproxy_hasattr(i,s)}catch(f){l.fatal_error(f)}finally{m.decref(s)}return o===-1&&n._pythonexc2js(),o!==0}(t,e)),get(t,e){if(e in t||typeof e=="symbol")return Reflect.get(t,e);e.startsWith("$")&&(e=e.slice(1));let r=function(a,o){let i,s=v(a),f=m.new_value(o),p=a.$$.cache.cacheId;try{i=n.__pyproxy_getattr(s,f,p)}catch(c){l.fatal_error(c)}finally{m.decref(f)}return i===0&&n._PyErr_Occurred()&&n._pythonexc2js(),i}(t,e);return r!==0?m.pop_value(r):void 0},set(t,e,r){let a=Object.getOwnPropertyDescriptor(t,e);if(a&&!a.writable)throw new TypeError(`Cannot set read only field '${e}'`);return typeof e=="symbol"?Reflect.set(t,e,r):(e.startsWith("$")&&(e=e.slice(1)),function(o,i,s){let f,p=v(o),c=m.new_value(i),u=m.new_value(s);try{f=n.__pyproxy_setattr(p,c,u)}catch(y){l.fatal_error(y)}finally{m.decref(c),m.decref(u)}f===-1&&n._pythonexc2js()}(t,e,r),!0)},deleteProperty(t,e){let r=Object.getOwnPropertyDescriptor(t,e);if(r&&!r.writable)throw new TypeError(`Cannot delete read only field '${e}'`);return typeof e=="symbol"?Reflect.deleteProperty(t,e):(e.startsWith("$")&&(e=e.slice(1)),function(a,o){let i,s=v(a),f=m.new_value(o);try{i=n.__pyproxy_delattr(s,f)}catch(p){l.fatal_error(p)}finally{m.decref(f)}i===-1&&n._pythonexc2js()}(t,e),!r||!!r.configurable)},ownKeys(t){let e,r=v(t);try{e=n.__pyproxy_ownKeys(r)}catch(o){l.fatal_error(o)}e===0&&n._pythonexc2js();let a=m.pop_value(e);return a.push(...Reflect.ownKeys(t)),a},apply:(t,e,r)=>t.apply(e,r)};class et{_ensure_future(){if(this.$$.promise)return this.$$.promise;let e,r,a,o=v(this),i=new Promise((p,c)=>{e=p,r=c}),s=m.new_value(e),f=m.new_value(r);try{a=n.__pyproxy_ensure_future(o,s,f)}catch(p){l.fatal_error(p)}finally{m.decref(f),m.decref(s)}return a===-1&&n._pythonexc2js(),this.$$.promise=i,this.destroy(),i}then(e,r){return this._ensure_future().then(e,r)}catch(e){return this._ensure_future().catch(e)}finally(e){return this._ensure_future().finally(e)}}class xe{apply(e,r){return n.callPyObject(v(this),...r)}call(e,...r){return n.callPyObject(v(this),...r)}callKwargs(...e){if(e.length===0)throw new TypeError("callKwargs requires at least one argument (the key word argument object)");let r=e[e.length-1];if(r.constructor!==void 0&&r.constructor.name!=="Object")throw new TypeError("kwargs argument is not an object");return n.callPyObjectKwargs(v(this),...e)}}xe.prototype.prototype=Function.prototype;let H,be,tt=new Map([["i8",Int8Array],["u8",Uint8Array],["u8clamped",Uint8ClampedArray],["i16",Int16Array],["u16",Uint16Array],["i32",Int32Array],["u32",Uint32Array],["i32",Int32Array],["u32",Uint32Array],["i64",globalThis.BigInt64Array],["u64",globalThis.BigUint64Array],["f32",Float32Array],["f64",Float64Array],["dataview",DataView]]);class rt{getBuffer(e){let r;if(e&&(r=tt.get(e),r===void 0))throw new Error(`Unknown type ${e}`);let a,o=n.HEAPU32,i=n.stackSave(),s=n.stackAlloc(o[0+(n._buffer_struct_size>>2)]),f=v(this);try{a=n.__pyproxy_get_buffer(s,f)}catch(P){l.fatal_error(P)}a===-1&&n._pythonexc2js();let p=o[0+(s>>2)],c=o[1+(s>>2)],u=o[2+(s>>2)],y=!!o[3+(s>>2)],h=o[4+(s>>2)],d=o[5+(s>>2)],_=m.pop_value(o[6+(s>>2)]),g=m.pop_value(o[7+(s>>2)]),k=o[8+(s>>2)],z=!!o[9+(s>>2)],O=!!o[10+(s>>2)],A=n.UTF8ToString(h);n.stackRestore(i);let F=!1;try{let P=!1;r===void 0&&([r,P]=n.processBufferFormatString(A," In this case, you can pass an explicit type argument."));let b=parseInt(r.name.replace(/[^0-9]/g,""))/8||1;if(P&&b>1)throw new Error("Javascript has no native support for big endian buffers. In this case, you can pass an explicit type argument. For instance, `getBuffer('dataview')` will return a `DataView`which has native support for reading big endian data. Alternatively, toJs will automatically convert the buffer to little endian.");let I=u-c;if(I!==0&&(p%b!=0||c%b!=0||u%b!=0))throw new Error(`Buffer does not have valid alignment for a ${r.name}`);let re,Ne=I/b,Re=(p-c)/b;re=I===0?new r:new r(o.buffer,c,Ne);for(let Le of g.keys())g[Le]/=b;return F=!0,Object.create(ke.prototype,Object.getOwnPropertyDescriptors({offset:Re,readonly:y,format:A,itemsize:d,ndim:_.length,nbytes:I,shape:_,strides:g,data:re,c_contiguous:z,f_contiguous:O,_view_ptr:k,_released:!1}))}finally{if(!F)try{n._PyBuffer_Release(k),n._PyMem_Free(k)}catch(P){l.fatal_error(P)}}}}class ke{constructor(){throw new TypeError("PyBuffer is not a constructor")}release(){if(!this._released){try{n._PyBuffer_Release(this._view_ptr),n._PyMem_Free(this._view_ptr)}catch(e){l.fatal_error(e)}this._released=!0,this.data=null}}}const nt=/^.*?([^\/]*)\.whl$/;function ot(t){let e=nt.exec(t);if(e)return e[1].toLowerCase().split("-").slice(0,-4).join("-")}function Pe(t,e,r){if(t=t.toLowerCase(),e.has(t))return;const a=l.packages[t];if(!a)throw new Error(`No known package with name '${t}'`);if(a.shared_library?r.set(t,"default channel"):e.set(t,"default channel"),E[t]===void 0)for(let o of a.depends)Pe(o,e,r)}function ce(t,e){return w(this,void 0,void 0,function*(){let r;if(e==="default channel"){if(!(t in l.packages))throw new Error(`Internal error: no entry for package named ${t}`);r=l.packages[t].file_name}else r=e;try{return yield V(H,r)}catch(o){if(!S)throw o}let a=yield V(be,r);return yield L.writeFile(`${H}${r}`,a),a})}function ue(t,e){return w(this,void 0,void 0,function*(){let r=l.packages[t];r||(r={file_name:".whl",install_dir:"site",shared_library:!1,depends:[],imports:[]});const a=r.file_name,o=l.package_loader.unpack_buffer.callKwargs({buffer:e,filename:a,target:r.install_dir,calculate_dynlibs:!0});for(const i of o)yield Ee(i,r.shared_library);E[t]=r})}function $e(){let t=Promise.resolve();return function(){return w(this,void 0,void 0,function*(){const e=t;let r;return t=new Promise(a=>r=a),yield e,r})}}const at=$e();function Ee(t,e){return w(this,void 0,void 0,function*(){let r;r=n.FS.lookupPath(t).node.mount.type==n.FS.filesystems.MEMFS?n.FS.filesystems.MEMFS.getFileDataAsTypedArray(n.FS.lookupPath(t).node):n.FS.readFile(t);const a=yield at();try{const o=yield n.loadWebAssemblyModule(r,{loadAsync:!0,nodelete:!0,allowUndefined:!0});n.preloadedWasm[t]=o,n.preloadedWasm[t.split("/").pop()]=o,e&&n.loadDynamicLibrary(t,{global:!0,nodelete:!0})}catch(o){if(o.message.includes("need to see wasm magic number"))return void console.warn(`Failed to load dynlib ${t}. We probably just tried to load a linux .so file or something.`);throw o}finally{a()}})}Q.loadDynlib=Ee;const it=$e();function te(t,e,r){return w(this,void 0,void 0,function*(){e=e||console.log,r=r||console.error,ee(t)&&(t=t.toJs()),Array.isArray(t)||(t=[t]);const[a,o]=function(f,p){const c=new Map,u=new Map;for(let y of f){const h=ot(y);h!==void 0?c.has(h)&&c.get(h)!==y?p(`Loading same package ${h} from ${y} and ${c.get(h)}`):c.set(h,y):Pe(y,c,u)}return[c,u]}(t,r);for(const[f,p]of[...a,...o]){const c=E[f];c!==void 0&&(a.delete(f),o.delete(f),c===p||p==="default channel"?e(`${f} already loaded from ${c}`):r(`URI mismatch, attempting to load package ${f} from ${p} while it is already loaded from ${c}. To override a dependency, load the custom package first.`))}if(a.size===0&&o.size===0)return void e("No new packages to load");const i=[...a.keys(),...o.keys()].join(", "),s=yield it();try{e(`Loading ${i}`);const f={},p={};for(const[d,_]of o)E[d]?o.delete(d):f[d]=ce(d,_);for(const[d,_]of a)E[d]?a.delete(d):p[d]=ce(d,_);const c=[],u={},y={},h={};for(const[d,_]of o)y[d]=f[d].then(g=>w(this,void 0,void 0,function*(){yield ue(d,g),c.push(d),E[d]=_})).catch(g=>{console.warn(g),u[d]=g});yield Promise.all(Object.values(y));for(const[d,_]of a)h[d]=p[d].then(g=>w(this,void 0,void 0,function*(){yield ue(d,g),c.push(d),E[d]=_})).catch(g=>{console.warn(g),u[d]=g});if(yield Promise.all(Object.values(h)),n.reportUndefinedSymbols(),c.length>0){const d=c.join(", ");e(`Loaded ${d}`)}if(Object.keys(u).length>0){const d=Object.keys(u).join(", ");e(`Failed to load ${d}`);for(const[_,g]of Object.entries(u))console.warn(`The following error occurred while loading ${_}:`),console.error(g)}l.importlib.invalidate_caches()}finally{s()}})}let E={};function Te(t){if(typeof t=="string")t=new Error(t);else if(typeof t!="object"||t===null||typeof t.stack!="string"||typeof t.message!="string"){let e=`A value of type ${typeof t} with tag ${Object.prototype.toString.call(t)} was thrown as an error!`;try{e+=`
String interpolation of the thrown value gives """${t}""".`}catch{e+=`
String interpolation of the thrown value fails.`}try{e+=`
The thrown value's toString method returns """${t.toString()}""".`}catch{e+=`
The thrown value's toString method fails.`}t=new Error(e)}return t}l.dump_traceback=function(){n.__Py_DumpTraceback(1,n._PyGILState_GetThisThreadState())};let fe=!1;l.fatal_error=function(t){if(!t||!t.pyodide_fatal_error){if(fe)return console.error("Recursive call to fatal_error. Inner error was:"),void console.error(t);(t=typeof t=="number"?Se(t):Te(t)).pyodide_fatal_error=!0,fe=!0,console.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers."),console.error("The cause of the fatal error was:"),l.inTestHoist?(console.error(t.toString()),console.error(t.stack)):console.error(t);try{l.dump_traceback();for(let e of Object.keys(l.public_api))e.startsWith("_")||e==="version"||Object.defineProperty(l.public_api,e,{enumerable:!0,configurable:!0,get:()=>{throw new Error("Pyodide already fatally failed and can no longer be used.")}});l.on_fatal&&l.on_fatal(t)}catch(e){console.error("Another error occurred while handling the fatal error:"),console.error(e)}throw t}};class Ae extends Error{constructor(e,r){super(r),this.ty=e}}function Se(t){const[e,r,a]=function(i){const s=n._exc_type(),f=new n.ExceptionInfo(i).get_type(),p=n.stackSave(),c=n.stackAlloc(4);n.HEAP32[c/4]=i;const u=n.demangle(n.UTF8ToString(n._exc_typename(f))),y=!!n.___cxa_can_catch(s,f,c),h=n.HEAP32[c/4];return n.stackRestore(p),[u,y,h]}(t);let o;if(r){const i=n._exc_what(a);o=n.UTF8ToString(i)}else o=`The exception is an object of type ${e} at address ${t} which does not inherit from std::exception`;return new Ae(e,o)}function B(t){const e=t.fileName||"";if(e.includes("pyodide.asm")||e.includes("wasm-function"))return!0;if(!e.includes("pyodide.js"))return!1;let r=t.functionName||"";return r.startsWith("Object.")&&(r=r.slice(7)),!(r in l.public_api)||r==="PythonError"||(t.functionName=r,!1)}Object.defineProperty(Ae.prototype,"name",{get(){return`${this.constructor.name} ${this.ty}`}}),Q.convertCppException=Se,n.handle_js_error=function(t){if(t&&t.pyodide_fatal_error)throw t;if(t instanceof n._PropagatePythonError)return;let e,r,a=!1;t instanceof l.PythonError&&(a=n._restore_sys_last_exception(t.__error_address));try{e=_e.parse(t)}catch{r=!0}if(r&&(t=Te(t)),!a){let o=m.new_value(t),i=n._JsProxy_create(o);n._set_error(i),n._Py_DecRef(i),m.decref(o)}if(!r){if(function(o){if(!B(o))return!1;const i=o.functionName;return i==="PythonError"||i==="new_error"}(e[0]))for(;B(e[0]);)e.shift();for(const o of e){if(B(o))break;const i=n.stringToNewUTF8(o.functionName||"???"),s=n.stringToNewUTF8(o.fileName||"???.js");n.__PyTraceback_Add(i,s,o.lineNumber),n._free(i),n._free(s)}}};class R extends Error{constructor(e,r){const a=Error.stackTraceLimit;Error.stackTraceLimit=1/0,super(e),Error.stackTraceLimit=a,this.__error_address=r}}Object.defineProperty(R.prototype,"name",{value:R.name}),l.PythonError=R;class q extends Error{constructor(){l.fail_test=!0,super("If you are seeing this message, an internal Pyodide error has occurred. Please report it to the Pyodide maintainers.")}}Object.defineProperty(q.prototype,"name",{value:q.name}),n._PropagatePythonError=q;let j=!1;function Oe(t,e={}){return l.isPyProxy(e)&&(e={globals:e},j||(console.warn("Passing a PyProxy as the second argument to runPython is deprecated and will be removed in v0.21. Use 'runPython(code, {globals : some_dict})' instead."),j=!0)),e.globals||(e.globals=l.globals),l.pyodide_py.eval_code(t,e.globals)}function st(t,e,r){return w(this,void 0,void 0,function*(){let a,o=l.pyodide_py.find_imports(t);try{a=o.toJs()}finally{o.destroy()}if(a.length===0)return;let i=l._import_name_to_package_name,s=new Set;for(let f of a)i.has(f)&&s.add(i.get(f));s.size&&(yield te(Array.from(s),e,r))})}function Fe(t,e={}){return w(this,void 0,void 0,function*(){return l.isPyProxy(e)&&(e={globals:e},j||(console.warn("Passing a PyProxy as the second argument to runPythonAsync is deprecated and will be removed in v0.21. Use 'runPythonAsync(code, {globals : some_dict})' instead."),j=!0)),e.globals||(e.globals=l.globals),yield l.pyodide_py.eval_code_async(t,e.globals)})}function lt(t,e){l.pyodide_py.register_js_module(t,e)}function ct(t){l._Comlink=t}function ut(t){l.pyodide_py.unregister_js_module(t)}function ft(t,{depth:e,defaultConverter:r}={depth:-1}){switch(typeof t){case"string":case"number":case"boolean":case"bigint":case"undefined":return t}if(!t||l.isPyProxy(t))return t;let a=0,o=0,i=0;try{a=m.new_value(t);try{o=n.js2python_convert(a,{depth:e,defaultConverter:r})}catch(s){throw s instanceof n._PropagatePythonError&&n._pythonexc2js(),s}if(n._JsProxy_Check(o))return t;i=n._python2js(o),i===0&&n._pythonexc2js()}finally{m.decref(a),n._Py_DecRef(o)}return m.pop_value(i)}function dt(t){return l.importlib.import_module(t)}l.runPython=Oe,l.runPythonAsync=Fe;let de,Ie,pe=!1;function pt(t,e,r={}){typeof r=="string"&&(pe||(console.warn("Passing a string as the third argument to unpackArchive is deprecated and will be removed in v0.21. Instead use { extract_dir : 'some_path' }"),pe=!0),r={extractDir:r});let a=r.extractDir;l.package_loader.unpack_buffer.callKwargs({buffer:t,format:e,extract_dir:a})}function yt(t){n.HEAP8[n._Py_EMSCRIPTEN_SIGNAL_HANDLING]=!!t,n.Py_EmscriptenSignalBuffer=t}function mt(){n.__PyErr_CheckSignals()&&n._pythonexc2js()}function ht(){de=n.FS;let t={globals:void 0,FS:de,pyodide_py:void 0,version:"",loadPackage:te,loadPackagesFromImports:st,loadedPackages:E,isPyProxy:ee,runPython:Oe,runPythonAsync:Fe,registerJsModule:lt,unregisterJsModule:ut,setInterruptBuffer:yt,checkInterrupt:mt,toPy:ft,pyimport:dt,unpackArchive:pt,registerComlink:ct,PythonError:R,PyBuffer:ke,_module:n,_api:l};return l.public_api=t,t}function _t(t){Ie=l._pyodide._base.eval_code("{}"),l.importlib=l.runPythonInternal("import importlib; importlib");let e=l.importlib.import_module;l.sys=e("sys"),l.sys.path.insert(0,t.homedir);let r=l.runPythonInternal("import __main__; __main__.__dict__"),a=l.runPythonInternal("import builtins; builtins.__dict__");var o;l.globals=(o=a,new Proxy(r,{get:(f,p)=>p==="get"?c=>{let u=f.get(c);return u===void 0&&(u=o.get(c)),u}:p==="has"?c=>f.has(c)||o.has(c):Reflect.get(f,p)}));let i=l._pyodide._importhook;i.register_js_finder(),i.register_js_module("js",t.jsglobals);let s=ht();return i.register_js_module("pyodide_js",s),l.pyodide_py=e("pyodide"),l.package_loader=e("pyodide._package_loader"),l.version=l.pyodide_py.__version__,s.pyodide_py=l.pyodide_py,s.version=l.version,s.globals=l.globals,s}function G(t={}){return w(this,void 0,void 0,function*(){if(G.inProgress)throw new Error("Pyodide is already loading.");t.indexURL||(t.indexURL=function(){let u;try{throw new Error}catch(h){u=h}let y=_e.parse(u)[0].fileName;return S&&y.startsWith("file://")&&(y=y.slice(7)),y.slice(0,y.lastIndexOf("/"))}()),G.inProgress=!0;const e={fullStdLib:!0,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,homedir:"/home/pyodide"};let r=Object.assign(e,t);r.indexURL.endsWith("/")||(r.indexURL+="/"),yield function(){return w(this,void 0,void 0,function*(){if(!S||(ge=(yield x(()=>import("./__vite-browser-external.2d3e1c2d.js").then(function(y){return y._}),[])).default,L=yield x(()=>import("./__vite-browser-external.2d3e1c2d.js").then(function(y){return y._}),[]),K=(yield x(()=>import("./index.b8c482a4.js"),["assets/index.b8c482a4.js","assets/__vite-browser-external.2d3e1c2d.js","assets/_commonjsHelpers.294d03c4.js"])).default,ve=(yield x(()=>import("./__vite-browser-external.2d3e1c2d.js").then(function(y){return y._}),[])).default,typeof require!="undefined"))return;const u={fs:yield x(()=>import("./__vite-browser-external.2d3e1c2d.js").then(function(y){return y._}),[]),crypto:yield x(()=>import("./__vite-browser-external.2d3e1c2d.js").then(function(y){return y._}),[]),ws:yield x(()=>import("./browser.960229ac.js").then(function(y){return y.b}),[]),child_process:yield x(()=>import("./__vite-browser-external.2d3e1c2d.js").then(function(y){return y._}),[])};globalThis.require=function(y){return u[y]}})}();let a=function(u){return w(this,void 0,void 0,function*(){let y;if(H=u,S){const h=yield L.readFile(`${u}packages.json`);y=JSON.parse(h)}else y=yield(yield fetch(`${u}packages.json`)).json();if(!y.packages)throw new Error("Loaded packages.json does not contain the expected key 'packages'.");l.packages=y.packages,l._import_name_to_package_name=new Map;for(let h of Object.keys(l.packages))for(let d of l.packages[h].imports)l._import_name_to_package_name.set(d,h)})}(r.indexURL),o=V(r.indexURL,"pyodide_py.tar");var i;Ke(r.stdin,r.stdout,r.stderr),i=r.homedir,n.preRun.push(function(){try{n.FS.mkdirTree(i)}catch(u){console.error(`Error occurred while making a home directory '${i}':`),console.error(u),console.error("Using '/' for a home directory instead"),i="/"}n.ENV.HOME=i,n.FS.chdir(i)});let s=new Promise(u=>n.postRun=u);n.locateFile=u=>r.indexURL+u;const f=`${r.indexURL}pyodide.asm.js`;yield N(f),yield _createPyodideModule(n),yield s,n.locateFile=u=>{throw new Error("Didn't expect to load any more file_packager files!")},function(u){let y=n.FS.open("/pyodide_py.tar","w");n.FS.write(y,u,0,u.byteLength,void 0,!0),n.FS.close(y);const h=n.stringToNewUTF8(`
from sys import version_info
pyversion = f"python{version_info.major}.{version_info.minor}"
import shutil
shutil.unpack_archive("/pyodide_py.tar", f"/lib/{pyversion}/site-packages/")
del shutil
import importlib
importlib.invalidate_caches()
del importlib
    `);if(n._PyRun_SimpleString(h))throw new Error("OOPS!");n._free(h),n.FS.unlink("/pyodide_py.tar")}(yield o),n._pyodide_init();let p=_t(r);var c;return p.version.includes("dev")||(c=`https://pyodide-cdn2.iodide.io/${p.version}/full/`,be=c),yield a,r.fullStdLib&&(yield te(["distutils"])),p.runPython("print('Python initialization complete')"),p})}l.saveState=()=>l.pyodide_py._state.save_state(),l.restoreState=t=>l.pyodide_py._state.restore_state(t),l.runPythonInternal=function(t){return l._pyodide._base.eval_code(t,Ie)};const ye=Symbol("pyodide.stdout"),me=Symbol("pyodide.stderr"),U=Symbol("pyodide");var gt=`from asyncio import sleep
from js import prompt
import re
from random import randint

# Four uses of story.ask():
  # ask(question,option 1,option 2,...) returns the key of the option selected.
  # ask(question,list of options) returns the key of the option selected.
  # ask(question) returns True or False based on whether the user selected Yes or No.
  # ask(question,answer as str) returns True or False based on whether user's answer == answer given to function.

class story:
  @staticmethod
  def removeIndent(text):
    text = text.split("\\n")

    i = None
    for line in text:
      if line == "":
        continue
      spaces = len(re.findall(r"^ *",line)[0])
      if i is None:
        i = spaces
      else:
        i = min([i,spaces])
    if i is None:
      i = 0

    for j in range(0,len(text)):
      text[j] = text[j][i:]

    return "\\n".join(text)
  @staticmethod
  def number(text):
    try:
      float(text)
    except:
      return False

    return float(text)
  @staticmethod
  async def ask(question = "",*answers):
    answers = list(answers)
    if len(answers) == 0: # For ask(question)
      answers = ["Yes","No"]
      print("")
      print(question)
      while True:
        a = await prompt("Enter Yes or No:", True)
        if a.lower() == "yes":
          return True
        elif a.lower() == "no":
          return False
    elif len(answers) == 1:
      if type(answers[0]) is list: # For ask(question,list of options)
        answers = answers[0]
      elif type(answers[0]) is str: # For ask(question,answer as str)
        print("")
        print(question)
        a = await prompt("Answer:", True)
        b = answers[0]
        if a.lower() == b.lower():
          return True
        else:
          return False
    print("")
    print(question)
    for z in range(0,len(answers)):
      print("  %s: %s" %(z,answers[z]))
    boolean = True
    while boolean:
      answer = await prompt("Enter a key:", True)
      try:
        int(answer,10)
      except:
        continue
      intAnswer = int(answer,10)
      if 0 <= intAnswer and intAnswer < len(answers):
        return intAnswer
  @staticmethod
  async def asknumber(question = ""):
    print(" ")
    print(question)

    async def ite():
      a = await prompt("Enter a number:", True)
      try:
        float(a)
      except:
        return await ite()

      if str(float(a)) == "nan":
        return await ite()

      a = float(a)
      if float(int(a)) == float(a):
        return int(a)
      else:
        return float(a)

    return await ite()
  @staticmethod
  async def askinput(question = ""):
    print(" ")
    print(question)

    async def ite():
      a = await prompt("Enter some text:", True)
      if a == "":
        return await ite()

      return a

    return await ite()

  def __init__(self,text,settings = dict()):
    text = text.replace("\\r\\n","\\n").replace("\\r","\\n").replace("\\t","  ")

    globalvars = dict()
    variables = dict()
    states = dict()

    regex = r"(?:^(@global|) *\\$([A-Za-z0-9_]+) *= *(.+)$)|(?:^([A-Za-z0-9_]+)$\\n(( +).+$(?:\\n^\\6 *.+$)*))"
    parsed = re.findall(regex,text,re.M)
    for item in parsed:
      if item[1] != "":
        if item[0] == "@global":
          globalvars[item[1]] = item[2]
        elif item[1] in globalvars.keys():
          globalvars[item[1]] = item[2]
        else:
          variables[item[1]] = item[2]
      elif item[3] != "":
        states[item[3]] = story.removeIndent(item[4])

    for i in variables.keys():
      if i in settings:
        variables[i] = settings[i]
    for i in globalvars.keys():
      if i in settings:
        globalvars[i] = settings[i]

    self.globalVars = globalvars.copy()
    self.localVars = variables.copy()
    self.runfrom = "start"
    self.reference = "start"
    self.state = "start"
    self.states = states.copy()
    self.source = {
      "globalVars": globalvars.copy(),
      "localVars": variables.copy(),
      "text": text
    }
  def newContext(self,runfrom = "start",state = "start"):
    new = story(self.source["text"])
    new.localVars = self.source["localVars"].copy()
    new.globalVars = self.globalVars
    new.runfrom = runfrom
    new.state = state
    return new

  def text(self,text):
    variables = self.globalVars.copy()
    variables.update(self.localVars)

    if len(text) >= 1 and text[0:1] == " ":
      return text
    else:
      text = text.replace("{@runfrom}",self.runfrom)
      text = text.replace("@runfrom",self.runfrom)
      text = text.replace("{@reference}",self.reference)
      text = text.replace("@reference",self.reference)

      for var in variables.keys():
        text = text.replace("{$" + var + "}",variables[var])
        text = text.replace("$" + var,variables[var])

      return text

  async def runState(self,state):
    if state in self.states.keys():
      return await self.run(self.states[state])
  async def run(self,code = None):
    if code is None:
      return await self.runState(self.state)
    source = code
    def others(x):
      if len(code.split("\\n")) > x:
        other = []
        other.extend(code.split("\\n")[x:])
        return "\\n".join(other)
      else:
        return None
    line = code.split("\\n")[0]
    rest = others(1)
    ret = None

    ifblock = re.match(r"(@if +(.+)((?:\\n +.+)+)((?:\\n@elseif +.+(?:\\n +.+)+)*(?:\\n@else(?:\\n +.+)+)?))",source)
    menublock = re.match(r"(@menu( +.+)?(?:\\n( +)[^ \\n\\r].*(?:\\n\\3 +.*)+)+)",source)
    contextblock = re.match(r"(@context((?:\\n +.*)+))",source)
    repeatblock = re.match(r"(@repeat +([1-9][0-9]?)((?:\\n +.*)+))",source)
    whileblock = re.match(r"(@(do|)while +(.+)((?:\\n +.*)+))",source)
    forblock = re.match(r"(@for +(.*?) *; *(.*?) *; *(.*?) *((?:\\n +.*)+))",source)

    if line == "" or line == "@base" or line == "@pass":
      pass
    elif line == "@break":
      return "BREAK"
    elif line == "@continue":
      return "CONTINUE"
    elif line[0:1] == " ":
      print(line.lstrip(" "))
      await prompt("Click to continue -->", False)
    elif len(line) > 8 and line[0:8] == "@nowait ":
      if line[8:9] == " ":
        print(line[9:])
      else:
        print(self.text(line[8:]))
    elif line == "@stop" or line == "@exit context":
      return "STOP"
    elif line == "@kill" or line == "@exit story":
      return "KILL"
    elif re.match(r"^\\$([A-Za-z0-9_]+) *= *@(input|number)(?: +(.+))?$",line):
      ret = await self.runVarInput(line)
    elif re.match(r"^\\$([A-Za-z0-9_]+) *= *@random +([1-9][0-9]{0,5}) *, *([1-9][0-9]{0,5})$",line,re.M):
      ret = self.runVarRand(line)
    elif re.match(r"^\\$[A-Za-z0-9_]+ *(?:[-+*/.]|)= *.+$",line,re.M):
      ret = self.runVarChange(line)
    elif re.match(r"^\\$([A-Za-z0-9_]+) *(\\+\\+|--)$",line,re.M):
      ret = self.runVarChange(line)
    elif re.match(r"^@(?:sleep|wait|timeout) +(10|[1-9]|[0-9]?\\.[1-9]|[0-9]?\\.[0-9][1-9])$",line,re.M):
      ret = await self.runSleep(line)
    elif contextblock:
      contextlength = len(contextblock.group(1).split("\\n"))
      rest = others(contextlength)
      contextblock = contextblock.group(1)
      ret = await self.runContextBlock(contextblock)
    elif repeatblock:
      repeatlength = len(repeatblock.group(1).split("\\n"))
      rest = others(repeatlength)
      repeatblock = repeatblock.group(1)
      ret = await self.runRepeatBlock(repeatblock)
    elif whileblock:
      whilelength = len(whileblock.group(1).split("\\n"))
      rest = others(whilelength)
      whileblock = whileblock.group(1)
      ret = await self.runWhileBlock(whileblock)
    elif ifblock:
      iflength = len(ifblock.group(1).split("\\n"))
      rest = others(iflength)
      ifblock = ifblock.group(1)
      ret = await self.runIfBlock(ifblock)
    elif forblock:
      forlength = len(forblock.group(1).split("\\n"))
      rest = others(forlength)
      forblock = forblock.group(1)
      ret = await self.runForBlock(forblock)
    elif menublock:
      menulength = len(menublock.group(1).split("\\n"))
      rest = others(menulength)
      menublock = menublock.group(1)
      ret = await self.runMenuBlock(menublock)
    elif re.match(r"^@run *[A-Za-z0-9_]+$",line,re.M):
      ret = await self.runRun(line)
    elif re.match(r"^@goto *[A-Za-z0-9_]+$",line,re.M):
      ret = await self.runGoto(line)
    else:
      print(self.text(line))
      await prompt("Press Enter to continue...", False)

    if rest is not None:
      ret = await self.run(rest)
      return ret
    else:
      return ret

  async def runSleep(self,code):
    regex = r"^@(?:sleep|wait|timeout) +(10|[1-9]|[0-9]?\\.[1-9]|[0-9]?\\.[0-9][1-9])$"
    match = re.match(regex,code)
    if match:
      await sleep(float(match.group(1)))

    return False
  def runVarChange(self,code):
    regex = r"^\\$([A-Za-z0-9_]+) *([-+*/.]|)= *(.+)$"
    match = re.findall(regex,code)
    if len(match) == 1:
      match = match[0]
      var = match[0]
      oper = match[1]
      val = self.text(match[2])

      if self.varExists(var) is False:
        if oper == "":
          self.localVars[var] = val
          return True
        else:
          return False

      if oper == ".":
        val = str(self.getVariable(var)) + str(val)

      if oper == "." or oper == "":
        if var in self.localVars.keys():
          self.localVars[var] = str(val)
          return True
        elif var in self.globalVars.keys():
          self.globalVars[var] = str(val)
          return True
        else:
          return False

      if oper != "":
        numvar = story.number(self.getVariable(var))
        numval = story.number(val)
        if numvar is False or numval is False:
          return False

        if oper == "+":
          val = numvar + numval
        elif oper == "-":
          val = numvar - numval
        elif oper == "*":
          val = numvar * numval
        elif oper == "/":
          val = numvar / numval

        if float(int(val)) == float(val):
          val = str(int(val))

      if var in self.localVars.keys():
        self.localVars[var] = str(val)
        return True
      elif var in self.globalVars.keys():
        self.globalVars[var] = str(val)
        return True
    else:
      regex = r"^\\$([A-Za-z0-9_]+) *(\\+\\+|--)$"
      match = re.findall(regex,code)
      if len(match) == 1:
        match = match[0]
        var = match[0]
        oper = match[1]
        if oper == "++":
          return self.runVarChange("$" + var + " += 1")
        elif oper == "--":
          return self.runVarChange("$" + var + " -= 1")

    return False
  async def runVarInput(self,code):
    match = re.findall(r"^\\$([A-Za-z0-9_]+) *= *@(input|number)(?: +(.+))?$",code)
    if len(match) >= 1:
      match = match[0]

      var = match[0]
      tpe = match[1]
      a = ""

      q = match[2]
      if q is None:
        q = ""
      if q == "":
        q = "Set $" + var

      if tpe == "input":
        a = str(await self.askinput(q))
      elif tpe == "number":
        a = str(await self.asknumber(q))

      if self.varExists(var):
        self.setVariable(var,a)
      else:
        self.localVars[var] = a

      print(" ")
      return True
    return False
  def runVarRand(self,code):
    match = re.match(r"^\\$([A-Za-z0-9_]+) *= *@random +([1-9][0-9]{0,5}) *, *([1-9][0-9]{0,5})$",code)
    if match:
      var = match.group(1)
      rmin = int(match.group(2))
      rmax = int(match.group(3))
      rand = randint(rmin,rmax)

      if self.varExists(var):
        self.setVariable(var,str(rand))
      else:
        self.localVars[var] = str(rand)
  async def runIfBlock(self,code):
    regex = r"@if +(.+)((?:\\n +.+)+)((?:\\n@elseif +.+(?:\\n +.+)+)*(?:\\n@else(?:\\n +.+)+)?)"
    match = re.findall(regex,code,re.M)
    if len(match) >= 1:
      match = match[0]

      condition = match[0]
      code = match[1]
      try:
        other = match[2]
      except:
        other = ""

      if self.test(condition):
        return await self.run(story.removeIndent(code[1:]))
      elif other == "":
        return False
      elif other[0:7] == "\\n@else\\n":
        return await self.run(story.removeIndent(other[7:]))
      elif other[0:9] == "\\n@elseif ":
        return await self.runIfBlock("@if " + other[9:])

    return False
  async def runMenuBlock(self,code):
    regex = r"(@menu(?: (.+))?(?:\\n( +)[^ \\n\\r].*(?:\\n\\3 +.*)+)+)"
    subex = r"(?:^([^ \\n\\r].*)$((?:\\n^ +.*$)+))+"

    match = re.findall(regex,code)
    if len(match) >= 1:
      match = match[0]

      question = match[1]
      if question == "" or question is None:
        question = ""
      else:
        question = self.text(question)
      other = story.removeIndent("\\n".join(match[0].split("\\n")[1:]))

      items = re.findall(subex,other,re.M)
      options = list()
      codes = list()
      for i in items:
        options.append(self.text(i[0]))
        codes.append(story.removeIndent(i[1][1:]))

      i = await story.ask(question,options)
      print(" ")
      return await self.run(codes[i])
    return False
  async def runContextBlock(self,code):
    regex = r"(@context((?:\\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ctx = self.newContext()
      ret = await ctx.run(story.removeIndent(match.group(2)[1:]))
      if ret == "KILL":
        return "KILL"
      else:
        return False
    return False
  async def runRepeatBlock(self,code):
    regex = r"(@repeat +([1-9][0-9]?)((?:\\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ret = ""
      code = story.removeIndent(match.group(3)[1:])

      for i in range(0,int(match.group(2))):
        if ret == "STOP" or ret == "KILL":
          return ret

        ret = await self.run(code)

      if ret == "STOP" or ret == "KILL":
        return ret
      else:
        return False
    return False
  async def runWhileBlock(self,code):
    regex = r"(@(do|)while +(.+)((?:\\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ret = ""
      cond = match.group(3)
      code = story.removeIndent(match.group(4)[1:])

      do = match.group(2)
      if do == "do":
        do = True
      else:
        do = False

      if do:
        ret = await self.run(code)
      while self.test(cond):
        if ret == "STOP" or ret == "KILL":
          return ret

        ret = await self.run(code)

      if ret == "STOP" or ret == "KILL":
        return ret
      else:
        return False
    return False
  async def runForBlock(self,code):
    regex = r"(@for +(.*?) *; *(.*?) *; *(.*?) *((?:\\n +.*)+))"

    match = re.match(regex,code)
    if match:
      ret = ""
      start = match.group(2)
      cond = match.group(3)
      inc = match.group(4)
      code = story.removeIndent(match.group(5)[1:])

      if start:
        self.runVarChange(start.strip())

      boo = True
      if cond:
        boo = self.test(cond.strip())
      while boo:
        if ret == "STOP" or ret == "KILL":
          return ret

        ret = await self.run(code)
        if inc:
          self.runVarChange(inc.strip())

        boo = self.test(cond.strip())

      if ret == "STOP" or ret == "KILL":
        return ret
      else:
        return False
    return False
  async def runRun(self,code):
    match = re.findall("^@run *([A-Za-z0-9_]+)$",code,re.M)
    if len(match) >= 1:
      return await self.runState(match[0])
    else:
      return False
  async def runGoto(self,code):
    match = re.findall("^@goto *([A-Za-z0-9_]+)$",code,re.M)
    if len(match) >= 1:
      await self.runState(match[0])
      return "STOP"
    else:
      return "STOP"

  def varExists(self,var):
    if var in self.localVars.keys():
      return True
    elif var in self.globalVars.keys():
      return True
    else:
      return False
  def getVariable(self,var):
    if var in self.localVars.keys():
      return self.localVars[var]
    elif var in self.globalVars.keys():
      return self.globalVars[var]
    else:
      return False
  def setVariable(self,var,val = None):
    if var in self.localVars.keys():
      self.localVars[var] = str(val)
    elif var in self.globalVars.keys():
      self.globalVars[var] = str(val)
    else:
      self.localVars[var] = str(val)

  def simpleCondition(self,condition):
    variables = self.globalVars.copy()
    variables.update(self.localVars)

    match = re.findall(r"^ *\\$([A-Za-z0-9_]+) *(<=|>=|<|>|!=|=) *(.+) *$",condition)
    if len(match) == 1:
      if not (match[0][0] in variables):
        return False

      match = match[0]
      var = variables[match[0]]
      varnum = story.number(var)
      oper = match[1]
      val = self.text(match[2])
      num = story.number(val)

      if oper == "<" or oper == ">" or oper == "<=" or oper == ">=":
        if num is False or varnum is False:
          return False

      if oper == "<" and varnum < num:
        return True
      elif oper == ">" and varnum > num:
        return True
      elif oper == "<=" and varnum <= num:
        return True
      elif oper == ">=" and varnum >= num:
        return True

      if oper == "=" and var == val:
        return True
      elif oper == "!=" and var != val:
        return True

      return False

    match = re.findall(r"^ *@(runfrom|reference) *(!=|=) *(.+) *$",condition)
    if len(match) == 1:
      match = match[0]

      if match[0] == "runfrom":
        var = self.runfrom
      elif match[0] == "reference":
        var = self.reference
      else:
        return False
      oper = match[1]
      val = match[2]

      if oper == "=" and var == val:
        return True
      elif oper == "!=" and var != val:
        return True

      return False

    return False
  def test(self,condition):
    ors = condition.split(" or ")
    o = False
    for c in ors:
      c = c.strip()

      ands = c.split(" and ")
      b = True
      for a in ands:
        a = a.strip()
        if a[0:4] == "not ":
          a = a[4:]
          b = b and (not self.simpleCondition(a))
        else:
          b = b and self.simpleCondition(a)

      o = o or b

    return o
`;const vt=J({__name:"Viewer1",props:{code:null},setup(t){const e=t,{console:r,field:a,messages:o,onKey:i,onSelect:s,onSubmit:f,placeholder:p}=qe();window[me]=r.error,window[ye]=r.log,window[U]||(window[U]=G({stderr:u=>window[me](u),stdout:u=>window[ye](u),stdin:()=>prompt()||"",indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"}));async function c(){r.clear(),p.value="",Object.assign(window,{prompt:r.prompt}),(await window[U]).runPythonAsync(`${gt}
await story(
"""
${e.code}
""").run()`)}return c(),Ce(De(e,"code"),Me(c,1e3)),(u,y)=>(Y(),X(Ue,{field:$(a),"onUpdate:field":y[0]||(y[0]=h=>Z(a)?a.value=h:null),messages:$(o),"onUpdate:messages":y[1]||(y[1]=h=>Z(o)?o.value=h:null),placeholder:$(p),onKey:$(i),onSelect:$(s),onSubmit:$(f)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),It=J({__name:"v1-editor",setup(t){const e=Ve(`@global $money = 500
@global $eggs = 0
@global $name = (no name)

start
  $name = @input What is your name?
  @run market

market
  $name, you have $$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      Eggs
        @run eggs
      Go Back
        @pass
    @run market

eggs
  $egg = @number How many dozens do you want to buy?
  $eggprice = 6
  $eggprice *= $egg
  @nowait $egg dozen eggs will cost $$eggprice.
  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      Yes
        $money -= $eggprice
        $eggs += $egg
      No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);return(r,a)=>(Y(),X(je,null,{default:Be(()=>[oe(Ze,{modelValue:$(e),"onUpdate:modelValue":a[0]||(a[0]=o=>Z(e)?e.value=o:null),round:""},null,8,["modelValue"]),oe(vt,{code:$(e)},null,8,["code"])]),_:1}))}});export{It as default};
