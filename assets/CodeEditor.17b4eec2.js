import{b as m,H as v,F as V}from"./BookmarkIcon.73791b49.js";import{u as S,C}from"./Console.d18fc3af.js";import{D as b}from"./DocumentDisplay.d3919f00.js";import{I as x}from"./InlineCheckboxField.1a4f8265.js";import{L as i}from"./Labeled.ffd3eb35.js";import{_}from"./Editor3.914572e5.js";import{d as h,k as p,c as k,w as a,o as y,b as o,u as t,x as g,e as f}from"./index.67b3525e.js";import"./Dropdown.e0b2729b.js";import"./AceEditor.6ed21c4a.js";const U=f('Set to "23"'),w=f(" Set to a random value "),$=f(" Set placeholder to a random value "),T=h({__name:"CodeEditor",setup(B){const s=p(""),n=p("placeholder"),u=p(!1),d=S(),{field:r,placeholder:c}=d;return(D,e)=>(y(),k(b,{"explicit-height":"","max-width":""},{options:a(()=>[o(v,{space:.75,stretch:""},{default:a(()=>[o(m,{onClick:e[3]||(e[3]=l=>s.value="23")},{default:a(()=>[U]),_:1}),o(m,{onClick:e[4]||(e[4]=l=>s.value=""+Math.random())},{default:a(()=>[w]),_:1})]),_:1},8,["space"]),o(m,{onClick:e[5]||(e[5]=l=>n.value=""+Math.random())},{default:a(()=>[$]),_:1}),o(i,{label:"Model Value"},{default:a(()=>[o(V,{modelValue:s.value,"onUpdate:modelValue":e[6]||(e[6]=l=>s.value=l)},null,8,["modelValue"])]),_:1}),o(i,{label:"Placeholder"},{default:a(()=>[o(V,{modelValue:n.value,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value=l)},null,8,["modelValue"])]),_:1}),o(i,{label:"Readonly?"},{default:a(()=>[o(x,{modelValue:u.value,"onUpdate:modelValue":e[8]||(e[8]=l=>u.value=l)},null,8,["modelValue"])]),_:1})]),default:a(()=>[o(v,{space:.75,style:{height:"100%"}},{default:a(()=>[o(_,{modelValue:s.value,"onUpdate:modelValue":e[0]||(e[0]=l=>s.value=l),placeholder:n.value,readonly:u.value,round:"",style:{flex:"1"},onSave:t(d).console.error},null,8,["modelValue","placeholder","readonly","onSave"]),o(C,{field:t(r),"onUpdate:field":e[1]||(e[1]=l=>g(r)?r.value=l:null),messages:t(d).messages,"onUpdate:messages":e[2]||(e[2]=l=>t(d).messages=l),placeholder:t(c),stretch:"",style:{width:"min(50%, 400px)"},onSelect:t(d).onSelect,onSubmit:t(d).onSubmit},null,8,["field","messages","placeholder","onSelect","onSubmit"])]),_:1},8,["space"])]),_:1}))}});export{T as default};