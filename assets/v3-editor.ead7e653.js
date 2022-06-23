import{D as $}from"./DocumentDisplay.667117df.js";import{_ as A,H as F}from"./Modal.53b5115e.js";import{_ as P}from"./Editor3.a91af011.js";import{u as N}from"./useTypewrite.705f091f.js";import{u as S,C as R}from"./Console.89676a2b.js";import{s as V}from"./compiler3.8ff8648d.js";import{d as _,G as k,aC as C,ae as T,o as x,c as v,u as a,y as p,w as d,b as l}from"./index.9863c836.js";import{u as j}from"./useLocationHash.23271a6c.js";import"./AceEditor.7fc91d16.js";import"./Labeled.c14a6bd7.js";import"./Field.965fdaab.js";var D=`const post = self.postMessage;
let isAsyncRunning = false;

// @ts-ignore
delete self.postMessage;
// @ts-ignore
delete self.caches;

/** @returns {Promise<any>} */
function onNextMessage() {
  return new Promise((resolve) => {
    self.onmessage = ({ data }) => {
      resolve(data);
    };
  });
}

/** @template T */
async function runAsync(
  /** @type {() => Promise<T>} */ fn,
  /** @type {T} */ defaultValue
) {
  if (isAsyncRunning) return defaultValue;

  isAsyncRunning = true;
  const value = await fn();
  isAsyncRunning = false;

  return value;
}

function _print(/** @type {any[]} */ ...content) {
  post({ type: "print", content });
}

async function _simplePost(
  type = "",
  /** @type {any} */ defaultValue,
  messages = [""]
) {
  return runAsync(async () => {
    _print(...messages);
    post({ type, messages });

    return await onNextMessage();
  }, defaultValue);
}

async function $pause() {
  return runAsync(async () => {
    post({ type: "pause" });
    await onNextMessage();
  });
}

async function $typewrite([time, ...messages] = [1, ""]) {
  time = +time;
  if (!isFinite(time) || time < 0) time = 1;

  return runAsync(async () => {
    post({ type: "typewrite", time: time * 1000, messages });

    return await onNextMessage();
  }, undefined);
}

async function $typewrite_ms([time, ...messages] = [1000, ""]) {
  time = +time;
  if (!isFinite(time) || time < 0) time = 1000;

  return runAsync(async () => {
    post({ type: "typewrite", time: time * 1000, messages });

    return await onNextMessage();
  }, undefined);
}

async function $input(messages = [""]) {
  return _simplePost("input", "", messages);
}

async function $inputint(messages = [""]) {
  return _simplePost("inputint", 0, messages);
}

async function $inputfloat(messages = [""]) {
  return _simplePost("inputfloat", 0, messages);
}

async function $confirm(messages = [""]) {
  return _simplePost("confirm", false, messages);
}

function $kill(messages = [""]) {
  _print(messages);
  post({ type: "kill" });
}

async function $wait([time] = [1]) {
  return runAsync(async () => {
    time = +time;
    if (!isFinite(time) || time < 0) time = 0;
    await new Promise((resolve) => setTimeout(resolve, 1000 * time));
  });
}

async function $wait_ms([time] = [1]) {
  return runAsync(async () => {
    time = +time;
    if (!isFinite(time) || time < 0) time = 0;
    await new Promise((resolve) => setTimeout(resolve, 1000 * time));
  });
}

function $random([min, max] = [0, 1]) {
  min = +min;
  max = +max;

  if (!isFinite(min) || !isFinite(max)) return 0;
  return Math.random() * (max - min) + min;
}

function $randint([min, max] = [0, 9]) {
  min = +min;
  max = +max;

  if (!isFinite(min) || !isFinite(max)) return 0;
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function* $range([min, max] = [1, NaN]) {
  min = +min;
  max = +max;

  if (!isFinite(min)) return;
  if (!isFinite(max)) [max, min] = [min, 0];

  for (let i = min; i <= max; i++) {
    yield i;
  }
}

/** @type {{ [x: string]: string }} */
let options = {};

/** @type {{ [x: string]: () => Promise<void> | void }} */
let menu = {};

async function $menu(
  messages = [""],
  /** @type {() => Promise<void> | void } */ cb = () => {}
) {
  if (isAsyncRunning) return;
  isAsyncRunning = true;

  _print(...messages);

  menu = Object.create(null);
  options = Object.create(null);
  await cb();

  post({ type: "menu", options, messages });
  isAsyncRunning = false;
  await menu[await onNextMessage()]?.();
}

function $option(/** @type {any[]} */ [key, value = key] = [], cb = () => {}) {
  options[key] = "" + value;
  menu[key] = cb;
}

export {};
`;const E=_({__name:"Viewer3",props:{code:null},setup(f){const r=f,{console:i,field:m,messages:u,onKey:w,onSelect:h,onSubmit:M,placeholder:y}=S();let n=g(r.code,!1);k(T(r,"code"),C(e=>n=g(e,!0),1e3));function b({data:e}){if(!(typeof e!="object"||e===null))if(e.type==="print")i.log(e.content);else if(e.type==="typewrite"){const s=n;for(let t of e.messages){const{el:o,done:c}=N(t,e.time);i.log(o),c.then(()=>{s===n&&(n==null||n.postMessage(void 0))})}}else if(e.type==="input"){const s=n;i.prompt(e.messages[0],!0).then(t=>{s===n&&(n==null||n.postMessage(t))})}else if(e.type==="inputint"){const s=n;i.prompt(e.messages[0],!0).then(t=>{if(s!==n)return;const o=~~t;!Number.isSafeInteger(o)||n==null||n.postMessage(o)})}else if(e.type==="inputfloat"){const s=n;i.prompt(e.messages[0],!0).then(t=>{if(s!==n)return;const o=parseFloat(t);!Number.isFinite(o)||n==null||n.postMessage(o)})}else if(e.type==="menu"){const s=n;i.select(e.messages[0],e.options).then(t=>{s===n&&(n==null||n.postMessage(t))})}else if(e.type==="confirm"){const s=n;i.select(e.messages[0],{true:"Yes",false:"No"}).then(t=>{s===n&&(n==null||n.postMessage(t==="true"))})}else if(e.type==="pause"){const s=n;i.prompt("Press Enter to continue...",!1).then(()=>{s===n&&(n==null||n.postMessage(void 0))})}else e.type==="kill"&&(n==null||n.terminate())}function g(e,s){i.clear(),y.value="",s&&(n==null||n.terminate());try{const t=D+V(e),o=new Worker(`data:text/javascript,${t}`,{name:Math.random().toString().slice(2),type:"module"});return o.onmessage=b,o.onerror=c=>{c.preventDefault(),i.error(c.message)},o}catch(t){i.error((t==null?void 0:t.message)||t||"An unknown error occurred")}}return(e,s)=>(x(),v(R,{field:a(m),"onUpdate:field":s[0]||(s[0]=t=>p(m)?m.value=t:null),messages:a(u),"onUpdate:messages":s[1]||(s[1]=t=>p(u)?u.value=t:null),class:"console",placeholder:a(y),onKey:a(w),onSelect:a(h),onSubmit:a(M)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}});const H=_({__name:"v3-editor",setup(f){const r=j();return(i,m)=>(x(),v($,{center:"","explicit-height":"","max-width":""},{default:d(()=>[l(F,{class:"stack",space:.75,style:{height:"100%","justify-content":"center"}},{default:d(()=>[l(P,{modelValue:a(r),"onUpdate:modelValue":m[0]||(m[0]=u=>p(r)?r.value=u:null),round:"",style:{flex:"1","max-width":"800px"}},null,8,["modelValue"]),l(E,{class:"viewer",code:a(r)},null,8,["code"])]),_:1},8,["space"])]),_:1}))}});var z=A(H,[["__scopeId","data-v-66b8ea7a"]]);export{z as default};
