import{u as b,E as B}from"./useLocationHash.5d07e1f6.js";import{A as M}from"./AceEditor.79a6ba94.js";import{d as x,o as y,c as R,ac as C,u as $,w as S,b as _,x as F}from"./index.b50866e0.js";import{S as L,_ as w}from"./Editor2.1eb9518a.js";import"./DocumentDisplay.86b60d55.js";import"./Modal.bba8bf85.js";var O={exports:{}};(function(m,d){ace.define("ace/mode/json_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],function(t,g,k){var p=t("../lib/oop"),h=t("./text_highlight_rules").TextHighlightRules,u=function(){this.$rules={start:[{token:"variable",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]\\s*(?=:)'},{token:"string",regex:'"',next:"string"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant.language.boolean",regex:"(?:true|false)\\b"},{token:"text",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"comment",regex:"\\/\\/.*$"},{token:"comment.start",regex:"\\/\\*",next:"comment"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"punctuation.operator",regex:/[,]/},{token:"text",regex:"\\s+"}],string:[{token:"constant.language.escape",regex:/\\(?:x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|["\\\/bfnrt])/},{token:"string",regex:'"|$',next:"start"},{defaultToken:"string"}],comment:[{token:"comment.end",regex:"\\*\\/",next:"start"},{defaultToken:"comment"}]}};p.inherits(u,h),g.JsonHighlightRules=u}),ace.define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],function(t,g,k){var p=t("../range").Range,h=function(){};(function(){this.checkOutdent=function(u,c){return/^\s+$/.test(u)?/^\s*\}/.test(c):!1},this.autoOutdent=function(u,c){var e=u.getLine(c),n=e.match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,s=u.findMatchingBracket({row:c,column:o});if(!s||s.row==c)return 0;var r=this.$getIndent(u.getLine(s.row));u.replace(new p(c,0,c,o-1),r)},this.$getIndent=function(u){return u.match(/^\s*/)[0]}}).call(h.prototype),g.MatchingBraceOutdent=h}),ace.define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],function(t,g,k){var p=t("../../lib/oop"),h=t("../../range").Range,u=t("./fold_mode").FoldMode,c=g.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};p.inherits(c,u),function(){this.foldingStartMarker=/([\{\[\(])[^\}\]\)]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{\(]*([\}\]\)])|^[\s\*]*(\*\/)/,this.singleLineBlockCommentRe=/^\s*(\/\*).*\*\/\s*$/,this.tripleStarBlockCommentRe=/^\s*(\/\*\*\*).*\*\/\s*$/,this.startRegionRe=/^\s*(\/\*|\/\/)#?region\b/,this._getFoldWidgetBase=this.getFoldWidget,this.getFoldWidget=function(e,n,o){var s=e.getLine(o);if(this.singleLineBlockCommentRe.test(s)&&!this.startRegionRe.test(s)&&!this.tripleStarBlockCommentRe.test(s))return"";var r=this._getFoldWidgetBase(e,n,o);return!r&&this.startRegionRe.test(s)?"start":r},this.getFoldWidgetRange=function(e,n,o,s){var r=e.getLine(o);if(this.startRegionRe.test(r))return this.getCommentRegionBlock(e,r,o);var i=r.match(this.foldingStartMarker);if(i){var a=i.index;if(i[1])return this.openingBracketBlock(e,i[1],o,a);var l=e.getCommentFoldRange(o,a+i[0].length,1);return l&&!l.isMultiLine()&&(s?l=this.getSectionRange(e,o):n!="all"&&(l=null)),l}if(n!=="markbegin"){var i=r.match(this.foldingStopMarker);if(i){var a=i.index+i[0].length;return i[1]?this.closingBracketBlock(e,i[1],o,a):e.getCommentFoldRange(o,a,-1)}}},this.getSectionRange=function(e,n){var o=e.getLine(n),s=o.search(/\S/),r=n,a=o.length;n=n+1;for(var l=n,i=e.getLength();++n<i;){o=e.getLine(n);var f=o.search(/\S/);if(f!==-1){if(s>f)break;var v=this.getFoldWidgetRange(e,"all",n);if(v){if(v.start.row<=r)break;if(v.isMultiLine())n=v.end.row;else if(s==f)break}l=n}}return new h(r,a,l,e.getLine(l).length)},this.getCommentRegionBlock=function(e,n,o){for(var s=n.search(/\s*$/),r=e.getLength(),a=o,l=/^\s*(?:\/\*|\/\/|--)#?(end)?region\b/,i=1;++o<r;){n=e.getLine(o);var f=l.exec(n);if(!!f&&(f[1]?i--:i++,!i))break}var v=o;if(v>a)return new h(a,s,v,n.length)}}.call(c.prototype)}),ace.define("ace/mode/json",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/json_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle","ace/worker/worker_client"],function(t,g,k){var p=t("../lib/oop"),h=t("./text").Mode,u=t("./json_highlight_rules").JsonHighlightRules,c=t("./matching_brace_outdent").MatchingBraceOutdent,e=t("./behaviour/cstyle").CstyleBehaviour,n=t("./folding/cstyle").FoldMode,o=t("../worker/worker_client").WorkerClient,s=function(){this.HighlightRules=u,this.$outdent=new c,this.$behaviour=new e,this.foldingRules=new n};p.inherits(s,h),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(r,a,l){var i=this.$getIndent(a);if(r=="start"){var f=a.match(/^.*[\{\(\[]\s*$/);f&&(i+=l)}return i},this.checkOutdent=function(r,a,l){return this.$outdent.checkOutdent(a,l)},this.autoOutdent=function(r,a,l){this.$outdent.autoOutdent(a,l)},this.createWorker=function(r){var a=new o(["ace"],"ace/mode/json_worker","JsonWorker");return a.attachToDocument(r.getDocument()),a.on("annotate",function(l){r.setAnnotations(l.data)}),a.on("terminate",function(){r.clearAnnotations()}),a},this.$id="ace/mode/json"}.call(s.prototype),g.Mode=s}),function(){ace.require(["ace/mode/json"],function(t){m&&(m.exports=t)})}()})(O);const W=x({__name:"JSONViewer",props:{value:null,round:{type:Boolean}},emits:["init","save"],setup(m){return(d,t)=>(y(),R(M,{modelValue:JSON.stringify(m.value,void 0,"  "),round:m.round,mode:"json",readonly:"",onInit:t[0]||(t[0]=g=>d.$emit("init",g)),onSave:t[1]||(t[1]=g=>d.$emit("save",g))},null,8,["modelValue","round"]))}}),j=x({__name:"Compiler2",props:{code:null,round:{type:Boolean}},setup(m){const d=m,t=C(()=>L.parse(d.code));return(g,k)=>(y(),R(W,{round:m.round,value:$(t)},null,8,["round","value"]))}}),T=x({__name:"v2-compiler",setup(m){const d=b(`#importall

$money = 500
$eggs = 0
$name = (no name)

@start
  @input $name What is your name?
  @market

@market
  $name, you have $$$money and $eggs dozen eggs.
  @if $money < 6
    Looks like you're out of money!
  @else
    @menu What would you like to buy?
      @option Eggs
        @eggs
      @option Go Back
        @pass
    @market

@eggs
  @number $egg How many dozens do you want to buy?
  $eggprice @= 6 * $egg
  @nowait $egg dozen eggs will cost $$$eggprice.
  @if $money > $eggprice
    @menu Are you sure you want to buy them?
      @option Yes
        $money -= $eggprice
        $eggs += $egg
      @option No
        Okay, let's go back to the store.
  @elseif $money = $eggprice
    You have just enough money for these eggs.
    $money -= $eggprice
    $eggs += $egg
  @else
    You don't have enough money for these eggs!`);return(t,g)=>(y(),R(B,{"dual-editor":""},{default:S(()=>[_(w,{modelValue:$(d),"onUpdate:modelValue":g[0]||(g[0]=k=>F(d)?d.value=k:null),round:""},null,8,["modelValue"]),_(j,{code:$(d),round:""},null,8,["code"])]),_:1}))}});export{T as default};
