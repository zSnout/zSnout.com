import{d as V,o as d,h,r as U,n as j,A as te,_ as N,B as de,q as y,v as ae,C as fe,c as B,a as b,b as p,w as v,u as w,T as le,D as F,F as q,j as R,p as G,l as J,E as oe,e as C,G as D,H as $,t as T,I as pe,J as ve,m as me,s as S,K as Z,R as he}from"./index.4yzzgtk3.js";import{V as Y,B as x}from"./VStack.1y80766s.js";const ye=V({__name:"HStack",props:{space:null,stretch:{type:Boolean},wraps:{type:[Boolean,String]},noCenter:{type:Boolean}},setup(a){return(e,t)=>{var l;return d(),h("div",{class:j([{stretch:a.stretch,wraps:!!a.wraps,noCenter:a.noCenter},"stack"]),style:te({gap:`${(l=a.space)!=null?l:.5}em`,"--wrap-size":typeof a.wraps=="string"?a.wraps:0})},[U(e.$slots,"default",{},void 0,!0)],6)}}});const M=N(ye,[["__scopeId","data-v-e8fa8b7a"]]),_e=["autocomplete","placeholder","type","value"],ge=V({__name:"Field",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(a){return(e,t)=>{var l,o;return d(),h("input",{class:"second-layer field focusline",autocomplete:(l=a.autocomplete)!=null?l:"off",placeholder:a.placeholder,type:(o=a.type)!=null?o:"text",value:a.modelValue,onInput:t[0]||(t[0]=r=>e.$emit("update:modelValue",r.target.value))},null,40,_e)}}});const H=N(ge,[["__scopeId","data-v-bff43206"]]);/*!
* tabbable 6.0.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var be=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],P=be.join(","),ne=typeof Element>"u",z=ne?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,O=!ne&&Element.prototype.getRootNode?function(a){return a.getRootNode()}:function(a){return a.ownerDocument},ke=function(e,t,l){var o=Array.prototype.slice.apply(e.querySelectorAll(P));return t&&z.call(e,P)&&o.unshift(e),o=o.filter(l),o},we=function a(e,t,l){for(var o=[],r=Array.from(e);r.length;){var s=r.shift();if(s.tagName==="SLOT"){var n=s.assignedElements(),i=n.length?n:s.children,c=a(i,!0,l);l.flatten?o.push.apply(o,c):o.push({scope:s,candidates:c})}else{var g=z.call(s,P);g&&l.filter(s)&&(t||!e.includes(s))&&o.push(s);var m=s.shadowRoot||typeof l.getShadowRoot=="function"&&l.getShadowRoot(s),k=!l.shadowRootFilter||l.shadowRootFilter(s);if(m&&k){var u=a(m===!0?s.children:m.children,!0,l);l.flatten?o.push.apply(o,u):o.push({scope:s,candidates:u})}else r.unshift.apply(r,s.children)}}return o},se=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},Se=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},re=function(e){return e.tagName==="INPUT"},Ce=function(e){return re(e)&&e.type==="hidden"},Ie=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(l){return l.tagName==="SUMMARY"});return t},Te=function(e,t){for(var l=0;l<e.length;l++)if(e[l].checked&&e[l].form===t)return e[l]},$e=function(e){if(!e.name)return!0;var t=e.form||O(e),l=function(n){return t.querySelectorAll('input[type="radio"][name="'+n+'"]')},o;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")o=l(window.CSS.escape(e.name));else try{o=l(e.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var r=Te(o,e.form);return!r||r===e},xe=function(e){return re(e)&&e.type==="radio"},Ee=function(e){return xe(e)&&!$e(e)},Re=function(e){for(var t,l=O(e).host,o=!!((t=l)!==null&&t!==void 0&&t.ownerDocument.contains(l)||e.ownerDocument.contains(e));!o&&l;){var r;l=O(l).host,o=!!((r=l)!==null&&r!==void 0&&r.ownerDocument.contains(l))}return o},X=function(e){var t=e.getBoundingClientRect(),l=t.width,o=t.height;return l===0&&o===0},qe=function(e,t){var l=t.displayCheck,o=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var r=z.call(e,"details>summary:first-of-type"),s=r?e.parentElement:e;if(z.call(s,"details:not([open]) *"))return!0;if(!l||l==="full"||l==="legacy-full"){if(typeof o=="function"){for(var n=e;e;){var i=e.parentElement,c=O(e);if(i&&!i.shadowRoot&&o(i)===!0)return X(e);e.assignedSlot?e=e.assignedSlot:!i&&c!==e.ownerDocument?e=c.host:e=i}e=n}if(Re(e))return!e.getClientRects().length;if(l!=="legacy-full")return!0}else if(l==="non-zero-area")return X(e);return!1},Be=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var l=0;l<t.children.length;l++){var o=t.children.item(l);if(o.tagName==="LEGEND")return z.call(t,"fieldset[disabled] *")?!0:!o.contains(e)}return!0}t=t.parentElement}return!1},Ve=function(e,t){return!(t.disabled||Ce(t)||qe(t,e)||Ie(t)||Be(t))},Q=function(e,t){return!(Ee(t)||se(t)<0||!Ve(e,t))},Ne=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},Ae=function a(e){var t=[],l=[];return e.forEach(function(o,r){var s=!!o.scope,n=s?o.scope:o,i=se(n,s),c=s?a(o.candidates):n;i===0?s?t.push.apply(t,c):t.push(n):l.push({documentOrder:r,tabIndex:i,item:o,isScope:s,content:c})}),l.sort(Se).reduce(function(o,r){return r.isScope?o.push.apply(o,r.content):o.push(r.content),o},[]).concat(t)},K=function(e,t){t=t||{};var l;return t.getShadowRoot?l=we([e],t.includeContainer,{filter:Q.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Ne}):l=ke(e,t.includeContainer,Q.bind(null,t)),Ae(l)};const ze=a=>(G("data-v-5f7bcc35"),a=a(),J(),a),De=ze(()=>b("div",{style:{flex:"1","margin-top":"-0.75 !important"}},null,-1)),Me=V({__name:"Modal",props:{open:{type:[Boolean,Object]}},setup(a){const t=de(a,"open"),l=y(),o=y();function r(n){if(!t.value||n&&n.target!==n.currentTarget)return;const i=F(l),c=i==null?void 0:i.getElementsByClassName("cancel")[0];c instanceof HTMLElement&&c.click()}function s(n){var f,E,A;if(!t.value)return;n.key==="Escape"&&(n.preventDefault(),r());const i=F(o);if(!i)return;const{key:c}=n;if(c!=="Tab"||n.metaKey||n.ctrlKey||n.altKey)return;const g=K(i),m=K(document.documentElement),u=n.composedPath().filter(L=>L instanceof HTMLElement).find(L=>m.includes(L));!u||!g.includes(u)?((f=g[0])==null||f.focus(),n.preventDefault()):u===g[0]&&n.shiftKey?((E=g[g.length-1])==null||E.focus(),n.preventDefault()):u===g[g.length-1]&&!n.shiftKey&&((A=g[0])==null||A.focus(),n.preventDefault())}return ae(()=>{w(t)&&setTimeout(()=>{var c;const n=F(o);if(!n)return;(c=K(n)[0])==null||c.focus()},100)}),fe("keydown",s),(n,i)=>(d(),B(le,{to:"body"},[b("div",{class:j([{open:w(t)},"wrapper"]),onClick:r},[p(Y,{ref_key:"dialog",ref:o,class:"modal second-layer",space:.75,style:te(n.$slots.buttons?"padding-bottom: 0":"")},{default:v(()=>[U(n.$slots,"default",{},void 0,!0),n.$slots.buttons?(d(),h(q,{key:0},[De,p(M,{ref_key:"buttons",ref:l,class:"buttons",space:.75},{default:v(()=>[U(n.$slots,"buttons",{},void 0,!0)]),_:3},8,["space"])],64)):R("",!0)]),_:3},8,["space","style"])],2)]))}});const ie=N(Me,[["__scopeId","data-v-5f7bcc35"]]),Ue={class:"spacer"},Oe=C("i"),Le=V({__name:"Spacer",props:{size:null},setup(a){return(e,t)=>{var l;return d(!0),h(q,null,oe(+((l=a.size)!=null?l:1),()=>(d(),h("div",Ue,[U(e.$slots,"default",{},()=>[Oe],!0)]))),256)}}});const ee=N(Le,[["__scopeId","data-v-27a6f293"]]),Fe={key:1},He={key:2},Ke=C("Cancel"),Pe=V({__name:"LogInForm",props:{open:{type:Boolean},signUp:{type:Boolean}},emits:["update:open"],setup(a,{emit:e}){const{signUp:t}=a,l=y(""),o=y(""),r=y(""),s=y(!1),n=y(t||!1),i=y("");D.value="",$.on("account:done:verify",()=>{n.value?(i.value="An email has been sent to you. Click the link to verify your account, or it will be deleted in 15 minutes. Go!",setTimeout(()=>{e("update:open",!1)},5e3),location.pathname==="/"&&scrollTo({behavior:"smooth",left:0,top:0})):e("update:open",!1)}),$.on("error",()=>s.value=!1);function c(){s.value||(s.value=!0,D.value="",n.value?$.emit("account:create",l.value,o.value,r.value):$.emit("account:login",l.value,o.value))}return(g,m)=>(d(),B(ie,{open:a.open},{buttons:v(()=>[p(x,{disabled:s.value,onClick:c},{default:v(()=>[C(T(n.value?"Sign Up":"Log In"),1)]),_:1},8,["disabled"]),p(x,{cancel:"",onClick:m[4]||(m[4]=k=>g.$emit("update:open",!1))},{default:v(()=>[Ke]),_:1})]),default:v(()=>[b("form",null,[p(Y,null,{default:v(()=>[p(H,{modelValue:l.value,"onUpdate:modelValue":m[0]||(m[0]=k=>l.value=k),autocomplete:"username",maxlength:"32",placeholder:"Username (not email address)"},null,8,["modelValue"]),p(H,{modelValue:o.value,"onUpdate:modelValue":m[1]||(m[1]=k=>o.value=k),autocomplete:n.value?"new-password":"password",placeholder:"Password",type:"password"},null,8,["modelValue","autocomplete"]),n.value?(d(),B(H,{key:0,modelValue:r.value,"onUpdate:modelValue":m[2]||(m[2]=k=>r.value=k),autocomplete:"email",placeholder:"Email Address"},null,8,["modelValue"])):R("",!0),p(ee),b("span",{class:"link",role:"button",style:{"text-align":"center"},onClick:m[3]||(m[3]=k=>n.value=!n.value)},T(n.value?"Or log in to an existing account...":"Or create a new account..."),1),p(ee,{size:2}),w(D)?(d(),h("p",Fe,"Error: "+T(w(D)),1)):R("",!0),i.value?(d(),h("p",He,T(i.value),1)):R("",!0)]),_:1})])]),_:1},8,["open"]))}});const je={},Ge=a=>(G("data-v-af66507b"),a=a(),J(),a),Je={class:"icon text-color",viewBox:"0 0 875 1000",xmlns:"http://www.w3.org/2000/svg"},Ye=Ge(()=>b("path",{d:"M0 281.296l0 -68.355q1.953 -37.107 29.295 -62.496t64.449 -25.389l93.744 0l0 -31.248q0 -39.06 27.342 -66.402t66.402 -27.342l312.48 0q39.06 0 66.402 27.342t27.342 66.402l0 31.248l93.744 0q37.107 0 64.449 25.389t29.295 62.496l0 68.355q0 25.389 -18.553 43.943t-43.943 18.553l0 531.216q0 52.731 -36.13 88.862t-88.862 36.13l-499.968 0q-52.731 0 -88.862 -36.13t-36.13 -88.862l0 -531.216q-25.389 0 -43.943 -18.553t-18.553 -43.943zm62.496 0l749.952 0l0 -62.496q0 -13.671 -8.789 -22.46t-22.46 -8.789l-687.456 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 62.496zm62.496 593.712q0 25.389 18.553 43.943t43.943 18.553l499.968 0q25.389 0 43.943 -18.553t18.553 -43.943l0 -531.216l-624.96 0l0 531.216zm62.496 -31.248l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm31.248 -718.704l374.976 0l0 -31.248q0 -13.671 -8.789 -22.46t-22.46 -8.789l-312.48 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 31.248zm124.992 718.704l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm156.24 0l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224z"},null,-1)),We=[Ye];function Ze(a,e){return d(),h("svg",Je,We)}const Xe=N(je,[["render",Ze],["__scopeId","data-v-af66507b"]]),W=a=>(G("data-v-7823d96d"),a=a(),J(),a),Qe=W(()=>b("path",{d:`M103.468,58.64v486.202c0,8.186,1.659,16.096,4.931,23.513c3.116,7.063,7.548,13.345,13.173,18.669
      c10.894,10.31,25.135,15.987,40.101,15.987c12.797,0,24.977-4.138,35.224-11.963l104.859-80.09l104.857,80.089
      c10.247,7.826,22.428,11.963,35.225,11.963c14.967,0,29.208-5.678,40.102-15.988c5.624-5.323,10.057-11.604,13.172-18.667
      c3.272-7.417,4.932-15.328,4.932-23.514V58.64c0-32.059-26.081-58.14-58.14-58.14H161.608
      C129.549,0.5,103.468,26.582,103.468,58.64z M457.204,58.64v486.202c0,9.071-7.442,15.329-15.365,15.329
      c-3.144,0-6.361-0.985-9.222-3.169l-121.574-92.856c-2.742-2.094-6.014-3.141-9.287-3.141c-3.273,0-6.545,1.047-9.287,3.141
      l-121.574,92.855c-2.859,2.185-6.079,3.169-9.222,3.169c-7.923,0-15.365-6.257-15.365-15.328V58.64c0-8.45,6.85-15.3,15.3-15.3
      h280.296C450.354,43.34,457.204,50.19,457.204,58.64z`},null,-1)),et=W(()=>b("path",{d:`M161.673,603.511c-15.094,0-29.458-5.727-40.444-16.124c-5.674-5.37-10.144-11.705-13.287-18.83
      c-3.3-7.48-4.974-15.459-4.974-23.715V58.64c0-32.334,26.306-58.64,58.64-58.64h280.295c32.334,0,58.64,26.306,58.64,58.64
      v486.201c0,8.256-1.674,16.234-4.975,23.716c-3.141,7.122-7.611,13.457-13.285,18.828c-10.986,10.398-25.351,16.125-40.445,16.125
      c-12.907,0-25.193-4.172-35.528-12.065l-104.554-79.857l-104.555,79.858C186.864,599.339,174.579,603.511,161.673,603.511z
       M161.608,1c-31.783,0-57.64,25.857-57.64,57.64v486.202c0,8.116,1.645,15.959,4.889,23.311
      c3.089,7.003,7.483,13.229,13.06,18.508c10.8,10.222,24.919,15.851,39.757,15.851c12.685,0,24.76-4.102,34.921-11.86
      l105.162-80.321l0.304,0.231l104.857,80.089c10.159,7.759,22.234,11.86,34.921,11.86c14.838,0,28.958-5.63,39.758-15.852
      c5.577-5.279,9.971-11.505,13.059-18.506c3.244-7.353,4.889-15.196,4.889-23.312V58.64c0-31.783-25.857-57.64-57.64-57.64H161.608
      z M441.839,560.671c-3.428,0-6.722-1.131-9.525-3.271l-121.574-92.856c-2.603-1.987-5.709-3.038-8.983-3.038
      s-6.381,1.051-8.983,3.038l-121.574,92.855c-2.801,2.141-6.095,3.271-9.525,3.271c-7.63,0-15.865-6.052-15.865-15.828V58.64
      c0-8.712,7.088-15.8,15.8-15.8h280.296c8.712,0,15.8,7.088,15.8,15.8v486.202C457.704,554.619,449.469,560.671,441.839,560.671z
       M301.756,460.505c3.495,0,6.812,1.121,9.591,3.243l121.574,92.856c2.628,2.006,5.711,3.066,8.918,3.066
      c7.149,0,14.865-5.67,14.865-14.829V58.64c0-8.161-6.64-14.8-14.8-14.8H161.608c-8.161,0-14.8,6.639-14.8,14.8v486.202
      c0,9.159,7.716,14.828,14.865,14.828c3.208,0,6.292-1.061,8.918-3.066l121.574-92.855
      C294.944,461.626,298.26,460.505,301.756,460.505z`},null,-1)),tt=[Qe,et],at={key:0,style:{"text-align":"center"}},lt=C(" to save bookmarks to the cloud. "),ot=W(()=>b("p",{style:{"text-align":"center"}}," Your local bookmarks and cloud bookmarks are in conflict. This can occur when you delete bookmarks on another devices or modify your list offline. ",-1)),nt=C("Update Local"),st=C("Update Cloud"),rt=C("Add this page"),it={key:2,style:{"text-align":"center"}},ct=["value","onInput"],ut=["onClick"],dt=["href"],ft=C("OK"),pt=C("Cancel");function ce(){try{const a=JSON.parse(localStorage.bookmarks);if(Array.isArray(a)){for(const e of a)if(typeof e!="object"||e===null||typeof e.name!="string"||!e.name||typeof e.url!="string"||!e.url)return}_.splice(0,_.length,...a)}catch{}}function ue(a=location.pathname+location.search+location.href){a=new URL(a,location.href).href,!_.some(e=>e.url===a)&&(_.push({name:document.title.slice(0,-9)||"zSnout",url:a}),$.emit("bookmarks:update",S.value,_))}const _=pe([]);ce();const I=y();window.addEventListener("storage",a=>{a.storageArea===localStorage&&a.key==="bookmarks"&&ce()});ve(_,a=>{S.value&&!I.value&&$.emit("bookmarks:update",S.value,a),localStorage.bookmarks=JSON.stringify(_)},{debounce:500});ae(()=>{S.value&&$.emit("bookmarks:request",S.value)});$.on("bookmarks:list",a=>{const e=a.map(l=>l.url);_.map(l=>l.url).filter(l=>!e.includes(l)).length?I.value=a:(I.value=void 0,_.splice(0,_.length,...a))});const vt=V({__name:"BookmarkIcon",props:{fullscreen:{type:Boolean}},setup(a){const e=y(!1),t=y(!1),l=y(!1),o=y(!1);function r(){e.value=!0,t.value=!0}function s(){e.value=!1,o.value=!1,setTimeout(()=>t.value&&(t.value=!1),300)}const n=y(""),i=y(!1),c=y();function g(){n.value="Updating your local copy will overwrite your bookmarks with ones loaded from the cloud. This is not revertable.",i.value=!0,c.value=()=>{I.value&&(_.splice(0,_.length,...I.value),I.value=void 0)}}function m(){n.value="Updating your cloud copy will copy the bookmarks from this device onto your account and sync them across your devices. This is not revertable.",i.value=!0,c.value=()=>{S.value&&(I.value=void 0,$.emit("bookmarks:update",S.value,_))}}return(k,u)=>(d(),h(q,null,[(d(),h("svg",me({class:"icon",role:"button",viewBox:"100 0 403.511 603.511",xmlns:"http://www.w3.org/2000/svg",onClick:u[0]||(u[0]=f=>e.value?s():r())},k.$attrs),tt,16)),(d(),B(le,{to:"body"},[b("div",{class:j([{fullscreen:a.fullscreen,open:e.value,visible:t.value},"container"]),onClick:u[4]||(u[4]=f=>s())},[p(Y,{class:"bookmarks second-layer",onClick:u[3]||(u[3]=f=>f.stopPropagation())},{default:v(()=>[!w(S)&&w(Z)?(d(),h("p",at,[b("span",{class:"link",style:{cursor:"pointer"},onClick:u[1]||(u[1]=f=>l.value=!0)},"Log in"),lt])):R("",!0),I.value&&w(S)?(d(),h(q,{key:1},[ot,p(M,{stretch:""},{default:v(()=>[p(x,{onClick:g},{default:v(()=>[nt]),_:1}),p(x,{onClick:m},{default:v(()=>[st]),_:1})]),_:1})],64)):R("",!0),p(M,{stretch:""},{default:v(()=>[p(x,{onClick:ue},{default:v(()=>[rt]),_:1}),p(x,{onClick:u[2]||(u[2]=f=>o.value=!o.value)},{default:v(()=>[C(T(o.value?"Save":"Edit"),1)]),_:1})]),_:1}),_.length===0?(d(),h("p",it,` Click "Add this page" to create a link that always takes you to this page, then click "Edit" to change the bookmark's name. You can save fractals and Storymatic programs as well.`+T(w(Z)?w(S)?" Additionally, your bookmarks are synced to the cloud and your other devices.":" If you log in, you can even sync bookmarks to the cloud!":""),1)):R("",!0),(d(!0),h(q,null,oe(_,(f,E)=>(d(),h(q,null,[o.value?(d(),B(M,{key:0},{default:v(()=>[b("input",{class:"bookmark second-layer focusline",value:f.name,style:{flex:"1"},onInput:A=>f.name=A.target.value},null,40,ct),b("div",{class:"second-layer trash-div",onClick:A=>_.splice(E,1)},[p(Xe,{class:"trash"})],8,ut)]),_:2},1024)):f.url.includes("?")||f.url.includes("#")?(d(),h("a",{key:1,class:"bookmark second-layer hoverline focusline",href:f.url,style:{"text-decoration":"none",color:"inherit"}},T(f.name),9,dt)):(d(),B(w(he),{key:2,class:"bookmark second-layer hoverline focusline",to:f.url,style:{"text-decoration":"none",color:"inherit"}},{default:v(()=>[C(T(f.name),1)]),_:2},1032,["to"]))],64))),256))]),_:1})],2)])),p(Pe,{open:l.value,"onUpdate:open":u[5]||(u[5]=f=>l.value=f)},null,8,["open"]),p(ie,{open:I.value!==void 0&&w(S)!==""&&i.value},{buttons:v(()=>[p(x,{onClick:u[6]||(u[6]=f=>{var E;return(E=c.value)==null?void 0:E.call(c)})},{default:v(()=>[ft]),_:1}),p(x,{cancel:"",onClick:u[7]||(u[7]=f=>i.value=!1)},{default:v(()=>[pt]),_:1})]),default:v(()=>[b("p",null,T(n.value),1)]),_:1},8,["open"])],64))}});const mt=N(vt,[["__scopeId","data-v-7823d96d"]]),_t=Object.freeze(Object.defineProperty({__proto__:null,default:mt,addThis:ue},Symbol.toStringTag,{value:"Module"}));export{mt as B,H as F,M as H,ie as M,ee as S,Xe as T,Pe as _,_t as a,K as t};
