function j(t){let s=0,e=!1;const c=[];let i="",n=!1;for(const a of t.split(`
`)){for(const o of a){if(n){if(o==" ")continue;n=!1}if(o=="|"&&(s+=e?1:-1),o=='"'&&(s+=e?-1:1),(o=="|"||o=='"')&&(e=!e),e||((o=="("||o=="["||o=="{")&&s++,(o==")"||o=="]"||o=="}")&&s--),s<0){s=0;continue}if(s==0&&o==";"){const h=i.match(/^\s*/)[0];c.push(i),i=h,c[c.length-1].match(/^\s*[A-Za-z]/)&&(i+=" "),n=!0;continue}i+=o}s==0&&(c.push(i),i="")}return i&&c.push(i),c.join(`
`)}function w(t){return j(t).split(`
`).filter(s=>s.trim()).map(s=>{s=s.replace(/\s+$/,"");const e=s.replace(/^\s+/,"");return[s.length-e.length,e]})}function S(t){let s=0,e=[];const c=[];for(const[i,n]of w(t))i!=s?(e.length&&c.push([s,e]),s=i,e=[n]):e.push(n);return e.length&&c.push([s,e]),c}function _(t){var c,i;let s=0;const e=[];for(const[n,a]of S(t)){if(e[n]??(e[n]=[]),n>=s)e[n].push(...a);else if(n<s){for(let o=e.length-1;o>n;o--)e[o]&&(e[c=o-1]??(e[c]=[]),typeof e[o]=="object"&&e[o].every(h=>typeof h=="object")?e[o-1].push(...e[o]):e[o-1].push(e[o]),e.length=o);e[n].push(...a)}s=n}for(let n=e.length-1;n>0;n--)e[n]&&(e[i=n-1]??(e[i]=[]),typeof e[n]=="object"&&e[n].every(a=>typeof a=="object")?e[n-1].push(...e[n]):e[n-1].push(e[n]),e.length=n);return e[0]||[]}function v(t){const s=$(t),e=[];let c=!0;for(const o of s){if(typeof o!="object")break;if(o.type=="variable"&&c||o.type=="bracket"||o.type=="propertyaccess")e.push(o);else break;c=!1}if(e.length==s.length)return{name:e,mode:"=",value:[]};let i="=";const n=s[e.length];if((n=="+"||n=="-"||n=="*"||n=="/"||n=="%")&&(i=`${n}=`),s[e.length+ +(i!="=")]!="===")return null;const a=s.slice(e.length+ +(i!="=")+1);return{mode:i,value:a,name:e}}function y(t){const s=[];for(let e=0;e<t.length;e++){const c=t[e];if(typeof c=="object"){s.push(...y(c));continue}let i;if(!c.startsWith("#"))if(i=c.match(/^@([\w_][\w\d_]*)\s*(.*)$/)){let n=null;const a=i[2]?$(i[2]):[],o=a[0];if(typeof o=="object"&&o.type=="paren"){let h=null;a.slice(1).length&&(h=[{type:"print",content:a.slice(1)}]),s.push({type:"command",name:i[1],args:k(o.items),block:h});continue}typeof t[e+1]=="object"&&(n=y(t[e+1]),e++),s.push({type:"command",name:i[1],args:k(a),block:n})}else if(i=c.match(/^repeat$/)){let n=[];typeof t[e+1]=="object"&&(n=y(t[e+1]),e++),s.push({type:"while",cond:[{type:"boolean",value:!0}],block:n})}else if(i=c.match(/^(if|elif|else if|unless|while|until|repeat)\b\s*(.+)$/)){let n=[];typeof t[e+1]=="object"&&(n=y(t[e+1]),e++),i[1]=="else if"&&(i[1]="elif"),s.push({type:i[1],cond:$(i[2]),block:n})}else if(i=c.match(/^each\s+\$([\w_][\w\d_]*)\s+(?:in|of)\s+(.*)$/)){let n=[];typeof t[e+1]=="object"&&(n=y(t[e+1]),e++),s.push({type:"each",name:i[1],value:$(i[2]),block:n})}else if(i=c.match(/^else$/)){let n=[];typeof t[e+1]=="object"&&(n=y(t[e+1]),e++),s.push({type:"else",block:n})}else if(i=c.match(/^(break|continue)$/))s.push({type:i[1]});else if(i=c.match(/^const\s*\b(.+)/)){const n=v(i[1]);if(!n||!n.name.length)continue;n.value.length||(n.value=[{type:"null"}]),s.push({type:"const",...n})}else if(i=c.match(/^(?:func|function|def)\s+@([\w_][\w\d_]*)(?:\s+(.+))?/)){const n=t[e+1];if(typeof n=="object"){const a=y(n);e++,s.push({type:"define",name:i[1],args:$(i[2]||""),block:a})}}else if(i=c.match(/^(return)(?:\s+(.+))?/)){let n=[{type:"null"}];i[2]&&(n=$(i[2])),s.push({type:i[1],value:n})}else{const n=v(c),a=$(c);n&&n.name.length&&n.value.length?s.push({type:"variable",...n}):s.push({type:"print",content:a})}}return s}function k(t){if(!t.length)return[];let s=[];const e=[s];for(const c of t)c==","?(s=[],e.push(s)):s.push(c);return e}function $(t,s=!1){const e=[];let c=!1;const i=["<=",">=","&&","||"],n=["+","-","*","/","%",">","<","(",")","[","]",",","!","{","}"];for(;t=c?t:t.trim();){let l;if(c)if(t[0]=='"'){const f=c.reduce((u,m)=>(typeof m=="string"&&typeof u[u.length-1]=="string"?u[u.length-1]+=m:u.push(m),u),[]);e.push({type:"string",content:f}),t=t.slice(1),c=!1}else if(t[0]=="\\")c.push(t[1]),t=t.slice(2);else if(l=t.match(/^\$(\w+)\b(.*)$/))c.push({type:"variable",name:l[1]}),t=l[2];else if(t[0]=="|"){const[f,u]=$(t.slice(1),!0);c.push({type:"embedded",expr:f}),t=u}else c.push(t[0]),t=t.slice(1);else if(l=t.match(/^\.\s*\$?(\w+)\b(.*)$/))e.push({type:"propertyaccess",name:l[1]}),t=l[2];else if(l=t.match(/^\$?(\w+)\s*:(.*)$/))e.push({type:"objectproperty",name:l[1]}),t=l[2];else if(l=t.match(/^\$(\w+)\b(.*)$/))e.push({type:"variable",name:l[1]}),t=l[2];else if(l=t.match(/^@(\w+)\b(.*)$/))e.push({type:"command",name:l[1],arg:[]}),t=l[2];else if(t[0]=="="||t.slice(0,2)=="==")e.push("==="),t=t.slice(1);else if(t[0]=="!=")e.push("!=="),t=t.slice(1);else if(i.includes(t.slice(0,2)))e.push(t.slice(0,2)),t=t.slice(2);else if(n.includes(t[0]))e.push(t[0]),t=t.slice(1);else if(l=t.match(/^(is not|isnt|is|not|and|or)\b(.*)$/)){switch(l[1]){case"is not":case"isnt":e.push("!==");break;case"is":e.push("===");break;case"not":e.push("!");break;case"and":e.push("&&");break;case"or":e.push("||");break}t=l[2]}else if(l=t.match(/^(\d+(?:\.\d+)?)\b(.*)$/)){const f=parseFloat(l[1]);Number.isNaN(f)||e.push({type:"number",value:f}),t=l[2]}else if(l=t.match(/^(true|false|yes|no|on|off|y|n)\b(.*)$/)){const f=l[1]=="true"||l[1]=="yes"||l[1]=="on"||l[1]=="y";e.push({type:"boolean",value:f}),t=l[2]}else if(l=t.match(/^(null)\b(.*)$/))e.push({type:"null"}),t=l[2];else{if(t[0]=="|"&&s)return[e,t.slice(1)];t[0]=='"'&&(c=[]),t=t.slice(1)}}let a={type:"paren",items:[]};const o=[a],h={"(":"paren","[":"bracket","{":"brace"};for(const l of e)if(l=="("||l=="["||l=="{")a={type:h[l],items:[]},o.push(a);else if(l==")"||l=="]"||l=="}"){const f=o.pop();if(!f)return[];a=o[o.length-1],a.items.push(f)}else a.items.push(l);const d=o[0];if(!d)return[];if(!d.items.length)return[];function g(l){for(let f=0;f<l.length;f++){const u=l[f];if(typeof u=="object"){if("items"in u){g(u.items);continue}if(u.type=="command"){const m=l[f+1];if(typeof m=="object"&&m.type=="paren")g(m.items),u.arg=k(m.items),f++,l.splice(f,1);else{u.arg=k(l.splice(f+1));break}}}}}return g(d.items),d.items}function A(t){return y(_(t))}function b(t){return t.split(`
`).map(s=>"  "+s).join(`
`)}function J(t){let s=" `";for(const e of t)typeof e=="string"?s+=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$").replace(/{/g,"\\{"):e.type=="variable"?s+=`\${ $${e.name} }`:e.type=="embedded"&&(s+=`\${ ${r(e.expr)} }`);return s+"` "}function r(t){let s="";for(const e of t)typeof e=="string"?s+=` ${e} `:e.type=="paren"?s+=` ( ${r(e.items)} ) `:e.type=="bracket"?s+=` [ ${r(e.items)} ] `:e.type=="brace"?s+=` { ${r(e.items)} } `:e.type=="number"?s+=` ${e.value} `:e.type=="boolean"?s+=` ${e.value} `:e.type=="null"?s+=" null ":e.type=="variable"?s+=` $${e.name} `:e.type=="propertyaccess"?s+=` .$${e.name} `:e.type=="objectproperty"?s+=` $${e.name}: `:e.type=="command"?s+=` ( await $${e.name}( [ ${e.arg.map(r).join(" , ")} ] ) ) `:e.type=="string"&&(s+=J(e.content));return s.replace(/\s+/g," ").trim()}function p(t){let s="";for(const e of t)switch(e.type){case"print":s+=`_print( ${r(e.content)} );
`;break;case"variable":s+=`${r(e.name)} ${e.mode} ${r(e.value)};
`;break;case"continue":case"break":s+=e.type+`;
`;break;case"const":s+=`const ${r(e.name)} = ${r(e.value)};
`;break;case"define":s+=`async function $${e.name}( [ ${r(e.args)} ] = [] ) {
${b(p(e.block))}
}

`;break;case"command":e.block?s+=`await $${e.name}( [ ${e.args.map(r).join(" , ")} ], async function () {
${b(p(e.block))}
} );
`:s+=`await $${e.name}( [ ${e.args.map(r).join(" , ")} ] );
`;break;case"if":case"while":s+=`${e.type} ( ${r(e.cond)} ) {
${b(p(e.block))}
}
`;break;case"repeat":s+=`for ( const _loop of Array( + ( ${r(e.cond)} ) ) ) {
${b(p(e.block))}
}
`;break;case"unless":case"until":s+=`${e.type=="unless"?"if":"while"} ( ! ( ${r(e.cond)} ) ) {
${b(p(e.block))}
}
`;break;case"elif":s+=`else if ( ${r(e.cond)} ) {
${b(p(e.block))}
}
`;break;case"else":s+=`else {
${b(p(e.block))}
}
`;break;case"return":s+=`return ${r(e.value)};
`;break;case"each":s+=`for (const $${e.name} of ${r(e.value)}) {
${b(p(e.block))}
}
`;break}return s.split(`
`).map(e=>e.replace(/([^ ]) +/gm,"$1 ")).join(`
`).trim()}function T(t){return`// Generated by zSnout Storymatic
// https://zsnout.com/storymatic/

`+p(A(t))}export{T as s};
