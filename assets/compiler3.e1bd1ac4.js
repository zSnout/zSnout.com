function j(t){let s=0,e=!1;const l=[];let i="",n=!1;for(const f of t.split(`
`)){for(const o of f){if(n){if(o==" ")continue;n=!1}if(o=="|"&&(s+=e?1:-1),o=='"'&&(s+=e?-1:1),(o=="|"||o=='"')&&(e=!e),e||((o=="("||o=="["||o=="{")&&s++,(o==")"||o=="]"||o=="}")&&s--),s<0){s=0;continue}if(s==0&&o==";"){const a=i.match(/^\s*/)[0];l.push(i),i=a,l[l.length-1].match(/^\s*[A-Za-z]/)&&(i+=" "),n=!0;continue}i+=o}s==0&&(l.push(i),i="")}return i&&l.push(i),l.join(`
`)}function w(t){return j(t).split(`
`).filter(s=>s.trim()).map(s=>{s=s.replace(/\s+$/,"");const e=s.replace(/^\s+/,"");return[s.length-e.length,e]})}function S(t){let s=0,e=[];const l=[];for(const[i,n]of w(t))i!=s?(e.length&&l.push([s,e]),s=i,e=[n]):e.push(n);return e.length&&l.push([s,e]),l}function _(t){var l,i,n,f,o;let s=0;const e=[];for(const[a,m]of S(t)){if((l=e[a])!=null||(e[a]=[]),a>=s)e[a].push(...m);else if(a<s){for(let p=e.length-1;p>a;p--)!e[p]||((n=e[i=p-1])!=null||(e[i]=[]),typeof e[p]=="object"&&e[p].every(c=>typeof c=="object")?e[p-1].push(...e[p]):e[p-1].push(e[p]),e.length=p);e[a].push(...m)}s=a}for(let a=e.length-1;a>0;a--)!e[a]||((o=e[f=a-1])!=null||(e[f]=[]),typeof e[a]=="object"&&e[a].every(m=>typeof m=="object")?e[a-1].push(...e[a]):e[a-1].push(e[a]),e.length=a);return e[0]||[]}function v(t){const s=k(t),e=[];let l=!0;for(const o of s){if(typeof o!="object")break;if(o.type=="variable"&&l||o.type=="bracket"||o.type=="propertyaccess")e.push(o);else break;l=!1}if(e.length==s.length)return{name:e,mode:"=",value:[]};let i="=";const n=s[e.length];if((n=="+"||n=="-"||n=="*"||n=="/"||n=="%")&&(i=`${n}=`),s[e.length+ +(i!="=")]!="===")return null;const f=s.slice(e.length+ +(i!="=")+1);return{mode:i,value:f,name:e}}function d(t){const s=[];for(let e=0;e<t.length;e++){const l=t[e];if(typeof l=="object"){s.push(...d(l));continue}let i;if(!l.startsWith("#"))if(i=l.match(/^@([\w_][\w\d_]*)\s*(.*)$/)){let n=null;const f=i[2]?k(i[2]):[],o=f[0];if(typeof o=="object"&&o.type=="paren"){let a=null;f.slice(1).length&&(a=[{type:"print",content:f.slice(1)}]),s.push({type:"command",name:i[1],args:g(o.items),block:a});continue}typeof t[e+1]=="object"&&(n=d(t[e+1]),e++),s.push({type:"command",name:i[1],args:g(f),block:n})}else if(i=l.match(/^repeat$/)){let n=[];typeof t[e+1]=="object"&&(n=d(t[e+1]),e++),s.push({type:"while",cond:[{type:"boolean",value:!0}],block:n})}else if(i=l.match(/^(if|elif|else if|unless|while|until|repeat)\b\s*(.+)$/)){let n=[];typeof t[e+1]=="object"&&(n=d(t[e+1]),e++),i[1]=="else if"&&(i[1]="elif"),s.push({type:i[1],cond:k(i[2]),block:n})}else if(i=l.match(/^each\s+\$([\w_][\w\d_]*)\s+(?:in|of)\s+(.*)$/)){let n=[];typeof t[e+1]=="object"&&(n=d(t[e+1]),e++),s.push({type:"each",name:i[1],value:k(i[2]),block:n})}else if(i=l.match(/^else$/)){let n=[];typeof t[e+1]=="object"&&(n=d(t[e+1]),e++),s.push({type:"else",block:n})}else if(i=l.match(/^(break|continue)$/))s.push({type:i[1]});else if(i=l.match(/^const\s*\b(.+)/)){const n=v(i[1]);if(!n||!n.name.length)continue;n.value.length||(n.value=[{type:"null"}]),s.push({type:"const",...n})}else if(i=l.match(/^(?:func|function|def)\s+@([\w_][\w\d_]*)(?:\s+(.+))?/)){const n=t[e+1];if(typeof n=="object"){const f=d(n);e++,s.push({type:"define",name:i[1],args:k(i[2]||""),block:f})}}else if(i=l.match(/^(return)(?:\s+(.+))?/)){let n=[{type:"null"}];i[2]&&(n=k(i[2])),s.push({type:i[1],value:n})}else{const n=v(l),f=k(l);n&&n.name.length&&n.value.length?s.push({type:"variable",...n}):s.push({type:"print",content:f})}}return s}function g(t){if(!t.length)return[];let s=[];const e=[s];for(const l of t)l==","?(s=[],e.push(s)):s.push(l);return e}function k(t,s=!1){const e=[];let l=!1;const i=["<=",">=","&&","||"],n=["+","-","*","/","%",">","<","(",")","[","]",",","!","{","}"];for(;t=l?t:t.trim();){let c;if(l)if(t[0]=='"'){const r=l.reduce((h,y)=>(typeof y=="string"&&typeof h[h.length-1]=="string"?h[h.length-1]+=y:h.push(y),h),[]);e.push({type:"string",content:r}),t=t.slice(1),l=!1}else if(t[0]=="\\")l.push(t[1]),t=t.slice(2);else if(c=t.match(/^\$(\w+)\b(.*)$/))l.push({type:"variable",name:c[1]}),t=c[2];else if(t[0]=="|"){const[r,h]=k(t.slice(1),!0);l.push({type:"embedded",expr:r}),t=h}else l.push(t[0]),t=t.slice(1);else if(c=t.match(/^\.\s*\$?(\w+)\b(.*)$/))e.push({type:"propertyaccess",name:c[1]}),t=c[2];else if(c=t.match(/^\$?(\w+)\s*:(.*)$/))e.push({type:"objectproperty",name:c[1]}),t=c[2];else if(c=t.match(/^\$(\w+)\b(.*)$/))e.push({type:"variable",name:c[1]}),t=c[2];else if(c=t.match(/^@(\w+)\b(.*)$/))e.push({type:"command",name:c[1],arg:[]}),t=c[2];else if(t[0]=="="||t.slice(0,2)=="==")e.push("==="),t=t.slice(1);else if(t[0]=="!=")e.push("!=="),t=t.slice(1);else if(i.includes(t.slice(0,2)))e.push(t.slice(0,2)),t=t.slice(2);else if(n.includes(t[0]))e.push(t[0]),t=t.slice(1);else if(c=t.match(/^(is not|isnt|is|not|and|or)\b(.*)$/)){switch(c[1]){case"is not":case"isnt":e.push("!==");break;case"is":e.push("===");break;case"not":e.push("!");break;case"and":e.push("&&");break;case"or":e.push("||");break}t=c[2]}else if(c=t.match(/^(\d+(?:\.\d+)?)\b(.*)$/)){const r=parseFloat(c[1]);Number.isNaN(r)||e.push({type:"number",value:r}),t=c[2]}else if(c=t.match(/^(true|false|yes|no|on|off|y|n)\b(.*)$/)){const r=c[1]=="true"||c[1]=="yes"||c[1]=="on"||c[1]=="y";e.push({type:"boolean",value:r}),t=c[2]}else if(c=t.match(/^(null)\b(.*)$/))e.push({type:"null"}),t=c[2];else{if(t[0]=="|"&&s)return[e,t.slice(1)];t[0]=='"'&&(l=[]),t=t.slice(1)}}let f={type:"paren",items:[]};const o=[f],a={"(":"paren","[":"bracket","{":"brace"};for(const c of e)if(c=="("||c=="["||c=="{")f={type:a[c],items:[]},o.push(f);else if(c==")"||c=="]"||c=="}"){const r=o.pop();if(!r)return[];f=o[o.length-1],f.items.push(r)}else f.items.push(c);const m=o[0];if(!m)return[];if(!m.items.length)return[];function p(c){for(let r=0;r<c.length;r++){const h=c[r];if(typeof h=="object"){if("items"in h){p(h.items);continue}if(h.type=="command"){const y=c[r+1];if(typeof y=="object"&&y.type=="paren")p(y.items),h.arg=g(y.items),r++,c.splice(r,1);else{h.arg=g(c.splice(r+1));break}}}}}return p(m.items),m.items}function A(t){return d(_(t))}function $(t){return t.split(`
`).map(s=>"  "+s).join(`
`)}function J(t){let s=" `";for(const e of t)typeof e=="string"?s+=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$").replace(/{/g,"\\{"):e.type=="variable"?s+=`\${ $${e.name} }`:e.type=="embedded"&&(s+=`\${ ${u(e.expr)} }`);return s+"` "}function u(t){let s="";for(const e of t)typeof e=="string"?s+=` ${e} `:e.type=="paren"?s+=` ( ${u(e.items)} ) `:e.type=="bracket"?s+=` [ ${u(e.items)} ] `:e.type=="brace"?s+=` { ${u(e.items)} } `:e.type=="number"?s+=` ${e.value} `:e.type=="boolean"?s+=` ${e.value} `:e.type=="null"?s+=" null ":e.type=="variable"?s+=` $${e.name} `:e.type=="propertyaccess"?s+=` .$${e.name} `:e.type=="objectproperty"?s+=` $${e.name}: `:e.type=="command"?s+=` ( await $${e.name}( [ ${e.arg.map(u).join(" , ")} ] ) ) `:e.type=="string"&&(s+=J(e.content));return s.replace(/\s+/g," ").trim()}function b(t){let s="";for(const e of t)switch(e.type){case"print":s+=`_print( ${u(e.content)} );
`;break;case"variable":s+=`${u(e.name)} ${e.mode} ${u(e.value)};
`;break;case"continue":case"break":s+=e.type+`;
`;break;case"const":s+=`const ${u(e.name)} = ${u(e.value)};
`;break;case"define":s+=`async function $${e.name}( [ ${u(e.args)} ] = [] ) {
${$(b(e.block))}
}

`;break;case"command":e.block?s+=`await $${e.name}( [ ${e.args.map(u).join(" , ")} ], async function () {
${$(b(e.block))}
} );
`:s+=`await $${e.name}( [ ${e.args.map(u).join(" , ")} ] );
`;break;case"if":case"while":s+=`${e.type} ( ${u(e.cond)} ) {
${$(b(e.block))}
}
`;break;case"repeat":s+=`for ( const _loop of Array( + ( ${u(e.cond)} ) ) ) {
${$(b(e.block))}
}
`;break;case"unless":case"until":s+=`${e.type=="unless"?"if":"while"} ( ! ( ${u(e.cond)} ) ) {
${$(b(e.block))}
}
`;break;case"elif":s+=`else if ( ${u(e.cond)} ) {
${$(b(e.block))}
}
`;break;case"else":s+=`else {
${$(b(e.block))}
}
`;break;case"return":s+=`return ${u(e.value)};
`;break;case"each":s+=`for (const $${e.name} of ${u(e.value)}) {
${$(b(e.block))}
}
`;break}return s.split(`
`).map(e=>e.replace(/([^ ]) +/gm,"$1 ")).join(`
`).trim()}function T(t){return`// Generated by zSnout Storymatic
// https://zsnout.com/storymatic/

`+b(A(t))}export{T as s};
