import{randomUUID as K}from"node:crypto";import{Server as Q}from"node:http";import{Server as X}from"socket.io";import{compare as q,hash as R}from"bcrypt";import{randomUUID as P}from"node:crypto";import{MongoClient as j}from"mongodb";var O=process.env.ZSNOUT_DATABASE?new j(process.env.ZSNOUT_DATABASE,{serverApi:"1"}).connect().then(e=>(e.on("error",async()=>{await e.close(),await e.connect()}),e)).catch(e=>(console.log(e),void 0)):Promise.resolve((console.log("no database available"),void 0)),H=O.then(e=>e==null?void 0:e.db("zsnout")).catch(e=>(console.log(e),void 0)),ne=O.then(e=>!!e)??Promise.resolve(!1);async function p(e){var t;return(t=await H)==null?void 0:t.collection(e)}process.on("beforeExit",()=>{O.then(e=>e==null?void 0:e.close())});import{createTransport as L}from"nodemailer";var Y={host:process.env.ZSNOUT_MAIL_HOST,port:+(process.env.ZSNOUT_MAIL_PORT||587),secure:process.env.ZSNOUT_MAIL_PORT==="465",auth:{user:process.env.ZSNOUT_MAIL_USER,pass:process.env.ZSNOUT_MAIL_PASSWORD}},oe=!!(process.env.ZSNOUT_MAIL_HOST&&process.env.ZSNOUT_MAIL_USER&&process.env.ZSNOUT_MAIL_PASSWORD),d=L(Y);function U(e){return new Promise(t=>{d==null||d.sendMail({...e,from:process.env.ZSNOUT_MAIL_FROM},(n,s)=>{n?(console.log(n),t(void 0)):t(s)})})}process.on("beforeExit",()=>d==null?void 0:d.close());var l;(s=>{function e(a){return a.length>=5&&a.length<=20&&/^[A-Za-z_][A-Za-z0-9_]+$/.test(a)&&!/zsnout/i.test(a)}s.Username=e;function t(a){return a.length>=8&&/(?![\d_])\w/.test(a)&&/\d/.test(a)}s.Password=t;function n(a){return/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)}s.Email=n})(l||={});function _(e){return R(e,10)}function k(e,t){return q(e,t)}var c=p("accounts");async function A(e,t){let n=await c;if(!n)return{status:f.NoServer};let s=await n.findOne({username:e});return s?await k(t,s.password)?{status:f.Success,account:s}:{status:f.BadPassword}:{status:f.NoUser}}var f=(a=>(a[a.BadPassword=0]="BadPassword",a[a.NoServer=1]="NoServer",a[a.NoUser=2]="NoUser",a[a.Success=3]="Success",a))(f||{});async function m(e){let t=await c;if(!t)return{status:w.NoServer};let n=await t.findOne({session:e});return n?{status:w.Success,account:n}:{status:w.Failure}}var w=(s=>(s[s.Failure=0]="Failure",s[s.NoServer=1]="NoServer",s[s.Success=2]="Success",s))(w||{});async function M(e,t,n){let s=await c;if(!s)return{status:i.NoServer};if(!l.Username(e))return{status:i.BadUsername};if(!l.Password(t))return{status:i.BadPassword};if(!l.Email(n))return{status:i.BadEmail};if(await s.findOne({username:e}))return{status:i.UsernameTaken};if(await s.findOne({email:n}))return{status:i.EmailTaken};let a={username:e,password:await _(t),email:n,creation:Date.now(),session:P(),verified:!1,verifyCode:P(),bookmarks:[],notes:[],chats:[]};return(await s.insertOne(a)).acknowledged?await U({to:n,subject:"Verify your zSnout account",text:`Hey @${e}! Verify your new zSnout account by opening this link: https://zsnout.com/verify-account?code=${a.verifyCode}.`})?{status:i.Success,account:a}:(await s.deleteOne({session:a.session}),{status:i.BadEmail}):{status:i.Failure}}var i=(o=>(o[o.NoServer=0]="NoServer",o[o.Failure=1]="Failure",o[o.Success=2]="Success",o[o.BadUsername=3]="BadUsername",o[o.BadPassword=4]="BadPassword",o[o.BadEmail=5]="BadEmail",o[o.IncorrectPassword=6]="IncorrectPassword",o[o.UsernameTaken=7]="UsernameTaken",o[o.EmailTaken=8]="EmailTaken",o))(i||{});async function I(e){let t=await c;if(!t)return{status:v.NoServer};let n=await t.findOneAndUpdate({verifyCode:e},{$set:{verified:!0}});return n.value?{status:v.Success,account:n.value}:{status:v.NoAccount}}var v=(s=>(s[s.NoAccount=0]="NoAccount",s[s.NoServer=1]="NoServer",s[s.Success=2]="Success",s))(v||{});async function W(){let e=await c;await(e==null?void 0:e.deleteMany({verified:!1,creation:{$lte:Date.now()-15*60*1e3}}))}async function T(e){var t;return await((t=await c)==null?void 0:t.findOne({session:e}))||void 0}async function g(e,t){var n,s;return((s=await((n=await c)==null?void 0:n.updateOne({session:e},{$set:t})))==null?void 0:s.acknowledged)||!1}async function $(e,t){let n=await c;return n?l.Username(t)?await n.findOne({username:t})?7:await g(e,{username:t})?2:1:3:0}async function B(e,t,n){if(!await c)return 0;if(!l.Password(n))return 4;let a=await T(e);return a?await k(t,a.password)?await g(e,{password:await _(n)})?2:1:6:1}setInterval(W,5*60*1e3);import{ObjectId as y}from"bson";var G=p("accounts"),h=p("notes");async function J(e,t){let n=await G;!n||await n.updateOne({_id:t},{$push:{notes:e}})}async function N(e){let{status:t,account:n}=await m(e);if(t===0)return[];if(t===1)return[];let s=await h;return s?(await s.find({_id:{$in:n.notes}}).toArray()).map(({_id:u,title:b,contents:C})=>({id:u.toHexString(),title:b,desc:C.slice(0,80).replaceAll(`
`," ")})):[]}async function Z(e,t){let{status:n,account:s}=await m(e);if(n===0||n===1)return;let a=await h;if(!a||s.notes.length>=100)return;let u={_id:new y,contents:"<p>This is your new note!</p>",creation:Date.now(),owner:s._id,title:t};await Promise.all([a.insertOne(u),J(u._id,s._id)])}async function S(e,t){let{status:n,account:s}=await m(e);if(n===0)return{doesOwn:!1};if(n===1)return{doesOwn:!1};let a=await h;if(!a)return{doesOwn:!1};let u=await a.findOne({_id:y.createFromHexString(t),owner:s._id});return u?{doesOwn:!0,note:u}:{doesOwn:!1}}async function D(e,t){if(t.length>=1e4)return;let n=await h;!n||await n.updateOne({_id:y.createFromHexString(e)},{$set:{contents:t}})}async function F(e,t){if(t.length>=100)return;let n=await h;!n||await n.updateOne({_id:y.createFromHexString(e)},{$set:{title:t}})}async function r(e,t){let{status:n,account:s}=await m(t);if(n===2){let a=s.creation+9e5;return(s.verified||!s.verified&&a>Date.now())&&(e.emit("account:update:session",s.session),e.emit("account:update:username",s.username)),s.verified?e.emit("account:needs-verification",!1):e.emit("account:needs-verification",a-Date.now()),e.data.oldSession&&e.leave(`session:${e.data.oldSession}`),e.join(`session:${e.data.oldSession=t}`),!0}else return e.emit("account:update:session",""),e.emit("account:update:username",""),e.emit("account:needs-verification",!1),e.data.oldSession&&e.leave(`session:${e.data.oldSession}`),!1}var z="Your username should only contain letters, numbers, and underscores, and should be 6 to 20 characters long.",E="Your password should contain a letter and number and be at least 8 characters long.",x={"account:check-session"(e){r(this,e)},async"account:create"(e,t,n){let{status:s,account:a}=await M(e,t,n);s===2?(await r(this,a.session),this.emit("account:done:verify")):this.emit("error",{[5]:"Your email address is invalid. Make sure it is formatted properly and can recieve emails.",[4]:E,[3]:z,[8]:`${n} is already registered with another account.`,[1]:"An unknown issue occurred. Try again later.",[0]:"This instance of zSnout can't log in users.",[7]:`@${e} is already registered with another account.`}[s])},async"account:login"(e,t){let{status:n,account:s}=await A(e,t);n===3?(await r(this,s.session),this.emit("account:done:verify")):this.emit("error",{[0]:"Your username or password is incorrect.",[1]:"This instance of zSnout can't log in users.",[2]:"Your username or password is incorrect."}[n])},async"account:reset-session"(e,t){let n=K();await g(e,{session:n});let s=this.to(`session:${e}`);s.emit("account:update:session",""),s.emit("account:update:username",""),t&&this.emit("account:update:session",this.data.oldSession=n),this.emit("account:done:reset-session")},async"account:update:username"(e,t){if(await r(this,e)){let n=await $(e,t);n===2?(this.to(`session:${e}`).emit("account:update:username",t),this.emit("account:update:username",t),this.emit("account:done:update:username")):this.emit("error",{[3]:z,[7]:`@${t} is already registered with another account.`,[0]:"This server cannot change usernames.",[1]:"An unknown error occurred."}[n])}},async"account:update:password"(e,t,n){if(await r(this,e)){let s=await B(e,t,n);s===2?this.emit("account:done:update:password"):this.emit("error",{[4]:E,[6]:"Your old password was incorrect.",[0]:"This server cannot change usernames.",[1]:"An unknown error occurred."}[s])}},async"account:verify"(e){let{status:t,account:n}=await I(e);t===2?(await r(this,n.session),this.emit("account:done:verify")):this.emit("error",{[0]:"The provided verification code is invalid.",[1]:"This instance of zSnout can't verify accounts."}[t])},async"bookmarks:request"(e){var t;if(await r(this,e)){let n=(t=await T(e))==null?void 0:t.bookmarks;n&&this.emit("bookmarks:list",n)}},async"bookmarks:update"(e,t){await r(this,e)&&await g(e,{bookmarks:t})&&t&&this.to(`session:${e}`).emit("bookmarks:list",t)},async"notes:create"(e,t){await r(this,e)?(await Z(e,t),this.emit("notes:index",await N(e))):this.emit("notes:index",[])},async"notes:request:details"(e,t){if(await r(this,e)){let{doesOwn:n,note:s}=await S(e,t);n&&this.emit("notes:details",{id:t,title:s.title})}},async"notes:request:index"(e){await r(this,e)?this.emit("notes:index",await N(e)):this.emit("notes:index",[])},async"notes:request:note"(e,t){if(await r(this,e)){let{doesOwn:n,note:s}=await S(e,t);n?this.emit("notes:note",t,s.contents):this.emit("notes:note",t,!1)}},async"notes:update:note"(e,t,n){if(await r(this,e)){let{doesOwn:s}=await S(e,t);s&&(D(t,n),this.to(`session:${e}`).emit("notes:note",t,n))}},async"notes:update:title"(e,t,n){if(await r(this,e)){let{doesOwn:s}=await S(e,t);s&&(await F(t,n),this.to(`session:${e}`).emit("notes:details",{id:t,title:n}))}}};Object.setPrototypeOf(x,null);function V(e){new X(e).on("connection",n=>{for(let s in x)n.on(s,x[s].bind(n))})}function xe(){let e=new Q;V(e);let t=+(process.env.PORT||3e3);e.listen(Number.isSafeInteger(t)?t:3e3)}export{V as makeIO,xe as start};
