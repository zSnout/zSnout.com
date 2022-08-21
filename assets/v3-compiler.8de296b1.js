import{u as i,E as d}from"./useLocationHash.93e037eb.js";import{A as p}from"./AceEditor.ae19c00a.js";import"./mode-javascript.e6176182.js";import{s as l}from"./compiler3.e1bd1ac4.js";import{d as u,ah as c,o as m,c as g,u as n,w as $,b as s,aI as y}from"./index.5b735708.js";import{_ as f}from"./Editor3.9e934c2a.js";import"./DocumentDisplay.7dfb295a.js";import"./SharedNav.9470292b.js";import"./VStack.4802ffbd.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.d6a34a47.js";import"./LogoLight.4b666505.js";const h=u({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=c(()=>l(e.code));return(t,a)=>(m(),g(p,{"model-value":n(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),Y=u({__name:"v3-compiler",setup(o){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(r,t)=>(m(),g(d,{"dual-editor":""},{default:$(()=>[s(f,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=a=>y(e)?e.value=a:null),round:""},null,8,["modelValue"]),s(h,{code:n(e),round:""},null,8,["code"])]),_:1}))}});export{Y as default};
