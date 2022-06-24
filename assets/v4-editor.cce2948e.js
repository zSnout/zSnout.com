var S=Object.defineProperty,V=Object.defineProperties;var U=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var h=(s,e,o)=>e in s?S(s,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):s[e]=o,p=(s,e)=>{for(var o in e||(e={}))W.call(e,o)&&h(s,o,e[o]);if(w)for(var o of w(e))$.call(e,o)&&h(s,o,e[o]);return s},m=(s,e)=>V(s,U(e));import{u as z,E as B}from"./useLocationHash.4e6ad568.js";import{d as x,_ as K}from"./index.d18d94c3.js";import{u as N,C as O}from"./Console.ec7ed7eb.js";import{d as b,E as Y,aC as A,ad as F,o as k,c as v,u as i,x as d,w as H,b as _}from"./index.a4d73a49.js";import"./DocumentDisplay.c6444733.js";import"./Modal.a815ee91.js";import"./AceEditor.b3c384f2.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";import"./Labeled.f4798b30.js";import"./Field.b845fd82.js";const L=b({__name:"Viewer4",props:{code:null},setup(s){const e=s,{console:o,field:r,messages:g,onKey:C,onSelect:j,onSubmit:E,placeholder:c}=N();function f(){o.clear(),c.value="",Object.assign(window,o),Object.assign(window,{print:o.log,jsx(u,t,...a){if(typeof u=="string"){let l=document.createElement(u);for(let n in t)if(n==="style")for(let y in t.style)l.style[y]=t.style[y];else n.startsWith("data")?l.dataset[n.slice(4)]=t[n]:n.startsWith("on")?l.addEventListener(n.slice(2,3).toUpperCase()+n.slice(3),t[n]):l[n]=t[n];for(let n of a.flat(1/0))n instanceof Node||typeof n=="string"?l.append(n):l.append(""+n);return l}try{return new u(a.length?m(p({},t),{children:a}):t)}catch{return u(a.length?m(p({},t),{children:a}):t)}}}),new Function(x.transpile(x.compile(e.code),{jsx:"jsx",target:99}))()}return f(),Y(F(e,"code"),A(f,1e3)),(u,t)=>(k(),v(O,{field:i(r),"onUpdate:field":t[0]||(t[0]=a=>d(r)?r.value=a:null),messages:i(g),"onUpdate:messages":t[1]||(t[1]=a=>d(g)?g.value=a:null),placeholder:i(c),onKey:i(C),onSelect:i(j),onSubmit:i(E)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),ee=b({__name:"v4-editor",setup(s){const e=z(`money = 500
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
`);return(o,r)=>(k(),v(B,null,{default:H(()=>[_(K,{modelValue:i(e),"onUpdate:modelValue":r[0]||(r[0]=g=>d(e)?e.value=g:null),round:""},null,8,["modelValue"]),_(L,{code:i(e),round:""},null,8,["code"])]),_:1}))}});export{ee as default};
