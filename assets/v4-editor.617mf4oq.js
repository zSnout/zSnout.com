import{u as j,E as C}from"./useLocationHash.1zqo29vv.js";import{d as f,_ as S}from"./index.326cgmh1.js";import{u as V,C as E}from"./Console.65z5j7wy.js";import{d as w,a1 as O,I as U,a8 as W,o as h,c as _,u as n,i as u,w as $,e as y}from"./index.4z0bzixf.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./AceEditor.5eal9hit.js";import"./_commonjsHelpers.3aq3i5tf.js";import"./__vite-browser-external.32w7an2i.js";import"./Dropdown.5phpgqpn.js";import"./Labeled.59ihovi6.js";const z=w({__name:"Viewer4",props:{code:null},setup(g){const s=g,{console:p,field:a,messages:r,onKey:b,onSelect:x,onSubmit:k,placeholder:m}=V(),v=Object.getPrototypeOf(async function(){}).constructor;function c(){p.clear(),m.value="",Object.assign(window,p),Object.assign(window,{print:p.log,jsx(l,e,...t){if(typeof l=="string"){let i=document.createElement(l);for(let o in e)if(o==="style")for(let d in e.style)i.style[d]=e.style[d];else o.startsWith("data")?i.dataset[o.slice(4)]=e[o]:o.startsWith("on")?i.addEventListener(o.slice(2,3).toUpperCase()+o.slice(3),e[o]):i[o]=e[o];for(let o of t.flat(1/0))o instanceof Node||typeof o=="string"?i.append(o):i.append(""+o);return i}try{return new l(t.length?{...e,children:t}:e)}catch{return l(t.length?{...e,children:t}:e)}}}),new v(f.transpile(f.compile(s.code),{jsx:"jsx",target:99}))()}return c(),O(W(s,"code"),U(c,1e3)),(l,e)=>(h(),_(E,{field:n(a),"onUpdate:field":e[0]||(e[0]=t=>u(a)?a.value=t:null),messages:n(r),"onUpdate:messages":e[1]||(e[1]=t=>u(r)?r.value=t:null),placeholder:n(m),onKey:n(b),onSelect:n(x),onSubmit:n(k)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),T=w({__name:"v4-editor",setup(g){const s=j(`money = 500
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

await market()`);return(p,a)=>(h(),_(C,null,{default:$(()=>[y(S,{modelValue:n(s),"onUpdate:modelValue":a[0]||(a[0]=r=>u(s)?s.value=r:null),round:""},null,8,["modelValue"]),y(z,{code:n(s),round:""},null,8,["code"])]),_:1}))}});export{T as default};
