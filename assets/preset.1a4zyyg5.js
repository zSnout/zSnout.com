import{a3 as computed,d as defineComponent,o as openBlock,c as createBlock}from"./index.4z0bzixf.js";import{a as ace,A as AceEditor}from"./AceEditor.5eal9hit.js";const map=new Map([["(","lparen"],[")","rparen"],["=","assign"],[`
`,"newline"],[".","dot"]]),lambdas=new Set(["Λ","λ","ᴧ","Ⲗ","ⲗ","𝚲","𝛌","𝛬","𝜆","𝜦","𝝀","𝝠","𝝺","𝞚","𝞴","\\"]);function tokenize(t){var i;let e=t.trim();const o=[];for(;e;){if(e[0]==="{"){let n=0,r;for(;(r=e[0])&&(r==="{"&&n++,r==="}"&&n--,e=e.slice(1),n!==0););}else if(lambdas.has(e[0]))o.push({type:"lambda"}),e=e.slice(1);else if(map.has(e[0]))o.push({type:map.get(e[0])}),e=e.slice(1);else{const n=e.match(/^[\w\d+\-*\/%@?!:_#$^&|~;'"]+/);n?(o.push({type:"variable",name:n[0]}),e=e.slice(n[0].length)):e=e.slice(1)}for(;e.startsWith(" ")||e.startsWith("	");)e=e.slice(1)}const l=o.reduce((n,r)=>{if(r.type==="lparen"){const s={type:"group",tokens:[],parent:n};return n.tokens.push(s),s}else if(r.type==="rparen"){if(!n.parent)throw new SyntaxError("Unmatched closing parenthesis");return n.parent}return n.tokens.push(r),n},{type:"group",tokens:[]});if(l.parent)throw new SyntaxError("Unmatched opening parenthesis");l.tokens.forEach(function n(r){r.type==="group"&&(delete r.parent,r.tokens.forEach(n))});const a=[];for(let n=0;n<l.tokens.length;n++){const r=l.tokens[n],s=l.tokens[n+1];if(r.type==="variable"&&(s==null?void 0:s.type)==="assign"){if(n===l.tokens.length-2)throw new SyntaxError("An alias declaration must have a value.");if(n===l.tokens.length-3)throw new SyntaxError("An alias declaration must not be the last thing in a script.");const u={type:"alias",name:r.name,value:[]};for(n++;++n<l.tokens.length-1;){if(((i=l.tokens[n+1])==null?void 0:i.type)==="assign"){n--;break}if(l.tokens[n].type==="newline")break;u.value.push(l.tokens[n])}if(u.value.length===0)throw new SyntaxError("An alias must have a value.");a.push(u)}else a.push(r)}return a}function toExpression(t,e={}){var o,l;if(Array.isArray(t)){const a=t.filter(i=>i.type!=="lparen"&&i.type!=="rparen"&&i.type!=="assign"&&i.type!=="newline");if(a.length===0)throw new SyntaxError("Cannot convert empty token list to expression.");if(a.length===1)t=a[0];else if(a[0].type==="lambda"){if(((o=a[1])==null?void 0:o.type)!=="variable")throw new SyntaxError("A lambda must be followed by a variable.");if(((l=a[2])==null?void 0:l.type)!=="dot")throw new SyntaxError("A lambda variable must be followed by a dot.");if(a.length<3)throw new SyntaxError("A lambda function must have a value.");const i=+Math.random().toString().slice(2,12);return{type:"function",variable:a[1].name,scope:i,expr:toExpression(a.slice(3),{...e,[a[1].name]:i})}}else if(a[0].type==="alias"){const i=+Math.random().toString().slice(2,12);return{type:"application",lhs:{type:"function",variable:a[0].name,scope:i,expr:toExpression(a.slice(1),{...e,[a[0].name]:i})},rhs:toExpression(a[0].value,e)}}else{if(a[0].type==="dot")throw new SyntaxError("A dot cannot appear outside of a lambda function.");{let i=toExpression(a[0],e);for(let n=1;n<a.length;n++){if(a[n].type==="lambda")return{type:"application",lhs:i,rhs:toExpression(a.slice(n),e)};i={type:"application",lhs:i,rhs:toExpression(a[n],e)}}return i}}}if(t.type==="variable")return{...t,scope:e[t.name]};if(t.type==="group")return toExpression(t.tokens,e);throw new SyntaxError(`Cannot convert singular '${t.type}' token to an expression.`)}function useCompileLambda(t){return computed(()=>{try{const e=tokenize(t.value);return toExpression(e)}catch(e){return console.error(e),""+e}})}const special={"+":"_add","-":"_sub","*":"_mult","/":"_div","%":"_mod","@":"_at","?":"_ques","!":"_exclm",":":"_colon",_:"__","#":"_hash",$:"$","^":"_pos","&":"_amp","|":"_bar","~":"_tilde",";":"_semi","'":"_apos",'"':"_quote",__proto__:null};function normalizeVar(t){return t=t.split("").map(e=>e in special?special[e]:e).join(""),t.match(/^\d|^(abstract|arguments|await|boolean|break|byte|case|catch|char|class|const|continue|debugger|default|delete|do|double|else|enum|eval|export|extends|false|final|finally|float|for|function|goto|if|implements|import|in|instanceof|int|interface|let|long|native|new|null|package|private|protected|public|return|short|static|super|switch|synchronized|this|throw|throws|transient|true|try|typeof|var|void|volatile|while|with|yield)$/)?`_${t}`:t}function indent(t){return t.split(/\n+/g).join(`
  `)}function toJS(t){try{if(t.type==="variable")return normalizeVar(t.name);if(t.type==="application"){let e=toJS(t.rhs);return t.rhs.type==="function"&&(e=e.slice(1,-1)),e.length>60?`${toJS(t.lhs)}(
  ${indent(e)}
)`:`${toJS(t.lhs)}(${e})`}else{let e=toJS(t.expr);return t.expr.type==="function"&&(e=e.slice(1,-1)),e.length>40?`(${normalizeVar(t.variable)} =>
  ${indent(e)}
)`:`(${normalizeVar(t.variable)} => ${e})`}}catch(e){return""+e}}function evaluate(expr){let _output="";const output=t=>{const e=Convert.toNumber(t);return typeof e=="number"&&(_output+=String.fromCharCode(e)),o=>o};try{return{fn:eval(`print_subbyte => ${toJS(expr)}`)(output),output:_output}}catch(t){return{fn:""+t,output:_output}}}var Convert;(t=>{function e(r){try{const s=r(u=>u+1)(!0)(!1);return typeof s!="boolean"?!1:s}catch{return!1}}t.isNil=e;function o(r){try{const s=r(u=>u+1)(0);if(typeof s=="number")return s}catch{}}t.toNumber=o;function l(r){try{const s=r(!0)(!1);if(typeof s=="boolean")return s}catch{}}t.toBoolean=l;function a(r){try{let s,u;if(r(c=>p=>(s=i(c),u=i(p))),typeof s<"u"&&typeof u<"u")return[s,u]}catch{}}t.toPair=a;function i(r){if(e(r))return"nil";const s=o(r),u=l(r);if(s===0&&u===!1)return"0/false";if(typeof u=="boolean")return""+u;if(typeof s=="number")return""+s;const c=a(r);if(c)return`(${c[0]}, ${c[1]})`}t.valueOf=i;function n(r){return i(r)||"No conversions available."}t.all=n})(Convert||(Convert={}));function useEvaluateLambda(t){const e=useCompileLambda(t);return computed(()=>{try{if(typeof e.value=="string")return{output:"",result:e.value};const o=evaluate(e.value);return typeof o.fn=="string"?{output:o.output,result:o.fn}:{output:o.output,result:Convert.all(o.fn)}}catch(o){return{output:"",result:""+o}}})}const _sfc_main=defineComponent({__name:"Editor",props:{modelValue:null,readonly:{type:Boolean},placeholder:null,round:{type:Boolean}},emits:["update:modelValue","init","save"],setup(t){ace.define("ace/mode/lambda_calculus",(o,l)=>{const a=o("ace/lib/oop"),i=o("ace/mode/text").Mode,n=o("ace/mode/lambda_calculus_highlight_rules").LambdaCalculusHighlightRules,r=function(){this.HighlightRules=n};a.inherits(r,i),l.Mode=r}),ace.define("ace/mode/lambda_calculus_highlight_rules",(o,l)=>{const a=o("ace/lib/oop"),i=o("ace/mode/text_highlight_rules").TextHighlightRules,n=function(){this.$rules={start:[{defaultToken:"text"}]}};a.inherits(n,i),l.LambdaCalculusHighlightRules=n});function e(o){o.on("change",l=>{l.action==="insert"&&o.replaceAll("λ",{needle:/lambda|[ΛλᴧⲖⲗ𝚲𝛌𝛬𝜆𝜦𝝀𝝠𝝺𝞚𝞴\\]/g,caseSensitive:!1})})}return(o,l)=>(openBlock(),createBlock(AceEditor,{modelValue:t.modelValue,placeholder:t.placeholder??"Write some lambdas...",readonly:t.readonly,round:t.round,mode:"lambda_calculus",onInit:l[0]||(l[0]=a=>e(a)&&o.$emit("init",a)),onSave:l[1]||(l[1]=a=>o.$emit("save",a)),"onUpdate:modelValue":l[2]||(l[2]=a=>o.$emit("update:modelValue",a))},null,8,["modelValue","placeholder","readonly","round"]))}}),initial=`I = λx.x
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
