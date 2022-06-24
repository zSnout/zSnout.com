var V=Object.defineProperty,O=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var h=(s,e,o)=>e in s?V(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,p=(s,e)=>{for(var o in e||(e={}))W.call(e,o)&&h(s,o,e[o]);if(w)for(var o of w(e))$.call(e,o)&&h(s,o,e[o]);return s},m=(s,e)=>O(s,U(e));import{u as z,E as A}from"./useLocationHash.5d07e1f6.js";import{d as b,_ as B}from"./index.3a82d043.js";import{u as K,C as N}from"./Console.47fdd63d.js";import{d as _,E as Y,aC as F,ad as H,o as k,c as v,u as i,x as c,w as L,b as x}from"./index.b50866e0.js";import"./DocumentDisplay.86b60d55.js";import"./Modal.bba8bf85.js";import"./AceEditor.79a6ba94.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";import"./Labeled.146110ca.js";import"./Field.489e9bde.js";const R=_({__name:"Viewer4",props:{code:null},setup(s){const e=s,{console:o,field:r,messages:u,onKey:C,onSelect:j,onSubmit:E,placeholder:d}=K(),S=Object.getPrototypeOf(async function(){}).constructor;function f(){o.clear(),d.value="",Object.assign(window,o),Object.assign(window,{print:o.log,jsx(g,t,...a){if(typeof g=="string"){let l=document.createElement(g);for(let n in t)if(n==="style")for(let y in t.style)l.style[y]=t.style[y];else n.startsWith("data")?l.dataset[n.slice(4)]=t[n]:n.startsWith("on")?l.addEventListener(n.slice(2,3).toUpperCase()+n.slice(3),t[n]):l[n]=t[n];for(let n of a.flat(1/0))n instanceof Node||typeof n=="string"?l.append(n):l.append(""+n);return l}try{return new g(a.length?m(p({},t),{children:a}):t)}catch{return g(a.length?m(p({},t),{children:a}):t)}}}),new S(b.transpile(b.compile(e.code),{jsx:"jsx",target:99}))()}return f(),Y(H(e,"code"),F(f,1e3)),(g,t)=>(k(),v(N,{field:i(r),"onUpdate:field":t[0]||(t[0]=a=>c(r)?r.value=a:null),messages:i(u),"onUpdate:messages":t[1]||(t[1]=a=>c(u)?u.value=a:null),placeholder:i(d),onKey:i(C),onSelect:i(j),onSubmit:i(E)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),oe=_({__name:"v4-editor",setup(s){const e=z(`money = 500
eggs = 0

name = prompt "What is your name?"
await market()

market = ->
  print "#{name}, you have $#{money} and #{eggs} dozen eggs."
  idx = await select "What would you like to buy?", ["Eggs", "Go Back"]
  if idx == 0
    await eggs()
  await market()

eggs = ->
  egg = +(prompt "How many dozen eggs do you want to buy?")
  eggprice = 6 * egg
  print "#{egg} dozen eggs will cost $#{eggprice}."
  if money > eggprice
    idx = await select "Are you sure you want to buy them?", ["Yes", "No"]
    if idx == 0
      money -= eggprice
      eggs += egg
    else
      print "Okay, let's go back to the store."
  else if money == eggprice
    print "You have just enough money for these eggs."
    money -= eggprice
    eggs += egg
  else
    print "You don't have enough money for these eggs!"
`);return(o,r)=>(k(),v(A,null,{default:L(()=>[x(B,{modelValue:i(e),"onUpdate:modelValue":r[0]||(r[0]=u=>c(e)?e.value=u:null),round:""},null,8,["modelValue"]),x(R,{code:i(e),round:""},null,8,["code"])]),_:1}))}});export{oe as default};
