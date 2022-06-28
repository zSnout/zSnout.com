import{u as M,E as b}from"./useLocationHash.52731d19.js";import{_ as A}from"./Editor3.2d0b1c36.js";import{u as P}from"./useTypewrite.705f091f.js";import{u as F,C as N}from"./Console.76953998.js";import{s as k}from"./compiler3.8ff8648d.js";import{d,E as V,aH as R,ad as S,o as $,c as x,u as r,x as p,w as T,b as y}from"./index.5f652047.js";import"./DocumentDisplay.5a7fd210.js";import"./Modal.d0bcb167.js";import"./AceEditor.c8da1c23.js";import"./Dropdown.9def2388.js";import"./Field.d7a03d6e.js";import"./Labeled.4468dfe1.js";var j=`const post = self.postMessage;
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
  /** @type {any} */ defaultValue = null,
  messages = [""]
) {
  return runAsync(async () => {
    post({ type, messages });

    return await onNextMessage();
  }, defaultValue);
}

async function $pause() {
  return _simplePost("pause");
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
`;const C=d({__name:"Viewer3",props:{code:null},setup(c){const a=c,{console:i,field:m,messages:u,onKey:_,onSelect:h,onSubmit:v,placeholder:g}=F();let n=f(a.code,!1);V(S(a,"code"),R(e=>n=f(e,!0),1e3));function w({data:e}){if(!(typeof e!="object"||e===null))if(e.type==="print")i.log(e.content);else if(e.type==="typewrite"){const s=n;for(let t of e.messages){const{el:o,done:l}=P(t,e.time);i.log(o),l.then(()=>{s===n&&(n==null||n.postMessage(void 0))})}}else if(e.type==="input"){const s=n;i.prompt(e.messages[0],!0).then(t=>{s===n&&(n==null||n.postMessage(t))})}else if(e.type==="inputint"){const s=n;i.prompt(e.messages[0],!0).then(t=>{if(s!==n)return;const o=~~t;!Number.isSafeInteger(o)||n==null||n.postMessage(o)})}else if(e.type==="inputfloat"){const s=n;i.prompt(e.messages[0],!0).then(t=>{if(s!==n)return;const o=parseFloat(t);!Number.isFinite(o)||n==null||n.postMessage(o)})}else if(e.type==="menu"){const s=n;i.select(e.messages[0],e.options).then(t=>{s===n&&(n==null||n.postMessage(t))})}else if(e.type==="confirm"){const s=n;i.select(e.messages[0],{true:"Yes",false:"No"}).then(t=>{s===n&&(n==null||n.postMessage(t==="true"))})}else if(e.type==="pause"){const s=n;i.prompt("Press Enter to continue...",!1).then(()=>{s===n&&(n==null||n.postMessage(void 0))})}else e.type==="kill"&&(n==null||n.terminate())}function f(e,s){i.clear(),g.value="",s&&(n==null||n.terminate());try{const t="(async()=>{"+j.replace("export {};","")+k(e)+"})()";window.console.log(t);const o=new Worker(`data:text/javascript,${t}`,{name:Math.random().toString().slice(2)});return o.onmessage=w,o.onerror=l=>{l.preventDefault(),i.error(l.message)},o}catch(t){i.error((t==null?void 0:t.message)||t||"An unknown error occurred")}}return(e,s)=>($(),x(N,{field:r(m),"onUpdate:field":s[0]||(s[0]=t=>p(m)?m.value=t:null),messages:r(u),"onUpdate:messages":s[1]||(s[1]=t=>p(u)?u.value=t:null),class:"console",placeholder:r(g),onKey:r(_),onSelect:r(h),onSubmit:r(v)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),J=d({__name:"v3-editor",setup(c){const a=M(`$money = 500
$eggs = 0

$name = @input "What is your name?"
@market

def @market
  "$name, you have $$money and $eggs dozen eggs."
  @menu "What would you like to buy?"
    @option "Eggs"
      @eggsfn
    @option "Go Back"
  @market

def @eggsfn
  $egg = @inputint "How many dozen eggs do you want to buy?"
  $eggprice = 6 * $egg
  "$egg dozen eggs will cost $$eggprice."
  @menu "Are you sure you want to buy them?"
    @option "Yes"
      if $money > $eggprice
        $money -= $eggprice
        $eggs += $egg
      else if $money = $eggprice
        "You have just enough money for these eggs."
        $money -= $eggprice
        $eggs += $egg
      else
        "You don't have enough money for these eggs!"
    @option "No"
      "Okay, let's go back to the store."`);return(i,m)=>($(),x(b,null,{default:T(()=>[y(A,{modelValue:r(a),"onUpdate:modelValue":m[0]||(m[0]=u=>p(a)?a.value=u:null),round:""},null,8,["modelValue"]),y(C,{code:r(a)},null,8,["code"])]),_:1}))}});export{J as default};
