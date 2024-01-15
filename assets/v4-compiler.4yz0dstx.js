import{u,E as d}from"./useLocationHash.1zqo29vv.js";import{d as i,_ as l}from"./index.326cgmh1.js";import{A as c}from"./AceEditor.5eal9hit.js";import"./mode-javascript.4cswk689.js";import{d as m,V as y,o as p,c as g,w as f,e as n,u as s,i as w}from"./index.xh0zaea0.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./_commonjsHelpers.40x35aen.js";import"./__vite-browser-external.32w7an2i.js";const _=m({__name:"Compiler4",props:{code:{},round:{type:Boolean}},setup(t){const e=t,r=y(()=>i.transpile(i.compile(e.code),{typescript:!0}));return(o,a)=>(p(),g(c,{"model-value":r.value,round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),N=m({__name:"v4-compiler",setup(t){const e=u(`money = 500
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

await market()`);return(r,o)=>(p(),g(d,{"dual-editor":""},{default:f(()=>[n(l,{modelValue:s(e),"onUpdate:modelValue":o[0]||(o[0]=a=>w(e)?e.value=a:null),round:""},null,8,["modelValue"]),n(_,{code:s(e),round:""},null,8,["code"])]),_:1}))}});export{N as default};
