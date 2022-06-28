import{u as d,E as p}from"./useLocationHash.51cb7a58.js";import{d as s,_ as l}from"./index.bbc29046.js";import{A as c}from"./AceEditor.526cc291.js";import"./mode-javascript.e6176182.js";import{d as g,ac as y,o as u,c as m,u as a,w as f,b as i,x as w}from"./index.ad867abe.js";import"./DocumentDisplay.0b721ee3.js";import"./Modal.17194a18.js";import"./_commonjsHelpers.294d03c4.js";import"./__vite-browser-external.2d3e1c2d.js";const _=g({__name:"Compiler4",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=y(()=>s.transpile(s.compile(e.code),{typescript:!0}));return(t,n)=>(u(),m(c,{"model-value":a(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),$=g({__name:"v4-compiler",setup(o){const e=d(`money = 500
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

await market()`);return(r,t)=>(u(),m(p,{"dual-editor":""},{default:f(()=>[i(l,{modelValue:a(e),"onUpdate:modelValue":t[0]||(t[0]=n=>w(e)?e.value=n:null),round:""},null,8,["modelValue"]),i(_,{code:a(e),round:""},null,8,["code"])]),_:1}))}});export{$ as default};
