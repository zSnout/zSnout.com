import{u as i,E as d}from"./useLocationHash.67ab64c9.js";import{A as l}from"./AceEditor.cb0d4874.js";import"./mode-javascript.e6176182.js";import{s as p}from"./compiler3.e1bd1ac4.js";import{d as u,ah as c,o as g,c as m,u as t,w as $,b as s,aI as y}from"./index.08441792.js";import{_ as f}from"./Editor3.c32387ba.js";import"./DocumentDisplay.3c6dac0f.js";import"./SharedNav.b331d2ea.js";import"./VStack.2f484e9a.js";const h=u({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=c(()=>p(e.code));return(n,a)=>(g(),m(l,{"model-value":t(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),E=u({__name:"v3-compiler",setup(o){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(r,n)=>(g(),m(d,{"dual-editor":""},{default:$(()=>[s(f,{modelValue:t(e),"onUpdate:modelValue":n[0]||(n[0]=a=>y(e)?e.value=a:null),round:""},null,8,["modelValue"]),s(h,{code:t(e),round:""},null,8,["code"])]),_:1}))}});export{E as default};
