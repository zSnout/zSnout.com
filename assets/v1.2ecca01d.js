import{u as Le,D as Re}from"./DocumentDisplay.2442b685.js";import{_ as Ve,H as je}from"./Modal.8dbeb85d.js";import{a as ne,A as ze,u as Ce,C as Me}from"./AceEditor.f2502dd5.js";import{d as J,c as Y,o as X,aB as w,u as $,y as Z,w as oe,b as C}from"./index.ec35429f.js";import{u as De}from"./useLocationHash.87d245a2.js";import"./Labeled.eeaecd0f.js";import"./Field.137761ad.js";const Be=J({__name:"Editor1",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(r){return ne.define("ace/mode/storymatic1",(e,t)=>{const a=e("ace/lib/oop"),o=e("ace/mode/text").Mode,i=e("ace/mode/storymatic1_highlight_rules").StorymaticHighlightRules,s=function(){this.HighlightRules=i};a.inherits(s,o),t.Mode=s}),ne.define("ace/mode/storymatic1_highlight_rules",(e,t)=>{const a=e("ace/lib/oop"),o=e("ace/mode/text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:["keyword.other","text","variable.other","text"],regex:/^(@global)( +)(\$[A-Za-z0-9_]+)( *= *)/,next:"startString"},{token:["variable.other","text"],regex:/^(\$[A-Za-z0-9_]+)( *= *)/,next:"startString"},{token:"language.constant.character",regex:/^[A-Za-z0-9_]+$/,next:"code"},{defaultToken:"invalid.illegal"}],startString:[{regex:/$/,next:"start"},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:"variable.other",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],code:[{regex:/^$/,next:"start"},{token:"text",regex:/^ +$/},{token:["text","keyword.other","text"],regex:/^( +)(@nowait)( +)/,next:"codeText"},{token:["text","variable.other","keyword.operator","keyword.other","string.unquoted","keyword.operator","string.unquoted"],regex:/^( +)(\$[A-Za-z0-9_]+)( *= *)(@random +)([1-9][0-9]{0,5})( *, *)([1-9][0-9]{0,5})$/},{token:["text","variable.other","text","keyword.operator","text","keyword.other","text"],regex:/^( +)(\$[A-Za-z0-9_]+)( *)(\+=|-=|\*=|\/=|\.=|=)( *)(@input|@number|)( *)/,next:"codeString"},{token:["text","keyword.control","text"],regex:/^( +)(@(?:else)?if)( +)/,next:"codeCondition"},{token:["text","keyword.control","text","language.constant.character"],regex:/^( +)(@run|@goto)( +)([A-Za-z0-9_]+)$/},{token:["text","keyword.control"],regex:/^( +)(@context|@base|@pass|@stop|@kill|@else)$/},{token:["text","keyword.control","text","string.unquoted"],regex:/^( +)(@(?:sleep|wait|timeout))( +)(10|[1-9]|[0-9]?\.[1-9]|[0-9]?\.[0-9][1-9])$/},{token:["text","keyword.control","text"],regex:/^( +)(@for)( +)/,next:"forDefn"},{token:["text","keyword.control","text"],regex:/^( +)(@(?:do)?while)( +)/,next:"codeCondition"},{token:["text","keyword.control","text","string.unquoted"],regex:/^( +)(@repeat)( +)([1-9][0-9]?)$/,next:"code"},{token:["text","keyword.control","text"],regex:/^( +)(@menu)( +)/,next:"codeString"},{token:["text","keyword.control"],regex:/^( +)(@menu)$/,next:"code"},{token:"text",regex:/^ +/,next:"codeText"},{defaultToken:"text"}],codeText:[{regex:/$/,next:"code"},{token:["keyword.operator.bold","variable.other.bold","keyword.operator.bold"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:"variable.other.bold",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator.bold","variable.other.bold","keyword.operator.bold"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other.bold",regex:/@runfrom|@reference/},{defaultToken:"bold"}],codeString:[{regex:/$/,next:"code"},{token:"variable.other",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],codeCondition:[{regex:/$/,next:"code"},{token:"keyword.operator",regex:/<=|>=|<|>|!=|=|or|and/},{token:"variable.other",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],forDefn:[{token:"text",regex:/;/,next:"forCondition"},{token:"variable.other",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other",regex:/@runfrom|@reference/},{token:"keyword.operator",regex:/\+=|-=|\*=|\/=|\.=|=/},{defaultToken:"string.unquoted"}],forCondition:[{token:"text",regex:/;/,next:"forInc"},{token:"keyword.operator",regex:/<=|>=|<|>|!=|=|or|and/},{token:"variable.other",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other",regex:/@runfrom|@reference/},{defaultToken:"string.unquoted"}],forInc:[{regex:/$/,next:"code"},{token:"variable.other",regex:/\$[A-Za-z0-9_]+/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(\$[A-Za-z0-9_]+)(})/},{token:["keyword.operator","variable.other","keyword.operator"],regex:/({)(@runfrom|@reference)(})/},{token:"variable.other",regex:/@runfrom|@reference/},{token:"keyword.operator",regex:/\+=|-=|\*=|\/=|\.=|=|\+\+|--/},{defaultToken:"string.unquoted"}]}};a.inherits(i,o),t.StorymaticHighlightRules=i}),(e,t)=>{var a;return X(),Y(ze,{modelValue:r.modelValue,placeholder:(a=r.placeholder)!=null?a:"Write a story...",readonly:r.readonly,round:r.round,mode:"storymatic1",onInit:t[0]||(t[0]=o=>e.$emit("init",o)),onSave:t[1]||(t[1]=o=>e.$emit("save",o)),"onUpdate:modelValue":t[2]||(t[2]=o=>e.$emit("update:modelValue",o))},null,8,["modelValue","placeholder","readonly","round"])}}});function x(r,e,t,a){return new(t||(t=Promise))(function(o,i){function s(c){try{p(a.next(c))}catch(u){i(u)}}function d(c){try{p(a.throw(c))}catch(u){i(u)}}function p(c){var u;c.done?o(c.value):(u=c.value,u instanceof t?u:new t(function(h){h(u)})).then(s,d)}p((a=a.apply(r,e||[])).next())})}var T,ae,M,ie,ye={exports:{}};ye.exports=function(){function r(f){return!isNaN(parseFloat(f))&&isFinite(f)}function e(f){return f.charAt(0).toUpperCase()+f.substring(1)}function t(f){return function(){return this[f]}}var a=["isConstructor","isEval","isNative","isToplevel"],o=["columnNumber","lineNumber"],i=["fileName","functionName","source"],s=["args"],d=["evalOrigin"],p=a.concat(o,i,s,d);function c(f){if(f)for(var _=0;_<p.length;_++)f[p[_]]!==void 0&&this["set"+e(p[_])](f[p[_]])}c.prototype={getArgs:function(){return this.args},setArgs:function(f){if(Object.prototype.toString.call(f)!=="[object Array]")throw new TypeError("Args must be an Array");this.args=f},getEvalOrigin:function(){return this.evalOrigin},setEvalOrigin:function(f){if(f instanceof c)this.evalOrigin=f;else{if(!(f instanceof Object))throw new TypeError("Eval Origin must be an Object or StackFrame");this.evalOrigin=new c(f)}},toString:function(){var f=this.getFileName()||"",_=this.getLineNumber()||"",g=this.getColumnNumber()||"",k=this.getFunctionName()||"";return this.getIsEval()?f?"[eval] ("+f+":"+_+":"+g+")":"[eval]:"+_+":"+g:k?k+" ("+f+":"+_+":"+g+")":f+":"+_+":"+g}},c.fromString=function(f){var _=f.indexOf("("),g=f.lastIndexOf(")"),k=f.substring(0,_),z=f.substring(_+1,g).split(","),O=f.substring(g+1);if(O.indexOf("@")===0)var A=/@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(O,""),F=A[1],P=A[2],b=A[3];return new c({functionName:k,args:z||void 0,fileName:F,lineNumber:P||void 0,columnNumber:b||void 0})};for(var u=0;u<a.length;u++)c.prototype["get"+e(a[u])]=t(a[u]),c.prototype["set"+e(a[u])]=function(f){return function(_){this[f]=Boolean(_)}}(a[u]);for(var h=0;h<o.length;h++)c.prototype["get"+e(o[h])]=t(o[h]),c.prototype["set"+e(o[h])]=function(f){return function(_){if(!r(_))throw new TypeError(f+" must be a Number");this[f]=Number(_)}}(o[h]);for(var m=0;m<i.length;m++)c.prototype["get"+e(i[m])]=t(i[m]),c.prototype["set"+e(i[m])]=function(f){return function(_){this[f]=String(_)}}(i[m]);return c}();var he=(T=ye.exports,ae=/(^|@)\S+:\d+/,M=/^\s*at .*(\S+:\d+|\(native\))/m,ie=/^(eval@)?(\[native code])?$/,{parse:function(r){if(r.stacktrace!==void 0||r["opera#sourceloc"]!==void 0)return this.parseOpera(r);if(r.stack&&r.stack.match(M))return this.parseV8OrIE(r);if(r.stack)return this.parseFFOrSafari(r);throw new Error("Cannot parse given Error object")},extractLocation:function(r){if(r.indexOf(":")===-1)return[r];var e=/(.+?)(?::(\d+))?(?::(\d+))?$/.exec(r.replace(/[()]/g,""));return[e[1],e[2]||void 0,e[3]||void 0]},parseV8OrIE:function(r){return r.stack.split(`
`).filter(function(e){return!!e.match(M)},this).map(function(e){e.indexOf("(eval ")>-1&&(e=e.replace(/eval code/g,"eval").replace(/(\(eval at [^()]*)|(\),.*$)/g,""));var t=e.replace(/^\s+/,"").replace(/\(eval code/g,"("),a=t.match(/ (\((.+):(\d+):(\d+)\)$)/),o=(t=a?t.replace(a[0],""):t).split(/\s+/).slice(1),i=this.extractLocation(a?a[1]:o.pop()),s=o.join(" ")||void 0,d=["eval","<anonymous>"].indexOf(i[0])>-1?void 0:i[0];return new T({functionName:s,fileName:d,lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseFFOrSafari:function(r){return r.stack.split(`
`).filter(function(e){return!e.match(ie)},this).map(function(e){if(e.indexOf(" > eval")>-1&&(e=e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,":$1")),e.indexOf("@")===-1&&e.indexOf(":")===-1)return new T({functionName:e});var t=/((.*".+"[^@]*)?[^@]*)(?:@)/,a=e.match(t),o=a&&a[1]?a[1]:void 0,i=this.extractLocation(e.replace(t,""));return new T({functionName:o,fileName:i[0],lineNumber:i[1],columnNumber:i[2],source:e})},this)},parseOpera:function(r){return!r.stacktrace||r.message.indexOf(`
`)>-1&&r.message.split(`
`).length>r.stacktrace.split(`
`).length?this.parseOpera9(r):r.stack?this.parseOpera11(r):this.parseOpera10(r)},parseOpera9:function(r){for(var e=/Line (\d+).*script (?:in )?(\S+)/i,t=r.message.split(`
`),a=[],o=2,i=t.length;o<i;o+=2){var s=e.exec(t[o]);s&&a.push(new T({fileName:s[2],lineNumber:s[1],source:t[o]}))}return a},parseOpera10:function(r){for(var e=/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,t=r.stacktrace.split(`
`),a=[],o=0,i=t.length;o<i;o+=2){var s=e.exec(t[o]);s&&a.push(new T({functionName:s[3]||void 0,fileName:s[2],lineNumber:s[1],source:t[o]}))}return a},parseOpera11:function(r){return r.stack.split(`
`).filter(function(e){return!!e.match(ae)&&!e.match(/^Error created at/)},this).map(function(e){var t,a=e.split("@"),o=this.extractLocation(a.pop()),i=a.shift()||"",s=i.replace(/<anonymous function(: (\w+))?>/,"$2").replace(/\([^)]*\)/g,"")||void 0;i.match(/\(([^)]*)\)/)&&(t=i.replace(/^[^(]+\(([^)]*)\)$/,"$1"));var d=t===void 0||t==="[arguments not available]"?void 0:t.split(",");return new T({functionName:s,args:d,fileName:o[0],lineNumber:o[1],columnNumber:o[2],source:e})},this)}});let n={noImageDecoding:!0,noAudioDecoding:!0,noWasmDecoding:!1,preloadedWasm:{},preRun:[]},l={};n.API=l;let y={};n.hiwire=y;let Q={};function qe(r,e,t){e&&(n.print=e),t&&(n.printErr=t),r&&n.preRun.push(function(){n.FS.init(function(a){const o=new TextEncoder;let i=new Uint8Array(0),s=-1;function d(){try{if(s===-1){let p=a();if(p==null)return null;if(typeof p!="string")throw new TypeError(`Expected stdin to return string, null, or undefined, got type ${typeof p}.`);p.endsWith(`
`)||(p+=`
`),i=o.encode(p),s=0}if(s<i.length){let p=i[s];return s++,p}return s=-1,null}catch(p){throw console.error("Error thrown in stdin:"),console.error(p),p}}return d}(r),null,null)})}l.tests=Q;const S=typeof process!="undefined"&&process.release&&process.release.name==="node"&&process.browser===void 0;let me,H,_e,R,V,N;if(V=S?function(r,e){return x(this,void 0,void 0,function*(){if(e.startsWith("file://")&&(e=e.slice(7)),e.includes("://")){let t=yield H(e);if(!t.ok)throw new Error(`Failed to load '${e}': request failed.`);return yield t.arrayBuffer()}{const t=yield R.readFile(`${r}${e}`);return new Uint8Array(t.buffer,t.byteOffset,t.byteLength)}})}:function(r,e){return x(this,void 0,void 0,function*(){const t=new URL(r,location),a=new URL(e,t);let o=yield fetch(a);if(!o.ok)throw new Error(`Failed to load '${a}': request failed.`);return new Uint8Array(yield o.arrayBuffer())})},globalThis.document)N=r=>x(void 0,void 0,void 0,function*(){return yield w(()=>import(r),[])});else if(globalThis.importScripts)N=r=>x(void 0,void 0,void 0,function*(){try{globalThis.importScripts(r)}catch(e){if(!(e instanceof TypeError))throw e;yield w(()=>import(r),[])}});else{if(!S)throw new Error("Cannot determine runtime environment");N=function(r){return x(this,void 0,void 0,function*(){r.startsWith("file://")&&(r=r.slice(7)),r.includes("://")?_e.runInThisContext(yield(yield H(r)).text()):yield w(()=>import(me.resolve(r)),[])})}}function ee(r){return!!r&&r.$$!==void 0&&r.$$.type==="PyProxy"}l.isPyProxy=ee,globalThis.FinalizationRegistry?n.finalizationRegistry=new FinalizationRegistry(([r,e])=>{e.leaked=!0,ge(e);try{n._Py_DecRef(r)}catch(t){l.fatal_error(t)}}):n.finalizationRegistry={register(){},unregister(){}};let D,K,B=new Map;function v(r){let e=r.$$.ptr;if(e===0)throw new Error(r.$$.destroyed_msg);return e}n.pyproxy_alloc_map=B,n.enable_pyproxy_allocation_tracing=function(){D=function(r){B.set(r,Error().stack)},K=function(r){B.delete(r)}},n.disable_pyproxy_allocation_tracing=function(){D=function(r){},K=function(r){}},n.disable_pyproxy_allocation_tracing(),n.pyproxy_new=function(r,e){let t,a=n._pyproxy_getflags(r),o=n.getPyProxyClass(a);256&a?(t=Reflect.construct(Function,[],o),delete t.length,delete t.name,t.prototype=void 0):t=Object.create(o.prototype),!e&&(e={cacheId:y.new_value(new Map),refcnt:0}),e.refcnt++,Object.defineProperty(t,"$$",{value:{ptr:r,type:"PyProxy",cache:e}}),n._Py_IncRef(r);let i=new Proxy(t,Je);return D(i),n.finalizationRegistry.register(i,[r,e],i),i};let se=new Map;n.getPyProxyClass=function(r){const e=[[1,Ue],[2,Ze],[4,He],[8,Ke],[16,We],[32,Ge],[64,Ye],[128,Qe],[256,ve]];let t=se.get(r);if(t)return t;let a={};for(let[s,d]of e)r&s&&Object.assign(a,Object.getOwnPropertyDescriptors(d.prototype));a.constructor=Object.getOwnPropertyDescriptor(le.prototype,"constructor"),Object.assign(a,Object.getOwnPropertyDescriptors({$$flags:r}));let o=Object.create(le.prototype,a);function i(){}return i.prototype=o,se.set(r,i),i},n.PyProxy_getPtr=v;function ge(r){if(r&&(r.refcnt--,r.refcnt===0)){let e=y.pop_value(r.cacheId);for(let t of e.values()){const a=y.pop_value(t);r.leaked||n.pyproxy_destroy(a,"This borrowed attribute proxy was automatically destroyed in the process of destroying the proxy it was borrowed from. Try using the 'copy' method.")}}}n.pyproxy_destroy=function(r,e){if(r.$$.ptr===0)return;let t=v(r);n.finalizationRegistry.unregister(r),e=e||"Object has already been destroyed";let a,o=r.type;try{a=r.toString()}catch(i){if(i.pyodide_fatal_error)throw i}r.$$.ptr=0,e+=`
The object was of type "${o}" and `,e+=a?`had repr "${a}"`:"an error was raised when trying to generate its repr",r.$$.destroyed_msg=e,ge(r.$$.cache);try{n._Py_DecRef(t),K(r)}catch(i){l.fatal_error(i)}},n.callPyObjectKwargs=function(r,...e){let t=e.pop(),a=e.length,o=Object.keys(t),i=Object.values(t),s=o.length;e.push(...i);let d,p=y.new_value(e),c=y.new_value(o);try{d=n.__pyproxy_apply(r,p,a,c,s)}catch(h){l.fatal_error(h)}finally{y.decref(p),y.decref(c)}d===0&&n._pythonexc2js();let u=y.pop_value(d);return u&&u.type==="coroutine"&&u._ensure_future&&u._ensure_future(),u},n.callPyObject=function(r,...e){return n.callPyObjectKwargs(r,...e,{})};class le{constructor(){throw new TypeError("PyProxy is not a constructor")}get[Symbol.toStringTag](){return"PyProxy"}get type(){let e=v(this);return y.pop_value(n.__pyproxy_type(e))}toString(){let e,t=v(this);try{e=n.__pyproxy_repr(t)}catch(a){l.fatal_error(a)}return e===0&&n._pythonexc2js(),y.pop_value(e)}destroy(e){n.pyproxy_destroy(this,e)}copy(){let e=v(this);return n.pyproxy_new(e,this.$$.cache)}toJs({depth:e=-1,pyproxies:t,create_pyproxies:a=!0,dict_converter:o,default_converter:i}={}){let s,d,p=v(this),c=0,u=0;d=a?t?y.new_value(t):y.new_value([]):0,o&&(c=y.new_value(o)),i&&(u=y.new_value(i));try{s=n._python2js_custom(p,e,d,c,u)}catch(h){l.fatal_error(h)}finally{y.decref(d),y.decref(c),y.decref(u)}return s===0&&n._pythonexc2js(),y.pop_value(s)}supportsLength(){return!!(1&this.$$flags)}supportsGet(){return!!(2&this.$$flags)}supportsSet(){return!!(4&this.$$flags)}supportsHas(){return!!(8&this.$$flags)}isIterable(){return!!(48&this.$$flags)}isIterator(){return!!(32&this.$$flags)}isAwaitable(){return!!(64&this.$$flags)}isBuffer(){return!!(128&this.$$flags)}isCallable(){return!!(256&this.$$flags)}}class Ue{get length(){let e,t=v(this);try{e=n._PyObject_Size(t)}catch(a){l.fatal_error(a)}return e===-1&&n._pythonexc2js(),e}}class Ze{get(e){let t,a=v(this),o=y.new_value(e);try{t=n.__pyproxy_getitem(a,o)}catch(i){l.fatal_error(i)}finally{y.decref(o)}if(t===0){if(!n._PyErr_Occurred())return;n._pythonexc2js()}return y.pop_value(t)}}class He{set(e,t){let a,o=v(this),i=y.new_value(e),s=y.new_value(t);try{a=n.__pyproxy_setitem(o,i,s)}catch(d){l.fatal_error(d)}finally{y.decref(i),y.decref(s)}a===-1&&n._pythonexc2js()}delete(e){let t,a=v(this),o=y.new_value(e);try{t=n.__pyproxy_delitem(a,o)}catch(i){l.fatal_error(i)}finally{y.decref(o)}t===-1&&n._pythonexc2js()}}class Ke{has(e){let t,a=v(this),o=y.new_value(e);try{t=n.__pyproxy_contains(a,o)}catch(i){l.fatal_error(i)}finally{y.decref(o)}return t===-1&&n._pythonexc2js(),t===1}}class We{[Symbol.iterator](){let e,t=v(this),a={};try{e=n._PyObject_GetIter(t)}catch(i){l.fatal_error(i)}e===0&&n._pythonexc2js();let o=function*(i,s){try{let d;for(;d=n.__pyproxy_iter_next(i);)yield y.pop_value(d)}catch(d){l.fatal_error(d)}finally{n.finalizationRegistry.unregister(s),n._Py_DecRef(i)}n._PyErr_Occurred()&&n._pythonexc2js()}(e,a);return n.finalizationRegistry.register(o,[e,void 0],a),o}}class Ge{[Symbol.iterator](){return this}next(e){let t,a,o=y.new_value(e),i=n.stackSave(),s=n.stackAlloc(4);try{t=n.__pyproxyGen_Send(v(this),o,s)}catch(p){l.fatal_error(p)}finally{y.decref(o)}let d=n.HEAPU32[0+(s>>2)];return n.stackRestore(i),t===-1&&n._pythonexc2js(),a=t===0,{done:a,value:y.pop_value(d)}}}let Je={isExtensible:()=>!0,has:(r,e)=>!!Reflect.has(r,e)||typeof e!="symbol"&&(e.startsWith("$")&&(e=e.slice(1)),function(t,a){let o,i=v(t),s=y.new_value(a);try{o=n.__pyproxy_hasattr(i,s)}catch(d){l.fatal_error(d)}finally{y.decref(s)}return o===-1&&n._pythonexc2js(),o!==0}(r,e)),get(r,e){if(e in r||typeof e=="symbol")return Reflect.get(r,e);e.startsWith("$")&&(e=e.slice(1));let t=function(a,o){let i,s=v(a),d=y.new_value(o),p=a.$$.cache.cacheId;try{i=n.__pyproxy_getattr(s,d,p)}catch(c){l.fatal_error(c)}finally{y.decref(d)}return i===0&&n._PyErr_Occurred()&&n._pythonexc2js(),i}(r,e);return t!==0?y.pop_value(t):void 0},set(r,e,t){let a=Object.getOwnPropertyDescriptor(r,e);if(a&&!a.writable)throw new TypeError(`Cannot set read only field '${e}'`);return typeof e=="symbol"?Reflect.set(r,e,t):(e.startsWith("$")&&(e=e.slice(1)),function(o,i,s){let d,p=v(o),c=y.new_value(i),u=y.new_value(s);try{d=n.__pyproxy_setattr(p,c,u)}catch(h){l.fatal_error(h)}finally{y.decref(c),y.decref(u)}d===-1&&n._pythonexc2js()}(r,e,t),!0)},deleteProperty(r,e){let t=Object.getOwnPropertyDescriptor(r,e);if(t&&!t.writable)throw new TypeError(`Cannot delete read only field '${e}'`);return typeof e=="symbol"?Reflect.deleteProperty(r,e):(e.startsWith("$")&&(e=e.slice(1)),function(a,o){let i,s=v(a),d=y.new_value(o);try{i=n.__pyproxy_delattr(s,d)}catch(p){l.fatal_error(p)}finally{y.decref(d)}i===-1&&n._pythonexc2js()}(r,e),!t||!!t.configurable)},ownKeys(r){let e,t=v(r);try{e=n.__pyproxy_ownKeys(t)}catch(o){l.fatal_error(o)}e===0&&n._pythonexc2js();let a=y.pop_value(e);return a.push(...Reflect.ownKeys(r)),a},apply:(r,e,t)=>r.apply(e,t)};class Ye{_ensure_future(){if(this.$$.promise)return this.$$.promise;let e,t,a,o=v(this),i=new Promise((p,c)=>{e=p,t=c}),s=y.new_value(e),d=y.new_value(t);try{a=n.__pyproxy_ensure_future(o,s,d)}catch(p){l.fatal_error(p)}finally{y.decref(d),y.decref(s)}return a===-1&&n._pythonexc2js(),this.$$.promise=i,this.destroy(),i}then(e,t){return this._ensure_future().then(e,t)}catch(e){return this._ensure_future().catch(e)}finally(e){return this._ensure_future().finally(e)}}class ve{apply(e,t){return n.callPyObject(v(this),...t)}call(e,...t){return n.callPyObject(v(this),...t)}callKwargs(...e){if(e.length===0)throw new TypeError("callKwargs requires at least one argument (the key word argument object)");let t=e[e.length-1];if(t.constructor!==void 0&&t.constructor.name!=="Object")throw new TypeError("kwargs argument is not an object");return n.callPyObjectKwargs(v(this),...e)}}ve.prototype.prototype=Function.prototype;let W,xe,Xe=new Map([["i8",Int8Array],["u8",Uint8Array],["u8clamped",Uint8ClampedArray],["i16",Int16Array],["u16",Uint16Array],["i32",Int32Array],["u32",Uint32Array],["i32",Int32Array],["u32",Uint32Array],["i64",globalThis.BigInt64Array],["u64",globalThis.BigUint64Array],["f32",Float32Array],["f64",Float64Array],["dataview",DataView]]);class Qe{getBuffer(e){let t;if(e&&(t=Xe.get(e),t===void 0))throw new Error(`Unknown type ${e}`);let a,o=n.HEAPU32,i=n.stackSave(),s=n.stackAlloc(o[0+(n._buffer_struct_size>>2)]),d=v(this);try{a=n.__pyproxy_get_buffer(s,d)}catch(P){l.fatal_error(P)}a===-1&&n._pythonexc2js();let p=o[0+(s>>2)],c=o[1+(s>>2)],u=o[2+(s>>2)],h=!!o[3+(s>>2)],m=o[4+(s>>2)],f=o[5+(s>>2)],_=y.pop_value(o[6+(s>>2)]),g=y.pop_value(o[7+(s>>2)]),k=o[8+(s>>2)],z=!!o[9+(s>>2)],O=!!o[10+(s>>2)],A=n.UTF8ToString(m);n.stackRestore(i);let F=!1;try{let P=!1;t===void 0&&([t,P]=n.processBufferFormatString(A," In this case, you can pass an explicit type argument."));let b=parseInt(t.name.replace(/[^0-9]/g,""))/8||1;if(P&&b>1)throw new Error("Javascript has no native support for big endian buffers. In this case, you can pass an explicit type argument. For instance, `getBuffer('dataview')` will return a `DataView`which has native support for reading big endian data. Alternatively, toJs will automatically convert the buffer to little endian.");let I=u-c;if(I!==0&&(p%b!=0||c%b!=0||u%b!=0))throw new Error(`Buffer does not have valid alignment for a ${t.name}`);let te,Fe=I/b,Ie=(p-c)/b;te=I===0?new t:new t(o.buffer,c,Fe);for(let Ne of g.keys())g[Ne]/=b;return F=!0,Object.create(we.prototype,Object.getOwnPropertyDescriptors({offset:Ie,readonly:h,format:A,itemsize:f,ndim:_.length,nbytes:I,shape:_,strides:g,data:te,c_contiguous:z,f_contiguous:O,_view_ptr:k,_released:!1}))}finally{if(!F)try{n._PyBuffer_Release(k),n._PyMem_Free(k)}catch(P){l.fatal_error(P)}}}}class we{constructor(){throw new TypeError("PyBuffer is not a constructor")}release(){if(!this._released){try{n._PyBuffer_Release(this._view_ptr),n._PyMem_Free(this._view_ptr)}catch(e){l.fatal_error(e)}this._released=!0,this.data=null}}}const er=/^.*?([^\/]*)\.whl$/;function rr(r){let e=er.exec(r);if(e)return e[1].toLowerCase().split("-").slice(0,-4).join("-")}function be(r,e,t){if(r=r.toLowerCase(),e.has(r))return;const a=l.packages[r];if(!a)throw new Error(`No known package with name '${r}'`);if(a.shared_library?t.set(r,"default channel"):e.set(r,"default channel"),E[r]===void 0)for(let o of a.depends)be(o,e,t)}function ce(r,e){return x(this,void 0,void 0,function*(){let t;if(e==="default channel"){if(!(r in l.packages))throw new Error(`Internal error: no entry for package named ${r}`);t=l.packages[r].file_name}else t=e;try{return yield V(W,t)}catch(o){if(!S)throw o}let a=yield V(xe,t);return yield R.writeFile(`${W}${t}`,a),a})}function ue(r,e){return x(this,void 0,void 0,function*(){let t=l.packages[r];t||(t={file_name:".whl",install_dir:"site",shared_library:!1,depends:[],imports:[]});const a=t.file_name,o=l.package_loader.unpack_buffer.callKwargs({buffer:e,filename:a,target:t.install_dir,calculate_dynlibs:!0});for(const i of o)yield Pe(i,t.shared_library);E[r]=t})}function ke(){let r=Promise.resolve();return function(){return x(this,void 0,void 0,function*(){const e=r;let t;return r=new Promise(a=>t=a),yield e,t})}}const tr=ke();function Pe(r,e){return x(this,void 0,void 0,function*(){let t;t=n.FS.lookupPath(r).node.mount.type==n.FS.filesystems.MEMFS?n.FS.filesystems.MEMFS.getFileDataAsTypedArray(n.FS.lookupPath(r).node):n.FS.readFile(r);const a=yield tr();try{const o=yield n.loadWebAssemblyModule(t,{loadAsync:!0,nodelete:!0,allowUndefined:!0});n.preloadedWasm[r]=o,n.preloadedWasm[r.split("/").pop()]=o,e&&n.loadDynamicLibrary(r,{global:!0,nodelete:!0})}catch(o){if(o.message.includes("need to see wasm magic number"))return void console.warn(`Failed to load dynlib ${r}. We probably just tried to load a linux .so file or something.`);throw o}finally{a()}})}Q.loadDynlib=Pe;const nr=ke();function re(r,e,t){return x(this,void 0,void 0,function*(){e=e||console.log,t=t||console.error,ee(r)&&(r=r.toJs()),Array.isArray(r)||(r=[r]);const[a,o]=function(d,p){const c=new Map,u=new Map;for(let h of d){const m=rr(h);m!==void 0?c.has(m)&&c.get(m)!==h?p(`Loading same package ${m} from ${h} and ${c.get(m)}`):c.set(m,h):be(h,c,u)}return[c,u]}(r,t);for(const[d,p]of[...a,...o]){const c=E[d];c!==void 0&&(a.delete(d),o.delete(d),c===p||p==="default channel"?e(`${d} already loaded from ${c}`):t(`URI mismatch, attempting to load package ${d} from ${p} while it is already loaded from ${c}. To override a dependency, load the custom package first.`))}if(a.size===0&&o.size===0)return void e("No new packages to load");const i=[...a.keys(),...o.keys()].join(", "),s=yield nr();try{e(`Loading ${i}`);const d={},p={};for(const[f,_]of o)E[f]?o.delete(f):d[f]=ce(f,_);for(const[f,_]of a)E[f]?a.delete(f):p[f]=ce(f,_);const c=[],u={},h={},m={};for(const[f,_]of o)h[f]=d[f].then(g=>x(this,void 0,void 0,function*(){yield ue(f,g),c.push(f),E[f]=_})).catch(g=>{console.warn(g),u[f]=g});yield Promise.all(Object.values(h));for(const[f,_]of a)m[f]=p[f].then(g=>x(this,void 0,void 0,function*(){yield ue(f,g),c.push(f),E[f]=_})).catch(g=>{console.warn(g),u[f]=g});if(yield Promise.all(Object.values(m)),n.reportUndefinedSymbols(),c.length>0){const f=c.join(", ");e(`Loaded ${f}`)}if(Object.keys(u).length>0){const f=Object.keys(u).join(", ");e(`Failed to load ${f}`);for(const[_,g]of Object.entries(u))console.warn(`The following error occurred while loading ${_}:`),console.error(g)}l.importlib.invalidate_caches()}finally{s()}})}let E={};function $e(r){if(typeof r=="string")r=new Error(r);else if(typeof r!="object"||r===null||typeof r.stack!="string"||typeof r.message!="string"){let e=`A value of type ${typeof r} with tag ${Object.prototype.toString.call(r)} was thrown as an error!`;try{e+=`
String interpolation of the thrown value gives """${r}""".`}catch{e+=`
String interpolation of the thrown value fails.`}try{e+=`
The thrown value's toString method returns """${r.toString()}""".`}catch{e+=`
The thrown value's toString method fails.`}r=new Error(e)}return r}l.dump_traceback=function(){n.__Py_DumpTraceback(1,n._PyGILState_GetThisThreadState())};let de=!1;l.fatal_error=function(r){if(!r||!r.pyodide_fatal_error){if(de)return console.error("Recursive call to fatal_error. Inner error was:"),void console.error(r);(r=typeof r=="number"?Te(r):$e(r)).pyodide_fatal_error=!0,de=!0,console.error("Pyodide has suffered a fatal error. Please report this to the Pyodide maintainers."),console.error("The cause of the fatal error was:"),l.inTestHoist?(console.error(r.toString()),console.error(r.stack)):console.error(r);try{l.dump_traceback();for(let e of Object.keys(l.public_api))e.startsWith("_")||e==="version"||Object.defineProperty(l.public_api,e,{enumerable:!0,configurable:!0,get:()=>{throw new Error("Pyodide already fatally failed and can no longer be used.")}});l.on_fatal&&l.on_fatal(r)}catch(e){console.error("Another error occurred while handling the fatal error:"),console.error(e)}throw r}};class Ee extends Error{constructor(e,t){super(t),this.ty=e}}function Te(r){const[e,t,a]=function(i){const s=n._exc_type(),d=new n.ExceptionInfo(i).get_type(),p=n.stackSave(),c=n.stackAlloc(4);n.HEAP32[c/4]=i;const u=n.demangle(n.UTF8ToString(n._exc_typename(d))),h=!!n.___cxa_can_catch(s,d,c),m=n.HEAP32[c/4];return n.stackRestore(p),[u,h,m]}(r);let o;if(t){const i=n._exc_what(a);o=n.UTF8ToString(i)}else o=`The exception is an object of type ${e} at address ${r} which does not inherit from std::exception`;return new Ee(e,o)}function q(r){const e=r.fileName||"";if(e.includes("pyodide.asm")||e.includes("wasm-function"))return!0;if(!e.includes("pyodide.js"))return!1;let t=r.functionName||"";return t.startsWith("Object.")&&(t=t.slice(7)),!(t in l.public_api)||t==="PythonError"||(r.functionName=t,!1)}Object.defineProperty(Ee.prototype,"name",{get(){return`${this.constructor.name} ${this.ty}`}}),Q.convertCppException=Te,n.handle_js_error=function(r){if(r&&r.pyodide_fatal_error)throw r;if(r instanceof n._PropagatePythonError)return;let e,t,a=!1;r instanceof l.PythonError&&(a=n._restore_sys_last_exception(r.__error_address));try{e=he.parse(r)}catch{t=!0}if(t&&(r=$e(r)),!a){let o=y.new_value(r),i=n._JsProxy_create(o);n._set_error(i),n._Py_DecRef(i),y.decref(o)}if(!t){if(function(o){if(!q(o))return!1;const i=o.functionName;return i==="PythonError"||i==="new_error"}(e[0]))for(;q(e[0]);)e.shift();for(const o of e){if(q(o))break;const i=n.stringToNewUTF8(o.functionName||"???"),s=n.stringToNewUTF8(o.fileName||"???.js");n.__PyTraceback_Add(i,s,o.lineNumber),n._free(i),n._free(s)}}};class L extends Error{constructor(e,t){const a=Error.stackTraceLimit;Error.stackTraceLimit=1/0,super(e),Error.stackTraceLimit=a,this.__error_address=t}}Object.defineProperty(L.prototype,"name",{value:L.name}),l.PythonError=L;class U extends Error{constructor(){l.fail_test=!0,super("If you are seeing this message, an internal Pyodide error has occurred. Please report it to the Pyodide maintainers.")}}Object.defineProperty(U.prototype,"name",{value:U.name}),n._PropagatePythonError=U;let j=!1;function Ae(r,e={}){return l.isPyProxy(e)&&(e={globals:e},j||(console.warn("Passing a PyProxy as the second argument to runPython is deprecated and will be removed in v0.21. Use 'runPython(code, {globals : some_dict})' instead."),j=!0)),e.globals||(e.globals=l.globals),l.pyodide_py.eval_code(r,e.globals)}function or(r,e,t){return x(this,void 0,void 0,function*(){let a,o=l.pyodide_py.find_imports(r);try{a=o.toJs()}finally{o.destroy()}if(a.length===0)return;let i=l._import_name_to_package_name,s=new Set;for(let d of a)i.has(d)&&s.add(i.get(d));s.size&&(yield re(Array.from(s),e,t))})}function Se(r,e={}){return x(this,void 0,void 0,function*(){return l.isPyProxy(e)&&(e={globals:e},j||(console.warn("Passing a PyProxy as the second argument to runPythonAsync is deprecated and will be removed in v0.21. Use 'runPythonAsync(code, {globals : some_dict})' instead."),j=!0)),e.globals||(e.globals=l.globals),yield l.pyodide_py.eval_code_async(r,e.globals)})}function ar(r,e){l.pyodide_py.register_js_module(r,e)}function ir(r){l._Comlink=r}function sr(r){l.pyodide_py.unregister_js_module(r)}function lr(r,{depth:e,defaultConverter:t}={depth:-1}){switch(typeof r){case"string":case"number":case"boolean":case"bigint":case"undefined":return r}if(!r||l.isPyProxy(r))return r;let a=0,o=0,i=0;try{a=y.new_value(r);try{o=n.js2python_convert(a,{depth:e,defaultConverter:t})}catch(s){throw s instanceof n._PropagatePythonError&&n._pythonexc2js(),s}if(n._JsProxy_Check(o))return r;i=n._python2js(o),i===0&&n._pythonexc2js()}finally{y.decref(a),n._Py_DecRef(o)}return y.pop_value(i)}function cr(r){return l.importlib.import_module(r)}l.runPython=Ae,l.runPythonAsync=Se;let fe,Oe,pe=!1;function ur(r,e,t={}){typeof t=="string"&&(pe||(console.warn("Passing a string as the third argument to unpackArchive is deprecated and will be removed in v0.21. Instead use { extract_dir : 'some_path' }"),pe=!0),t={extractDir:t});let a=t.extractDir;l.package_loader.unpack_buffer.callKwargs({buffer:r,format:e,extract_dir:a})}function dr(r){n.HEAP8[n._Py_EMSCRIPTEN_SIGNAL_HANDLING]=!!r,n.Py_EmscriptenSignalBuffer=r}function fr(){n.__PyErr_CheckSignals()&&n._pythonexc2js()}function pr(){fe=n.FS;let r={globals:void 0,FS:fe,pyodide_py:void 0,version:"",loadPackage:re,loadPackagesFromImports:or,loadedPackages:E,isPyProxy:ee,runPython:Ae,runPythonAsync:Se,registerJsModule:ar,unregisterJsModule:sr,setInterruptBuffer:dr,checkInterrupt:fr,toPy:lr,pyimport:cr,unpackArchive:ur,registerComlink:ir,PythonError:L,PyBuffer:we,_module:n,_api:l};return l.public_api=r,r}function yr(r){Oe=l._pyodide._base.eval_code("{}"),l.importlib=l.runPythonInternal("import importlib; importlib");let e=l.importlib.import_module;l.sys=e("sys"),l.sys.path.insert(0,r.homedir);let t=l.runPythonInternal("import __main__; __main__.__dict__"),a=l.runPythonInternal("import builtins; builtins.__dict__");var o;l.globals=(o=a,new Proxy(t,{get:(d,p)=>p==="get"?c=>{let u=d.get(c);return u===void 0&&(u=o.get(c)),u}:p==="has"?c=>d.has(c)||o.has(c):Reflect.get(d,p)}));let i=l._pyodide._importhook;i.register_js_finder(),i.register_js_module("js",r.jsglobals);let s=pr();return i.register_js_module("pyodide_js",s),l.pyodide_py=e("pyodide"),l.package_loader=e("pyodide._package_loader"),l.version=l.pyodide_py.__version__,s.pyodide_py=l.pyodide_py,s.version=l.version,s.globals=l.globals,s}function G(r){return x(this,void 0,void 0,function*(){if(G.inProgress)throw new Error("Pyodide is already loading.");r.indexURL||(r.indexURL=function(){let u;try{throw new Error}catch(m){u=m}let h=he.parse(u)[0].fileName;return S&&h.startsWith("file://")&&(h=h.slice(7)),h.slice(0,h.lastIndexOf("/"))}()),G.inProgress=!0;const e={fullStdLib:!0,jsglobals:globalThis,stdin:globalThis.prompt?globalThis.prompt:void 0,homedir:"/home/pyodide"};let t=Object.assign(e,r);t.indexURL.endsWith("/")||(t.indexURL+="/"),yield function(){return x(this,void 0,void 0,function*(){if(!S||(me=(yield w(()=>import("./__vite-browser-external.a64aa4ad.js"),[])).default,R=yield w(()=>import("./__vite-browser-external.a64aa4ad.js"),[]),H=(yield w(()=>import("./index.739abbd4.js"),["assets/index.739abbd4.js","assets/__vite-browser-external.a64aa4ad.js"])).default,_e=(yield w(()=>import("./__vite-browser-external.a64aa4ad.js"),[])).default,typeof require!="undefined"))return;const u={fs:yield w(()=>import("./__vite-browser-external.a64aa4ad.js"),[]),crypto:yield w(()=>import("./__vite-browser-external.a64aa4ad.js"),[]),ws:yield w(()=>import("./browser.960229ac.js").then(function(h){return h.b}),[]),child_process:yield w(()=>import("./__vite-browser-external.a64aa4ad.js"),[])};globalThis.require=function(h){return u[h]}})}();let a=function(u){return x(this,void 0,void 0,function*(){let h;if(W=u,S){const m=yield R.readFile(`${u}packages.json`);h=JSON.parse(m)}else h=yield(yield fetch(`${u}packages.json`)).json();if(!h.packages)throw new Error("Loaded packages.json does not contain the expected key 'packages'.");l.packages=h.packages,l._import_name_to_package_name=new Map;for(let m of Object.keys(l.packages))for(let f of l.packages[m].imports)l._import_name_to_package_name.set(f,m)})}(t.indexURL),o=V(t.indexURL,"pyodide_py.tar");var i;qe(t.stdin,t.stdout,t.stderr),i=t.homedir,n.preRun.push(function(){try{n.FS.mkdirTree(i)}catch(u){console.error(`Error occurred while making a home directory '${i}':`),console.error(u),console.error("Using '/' for a home directory instead"),i="/"}n.ENV.HOME=i,n.FS.chdir(i)});let s=new Promise(u=>n.postRun=u);n.locateFile=u=>t.indexURL+u;const d=`${t.indexURL}pyodide.asm.js`;yield N(d),yield _createPyodideModule(n),yield s,n.locateFile=u=>{throw new Error("Didn't expect to load any more file_packager files!")},function(u){let h=n.FS.open("/pyodide_py.tar","w");n.FS.write(h,u,0,u.byteLength,void 0,!0),n.FS.close(h);const m=n.stringToNewUTF8(`
from sys import version_info
pyversion = f"python{version_info.major}.{version_info.minor}"
import shutil
shutil.unpack_archive("/pyodide_py.tar", f"/lib/{pyversion}/site-packages/")
del shutil
import importlib
importlib.invalidate_caches()
del importlib
    `);if(n._PyRun_SimpleString(m))throw new Error("OOPS!");n._free(m),n.FS.unlink("/pyodide_py.tar")}(yield o),n._pyodide_init();let p=yr(t);var c;return p.version.includes("dev")||(c=`https://pyodide-cdn2.iodide.io/${p.version}/full/`,xe=c),yield a,t.fullStdLib&&(yield re(["distutils"])),p.runPython("print('Python initialization complete')"),p})}l.saveState=()=>l.pyodide_py._state.save_state(),l.restoreState=r=>l.pyodide_py._state.restore_state(r),l.runPythonInternal=function(r){return l._pyodide._base.eval_code(r,Oe)};var hr=`from asyncio import sleep
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
`;const mr=J({__name:"Viewer1",props:{code:null},setup(r){const e=r,{console:t,field:a,messages:o,onKey:i,onSelect:s,onSubmit:d,placeholder:p}=Ce(),c=G({stderr:u=>t.error(u),stdout:u=>t.log(u),stdin:()=>prompt()||"",indexURL:"https://cdn.jsdelivr.net/pyodide/v0.20.0/full/"});return Le({title:"Execute",onEnter:!0,async action(){t.clear(),p.value="",Object.assign(window,{prompt:t.prompt}),(await c).runPythonAsync(`${hr}
await story(
"""
${e.code}
""").run()`)}}),(u,h)=>(X(),Y(Me,{field:$(a),"onUpdate:field":h[0]||(h[0]=m=>Z(a)?a.value=m:null),messages:$(o),"onUpdate:messages":h[1]||(h[1]=m=>Z(o)?o.value=m:null),placeholder:$(p),onKey:$(i),onSelect:$(s),onSubmit:$(d)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}});const _r=J({__name:"v1",setup(r){const e=De(`@global $money = 500
@global $eggs = 0
@global $name = (no name)
$eggprice = 6

start
  @if $name = (no name)
    $name = @input What is your name?
  @run market

market
  $name, you have $$money and $eggs dozen eggs.
  @menu What would you like to buy?
    Eggs
      @context
        @run eggs
    Go Back
      @pass
  @run market

eggs
  $egg = @number How many dozen eggs do you want to buy?
  $eggprice *= $egg
  $egg dozen eggs will cost $$eggprice.
  @menu Are you sure you want to buy them?
    Yes
      @if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      @elseif $money = $eggprice
        You have just enough money for these eggs.
        $money -= $eggprice
        $eggs += $egg
      @else
        You don't have enough money for these eggs!
    No
      Okay, let's go back to the store.
  @stop`);return(t,a)=>(X(),Y(Re,{center:"","explicit-height":"","max-width":""},{default:oe(()=>[C(je,{class:"stack",space:.75,style:{height:"100%","justify-content":"center"}},{default:oe(()=>[C(Be,{modelValue:$(e),"onUpdate:modelValue":a[0]||(a[0]=o=>Z(e)?e.value=o:null),round:"",style:{flex:"1","max-width":"800px"}},null,8,["modelValue"]),C(mr,{class:"viewer",code:$(e)},null,8,["code"])]),_:1},8,["space"])]),_:1}))}});var $r=Ve(_r,[["__scopeId","data-v-41d15b42"]]);export{$r as default};
