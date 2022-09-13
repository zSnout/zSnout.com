import{u as i,E as p}from"./useLocationHash.2efrg97q.js";import{A as d}from"./AceEditor.1gmgqqjd.js";import"./mode-javascript.53halply.js";import{s as l}from"./compiler3.rkrguu5g.js";import{d as m,g as c,o as u,c as g,u as n,w as $,b as a,M as y}from"./index.w2xoota4.js";import{_ as f}from"./Editor3.vue_vue_type_script_setup_true_lang.4tgtruob.js";import"./DocumentDisplay.1u3n8z7b.js";import"./Navigation.4poltm3u.js";import"./BookmarkIcon.62ja9bj3.js";import"./VStack.1y80766s.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.q24vcovx.js";const _=m({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=c(()=>l(e.code));return(t,s)=>(u(),g(d,{"model-value":n(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),j=m({__name:"v3-compiler",setup(o){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(r,t)=>(u(),g(p,{"dual-editor":""},{default:$(()=>[a(f,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=s=>y(e)?e.value=s:null),round:""},null,8,["modelValue"]),a(_,{code:n(e),round:""},null,8,["code"])]),_:1}))}});export{j as default};
