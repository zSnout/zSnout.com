import{u as i,E as p}from"./useLocationHash.2zc5j1f5.js";import{A as d}from"./AceEditor.4c7keaam.js";import"./mode-javascript.3aun53ut.js";import{s as l}from"./compiler3.rkrguu5g.js";import{d as m,g as c,o as u,c as g,u as n,w as $,b as s,aL as y}from"./index.5eygmsav.js";import{_ as f}from"./Editor3.j83zzljp.js";import"./DocumentDisplay.f38sgubl.js";import"./Navigation.64w2aw5y.js";import"./SharedNav.3q0ndcho.js";import"./Button.32h7782u.js";import"./plugin-vue_export-helper.62h235na.js";import"./Logo.4djlqykq.js";import"./LogoLight.11xzt69h.js";const _=m({__name:"Compiler3",props:{code:null,round:{type:Boolean}},setup(o){const e=o,r=c(()=>l(e.code));return(t,a)=>(u(),g(d,{"model-value":n(r),round:o.round,mode:"javascript",readonly:""},null,8,["model-value","round"]))}}),j=m({__name:"v3-compiler",setup(o){const e=i(`$money = 500
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
      "Okay, let's go back to the store."`);return(r,t)=>(u(),g(p,{"dual-editor":""},{default:$(()=>[s(f,{modelValue:n(e),"onUpdate:modelValue":t[0]||(t[0]=a=>y(e)?e.value=a:null),round:""},null,8,["modelValue"]),s(_,{code:n(e),round:""},null,8,["code"])]),_:1}))}});export{j as default};