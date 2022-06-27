import{u as i,E as d}from"./useLocationHash.acd8225b.js";import{A as l}from"./AceEditor.641fb943.js";import"./mode-javascript.e6176182.js";import{s as c}from"./compiler3.8ff8648d.js";import{d as u,ac as p,o as g,c as m,u as t,w as $,b as s,x as y}from"./index.f2afe88b.js";import{_ as f}from"./Editor3.1bbcc84c.js";import"./DocumentDisplay.1a85d076.js";import"./Modal.3b9103d4.js";const _=u({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=p(()=>c(e.code));return(n,a)=>(g(),m(l,{"model-value":t(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),B=u({__name:"v3-compiler",setup(o){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(r,n)=>(g(),m(d,{"dual-editor":""},{default:$(()=>[s(f,{modelValue:t(e),"onUpdate:modelValue":n[0]||(n[0]=a=>y(e)?e.value=a:null),round:""},null,8,["modelValue"]),s(_,{code:t(e),round:""},null,8,["code"])]),_:1}))}});export{B as default};
