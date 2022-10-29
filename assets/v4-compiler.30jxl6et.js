import{u,E as d}from"./useLocationHash.2efrg97q.js";import{d as i,_ as l}from"./index.49xx8v66.js";import{A as c}from"./AceEditor.1gmgqqjd.js";import"./mode-javascript.53halply.js";import{d as m,g as y,o as g,c as p,u as r,w as f,e as s,M as w}from"./index.3672xjxd.js";import"./DocumentDisplay.633jhlro.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./BookmarkIcon.3wmuqdow.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";import"./_commonjsHelpers.599xm5jo.js";import"./__vite-browser-external.4giopt9i.js";const _=m({__name:"Compiler4",props:{code:null,round:{type:Boolean}},setup(o){const e=o,a=y(()=>i.transpile(i.compile(e.code),{typescript:!0}));return(t,n)=>(g(),p(c,{"model-value":r(a),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),N=m({__name:"v4-compiler",setup(o){const e=u(`money = 500
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

await market()`);return(a,t)=>(g(),p(d,{"dual-editor":""},{default:f(()=>[s(l,{modelValue:r(e),"onUpdate:modelValue":t[0]||(t[0]=n=>w(e)?e.value=n:null),round:""},null,8,["modelValue"]),s(_,{code:r(e),round:""},null,8,["code"])]),_:1}))}});export{N as default};
