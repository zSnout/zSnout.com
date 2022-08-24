import{u,E as d}from"./useLocationHash.85b07979.js";import{d as i,_ as l}from"./index.6fd6b8c6.js";import{A as c}from"./AceEditor.dfbb45f3.js";import"./mode-javascript.e6176182.js";import{d as m,g as y,o as g,c as p,u as r,w as f,b as s,aH as w}from"./index.ea2da45b.js";import"./DocumentDisplay.e984df27.js";import"./SharedNav.16d49b20.js";import"./VStack.83086c78.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.4c70af85.js";import"./LogoLight.2f372d92.js";import"./Navigation.715f0ebf.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";const _=m({__name:"Compiler4",props:{code:null,round:{type:Boolean}},setup(o){const e=o,a=y(()=>i.transpile(i.compile(e.code),{typescript:!0}));return(t,n)=>(g(),p(c,{"model-value":r(a),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),j=m({__name:"v4-compiler",setup(o){const e=u(`money = 500
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

await market()`);return(a,t)=>(g(),p(d,{"dual-editor":""},{default:f(()=>[s(l,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=n=>w(e)?e.value=n:null),round:""},null,8,["modelValue"]),s(_,{code:r(e),round:""},null,8,["code"])]),_:1}))}});export{j as default};
