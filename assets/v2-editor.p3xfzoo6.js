import{u as V,E as x}from"./useLocationHash.1zqo29vv.js";import{S as n,_ as E}from"./Editor2.vue_vue_type_script_setup_true_lang.cwrtru4h.js";import{u as l}from"./useTypewrite.596b5itz.js";import{u as K,C as j}from"./Console.65z5j7wy.js";import{l as a,w as z,q as B,x as h,C as _,u as r,i as d,D as O,F as w}from"./runtime-core.esm-bundler.47vl3tei.js";import{v as U}from"./main.200onzgm.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./AceEditor.5eal9hit.js";import"./Dropdown.5phpgqpn.js";import"./Labeled.59ihovi6.js";const Y=a({__name:"Viewer2",props:{code:null},setup($){const i=$,{console:s,field:m,messages:u,onKey:v,onSelect:S,onSubmit:C,placeholder:y}=K();n.tooltip=(e,o)=>{y.value=e,o==null||o()},n.write=(e,o)=>{s.log(e),o==null||o()},n.print=(e,o)=>{n.write(e,()=>{n.tooltip("Press Enter to continue...",()=>{n.waitFor("Enter",!0,()=>{n.tooltip("",o)})})})},n.image=(e,o)=>{const t=new Image;t.src=e,s.log(t),o==null||o()},n.line=e=>{s.line(),e==null||e()},n.clear=e=>{s.clear(),e==null||e()},n.type=(e,o,t)=>{const{el:p,done:F}=l(e,o);s.log(p),F.then(t)},n.input=async(e,o)=>{const t=await s.prompt(e,!0);o==null||o(t)},n.choice=async(e,o,t)=>{const p=await s.select(e,{...o});t==null||t(p)},n.waitFor=async(e,o,t)=>{Object.assign(window,{c:s}),o?s.key(e).then(()=>t==null?void 0:t(e)):s.bindKey(e,()=>t==null?void 0:t(e))};let g;function f(){s.clear(),g&&(g.stopped=!0),g=new n(i.code,e=>{n.waitingFor.splice(0,n.waitingFor.length),n.tooltip("",()=>{n.clear(()=>{e.start()})})}),Object.assign(window,{prev:g})}return f(),z(B(i,"code"),U(f,1e3)),(e,o)=>(h(),_(j,{field:r(m),"onUpdate:field":o[0]||(o[0]=t=>d(m)?m.value=t:null),messages:r(u),"onUpdate:messages":o[1]||(o[1]=t=>d(u)?u.value=t:null),placeholder:r(y),onKey:r(v),onSelect:r(S),onSubmit:r(C)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),b=a({__name:"v2-editor",setup($){const i=V(`#importall

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
    You don't have enough money for these eggs!`);return(s,m)=>(h(),_(x,null,{default:O(()=>[w(E,{modelValue:r(i),"onUpdate:modelValue":m[0]||(m[0]=u=>d(i)?i.value=u:null),round:""},null,8,["modelValue"]),w(Y,{code:r(i)},null,8,["code"])]),_:1}))}});export{b as default};
