import{r}from"./index.5exuk2yo.js";import{B as V,V as y}from"./VStack.1y80766s.js";import{D as C}from"./DocumentDisplay.1u3n8z7b.js";import{H as w,F as N,S as D}from"./BookmarkIcon.2hoqbw7h.js";import{_ as x}from"./NumericField.vue_vue_type_script_setup_true_lang.5g1ob2jp.js";import{d as G,q as p,g as d,o as U,c as $,w as s,a as f,b as o,t as v,u as _,e as b,_ as F}from"./index.4yzzgtk3.js";import"./Navigation.3ml0eptj.js";import"./Logo.vue_vue_type_script_setup_true_lang.4ks050nj.js";import"./LogoLight.539ztpd2.js";import"./SharedNav.3yzrssnp.js";const H={class:"fields"},M=b(" Previous number... "),j=b("Next number..."),q={class:"result"},A={class:"result"},I=G({__name:"same-number-generator",setup(L){const l=p(1),u=p(10),n=p(1),m=p(""),B=d(()=>{n.value=1;const t=r.create(""+l.value).intBetween(0,16777215),e=r.create(""+u.value).intBetween(0,16777215);return{generator:r.create(m.value+t*e),values:[]}}),h=d(()=>{n.value=1;const t=r.create(""+l.value).intBetween(0,16777215),e=r.create(""+u.value).intBetween(0,16777215);return{generator:r.create(m.value+t*e),values:[]}}),g=d(()=>{var a,i;const{generator:t,values:e}=B.value;return(i=e[a=n.value])!=null?i:e[a]=t.intBetween(l.value,u.value)}),k=d(()=>{var a,i;const{generator:t,values:e}=h.value;return(i=e[a=n.value])!=null?i:e[a]=Array(g.value.toString().length).fill().map(()=>{const c=t.intBetween(0,35);return c>9?t.intBetween(0,1)?c.toString(36).toUpperCase():c.toString(36).toLowerCase():c.toString(36)}).join("")}),S=d(()=>{let t=n.value.toString();return t=t[t.length-1],n.value+([,"st","nd","rd"][+t]||"th")});return(t,e)=>(U(),$(C,{center:""},{default:s(()=>[f("form",H,[o(y,{center:""},{default:s(()=>[o(w,{stretch:""},{default:s(()=>[o(x,{modelValue:l.value,"onUpdate:modelValue":e[0]||(e[0]=a=>l.value=a),placeholder:"Minimum"},null,8,["modelValue"]),o(x,{modelValue:u.value,"onUpdate:modelValue":e[1]||(e[1]=a=>u.value=a),placeholder:"Maximum"},null,8,["modelValue"])]),_:1}),o(N,{modelValue:m.value,"onUpdate:modelValue":e[2]||(e[2]=a=>m.value=a),placeholder:"Optional password...",type:"password"},null,8,["modelValue"]),o(w,{stretch:""},{default:s(()=>[o(V,{disabled:n.value<=1,onClick:e[3]||(e[3]=a=>n.value--)},{default:s(()=>[M]),_:1},8,["disabled"]),o(V,{onClick:e[4]||(e[4]=a=>n.value++)},{default:s(()=>[j]),_:1})]),_:1}),o(D),f("p",q,v(_(S))+" number: "+v(_(g)),1),f("p",A,v(_(S))+" string: "+v(_(k)),1)]),_:1})])]),_:1}))}});const X=F(I,[["__scopeId","data-v-41b30443"]]);export{X as default};
