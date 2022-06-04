import{d as v,f as I,o as f,c as T,a as h,ae as b,R as M,a9 as p,b as S,ak as k,r as m,p as O,an as F,ao as L,am as V,ap as B,aq as U,ar as G,w as H,l as q,e as y,ah as z,g as W}from"./index.2953399f.js";import{_ as g,D as P}from"./DocumentDisplay.33d3b46b.js";const Z=["href"],j=v({name:"Link",props:{to:null},setup(r){const{to:e}=r,t=/^\/(?!\/)|\.\.?\//.test(e);return(a,n)=>I(t)?(f(),T(I(M),{key:0,to:r.to},{default:h(()=>[b(a.$slots,"default")]),_:3},8,["to"])):(f(),p("a",{key:1,href:r.to},[b(a.$slots,"default")],8,Z))}});const X={class:"title"},Y={class:"description"},J=["data-keywords"],K={class:"title"},Q={class:"description"},ee=v({name:"Card",props:{title:null,description:null,keywords:null,to:null},setup(r){return(e,t)=>r.to?(f(),T(j,{key:0,class:"card second-layer hoverline focusline","data-keywords":r.keywords,to:r.to},{default:h(()=>[S("p",X,k(r.title),1),S("p",Y,k(r.description),1)]),_:1},8,["data-keywords","to"])):(f(),p("div",{key:1,class:"card second-layer hoverline focusline","data-keywords":r.keywords},[S("p",K,k(r.title),1),S("p",Q,k(r.description),1)],8,J))}});var te=g(ee,[["__scopeId","data-v-3e36acad"]]);const ae=["autocomplete","placeholder","type"],re=v({name:"Field",props:{modelValue:null,type:null,autocomplete:null,placeholder:null},emits:["update:modelValue"],setup(r,{emit:e}){const{modelValue:t}=r,a=m(t);return O(a,n=>e("update:modelValue",n)),(n,o)=>{var s,i;return F((f(),p("input",{"onUpdate:modelValue":o[0]||(o[0]=l=>a.value=l),class:"second-layer field focusline",autocomplete:(s=r.autocomplete)!=null?s:"off",placeholder:r.placeholder,type:(i=r.type)!=null?i:"text"},null,8,ae)),[[L,a.value]])}}});var ne=g(re,[["__scopeId","data-v-cca2bc7a"]]);/*!
* tabbable 5.3.3
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var se=["input","select","textarea","a[href]","button","[tabindex]:not(slot)","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],R=se.join(","),$=typeof Element=="undefined",_=$?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,x=!$&&Element.prototype.getRootNode?function(r){return r.getRootNode()}:function(r){return r.ownerDocument},ie=function(e,t,a){var n=Array.prototype.slice.apply(e.querySelectorAll(R));return t&&_.call(e,R)&&n.unshift(e),n=n.filter(a),n},oe=function r(e,t,a){for(var n=[],o=Array.from(e);o.length;){var s=o.shift();if(s.tagName==="SLOT"){var i=s.assignedElements(),l=i.length?i:s.children,u=r(l,!0,a);a.flatten?n.push.apply(n,u):n.push({scope:s,candidates:u})}else{var c=_.call(s,R);c&&a.filter(s)&&(t||!e.includes(s))&&n.push(s);var d=s.shadowRoot||typeof a.getShadowRoot=="function"&&a.getShadowRoot(s),w=!a.shadowRootFilter||a.shadowRootFilter(s);if(d&&w){var C=r(d===!0?s.children:d.children,!0,a);a.flatten?n.push.apply(n,C):n.push({scope:s,candidates:C})}else o.unshift.apply(o,s.children)}}return n},N=function(e,t){return e.tabIndex<0&&(t||/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||e.isContentEditable)&&isNaN(parseInt(e.getAttribute("tabindex"),10))?0:e.tabIndex},le=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},A=function(e){return e.tagName==="INPUT"},ue=function(e){return A(e)&&e.type==="hidden"},ce=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(a){return a.tagName==="SUMMARY"});return t},de=function(e,t){for(var a=0;a<e.length;a++)if(e[a].checked&&e[a].form===t)return e[a]},fe=function(e){if(!e.name)return!0;var t=e.form||x(e),a=function(i){return t.querySelectorAll('input[type="radio"][name="'+i+'"]')},n;if(typeof window!="undefined"&&typeof window.CSS!="undefined"&&typeof window.CSS.escape=="function")n=a(window.CSS.escape(e.name));else try{n=a(e.name)}catch(s){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",s.message),!1}var o=de(n,e.form);return!o||o===e},he=function(e){return A(e)&&e.type==="radio"},ve=function(e){return he(e)&&!fe(e)},E=function(e){var t=e.getBoundingClientRect(),a=t.width,n=t.height;return a===0&&n===0},pe=function(e,t){var a=t.displayCheck,n=t.getShadowRoot;if(getComputedStyle(e).visibility==="hidden")return!0;var o=_.call(e,"details>summary:first-of-type"),s=o?e.parentElement:e;if(_.call(s,"details:not([open]) *"))return!0;var i=x(e).host,l=(i==null?void 0:i.ownerDocument.contains(i))||e.ownerDocument.contains(e);if(!a||a==="full"){if(typeof n=="function"){for(var u=e;e;){var c=e.parentElement,d=x(e);if(c&&!c.shadowRoot&&n(c)===!0)return E(e);e.assignedSlot?e=e.assignedSlot:!c&&d!==e.ownerDocument?e=d.host:e=c}e=u}if(l)return!e.getClientRects().length}else if(a==="non-zero-area")return E(e);return!1},ye=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var a=0;a<t.children.length;a++){var n=t.children.item(a);if(n.tagName==="LEGEND")return _.call(t,"fieldset[disabled] *")?!0:!n.contains(e)}return!0}t=t.parentElement}return!1},be=function(e,t){return!(t.disabled||ue(t)||pe(t,e)||ce(t)||ye(t))},D=function(e,t){return!(ve(t)||N(t)<0||!be(e,t))},me=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!(isNaN(t)||t>=0)},_e=function r(e){var t=[],a=[];return e.forEach(function(n,o){var s=!!n.scope,i=s?n.scope:n,l=N(i,s),u=s?r(n.candidates):i;l===0?s?t.push.apply(t,u):t.push(i):a.push({documentOrder:o,tabIndex:l,item:n,isScope:s,content:u})}),a.sort(le).reduce(function(n,o){return o.isScope?n.push.apply(n,o.content):n.push(o.content),n},[]).concat(t)},ge=function(e,t){t=t||{};var a;return t.getShadowRoot?a=oe([e],t.includeContainer,{filter:D.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:me}):a=ie(e,t.includeContainer,D.bind(null,t)),_e(a)};const we=v({name:"Grid",setup(r){const e=m(4),t=m();return V(t,()=>{if(t.value){const a=getComputedStyle(t.value);e.value=a.gridTemplateColumns.split(" ").length}}),B(t,"keydown",a=>{var l,u,c,d;const n=a.composedPath(),o=n[n.indexOf(t.value)-1];if(!o)return;const s=ge(document.documentElement),i=s.indexOf(o);if(i!==-1)switch(a.key){case"ArrowRight":(l=s[i+1])==null||l.focus();break;case"ArrowLeft":(u=s[i-1])==null||u.focus();break;case"ArrowDown":(c=s[Math.min(i+e.value,s.length-1)])==null||c.focus();break;case"ArrowUp":(d=s[Math.max(i-e.value,0)])==null||d.focus();break}}),(a,n)=>(f(),p("div",{ref_key:"grid",ref:t,class:"grid"},[b(a.$slots,"default",{},void 0,!0)],512))}});var Se=g(we,[["__scopeId","data-v-32b0e23d"]]);const ke="_hidden_1hstl_1";var Re={hidden:ke};const xe=v({name:"SearchableGrid",setup(r){const e=m(""),t=m(),a=U();function n(i){var c,d,w;const l=(d=(c=i.children[0])==null?void 0:c.textContent)!=null?d:i.textContent,u=(w=i.dataset)==null?void 0:w.keywords;return`${l} ${u}`.toLowerCase()}function o(i,l){if(l.length===1&&!l[0])return!0;const u=n(i);return l.every(c=>u.includes(c))}function s(){var u;const i=e.value.trim().split(/\s+/g),l=(u=t.value)==null?void 0:u.$el;if(!!l)for(let c of l.children)c.classList.toggle(a.hidden,!o(c,i))}return G(t,s,{subtree:!0,childList:!0}),H(s),q(s),(i,l)=>(f(),p(z,null,[y(ne,{modelValue:e.value,"onUpdate:modelValue":l[0]||(l[0]=u=>e.value=u),placeholder:"Type to search zSnout..."},null,8,["modelValue"]),y(Se,{ref_key:"grid",ref:t},{default:h(()=>[b(i.$slots,"default")]),_:3},512)],64))}}),Te={$style:Re};var Ce=g(xe,[["__cssModules",Te]]);const Ie={},Ee={class:"title"};function De(r,e){return f(),p("h1",Ee,[b(r.$slots,"default",{},void 0,!0)])}var $e=g(Ie,[["render",De],["__scopeId","data-v-5df92b17"]]);const Ne=W("Welcome to zSnout!"),Oe=v({name:"Home",setup(r){return(e,t)=>(f(),T(P,null,{default:h(()=>[y($e,null,{default:h(()=>[Ne]),_:1}),y(Ce,null,{default:h(()=>[y(te,{description:"We're not sure why you'd go to the 404 page, but here's a link if you need it.",keywords:"not found error page",title:"404 page",to:"/404"})]),_:1})]),_:1}))}});export{Oe as default};
