import{u as V,E as x}from"./useLocationHash.54c828aa.js";import{S as n,_ as F}from"./Editor2.7757daf8.js";import{u as K}from"./useTypewrite.705f091f.js";import{u as j,C as l}from"./Console.e5ec0a25.js";import{d as a,E as z,aS as B,a5 as O,o as h,c as _,u as r,x as d,w as U,b as f}from"./index.ea562662.js";import"./DocumentDisplay.3a6e7cfd.js";import"./BookmarkIcon.72a22b26.js";import"./AceEditor.77bed9b1.js";import"./Dropdown.1ad7cd08.js";import"./Labeled.e7cfe2f0.js";const Y=a({__name:"Viewer2",props:{code:null},setup($){const i=$,{console:s,field:u,messages:g,onKey:v,onSelect:S,onSubmit:C,placeholder:y}=j();n.tooltip=(e,o)=>{y.value=e,o==null||o()},n.write=(e,o)=>{s.log(e),o==null||o()},n.print=(e,o)=>{n.write(e,()=>{n.tooltip("Press Enter to continue...",()=>{n.waitFor("Enter",!0,()=>{n.tooltip("",o)})})})},n.image=(e,o)=>{const t=new Image;t.src=e,s.log(t),o==null||o()},n.line=e=>{s.line(),e==null||e()},n.clear=e=>{s.clear(),e==null||e()},n.type=(e,o,t)=>{const{el:p,done:E}=K(e,o);s.log(p),E.then(t)},n.input=async(e,o)=>{const t=await s.prompt(e,!0);o==null||o(t)},n.choice=async(e,o,t)=>{const p=await s.select(e,{...o});t==null||t(p)},n.waitFor=async(e,o,t)=>{Object.assign(window,{c:s}),o?s.key(e).then(()=>t==null?void 0:t(e)):s.bindKey(e,()=>t==null?void 0:t(e))};let m;function w(){s.clear(),m&&(m.stopped=!0),m=new n(i.code,e=>{n.waitingFor.splice(0,n.waitingFor.length),n.tooltip("",()=>{n.clear(()=>{e.start()})})}),Object.assign(window,{prev:m})}return w(),z(O(i,"code"),B(w,1e3)),(e,o)=>(h(),_(l,{field:r(u),"onUpdate:field":o[0]||(o[0]=t=>d(u)?u.value=t:null),messages:r(g),"onUpdate:messages":o[1]||(o[1]=t=>d(g)?g.value=t:null),placeholder:r(y),onKey:r(v),onSelect:r(S),onSubmit:r(C)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),T=a({__name:"v2-editor",setup($){const i=V(`#importall

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
    You don't have enough money for these eggs!`);return(s,u)=>(h(),_(x,null,{default:U(()=>[f(F,{modelValue:r(i),"onUpdate:modelValue":u[0]||(u[0]=g=>d(i)?i.value=g:null),round:""},null,8,["modelValue"]),f(Y,{code:r(i)},null,8,["code"])]),_:1}))}});export{T as default};
