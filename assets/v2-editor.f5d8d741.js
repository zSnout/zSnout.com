var j=Object.defineProperty;var f=Object.getOwnPropertySymbols;var F=Object.prototype.hasOwnProperty,H=Object.prototype.propertyIsEnumerable;var $=(r,i,o)=>i in r?j(r,i,{enumerable:!0,configurable:!0,writable:!0,value:o}):r[i]=o,_=(r,i)=>{for(var o in i||(i={}))F.call(i,o)&&$(r,o,i[o]);if(f)for(var o of f(i))H.call(i,o)&&$(r,o,i[o]);return r};import{u as K,D as z}from"./DocumentDisplay.667117df.js";import{_ as B,H as D}from"./Modal.53b5115e.js";import{S as s,_ as N}from"./runner2.b3768e53.js";import{u as O}from"./useTypewrite.705f091f.js";import{u as U,C as Y}from"./Console.89676a2b.js";import{d as v,o as x,c as l,u,y,w as h,b as a}from"./index.9863c836.js";import{u as I}from"./useLocationHash.23271a6c.js";import"./AceEditor.7fc91d16.js";import"./Labeled.c14a6bd7.js";import"./Field.965fdaab.js";const L=v({__name:"Viewer2",props:{code:null},setup(r){const i=r,{console:o,field:g,messages:m,onKey:S,onSelect:E,onSubmit:C,placeholder:w}=U();s.tooltip=(e,t)=>{w.value=e,t==null||t()},s.write=(e,t)=>{o.log(e),t==null||t()},s.print=(e,t)=>{s.write(e,()=>{s.tooltip("Press Enter to continue...",()=>{s.waitFor("Enter",!0,()=>{s.tooltip("",t)})})})},s.image=(e,t)=>{const n=new Image;n.src=e,o.log(n),t==null||t()},s.line=e=>{o.line(),e==null||e()},s.clear=e=>{o.clear(),e==null||e()},s.type=(e,t,n)=>{const{el:d,done:V}=O(e,t);o.log(d),V.then(n)},s.input=async(e,t)=>{const n=await o.prompt(e,!0);t==null||t(n)},s.choice=async(e,t,n)=>{const d=await o.select(e,_({},t));n==null||n(d)},s.waitFor=async(e,t,n)=>{Object.assign(window,{c:o}),t?o.key(e).then(()=>n==null?void 0:n(e)):o.bindKey(e,()=>n==null?void 0:n(e))};let p;return K({title:"Execute",onEnter:!0,action(){o.clear(),p&&(p.stopped=!0),p=new s(i.code,e=>{s.waitingFor.splice(0,s.waitingFor.length),s.tooltip("",()=>{s.clear(()=>{e.start()})})}),Object.assign(window,{prev:p})}}),(e,t)=>(x(),l(Y,{field:u(g),"onUpdate:field":t[0]||(t[0]=n=>y(g)?g.value=n:null),messages:u(m),"onUpdate:messages":t[1]||(t[1]=n=>y(m)?m.value=n:null),placeholder:u(w),onKey:u(S),onSelect:u(E),onSubmit:u(C)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}});const W=v({__name:"v2-editor",setup(r){const i=I(`$money = 500
$eggs = 0
$name = (no name)

@start
  $name = @input What is your name?
  @run market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @menu What would you like to buy?
    Eggs
      @eggs
    Go Back
      @pass
  @market

@eggs
  $egg = @number How many dozen eggs do you want to buy?
  $eggprice @= 6 * $egg
  $egg dozen eggs will cost $$$eggprice.
  @menu Are you sure you want to buy them?
    @option Yes
      @if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      @elseif $money = $eggprice
        You have just enough money for these eggs.
        $money -= $eggprice
        $eggs += $egg
      @else
        You don't have enough money for these eggs!
    @option No
      Okay, let's go back to the store.`);return(o,g)=>(x(),l(z,{center:"","explicit-height":"","max-width":""},{default:h(()=>[a(D,{class:"stack",space:.75,style:{height:"100%","justify-content":"center"}},{default:h(()=>[a(N,{modelValue:u(i),"onUpdate:modelValue":g[0]||(g[0]=m=>y(i)?i.value=m:null),round:"",style:{flex:"1","max-width":"800px"}},null,8,["modelValue"]),a(L,{class:"viewer",code:u(i)},null,8,["code"])]),_:1},8,["space"])]),_:1}))}});var c=B(W,[["__scopeId","data-v-3ae9e3b7"]]);export{c as default};
