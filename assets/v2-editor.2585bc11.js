import{u as E,E as F}from"./useLocationHash.dad99aaf.js";import{S as n,_ as K}from"./Editor2.fffc181a.js";import{u as j}from"./useTypewrite.705f091f.js";import{u as x,C as l}from"./Console.255dfbc1.js";import{d as a,ad as z,aj as B,Z as O,o as h,c as _,u as r,aK as d,w as U,b as f}from"./index.9c67cb4b.js";import"./DocumentDisplay.fc2eca10.js";import"./SharedNav.087650da.js";import"./VStack.19f60aca.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./Logo.0937feee.js";import"./LogoLight.9801d794.js";import"./Navigation.4ca1e46f.js";import"./AceEditor.79a678e4.js";import"./Dropdown.9eb4592e.js";import"./Labeled.8d016aa7.js";const Y=a({__name:"Viewer2",props:{code:null},setup($){const i=$,{console:s,field:m,messages:u,onKey:v,onSelect:S,onSubmit:C,placeholder:y}=x();n.tooltip=(e,o)=>{y.value=e,o==null||o()},n.write=(e,o)=>{s.log(e),o==null||o()},n.print=(e,o)=>{n.write(e,()=>{n.tooltip("Press Enter to continue...",()=>{n.waitFor("Enter",!0,()=>{n.tooltip("",o)})})})},n.image=(e,o)=>{const t=new Image;t.src=e,s.log(t),o==null||o()},n.line=e=>{s.line(),e==null||e()},n.clear=e=>{s.clear(),e==null||e()},n.type=(e,o,t)=>{const{el:p,done:V}=j(e,o);s.log(p),V.then(t)},n.input=async(e,o)=>{const t=await s.prompt(e,!0);o==null||o(t)},n.choice=async(e,o,t)=>{const p=await s.select(e,{...o});t==null||t(p)},n.waitFor=async(e,o,t)=>{Object.assign(window,{c:s}),o?s.key(e).then(()=>t==null?void 0:t(e)):s.bindKey(e,()=>t==null?void 0:t(e))};let g;function w(){s.clear(),g&&(g.stopped=!0),g=new n(i.code,e=>{n.waitingFor.splice(0,n.waitingFor.length),n.tooltip("",()=>{n.clear(()=>{e.start()})})}),Object.assign(window,{prev:g})}return w(),z(O(i,"code"),B(w,1e3)),(e,o)=>(h(),_(l,{field:r(m),"onUpdate:field":o[0]||(o[0]=t=>d(m)?m.value=t:null),messages:r(u),"onUpdate:messages":o[1]||(o[1]=t=>d(u)?u.value=t:null),placeholder:r(y),onKey:r(v),onSelect:r(S),onSubmit:r(C)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),Q=a({__name:"v2-editor",setup($){const i=E(`#importall

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
    You don't have enough money for these eggs!`);return(s,m)=>(h(),_(F,null,{default:U(()=>[f(K,{modelValue:r(i),"onUpdate:modelValue":m[0]||(m[0]=u=>d(i)?i.value=u:null),round:""},null,8,["modelValue"]),f(Y,{code:r(i)},null,8,["code"])]),_:1}))}});export{Q as default};
