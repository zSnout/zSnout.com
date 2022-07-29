import{u as j,E as C}from"./useLocationHash.2aa7a2c1.js";import{d as f,_ as S}from"./index.fd26fa7e.js";import{u as V,C as E}from"./Console.346e9a75.js";import{d as w,D as O,ap as U,M as W,o as h,c as b,u as n,x as g,w as $,b as y}from"./index.a1310079.js";import"./DocumentDisplay.8b35b446.js";import"./BookmarkIcon.e05c9dfb.js";import"./AceEditor.421757e6.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";import"./Dropdown.c9868fcf.js";import"./Labeled.8d5cfbc4.js";const z=w({__name:"Viewer4",props:{code:null},setup(p){const s=p,{console:u,field:i,messages:l,onKey:x,onSelect:_,onSubmit:k,placeholder:m}=V(),v=Object.getPrototypeOf(async function(){}).constructor;function c(){u.clear(),m.value="",Object.assign(window,u),Object.assign(window,{print:u.log,jsx(r,e,...t){if(typeof r=="string"){let a=document.createElement(r);for(let o in e)if(o==="style")for(let d in e.style)a.style[d]=e.style[d];else o.startsWith("data")?a.dataset[o.slice(4)]=e[o]:o.startsWith("on")?a.addEventListener(o.slice(2,3).toUpperCase()+o.slice(3),e[o]):a[o]=e[o];for(let o of t.flat(1/0))o instanceof Node||typeof o=="string"?a.append(o):a.append(""+o);return a}try{return new r(t.length?{...e,children:t}:e)}catch{return r(t.length?{...e,children:t}:e)}}}),new v(f.transpile(f.compile(s.code),{jsx:"jsx",target:99}))()}return c(),O(W(s,"code"),U(c,1e3)),(r,e)=>(h(),b(E,{field:n(i),"onUpdate:field":e[0]||(e[0]=t=>g(i)?i.value=t:null),messages:n(l),"onUpdate:messages":e[1]||(e[1]=t=>g(l)?l.value=t:null),placeholder:n(m),onKey:n(x),onSelect:n(_),onSubmit:n(k)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),I=w({__name:"v4-editor",setup(p){const s=j(`money = 500
eggs = 0
name = await prompt "What is your name?"

market = ->
  print "#{name}, you have $#{money} and #{eggs} dozen eggs."
  idx = await select "What would you like to buy?", ["Eggs", "Go Back"]
  if idx == 0
    await eggsfn()
  await market()

eggsfn = ->
  egg = +(await prompt "How many dozen eggs do you want to buy?")
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

await market()`);return(u,i)=>(h(),b(C,null,{default:$(()=>[y(S,{modelValue:n(s),"onUpdate:modelValue":i[0]||(i[0]=l=>g(s)?s.value=l:null),round:""},null,8,["modelValue"]),y(z,{code:n(s),round:""},null,8,["code"])]),_:1}))}});export{I as default};