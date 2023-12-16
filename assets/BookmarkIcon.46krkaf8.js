import{d as z,f as g,s as U,y as Y,n as ae,o as p,_ as V,a8 as fe,r as y,K as le,l as ve,c as N,a as k,e as v,w as m,a6 as ne,a9 as P,u as C,F as B,k as A,p as G,h as J,v as oe,b as S,aa as M,E,t as T,x as pe,ab as me,Y as he,B as w,D as X,R as ye}from"./index.xh0zaea0.js";import{V as W,B as $}from"./VStack.3evi6szx.js";import{F as K}from"./Field.5c7fkv56.js";const be=z({__name:"HStack",props:{space:{},stretch:{type:Boolean},wraps:{type:[Boolean,String]},noCenter:{type:Boolean}},setup(a){return(e,t)=>(p(),g("div",{class:Y([{stretch:e.stretch,wraps:!!e.wraps,noCenter:e.noCenter},"stack"]),style:ae({gap:`${e.space??.5}em`,"--wrap-size":typeof e.wraps=="string"?e.wraps:0})},[U(e.$slots,"default",{},void 0,!0)],6))}});const O=V(be,[["__scopeId","data-v-e8fa8b7a"]]);/*!
* tabbable 6.1.2
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var ge=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],j=ge.join(","),re=typeof Element>"u",R=re?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,D=!re&&Element.prototype.getRootNode?function(a){var e;return a==null||(e=a.getRootNode)===null||e===void 0?void 0:e.call(a)}:function(a){return a==null?void 0:a.ownerDocument},L=function a(e,t){var l;t===void 0&&(t=!0);var n=e==null||(l=e.getAttribute)===null||l===void 0?void 0:l.call(e,"inert"),i=n===""||n==="true",r=i||t&&e&&a(e.parentNode);return r},_e=function(e){var t,l=e==null||(t=e.getAttribute)===null||t===void 0?void 0:t.call(e,"contenteditable");return l===""||l==="true"},ke=function(e,t,l){if(L(e))return[];var n=Array.prototype.slice.apply(e.querySelectorAll(j));return t&&R.call(e,j)&&n.unshift(e),n=n.filter(l),n},Se=function a(e,t,l){for(var n=[],i=Array.from(e);i.length;){var r=i.shift();if(!L(r,!1))if(r.tagName==="SLOT"){var o=r.assignedElements(),s=o.length?o:r.children,u=a(s,!0,l);l.flatten?n.push.apply(n,u):n.push({scopeParent:r,candidates:u})}else{var h=R.call(r,j);h&&l.filter(r)&&(t||!e.includes(r))&&n.push(r);var d=r.shadowRoot||typeof l.getShadowRoot=="function"&&l.getShadowRoot(r),_=!L(d,!1)&&(!l.shadowRootFilter||l.shadowRootFilter(r));if(d&&_){var c=a(d===!0?r.children:d.children,!0,l);l.flatten?n.push.apply(n,c):n.push({scopeParent:r,candidates:c})}else i.unshift.apply(i,r.children)}}return n},se=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||_e(e))&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},we=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},ie=function(e){return e.tagName==="INPUT"},Ce=function(e){return ie(e)&&e.type==="hidden"},Ie=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(l){return l.tagName==="SUMMARY"});return t},Te=function(e,t){for(var l=0;l<e.length;l++)if(e[l].checked&&e[l].form===t)return e[l]},Ee=function(e){if(!e.name)return!0;var t=e.form||D(e),l=function(o){return t.querySelectorAll('input[type="radio"][name="'+o+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=l(window.CSS.escape(e.name));else try{n=l(e.name)}catch(r){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",r.message),!1}var i=Te(n,e.form);return!i||i===e},$e=function(e){return ie(e)&&e.type==="radio"},qe=function(e){return $e(e)&&!Ee(e)},Ae=function(e){var t,l=e&&D(e),n=(t=l)===null||t===void 0?void 0:t.host,i=!1;if(l&&l!==e){var r,o,s;for(i=!!((r=n)!==null&&r!==void 0&&(o=r.ownerDocument)!==null&&o!==void 0&&o.contains(n)||e!=null&&(s=e.ownerDocument)!==null&&s!==void 0&&s.contains(e));!i&&n;){var u,h,d;l=D(n),n=(u=l)===null||u===void 0?void 0:u.host,i=!!((h=n)!==null&&h!==void 0&&(d=h.ownerDocument)!==null&&d!==void 0&&d.contains(n))}}return i},Q=function(e){var t=e.getBoundingClientRect(),l=t.width,n=t.height;return l===0&&n===0},Be=function(e,t){var l=t.displayCheck,n=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var i=R.call(e,"details>summary:first-of-type"),r=i?e.parentElement:e;if(R.call(r,"details:not([open]) *"))return!0;if(!l||l==="full"||l==="legacy-full"){if(typeof n=="function"){for(var o=e;e;){var s=e.parentElement,u=D(e);if(s&&!s.shadowRoot&&n(s)===!0)return Q(e);e.assignedSlot?e=e.assignedSlot:!s&&u!==e.ownerDocument?e=u.host:e=s}e=o}if(Ae(e))return!e.getClientRects().length;if(l!=="legacy-full")return!0}else if(l==="non-zero-area")return Q(e);return!1},Ne=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var l=0;l<t.children.length;l++){var n=t.children.item(l);if(n.tagName==="LEGEND")return R.call(t,"fieldset[disabled] *")?!0:!n.contains(e)}return!0}t=t.parentElement}return!1},xe=function(e,t){return!(t.disabled||L(t)||Ce(t)||Be(t,e)||Ie(t)||Ne(t))},ee=function(e,t){return!(qe(t)||se(t)<0||!xe(e,t))},Re=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},ze=function a(e){var t=[],l=[];return e.forEach(function(n,i){var r=!!n.scopeParent,o=r?n.scopeParent:n,s=se(o,r),u=r?a(n.candidates):o;s===0?r?t.push.apply(t,u):t.push(o):l.push({documentOrder:i,tabIndex:s,item:n,isScope:r,content:u})}),l.sort(we).reduce(function(n,i){return i.isScope?n.push.apply(n,i.content):n.push(i.content),n},[]).concat(t)},H=function(e,t){t=t||{};var l;return t.getShadowRoot?l=Se([e],t.includeContainer,{filter:ee.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:Re}):l=ke(e,t.includeContainer,ee.bind(null,t)),ze(l)};const Ve=a=>(G("data-v-5f7bcc35"),a=a(),J(),a),Me=Ve(()=>k("div",{style:{flex:"1","margin-top":"-0.75 !important"}},null,-1)),Oe=z({__name:"Modal",props:{open:{type:[Boolean,Object]}},setup(a){const t=fe(a,"open"),l=y(),n=y();function i(o){if(!t.value||o&&o.target!==o.currentTarget)return;const s=P(l),u=s==null?void 0:s.getElementsByClassName("cancel")[0];u instanceof HTMLElement&&u.click()}function r(o){var f,q,x;if(!t.value)return;o.key==="Escape"&&(o.preventDefault(),i());const s=P(n);if(!s)return;const{key:u}=o;if(u!=="Tab"||o.metaKey||o.ctrlKey||o.altKey)return;const h=H(s),d=H(document.documentElement),c=o.composedPath().filter(F=>F instanceof HTMLElement).find(F=>d.includes(F));!c||!h.includes(c)?((f=h[0])==null||f.focus(),o.preventDefault()):c===h[0]&&o.shiftKey?((q=h[h.length-1])==null||q.focus(),o.preventDefault()):c===h[h.length-1]&&!o.shiftKey&&((x=h[0])==null||x.focus(),o.preventDefault())}return le(()=>{C(t)&&setTimeout(()=>{var u;const o=P(n);if(!o)return;(u=H(o)[0])==null||u.focus()},100)}),ve("keydown",r),(o,s)=>(p(),N(ne,{to:"body"},[k("div",{class:Y([{open:t.value},"wrapper"]),onClick:i},[v(W,{ref_key:"dialog",ref:n,class:"modal second-layer",space:.75,style:ae(o.$slots.buttons?"padding-bottom: 0":"")},{default:m(()=>[U(o.$slots,"default",{},void 0,!0),o.$slots.buttons?(p(),g(B,{key:0},[Me,v(O,{ref_key:"buttons",ref:l,class:"buttons",space:.75},{default:m(()=>[U(o.$slots,"buttons",{},void 0,!0)]),_:3},512)],64)):A("",!0)]),_:3},8,["style"])],2)]))}});const ue=V(Oe,[["__scopeId","data-v-5f7bcc35"]]),Ue={class:"spacer"},De=z({__name:"Spacer",props:{size:{}},setup(a){return(e,t)=>(p(!0),g(B,null,oe(+(e.size??1),()=>(p(),g("div",Ue,[U(e.$slots,"default",{},()=>[S("i")],!0)]))),256))}});const te=V(De,[["__scopeId","data-v-27a6f293"]]),Le={key:1},Fe={key:2},Pe=z({__name:"LogInForm",props:{open:{type:Boolean},signUp:{type:Boolean}},emits:["update:open"],setup(a,{emit:e}){const{signUp:t}=a,l=y(""),n=y(""),i=y(""),r=y(!1),o=y(t||!1),s=y("");M.value="",E.on("account:done:verify",()=>{o.value?(s.value="An email has been sent to you. Click the link to verify your account, or it will be deleted in 15 minutes. Go!",setTimeout(()=>{e("update:open",!1)},5e3),location.pathname==="/"&&scrollTo({behavior:"smooth",left:0,top:0})):e("update:open",!1)}),E.on("error",()=>r.value=!1);function u(){r.value||(r.value=!0,M.value="",o.value?E.emit("account:create",l.value,n.value,i.value):E.emit("account:login",l.value,n.value))}return(h,d)=>(p(),N(ue,{open:h.open},{buttons:m(()=>[v($,{disabled:r.value,onClick:u},{default:m(()=>[S(T(o.value?"Sign Up":"Log In"),1)]),_:1},8,["disabled"]),v($,{cancel:"",onClick:d[4]||(d[4]=_=>h.$emit("update:open",!1))},{default:m(()=>[S("Cancel")]),_:1})]),default:m(()=>[k("form",null,[v(W,null,{default:m(()=>[v(K,{modelValue:l.value,"onUpdate:modelValue":d[0]||(d[0]=_=>l.value=_),autocomplete:"username",maxlength:"32",placeholder:"Username (not email address)"},null,8,["modelValue"]),v(K,{modelValue:n.value,"onUpdate:modelValue":d[1]||(d[1]=_=>n.value=_),autocomplete:o.value?"new-password":"password",placeholder:"Password",type:"password"},null,8,["modelValue","autocomplete"]),o.value?(p(),N(K,{key:0,modelValue:i.value,"onUpdate:modelValue":d[2]||(d[2]=_=>i.value=_),autocomplete:"email",placeholder:"Email Address"},null,8,["modelValue"])):A("",!0),v(te),k("span",{class:"link",role:"button",style:{"text-align":"center"},onClick:d[3]||(d[3]=_=>o.value=!o.value)},T(o.value?"Or log in to an existing account...":"Or create a new account..."),1),v(te,{size:2}),C(M)?(p(),g("p",Le,"Error: "+T(C(M)),1)):A("",!0),s.value?(p(),g("p",Fe,T(s.value),1)):A("",!0)]),_:1})])]),_:1},8,["open"]))}});const Ke={},He=a=>(G("data-v-af66507b"),a=a(),J(),a),je={class:"icon text-color",viewBox:"0 0 875 1000",xmlns:"http://www.w3.org/2000/svg"},Ye=He(()=>k("path",{d:"M0 281.296l0 -68.355q1.953 -37.107 29.295 -62.496t64.449 -25.389l93.744 0l0 -31.248q0 -39.06 27.342 -66.402t66.402 -27.342l312.48 0q39.06 0 66.402 27.342t27.342 66.402l0 31.248l93.744 0q37.107 0 64.449 25.389t29.295 62.496l0 68.355q0 25.389 -18.553 43.943t-43.943 18.553l0 531.216q0 52.731 -36.13 88.862t-88.862 36.13l-499.968 0q-52.731 0 -88.862 -36.13t-36.13 -88.862l0 -531.216q-25.389 0 -43.943 -18.553t-18.553 -43.943zm62.496 0l749.952 0l0 -62.496q0 -13.671 -8.789 -22.46t-22.46 -8.789l-687.456 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 62.496zm62.496 593.712q0 25.389 18.553 43.943t43.943 18.553l499.968 0q25.389 0 43.943 -18.553t18.553 -43.943l0 -531.216l-624.96 0l0 531.216zm62.496 -31.248l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm31.248 -718.704l374.976 0l0 -31.248q0 -13.671 -8.789 -22.46t-22.46 -8.789l-312.48 0q-13.671 0 -22.46 8.789t-8.789 22.46l0 31.248zm124.992 718.704l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224zm156.24 0l0 -406.224q0 -13.671 8.789 -22.46t22.46 -8.789l62.496 0q13.671 0 22.46 8.789t8.789 22.46l0 406.224q0 13.671 -8.789 22.46t-22.46 8.789l-62.496 0q-13.671 0 -22.46 -8.789t-8.789 -22.46zm31.248 0l62.496 0l0 -406.224l-62.496 0l0 406.224z"},null,-1)),Ge=[Ye];function Je(a,e){return p(),g("svg",je,Ge)}const We=V(Ke,[["render",Je],["__scopeId","data-v-af66507b"]]),Z=a=>(G("data-v-288fadb0"),a=a(),J(),a),Ze=Z(()=>k("path",{d:`M103.468,58.64v486.202c0,8.186,1.659,16.096,4.931,23.513c3.116,7.063,7.548,13.345,13.173,18.669
      c10.894,10.31,25.135,15.987,40.101,15.987c12.797,0,24.977-4.138,35.224-11.963l104.859-80.09l104.857,80.089
      c10.247,7.826,22.428,11.963,35.225,11.963c14.967,0,29.208-5.678,40.102-15.988c5.624-5.323,10.057-11.604,13.172-18.667
      c3.272-7.417,4.932-15.328,4.932-23.514V58.64c0-32.059-26.081-58.14-58.14-58.14H161.608
      C129.549,0.5,103.468,26.582,103.468,58.64z M457.204,58.64v486.202c0,9.071-7.442,15.329-15.365,15.329
      c-3.144,0-6.361-0.985-9.222-3.169l-121.574-92.856c-2.742-2.094-6.014-3.141-9.287-3.141c-3.273,0-6.545,1.047-9.287,3.141
      l-121.574,92.855c-2.859,2.185-6.079,3.169-9.222,3.169c-7.923,0-15.365-6.257-15.365-15.328V58.64c0-8.45,6.85-15.3,15.3-15.3
      h280.296C450.354,43.34,457.204,50.19,457.204,58.64z`},null,-1)),Xe=Z(()=>k("path",{d:`M161.673,603.511c-15.094,0-29.458-5.727-40.444-16.124c-5.674-5.37-10.144-11.705-13.287-18.83
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
      C294.944,461.626,298.26,460.505,301.756,460.505z`},null,-1)),Qe=[Ze,Xe],et={key:0,style:{"text-align":"center"}},tt=Z(()=>k("p",{style:{"text-align":"center"}}," Your local bookmarks and cloud bookmarks are in conflict. This can occur when you delete bookmarks on another devices or modify your list offline. ",-1)),at={key:2,style:{"text-align":"center"}},lt=["value","onInput"],nt=["onClick"],ot=["href"];function ce(){try{const a=JSON.parse(localStorage.bookmarks);if(Array.isArray(a)){for(const e of a)if(typeof e!="object"||e===null||typeof e.name!="string"||!e.name||typeof e.url!="string"||!e.url)return}b.splice(0,b.length,...a)}catch{}}function de(a=location.pathname+location.search+location.href){a=new URL(a,location.href).href,!b.some(e=>e.url===a)&&(b.push({name:document.title.slice(0,-9)||"zSnout",url:a}),E.emit("bookmarks:update",w.value,b))}const b=pe([]);ce();const I=y();window.addEventListener("storage",a=>{a.storageArea===localStorage&&a.key==="bookmarks"&&ce()});me(b,a=>{w.value&&!I.value&&E.emit("bookmarks:update",w.value,a),localStorage.bookmarks=JSON.stringify(b)},{debounce:500});le(()=>{w.value&&E.emit("bookmarks:request",w.value)});E.on("bookmarks:list",a=>{const e=a.map(l=>l.url);b.map(l=>l.url).filter(l=>!e.includes(l)).length?I.value=a:(I.value=void 0,b.splice(0,b.length,...a))});const rt=z({__name:"BookmarkIcon",props:{fullscreen:{type:Boolean}},setup(a){const e=y(!1),t=y(!1),l=y(!1),n=y(!1);function i(){e.value=!0,t.value=!0}function r(){e.value=!1,n.value=!1,setTimeout(()=>t.value&&(t.value=!1),300)}const o=y(""),s=y(!1),u=y();function h(){o.value="Updating your local copy will overwrite your bookmarks with ones loaded from the cloud. This is not revertable.",s.value=!0,u.value=()=>{I.value&&(b.splice(0,b.length,...I.value),I.value=void 0)}}function d(){o.value="Updating your cloud copy will copy the bookmarks from this device onto your account and sync them across your devices. This is not revertable.",s.value=!0,u.value=()=>{w.value&&(I.value=void 0,E.emit("bookmarks:update",w.value,b))}}return(_,c)=>(p(),g(B,null,[(p(),g("svg",he({class:[{fullscreen:_.fullscreen},"icon"],role:"button",viewBox:"100 0 403.511 603.511",xmlns:"http://www.w3.org/2000/svg",onClick:c[0]||(c[0]=f=>e.value?r():i())},_.$attrs),Qe,16)),(p(),N(ne,{to:"body"},[k("div",{class:Y([{fullscreen:_.fullscreen,open:e.value,visible:t.value},"container"]),onClick:c[4]||(c[4]=f=>r())},[v(W,{class:"bookmarks second-layer",onClick:c[3]||(c[3]=f=>f.stopPropagation())},{default:m(()=>[!C(w)&&C(X)?(p(),g("p",et,[k("span",{class:"link",style:{cursor:"pointer"},onClick:c[1]||(c[1]=f=>l.value=!0)},"Log in"),S(" to save bookmarks to the cloud. ")])):A("",!0),I.value&&C(w)?(p(),g(B,{key:1},[tt,v(O,{stretch:""},{default:m(()=>[v($,{onClick:h},{default:m(()=>[S("Update Local")]),_:1}),v($,{onClick:d},{default:m(()=>[S("Update Cloud")]),_:1})]),_:1})],64)):A("",!0),v(O,{stretch:""},{default:m(()=>[v($,{onClick:de},{default:m(()=>[S("Add this page")]),_:1}),v($,{onClick:c[2]||(c[2]=f=>n.value=!n.value)},{default:m(()=>[S(T(n.value?"Save":"Edit"),1)]),_:1})]),_:1}),b.length===0?(p(),g("p",at,` Click "Add this page" to create a link that always takes you to this page, then click "Edit" to change the bookmark's name. You can save fractals and Storymatic programs as well.`+T(C(X)?C(w)?" Additionally, your bookmarks are synced to the cloud and your other devices.":" If you log in, you can even sync bookmarks to the cloud!":""),1)):A("",!0),(p(!0),g(B,null,oe(b,(f,q)=>(p(),g(B,null,[n.value?(p(),N(O,{key:0},{default:m(()=>[k("input",{class:"bookmark second-layer focusline",value:f.name,style:{flex:"1"},onInput:x=>f.name=x.target.value},null,40,lt),k("div",{class:"second-layer trash-div",onClick:x=>b.splice(q,1)},[v(We,{class:"trash"})],8,nt)]),_:2},1024)):f.url.includes("?")||f.url.includes("#")?(p(),g("a",{key:1,class:"bookmark second-layer hoverline focusline",href:f.url,style:{"text-decoration":"none",color:"inherit"}},T(f.name),9,ot)):(p(),N(C(ye),{key:2,class:"bookmark second-layer hoverline focusline",to:f.url,style:{"text-decoration":"none",color:"inherit"}},{default:m(()=>[S(T(f.name),1)]),_:2},1032,["to"]))],64))),256))]),_:1})],2)])),v(Pe,{open:l.value,"onUpdate:open":c[5]||(c[5]=f=>l.value=f)},null,8,["open"]),v(ue,{open:I.value!==void 0&&C(w)!==""&&s.value},{buttons:m(()=>[v($,{onClick:c[6]||(c[6]=f=>{var q;return(q=u.value)==null?void 0:q.call(u)})},{default:m(()=>[S("OK")]),_:1}),v($,{cancel:"",onClick:c[7]||(c[7]=f=>s.value=!1)},{default:m(()=>[S("Cancel")]),_:1})]),default:m(()=>[k("p",null,T(o.value),1)]),_:1},8,["open"])],64))}});const st=V(rt,[["__scopeId","data-v-288fadb0"]]),dt=Object.freeze(Object.defineProperty({__proto__:null,addThis:de,default:st},Symbol.toStringTag,{value:"Module"}));export{st as B,O as H,ue as M,te as S,We as T,Pe as _,dt as a,H as t};
