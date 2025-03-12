import{B as E}from"./VStack.3evi6szx.js";import{C as J}from"./CardGrid.1kdxvvm0.js";import{D as M}from"./DocumentDisplay.6d0yf2eg.js";import{T as R}from"./Title.4eiq6n5a.js";import{d as V,r as h,E as y,B as _,c as j,w as m,o as $,e as v,b as w,t as N,u as b,O as H,k as C,f as z,a as D}from"./index.xh0zaea0.js";import"./BookmarkIcon.1ijfs95x.js";import"./Field.5c7fkv56.js";import"./Navigation.vue_vue_type_script_setup_true_lang.3qfjvw5m.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const U={key:1},F=["innerHTML"],st=V({__name:"my-data",setup(G){const f=h(null),g=h(""),u=h();function t(e){return e.replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&apos;")}function k(e){return new Date(e).toLocaleString(void 0,{year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"})}function l(e){return`<small style='opacity:50%'>(${k(e)})</small>`}function B(e){return`<table style='border:1px solid currentcolor'><tbody>${Object.entries(e).map(([r,i])=>`<tr><th style='text-align:right'>${t(r)}</th><td>${t(typeof i=="string"&&/\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d.\d{3}Z/.test(i)?k(i):(i??"NULL").toString())}</td></tr>`).join("")}</tbody></table>`}return y.emit("account:request:dump",_.value),y.on("account:dump",e=>{f.value=e;const r=`<section>
  <h2>Account</h2>
  ${B(e.account)}
  </section>`,i=`<section>
  <h2>Bookmarks</h2>
  <ul>
  ${e.bookmarks.map(({name:a,url:s})=>`<li><a href="${t(s.startsWith("/")?"https://v7.zsnout.com"+s:s)}">${t(a)}</a></li>`).join("")}
  </ul>
  </section>`,O=`<section>
  <h2>Notes</h2>
  ${e.notes.map(({creation:a,title:s,contents:c})=>`<details>
<summary><strong>${t(s)}</strong> ${l(a)}</summary>
${c}
</details>`).join("")}
  </ul>
  </section>`,S=`<section>
  <h2>Raw JSON (mainly useful for programmers)</h2>
  <textarea style='width:100%' rows='24'>${t(JSON.stringify(e,void 0,2))}</textarea>
  </section>`,T=`<section>
  <h2>Chats</h2>
  ${e.chats.map(({creation:a,title:s,levels:c,messages:p})=>`<details>
  <summary><strong>${t(s)}</strong> ${l(a)}</summary>
  <table style='border:1px solid black'>
  <caption style='text-align:left'>Members</caption>
  <tbody>
  ${Object.entries(c.members).filter(([,o])=>o&&o!="none").map(([o,n])=>`<tr><th style='text-align:right'>${t(o)}</th><td>${t(n)}</td></tr>`).join("")}
  </tbody>
  </table>
  <ul>
  ${p.map(({content:o,creation:n,from:d})=>`<li><span style='opacity:50%'>${t(d)}:</span> ${t(o)} ${l(n)}</li>`).join("")}
  </ul>
  </details>`).join("")}
  </section>`,A=`<section>
<h2>Stories</h2>
${e.stories.map(({title:a,creation:s,members:c,threads:p})=>`<details>
<summary><strong>${t(a)}</strong> ${l(s)}</summary>
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
${Object.entries(c).map(([o,{gems:n,level:d,sentences:q,threads:x}])=>`<tr>
<th style='text-align:left'>${t(o)}</th>
<td>${t((n??"NULL")+"")}</td>
<td>${t(q+"")}</td>
<td>${t(x.started+"")}</td>
<td>${t(x.completed+"")}</td>
<td>${t(d=="none"||!d?"<removed>":d)}</td>
</tr>`).join("")}
</tbody>
</table>
<p>Completed Threads (click checkbox to show all content):</p>
<ol>
${p.filter(o=>o.completed).map(({creation:o,sentences:n})=>`<li><div style='display:flex;align-items:baseline'><input type='checkbox'><span style='hidden' data-complete>${t(n.join(" "))} ${l(o)}</span></div></li>`).join("")}
</ol>
<p>Incomplete Threads (click checkbox to reveal content):</p>
<ol>
${p.filter(o=>!o.completed).map(({creation:o,sentences:n})=>`<li><input type='checkbox'><span style='hidden'>${t(n.join(" "))}</span> ${l(o)}</li>`).join("")}
</ol>
</details>`).join("")}
</section>`,L=`<!DOCTYPE html>
<meta charset="utf-8" />
<style>section{border-left:1px solid currentcolor;padding-left:1.5rem;margin:2rem 0}
td,th{padding:0.069px 0.25rem}
details[open]+details{padding-top:2rem}
input+span{display:none}
input:checked+span{display:inline}
input+span[data-complete]{overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 1;}
input:checked+span[data-complete]{display:inline}
</style>
${r}
${i}
${O}
${T}
${A}
${S}`;g.value=L,u.value=new File([JSON.stringify(e,void 0,2)],"dump.json",{type:"application/json"})}),(e,r)=>($(),j(M,null,{default:m(()=>[v(R,null,{default:m(()=>[w("Export Data for "+N(b(H)),1)]),_:1}),f.value?C("",!0):($(),j(J,{key:0},{default:m(()=>[v(E,{onClick:r[0]||(r[0]=i=>b(y).emit("account:request:dump",b(_)))},{default:m(()=>[w(" Request Dump ")]),_:1})]),_:1})),u.value?($(),z("div",U,[D("p",null,"Dump is "+N(u.value.size)+" bytes long.",1)])):C("",!0),D("div",{innerHTML:g.value},null,8,F)]),_:1}))}});export{st as default};
