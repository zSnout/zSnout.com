import{u as x,E}from"./useLocationHash.8f0417c6.js";import{S as n,_ as F}from"./Editor2.386be31a.js";import{u as B}from"./useTypewrite.705f091f.js";import{u as K,C as j}from"./Console.9faf173e.js";import{d as a,B as l,ar as z,M as O,o as h,c as _,u as r,x as d,w as U,b as f}from"./index.33fc66a8.js";import"./DocumentDisplay.67f7ea09.js";import"./BookmarkIcon.7fe784a3.js";import"./AceEditor.f28b8201.js";import"./Dropdown.737547c0.js";import"./Labeled.cec4fd55.js";const Y=a({__name:"Viewer2",props:{code:null},setup($){const i=$,{console:s,field:u,messages:g,onKey:v,onSelect:S,onSubmit:C,placeholder:y}=K();n.tooltip=(e,o)=>{y.value=e,o==null||o()},n.write=(e,o)=>{s.log(e),o==null||o()},n.print=(e,o)=>{n.write(e,()=>{n.tooltip("Press Enter to continue...",()=>{n.waitFor("Enter",!0,()=>{n.tooltip("",o)})})})},n.image=(e,o)=>{const t=new Image;t.src=e,s.log(t),o==null||o()},n.line=e=>{s.line(),e==null||e()},n.clear=e=>{s.clear(),e==null||e()},n.type=(e,o,t)=>{const{el:p,done:V}=B(e,o);s.log(p),V.then(t)},n.input=async(e,o)=>{const t=await s.prompt(e,!0);o==null||o(t)},n.choice=async(e,o,t)=>{const p=await s.select(e,{...o});t==null||t(p)},n.waitFor=async(e,o,t)=>{Object.assign(window,{c:s}),o?s.key(e).then(()=>t==null?void 0:t(e)):s.bindKey(e,()=>t==null?void 0:t(e))};let m;function w(){s.clear(),m&&(m.stopped=!0),m=new n(i.code,e=>{n.waitingFor.splice(0,n.waitingFor.length),n.tooltip("",()=>{n.clear(()=>{e.start()})})}),Object.assign(window,{prev:m})}return w(),l(O(i,"code"),z(w,1e3)),(e,o)=>(h(),_(j,{field:r(u),"onUpdate:field":o[0]||(o[0]=t=>d(u)?u.value=t:null),messages:r(g),"onUpdate:messages":o[1]||(o[1]=t=>d(g)?g.value=t:null),placeholder:r(y),onKey:r(v),onSelect:r(S),onSubmit:r(C)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),P=a({__name:"v2-editor",setup($){const i=x(`#importall

$money = 500
$eggs = 0
$name = no name

@start
  @input $name What is your name?
  @market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      @option Eggs
        @eggs
      @option Go Back
    @market

@eggs
  @number $egg How many dozens do you want to buy?
  $eggprice @= 6 * $egg
  @nowait $egg dozen eggs will cost $$$eggprice.
  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      @option Yes
        $money -= $eggprice
        $eggs += $egg
      @option No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);return(s,u)=>(h(),_(E,null,{default:U(()=>[f(F,{modelValue:r(i),"onUpdate:modelValue":u[0]||(u[0]=g=>d(i)?i.value=g:null),round:""},null,8,["modelValue"]),f(Y,{code:r(i)},null,8,["code"])]),_:1}))}});export{P as default};
