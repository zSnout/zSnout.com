import{u as l,E as m}from"./useLocationHash.b686eb90.js";import{A as B}from"./AceEditor.c1c0fb2c.js";import"./mode-javascript.e6176182.js";import{u as i,t as p,_ as f}from"./Editor.a97d3a60.js";import{d as t,ad as x,o as n,c as d,u as o,w as _,b as a,x as v}from"./index.0a07b922.js";import"./DocumentDisplay.df908a3b.js";import"./Modal.99eebc8c.js";const y=t({__name:"Compiler",props:{code:null,round:{type:Boolean}},setup(c){const u=i(x(c,"code"));return(s,r)=>(n(),d(B,{"model-value":typeof o(u)=="string"?o(u):o(p)(o(u)),round:c.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),h=t({__name:"Compiler",setup(c){const e=l(`
U = \u03BBf.(f f)
Y = \u03BBf.(\u03BBx.(x x) \u03BBx.(f \u03BBy.((x x) y)))
void = \u03BBx.(U U)

succ = \u03BBn.\u03BBf.\u03BBx.f(n f x)
0 = \u03BBf.\u03BBx.x
1 = \u03BBf.\u03BBx.f x
2 = succ 1
3 = succ 2
4 = succ 3
5 = succ 4
6 = succ 5
7 = succ 6
8 = succ 7
9 = succ 8
10 = succ 9

10
`.trim());return(u,s)=>(n(),d(m,{"dual-editor":""},{default:_(()=>[a(f,{modelValue:o(e),"onUpdate:modelValue":s[0]||(s[0]=r=>v(e)?e.value=r:null),round:""},null,8,["modelValue"]),a(y,{code:o(e),round:""},null,8,["code"])]),_:1}))}});export{h as default};
