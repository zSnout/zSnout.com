import{a3 as computed,d as defineComponent,o as openBlock,c as createBlock}from"./index.4z0bzixf.js";import{a as ace,A as AceEditor}from"./AceEditor.5eal9hit.js";const map=new Map([["(","lparen"],[")","rparen"],["=","assign"],[`
`,"newline"],[".","dot"]]),lambdas=new Set(["Λ","λ","ᴧ","Ⲗ","ⲗ","𝚲","𝛌","𝛬","𝜆","𝜦","𝝀","𝝠","𝝺","𝞚","𝞴","\\"]);function tokenize(t){var i;let e=t.trim();const a=[];for(;e;){if(e[0]==="{"){let n=0,r;for(;(r=e[0])&&(r==="{"&&n++,r==="}"&&n--,e=e.slice(1),n!==0););}else if(lambdas.has(e[0]))a.push({type:"lambda"}),e=e.slice(1);else if(map.has(e[0]))a.push({type:map.get(e[0])}),e=e.slice(1);else{const n=e.match(/^[\w\d+\-*\/%@?!:_#$^&|~;'"]+/);n?(a.push({type:"variable",name:n[0]}),e=e.slice(n[0].length)):e=e.slice(1)}for(;e.startsWith(" ")||e.startsWith("	");)e=e.slice(1)}const s=a.reduce((n,r)=>{if(r.type==="lparen"){const l={type:"group",tokens:[],parent:n};return n.tokens.push(l),l}else if(r.type==="rparen"){if(!n.parent)throw new SyntaxError("Unmatched closing parenthesis");return n.parent}return n.tokens.push(r),n},{type:"group",tokens:[]});if(s.parent)throw new SyntaxError("Unmatched opening parenthesis");s.tokens.forEach(function n(r){r.type==="group"&&(delete r.parent,r.tokens.forEach(n))});const o=[];for(let n=0;n<s.tokens.length;n++){const r=s.tokens[n],l=s.tokens[n+1];if(r.type==="variable"&&(l==null?void 0:l.type)==="assign"){if(n===s.tokens.length-2)throw new SyntaxError("An alias declaration must have a value.");if(n===s.tokens.length-3)throw new SyntaxError("An alias declaration must not be the last thing in a script.");const u={type:"alias",name:r.name,value:[]};for(n++;++n<s.tokens.length-1;){if(((i=s.tokens[n+1])==null?void 0:i.type)==="assign"){n--;break}if(s.tokens[n].type==="newline")break;u.value.push(s.tokens[n])}if(u.value.length===0)throw new SyntaxError("An alias must have a value.");o.push(u)}else o.push(r)}return o}function toExpression(t,e={}){var a,s;if(Array.isArray(t)){const o=t.filter(i=>i.type!=="lparen"&&i.type!=="rparen"&&i.type!=="assign"&&i.type!=="newline");if(o.length===0)throw new SyntaxError("Cannot convert empty token list to expression.");if(o.length===1)t=o[0];else if(o[0].type==="lambda"){if(((a=o[1])==null?void 0:a.type)!=="variable")throw new SyntaxError("A lambda must be followed by a variable.");if(((s=o[2])==null?void 0:s.type)!=="dot")throw new SyntaxError("A lambda variable must be followed by a dot.");if(o.length<3)throw new SyntaxError("A lambda function must have a value.");const i=+Math.random().toString().slice(2,12);return{type:"function",variable:o[1].name,scope:i,expr:toExpression(o.slice(3),{...e,[o[1].name]:i})}}else if(o[0].type==="alias"){const i=+Math.random().toString().slice(2,12);return{type:"application",lhs:{type:"function",variable:o[0].name,scope:i,expr:toExpression(o.slice(1),{...e,[o[0].name]:i})},rhs:toExpression(o[0].value,e)}}else{if(o[0].type==="dot")throw new SyntaxError("A dot cannot appear outside of a lambda function.");{let i=toExpression(o[0],e);for(let n=1;n<o.length;n++){if(o[n].type==="lambda")return{type:"application",lhs:i,rhs:toExpression(o.slice(n),e)};i={type:"application",lhs:i,rhs:toExpression(o[n],e)}}return i}}}if(t.type==="variable")return{...t,scope:e[t.name]};if(t.type==="group")return toExpression(t.tokens,e);throw new SyntaxError(`Cannot convert singular '${t.type}' token to an expression.`)}function useCompileLambda(t){return computed(()=>{try{const e=tokenize(t.value);return toExpression(e)}catch(e){return console.error(e),""+e}})}const special={"+":"_add","-":"_sub","*":"_mult","/":"_div","%":"_mod","@":"_at","?":"_ques","!":"_exclm",":":"_colon",_:"__","#":"_hash",$:"$","^":"_pos","&":"_amp","|":"_bar","~":"_tilde",";":"_semi","'":"_apos",'"':"_quote",__proto__:null};function normalizeVar(t){return t=t.split("").map(e=>e in special?special[e]:e).join(""),t.match(/^\d|^(abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/)?`_${t}`:t}function indent(t){return t.split(/\n+/g).join(`
  `)}function toJS(t){try{if(t.type==="variable")return normalizeVar(t.name);if(t.type==="application"){let e=toJS(t.rhs);return t.rhs.type==="function"&&(e=e.slice(1,-1)),e.length>60?`${toJS(t.lhs)}(
  ${indent(e)}
)`:`${toJS(t.lhs)}(${e})`}else{let e=toJS(t.expr);return t.expr.type==="function"&&(e=e.slice(1,-1)),e.length>40?`(${normalizeVar(t.variable)} =>
  ${indent(e)}
)`:`(${normalizeVar(t.variable)} => ${e})`}}catch(e){return""+e}}function evaluate(expr){let _output="";const output=t=>{const e=Convert.toNumber(t);return typeof e=="number"&&(_output+=String.fromCharCode(e)),a=>a};try{return{fn:eval(`print_subbyte => ${toJS(expr)}`)(output),output:_output}}catch(t){return{fn:""+t,output:_output}}}var Convert;(t=>{function e(r){try{const l=r(u=>u+1)(!0)(!1);return typeof l!="boolean"?!1:l}catch{return!1}}t.isNil=e;function a(r){try{const l=r(u=>u+1)(0);if(typeof l=="number")return l}catch{}}t.toNumber=a;function s(r){try{const l=r(!0)(!1);if(typeof l=="boolean")return l}catch{}}t.toBoolean=s;function o(r){try{let l,u;if(r(c=>p=>(l=i(c),u=i(p))),typeof l<"u"&&typeof u<"u")return[l,u]}catch{}}t.toPair=o;function i(r){if(e(r))return"nil";const l=a(r),u=s(r);if(l===0&&u===!1)return"0/false";if(typeof u=="boolean")return""+u;if(typeof l=="number")return""+l;const c=o(r);if(c)return`(${c[0]}, ${c[1]})`}t.valueOf=i;function n(r){return i(r)||"No conversions available."}t.all=n})(Convert||(Convert={}));function useEvaluateLambda(t){const e=useCompileLambda(t);return computed(()=>{try{if(typeof e.value=="string")return{output:"",result:e.value};const a=evaluate(e.value);return typeof a.fn=="string"?{output:a.output,result:a.fn}:{output:a.output,result:Convert.all(a.fn)}}catch(a){return{output:"",result:""+a}}})}const _sfc_main=defineComponent({__name:"Editor",props:{modelValue:{},readonly:{type:Boolean},placeholder:{},round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(t){ace.define("ace/mode/lambda_calculus",(a,s)=>{const o=a("ace/lib/oop"),i=a("ace/mode/text").Mode,n=a("ace/mode/lambda_calculus_highlight_rules").LambdaCalculusHighlightRules,r=function(){this.HighlightRules=n};o.inherits(r,i),s.Mode=r}),ace.define("ace/mode/lambda_calculus_highlight_rules",(a,s)=>{const o=a("ace/lib/oop"),i=a("ace/mode/text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{defaultToken:"text"}]}};o.inherits(n,i),s.LambdaCalculusHighlightRules=n});function e(a){a.on("change",s=>{s.action==="insert"&&a.replaceAll("λ",{needle:/lambda|[ΛλᴧⲖⲗ𝚲𝛌𝛬𝜆𝜦𝝀𝝠𝝺𝞚𝞴\\]/g,caseSensitive:!1})})}return(a,s)=>(openBlock(),createBlock(AceEditor,{modelValue:a.modelValue,placeholder:a.placeholder??"Write some lambdas...",readonly:a.readonly,round:a.round,mode:"lambda_calculus",onInit:s[0]||(s[0]=o=>e(o)&&a.$emit("init",o)),onSave:s[1]||(s[1]=o=>a.$emit("save",o)),"onUpdate:modelValue":s[2]||(s[2]=o=>a.$emit("update:modelValue",o))},null,8,["modelValue","placeholder","readonly","round"]))}}),initial=`I = λx.x
C = λx.λ_.x
B = λf.λg.λx.f(g x)
M = λf.f f
Y = λf.(λx.(x x) λx.(f λy.(x x y)))
void = λ_.M M

let = λx.λf.f x

T = λx.λy.x
F = λx.λy.y
not = λb.b F T
and = λa.λb.a b F
or = λa.λb.a T b

do2 = F
if = λp.λa.λb.p a b p

pair = λx.λy.λf.f x y
fst = λp.p T
snd = λp.p F

0 = λf.λx.x
succ = λn.λf.λx.f(n f x)
phi = λp.pair (succ (fst p)) (fst p)
prev = λn.n phi (pair 0 0) F

zero? = λn.n F not F

1 = succ 0    2 = succ 1    3 = succ 2
4 = succ 3    5 = succ 4    6 = succ 5
7 = succ 6    8 = succ 7    9 = succ 8
10 = succ 9   100 = λx.10 (10 x)

+ = λa.λb.a succ b
- = λa.λb.b prev a
* = B
^ = λx.λy.y x

ge? = λa.λb.zero? (- b a)
le? = λa.λb.zero? (- a b)
gt? = λa.λb.not (le? a b)
lt? = λa.λb.not (ge? a b)
eq? = λa.λb.and (ge? a b) (le? a b)
neq? = λa.λb.not (eq? a b)

nil = C T
empty? = λl.l λh.λt.F
cons = pair
head = fst
tail = snd

repeat = λn.λf.n (λi.do2 (f i) (succ i)) 0
for = λn.λf.λx.snd (n (λp.pair (succ (fst p)) (p f)) (pair 0 x))

fact = λn.for n (λindex.λstate.* (succ index) state) 1
fact 5`;export{_sfc_main as _,useEvaluateLambda as a,initial as i,toJS as t,useCompileLambda as u};
