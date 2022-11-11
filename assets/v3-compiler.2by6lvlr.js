import{u as i,E as p}from"./useLocationHash.2efrg97q.js";import{A as d}from"./AceEditor.1gmgqqjd.js";import"./mode-javascript.53halply.js";import{s as l}from"./compiler3.rkrguu5g.js";import{d as m,g as c,o as u,c as g,u as n,w as $,e as a,M as y}from"./index.1f86lsdq.js";import{_ as f}from"./Editor3.vue_vue_type_script_setup_true_lang.4tgtruob.js";import"./DocumentDisplay.633jhlro.js";import"./Navigation.vue_vue_type_script_setup_true_lang.5cehk67t.js";import"./BookmarkIcon.1thszj4g.js";import"./VStack.xad5wxbj.js";import"./Field.2ydu2jt8.js";import"./Logo.vue_vue_type_script_setup_true_lang.5f5g8ttt.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.28xyli12.js";const _=m({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=c(()=>l(e.code));return(t,s)=>(u(),g(d,{"model-value":n(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),H=m({__name:"v3-compiler",setup(o){const e=i(`$money = 500
$eggs = 0

$name = @input "What is your name?"
@market

def @market
  "$name, you have $$money and $eggs dozen eggs."
  @menu "What would you like to buy?"
    @option "Eggs"
      @eggsfn
    @option "Go Back"
  @market

def @eggsfn
  $egg = @inputint "How many dozen eggs do you want to buy?"
  $eggprice = 6 * $egg
  "$egg dozen eggs will cost $$eggprice."
  @menu "Are you sure you want to buy them?"
    @option "Yes"
      if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      else if $money = $eggprice
        "You have just enough money for these eggs."
        $money -= $eggprice
        $eggs += $egg
      else
        "You don't have enough money for these eggs!"
    @option "No"
      "Okay, let's go back to the store."`);return(r,t)=>(u(),g(p,{"dual-editor":""},{default:$(()=>[a(f,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=s=>y(e)?e.value=s:null),round:""},null,8,["modelValue"]),a(_,{code:n(e),round:""},null,8,["code"])]),_:1}))}});export{H as default};
