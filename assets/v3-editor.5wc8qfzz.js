import{u as M,E as b}from"./useLocationHash.1zqo29vv.js";import{_ as A}from"./Editor3.vue_vue_type_script_setup_true_lang.5f4ruwer.js";import{u as F}from"./useTypewrite.596b5itz.js";import{u as P,C as N}from"./Console.65z5j7wy.js";import{s as k}from"./compiler3.2myjv9ut.js";import{l as d,w as V,q as R,x as $,C as x,u as r,i as p,D as S,F as y}from"./runtime-core.esm-bundler.47vl3tei.js";import{v as C}from"./main.200onzgm.js";import"./DocumentDisplay.6d0yf2eg.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./BookmarkIcon.46krkaf8.js";import"./VStack.3evi6szx.js";import"./_plugin-vue_export-helper.4yxwi37t.js";import"./Field.5c7fkv56.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";import"./AceEditor.5eal9hit.js";import"./Dropdown.5phpgqpn.js";import"./Labeled.59ihovi6.js";const T=`const post = self.postMessage;
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
`,j=d({__name:"Viewer3",props:{code:null},setup(c){const m=c,{console:i,field:a,messages:u,onKey:_,onSelect:h,onSubmit:v,placeholder:g}=P();let n=f(m.code,!1);V(R(m,"code"),C(e=>n=f(e,!0),1e3));function w({data:e}){if(!(typeof e!="object"||e===null))if(e.type==="print")i.log(e.content);else if(e.type==="typewrite"){const s=n;for(let t of e.messages){const{el:o,done:l}=F(t,e.time);i.log(o),l.then(()=>{s===n&&(n==null||n.postMessage(void 0))})}}else if(e.type==="input"){const s=n;i.prompt(e.messages[0],!0).then(t=>{s===n&&(n==null||n.postMessage(t))})}else if(e.type==="inputint"){const s=n;i.prompt(e.messages[0],!0).then(t=>{if(s!==n)return;const o=~~t;Number.isSafeInteger(o)&&(n==null||n.postMessage(o))})}else if(e.type==="inputfloat"){const s=n;i.prompt(e.messages[0],!0).then(t=>{if(s!==n)return;const o=parseFloat(t);Number.isFinite(o)&&(n==null||n.postMessage(o))})}else if(e.type==="menu"){const s=n;i.select(e.messages[0],e.options).then(t=>{s===n&&(n==null||n.postMessage(t))})}else if(e.type==="confirm"){const s=n;i.select(e.messages[0],{true:"Yes",false:"No"}).then(t=>{s===n&&(n==null||n.postMessage(t==="true"))})}else if(e.type==="pause"){const s=n;i.prompt("Press Enter to continue...",!1).then(()=>{s===n&&(n==null||n.postMessage(void 0))})}else e.type==="kill"&&(n==null||n.terminate())}function f(e,s){i.clear(),g.value="",s&&(n==null||n.terminate());try{const t="(async()=>{"+T.replace("export {};","")+k(e)+"})()";window.console.log(t);const o=new Worker(`data:text/javascript,${t}`,{name:Math.random().toString().slice(2)});return o.onmessage=w,o.onerror=l=>{l.preventDefault(),i.error(l.message)},o}catch(t){i.error((t==null?void 0:t.message)||t||"An unknown error occurred")}}return(e,s)=>($(),x(N,{field:r(a),"onUpdate:field":s[0]||(s[0]=t=>p(a)?a.value=t:null),messages:r(u),"onUpdate:messages":s[1]||(s[1]=t=>p(u)?u.value=t:null),class:"console",placeholder:r(g),onKey:r(_),onSelect:r(h),onSubmit:r(v)},null,8,["field","messages","placeholder","onKey","onSelect","onSubmit"]))}}),en=d({__name:"v3-editor",setup(c){const m=M(`$money = 500
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
      "Okay, let's go back to the store."`);return(i,a)=>($(),x(b,null,{default:S(()=>[y(A,{modelValue:r(m),"onUpdate:modelValue":a[0]||(a[0]=u=>p(m)?m.value=u:null),round:""},null,8,["modelValue"]),y(j,{code:r(m)},null,8,["code"])]),_:1}))}});export{en as default};
