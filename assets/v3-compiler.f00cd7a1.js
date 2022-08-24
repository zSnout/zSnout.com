import{u as i,E as p}from"./useLocationHash.85b07979.js";import{A as d}from"./AceEditor.dfbb45f3.js";import"./mode-javascript.e6176182.js";import{s as l}from"./compiler3.e1bd1ac4.js";import{d as m,g as c,o as u,c as g,u as n,w as $,b as s,aH as y}from"./index.ea2da45b.js";import{_ as f}from"./Editor3.5d013f59.js";import"./DocumentDisplay.e984df27.js";import"./SharedNav.16d49b20.js";import"./VStack.83086c78.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.4c70af85.js";import"./LogoLight.2f372d92.js";import"./Navigation.715f0ebf.js";const _=m({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=c(()=>l(e.code));return(t,a)=>(u(),g(d,{"model-value":n(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),Y=m({__name:"v3-compiler",setup(o){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(r,t)=>(u(),g(p,{"dual-editor":""},{default:$(()=>[s(f,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=a=>y(e)?e.value=a:null),round:""},null,8,["modelValue"]),s(_,{code:n(e),round:""},null,8,["code"])]),_:1}))}});export{Y as default};
