import{aJ as computed,d as defineComponent,o as openBlock,c as createBlock}from"./index.b44de49b.js";import{a as ace,A as AceEditor}from"./AceEditor.af4efd55.js";const map=new Map([["(","lparen"],[")","rparen"],["=","assign"],[`
`,"newline"],[".","dot"]]),lambdas=new Set(["\u039B","\u03BB","\u1D27","\u2C96","\u2C97","\u{1D6B2}","\u{1D6CC}","\u{1D6EC}","\u{1D706}","\u{1D726}","\u{1D740}","\u{1D760}","\u{1D77A}","\u{1D79A}","\u{1D7B4}","\\"]);function tokenize(t){var r;let e=t.trim();const a=[];for(;e;){if(e[0]==="{"){let n=0,l;for(;(l=e[0])&&(l==="{"&&n++,l==="}"&&n--,e=e.slice(1),n!==0););}else if(lambdas.has(e[0]))a.push({type:"lambda"}),e=e.slice(1);else if(map.has(e[0]))a.push({type:map.get(e[0])}),e=e.slice(1);else{const n=e.match(/^[\w\d+\-*\/%@?!:_#$^&|~;'"]+/);n?(a.push({type:"variable",name:n[0]}),e=e.slice(n[0].length)):e=e.slice(1)}for(;e.startsWith(" ")||e.startsWith("	");)e=e.slice(1)}const i=a.reduce((n,l)=>{if(l.type==="lparen"){const s={type:"group",tokens:[],parent:n};return n.tokens.push(s),s}else if(l.type==="rparen"){if(!n.parent)throw new SyntaxError("Unmatched closing parenthesis");return n.parent}return n.tokens.push(l),n},{type:"group",tokens:[]});if(i.parent)throw new SyntaxError("Unmatched opening parenthesis");i.tokens.forEach(function n(l){l.type==="group"&&(delete l.parent,l.tokens.forEach(n))});const o=[];for(let n=0;n<i.tokens.length;n++){const l=i.tokens[n],s=i.tokens[n+1];if(l.type==="variable"&&(s==null?void 0:s.type)==="assign"){if(n===i.tokens.length-2)throw new SyntaxError("An alias declaration must have a value.");if(n===i.tokens.length-3)throw new SyntaxError("An alias declaration must not be the last thing in a script.");const u={type:"alias",name:l.name,value:[]};for(n++;++n<i.tokens.length-1;){if(((r=i.tokens[n+1])==null?void 0:r.type)==="assign"){n--;break}if(i.tokens[n].type==="newline")break;u.value.push(i.tokens[n])}if(u.value.length===0)throw new SyntaxError("An alias must have a value.");o.push(u)}else o.push(l)}return o}function toExpression(t,e={}){var a,i;if(Array.isArray(t)){const o=t.filter(r=>r.type!=="lparen"&&r.type!=="rparen"&&r.type!=="assign"&&r.type!=="newline");if(o.length===0)throw new SyntaxError("Cannot convert empty token list to expression.");if(o.length===1)t=o[0];else if(o[0].type==="lambda"){if(((a=o[1])==null?void 0:a.type)!=="variable")throw new SyntaxError("A lambda must be followed by a variable.");if(((i=o[2])==null?void 0:i.type)!=="dot")throw new SyntaxError("A lambda variable must be followed by a dot.");if(o.length<3)throw new SyntaxError("A lambda function must have a value.");const r=+Math.random().toString().slice(2,12);return{type:"function",variable:o[1].name,scope:r,expr:toExpression(o.slice(3),{...e,[o[1].name]:r})}}else if(o[0].type==="alias"){const r=+Math.random().toString().slice(2,12);return{type:"application",lhs:{type:"function",variable:o[0].name,scope:r,expr:toExpression(o.slice(1),{...e,[o[0].name]:r})},rhs:toExpression(o[0].value,e)}}else{if(o[0].type==="dot")throw new SyntaxError("A dot cannot appear outside of a lambda function.");{let r=toExpression(o[0],e);for(let n=1;n<o.length;n++){if(o[n].type==="lambda")return{type:"application",lhs:r,rhs:toExpression(o.slice(n),e)};r={type:"application",lhs:r,rhs:toExpression(o[n],e)}}return r}}}if(t.type==="variable")return{...t,scope:e[t.name]};if(t.type==="group")return toExpression(t.tokens,e);throw new SyntaxError(`Cannot convert singular '${t.type}' token to an expression.`)}function useCompileLambda(t){return computed(()=>{try{const e=tokenize(t.value);return toExpression(e)}catch(e){return console.error(e),""+e}})}const special={"+":"_add","-":"_sub","*":"_mult","/":"_div","%":"_mod","@":"_at","?":"_ques","!":"_exclm",":":"_colon",_:"__","#":"_hash",$:"$","^":"_pos","&":"_amp","|":"_bar","~":"_tilde",";":"_semi","'":"_apos",'"':"_quote",__proto__:null};function normalizeVar(t){return t=t.split("").map(e=>e in special?special[e]:e).join(""),t.match(/^\d|^(abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/)?`_${t}`:t}function indent(t){return t.split(/\n+/g).join(`
  `)}function toJS(t){try{if(t.type==="variable")return normalizeVar(t.name);if(t.type==="application"){let e=toJS(t.rhs);return t.rhs.type==="function"&&(e=e.slice(1,-1)),e.length>60?`${toJS(t.lhs)}(
  ${indent(e)}
)`:`${toJS(t.lhs)}(${e})`}else{let e=toJS(t.expr);return t.expr.type==="function"&&(e=e.slice(1,-1)),e.length>40?`(${normalizeVar(t.variable)} =>
  ${indent(e)}
)`:`(${normalizeVar(t.variable)} => ${e})`}}catch(e){return""+e}}function evaluate(expr){let _output="";const output=t=>{const e=Convert.toNumber(t);return typeof e=="number"&&(_output+=String.fromCharCode(e)),a=>a};try{return{fn:eval(`print_subbyte => ${toJS(expr)}`)(output),output:_output}}catch(t){return{fn:""+t,output:_output}}}var Convert;(t=>{function e(l){try{const s=l(u=>u+1)(!0)(!1);return typeof s!="boolean"?!1:s}catch{return!1}}t.isNil=e;function a(l){try{const s=l(u=>u+1)(0);if(typeof s=="number")return s}catch{}}t.toNumber=a;function i(l){try{const s=l(!0)(!1);if(typeof s=="boolean")return s}catch{}}t.toBoolean=i;function o(l){try{let s,u;if(l(c=>p=>(s=r(c),u=r(p))),typeof s!="undefined"&&typeof u!="undefined")return[s,u]}catch{}}t.toPair=o;function r(l){if(e(l))return"nil";const s=a(l),u=i(l);if(s===0&&u===!1)return"0/false";if(typeof u=="boolean")return""+u;if(typeof s=="number")return""+s;const c=o(l);if(c)return`(${c[0]}, ${c[1]})`}t.valueOf=r;function n(l){return r(l)||"No conversions available."}t.all=n})(Convert||(Convert={}));function useEvaluateLambda(t){const e=useCompileLambda(t);return computed(()=>{try{if(typeof e.value=="string")return{output:"",result:e.value};const a=evaluate(e.value);return typeof a.fn=="string"?{output:a.output,result:a.fn}:{output:a.output,result:Convert.all(a.fn)}}catch(a){return{output:"",result:""+a}}})}const _sfc_main=defineComponent({__name:"Editor",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(t){ace.define("ace/mode/lambda_calculus",(a,i)=>{const o=a("ace/lib/oop"),r=a("ace/mode/text").Mode,n=a("ace/mode/lambda_calculus_highlight_rules").LambdaCalculusHighlightRules,l=function(){this.HighlightRules=n};o.inherits(l,r),i.Mode=l}),ace.define("ace/mode/lambda_calculus_highlight_rules",(a,i)=>{const o=a("ace/lib/oop"),r=a("ace/mode/text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{defaultToken:"text"}]}};o.inherits(n,r),i.LambdaCalculusHighlightRules=n});function e(a){a.on("change",i=>{i.action==="insert"&&a.replaceAll("\u03BB",{needle:/lambda|[ΛλᴧⲖⲗ𝚲𝛌𝛬𝜆𝜦𝝀𝝠𝝺𝞚𝞴\\]/g,caseSensitive:!1})})}return(a,i)=>{var o;return openBlock(),createBlock(AceEditor,{modelValue:t.modelValue,placeholder:(o=t.placeholder)!=null?o:"Write some lambdas...",readonly:t.readonly,round:t.round,mode:"lambda_calculus",onInit:i[0]||(i[0]=r=>e(r)&&a.$emit("init",r)),onSave:i[1]||(i[1]=r=>a.$emit("save",r)),"onUpdate:modelValue":i[2]||(i[2]=r=>a.$emit("update:modelValue",r))},null,8,["modelValue","placeholder","readonly","round"])}}});var initial=`I = \u03BBx.x
C = \u03BBx.\u03BB_.x
B = \u03BBf.\u03BBg.\u03BBx.f(g x)
M = \u03BBf.f f
Y = \u03BBf.(\u03BBx.(x x) \u03BBx.(f \u03BBy.(x x y)))
void = \u03BB_.M M

let = \u03BBx.\u03BBf.f x

T = \u03BBx.\u03BBy.x
F = \u03BBx.\u03BBy.y
not = \u03BBb.b F T
and = \u03BBa.\u03BBb.a b F
or = \u03BBa.\u03BBb.a T b

do2 = F
if = \u03BBp.\u03BBa.\u03BBb.p a b p

pair = \u03BBx.\u03BBy.\u03BBf.f x y
fst = \u03BBp.p T
snd = \u03BBp.p F

0 = \u03BBf.\u03BBx.x
succ = \u03BBn.\u03BBf.\u03BBx.f(n f x)
phi = \u03BBp.pair (succ (fst p)) (fst p)
prev = \u03BBn.n phi (pair 0 0) F

zero? = \u03BBn.n F not F

1 = succ 0    2 = succ 1    3 = succ 2
4 = succ 3    5 = succ 4    6 = succ 5
7 = succ 6    8 = succ 7    9 = succ 8
10 = succ 9   100 = \u03BBx.10 (10 x)

+ = \u03BBa.\u03BBb.a succ b
- = \u03BBa.\u03BBb.b prev a
* = B
^ = \u03BBx.\u03BBy.y x

ge? = \u03BBa.\u03BBb.zero? (- b a)
le? = \u03BBa.\u03BBb.zero? (- a b)
gt? = \u03BBa.\u03BBb.not (le? a b)
lt? = \u03BBa.\u03BBb.not (ge? a b)
eq? = \u03BBa.\u03BBb.and (ge? a b) (le? a b)
neq? = \u03BBa.\u03BBb.not (eq? a b)

nil = C T
empty? = \u03BBl.l \u03BBh.\u03BBt.F
cons = pair
head = fst
tail = snd

repeat = \u03BBn.\u03BBf.n (\u03BBi.do2 (f i) (succ i)) 0
for = \u03BBn.\u03BBf.\u03BBx.snd (n (\u03BBp.pair (succ (fst p)) (p f)) (pair 0 x))

fact = \u03BBn.for n (\u03BBindex.\u03BBstate.* (succ index) state) 1
fact 5`;export{_sfc_main as _,useEvaluateLambda as a,initial as i,toJS as t,useCompileLambda as u};
