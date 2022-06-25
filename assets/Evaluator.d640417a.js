import{u as m,E as p}from"./useLocationHash.b686eb90.js";import{a as f,_ as B}from"./Editor.a97d3a60.js";import{C as x}from"./Console.cb66afc8.js";import{d as i,ad as _,E as c,aB as h,r as g,o as l,c as d,w as v,b as n,u as r,x as E}from"./index.0a07b922.js";import"./DocumentDisplay.df908a3b.js";import"./Modal.99eebc8c.js";import"./AceEditor.c1c0fb2c.js";import"./Labeled.91114522.js";import"./Field.e0505894.js";const y=i({__name:"Evaluator",props:{code:null},emits:["init","save"],setup(a){const s=_(a,"code");c(s,()=>{e.length===1&&e.push({type:"log",id:Math.random(),content:"Waiting for input to finish..."})});const t=f(h(s,1e3));c(t,u=>{e.splice(0,e.length,{type:"log",id:Math.random(),content:u})});const e=g([{type:"log",id:Math.random(),content:t}]);return(u,V)=>(l(),d(x,{field:"",messages:e},null,8,["messages"]))}}),A=i({__name:"Evaluator",setup(a){const o=m(`
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
`.trim());return(s,t)=>(l(),d(p,null,{default:v(()=>[n(B,{modelValue:r(o),"onUpdate:modelValue":t[0]||(t[0]=e=>E(o)?o.value=e:null),round:""},null,8,["modelValue"]),n(y,{code:r(o),round:""},null,8,["code"])]),_:1}))}});export{A as default};
