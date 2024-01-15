import{u as i,E as p}from"./useLocationHash.1zqo29vv.js";import{A as d}from"./AceEditor.5eal9hit.js";import"./mode-javascript.4cswk689.js";import{s as l}from"./compiler3.2myjv9ut.js";import{d as m,V as c,o as u,c as g,w as $,e as s,u as a,i as y}from"./index.xh0zaea0.js";import{_ as f}from"./Editor3.vue_vue_type_script_setup_true_lang.5f4ruwer.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.1ijfs95x.js";import"./VStack.3evi6szx.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./_commonjsHelpers.40x35aen.js";const _=m({__name:"Compiler3",props:{code:{},round:{type:Boolean}},setup(t){const e=t,n=c(()=>l(e.code));return(o,r)=>(u(),g(d,{"model-value":n.value,round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),N=m({__name:"v3-compiler",setup(t){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(n,o)=>(u(),g(p,{"dual-editor":""},{default:$(()=>[s(f,{modelValue:a(e),"onUpdate:modelValue":o[0]||(o[0]=r=>y(e)?e.value=r:null),round:""},null,8,["modelValue"]),s(_,{code:a(e),round:""},null,8,["code"])]),_:1}))}});export{N as default};
