import{r as o}from"./index.577400si.js";import{B as x,V as y}from"./Button.32h7782u.js";import{D as C}from"./DocumentDisplay.f38sgubl.js";import{H as S,F as N,a as D}from"./SharedNav.3q0ndcho.js";import{_ as V}from"./NumericField.5g1ob2jp.js";import{_ as G}from"./plugin-vue_export-helper.62h235na.js";import{d as U,q as p,g as i,o as $,c as z,w as s,a as f,b as n,t as v,u as _,e as B}from"./index.5eygmsav.js";import"./Navigation.64w2aw5y.js";import"./Logo.4djlqykq.js";import"./LogoLight.11xzt69h.js";const F={class:"fields"},H=B(" Previous number... "),M=B("Next number..."),j={class:"result"},q={class:"result"},A=U({__name:"same-number-generator",setup(I){const l=p(1),u=p(10),r=p(1),m=p(""),b=i(()=>{r.value=1;const t=o.create(""+l.value).intBetween(0,16777215),e=o.create(""+u.value).intBetween(0,16777215);return{generator:o.create(m.value+t*e),values:[]}}),h=i(()=>{r.value=1;const t=o.create(""+l.value).intBetween(0,16777215),e=o.create(""+u.value).intBetween(0,16777215);return{generator:o.create(m.value+t*e),values:[]}}),g=i(()=>{var a,d;const{generator:t,values:e}=b.value;return(d=e[a=r.value])!=null?d:e[a]=t.intBetween(l.value,u.value)}),k=i(()=>{var a,d;const{generator:t,values:e}=h.value;return(d=e[a=r.value])!=null?d:e[a]=Array(g.value.toString().length).fill().map(()=>{const c=t.intBetween(0,35);return c>9?t.intBetween(0,1)?c.toString(36).toUpperCase():c.toString(36).toLowerCase():c.toString(36)}).join("")}),w=i(()=>{let t=r.value.toString();return t=t[t.length-1],r.value+([,"st","nd","rd"][+t]||"th")});return(t,e)=>($(),z(C,{center:""},{default:s(()=>[f("form",F,[n(y,{center:""},{default:s(()=>[n(S,{stretch:""},{default:s(()=>[n(V,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),placeholder:"Minimum"},null,8,["modelValue"]),n(V,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value=a),placeholder:"Maximum"},null,8,["modelValue"])]),_:1}),n(N,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=a=>m.value=a),placeholder:"Optional password...",type:"password"},null,8,["modelValue"]),n(S,{stretch:""},{default:s(()=>[n(x,{disabled:r.value<=1,onClick:e[3]||(e[3]=a=>r.value--)},{default:s(()=>[H]),_:1},8,["disabled"]),n(x,{onClick:e[4]||(e[4]=a=>r.value++)},{default:s(()=>[M]),_:1})]),_:1}),n(D),f("p",j,v(_(w))+" number: "+v(_(g)),1),f("p",q,v(_(w))+" string: "+v(_(k)),1)]),_:1})])]),_:1}))}});var X=G(A,[["__scopeId","data-v-adc4458c"]]);export{X as default};