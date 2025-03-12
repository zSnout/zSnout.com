import{B as S}from"./VStack.3evi6szx.js";import{D as A}from"./DocumentDisplay.6d0yf2eg.js";import{T as L}from"./Title.4eiq6n5a.js";import{d as T,r as E,E as f,c as R,w as u,o as g,e as k,b as h,t as x,u as y,O as U,B as V,f as z,a as w,k as J}from"./index.xh0zaea0.js";import"./Navigation.vue_vue_type_script_setup_true_lang.3qfjvw5m.js";import"./BookmarkIcon.1ijfs95x.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const q=w("p",null," Downloading will open your data in a separate tab, so make sure popups are enabled for this site. ",-1),M={key:0},Y=["href"],et=T({__name:"my-data",setup(F){const p=E("");function t(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function $(e){return new Date(e).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function r(e){return`<small style='opacity:50%'>(${$(e)})</small>`}function j(e){return`<table style='border:1px solid currentcolor'><tbody>${Object.entries(e).map(([l,n])=>`<tr><th style='text-align:right'>${t(l)}</th><td>${t(typeof n=="string"&&/\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d.\d{3}Z/.test(n)?$(n):(n??"NULL").toString())}</td></tr>`).join("")}</tbody></table>`}return f.on("account:dump",e=>{const l=`<section>
  <h2>Account</h2>
  ${j(e.account)}
  </section>`,n=`<section>
  <h2>Bookmarks</h2>
  <ul>
  ${e.bookmarks.map(({name:i,url:a})=>`<li><a href="${t(a.startsWith("/")?"https://v7.zsnout.com"+a:a)}">${t(i)}</a></li>`).join("")}
  </ul>
  </section>`,_=`<section>
  <h2>Notes</h2>
  ${e.notes.map(({creation:i,title:a,contents:c})=>`<details>
<summary><strong>${t(a)}</strong> ${r(i)}</summary>
${c}
</details>`).join("")}
  </ul>
  </section>`,D=`<section>
  <h2>Raw JSON (mainly useful for programmers)</h2>
  <textarea style='width:100%' rows='24'>${t(JSON.stringify(e,void 0,2))}</textarea>
  </section>`,N=`<section>
  <h2>Chats</h2>
  ${e.chats.map(({creation:i,title:a,levels:c,messages:m})=>`<details>
  <summary><strong>${t(a)}</strong> ${r(i)}</summary>
  <table style='border:1px solid black'>
  <caption style='text-align:left'>Members</caption>
  <tbody>
  ${Object.entries(c.members).filter(([,o])=>o&&o!="none").map(([o,s])=>`<tr><th style='text-align:right'>${t(o)}</th><td>${t(s)}</td></tr>`).join("")}
  </tbody>
  </table>
  <ul>
  ${m.map(({content:o,creation:s,from:d})=>`<li><span style='opacity:50%'>${t(d)}:</span> ${t(o)} ${r(s)}</li>`).join("")}
  </ul>
  </details>`).join("")}
  </section>`,v=`<section>
<h2>Stories</h2>
${e.stories.map(({title:i,creation:a,members:c,threads:m})=>`<details>
<summary><strong>${t(i)}</strong> ${r(a)}</summary>
<table style='border:1px solid black'>
<caption style='text-align:left'>Members</caption>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th colspan='2'>threads</th>
</tr>
<tr>
<th>username</th>
<th>gems</th>
<th>contribs</th>
<th>started</th>
<th>completed</th>
<th>permissions</th>
</tr>
</thead>
<tbody>
${Object.entries(c).map(([o,{gems:s,level:d,sentences:O,threads:b}])=>`<tr>
<th style='text-align:left'>${t(o)}</th>
<td>${t((s??"NULL")+"")}</td>
<td>${t(O+"")}</td>
<td>${t(b.started+"")}</td>
<td>${t(b.completed+"")}</td>
<td>${t(d=="none"||!d?"<removed>":d)}</td>
</tr>`).join("")}
</tbody>
</table>
<p>Completed Threads (click checkbox to show all content):</p>
<ol>
${m.filter(o=>o.completed).map(({creation:o,sentences:s})=>`<li><div style='display:flex;align-items:baseline'><input type='checkbox'><span style='hidden' data-complete>${t(s.join(" "))} ${r(o)}</span></div></li>`).join("")}
</ol>
<p>Incomplete Threads (click checkbox to reveal content):</p>
<ol>
${m.filter(o=>!o.completed).map(({creation:o,sentences:s})=>`<li><input type='checkbox'><span style='hidden'>${t(s.join(" "))}</span> ${r(o)}</li>`).join("")}
</ol>
</details>`).join("")}
</section>`,B=`<!DOCTYPE html>
<meta charset="utf-8" />
<style>section{border-left:1px solid #ccc;padding-left:1.5rem;margin:2rem 0}
td,th{padding:0.069px 0.25rem}
details[open]+details{padding-top:2rem}
input+span{display:none}
input:checked+span{display:inline}
input+span[data-complete]{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;}
input:checked+span[data-complete]{display:inline}
:root{font-family:sans-serif}
body{padding:2rem 1.5rem}
h1{margin:0}
h2{margin:0;margin-bottom:1rem}
</style>
<h1>Data Export for ${e.account.username} (zSnout 7)</h1>
${l}
${n}
${_}
${N}
${v}
${D}`,C=new File([B],`zsnout-data-${e.account.username}.html`,{type:"text/html"});open(p.value=URL.createObjectURL(C))}),(e,l)=>(g(),R(A,null,{default:u(()=>[k(L,null,{default:u(()=>[h("Export Data for "+x(y(U)),1)]),_:1}),k(S,{onClick:l[0]||(l[0]=n=>y(f).emit("account:request:dump",y(V)))},{default:u(()=>[h(" Download Data ")]),_:1}),q,p.value?(g(),z("p",M,[h(" Your data dump is available at "),w("a",{href:p.value,download:""},x(p.value),9,Y),h(" . ")])):J("",!0)]),_:1}))}});export{et as default};
