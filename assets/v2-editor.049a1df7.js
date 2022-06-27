var K=Object.defineProperty;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable;var a=(i,r,t)=>r in i?K(i,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[r]=t,h=(i,r)=>{for(var t in r||(r={}))j.call(r,t)&&a(i,t,r[t]);if(f)for(var t of f(r))l.call(r,t)&&a(i,t,r[t]);return i};import{u as z,E as B}from"./useLocationHash.35b68c5d.js";import{S as s,_ as O}from"./Editor2.fde0a36e.js";import{u as U}from"./useTypewrite.705f091f.js";import{u as Y,C as A}from"./Console.3f702c63.js";import{d as v,E as H,aF as L,ad as N,o as S,c as C,u,x as $,w as R,b as _}from"./index.3d8e1f95.js";import"./DocumentDisplay.1b5e6d3c.js";import"./Modal.cd67a0f5.js";import"./AceEditor.9569cd5f.js";import"./Dropdown.7131c691.js";import"./Field.12416cc5.js";import"./Labeled.09fcc31f.js";const W=v({__name:"Viewer2",props:{code:null},setup(i){const r=i,{console:t,field:g,messages:m,onKey:E,onSelect:F,onSubmit:V,placeholder:y}=Y();s.tooltip=(e,o)=>{y.value=e,o==null||o()},s.write=(e,o)=>{t.log(e),o==null||o()},s.print=(e,o)=>{s.write(e,()=>{s.tooltip("Press Enter to continue...",()=>{s.waitFor("Enter",!0,()=>{s.tooltip("",o)})})})},s.image=(e,o)=>{const n=new Image;n.src=e,t.log(n),o==null||o()},s.line=e=>{t.line(),e==null||e()},s.clear=e=>{t.clear(),e==null||e()},s.type=(e,o,n)=>{const{el:d,done:x}=U(e,o);t.log(d),x.then(n)},s.input=async(e,o)=>{const n=await t.prompt(e,!0);o==null||o(n)},s.choice=async(e,o,n)=>{const d=await t.select(e,h({},o));n==null||n(d)},s.waitFor=async(e,o,n)=>{Object.assign(window,{c:t}),o?t.key(e).then(()=>n==null?void 0:n(e)):t.bindKey(e,()=>n==null?void 0:n(e))};let p;function w(){t.clear(),p&&(p.stopped=!0),p=new s(r.code,e=>{s.waitingFor.splice(0,s.waitingFor.length),s.tooltip("",()=>{s.clear(()=>{e.start()})})}),Object.assign(window,{prev:p})}return w(),H(N(r,"code"),L(w,1e3)),(e,o)=>(S(),C(A,{field:u(g),"onUpdate:field":o[0]||(o[0]=n=>$(g)?g.value=n:null),messages:u(m),"onUpdate:messages":o[1]||(o[1]=n=>$(m)?m.value=n:null),placeholder:u(y),onKey:u(E),onSelect:u(F),onSubmit:u(V)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),b=v({__name:"v2-editor",setup(i){const r=z(`#importall

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
    You don't have enough money for these eggs!`);return(t,g)=>(S(),C(B,null,{default:R(()=>[_(O,{modelValue:u(r),"onUpdate:modelValue":g[0]||(g[0]=m=>$(r)?r.value=m:null),round:""},null,8,["modelValue"]),_(W,{code:u(r)},null,8,["code"])]),_:1}))}});export{b as default};
