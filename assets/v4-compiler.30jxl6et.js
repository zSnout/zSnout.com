import{u,E as d}from"./useLocationHash.2zc5j1f5.js";import{d as i,_ as l}from"./index.3bg617k7.js";import{A as c}from"./AceEditor.4c7keaam.js";import"./mode-javascript.3aun53ut.js";import{d as m,g as y,o as g,c as p,u as r,w as f,b as s,aL as w}from"./index.5eygmsav.js";import"./DocumentDisplay.f38sgubl.js";import"./Navigation.64w2aw5y.js";import"./SharedNav.3q0ndcho.js";import"./Button.32h7782u.js";import"./plugin-vue_export-helper.62h235na.js";import"./Logo.4djlqykq.js";import"./LogoLight.11xzt69h.js";import"./_commonjsHelpers.14mbij5o.js";import"./__vite-browser-external.5rvdtxni.js";const _=m({__name:"Compiler4",props:{code:null,round:{type:Boolean}},setup(o){const e=o,a=y(()=>i.transpile(i.compile(e.code),{typescript:!0}));return(t,n)=>(g(),p(c,{"model-value":r(a),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),H=m({__name:"v4-compiler",setup(o){const e=u(`money = 500
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

await market()`);return(a,t)=>(g(),p(d,{"dual-editor":""},{default:f(()=>[s(l,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=n=>w(e)?e.value=n:null),round:""},null,8,["modelValue"]),s(_,{code:r(e),round:""},null,8,["code"])]),_:1}))}});export{H as default};