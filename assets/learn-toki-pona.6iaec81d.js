import{i as U,E as Q,a as Z}from"./main.200onzgm.js";import{u as ee}from"./index.dlnn8pzg.js";import{V as z,B as S}from"./VStack.3evi6szx.js";import{D as te}from"./DocumentDisplay.6d0yf2eg.js";import{F as ne}from"./Field.5c7fkv56.js";import{H as oe}from"./BookmarkIcon.46krkaf8.js";import{M as ae}from"./MiddleText.496cwyq8.js";import{l as B,x as o,y as r,a8 as v,z as ie,A as C,B as I,u as m,ag as $,G as w,I as T,F as _,C as k,ab as se,a as le,r as q,D as h,ac as re,ad as ue,H as W,E as O}from"./runtime-core.esm-bundler.55v0mz3f.js";import{a as H}from"./_plugin-vue_export-helper.4yxwi37t.js";import{a as X}from"./useShuffle.1cs5x0cf.js";import"./Navigation.vue_vue_type_script_setup_true_lang.4wr1p5fg.js";import"./Logo.vue_vue_type_script_setup_true_lang.2nyidlx8.js";import"./LogoLight.3fmf1259.js";import"./SharedNav.4z4l3m5g.js";const ce=["aria-valuemax","aria-valuemin","aria-valuenow"],de={class:"inner text-color"},pe=B({__name:"ProgressCircle",props:{max:{default:1},min:{default:0},progress:null,action:null},setup(a){const f=a;function g(d){var u;d.target instanceof HTMLElement&&d.target.scrollIntoView({inline:"center",block:"center",behavior:"smooth"}),(u=f.action)==null||u.call(f)}return(d,u)=>(o(),r("div",{class:C([{action:!!a.action},"progress"]),"aria-valuemax":a.max,"aria-valuemin":a.min,"aria-valuenow":a.progress,style:I({"--progress":`${a.progress*(a.max-a.min)+a.min}turn`,color:m(U)?"#066567":"#2c8d8d","--bg":m(U)?"black":"white"}),role:"progressbar",onClick:g},[v("div",de,[ie(d.$slots,"default",{},void 0,!0)])],14,ce))}});const me=H(pe,[["__scopeId","data-v-ca1b96a6"]]),he={key:0,class:"text-color"},_e={key:1,class:"text-color"},ye=B({__name:"TokiPonaText",props:{content:null},setup(a){const{content:f}=a,g=f.match(/_[^_]*_|[^_]*/g)||[];function d(u){const b=(u.match(/\|[a-z]+\s+[^|~]+\||~[a-z]+|~[()?]|[^|~]+/g)||[]).map(n=>{if(n.startsWith("|")){const[t,...s]=n.slice(1,-1).split(" ");return[t,s.join(" ")]}else return n.startsWith("~")?n=="~?"?["?","?"]:[n.slice(1),n.slice(1)]:[void 0,n]});return b.map(([n,t],s)=>{if(n=="?"){const i=b[s-1];return i?[n+" "+i[0],t]:[n,t]}else return[n,t]})}return(u,A)=>(o(!0),r(w,null,$(m(g),b=>(o(),r(w,null,[b.startsWith("_")?(o(),r("em",he,[(o(!0),r(w,null,$(d(b.slice(1,-1)),([n,t])=>(o(),r("span",{class:C(n)},T(t),3))),256))])):(o(),r("span",_e,[(o(!0),r(w,null,$(d(b),([n,t])=>(o(),r("span",{class:C(n)},T(t),3))),256))]))],64))),256))}});const F=H(ye,[["__scopeId","data-v-569e48d4"]]),ke={key:0},ve={key:2},fe={key:3,class:"nobreak"},we={key:4,class:"large"},ge={key:5},be=B({__name:"TokiPonaContent",props:{hidden:Boolean,content:0},setup(a){return(f,g)=>{const d=se("TokiPonaContent",!0);return a.content==null?(o(),r("p",ke)):typeof a.content=="string"?(o(),r("p",{key:1,style:I({visibility:a.hidden?"hidden":void 0})},[_(F,{content:a.content},null,8,["content"])],4)):Array.isArray(a.content)?(o(),r("div",ve,[(o(!0),r(w,null,$(a.content,u=>(o(),k(d,{content:u,hidden:a.hidden},null,8,["content","hidden"]))),256))])):a.content.type=="nobreak"?(o(),r("div",fe,[_(d,{content:a.content.content,hidden:a.hidden},null,8,["content","hidden"])])):a.content.type=="large"?(o(),r("div",we,[_(d,{content:a.content.content,hidden:a.hidden},null,8,["content","hidden"])])):(o(),r("p",ge))}}});const N=H(be,[["__scopeId","data-v-c4ea50b0"]]);function x(a,f){return a.includes(f)}const Y=a=>(re("data-v-45dc9f3e"),a=a(),ue(),a),Te={class:"sticky"},je={class:"levels"},qe=Y(()=>v("div",{class:"x-spacer"},null,-1)),xe=Y(()=>v("div",{class:"x-spacer"},null,-1)),Ie=Y(()=>v("div",{style:{height:"6rem"}},null,-1)),$e=Y(()=>v("div",{style:{flex:"1"}},null,-1)),Pe={class:"title"},Ce=Y(()=>v("div",{style:{flex:"1"}},null,-1)),Le=B({__name:"learn-toki-pona",setup(a){const f=["a","akesi","ala","alasa","ale","anpa","ante","anu","awen","e","en","epiku","esun","ijo","ike","ilo","insa","jaki","jan","jasima","jelo","jo","kala","kalama","kama","kasi","ken","kepeken","kijetesantakalu","kili","kin","kipisi","kiwen","ko","kokosila","kon","ku","kule","kulupu","kute","la","lanpan","lape","laso","lawa","leko","len","lete","li","lili","linja","lipu","loje","lon","luka","lukin","lupa","ma","mama","mani","meli","meso","mi","mije","misikeke","moku","moli","monsi","monsuta","mu","mun","musi","mute","n","namako","nanpa","nasa","nasin","nena","ni","nimi","noka","o","oko","olin","ona","open","pakala","pali","palisa","pan","pana","pi","pilin","pimeja","pini","pipi","poka","poki","pona","pu","sama","seli","selo","seme","sewi","sijelo","sike","sin","sina","sinpin","sitelen","soko","sona","soweli","suli","suno","supa","suwi","tan","taso","tawa","telo","tenpo","toki","tomo","tonsi","tu","unpa","uta","utala","walo","wan","waso","wawa","weka","wile"],g=e=>({valid:!0,remark:e}),d=e=>({valid:!1,remark:e}),u=[{type:"article",title:"Introduction",vocab:[],content:["Hello, new Toki Pona learner! This is an interactive system that can help you learn Toki Pona. This system has many levels, each exploring a very small topic. You can skip between them by clicking the circles at the top of the page or go in order.","It looks like you already know how to advance paragraphs, but here's a tip for keyboard users: just press the Space bar or Enter key to go to the next item.","Let's get straight into your first lesson!"]},{type:"article",title:"Letters and Pronunciation",vocab:[],content:["Toki Pona is a minimalist language created by Sonja Lang. It is an experiment created to see how few words a language can have before it becomes unusable. As of 2022, it only has 137 words.","It has nine consonants: j, k, l, m, n, p, s, t, and w. These sound exactly like you'd expect them to in English, except for j. In toki pona, the letter J sounds like the English letter Y.",["It also has five consonants: a, e, i, o, and u. Here are how they sound:","|letter A| - ah as in father","|letter E| - eh as in bed","|letter I| - ee as in deep","|letter O| - oh as in go","|letter U| - oo as in moose"],"Don't be worried if you mispronounce some words. Toki Pona has so few sounds that you can pronounce things slightly off and people will still be able to understand you.","In Toki Pona, all words are in lowercase, even at the beginning of a sentence. Additionally, stress is always on the first syllable. _toki_ is pronounced TO-kee, not to-KEE.",`That's literally all you need to know to read toki pona aloud. Think you're ready for your first quiz? We're going to practice pronunciation. For this quiz, we're going to give you the question. Think about your answer before pressing the "What's the answer?" button and revealing the solution. Remember: your answer may slightly differ from ours.`]},{type:"quiz",title:"Pronunciation",description:"Pronounce the following phrase. It should sound like an English word.",questions:[{type:"no-field",question:"_jaki_",answer:"yucky"},{type:"no-field",question:"_jelo_",answer:"yellow"},{type:"no-field",question:"_ike_",answer:"icky"},{type:"no-field",question:"_ken_",answer:"can"},{type:"no-field",question:"_mani_",answer:"money"},{type:"no-field",question:"_mun_",answer:"moon"}]},{type:"article",title:"Nouns and Basic Sentences",vocab:["ijo","jan","kili","li","lipu","mije","ni","soweli","toki"],content:["Because Toki Pona has so few words, most words perform many functions at once. In fact, Toki Pona barely distinguishes between nouns, adjectives, and verbs, and calls them all content words.","Here are a few content words:",["_ijo_: something","_jan_: person","_kili_: fruit or vegetable","_lipu_: book, document, paper, website","_mije_: man","_ni_: this, that","_soweli_: land mammal","_toki_: communication, language, speech"],`You'll notice that Toki Pona doesn't have articles like "a" or "the." _jan_ can mean "a person" or "the person," depending on the context.`,`Additionally, Toki Pona doesn't distinguish between singular and plural. _jan_ can mean "a person" or "many people," depending on the context.`,"Toki Pona also has particles, which perform a grammar-related function without adding to the core meaning of a phrase.","And your first particle:",{type:"nobreak",content:"_li_: Separates the subject from the predicate of a sentence."},"To make a basic sentence, write _|subj X| ~li |pred Y|_. In a sentence like this, |subj X| is the subject while |pred Y| is the predicate. This sentence can mean that |subj X| is |pred Y| or that |subj X| is doing the action |pred Y|, based on the context. All sentences will follow this format.",{type:"large",content:"|subj [subject]| ~li |pred [predicate]|"},"For your first example, I'll highlight what each part of the sentence represents. What does _|subj jan| ~li |pred mije|_ mean?",`We'll break it down. We know that _|subj jan|_ means person and _|pred mije|_ means man, so _|subj jan| ~li |pred mije|_ means "|subj A person| _|li is|_ |pred a man|."`,"That wasn't so hard, was it? Let's try another, but without colors this time. What does _ni li soweli_ mean?",'It means "This is a land mammal."',"On to the practice session!"]},{type:"quiz",title:"Nouns and Basic Sentences",description:"Translate the following phrase.",questions:[{type:"open-ended",question:"_jan li mije._",answer:"The person is male."},{type:"open-ended",question:'"The bear is male."',answer:"_soweli li mije._"},{type:"open-ended",question:"_ni li jan._",answer:"That is a person."},{type:"open-ended",question:'"That is an apple."',answer:"_ni li kili._"},{type:"open-ended",question:"Translate _ni li soweli._",answer:"This is a whale."},{type:"open-ended",question:'Translate "Broccoli is something."',answer:"_kili ni ijo._"},{type:"validated",question:"_ni li lipu._",remark:'We translated it as "That is a document," but you might have a slightly different interpretation.',validate(e){return!x(e,"this")&&!x(e,"that")&&!x(e,"those")&&!x(e,"these")?d("Don't forget the subject, _ni._"):/book|document|paper|sheet|website/.test(e)?g():d("Don't forget the predicate, _lipu._")}},{type:"open-ended",question:'"This is a language."',answer:"_ni li toki._"},{type:"validated",question:"_ijo li jan._",remark:'We translated it as "Something is a person," but you might have a slightly different interpretation.',validate(e){return x(e,"thing")?!x(e,"person")&&!x(e,"people")?d("Don't forget the predicate, _jan._"):g():d("Don't forget the subject, _ijo._")}},{type:"open-ended",question:'"Something is a speech."',answer:"_ijo li toki._"}]},{type:"article",title:"Greetings",vocab:[],content:['Remember how _toki_ means communication or speech? If used as an interjection (_toki!_), it also means "Communication is starting." Naturally, this is a common way to say hello to people in Toki Pona.',"That's it for now. We'll learn more short phrases and greetings when we learn more words."]},{type:"article",title:"Modifiers",vocab:["pona","ike","ilo","lili","suli","telo","tomo"],content:["Before we start this lesson, let's go over some words that we'll use.",["_pona_: good, simple","_ike_: bad, complex","_ilo_: tool","_lili_: small","_suli_: big","_telo_: water, liquid","_tomo_: house, room"],"Knowing these words, how would you translate _ni li pona?_",{type:"nobreak",content:'If you said "That is good," you would be correct!'},"Let's try one more example before continuing our lesson. What is _ijo li suli?_",{type:"nobreak",content:'"Something is big."'},"We're going to introduce a new element of Toki Pona grammar: modifiers. These are like adjectives in English.","To modify a noun, just place another word after it. In Toki Pona, the modifier comes _after_ the thing we're modifying, which is the opposite order that English uses.",`For example, _telo suli_ means "big water." You'll often see this translated as lake, ocean, or sea, depending on the context. This is a general pattern of Toki Pona, where two Toki Pona words can combine to form one English word.`,"You might think that you need to memorize a bunch of word combinations now, but you don't! The beauty of Toki Pona is that these combinations are often very intuitive and follow from the clear rules outlined in the grammar.",'How might you say "watermelon?" Think about what a watermelon literally is in the real world.',{type:"nobreak",content:"That's right, it's _kili telo._"},'How might you translate "friend?"',{type:"nobreak",content:`This is a tricky one, but it's _jan pona,_ or "good person," because what is a friend other than a good person?`},"Here's another one: what do think _kili ni_ means?",{type:"nobreak",content:'In this case, _ni_ modifies _kili_ by changing it from "fruit" to "that fruit."'},'You can have multiple modifiers on an object. In that case, you apply them from left to right. _jan pona lili_ means "small good person," not "person of little good."',"With that, let's jump into a practice session!"]},{type:"quiz",title:"Modifiers",description:"Translate the following phrase.",questions:[{type:"open-ended",question:"_kili ni li pona._",answer:"That fruit is good."},{type:"open-ended",question:"The little tool is good.",answer:"_ilo lili li pona._"},{type:"open-ended",question:"_tomo soweli li ijo._",answer:"The doghouse is something."},{type:"open-ended",question:"Dogs are large animals.",answer:"_soweli li soweli suli._"},{type:"open-ended",question:"_jan pona lili li jan._",answer:"Small friends are people."},{type:"open-ended",question:"That ocean is large.",answer:"_telo suli ni li suli._"},{type:"open-ended",question:"_tomo telo ni li lili._",answer:"This water room (aquarium) is small."},{type:"open-ended",question:"This is a good language.",answer:"_ni li toki pona._"}]},{type:"article",title:"Me, You, and Them",vocab:["mi","sina","ona"],content:["Like most lessons, let's start with some basic vocabulary.",["_mi_: I, me, my, we, our","_sina_: you, your","_ona_: he, she, they, it, their"],`We may not be learning many words in this lesson, but they sure are important! Listen to a conversation and you'll notice how often words like "I," "me", "you," and "they" pop up. _mi_ and _sina_ are used so frequently that they have special syntax and don't need _li_.`,`At first, this rule may be confusing to you, but as time goes on, you'll notice that omitting _li_ around _mi_ and _sina_ is very useful. For example, to say "I'm well," you only need to say _mi pona_ instead of _mi li pona._`,"By the way, this rule isn't optional. Never use _li_ if the subject is ONLY _mi_ or _sina._","Let's do some practice. What does _sina pona_ mean?",{type:"nobreak",content:"You are well."},'Try translating "They are an evil person."',{type:"nobreak",content:"_ona li jan ike._"},'Notice how none of these words distinguish between plurality and gender. This can especially be confusing for _mi_, because it can mean "I" or "we." In most cases, this is easily determined by context. If not, assume _mi_ is used in the singular.',"Looks like we have to update the sentence diagram!",{type:"large",content:"|subj [subject]| ~li~? |pred [predicate]|"},"Now we have to omit ~li if the |subj [subject]| is _|subj mi|_ or _|subj sina|_.","Before we move on to the practice quiz, let's learn about one more use of modifiers."]},{type:"article",title:"Possessives",vocab:["meli","tonsi","kulupu","sin","lawa","esun"],content:["Let's add some words to our vocabulary:",["_meli_: woman, female","_tonsi_: non-binary, non-binary person","_kulupu_: community, group","_sin_: new, another, fresh","_lawa_: leader, head","_esun_: market, business"],'In addition to modifiers representing adjectives, they can also be used to indicate ownership. For example, _soweli mi_ means "my land mammal" and _meli sina_ means "your woman" (commonly translated as "your wife").','Try translating "This is my house."',{type:"nobreak",content:"_ni li tomo mi._"},"What about _telo suli sina li pona?_",{type:"nobreak",content:"Your lake (big water) is good."},"Notice how even though the noun _telo suli sina_ ends in _sina_, we still keep the _li_. This is because we only omit _li_ if the subject is ONLY _mi_ or _sina_.","On to the practice session!"]},{type:"quiz",title:"Me, You, Them, and Possessives",description:"Translate the following phrase.",questions:[{type:"open-ended",question:"_soweli sin mi li pona._",answer:'"My new dog is good."'},{type:"open-ended",question:`"You are the club's leader."`,answer:"_sina lawa kulupu._"},{type:"open-ended",question:"_sina kulupu lipu._",answer:'"We are the book club."'},{type:"open-ended",question:'"My farmers (fruit / vegetable) market is a large room."',answer:"_esun kili mi li tomo suli._"},{type:"open-ended",question:"_kulupu mi li sin._",answer:'"Our community is new."'},{type:"open-ended",question:'"Your vegetables are large."',answer:"_kili sina li suli._"},{type:"open-ended",question:"_telo suli li pona._",answer:'"The oceans are good."'},{type:"open-ended",question:'"The children (little people) are a community."',answer:"_jan lili li kulupu._"}]},{type:"article",title:"Verbs",vocab:["ala","e","kalama","kute","moku","mute","olin","sona"],content:["Let's start off with some vocab:",["_ala_: no, not, zero","_kalama_: a sound, to recite","_kute_: to listen, to obey, an ear","_moku_: food, to eat, to drink","_mute_: many, very","_olin_: to love","_sona_: to know, to have knowledge of"],"Today we're going to learn how to use verbs. Basically, just place the verb you want to use after _li_, unless the subject is ONLY _mi_ or _sina_. In that case, omit the _li_.","Let's practice a bit. What does _mi moku_ mean?",{type:"nobreak",content:`If you said "I eat," you'd be correct.`},`However, "I am food" is also correct. In this case, you need some context to distinguish what you should translate _mi moku_ as. Usually it's the first one.`,"What about _ona li kalama_?",{type:"nobreak",content:'"They listen."'},"Now that you've got basic verbs down, let's learn one more concept: direct objects.","Sometimes a verb needs an object to work properly. For example, _sona_ accepts an object describing what you know. In these cases, add an object after your _li_-clause and prepend it with _e_. I'll update the sentence diagram to show this:",{type:"large",content:"|subj [subject]| ~li~? |pred [predicate]| ~(~e |obj [object]|~)~?"},"Now try translating _|subj mi| |pred sona| ~e |obj toki pona|._",{type:"nobreak",content:'This means "|subj I| |pred know| |obj a good language|."'},"Try translating _mi olin e sina._",{type:"nobreak",content:'"I love you."'},"What about _jan mute li kute e toki_?",{type:"nobreak",content:'"Many people listen to the speech."'}]},{type:"quiz",title:"Verbs",description:"Translate the following phrase.",questions:[{type:"open-ended",question:"_soweli sina li kalama e kalama suli._",answer:'"Your dog barks (recites a big sound)."'},{type:"open-ended",question:'"I obey that sound."',answer:"_mi kute e kalama ni._"},{type:"open-ended",question:"_esun mi li pona._",answer:'"My business is good."'},{type:"open-ended",question:'"No people are evil."',answer:"_jan ala li ike._"},{type:"open-ended",question:"_kulupu lipu sina li sona e toki pona._",answer:'"Your book club knows about a simple language."'},{type:"open-ended",question:'"The group of monkeys drink oceans."',answer:"_kulupu soweli li moku e telo suli._"},{type:"open-ended",question:"_mi kalama._",answer:'"I recite."'},{type:"open-ended",question:'"I love the new sounds."',answer:"_mi olin e kalama sin._"},{type:"open-ended",question:"_meli mute li olin e kulupu ona._",answer:'"Many women love their community."'},{type:"open-ended",question:'"Your food is delicious."',answer:"_moku sina li pona._"}]},{type:"article",title:"Using Adjectives as Verbs",vocab:["lete","seli","pali","lukin","sewi","pilin"],content:["Today's vocab:",["_lete_: cold, uncooked","_lukin_: to look","_pali_: to create, to do","_pilin_: feeling, emotion, to feel","_seli_: warm, hot, to cook","_sewi_: divine, elevated, god"]]},{type:"article",title:"End",vocab:[],content:["Looks like you've made it through the whole course! Pat yourself on the back. You should now know every Toki Pona word (unless more have been added)."]}],A=new Set(u.filter(e=>e.type=="article").flatMap(e=>e.vocab).filter(e=>e!==void 0)),b=f.filter(e=>!A.has(e));console.log(b);for(const e of u)if(e.type=="quiz"){X(e.questions);for(const l of e.questions)l.type=="selection"&&X(l.answers)}const n=(()=>{const e=ee(Q("learn-toki-pona:level",1),0,u.length-1);return e.value!==e.value&&(e.value=0),le({get(){return e.value},set(l){e.value=l,t.value=u[e.value],E()}})})(),t=q(u[n.value]),s=q(u[0]),i=q(0),p=q(0),j=q(-1),L=q(""),P=q("");E();function E(){if(j.value=-1,L.value="",P.value="",t.value.type=="article")i.value=1,s.value=t.value;else if(t.value.type=="quiz"){i.value=1;const e=t.value.questions[p.value];if(e.type=="no-field"){const l=[e.question,{type:"nobreak",content:e.answer}];t.value.description&&(l.unshift(t.value.description),i.value++),s.value={type:"article",content:l}}else if(e.type=="selection")s.value={...e,question:t.value.description?[t.value.description,e.question]:e.question};else if(e.type=="validated")s.value={...e,question:t.value.description?[t.value.description,e.question]:e.question},setTimeout(()=>{const[l]=document.getElementsByClassName("tp-field");l instanceof HTMLElement&&l.focus()});else if(e.type=="open-ended"){let l=e.question;t.value.description&&(l=[t.value.description,l]),s.value={type:"validated",question:l,remark:["Compare your answer against ours:",e.answer],validate:()=>g()},setTimeout(()=>{const[y]=document.getElementsByClassName("tp-field");y instanceof HTMLElement&&y.focus()})}}}function V(){if(t.value.type=="article")n.value++,p.value=0,E();else if(t.value.type=="quiz"){if(++p.value==t.value.questions.length){n.value++,p.value=0,E();return}E()}}Z("keydown",e=>{if(e.target instanceof HTMLButtonElement||e.target instanceof HTMLAnchorElement||e.target instanceof HTMLInputElement||e.altKey||e.ctrlKey||e.metaKey||e.key!=" "&&e.key!="Enter")return;const l=document.querySelector(".next");l instanceof HTMLElement&&(l.click(),e.preventDefault())});function K(e){if(s.value.type=="validated")if(e==null||e.preventDefault(),i.value==2)V();else{const l=L.value.toLowerCase().trim().replace(/\s+/g," ").replace(/\s+([.,:;?!])/g,"$1");if(!l)return;const{valid:y,remark:c}=s.value.validate(l);P.value=c||"",y&&(i.value=2)}}function G(){const e=document.querySelector(".tp-current-level");e instanceof HTMLElement&&e.scrollIntoView({inline:"center",block:"center"})}function R(){const e=document.querySelector(".tp-current");e instanceof HTMLElement&&e.scrollIntoView({inline:"center",block:"center",behavior:"smooth"})}return setTimeout(G),(e,l)=>(o(),r(w,null,[v("div",Te,[v("div",je,[qe,(o(),r(w,null,$(u,(y,c)=>_(me,{key:`${m(n)} ${p.value} ${c}`,class:C({"tp-current-level":m(n)==c}),action:()=>n.value=c,progress:m(n)<c?0:m(n)>c?1:t.value.type=="article"?i.value/t.value.content.length:t.value.type=="quiz"?(2*p.value+i.value)/(2*t.value.questions.length):.5},{default:h(()=>[W(T(c),1)]),_:2},1032,["class","action","progress"])),64)),xe])]),_(te,{"no-footer":""},{default:h(()=>[_(z,{space:1,style:{"min-height":"100%","align-items":"center"}},{default:h(()=>[Ie,_(z,{class:"question"},{default:h(()=>[$e,v("h1",Pe,T(t.value.title),1),_(ae,null,{default:h(()=>[s.value.type=="article"?(o(),k(z,{key:0,space:1},{default:h(()=>[(o(!0),r(w,null,$(s.value.content,(y,c)=>(o(),r("div",{key:`${m(n)} ${p.value} ${c}`,class:C({"tp-current":i.value==c+1}),style:{position:"relative"}},[s.value.content.length!=i.value&&i.value==c?(o(),k(S,{key:0,class:"next overlay",onClick:l[0]||(l[0]=M=>(i.value++,R()))},{default:h(()=>[W(T(t.value.type=="quiz"?"What's the answer?":"Tell me more..."),1)]),_:1})):O("",!0),(o(),k(N,{key:`${m(n)} ${p.value} ${c}`,content:y,hidden:c>=i.value},null,8,["content","hidden"]))],2))),128)),m(n)+1!=u.length?(o(),k(S,{key:0,class:"next",style:I({visibility:s.value.content.length==i.value?void 0:"hidden"}),onClick:V},{default:h(()=>[W(T(t.value.type=="quiz"&&p.value+1!=t.value.questions.length?"Okay, next question.":"Okay, next lesson."),1)]),_:1},8,["style"])):O("",!0)]),_:1})):s.value.type=="selection"?(o(),k(z,{key:1,space:1},{default:h(()=>{var y,c;return[(o(),k(N,{key:`${m(n)} ${p.value}`,content:s.value.question},null,8,["content"])),_(oe,{wraps:s.value.size=="full"?"100%":s.value.size=="medium"?"8em":s.value.size=="small"?"6em":"12em",stretch:""},{default:h(()=>[(o(!0),r(w,null,$(s.value.answers,(M,D)=>(o(),k(S,{key:`${m(n)} ${p.value} ${D}`,class:C({selected:i.value==2&&j.value==D}),disabled:i.value==2,style:I({visibility:i.value==1||M.correct?void 0:"hidden"}),onClick:J=>(j.value=D,s.value.type=="selection"?M.correct?i.value=2:J.target.disabled=!0:null)},{default:h(()=>[_(F,{content:M.label},null,8,["content"])]),_:2},1032,["class","disabled","style","onClick"]))),128))]),_:1},8,["wraps"]),v("p",{style:I({visibility:j.value==-1?"hidden":void 0,textAlign:"left"})},[(o(),k(F,{key:`${m(n)} ${p.value} ${j.value}`,content:((y=s.value.answers[j.value])==null?void 0:y.remark)??((c=s.value.answers[j.value])!=null&&c.correct?"That is the correct answer!":"Sorry, try again.")},null,8,["content"]))],4),_(S,{class:"next",disabled:i.value!=2,style:I([{visibility:i.value==2?void 0:"hidden"},{width:"100%","margin-top":"0 !important"}]),onClick:V},{default:h(()=>[W(T(t.value.type=="quiz"&&p.value+1!=t.value.questions.length?"Okay, next question.":"Okay, next lesson."),1)]),_:1},8,["disabled","style"])]}),_:1})):s.value.type=="validated"?(o(),k(z,{key:2,space:1},{default:h(()=>[(o(),k(N,{key:`${m(n)} ${p.value} ${i.value}`,content:s.value.question},null,8,["content"])),v("form",{onSubmit:K},[_(ne,{modelValue:L.value,"onUpdate:modelValue":l[1]||(l[1]=y=>L.value=y),class:"selected tp-field",disabled:i.value==2,style:{"margin-bottom":"0"}},null,8,["modelValue","disabled"])],32),v("div",{style:I({visibility:P.value||i.value==2?void 0:"hidden",textAlign:"left"})},[(o(),k(N,{key:`${m(n)} ${p.value} ${i.value} ${P.value}`,content:(P.value,s.value,i.value,P.value||s.value.remark||(i.value==2?"That is the correct answer!":"Sorry, try again."))},null,8,["content"]))],4),_(S,{class:"next",disabled:!L.value,style:{width:"100%","margin-top":"0 !important"},onClick:K},{default:h(()=>[W(T(i.value!=2?"Check my answer.":t.value.type=="quiz"&&p.value+1!=t.value.questions.length?"Okay, next question.":"Okay, next lesson."),1)]),_:1},8,["disabled"])]),_:1})):O("",!0)]),_:1}),Ce]),_:1})]),_:1})]),_:1})],64))}});const Ke=H(Le,[["__scopeId","data-v-45dc9f3e"]]);export{Ke as default};
