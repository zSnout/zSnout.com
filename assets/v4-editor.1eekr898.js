import{u as j,E as C}from"./useLocationHash.2efrg97q.js";import{d as f,_ as S}from"./index.2fdxj6to.js";import{u as V,C as E}from"./Console.2t3sv0c8.js";import{d as w,a1 as O,a7 as B,B as U,o as h,c as _,u as n,M as u,w as W,e as y}from"./index.v5ospewp.js";import"./DocumentDisplay.633jhlro.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4huvb0n5.js";import"./BookmarkIcon.1thszj4g.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./AceEditor.1gmgqqjd.js";import"./_commonjsHelpers.599xm5jo.js";import"./__vite-browser-external.4giopt9i.js";import"./Dropdown.5andrccq.js";import"./Labeled.29mn7ohi.js";const $=w({__name:"Viewer4",props:{code:null},setup(g){const s=g,{console:p,field:a,messages:r,onKey:b,onSelect:x,onSubmit:k,placeholder:m}=V(),v=Object.getPrototypeOf(async function(){}).constructor;function c(){p.clear(),m.value="",Object.assign(window,p),Object.assign(window,{print:p.log,jsx(l,e,...t){if(typeof l=="string"){let i=document.createElement(l);for(let o in e)if(o==="style")for(let d in e.style)i.style[d]=e.style[d];else o.startsWith("data")?i.dataset[o.slice(4)]=e[o]:o.startsWith("on")?i.addEventListener(o.slice(2,3).toUpperCase()+o.slice(3),e[o]):i[o]=e[o];for(let o of t.flat(1/0))o instanceof Node||typeof o=="string"?i.append(o):i.append(""+o);return i}try{return new l(t.length?{...e,children:t}:e)}catch{return l(t.length?{...e,children:t}:e)}}}),new v(f.transpile(f.compile(s.code),{jsx:"jsx",target:99}))()}return c(),O(U(s,"code"),B(c,1e3)),(l,e)=>(h(),_(E,{field:n(a),"onUpdate:field":e[0]||(e[0]=t=>u(a)?a.value=t:null),messages:n(r),"onUpdate:messages":e[1]||(e[1]=t=>u(r)?r.value=t:null),placeholder:n(m),onKey:n(b),onSelect:n(x),onSubmit:n(k)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),T=w({__name:"v4-editor",setup(g){const s=j(`money = 500
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

await market()`);return(p,a)=>(h(),_(C,null,{default:W(()=>[y(S,{modelValue:n(s),"onUpdate:modelValue":a[0]||(a[0]=r=>u(s)?s.value=r:null),round:""},null,8,["modelValue"]),y($,{code:n(s),round:""},null,8,["code"])]),_:1}))}});export{T as default};
