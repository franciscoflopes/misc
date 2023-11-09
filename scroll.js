/*! highlight.js v9.13.1 | BSD3 License | git.io/hljslicense */
!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"!=typeof exports?e(exports):n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs}))}(function(e){function n(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function t(e){return e.nodeName.toLowerCase()}function r(e,n){var t=e&&e.exec(n);return t&&0===t.index}function a(e){return k.test(e)}function i(e){var n,t,r,i,o=e.className+" ";if(o+=e.parentNode?e.parentNode.className:"",t=M.exec(o))return w(t[1])?t[1]:"no-highlight";for(o=o.split(/\s+/),n=0,r=o.length;r>n;n++)if(i=o[n],a(i)||w(i))return i}function o(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function c(e){var n=[];return function r(e,a){for(var i=e.firstChild;i;i=i.nextSibling)3===i.nodeType?a+=i.nodeValue.length:1===i.nodeType&&(n.push({event:"start",offset:a,node:i}),a=r(i,a),t(i).match(/br|hr|img|input/)||n.push({event:"stop",offset:a,node:i}));return a}(e,0),n}function u(e,r,a){function i(){return e.length&&r.length?e[0].offset!==r[0].offset?e[0].offset<r[0].offset?e:r:"start"===r[0].event?e:r:e.length?e:r}function o(e){function r(e){return" "+e.nodeName+'="'+n(e.value).replace('"',"&quot;")+'"'}l+="<"+t(e)+E.map.call(e.attributes,r).join("")+">"}function c(e){l+="</"+t(e)+">"}function u(e){("start"===e.event?o:c)(e.node)}for(var s=0,l="",f=[];e.length||r.length;){var g=i();if(l+=n(a.substring(s,g[0].offset)),s=g[0].offset,g===e){f.reverse().forEach(c);do u(g.splice(0,1)[0]),g=i();while(g===e&&g.length&&g[0].offset===s);f.reverse().forEach(o)}else"start"===g[0].event?f.push(g[0].node):f.pop(),u(g.splice(0,1)[0])}return l+n(a.substr(s))}function s(e){return e.v&&!e.cached_variants&&(e.cached_variants=e.v.map(function(n){return o(e,{v:null},n)})),e.cached_variants||e.eW&&[o(e)]||[e]}function l(e){function n(e){return e&&e.source||e}function t(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}function r(a,i){if(!a.compiled){if(a.compiled=!0,a.k=a.k||a.bK,a.k){var o={},c=function(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");o[t[0]]=[n,t[1]?Number(t[1]):1]})};"string"==typeof a.k?c("keyword",a.k):B(a.k).forEach(function(e){c(e,a.k[e])}),a.k=o}a.lR=t(a.l||/\w+/,!0),i&&(a.bK&&(a.b="\\b("+a.bK.split(" ").join("|")+")\\b"),a.b||(a.b=/\B|\b/),a.bR=t(a.b),a.endSameAsBegin&&(a.e=a.b),a.e||a.eW||(a.e=/\B|\b/),a.e&&(a.eR=t(a.e)),a.tE=n(a.e)||"",a.eW&&i.tE&&(a.tE+=(a.e?"|":"")+i.tE)),a.i&&(a.iR=t(a.i)),null==a.r&&(a.r=1),a.c||(a.c=[]),a.c=Array.prototype.concat.apply([],a.c.map(function(e){return s("self"===e?a:e)})),a.c.forEach(function(e){r(e,a)}),a.starts&&r(a.starts,i);var u=a.c.map(function(e){return e.bK?"\\.?("+e.b+")\\.?":e.b}).concat([a.tE,a.i]).map(n).filter(Boolean);a.t=u.length?t(u.join("|"),!0):{exec:function(){return null}}}}r(e)}function f(e,t,a,i){function o(e){return new RegExp(e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m")}function c(e,n){var t,a;for(t=0,a=n.c.length;a>t;t++)if(r(n.c[t].bR,e))return n.c[t].endSameAsBegin&&(n.c[t].eR=o(n.c[t].bR.exec(e)[0])),n.c[t]}function u(e,n){if(r(e.eR,n)){for(;e.endsParent&&e.parent;)e=e.parent;return e}return e.eW?u(e.parent,n):void 0}function s(e,n){return!a&&r(n.iR,e)}function p(e,n){var t=R.cI?n[0].toLowerCase():n[0];return e.k.hasOwnProperty(t)&&e.k[t]}function d(e,n,t,r){var a=r?"":j.classPrefix,i='<span class="'+a,o=t?"":I;return i+=e+'">',i+n+o}function h(){var e,t,r,a;if(!E.k)return n(k);for(a="",t=0,E.lR.lastIndex=0,r=E.lR.exec(k);r;)a+=n(k.substring(t,r.index)),e=p(E,r),e?(M+=e[1],a+=d(e[0],n(r[0]))):a+=n(r[0]),t=E.lR.lastIndex,r=E.lR.exec(k);return a+n(k.substr(t))}function b(){var e="string"==typeof E.sL;if(e&&!L[E.sL])return n(k);var t=e?f(E.sL,k,!0,B[E.sL]):g(k,E.sL.length?E.sL:void 0);return E.r>0&&(M+=t.r),e&&(B[E.sL]=t.top),d(t.language,t.value,!1,!0)}function v(){y+=null!=E.sL?b():h(),k=""}function m(e){y+=e.cN?d(e.cN,"",!0):"",E=Object.create(e,{parent:{value:E}})}function N(e,n){if(k+=e,null==n)return v(),0;var t=c(n,E);if(t)return t.skip?k+=n:(t.eB&&(k+=n),v(),t.rB||t.eB||(k=n)),m(t,n),t.rB?0:n.length;var r=u(E,n);if(r){var a=E;a.skip?k+=n:(a.rE||a.eE||(k+=n),v(),a.eE&&(k=n));do E.cN&&(y+=I),E.skip||E.sL||(M+=E.r),E=E.parent;while(E!==r.parent);return r.starts&&(r.endSameAsBegin&&(r.starts.eR=r.eR),m(r.starts,"")),a.rE?0:n.length}if(s(n,E))throw new Error('Illegal lexeme "'+n+'" for mode "'+(E.cN||"<unnamed>")+'"');return k+=n,n.length||1}var R=w(e);if(!R)throw new Error('Unknown language: "'+e+'"');l(R);var x,E=i||R,B={},y="";for(x=E;x!==R;x=x.parent)x.cN&&(y=d(x.cN,"",!0)+y);var k="",M=0;try{for(var C,A,S=0;;){if(E.t.lastIndex=S,C=E.t.exec(t),!C)break;A=N(t.substring(S,C.index),C[0]),S=C.index+A}for(N(t.substr(S)),x=E;x.parent;x=x.parent)x.cN&&(y+=I);return{r:M,value:y,language:e,top:E}}catch(O){if(O.message&&-1!==O.message.indexOf("Illegal"))return{r:0,value:n(t)};throw O}}function g(e,t){t=t||j.languages||B(L);var r={r:0,value:n(e)},a=r;return t.filter(w).filter(x).forEach(function(n){var t=f(n,e,!1);t.language=n,t.r>a.r&&(a=t),t.r>r.r&&(a=r,r=t)}),a.language&&(r.second_best=a),r}function p(e){return j.tabReplace||j.useBR?e.replace(C,function(e,n){return j.useBR&&"\n"===e?"<br>":j.tabReplace?n.replace(/\t/g,j.tabReplace):""}):e}function d(e,n,t){var r=n?y[n]:t,a=[e.trim()];return e.match(/\bhljs\b/)||a.push("hljs"),-1===e.indexOf(r)&&a.push(r),a.join(" ").trim()}function h(e){var n,t,r,o,s,l=i(e);a(l)||(j.useBR?(n=document.createElementNS("http://www.w3.org/1999/xhtml","div"),n.innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n")):n=e,s=n.textContent,r=l?f(l,s,!0):g(s),t=c(n),t.length&&(o=document.createElementNS("http://www.w3.org/1999/xhtml","div"),o.innerHTML=r.value,r.value=u(t,c(o),s)),r.value=p(r.value),e.innerHTML=r.value,e.className=d(e.className,l,r.language),e.result={language:r.language,re:r.r},r.second_best&&(e.second_best={language:r.second_best.language,re:r.second_best.r}))}function b(e){j=o(j,e)}function v(){if(!v.called){v.called=!0;var e=document.querySelectorAll("pre code");E.forEach.call(e,h)}}function m(){addEventListener("DOMContentLoaded",v,!1),addEventListener("load",v,!1)}function N(n,t){var r=L[n]=t(e);r.aliases&&r.aliases.forEach(function(e){y[e]=n})}function R(){return B(L)}function w(e){return e=(e||"").toLowerCase(),L[e]||L[y[e]]}function x(e){var n=w(e);return n&&!n.disableAutodetect}var E=[],B=Object.keys,L={},y={},k=/^(no-?highlight|plain|text)$/i,M=/\blang(?:uage)?-([\w-]+)\b/i,C=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,I="</span>",j={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};return e.highlight=f,e.highlightAuto=g,e.fixMarkup=p,e.highlightBlock=h,e.configure=b,e.initHighlighting=v,e.initHighlightingOnLoad=m,e.registerLanguage=N,e.listLanguages=R,e.getLanguage=w,e.autoDetection=x,e.inherit=o,e.IR="[a-zA-Z]\\w*",e.UIR="[a-zA-Z_]\\w*",e.NR="\\b\\d+(\\.\\d+)?",e.CNR="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR="\\b(0b[01]+)",e.RSR="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE={b:"\\\\[\\s\\S]",r:0},e.ASM={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C("//","$"),e.CBCM=e.C("/\\*","\\*/"),e.HCM=e.C("#","$"),e.NM={cN:"number",b:e.NR,r:0},e.CNM={cN:"number",b:e.CNR,r:0},e.BNM={cN:"number",b:e.BNR,r:0},e.CSSNM={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM={cN:"title",b:e.IR,r:0},e.UTM={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e});hljs.registerLanguage("xml",function(s){var e="[A-Za-z0-9\\._:-]+",t={eW:!0,i:/</,r:0,c:[{cN:"attr",b:e,r:0},{b:/=\s*/,r:0,c:[{cN:"string",endsParent:!0,v:[{b:/"/,e:/"/},{b:/'/,e:/'/},{b:/[^\s"'=<>`]+/}]}]}]};return{aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist"],cI:!0,c:[{cN:"meta",b:"<!DOCTYPE",e:">",r:10,c:[{b:"\\[",e:"\\]"}]},s.C("<!--","-->",{r:10}),{b:"<\\!\\[CDATA\\[",e:"\\]\\]>",r:10},{cN:"meta",b:/<\?xml/,e:/\?>/,r:10},{b:/<\?(php)?/,e:/\?>/,sL:"php",c:[{b:"/\\*",e:"\\*/",skip:!0},{b:'b"',e:'"',skip:!0},{b:"b'",e:"'",skip:!0},s.inherit(s.ASM,{i:null,cN:null,c:null,skip:!0}),s.inherit(s.QSM,{i:null,cN:null,c:null,skip:!0})]},{cN:"tag",b:"<style(?=\\s|>|$)",e:">",k:{name:"style"},c:[t],starts:{e:"</style>",rE:!0,sL:["css","xml"]}},{cN:"tag",b:"<script(?=\\s|>|$)",e:">",k:{name:"script"},c:[t],starts:{e:"</script>",rE:!0,sL:["actionscript","javascript","handlebars","xml"]}},{cN:"tag",b:"</?",e:"/?>",c:[{cN:"name",b:/[^\/><\s]+/,r:0},t]}]}});hljs.registerLanguage("json",function(e){var i={literal:"true false null"},n=[e.QSM,e.CNM],r={e:",",eW:!0,eE:!0,c:n,k:i},t={b:"{",e:"}",c:[{cN:"attr",b:/"/,e:/"/,c:[e.BE],i:"\\n"},e.inherit(r,{b:/:/})],i:"\\S"},c={b:"\\[",e:"\\]",c:[e.inherit(r)],i:"\\S"};return n.splice(n.length,0,t,c),{c:n,k:i,i:"\\S"}});hljs.registerLanguage("css",function(e){var c="[a-zA-Z-][a-zA-Z0-9_-]*",t={b:/[A-Z\_\.\-]+\s*:/,rB:!0,e:";",eW:!0,c:[{cN:"attribute",b:/\S/,e:":",eE:!0,starts:{eW:!0,eE:!0,c:[{b:/[\w-]+\(/,rB:!0,c:[{cN:"built_in",b:/[\w-]+/},{b:/\(/,e:/\)/,c:[e.ASM,e.QSM]}]},e.CSSNM,e.QSM,e.ASM,e.CBCM,{cN:"number",b:"#[0-9A-Fa-f]+"},{cN:"meta",b:"!important"}]}}]};return{cI:!0,i:/[=\/|'\$]/,c:[e.CBCM,{cN:"selector-id",b:/#[A-Za-z0-9_-]+/},{cN:"selector-class",b:/\.[A-Za-z0-9_-]+/},{cN:"selector-attr",b:/\[/,e:/\]/,i:"$"},{cN:"selector-pseudo",b:/:(:)?[a-zA-Z0-9\_\-\+\(\)"'.]+/},{b:"@(font-face|page)",l:"[a-z-]+",k:"font-face page"},{b:"@",e:"[{;]",i:/:/,c:[{cN:"keyword",b:/\w+/},{b:/\s/,eW:!0,eE:!0,r:0,c:[e.ASM,e.QSM,e.CSSNM]}]},{cN:"selector-tag",b:c,r:0},{b:"{",e:"}",i:/\S/,c:[e.CBCM,t]}]}});hljs.registerLanguage("javascript",function(e){var r="[A-Za-z$_][0-9A-Za-z$_]*",t={keyword:"in of if for while finally var new function do return void else break catch instanceof with throw case default try this switch continue typeof delete let yield const export super debugger as async await static import from as",literal:"true false null undefined NaN Infinity",built_in:"eval isFinite isNaN parseFloat parseInt decodeURI decodeURIComponent encodeURI encodeURIComponent escape unescape Object Function Boolean Error EvalError InternalError RangeError ReferenceError StopIteration SyntaxError TypeError URIError Number Math Date String RegExp Array Float32Array Float64Array Int16Array Int32Array Int8Array Uint16Array Uint32Array Uint8Array Uint8ClampedArray ArrayBuffer DataView JSON Intl arguments require module console window document Symbol Set Map WeakSet WeakMap Proxy Reflect Promise"},a={cN:"number",v:[{b:"\\b(0[bB][01]+)"},{b:"\\b(0[oO][0-7]+)"},{b:e.CNR}],r:0},n={cN:"subst",b:"\\$\\{",e:"\\}",k:t,c:[]},c={cN:"string",b:"`",e:"`",c:[e.BE,n]};n.c=[e.ASM,e.QSM,c,a,e.RM];var s=n.c.concat([e.CBCM,e.CLCM]);return{aliases:["js","jsx"],k:t,c:[{cN:"meta",r:10,b:/^\s*['"]use (strict|asm)['"]/},{cN:"meta",b:/^#!/,e:/$/},e.ASM,e.QSM,c,e.CLCM,e.CBCM,a,{b:/[{,]\s*/,r:0,c:[{b:r+"\\s*:",rB:!0,r:0,c:[{cN:"attr",b:r,r:0}]}]},{b:"("+e.RSR+"|\\b(case|return|throw)\\b)\\s*",k:"return throw case",c:[e.CLCM,e.CBCM,e.RM,{cN:"function",b:"(\\(.*?\\)|"+r+")\\s*=>",rB:!0,e:"\\s*=>",c:[{cN:"params",v:[{b:r},{b:/\(\s*\)/},{b:/\(/,e:/\)/,eB:!0,eE:!0,k:t,c:s}]}]},{b:/</,e:/(\/\w+|\w+\/)>/,sL:"xml",c:[{b:/<\w+\s*\/>/,skip:!0},{b:/<\w+/,e:/(\/\w+|\w+\/)>/,skip:!0,c:[{b:/<\w+\s*\/>/,skip:!0},"self"]}]}],r:0},{cN:"function",bK:"function",e:/\{/,eE:!0,c:[e.inherit(e.TM,{b:r}),{cN:"params",b:/\(/,e:/\)/,eB:!0,eE:!0,c:s}],i:/\[|%/},{b:/\$[(.]/},e.METHOD_GUARD,{cN:"class",bK:"class",e:/[{;=]/,eE:!0,i:/[:"\[\]]/,c:[{bK:"extends"},e.UTM]},{bK:"constructor",e:/\{/,eE:!0}],i:/#(?!!)/}});

/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-addtest-domprefixes-hasevent-prefixed-prefixes-setclasses-shiv-testallprops-testprop-teststyles !*/
!function(e,t,n){function r(e,t){return typeof e===t}function o(){var e,t,n,o,i,a,s;for(var l in E)if(E.hasOwnProperty(l)){if(e=[],t=E[l],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=r(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)a=e[i],s=a.split("."),1===s.length?Modernizr[s[0]]=o:(!Modernizr[s[0]]||Modernizr[s[0]]instanceof Boolean||(Modernizr[s[0]]=new Boolean(Modernizr[s[0]])),Modernizr[s[0]][s[1]]=o),_.push((o?"":"no-")+s.join("-"))}}function i(e){var t=w.className,n=Modernizr._config.classPrefix||"";if(x&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),x?w.className.baseVal=t:w.className=t)}function a(e,t){if("object"==typeof e)for(var n in e)j(e,n)&&a(n,e[n]);else{e=e.toLowerCase();var r=e.split("."),o=Modernizr[r[0]];if(2==r.length&&(o=o[r[1]]),"undefined"!=typeof o)return Modernizr;t="function"==typeof t?t():t,1==r.length?Modernizr[r[0]]=t:(!Modernizr[r[0]]||Modernizr[r[0]]instanceof Boolean||(Modernizr[r[0]]=new Boolean(Modernizr[r[0]])),Modernizr[r[0]][r[1]]=t),i([(t&&0!=t?"":"no-")+r.join("-")]),Modernizr._trigger(e,t)}return Modernizr}function s(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):x?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(e,t){return!!~(""+e).indexOf(t)}function f(){var e=t.body;return e||(e=s(x?"svg":"body"),e.fake=!0),e}function c(e,n,r,o){var i,a,l,u,c="modernizr",d=s("div"),p=f();if(parseInt(r,10))for(;r--;)l=s("div"),l.id=o?o[r]:c+(r+1),d.appendChild(l);return i=s("style"),i.type="text/css",i.id="s"+c,(p.fake?p:d).appendChild(i),p.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(t.createTextNode(e)),d.id=c,p.fake&&(p.style.background="",p.style.overflow="hidden",u=w.style.overflow,w.style.overflow="hidden",w.appendChild(p)),a=n(d,e),p.fake?(p.parentNode.removeChild(p),w.style.overflow=u,w.offsetHeight):d.parentNode.removeChild(d),!!a}function d(e,t){return function(){return e.apply(t,arguments)}}function p(e,t,n){var o;for(var i in e)if(e[i]in t)return n===!1?e[i]:(o=t[e[i]],r(o,"function")?d(o,n||t):o);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function h(t,n,r){var o;if("getComputedStyle"in e){o=getComputedStyle.call(e,t,n);var i=e.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){var a=i.error?"error":"log";i[a].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&t.currentStyle&&t.currentStyle[r];return o}function v(t,r){var o=t.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(m(t[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var i=[];o--;)i.push("("+m(t[o])+":"+r+")");return i=i.join(" or "),c("@supports ("+i+") { #modernizr { position: absolute; } }",function(e){return"absolute"==h(e,null,"position")})}return n}function g(e,t,o,i){function a(){c&&(delete L.style,delete L.modElem)}if(i=r(i,"undefined")?!1:i,!r(o,"undefined")){var f=v(e,o);if(!r(f,"undefined"))return f}for(var c,d,p,m,h,g=["modernizr","tspan","samp"];!L.style&&g.length;)c=!0,L.modElem=s(g.shift()),L.style=L.modElem.style;for(p=e.length,d=0;p>d;d++)if(m=e[d],h=L.style[m],u(m,"-")&&(m=l(m)),L.style[m]!==n){if(i||r(o,"undefined"))return a(),"pfx"==t?m:!0;try{L.style[m]=o}catch(y){}if(L.style[m]!=h)return a(),"pfx"==t?m:!0}return a(),!1}function y(e,t,n,o,i){var a=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+T.join(a+" ")+a).split(" ");return r(t,"string")||r(t,"undefined")?g(s,t,o,i):(s=(e+" "+P.join(a+" ")+a).split(" "),p(s,t,n))}function C(e,t,r){return y(e,n,n,t,r)}var _=[],E=[],S={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){E.push({name:e,fn:t,options:n})},addAsyncTest:function(e){E.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var b=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=b;var w=t.documentElement,x="svg"===w.nodeName.toLowerCase();x||!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=C.elements;return"string"==typeof e?e.split(" "):e}function o(e,t){var n=C.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),C.elements=n+" "+e,u(t)}function i(e){var t=y[e[v]];return t||(t={},g++,e[v]=g,y[g]=t),t}function a(e,n,r){if(n||(n=t),c)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||m.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function s(e,n){if(e||(e=t),c)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),l=s.length;l>a;a++)o.createElement(s[a]);return o}function l(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return C.shivMethods?a(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(C,t.frag)}function u(e){e||(e=t);var r=i(e);return!C.shivCSS||f||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),c||l(e,r),e}var f,c,d="3.7.3",p=e.html5||{},m=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,v="_html5shiv",g=0,y={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",f="hidden"in e,c=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){f=!0,c=!0}}();var C={elements:p.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:d,shivCSS:p.shivCSS!==!1,supportsUnknownElements:c,shivMethods:p.shivMethods!==!1,type:"default",shivDocument:u,createElement:a,createDocumentFragment:s,addElements:o};e.html5=C,u(t),"object"==typeof module&&module.exports&&(module.exports=C)}("undefined"!=typeof e?e:this,t);var N="Moz O ms Webkit",P=S._config.usePrefixes?N.toLowerCase().split(" "):[];S._domPrefixes=P;var j;!function(){var e={}.hasOwnProperty;j=r(e,"undefined")||r(e.call,"undefined")?function(e,t){return t in e&&r(e.constructor.prototype[t],"undefined")}:function(t,n){return e.call(t,n)}}(),S._l={},S.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),Modernizr.hasOwnProperty(e)&&setTimeout(function(){Modernizr._trigger(e,Modernizr[e])},0)},S._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e,r;for(e=0;e<n.length;e++)(r=n[e])(t)},0),delete this._l[e]}},Modernizr._q.push(function(){S.addTest=a});var z=function(){function e(e,t){var o;return e?(t&&"string"!=typeof t||(t=s(t||"div")),e="on"+e,o=e in t,!o&&r&&(t.setAttribute||(t=s("div")),t.setAttribute(e,""),o="function"==typeof t[e],t[e]!==n&&(t[e]=n),t.removeAttribute(e)),o):!1}var r=!("onblur"in t.documentElement);return e}();S.hasEvent=z;var T=S._config.usePrefixes?N.split(" "):[];S._cssomPrefixes=T;var k=function(t){var r,o=b.length,i=e.CSSRule;if("undefined"==typeof i)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in i)return"@"+t;for(var a=0;o>a;a++){var s=b[a],l=s.toUpperCase()+"_"+r;if(l in i)return"@-"+s.toLowerCase()+"-"+t}return!1};S.atRule=k;var F=(S.testStyles=c,{elem:s("modernizr")});Modernizr._q.push(function(){delete F.elem});var L={style:F.elem.style};Modernizr._q.unshift(function(){delete L.style});S.testProp=function(e,t,r){return g([e],n,t,r)};S.testAllProps=y;S.prefixed=function(e,t,n){return 0===e.indexOf("@")?k(e):(-1!=e.indexOf("-")&&(e=l(e)),t?y(e,t,n):y(e,"pfx"))};S.testAllProps=C,o(),i(_),delete S.addTest,delete S.addAsyncTest;for(var A=0;A<Modernizr._q.length;A++)Modernizr._q[A]();e.Modernizr=Modernizr}(window,document);

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(e){"use strict";function _inheritsLoose(t,e){t.prototype=Object.create(e.prototype),(t.prototype.constructor=t).__proto__=e}function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}
/*!
   * GSAP 3.0.1
   * https://greensock.com
   *
   * @license Copyright 2008-2019, GreenSock. All rights reserved.
   * Subject to the terms at https://greensock.com/standard-license or for
   * Club GreenSock members, the agreement issued with that membership.
   * @author: Jack Doyle, jack@greensock.com
  */function n(t){return"string"==typeof t}function o(t){return"function"==typeof t}function p(t){return"number"==typeof t}function q(t){return void 0===t}function r(t){return"object"==typeof t}function s(t){return!1!==t}function t(){return"undefined"!=typeof window}function u(t){return o(t)||n(t)}function J(t){return(l=dt(t,at))&&ee}function K(t,e){return console.warn("Invalid",t,"tween of",e,"Missing plugin? gsap.registerPlugin()")}function L(t,e){return!e&&console.warn(t)}function M(t,e){return t&&(at[t]=e)&&l&&(l[t]=e)||at}function N(){return 0}function W(t){var e,n,i=t[0];if(!r(i)&&!o(i))return G(t)?t:[t];if(!(e=(i._gsap||{}).harness)){for(n=ct.length;n--&&!ct[n].targetTest(i););e=ct[n]}for(n=t.length;n--;)t[n]._gsap||(t[n]._gsap=new Ft(t[n],e));return t}function X(t){return t._gsap||W(vt(t))[0]._gsap}function Y(t,e){var r=t[e];return o(r)?t[e]():q(r)&&t.getAttribute(e)||r}function Z(t,e){return(t=t.split(",")).forEach(e)||t}function $(t){return Math.round(1e4*t)/1e4}function _(t,e){for(var r=e.length,n=0;t.indexOf(e[n])<0&&++n<r;);return n<r}function aa(t,e,r){var n,i=p(t[1]),a=(i?2:1)+(e<2?0:1),o=t[a];return i&&(o.duration=t[1]),1===e?(o.runBackwards=1,o.immediateRender=s(o.immediateRender)):2===e&&(n=t[a-1],o.startAt=n,o.immediateRender=s(o.immediateRender)),o.parent=r,o}function ba(){var t,e,r=ot.length,n=ot.slice(0);for(ut={},t=ot.length=0;t<r;t++)(e=n[t])&&e._lazy&&(e.render(e._lazy[0],e._lazy[1],!0)._lazy=0)}function ca(t,e,r,n){ot.length&&ba(),t.render(e,r,n),ot.length&&ba()}function da(t){var e=parseFloat(t);return e||0===e?e:t}function ea(t){return t}function fa(t,e){for(var r in e)r in t||(t[r]=e[r]);return t}function ga(t,e){for(var r in e)r in t||"duration"===r||"ease"===r||(t[r]=e[r])}function ia(t,e){for(var n in e)t[n]=r(e[n])?ia(t[n]||(t[n]={}),e[n]):e[n];return t}function ja(t,e){var r,n={};for(r in t)r in e||(n[r]=t[r]);return n}function na(t,e,r,n){void 0===r&&(r="_first"),void 0===n&&(n="_last");var i=e._prev,a=e._next;i?i._next=a:t[r]===e&&(t[r]=a),a?a._prev=i:t[n]===e&&(t[n]=i),e._dp=t,e._next=e._prev=e.parent=null}function oa(t,e){!t.parent||e&&!t.parent.autoRemoveChildren||t.parent.remove(t),t._act=0}function pa(t){for(var e=t;e;)e._dirty=1,e=e.parent;return t}function sa(t){var e;return t._repeat?(e=t.duration()+t._rDelay)*~~(t._tTime/e):0}function ta(t,e){return 0<e._ts?(t-e._start)*e._ts:(e._dirty?e.totalDuration():e._tDur)+(t-e._start)*e._ts}function ua(t,e,r){if(e.parent&&oa(e),e._start=r+e._delay,e._end=e._start+(e.totalDuration()/e._ts||0),function _addLinkedListItem(t,e,r,n,i){void 0===r&&(r="_first"),void 0===n&&(n="_last");var a,s=t[n];if(i)for(a=e[i];s&&s[i]>a;)s=s._prev;s?(e._next=s._next,s._next=e):(e._next=t[r],t[r]=e),e._next?e._next._prev=e:t[n]=e,e._prev=s,e.parent=t}(t,e,"_first","_last",t._sort?"_start":0),(t._recent=e)._time||!e._dur&&e._initted){var n=(t.rawTime()-e._start)*e._ts;(!e._dur||mt(0,e.totalDuration(),n)-e._tTime>B)&&e.render(n,!0)}if(pa(t),t._dp&&t._time>=t._dur&&t._ts&&t._dur<t.duration())for(var i=t;i._dp;)i.totalTime(i._tTime,!0),i=i._dp;return t}function va(t,e,r,n){return It(t,e),t._initted?!r&&t._pt&&t.vars.lazy?(ot.push(t),t._lazy=[e,n],1):void 0:1}function ya(t){if(t instanceof Et)return pa(t);var e=t._repeat;return t._tDur=e?e<0?1e20:$(t._dur*(e+1)+t._rDelay*e):t._dur,pa(t.parent),t}function Aa(t,e){var r,i,a=t.labels,s=t._recent||_t,o=t.duration()>=D?s.endTime(!1):t._dur;return n(e)&&(isNaN(e)||e in a)?"<"===(r=e.charAt(0))||">"===r?("<"===r?s._start:s.endTime(0<=s._repeat))+(parseFloat(e.substr(1))||0):(r=e.indexOf("="))<0?(e in a||(a[e]=o),a[e]):(i=+(e.charAt(r-1)+e.substr(r+1)),1<r?Aa(t,e.substr(0,r-1))+i:o+i):null==e?o:+e}function Ba(t,e){return t||0===t?e(t):e}function Da(t){return(t+"").substr((parseFloat(t)+"").length)}function Ga(t){return r(t)&&"length"in t&&t.length-1 in t&&r(t[0])&&t!==i}function Ja(t){if(o(t))return t;var d=r(t)?t:{each:t},_=Dt(d.ease),m=d.from||0,g=parseFloat(d.base)||0,v={},e=0<m&&m<1,y=isNaN(m)||e,b=d.axis,w=m,T=m;return n(m)?w=T={center:.5,edges:.5,end:1}[m]||0:!e&&y&&(w=m[0],T=m[1]),function(t,e,r){var n,i,a,s,o,u,h,l,f,c=(r||d).length,p=v[c];if(!p){if(!(f="auto"===d.grid?0:(d.grid||[1,D])[1])){for(h=-D;h<(h=r[f++].getBoundingClientRect().left)&&f<c;);f--}for(p=v[c]=[],n=y?Math.min(f,c)*w-.5:m%f,i=y?c*T/f-.5:m/f|0,l=D,u=h=0;u<c;u++)a=u%f-n,s=i-(u/f|0),p[u]=o=b?Math.abs("y"===b?s:a):j(a*a+s*s),h<o&&(h=o),o<l&&(l=o);p.max=h-l,p.min=l,p.v=c=(parseFloat(d.amount)||parseFloat(d.each)*(c<f?c-1:b?"y"===b?c/f:f:Math.max(f,c/f))||0)*("edges"===m?-1:1),p.b=c<0?g-c:g,p.u=Da(d.amount||d.each)||0,_=_&&c<0?Ct(_):_}return c=(p[t]-p.min)/p.max||0,$(p.b+(_?_(c):c)*p.v)+p.u}}function Ka(e){var r=e<1?Math.pow(10,(e+"").length-2):1;return function(t){return~~(Math.round(parseFloat(t)/e)*e*r)/r+(p(t)?0:Da(t))}}function La(u,t){var h,l,e=G(u);return!e&&r(u)&&(h=e=u.radius||D,u=vt(u.values),(l=!p(u[0]))&&(h*=h)),Ba(t,e?function(t){for(var e,r,n=parseFloat(l?t.x:t),i=parseFloat(l?t.y:0),a=D,s=0,o=u.length;o--;)(e=l?(e=u[o].x-n)*e+(r=u[o].y-i)*r:Math.abs(u[o]-n))<a&&(a=e,s=o);return s=!h||a<=h?u[s]:t,l||s===t||p(t)?s:s+Da(t)}:Ka(u))}function Ma(t,e,r,n){return Ba(G(t)?!e:!n,function(){return G(t)?t[~~(Math.random()*t.length)]:(r=r||1e-5)&&(n=r<1?Math.pow(10,(r+"").length-2):1)&&~~(Math.round((t+Math.random()*(e-t))/r)*r*n)/n})}function Qa(e,r,t){return Ba(t,function(t){return e[~~r(t)]})}function Ta(t){for(var e,r,n,i,a=0,s="";~(e=t.indexOf("random(",a));)n=t.indexOf(")",e),i="["===t.charAt(e+7),r=t.substr(e+7,n-e-7).match(i?it:H),s+=t.substr(a,e-a)+Ma(i?r:+r[0],+r[1],+r[2]||1e-5),a=n+1;return s+t.substr(a,t.length-a)}function Wa(t,e,r){var n,i,a,s=t.labels,o=D;for(n in s)(i=s[n]-e)<0==!!r&&i&&o>(i=Math.abs(i))&&(a=n,o=i);return a}function Ya(t){return oa(t),t.progress()<1&&bt(t,"onInterrupt"),t}function bb(t,e,r){return(6*(t=t<0?t+1:1<t?t-1:t)<1?e+(r-e)*t*6:t<.5?r:3*t<2?e+(r-e)*(2/3-t)*6:e)*wt+.5|0}function cb(t,e){var r,n,i,a,s,o,u,h,l,f,c=t?p(t)?[t>>16,t>>8&wt,t&wt]:0:Tt.black;if(!c){if(","===t.substr(-1)&&(t=t.substr(0,t.length-1)),Tt[t])c=Tt[t];else if("#"===t.charAt(0))4===t.length&&(t="#"+(r=t.charAt(1))+r+(n=t.charAt(2))+n+(i=t.charAt(3))+i),c=[(t=parseInt(t.substr(1),16))>>16,t>>8&wt,t&wt];else if("hsl"===t.substr(0,3))if(c=f=t.match(H),e){if(~t.indexOf("="))return t.match(tt)}else a=+c[0]%360/360,s=+c[1]/100,r=2*(o=+c[2]/100)-(n=o<=.5?o*(s+1):o+s-o*s),3<c.length&&(c[3]*=1),c[0]=bb(a+1/3,r,n),c[1]=bb(a,r,n),c[2]=bb(a-1/3,r,n);else c=t.match(H)||Tt.transparent;c=c.map(Number)}return e&&!f&&(r=c[0]/wt,n=c[1]/wt,i=c[2]/wt,o=((u=Math.max(r,n,i))+(h=Math.min(r,n,i)))/2,u===h?a=s=0:(l=u-h,s=.5<o?l/(2-u-h):l/(u+h),a=u===r?(n-i)/l+(n<i?6:0):u===n?(i-r)/l+2:(r-n)/l+4,a*=60),c[0]=a+.5|0,c[1]=100*s+.5|0,c[2]=100*o+.5|0),c}function db(t,e){var r,n,i,a=(t+"").match(xt),s=0,o="";if(!a)return t;for(r=0;r<a.length;r++)n=a[r],s+=(i=t.substr(s,t.indexOf(n,s)-s)).length+n.length,3===(n=cb(n,e)).length&&n.push(1),o+=i+(e?"hsla("+n[0]+","+n[1]+"%,"+n[2]+"%,"+n[3]:"rgba("+n.join(","))+")";return o+t.substr(s)}function gb(t){var e,r=t.join(" ");xt.lastIndex=0,xt.test(r)&&(e=kt.test(r),t[0]=db(t[0],e),t[1]=db(t[1],e))}function ob(t){var e=(t+"").split("("),r=Ot[e[0]];return r&&1<e.length&&r.config?r.config.apply(null,~t.indexOf("{")?[function _parseObjectInString(t){for(var e,r,n,i={},a=t.substr(1,t.length-3).split(":"),s=a[0],o=1,u=a.length;o<u;o++)r=a[o],e=o!==u-1?r.lastIndexOf(","):r.length,n=r.substr(0,e),i[s]=isNaN(n)?n.replace(St,"").trim():+n,s=r.substr(e+1).trim();return i}(e[1])]:rt.exec(t)[1].split(",").map(da)):Ot._CE&&Pt.test(t)?Ot._CE("",t):r}function rb(t,e,r,n){void 0===r&&(r=function easeOut(t){return 1-e(1-t)}),void 0===n&&(n=function easeInOut(t){return t<.5?e(2*t)/2:1-e(2*(1-t))/2});var i,a={easeIn:e,easeOut:r,easeInOut:n};return Z(t,function(t){for(var e in Ot[t]=at[t]=a,Ot[i=t.toLowerCase()]=r,a)Ot[i+("easeIn"===e?".in":"easeOut"===e?".out":".inOut")]=Ot[t+"."+e]=a[e]}),a}function sb(e){return function(t){return t<.5?(1-e(1-2*t))/2:.5+e(2*(t-.5))/2}}function tb(r,t,e){function sk(t){return 1===t?1:n*Math.pow(2,-10*t)*Q((t-a)*i)+1}var n=1<=t?t:1,i=(e||(r?.3:.45))/(t<1?t:1),a=i/F*(Math.asin(1/n)||0),s="out"===r?sk:"in"===r?function(t){return 1-sk(1-t)}:sb(sk);return i=F/i,s.config=function(t,e){return tb(r,t,e)},s}function ub(e,r){function Ak(t){return--t*t*((r+1)*t+r)+1}void 0===r&&(r=1.70158);var t="out"===e?Ak:"in"===e?function(t){return 1-Ak(1-t)}:sb(Ak);return t.config=function(t){return ub(e,t)},t}var R,i,a,h,l,f,d,c,m,g,v,y,b,w,T,x,k,A,O,P,S,C,U={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},E={duration:.5,overwrite:!1,delay:0},D=1e8,B=1/D,F=2*Math.PI,z=F/4,I=0,j=Math.sqrt,V=Math.cos,Q=Math.sin,G=Array.isArray,H=/(?:-?\.?\d|\.)+/gi,tt=/[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,et=/[-+=\.]*\d+(?:\.|e-|e)*\d*/gi,rt=/\(([^()]+)\)/i,nt=/[\+-]=-?[\.\d]+/,it=/[#\-+\.]*\b[a-z\d-=+%.]+/gi,at={},st={},ot=[],ut={},ht={},lt={},ft=30,ct=[],pt="onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",dt=function _merge(t,e){for(var r in e)t[r]=e[r];return t},_t={_start:0,endTime:N},mt=function _clamp(t,e,r){return r<t?t:e<r?e:r},gt=[].slice,vt=function toArray(t,e){return!n(t)||e||!a&&Mt()?G(t)?function _flatten(t,r,i){return void 0===i&&(i=[]),t.forEach(function(t){var e;return n(t)&&!r||Ga(t)?(e=i).push.apply(e,vt(t)):i.push(t)})||i}(t,e):Ga(t)?gt.call(t,0):t?[t]:[]:gt.call(h.querySelectorAll(t),0)},yt=function mapRange(e,t,r,n,i){var a=t-e,s=n-r;return Ba(i,function(t){return r+(t-e)/a*s})},bt=function _callback(t,e,r){var n,i,a=t.vars,s=a[e];if(s)return n=a[e+"Params"],i=a.callbackScope||t,r&&ot.length&&ba(),n?s.apply(i,n):s.call(i,t)},wt=255,Tt={aqua:[0,wt,wt],lime:[0,wt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,wt],navy:[0,0,128],white:[wt,wt,wt],olive:[128,128,0],yellow:[wt,wt,0],orange:[wt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[wt,0,0],pink:[wt,192,203],cyan:[0,wt,wt],transparent:[wt,wt,wt,0]},xt=function(){var t,e="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(t in Tt)e+="|"+t+"\\b";return new RegExp(e+")","gi")}(),kt=/hsl[a]?\(/,At=(b=Date.now,w=500,T=33,x=b(),k=x,O=A=1/60,y={time:0,frame:0,tick:function tick(){yj(!0)},wake:function wake(){f&&(!a&&t()&&(i=a=window,h=i.document||{},at.gsap=ee,(i.gsapVersions||(i.gsapVersions=[])).push(ee.version),J(l||i.GreenSockGlobals||!i.gsap&&i||{}),v=i.requestAnimationFrame),m&&y.sleep(),g=v||function(t){return setTimeout(t,1e3*(O-y.time)+1|0)},c=1,yj(2))},sleep:function sleep(){(v?i.cancelAnimationFrame:clearTimeout)(m),c=0,g=N},lagSmoothing:function lagSmoothing(t,e){w=t||1e8,T=Math.min(e,w,0)},fps:function fps(t){A=1/(t||60),O=y.time+A},add:function add(t){P.indexOf(t)<0&&P.push(t),Mt()},remove:function remove(t){var e;~(e=P.indexOf(t))&&P.splice(e,1)},_listeners:P=[]}),Mt=function _wake(){return!c&&At.wake()},Ot={},Pt=/^[\d.\-M][\d.\-,\s]/,St=/["']/g,Ct=function _invertEase(e){return function(t){return 1-e(1-t)}},Dt=function _parseEase(t,e){return t&&(o(t)?t:Ot[t]||ob(t))||e};function yj(e){var t,r,n=b()-k,i=!0===e;w<n&&(x+=n-T),k+=n,y.time=(k-x)/1e3,(0<(t=y.time-O)||i)&&(y.frame++,O+=t+(A<=t?.004:A-t),r=1),i||(m=g(yj)),r&&P.forEach(function(t){return t(y.time,n,y.frame,e)})}function Rk(t){return t<C?S*t*t:t<.7272727272727273?S*Math.pow(t-1.5/2.75,2)+.75:t<.9090909090909092?S*(t-=2.25/2.75)*t+.9375:S*Math.pow(t-2.625/2.75,2)+.984375}Z("Linear,Quad,Cubic,Quart,Quint,Strong",function(t,e){var r=e<5?e+1:e;rb(t+",Power"+(r-1),e?function(t){return Math.pow(t,r)}:function(t){return t},function(t){return 1-Math.pow(1-t,r)},function(t){return t<.5?Math.pow(2*t,r)/2:1-Math.pow(2*(1-t),r)/2})}),Ot.Linear.easeNone=Ot.none=Ot.Linear.easeIn,rb("Elastic",tb("in"),tb("out"),tb()),S=7.5625,C=1/2.75,rb("Bounce",function(t){return 1-Rk(1-t)},Rk),rb("Expo",function(t){return t?Math.pow(2,10*(t-1)):0}),rb("Circ",function(t){return-(j(1-t*t)-1)}),rb("Sine",function(t){return 1-V(t*z)}),rb("Back",ub("in"),ub("out"),ub()),Ot.SteppedEase=Ot.steps=at.SteppedEase={config:function config(t,e){void 0===t&&(t=1);var r=1/t,n=t+(e?0:1),i=e?1:0;return function(t){return((n*mt(0,.99999999,t)|0)+i)*r}}},E.ease=Ot["quad.out"];var Bt,Ft=function GSCache(t,e){this.id=I++,(t._gsap=this).target=t,this.harness=e,this.get=e?e.get:Y,this.set=e?e.getSetter:jt},Rt=((Bt=Animation.prototype).delay=function delay(t){return t||0===t?(this._delay=t,this):this._delay},Bt.duration=function duration(t){var e=arguments.length,r=this._repeat,n=0<r?r*((e?t:this._dur)+this._rDelay):0;return e?this.totalDuration(r<0?t:t+n):this.totalDuration()&&this._dur},Bt.totalDuration=function totalDuration(t){if(!arguments.length)return this._tDur;var e=this._repeat,r=(t||this._rDelay)&&e<0;return this._tDur=r?1e20:t,this._dur=r?t:(t-e*this._rDelay)/(e+1),this._dirty=0,pa(this.parent),this},Bt.totalTime=function totalTime(t,e){if(Mt(),!arguments.length)return this._tTime;var r,n=this.parent||this._dp;if(n&&n.smoothChildTiming&&this._ts){for(r=this._start,this._start=n._time-(0<this._ts?t/this._ts:((this._dirty?this.totalDuration():this._tDur)-t)/-this._ts),this._end+=this._start-r,n._dirty||pa(n);n.parent;)n.parent._time!==n._start+(0<n._ts?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;this.parent||ua(this._dp,this,this._start-this._delay)}return this._tTime===t&&this._dur||ca(this,t,e),this},Bt.time=function time(t,e){return arguments.length?this.totalTime(t+sa(this),e):this._time},Bt.totalProgress=function totalProgress(t,e){return arguments.length?this.totalTime(this.totalDuration()*t,e):this._tTime/this.totalDuration()},Bt.progress=function progress(t,e){return arguments.length?this.totalTime(this.duration()*t+sa(this),e):this.duration()?this._time/this._dur:this.ratio},Bt.iteration=function iteration(t,e){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(t-1)*r,e):this._repeat?1+~~(this._tTime/r):1},Bt.timeScale=function timeScale(t){var e=this._ts;return arguments.length?e?(this._end=this._start+this._tDur/(this._ts=t||B),function _recacheAncestors(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t}(this).totalTime(this._tTime,!0)):(this._pauseTS=t,this):e||this._pauseTS},Bt.paused=function paused(t){var e=!this._ts;return arguments.length?(e!==t&&(t?(this._pauseTS=this._ts,this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(this._ts=this._pauseTS,t=this._tTime||this._pTime,1===this.progress()&&(this._tTime-=B),this.totalTime(t,!0))),this):e},Bt.startTime=function startTime(t){return arguments.length?(this.parent&&this.parent._sort&&ua(this.parent,this,t-this._delay),this):this._start},Bt.endTime=function endTime(t){return this._start+(s(t)?this.totalDuration():this.duration())/Math.abs(this._ts)},Bt.rawTime=function rawTime(t){var e=this.parent||this._dp;return e?t&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?ta(e.rawTime(t),this):this._tTime:this._tTime},Bt.repeat=function repeat(t){return arguments.length?(this._repeat=t,ya(this)):this._repeat},Bt.repeatDelay=function repeatDelay(t){return arguments.length?(this._rDelay=t,ya(this)):this._rDelay},Bt.yoyo=function yoyo(t){return arguments.length?(this._yoyo=t,this):this._yoyo},Bt.seek=function seek(t,e){return this.totalTime(Aa(this,t),s(e))},Bt.restart=function restart(t,e){return this.play().totalTime(t?-this._delay:0,s(e))},Bt.play=function play(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},Bt.reverse=function reverse(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},Bt.pause=function pause(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},Bt.resume=function resume(){return this.paused(!1)},Bt.reversed=function reversed(t){var e=this._ts||this._pauseTS;return arguments.length?(t!==this.reversed()&&(this[this._ts?"_ts":"_pauseTS"]=Math.abs(e)*(t?-1:1),this.totalTime(this._tTime,!0)),this):e<0},Bt.invalidate=function invalidate(){return this._initted=0,this},Bt.isActive=function isActive(){var t,e=this.parent||this._dp,r=this._start;return!e||this._ts&&this._initted&&e.isActive()&&(t=e.rawTime(!0))>=r&&t<this.endTime(!0)-B},Bt.eventCallback=function eventCallback(t,e,r){var n=this.vars;return 1<arguments.length?(e?(n[t]=e,r&&(n[t+"Params"]=r),"onUpdate"===t&&(this._onUpdate=e)):delete n[t],this):n[t]},Bt.then=function then(e){var r=this;return void 0===e&&(e=N),new Promise(function(t){r._prom=function(){e(r),t()}})},Bt.kill=function kill(){Ya(this)},Animation);function Animation(t,e){var r=t.parent||R;this.vars=t,this._dur=this._tDur=+t.duration||0,this._delay=+t.delay||0,(this._repeat=t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase,ya(this)),this._ts=1,this.data=t.data,c||At.wake(),r&&ua(r,this,e||0===e?e:r._time),t.reversed&&this.reversed(!0),t.paused&&this.paused(!0)}fa(Rt.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:0,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-B,_prom:0});var Et=function(i){function Timeline(t,e){var r;return void 0===t&&(t={}),(r=i.call(this,t,e)||this).labels={},r.smoothChildTiming=s(t.smoothChildTiming),r.autoRemoveChildren=!!t.autoRemoveChildren,r._sort=s(t.sortChildren),r}_inheritsLoose(Timeline,i);var t=Timeline.prototype;return t.to=function to(t,e,r,n){return new Xt(t,aa(arguments,0,this),Aa(this,p(e)?n:r)),this},t.from=function from(t,e,r,n){return new Xt(t,aa(arguments,1,this),Aa(this,p(e)?n:r)),this},t.fromTo=function fromTo(t,e,r,n,i){return new Xt(t,aa(arguments,2,this),Aa(this,p(e)?i:n)),this},t.set=function set(t,e,r){return e.duration=0,e.parent=this,e.repeatDelay||(e.repeat=0),e.immediateRender=!!e.immediateRender,new Xt(t,e,Aa(this,r)),this},t.call=function call(t,e,r){return ua(this,Xt.delayedCall(0,t,e),Aa(this,r))},t.staggerTo=function staggerTo(t,e,r,n,i,a,s){return r.duration=e,r.stagger=r.stagger||n,r.onComplete=a,r.onCompleteParams=s,r.parent=this,new Xt(t,r,Aa(this,i)),this},t.staggerFrom=function staggerFrom(t,e,r,n,i,a,o){return r.runBackwards=1,r.immediateRender=s(r.immediateRender),this.staggerTo(t,e,r,n,i,a,o)},t.staggerFromTo=function staggerFromTo(t,e,r,n,i,a,o,u){return n.startAt=r,n.immediateRender=s(n.immediateRender),this.staggerTo(t,e,n,i,a,o,u)},t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,c,p,d=this._time,_=this._dirty?this.totalDuration():this._tDur,m=this._dur,g=_-B<t&&0<=t&&this!==R?_:t<B?0:t,v=this._zTime<0!=t<0&&this._initted;if(g!==this._tTime||r||v){if(v&&(m||(d=this._zTime),!t&&e||(this._zTime=t)),n=g,f=this._start,u=0===(l=this._ts),d!==this._time&&m&&(n+=this._time-d),this._repeat&&(p=this._yoyo,o=m+this._rDelay,(m<(n=$(g%o))||_===g)&&(n=m),(s=~~(g/o))&&s===g/o&&(n=m,s--),(c=~~(this._tTime/o))&&c===this._tTime/o&&c--,p&&1&s&&(n=m-n),s!==c&&!this._lock)){var y=p&&1&c,b=y===(p&&1&s);if(s<c&&(y=!y),d=y?0:m,this._lock=1,this.render(d,e,!m)._lock=0,!e&&this.parent&&bt(this,"onRepeat"),d!==this._time||u!=!this._ts)return this;if(b&&(this._lock=2,d=y?m+1e-4:-1e-4,this.render(d,!0)),this._lock=0,!this._ts&&!u)return this}if(this._hasPause&&!this._forcing&&this._lock<2&&(h=function _findNextPauseTween(t,e,r){var n;if(e<r)for(n=t._first;n&&n._start<=r;){if(!n._dur&&"isPause"===n.data&&n._start>e)return n;n=n._next}else for(n=t._last;n&&n._start>=r;){if(!n._dur&&"isPause"===n.data&&n._start<e)return n;n=n._prev}}(this,$(d),$(n)))&&(g-=n-(n=h._start)),this._tTime=g,this._time=n,this._act=!l,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1),d||!n||e||bt(this,"onStart"),d<=n&&0<=t)for(i=this._first;i;){if(a=i._next,(i._act||n>=i._start)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(n-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(n-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}else{i=this._last;for(var w=t<0?t:n;i;){if(a=i._prev,(i._act||w<=i._end)&&i._ts&&h!==i){if(i.parent!==this)return this.render(t,e,r);if(i.render(0<i._ts?(w-i._start)*i._ts:(i._dirty?i.totalDuration():i._tDur)+(w-i._start)*i._ts,e,r),n!==this._time||!this._ts&&!u){h=0;break}}i=a}}if(h&&!e&&(this.pause(),h.render(d<=n?0:-B)._zTime=d<=n?1:-1,this._ts))return this._start=f,this.render(t,e,r);this._onUpdate&&!e&&bt(this,"onUpdate",!0),(g===_||!g&&this._ts<0)&&(f!==this._start&&Math.abs(l)===Math.abs(this._ts)||(!n||_>=this.totalDuration())&&(!t&&m||oa(this,1),e||t<0&&!d||(bt(this,g===_?"onComplete":"onReverseComplete",!0),this._prom&&g===_&&this._prom())))}return this},t.add=function add(t,e){var r=this;if(p(e)||(e=Aa(this,e)),!(t instanceof Rt)){if(G(t))return t.forEach(function(t){return r.add(t,e)}),pa(this);if(n(t))return this.addLabel(t,e);if(!o(t))return this;t=Xt.delayedCall(0,t)}return this!==t?ua(this,t,e):this},t.getChildren=function getChildren(t,e,r,n){void 0===t&&(t=!0),void 0===e&&(e=!0),void 0===r&&(r=!0),void 0===n&&(n=-D);for(var i=[],a=this._first;a;)a._start>=n&&(a instanceof Xt?e&&i.push(a):(r&&i.push(a),t&&i.push.apply(i,a.getChildren(!0,e,r)))),a=a._next;return i},t.getById=function getById(t){for(var e=this.getChildren(1,1,1),r=e.length;r--;)if(e[r].vars.id===t)return e[r]},t.remove=function remove(t){return n(t)?this.removeLabel(t):o(t)?this.killTweensOf(t):(na(this,t),t===this._recent&&(this._recent=this._last),pa(this))},t.totalTime=function totalTime(t,e){return arguments.length?(this._forcing=1,this.parent||this._dp||!this._ts||(this._start=At.time-(0<this._ts?t/this._ts:(this.totalDuration()-t)/-this._ts)),i.prototype.totalTime.call(this,t,e),this._forcing=0,this):this._tTime},t.addLabel=function addLabel(t,e){return this.labels[t]=Aa(this,e),this},t.removeLabel=function removeLabel(t){return delete this.labels[t],this},t.addPause=function addPause(t,e,r){var n=Xt.delayedCall(0,e||N,r);return n.data="isPause",this._hasPause=1,ua(this,n,Aa(this,t))},t.removePause=function removePause(t){var e=this._first;for(t=Aa(this,t);e;)e._start===t&&"isPause"===e.data&&oa(e),e=e._next},t.killTweensOf=function killTweensOf(t,e,r){for(var n=this.getTweensOf(t,r),i=n.length;i--;)n[i].kill(t,e);return this},t.getTweensOf=function getTweensOf(t,e){for(var r,n=[],i=vt(t),a=this._first;a;)a instanceof Xt?!_(a._targets,i)||e&&!a.isActive()||n.push(a):(r=a.getTweensOf(i,e)).length&&n.push.apply(n,r),a=a._next;return n},t.tweenTo=function tweenTo(t,e){var r=this,n=Aa(r,t),i=e&&e.startAt,a=Xt.to(r,fa({ease:"none",lazy:!1,time:n,duration:Math.abs(n-(i&&"time"in i?i.time:r._time))/r.timeScale()||B,onStart:function onStart(){r.pause();var t=Math.abs(n-r._time)/r.timeScale();a._dur!==t&&(a._dur=t,a.render(a._time,!0,!0)),e&&e.onStart&&e.onStart.apply(a,e.onStartParams||[])}},e));return a},t.tweenFromTo=function tweenFromTo(t,e,r){return this.tweenTo(e,fa({startAt:{time:Aa(this,t)}},r))},t.recent=function recent(){return this._recent},t.nextLabel=function nextLabel(t){return void 0===t&&(t=this._time),Wa(this,Aa(this,t))},t.previousLabel=function previousLabel(t){return void 0===t&&(t=this._time),Wa(this,Aa(this,t),1)},t.currentLabel=function currentLabel(t){return arguments.length?this.seek(t,!0):this.previousLabel(this._time+B)},t.shiftChildren=function shiftChildren(t,e,r){void 0===r&&(r=0);for(var n,i=this._first,a=this.labels;i;)i._start>=r&&(i._start+=t),i=i._next;if(e)for(n in a)a[n]>=r&&(a[n]+=t);return pa(this)},t.invalidate=function invalidate(){var t=this._first;for(this._lock=0;t;)t.invalidate(),t=t._next;return i.prototype.invalidate.call(this)},t.clear=function clear(t){void 0===t&&(t=!0);for(var e,r=this._first;r;)e=r._next,this.remove(r),r=e;return this._time=this._tTime=0,t&&(this.labels={}),pa(this)},t.totalDuration=function totalDuration(t){var e,r,n=0,i=this,a=i._last,s=D,o=i._repeat,u=o*i._rDelay||0,h=o<0;if(arguments.length)return h?i:i.timeScale(i.totalDuration()/t);if(i._dirty){for(;a;)e=a._prev,a._dirty&&a.totalDuration(),a._start>s&&i._sort&&a._ts&&!i._lock?(i._lock=1,ua(i,a,a._start-a._delay),i._lock=0):s=a._start,a._start<0&&a._ts&&(n-=a._start,(!i.parent&&!i._dp||i.parent&&i.parent.smoothChildTiming)&&(i._start+=a._start/i._ts,i._time-=a._start,i._tTime-=a._start),i.shiftChildren(-a._start,!1,-D),s=0),n<(r=a._end=a._start+a._tDur/Math.abs(a._ts||a._pauseTS))&&a._ts&&(n=$(r)),a=e;i._dur=i===R&&i._time>n?i._time:Math.min(D,n),i._tDur=h&&(i._dur||u)?1e20:Math.min(D,n*(o+1)+u),i._end=i._start+(i._tDur/Math.abs(i._ts||i._pauseTS)||0),i._dirty=0}return i._tDur},Timeline.updateRoot=function updateRoot(t){if(R._ts&&ca(R,ta(t,R)),At.frame>=ft){ft+=U.autoSleep||120;var e=R._first;if((!e||!e._ts)&&U.autoSleep&&At._listeners.length<2){for(;e&&!e._ts;)e=e._next;e||At.sleep()}}},Timeline}(Rt);fa(Et.prototype,{_lock:0,_hasPause:0,_forcing:0});function Bb(t,e,i,a,s,u){var h,l,f,c;if(ht[t]&&!1!==(h=new ht[t]).init(s,h.rawVars?e[t]:function _processVars(t,e,i,a,s){if(o(t)&&(t=Yt(t,s,e,i,a)),!r(t)||t.style&&t.nodeType||G(t))return n(t)?Yt(t,s,e,i,a):t;var u,h={};for(u in t)h[u]=Yt(t[u],s,e,i,a);return h}(e[t],a,s,u,i),i,a,u)&&(i._pt=l=new te(i._pt,s,t,0,1,h.render,h,0,h.priority),i!==d))for(f=i._ptLookup[i._targets.indexOf(s)],c=h._props.length;c--;)f[h._props[c]]=l;return h}var zt,Lt=function _addPropTween(t,e,r,i,a,s,u,h,l){o(i)&&(i=i(a||0,t,s));var f,c=t[e],p="get"!==r?r:o(c)?l?t[e.indexOf("set")||!o(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():c,d=o(c)?l?qt:Ut:Zt;if(n(i)&&(~i.indexOf("random(")&&(i=Ta(i)),"="===i.charAt(1)&&(i=parseFloat(p)+parseFloat(i.substr(2))*("-"===i.charAt(0)?-1:1)+Da(p))),p!==i)return isNaN(p+i)?(c||e in t||K(e,i),function _addComplexStringPropTween(t,e,r,n,i,a,s){var o,u,h,l,f,c,p,d,_=new te(this._pt,t,e,0,1,Wt,null,i),m=0,g=0;for(_.b=r,_.e=n,r+="",(p=~(n+="").indexOf("random("))&&(n=Ta(n)),a&&(a(d=[r,n],t,e),r=d[0],n=d[1]),u=r.match(et)||[];o=et.exec(n);)l=o[0],f=n.substring(m,o.index),h?h=(h+1)%5:"rgba("===f.substr(-5)&&(h=1),l!==u[g++]&&(c=parseFloat(u[g-1]),_._pt={_next:_._pt,p:f||1===g?f:",",s:c,c:"="===l.charAt(1)?parseFloat(l.substr(2))*("-"===l.charAt(0)?-1:1):parseFloat(l)-c,m:h&&h<4?Math.round:0},m=et.lastIndex);return _.c=m<n.length?n.substring(m,n.length):"",_.fp=s,(nt.test(n)||p)&&(_.e=0),this._pt=_}.call(this,t,e,p,i,d,h||U.stringFilter,l)):(f=new te(this._pt,t,e,+p||0,i-(p||0),"boolean"==typeof c?Qt:Vt,0,d),l&&(f.fp=l),u&&f.modifier(u,this,t),this._pt=f)},It=function _initTween(t,e){var r,n,i,a,o,u,h,l,f,c,p,d,_=t.vars,m=_.ease,g=_.startAt,v=_.immediateRender,y=_.lazy,b=_.onUpdate,w=_.onUpdateParams,T=_.callbackScope,x=_.runBackwards,k=_.yoyoEase,A=_.keyframes,M=_.autoRevert,O=t._dur,P=t._startAt,S=t._targets,C=t.parent,D=C&&"nested"===C.data?C.parent._targets:S,B="auto"===t._overwrite,F=t.timeline;if(!F||A&&m||(m="none"),t._ease=Dt(m,E.ease),t._yEase=k?Ct(Dt(!0===k?m:k,E.ease)):0,k&&t._yoyo&&!t._repeat&&(k=t._yEase,t._yEase=t._ease,t._ease=k),!F){if(P&&P.render(-1,!0).kill(),g){if(oa(t._startAt=Xt.set(S,fa({data:"isStart",overwrite:!1,parent:C,immediateRender:!0,lazy:s(y),startAt:null,delay:0,onUpdate:b,onUpdateParams:w,callbackScope:T,stagger:0},g))),v)if(0<e)M||(t._startAt=0);else if(O)return}else if(x&&O)if(P)M||(t._startAt=0);else if(e&&(v=!1),oa(t._startAt=Xt.set(S,dt(ja(_,st),{overwrite:!1,data:"isFromStart",lazy:v&&s(y),immediateRender:v,stagger:0,parent:C}))),v){if(!e)return}else _initTween(t._startAt,e),v&&(M||(t._startAt=0));for(r=ja(_,st),d=(l=S[t._pt=0]?X(S[0]).harness:0)&&_[l.prop],n=0;n<S.length;n++){if(h=(o=S[n])._gsap||W(S)[n]._gsap,t._ptLookup[n]=c={},ut[h.id]&&ba(),p=D===S?n:D.indexOf(o),l&&!1!==(f=new l).init(o,d||r,t,p,D)&&(t._pt=a=new te(t._pt,o,f.name,0,1,f.render,f,0,f.priority),f._props.forEach(function(t){c[t]=a}),f.priority&&(u=1)),!l||d)for(i in r)ht[i]&&(f=Bb(i,r,t,p,o,D))?f.priority&&(u=1):c[i]=a=Lt.call(t,o,i,"get",r[i],p,D,0,_.stringFilter);t._op&&t._op[n]&&t.kill(o,t._op[n]),B&&(zt=t,R.killTweensOf(o,c,!0),zt=0),t._pt&&(s(y)&&O||y&&!O)&&(ut[h.id]=1)}u&&Ht(t),t._onInit&&t._onInit(t)}t._from=!F&&!!_.runBackwards,t._onUpdate=b,t._initted=1},Yt=function _parseFuncOrString(t,e,r,i,a){return o(t)?t.call(e,r,i,a):n(t)&&~t.indexOf("random(")?Ta(t):t},Nt=pt+",repeat,repeatDelay,yoyo,yoyoEase",$t=(Nt+",id,stagger,delay,duration").split(","),Xt=function(k){function Tween(t,e,n){var i;"number"==typeof e&&(n.duration=e,e=n,n=null);var a,o,h,l,f,c,p,d,_=(i=k.call(this,function _inheritDefaults(t){var e=t.parent||R,r=t.keyframes?ga:fa;if(s(t.inherit))for(;e;)r(t,e.vars.defaults),e=e.parent;return t}(e),n)||this).vars,m=_.duration,g=_.delay,v=_.immediateRender,y=_.stagger,b=_.overwrite,w=_.keyframes,T=_.defaults,x=vt(t);if(i._targets=x.length?W(x):L("GSAP target "+t+" not found. https://greensock.com",!U.nullTargetWarn)||[{}],i._ptLookup=[],i._overwrite=b,w||y||u(m)||u(g)){if(e=i.vars,(a=i.timeline=new Et({data:"nested",defaults:T||{}})).kill(),a.parent=_assertThisInitialized(i),w)fa(a.vars.defaults,{ease:"none"}),w.forEach(function(t){return a.to(x,t,">")});else{if(l=x.length,p=y?Ja(y):N,r(y))for(f in y)~Nt.indexOf(f)&&((d=d||{})[f]=y[f]);for(o=0;o<l;o++){for(f in h={},e)$t.indexOf(f)<0&&(h[f]=e[f]);h.stagger=0,d&&dt(h,d),e.yoyoEase&&!e.repeat&&(h.yoyoEase=e.yoyoEase),c=x[o],h.duration=+Yt(m,_assertThisInitialized(i),o,c,x),h.delay=(+Yt(g,_assertThisInitialized(i),o,c,x)||0)-i._delay,!y&&1===l&&h.delay&&(i._delay=g=h.delay,i._start+=g,h.delay=0),a.to(c,h,p(o,c,x))}m=g=0}m||i.duration(m=a.duration())}else i.timeline=0;return!0===b&&(zt=_assertThisInitialized(i),R.killTweensOf(x),zt=0),(v||!m&&!w&&i._start===i.parent._time&&s(v)&&function _hasNoPausedAncestors(t){return!t||t._ts&&_hasNoPausedAncestors(t.parent)}(_assertThisInitialized(i))&&"nested"!==i.parent.data)&&(i._tTime=-B,i.render(Math.max(0,-g))),i}_inheritsLoose(Tween,k);var t=Tween.prototype;return t.render=function render(t,e,r){var n,i,a,s,o,u,h,l,f,c=this._time,p=this._tDur,d=this._dur,_=p-B<t&&0<=t?p:t<B?0:t;if(d){if(_!==this._tTime||r||this._startAt&&this._zTime<0!=t<0){if(n=_,l=this.timeline,this._repeat){if(s=d+this._rDelay,d<(n=$(_%s))&&(n=d),(a=~~(_/s))&&a===_/s&&(n=d,a--),(u=this._yoyo&&1&a)&&(f=this._yEase,n=d-n),(o=~~(this._tTime/s))&&o===this._tTime/s&&o--,n===c&&!r)return this;a!==o&&this.vars.repeatRefresh&&!this._lock&&(this._lock=1,this.render(s*a,!0).invalidate()._lock=0)}if(!this._initted&&va(this,n,r,e))return this;for(this._tTime=_,this._time=n,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=h=(f||this._ease)(n/d),this._from&&(this.ratio=h=1-h),c||!n||e||bt(this,"onStart"),i=this._pt;i;)i.r(h,i.d),i=i._next;l&&l.render(t<0?t:!n&&u?-B:l._dur*h,e,r)||this._startAt&&(this._zTime=t),this._onUpdate&&!e&&(t<0&&this._startAt&&this._startAt.render(t,!0,r),bt(this,"onUpdate")),this._repeat&&a!==o&&this.vars.onRepeat&&!e&&this.parent&&bt(this,"onRepeat"),_!==p&&_||this._tTime!==_||(t<0&&this._startAt&&!this._onUpdate&&this._startAt.render(t,!0,r),!t&&d||!(_||this._ts<0)||oa(this,1),e||t<0&&!c||(bt(this,_===p?"onComplete":"onReverseComplete",!0),this._prom&&_===p&&this._prom()))}}else!function _renderZeroDurationTween(t,e,r,n){var i,a,s,o=t._zTime<0?0:1,u=e<0?0:1,h=t._rDelay,l=0;if(h&&t._repeat&&((a=~~((l=mt(0,t._tDur,e))/h))&&a===l/h&&a--,(s=~~(t._tTime/h))&&s===t._tTime/h&&s--,a!==s&&(o=1-u,t.vars.repeatRefresh&&t.invalidate())),(t._initted||!va(t,e,n,r))&&(u!==o||n)){for(r&&!e||(t._zTime=e),t.ratio=u,t._from&&(u=1-u),t._time=0,t._tTime=l,r||bt(t,"onStart"),i=t._pt;i;)i.r(u,i.d),i=i._next;!u&&t._startAt&&!t._onUpdate&&t._start&&t._startAt.render(e,!0,n),t._onUpdate&&!r&&bt(t,"onUpdate"),l&&t._repeat&&!r&&t.parent&&bt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===u&&(t.ratio&&oa(t,1),r||(bt(t,t.ratio?"onComplete":"onReverseComplete",!0),t._prom&&t.ratio&&t._prom()))}}(this,t,e,r);return this},t.targets=function targets(){return this._targets},t.invalidate=function invalidate(){return this._pt=this._op=this._startAt=this._onUpdate=this._act=this._lazy=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(),k.prototype.invalidate.call(this)},t.kill=function kill(t,e){if(void 0===e&&(e="all"),zt===this)return zt;if(!(t||e&&"all"!==e)&&this.parent)return this._lazy=0,Ya(this);if(this.timeline)return this.timeline.killTweensOf(t,e),this;var r,i,a,s,o,u,h,l=this._targets,f=t?vt(t):l,c=this._ptLookup,p=this._pt;if((!e||"all"===e)&&function _arraysMatch(t,e){for(var r=t.length,n=r===e.length;n&&r--&&t[r]===e[r];);return r<0}(l,f))return Ya(this);for(r=this._op=this._op||[],"all"!==e&&(n(e)&&(o={},Z(e,function(t){return o[t]=1}),e=o),e=function _addAliasesToVars(t,e){var r,n,i,a,s=t[0]?X(t[0]).harness:0,o=s&&s.aliases;if(!o)return e;for(n in r=dt({},e),o)if(n in r)for(i=(a=o[n].split(",")).length;i--;)r[a[i]]=r[n];return r}(l,e)),h=l.length;h--;)if(~f.indexOf(l[h]))for(o in i=c[h],"all"===e?(r[h]=e,s=i,a={}):(a=r[h]=r[h]||{},s=e),s)(u=i&&i[o])&&("kill"in u.d&&!0!==u.d.kill(o)||(na(this,u,"_pt"),delete i[o])),"all"!==a&&(a[o]=1);return this._initted&&!this._pt&&p&&Ya(this),this},Tween.to=function to(t,e,r){return new Tween(t,e,r)},Tween.from=function from(t,e){return new Tween(t,aa(arguments,1))},Tween.delayedCall=function delayedCall(t,e,r,n){return new Tween(e,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:t,onComplete:e,onReverseComplete:e,onCompleteParams:r,onReverseCompleteParams:r,callbackScope:n})},Tween.fromTo=function fromTo(t,e,r){return new Tween(t,aa(arguments,2))},Tween.set=function set(t,e){return e.duration=0,e.repeatDelay||(e.repeat=0),new Tween(t,e)},Tween.killTweensOf=function killTweensOf(t,e,r){return R.killTweensOf(t,e,r)},Tween}(Rt);fa(Xt.prototype,{_targets:[],_initted:0,_lazy:0,_startAt:0,_op:0,_onInit:0}),Z("staggerTo,staggerFrom,staggerFromTo",function(r){Xt[r]=function(){var t=new Et,e=vt(arguments);return e.splice("staggerFromTo"===r?5:4,0,0),t[r].apply(t,e)}});function Mb(t,e,r){return t.setAttribute(e,r)}function Ub(t,e,r,n){n.mSet(t,e,n.m.call(n.tween,r,n.mt),n)}var Zt=function _setterPlain(t,e,r){return t[e]=r},Ut=function _setterFunc(t,e,r){return t[e](r)},qt=function _setterFuncWithParam(t,e,r,n){return t[e](n.fp,r)},jt=function _getSetter(t,e){return o(t[e])?Ut:q(t[e])&&t.setAttribute?Mb:Zt},Vt=function _renderPlain(t,e){return e.set(e.t,e.p,~~(1e4*(e.s+e.c*t))/1e4,e)},Qt=function _renderBoolean(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Wt=function _renderComplexString(t,e){var r=e._pt,n="";if(!t&&e.b)n=e.b;else if(1===t&&e.e)n=e.e;else{for(;r;)n=r.p+(r.m?r.m(r.s+r.c*t):~~(1e4*(r.s+r.c*t))/1e4)+n,r=r._next;n+=e.c}e.set(e.t,e.p,n,e)},Gt=function _renderPropTweens(t,e){for(var r=e._pt;r;)r.r(t,r.d),r=r._next},Jt=function _addPluginModifier(t,e,r,n){for(var i,a=this._pt;a;)i=a._next,a.p===n&&a.modifier(t,e,r),a=i},Kt=function _killPropTweensOf(t){for(var e,r,n=this._pt;n;)r=n._next,n.p===t&&!n.op||n.op===t?na(this,n,"_pt"):n.dep||(e=1),n=r;return!e},Ht=function _sortPropTweensByPriority(t){for(var e,r,n,i,a=t._pt;a;){for(e=a._next,r=n;r&&r.pr>a.pr;)r=r._next;(a._prev=r?r._prev:i)?a._prev._next=a:n=a,(a._next=r)?r._prev=a:i=a,a=e}t._pt=n},te=(PropTween.prototype.modifier=function modifier(t,e,r){this.mSet=this.mSet||this.set,this.set=Ub,this.m=t,this.mt=r,this.tween=e},PropTween);function PropTween(t,e,r,n,i,a,s,o,u){this.t=e,this.s=n,this.c=i,this.p=r,this.r=a||Vt,this.d=s||this,this.set=o||Zt,this.pr=u||0,(this._next=t)&&(t._prev=this)}Z(pt+",parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert",function(t){st[t]=1,"on"===t.substr(0,2)&&(st[t+"Params"]=1)}),at.TweenMax=at.TweenLite=Xt,at.TimelineLite=at.TimelineMax=Et,R=new Et({sortChildren:!1,defaults:E,autoRemoveChildren:!0,id:"root"}),U.stringFilter=gb;var ee={registerPlugin:function registerPlugin(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];e.forEach(function(t){return function _createPlugin(t){var e=(t=!t.name&&t.default||t).name,r=o(t),n=e&&!r&&t.init?function(){this._props=[]}:t,i={init:N,render:Gt,add:Lt,kill:Kt,modifier:Jt,rawVars:0},a={targetTest:0,get:0,getSetter:jt,aliases:{},register:0};if(Mt(),t!==n){if(ht[e])return;fa(n,fa(ja(t,i),a)),dt(n.prototype,dt(i,ja(t,a))),ht[n.prop=e]=n,t.targetTest&&(ct.push(n),st[e]=1),e=("css"===e?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}M(e,n),t.register&&t.register(ee,n,te)}(t)})},timeline:function timeline(t){return new Et(t)},getTweensOf:function getTweensOf(t,e){return R.getTweensOf(t,e)},getProperty:function getProperty(i,t,e,r){n(i)&&(i=vt(i)[0]);var a=X(i||{}).get,s=e?ea:da;return"native"===e&&(e=""),i?t?s((ht[t]&&ht[t].get||a)(i,t,e,r)):function(t,e,r){return s((ht[t]&&ht[t].get||a)(i,t,e,r))}:i},quickSetter:function quickSetter(r,e,n){if(1<(r=vt(r)).length){var i=r.map(function(t){return ee.quickSetter(t,e,n)}),a=i.length;return function(t){for(var e=a;e--;)i[e](t)}}r=r[0]||{};var s=ht[e],o=X(r),u=s?function(t){var e=new s;d._pt=0,e.init(r,n?t+n:t,d,0,[r]),e.render(1,e),d._pt&&Gt(1,d)}:o.set(r,e);return s?u:function(t){return u(r,e,n?t+n:t,o,1)}},isTweening:function isTweening(t){return 0<R.getTweensOf(t,!0).length},defaults:function defaults(t){return t&&t.ease&&(t.ease=Dt(t.ease,E.ease)),ia(E,t||{})},config:function config(t){return ia(U,t||{})},registerEffect:function registerEffect(t){var i=t.name,n=t.effect,e=t.plugins,a=t.defaults,s=t.extendTimeline;(e||"").split(",").forEach(function(t){return t&&!ht[t]&&!at[t]&&L(i+" effect requires "+t+" plugin.")}),lt[i]=function(t,e){return n(vt(t),fa(e||{},a))},s&&(Et.prototype[i]=function(t,e,n){return this.add(lt[i](t,r(e)?e:(n=e)&&{}),n)})},registerEase:function registerEase(t,e){Ot[t]=Dt(e)},parseEase:function parseEase(t,e){return arguments.length?Dt(t,e):Ot},getById:function getById(t){return R.getById(t)},exportRoot:function exportRoot(t,e){void 0===t&&(t={});var r,n,i=new Et(t);for(i.smoothChildTiming=s(t.smoothChildTiming),R.remove(i),i._dp=0,i._time=i._tTime=R._time,r=R._first;r;)n=r._next,!e&&!r._dur&&r instanceof Xt&&r.vars.onComplete===r._targets[0]||ua(i,r,r._start-r._delay),r=n;return ua(R,i,0),i},utils:{wrap:function wrap(e,t,r){var n=t-e;return G(e)?Qa(e,wrap(0,e.length),t):Ba(r,function(t){return(n+(t-e)%n)%n+e})},wrapYoyo:function wrapYoyo(e,t,r){var n=t-e,i=2*n;return G(e)?Qa(e,wrapYoyo(0,e.length-1),t):Ba(r,function(t){return e+(n<(t=(i+(t-e)%i)%i)?i-t:t)})},distribute:Ja,random:Ma,snap:La,normalize:function normalize(t,e,r){return yt(t,e,0,1,r)},getUnit:Da,clamp:function clamp(e,r,t){return Ba(t,function(t){return mt(e,r,t)})},splitColor:cb,toArray:vt,mapRange:yt,pipe:function pipe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return function(t){return e.reduce(function(t,e){return e(t)},t)}},unitize:function unitize(e,r){return function(t){return e(parseFloat(t))+(r||Da(t))}},interpolate:function interpolate(e,r,t,i){var a=isNaN(e+r)?0:function(t){return(1-t)*e+t*r};if(!a){var s,o,u,h,l,f=n(e),c={};if(!0===t&&(i=1)&&(t=null),f)e={p:e},r={p:r};else if(G(e)&&!G(r)){for(u=[],h=e.length,l=h-2,o=1;o<h;o++)u.push(interpolate(e[o-1],e[o]));h--,a=function func(t){t*=h;var e=Math.min(l,~~t);return u[e](t-e)},t=r}else i||(e=dt(G(e)?[]:{},e));if(!u){for(s in r)Lt.call(c,e,s,"get",r[s]);a=function func(t){return Gt(t,c)||(f?e.p:e)}}}return Ba(t,a)}},install:J,effects:lt,ticker:At,updateRoot:Et.updateRoot,plugins:ht,globalTimeline:R,core:{PropTween:te,globals:M,Tween:Xt,Timeline:Et,Animation:Rt,getCache:X}};Z("to,from,fromTo,delayedCall,set,killTweensOf",function(t){return ee[t]=Xt[t]}),At.add(Et.updateRoot),d=ee.to({},{duration:0});function Zb(t,a){return{name:t,rawVars:1,init:function init(t,i,e){e._onInit=function(t){var e,r;if(n(i)&&(e={},Z(i,function(t){return e[t]=1}),i=e),a){for(r in e={},i)e[r]=a(i[r]);i=e}!function _addModifiers(t,e){var r,n,i,a=t._targets;for(r in e)for(n=a.length;n--;)(i=t._ptLookup[n][r])&&i.d.modifier&&i.d.modifier(e[r],t,a[n],r)}(t,i)}}}}ee.registerPlugin({name:"attr",init:function init(t,e,r,n,i){for(var a in e)this.add(t,"setAttribute",(t.getAttribute(a)||0)+"",e[a],n,i,0,0,a),this._props.push(a)}},{name:"endArray",init:function init(t,e){for(var r=e.length;r--;)this.add(t,r,t[r],e[r])}},Zb("roundProps",Ka),Zb("modifiers"),Zb("snap",La)),Xt.version=Et.version=ee.version="3.0.1",f=1,t()&&Mt();function Ic(t,e){return e.set(e.t,e.p,~~(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Jc(t,e){return e.set(e.t,e.p,1===t?e.e:~~(1e4*(e.s+e.c*t))/1e4+e.u,e)}function Kc(t,e){return e.set(e.t,e.p,t?~~(1e4*(e.s+e.c*t))/1e4+e.u:e.b,e)}function Lc(t,e){var r=e.s+e.c*t;e.set(e.t,e.p,~~(r+(r<0?-.5:.5))+e.u,e)}function Mc(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)}function Nc(t,e){return e.set(e.t,e.p,1!==t?e.b:e.e,e)}function Oc(t,e,r){return t.style[e]=r}function Pc(t,e,r){return t.style.setProperty(e,r)}function Qc(t,e,r){return t._gsap[e]=r}function Rc(t,e,r){return t._gsap.scaleX=t._gsap.scaleY=r}function Sc(t,e,r,n,i){var a=t._gsap;a.scaleX=a.scaleY=r,a.renderTransform(i,a)}function Tc(t,e,r,n,i){var a=t._gsap;a[e]=r,a.renderTransform(i,a)}function Xc(t,e){var r=ne.createElementNS?ne.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):ne.createElement(t);return r.style?r:ne.createElement(t)}function Yc(t,e){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Ee,"-$1").toLowerCase())||r.getPropertyValue(e)}function Zc(t,e){var r=(e||se).style,n=5,i="O,Moz,ms,Ms,Webkit".split(",");if(t in r)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);n--&&!(i[n]+t in r););return n<0?null:(3===n?"ms":0<=n?i[n]:"")+t}function $c(){!function _windowExists(){return"undefined"!=typeof window}()||(re=window,ne=re.document,ie=ne.documentElement,se=Xc("div")||{style:{}},oe=Xc("div"),Ne=Zc(Ne),$e=Zc($e),se.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",he=!!Zc("perspective"),ae=1)}function ad(t,e){for(var r=e.length;r--;)if(t.hasAttribute(e[r]))return t.getAttribute(e[r])}function bd(e){var r;try{r=e.getBBox()}catch(t){r=function _getBBoxHack(t){var e,r=Xc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,a=this.style.cssText;if(ie.appendChild(r),r.appendChild(this),this.style.display="block",t)try{e=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=_getBBoxHack}catch(t){}else this._gsapBBox&&(e=this._gsapBBox());return i?n.insertBefore(this,i):n.appendChild(this),ie.removeChild(r),this.style.cssText=a,e}.call(e,!0)}return!r||r.width||r.x||r.y?r:{x:+ad(e,["x","cx","x1"]),y:+ad(e,["y","cy","y1"]),width:0,height:0}}function cd(t){return!(!t.getCTM||t.parentNode&&!t.ownerSVGElement||!bd(t))}function dd(t,e){if(e){var r=t.style;e in De&&(e=Ne),r.removeProperty?("ms"!==e.substr(0,2)&&"webkit"!==e.substr(0,6)||(e="-"+e),r.removeProperty(e.replace(Ee,"-$1").toLowerCase())):r.removeAttribute(e)}}function ed(t,e,r,n,i,a){var s=new te(t._pt,e,r,0,1,a?Nc:Mc);return(t._pt=s).b=n,s.e=i,t._props.push(r),s}function gd(t,e,r,n){var i,a,s,o,u=parseFloat(r),h=(r+"").substr((u+"").length)||"px",l=se.style,f=Le.test(e),c="svg"===t.tagName.toLowerCase(),p=(c?"client":"offset")+(f?"Width":"Height"),d="px"===n;return n===h||Xe[n]||Xe[h]?u:(o=t.getCTM&&cd(t),"%"===n&&De[e]?$(u/(o?t.getBBox()[f?"width":"height"]:t[p])*100):(l[f?"width":"height"]=100+(d?h:n),a="em"===n&&t.appendChild&&!c?t:t.parentNode,o&&(a=(t.ownerSVGElement||{}).parentNode),a&&a!==ne&&a.appendChild||(a=ne.body),(s=a._gsap)&&"%"===n&&s.width&&f&&s.time===At.time?i=s.width*u/100:(a.appendChild(se),i=se[p],a.removeChild(se),f&&"%"===n&&((s=X(a)).time=At.time,s.width=i/u*100)),$(d?i*u/100:100/i*u)))}function hd(t,e,r,n){var i;return ae||$c(),e in Ye&&~(e=Ye[e]).indexOf(",")&&(e=e.split(",")[0]),De[e]?(i=Ve(t,n),i="transformOrigin"!==e?i[e]:Qe(Yc(t,$e))+i.zOrigin+"px"):(i=t.style[e])&&"auto"!==i&&!n||(i=Yc(t,e)||Y(t,e)),r?gd(t,e,i,r)+r:i}function id(t,e,r,n){var i,a,s,o,u,h,l,f,c,p,d,_,m=new te(this._pt,t.style,e,0,1,Wt),g=0,v=0;if(m.b=r,m.e=n,r+="","auto"===(n+="")&&(t.style[e]=n,n=Yc(t,e)||n,t.style[e]=r),gb(i=[r,n]),n=i[1],s=(r=i[0]).match(ze)||[],(n.match(ze)||[]).length){for(;a=ze.exec(n);)l=a[0],c=n.substring(g,a.index),u?u=(u+1)%5:"rgba("===c.substr(-5)&&(u=1),l!==(h=s[v++]||"")&&(o=parseFloat(h)||0,d=h.substr((o+"").length),(_="="===l.charAt(1)?+(l.charAt(0)+"1"):0)&&(l=l.substr(2)),f=parseFloat(l),p=l.substr((f+"").length),g=ze.lastIndex-p.length,p||(p=p||U.units[e]||d,g===n.length&&(n+=p,m.e+=p)),d!==p&&(o=gd(t,e,h,p)),m._pt={_next:m._pt,p:c||1===v?c:",",s:o,c:_?_*f:f-o,m:u&&u<4?Math.round:0});m.c=g<n.length?n.substring(g,n.length):""}else m.r="display"===e?Nc:Mc;return nt.test(n)&&(m.e=0),this._pt=m}function kd(t){var e=t.split(" "),r=e[0],n=e[1]||"50%";return"top"!==r&&"bottom"!==r&&"left"!==n&&"right"!==n||(e=r,r=n,n=e),e[0]=Ze[r]||r,e[1]=Ze[n]||n,e.join(" ")}function ld(t,e){if(e.tween&&e.tween._time===e.tween._dur){var r,n,i,a=e.t,s=a.style,o=e.u;if("all"===o||!0===o)s.cssText="",n=1;else for(i=(o=o.split(",")).length;-1<--i;)r=o[i],De[r]&&(n=1,r="transformOrigin"===r?$e:Ne),dd(a,r);n&&(dd(a,Ne),(n=a._gsap)&&(n.svg&&a.removeAttribute("transform"),delete n.x))}}function pd(t){return"matrix(1, 0, 0, 1, 0, 0)"===t||"none"===t||!t}function qd(t){var e=Yc(t,Ne);return pd(e)?qe:e.substr(7).match(tt).map($)}function rd(t,e){var r,n,i,a,s=t._gsap,o=t.style,u=qd(t);return s.svg&&t.getAttribute("transform")?"1,0,0,1,0,0"===(u=[(i=t.transform.baseVal.consolidate().matrix).a,i.b,i.c,i.d,i.e,i.f]).join(",")?qe:u:(u!==qe||t.offsetParent||t===ie||s.svg||(i=o.display,o.display="block",(r=t.parentNode)&&t.offsetParent||(a=1,n=t.nextSibling,ie.appendChild(t)),u=qd(t),i?o.display=i:dd(t,"display"),a&&(n?r.insertBefore(t,n):r?r.appendChild(t):ie.removeChild(t))),e&&6<u.length?[u[0],u[1],u[4],u[5],u[12],u[13]]:u)}function sd(t,e,r,n,i,a){var s,o,u,h=t._gsap,l=i||rd(t,!0),f=h.xOrigin||0,c=h.yOrigin||0,p=h.xOffset||0,d=h.yOffset||0,_=l[0],m=l[1],g=l[2],v=l[3],y=l[4],b=l[5],w=e.split(" "),T=parseFloat(w[0])||0,x=parseFloat(w[1])||0;r?l!==qe&&(o=_*v-m*g)&&(u=T*(-m/o)+x*(_/o)-(_*b-m*y)/o,T=T*(v/o)+x*(-g/o)+(g*b-v*y)/o,x=u):(T=(s=bd(t)).x+(~w[0].indexOf("%")?T/100*s.width:T),x=s.y+(~(w[1]||w[0]).indexOf("%")?x/100*s.height:x)),n||!1!==n&&h.smooth?(y=T-f,b=x-c,h.xOffset+=y*_+b*g-y,h.yOffset+=y*m+b*v-b):h.xOffset=h.yOffset=0,h.xOrigin=T,h.yOrigin=x,h.smooth=!!n,h.origin=e,h.originIsAbsolute=!!r,a&&(ed(a,h,"xOrigin",f,T),ed(a,h,"yOrigin",c,x),ed(a,h,"xOffset",p,h.xOffset),ed(a,h,"yOffset",d,h.yOffset))}function vd(t,e,r){var n=Da(e);return $(parseFloat(e)+parseFloat(gd(t,"x",r+"px",n)))+n}function Cd(t,e,r,i,a,s){var o,u,h=360,l=n(a),f=parseFloat(a)*(l&&~a.indexOf("rad")?Be:1),c=s?f*s:f-i,p=i+c+"deg";return l&&("short"===(o=a.split("_")[1])&&(c%=h)!==c%180&&(c+=c<0?h:-h),"cw"===o&&c<0?c=(c+36e9)%h-~~(c/h)*h:"ccw"===o&&0<c&&(c=(c-36e9)%h-~~(c/h)*h)),t._pt=u=new te(t._pt,e,r,i,c,Jc),u.e=p,u.u="deg",t._props.push(r),u}function Dd(t,e,r){var n,i,a,s,o,u,h,l=oe.style,f=r._gsap;for(i in l.cssText=getComputedStyle(r).cssText+";position:absolute;display:block;",l[Ne]=e,ne.body.appendChild(oe),n=Ve(oe,1),De)(a=f[i])!==(s=n[i])&&"perspective"!==i&&(o=Da(a)!==(h=Da(s))?gd(r,i,a,h):parseFloat(a),u=parseFloat(s),t._pt=new te(t._pt,f,i,o,u-o,Ic),t._pt.u=h,t._props.push(i));ne.body.removeChild(oe)}var re,ne,ie,ae,se,oe,ue,he,le,fe,ce,pe=Ot.Power0,de=Ot.Power1,_e=Ot.Power2,me=Ot.Power3,ge=Ot.Power4,ve=Ot.Linear,ye=Ot.Quad,be=Ot.Cubic,we=Ot.Quart,Te=Ot.Quint,xe=Ot.Strong,ke=Ot.Elastic,Ae=Ot.Back,Me=Ot.SteppedEase,Oe=Ot.Bounce,Pe=Ot.Sine,Se=Ot.Expo,Ce=Ot.Circ,De={},Be=180/Math.PI,Fe=Math.PI/180,Re=Math.atan2,Ee=/([A-Z])/g,ze=/[-+=\.]*\d+[\.e-]*\d*[a-z%]*/g,Le=/(?:left|right|width|margin|padding|x)/i,Ie=/[\s,\(]\S/,Ye={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ne="transform",$e=Ne+"Origin",Xe={deg:1,rad:1,turn:1},Ze={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Ue={clearProps:function clearProps(t,e,r,n,i){var a=t._pt=new te(t._pt,e,r,0,0,ld);return a.u=n,a.pr=-10,a.tween=i,t._props.push(r),1}},qe=[1,0,0,1,0,0],je={},Ve=function _parseTransform(t,e){var r=t._gsap||new Ft(t);if("x"in r&&!e)return r;var n,i,a,s,o,u,h,l,f,c,p,d,_,m,g,v,y,b,w,T,x,k,A,M,O,P,S,C,D,B,F=t.style,R=r.scaleX<0,E=r.xOrigin||0,z=r.yOrigin||0,L="deg",I=Yc(t,$e)||"0";return n=i=a=u=h=l=f=c=p=0,s=o=1,r.svg=!(!t.getCTM||!cd(t)),d=rd(t,r.svg),r.svg&&sd(t,I,r.originIsAbsolute,!1!==r.smooth,d),d!==qe&&(v=d[0],y=d[1],b=d[2],w=d[3],n=T=d[4],i=x=d[5],6===d.length?(s=Math.sqrt(v*v+y*y),o=Math.sqrt(w*w+b*b),u=v||y?Re(y,v)*Be:r.rotation||0,f=b||w?Re(b,w)*Be+u:r.skewX||0,r.svg&&(n-=E-(E*v+z*b),i-=z-(E*y+z*w))):(B=d[6],C=d[7],O=d[8],P=d[9],S=d[10],D=d[11],n=d[12],i=d[13],a=d[14],h=(_=Re(B,S))*Be,_&&(k=T*(m=Math.cos(-_))+O*(g=Math.sin(-_)),A=x*m+P*g,M=B*m+S*g,O=T*-g+O*m,P=x*-g+P*m,S=B*-g+S*m,D=C*-g+D*m,T=k,x=A,B=M),l=(_=Re(-b,S))*Be,_&&(m=Math.cos(-_),D=w*(g=Math.sin(-_))+D*m,v=k=v*m-O*g,y=A=y*m-P*g,b=M=b*m-S*g),u=(_=Re(y,v))*Be,_&&(k=v*(m=Math.cos(_))+y*(g=Math.sin(_)),A=T*m+x*g,y=y*m-v*g,x=x*m-T*g,v=k,T=A),h&&359.9<Math.abs(h)+Math.abs(u)&&(h=u=0,l=180-l),s=$(Math.sqrt(v*v+y*y+b*b)),o=$(Math.sqrt(x*x+B*B)),_=Re(T,x),f=2e-4<Math.abs(_)?_*Be:0,p=D?1/(D<0?-D:D):0),r.svg&&(d=t.getAttribute("transform"),r.forceCSS=t.setAttribute("transform","")||!pd(Yc(t,Ne)),d&&t.setAttribute("transform",d))),90<Math.abs(f)&&Math.abs(f)<270&&(R?(s*=-1,f+=u<=0?180:-180,u+=u<=0?180:-180):(o*=-1,f+=f<=0?180:-180)),r.x=((r.xPercent=n&&Math.round(t.offsetWidth/2)===Math.round(-n)?-50:0)?0:n)+"px",r.y=((r.yPercent=i&&Math.round(t.offsetHeight/2)===Math.round(-i)?-50:0)?0:i)+"px",r.z=a+"px",r.scaleX=$(s),r.scaleY=$(o),r.rotation=$(u)+L,r.rotationX=$(h)+L,r.rotationY=$(l)+L,r.skewX=f+L,r.skewY=c+L,r.transformPerspective=p+"px",(r.zOrigin=parseFloat(I.split(" ")[2])||0)&&(F[$e]=Qe(I)),r.xOffset=r.yOffset=0,r.force3D=U.force3D,r.renderTransform=r.svg?tr:he?He:We,r},Qe=function _firstTwoOnly(t){return(t=t.split(" "))[0]+" "+t[1]},We=function _renderNon3DTransforms(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,He(t,e)},Ge="0deg",Je="0px",Ke=") ",He=function _renderCSSTransforms(t,e){var r=e||this,n=r.xPercent,i=r.yPercent,a=r.x,s=r.y,o=r.z,u=r.rotation,h=r.rotationY,l=r.rotationX,f=r.skewX,c=r.skewY,p=r.scaleX,d=r.scaleY,_=r.transformPerspective,m=r.force3D,g=r.target,v=r.zOrigin,y="",b="auto"===m&&t&&1!==t||!0===m;if(v&&(l!==Ge||h!==Ge)){var w,T=parseFloat(h)*Fe,x=Math.sin(T),k=Math.cos(T);T=parseFloat(l)*Fe,w=Math.cos(T),a=vd(g,a,x*w*-v),s=vd(g,s,-Math.sin(T)*-v),o=vd(g,o,k*w*-v+v)}(n||i)&&(y="translate("+n+"%, "+i+"%) "),!b&&a===Je&&s===Je&&o===Je||(y+=o!==Je||b?"translate3d("+a+", "+s+", "+o+") ":"translate("+a+", "+s+Ke),_!==Je&&(y+="perspective("+_+Ke),u!==Ge&&(y+="rotate("+u+Ke),h!==Ge&&(y+="rotateY("+h+Ke),l!==Ge&&(y+="rotateX("+l+Ke),f===Ge&&c===Ge||(y+="skew("+f+", "+c+Ke),1===p&&1===d||(y+="scale("+p+", "+d+Ke),g.style[Ne]=y||"translate(0, 0)"},tr=function _renderSVGTransforms(t,e){var r,n,i,a,s,o=e||this,u=o.xPercent,h=o.yPercent,l=o.x,f=o.y,c=o.rotation,p=o.skewX,d=o.skewY,_=o.scaleX,m=o.scaleY,g=o.target,v=o.xOrigin,y=o.yOrigin,b=o.xOffset,w=o.yOffset,T=o.forceCSS,x=parseFloat(l),k=parseFloat(f);c=parseFloat(c),p=parseFloat(p),(d=parseFloat(d))&&(p+=d=parseFloat(d),c+=d),c||p?(c*=Fe,p*=Fe,r=Math.cos(c)*_,n=Math.sin(c)*_,i=Math.sin(c-p)*-m,a=Math.cos(c-p)*m,p&&(d*=Fe,s=Math.tan(p-d),i*=s=Math.sqrt(1+s*s),a*=s,d&&(s=Math.tan(d),r*=s=Math.sqrt(1+s*s),n*=s)),r=$(r),n=$(n),i=$(i),a=$(a)):(r=_,a=m,n=i=0),(x&&!~(l+"").indexOf("px")||k&&!~(f+"").indexOf("px"))&&(x=gd(g,"x",l,"px"),k=gd(g,"y",f,"px")),(v||y||b||w)&&(x=$(x+v-(v*r+y*i)+b),k=$(k+y-(v*n+y*a)+w)),(u||h)&&(s=g.getBBox(),x=$(x+u/100*s.width),k=$(k+h/100*s.height)),s="matrix("+r+","+n+","+i+","+a+","+x+","+k+")",g.setAttribute("transform",s),T&&(g.style[Ne]=s)},er={name:"css",register:$c,targetTest:function targetTest(t){return t.style&&t.nodeType},init:function init(t,e,r,n,i){var a,s,o,u,h,l,f,c,p,d,_,m,g,v,y,b=this._props,w=t.style;for(f in ae||$c(),e)if("autoRound"!==f&&(s=e[f],!ht[f]||!Bb(f,e,r,n,t,i)))if(l=Ue[f],"function"===(h=typeof s)&&(h=typeof(s=s.call(r,n,t,i))),"string"===h&&~s.indexOf("random(")&&(s=Ta(s)),l)l(this,t,f,s,r)&&(y=1);else if("--"===f.substr(0,2))this.add(w,"setProperty",getComputedStyle(t).getPropertyValue(f)+"",s+"",n,i,0,0,f);else{if(a=hd(t,f),u=parseFloat(a),(d="string"===h&&"="===s.charAt(1)?+(s.charAt(0)+"1"):0)&&(s=s.substr(2)),o=parseFloat(s),f in Ye&&("autoAlpha"===f&&(1===u&&"hidden"===hd(t,"visibility")&&o&&(u=0),ed(this,w,"visibility",u?"inherit":"hidden",o?"inherit":"hidden",!o)),"scale"!==f&&~(f=Ye[f]).indexOf(",")&&(f=f.split(",")[0])),_=f in De){if(m||(g=t._gsap,v=!1!==e.smoothOrigin&&g.smooth,(m=this._pt=new te(this._pt,w,Ne,0,1,g.renderTransform,g)).dep=1),"scale"===f){this._pt=new te(this._pt,t,"scale",u,d?d*o:o-u,0,0,Rc),b.push("scale");continue}if("transformOrigin"===f){s=kd(s),g.svg?sd(t,s,0,v,0,this):((p=parseFloat(s.split(" ")[2]))!==g.zOrigin&&ed(this,g,"zOrigin",g.zOrigin,p),ed(this,w,f,Qe(a),Qe(s)));continue}if("svgOrigin"===f){sd(t,s,1,v,0,this);continue}if(f in je){Cd(this,g,f,u,s,d);continue}if("smoothOrigin"===f){ed(this,g,"smooth",g.smooth,s);continue}if("force3D"===f){g[f]=s;continue}if("transform"===f){Dd(this,s,t);continue}}if(_||(o||0===o)&&(u||0===u)&&!Ie.test(s)&&f in w)(c=(a+"").substr((u+"").length))!==(p=(s+"").substr((o+"").length)||(f in U.units?U.units[f]:c))&&(u=gd(t,f,a,p)),this._pt=new te(this._pt,_?g:w,f,u,d?d*o:o-u,"px"!==p||!1===e.autoRound||_?Ic:Lc),this._pt.u=p||0,c!==p&&(this._pt.b=a,this._pt.r=Kc);else if(f in w)id.call(this,t,f,a,s);else{if(!(f in t)){K("Invalid "+f+" tween "+s+". Missing plugin? gsap.registerPlugin()");continue}this.add(t,f,t[f],s,n,i)}b.push(f)}y&&Ht(this)},get:hd,aliases:Ye,getSetter:function getSetter(t,e,r){return e in De&&e!==$e&&(t._gsap.x||hd(t,"x"))?r&&ue===r?"scale"===e?Rc:Qc:(ue=r||{})&&("scale"===e?Sc:Tc):t.style&&!q(t.style[e])?Oc:~e.indexOf("-")?Pc:jt(t,e)}};ee.utils.checkPrefix=Zc,ce=Z((le="x,y,z,scale,scaleX,scaleY,xPercent,yPercent")+","+(fe="rotation,rotationX,rotationY,skewX,skewY")+",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",function(t){De[t]=1}),Z(fe,function(t){U.units[t]="deg",je[t]=1}),Ye[ce[13]]=le+","+fe,Z("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,9:rotateX,10:rotateY",function(t){var e=t.split(":");Ye[e[1]]=ce[e[0]]}),Z("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(t){U.units[t]="px"}),ee.registerPlugin(er);var rr=ee.registerPlugin(er)||ee;e.Back=Ae,e.Bounce=Oe,e.CSSPlugin=er,e.Circ=Ce,e.Cubic=be,e.Elastic=ke,e.Expo=Se,e.Linear=ve,e.Power0=pe,e.Power1=de,e.Power2=_e,e.Power3=me,e.Power4=ge,e.Quad=ye,e.Quart=we,e.Quint=Te,e.Sine=Pe,e.SteppedEase=Me,e.Strong=xe,e.TimelineLite=Et,e.TimelineMax=Et,e.TweenLite=Xt,e.TweenMax=Xt,e.default=rr,e.gsap=rr,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=gsap.min.js.map


!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t=t||self).window=t.window||{})}(this,function(t){"use strict";function p(t){return"string"==typeof t}function x(t,e,n,r){var a=t[e],o=1===r?6:subdivideSegment(a,n,r);if(o&&o+n+2<a.length)return t.splice(e,0,a.slice(0,n+o+2)),a.splice(0,n+o),1}function A(t,e){var n=t.length,r=t[n-1]||[],a=r.length;e[0]===r[a-2]&&e[1]===r[a-1]&&(e=r.concat(e.slice(2)),n--),t[n]=e}var y=/[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,R=/(?:(-)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,b=/[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi,r=/(^[#\.][a-z]|[a-y][a-z])/i,F=Math.PI/180,s=180/Math.PI,U=Math.sin,Z=Math.cos,H=Math.abs,Q=Math.sqrt,L=Math.atan2,C=1e8,l=function _isNumber(t){return"number"==typeof t},_={},N={},e=1e5,d=function _wrapProgress(t){return Math.round((t+C)%1*e)/e||(t<0?0:1)},O=function _round(t){return~~(t*e+(t<0?-.5:.5))/e},D=function _copyMetaData(t,e){return e.totalLength=t.totalLength,t.samples?(e.samples=t.samples.slice(0),e.lookup=t.lookup.slice(0),e.minLength=t.minLength,e.resolution=t.resolution):e.totalPoints=t.totalPoints,e};function getRawPath(t){var e,n=(t=p(t)&&r.test(t)&&document.querySelector(t)||t).getAttribute?t:0;return n&&(t=t.getAttribute("d"))?(n._gsPath||(n._gsPath={}),(e=n._gsPath[t])&&!e._dirty?e:n._gsPath[t]=stringToRawPath(t)):t?p(t)?stringToRawPath(t):l(t[0])?[t]:t:console.warn("Expecting a <path> element or an SVG path data string")}function reverseSegment(t){var e,n=0;for(t.reverse();n<t.length;n+=2)e=t[n],t[n]=t[n+1],t[n+1]=e;t.reversed=!t.reversed}var z={rect:"rx,ry,x,y,width,height",circle:"r,cx,cy",ellipse:"rx,ry,cx,cy",line:"x1,x2,y1,y2"};function convertToPath(t,e){var n,r,a,o,i,s,l,h,u,g,f,c,p,d,m,v,P,w,x,y,b,T,M=t.tagName.toLowerCase(),L=.552284749831;return"path"!==M&&t.getBBox?(s=function _createPath(t,e){var n,r=document.createElementNS("http://www.w3.org/2000/svg","path"),a=[].slice.call(t.attributes),o=a.length;for(e=","+e+",";-1<--o;)n=a[o].nodeName.toLowerCase(),e.indexOf(","+n+",")<0&&r.setAttributeNS(null,n,a[o].nodeValue);return r}(t,"x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),T=function _attrToObj(t,e){for(var n=e?e.split(","):[],r={},a=n.length;-1<--a;)r[n[a]]=+t.getAttribute(n[a])||0;return r}(t,z[M]),"rect"===M?(o=T.rx,i=T.ry,r=T.x,a=T.y,g=T.width-2*o,f=T.height-2*i,n=o||i?"M"+(v=(d=(p=r+o)+g)+o)+","+(w=a+i)+" V"+(x=w+f)+" C"+[v,y=x+i*L,m=d+o*L,b=x+i,d,b,d-(d-p)/3,b,p+(d-p)/3,b,p,b,c=r+o*(1-L),b,r,y,r,x,r,x-(x-w)/3,r,w+(x-w)/3,r,w,r,P=a+i*(1-L),c,a,p,a,p+(d-p)/3,a,d-(d-p)/3,a,d,a,m,a,v,P,v,w].join(",")+"z":"M"+(r+g)+","+a+" v"+f+" h"+-g+" v"+-f+" h"+g+"z"):"circle"===M||"ellipse"===M?(h="circle"===M?(o=i=T.r)*L:(o=T.rx,(i=T.ry)*L),n="M"+((r=T.cx)+o)+","+(a=T.cy)+" C"+[r+o,a+h,r+(l=o*L),a+i,r,a+i,r-l,a+i,r-o,a+h,r-o,a,r-o,a-h,r-l,a-i,r,a-i,r+l,a-i,r+o,a-h,r+o,a].join(",")+"z"):"line"===M?n="M"+T.x1+","+T.y1+" L"+T.x2+","+T.y2:"polyline"!==M&&"polygon"!==M||(n="M"+(r=(u=(t.getAttribute("points")+"").match(R)||[]).shift())+","+(a=u.shift())+" L"+u.join(","),"polygon"===M&&(n+=","+r+","+a+"z")),s.setAttribute("d",rawPathToString(s._gsRawPath=stringToRawPath(n))),e&&t.parentNode&&(t.parentNode.insertBefore(s,t),t.parentNode.removeChild(t)),s):t}function getRotationAtBezierT(t,e,n){var r,a=t[e],o=t[e+2],i=t[e+4];return a+=(o-a)*n,a+=((o+=(i-o)*n)-a)*n,r=o+(i+(t[e+6]-i)*n-o)*n-a,a=t[e+1],a+=((o=t[e+3])-a)*n,a+=((o+=((i=t[e+5])-o)*n)-a)*n,O(L(o+(i+(t[e+7]-i)*n-o)*n-a,r)*s)}function sliceRawPath(t,e,n){!function _isUndefined(t){return void 0===t}(n)||(n=1);var r=n<(e=e||0),a=Math.max(0,~~(H(n-e)-1e-8));if(r&&(r=n,n=e,e=r,r=1,a-=a?1:0),e<0||n<0){var o=1+~~Math.min(e,n);e+=o,n+=o}var i,s,l,h,u,g,f,c=function copyRawPath(t){for(var e=[],n=0;n<t.length;n++)e[n]=D(t[n],t[n].slice(0));return D(t,e)}(t.totalLength?t:cacheRawPathMeasurements(t)),p=1<n,d=getProgressData(c,e,_),m=getProgressData(c,n,N),v=m.segment,P=d.segment,w=m.segIndex,y=d.segIndex,b=m.i,T=d.i,M=y===w,L=b===T&&M,R=M&&b<T||L&&d.t>m.t;if(p||a){if(x(c,y,T,d.t)&&(i=1,y++,L?R?m.t/=d.t:(m.t=(m.t-d.t)/(1-d.t),w++,b=0):y<=w+1&&!R&&(w++,M&&(b-=T))),m.t?x(c,w,b,m.t)&&(R&&i&&y++,r&&w++):(w--,r&&y--),h=[],g=1+(u=c.length)*a,f=y,r)for(g+=(u-(w=(w||u)-1)+y)%u,l=0;l<g;l++)A(h,c[f]),f=(f||u)-1;else for(g+=(u-y+w)%u,l=0;l<g;l++)A(h,c[f++%u]);c=h}else if(s=1===m.t?6:subdivideSegment(v,b,m.t),e!==n)for(i=subdivideSegment(P,T,L?d.t/m.t:d.t),M&&(s+=i),v.splice(b+s+2),i&&P.splice(0,T+i),l=c.length;l--;)(l<y||w<l)&&c.splice(l,1);else v.angle=getRotationAtBezierT(v,b+s,0),d=v[b+=s],m=v[b+1],v.length=v.totalLength=0,v.totalPoints=c.totalPoints=8,v.push(d,m,d,m,d,m,d,m);return r&&function _reverseRawPath(t,e){var n=t.length;for(e||t.reverse();n--;)t[n].reversed||reverseSegment(t[n])}(c,p||a),c.totalLength=0,c}function measureSegment(t,e,n){e=e||0,t.samples||(t.samples=[],t.lookup=[]);var r,a,o,i,s,l,h,u,g,f,c,p,d,m,v,P,w,x=~~t.resolution||12,y=1/x,b=n?e+6*n+1:t.length,T=t[e],M=t[e+1],L=e?e/6*x:0,R=t.samples,S=t.lookup,_=(e?t.minLength:C)||C,N=R[L+n*x-1],A=e?R[L-1]:0;for(R.length=S.length=0,a=e+2;a<b;a+=6){for(o=t[a+4]-T,i=t[a+2]-T,s=t[a]-T,u=t[a+5]-M,g=t[a+3]-M,f=t[a+1]-M,l=h=c=p=0,r=1;r<=x;r++)l=h-(h=((m=y*r)*m*o+3*(d=1-m)*(m*i+d*s))*m),c=p-(p=(m*m*u+3*d*(m*g+d*f))*m),(P=Q(c*c+l*l))<_&&(_=P),A+=P,R[L++]=A;T+=o,M+=u}if(N)for(N-=A;L<R.length;L++)R[L]+=N;if(R.length&&_)for(t.totalLength=w=R[R.length-1]||0,t.minLength=_,P=v=0,r=0;r<w;r+=_)S[P++]=R[v]<r?++v:v;else t.totalLength=R[0]=0;return e?A-R[e/2-1]:A}function cacheRawPathMeasurements(t,e){var n,r,a;for(a=n=r=0;a<t.length;a++)t[a].resolution=~~e||12,r+=t[a].length,n+=measureSegment(t[a]);return t.totalPoints=r,t.totalLength=n,t}function subdivideSegment(t,e,n){if(n<=0||1<=n)return 0;var r=t[e],a=t[e+1],o=t[e+2],i=t[e+3],s=t[e+4],l=t[e+5],h=r+(o-r)*n,u=o+(s-o)*n,g=a+(i-a)*n,f=i+(l-i)*n,c=h+(u-h)*n,p=g+(f-g)*n,d=s+(t[e+6]-s)*n,m=l+(t[e+7]-l)*n;return u+=(d-u)*n,f+=(m-f)*n,t.splice(e+2,4,O(h),O(g),O(c),O(p),O(c+(u-c)*n),O(p+(f-p)*n),O(u),O(f),O(d),O(m)),t.samples&&t.samples.splice(e/6*t.resolution|0,0,0,0,0,0,0,0),6}function getProgressData(t,e,n){n=n||{},t.totalLength||cacheRawPathMeasurements(t),(e<0||1<e)&&(e=d(e));var r,a,o,i,s,l,h=0,u=t[0];if(1<t.length){for(o=t.totalLength*e,s=l=0;(s+=t[l++].totalLength)<o;)h=l;e=(o-(i=s-(u=t[h]).totalLength))/(s-i)||0}return r=u.samples,a=u.resolution,o=u.totalLength*e,i=(l=u.lookup[~~(o/u.minLength)]||0)?r[l-1]:0,(s=r[l])<o&&(i=s,s=r[++l]),n.path=t,n.segment=u,n.segIndex=h,n.i=6*~~(l/a),n.t=1/a*((o-i)/(s-i)+l%a),n}function getPositionOnPath(t,e,n,r){var a,o,i,s,l,h,u,g,f,c=t[0],p=r||{};if((e<0||1<e)&&(e=d(e)),1<t.length){for(i=t.totalLength*e,l=h=0;(l+=t[h++].totalLength)<i;)c=t[h];e=(i-(s=l-c.totalLength))/(l-s)||0}return a=c.samples,o=c.resolution,i=c.totalLength*e,s=(h=c.lookup[~~(i/c.minLength)]||0)?a[h-1]:0,(l=a[h])<i&&(s=l,l=a[++h]),f=1-(u=1/o*((i-s)/(l-s)+h%o)||0),g=c[h=6*~~(h/o)],p.x=O((u*u*(c[h+6]-g)+3*f*(u*(c[h+4]-g)+f*(c[h+2]-g)))*u+g),p.y=O((u*u*(c[h+7]-(g=c[h+1]))+3*f*(u*(c[h+5]-g)+f*(c[h+3]-g)))*u+g),n&&(p.angle=c.totalLength?getRotationAtBezierT(c,h,1<=u?1-1e-9:u||1e-9):c.angle||0),p}function transformRawPath(t,e,n,r,a,o,i){for(var s,l,h,u,g,f=t.length;-1<--f;)for(l=(s=t[f]).length,h=0;h<l;h+=2)u=s[h],g=s[h+1],s[h]=u*e+g*r+o,s[h+1]=u*n+g*a+i;return t._dirty=1,t}function arcToSegment(t,e,n,r,a,o,i,s,l){if(t!==s||e!==l){n=H(n),r=H(r);var h=a%360*F,u=Z(h),g=U(h),f=Math.PI,c=2*f,p=(t-s)/2,d=(e-l)/2,m=u*p+g*d,v=-g*p+u*d,P=m*m,w=v*v,x=P/(n*n)+w/(r*r);1<x&&(n=Q(x)*n,r=Q(x)*r);var y=n*n,b=r*r,T=(y*b-y*w-b*P)/(y*w+b*P);T<0&&(T=0);var M=(o===i?-1:1)*Q(T),L=n*v/r*M,R=-r*m/n*M,S=u*L-g*R+(t+s)/2,_=g*L+u*R+(e+l)/2,N=(m-L)/n,A=(v-R)/r,C=(-m-L)/n,O=(-v-R)/r,D=N*N+A*A,z=(A<0?-1:1)*Math.acos(N/Q(D)),B=(N*O-A*C<0?-1:1)*Math.acos((N*C+A*O)/Q(D*(C*C+O*O)));isNaN(B)&&(B=f),!i&&0<B?B-=c:i&&B<0&&(B+=c),z%=c,B%=c;var G,V=Math.ceil(H(B)/(c/4)),I=[],k=B/V,E=4/3*U(k/2)/(1+Z(k/2)),j=u*n,X=g*n,Y=g*-r,q=u*r;for(G=0;G<V;G++)m=Z(a=z+G*k),v=U(a),N=Z(a+=k),A=U(a),I.push(m-E*v,v+E*m,N+E*A,A-E*N,N,A);for(G=0;G<I.length;G+=2)m=I[G],v=I[G+1],I[G]=m*j+v*Y+S,I[G+1]=m*X+v*q+_;return I[G-2]=s,I[G-1]=l,I}}function stringToRawPath(t){function ff(t,e,n,r){u=(n-t)/3,g=(r-e)/3,s.push(t+u,e+g,n-u,r-g,n,r)}var e,n,r,a,o,i,s,l,h,u,g,f,c,p=(t+"").replace(b,function(t){var e=+t;return e<1e-4&&-1e-4<e?0:e}).match(y)||[],d=[],m=0,v=0,P=p.length,w=0,x="ERROR: malformed path: "+t;if(!t||!isNaN(p[0])||isNaN(p[1]))return console.log(x),d;for(e=0;e<P;e++)if(c=o,isNaN(p[e])?i=(o=p[e].toUpperCase())!==p[e]:e--,r=+p[e+1],a=+p[e+2],i&&(r+=m,a+=v),e||(l=r,h=a),"M"===o)s&&(s.length<8?d.length-=1:w+=s.length),m=l=r,v=h=a,s=[r,a],d.push(s),e+=2,o="L";else if("C"===o)i||(m=v=0),(s=s||[0,0]).push(r,a,m+1*p[e+3],v+1*p[e+4],m+=1*p[e+5],v+=1*p[e+6]),e+=6;else if("S"===o)u=m,g=v,"C"!==c&&"S"!==c||(u+=m-s[s.length-4],g+=v-s[s.length-3]),i||(m=v=0),s.push(u,g,r,a,m+=1*p[e+3],v+=1*p[e+4]),e+=4;else if("Q"===o)u=m+2/3*(r-m),g=v+2/3*(a-v),i||(m=v=0),m+=1*p[e+3],v+=1*p[e+4],s.push(u,g,m+2/3*(r-m),v+2/3*(a-v),m,v),e+=4;else if("T"===o)u=m-s[s.length-4],g=v-s[s.length-3],s.push(m+u,v+g,r+2/3*(m+1.5*u-r),a+2/3*(v+1.5*g-a),m=r,v=a),e+=2;else if("H"===o)ff(m,v,m=r,v),e+=1;else if("V"===o)ff(m,v,m,v=r+(i?v-m:0)),e+=1;else if("L"===o||"Z"===o)"Z"===o&&(r=l,a=h,s.closed=!0),("L"===o||.5<H(m-r)||.5<H(v-a))&&(ff(m,v,r,a),"L"===o&&(e+=2)),m=r,v=a;else if("A"===o){if(f=arcToSegment(m,v,+p[e+1],+p[e+2],+p[e+3],+p[e+4],+p[e+5],(i?m:0)+1*p[e+6],(i?v:0)+1*p[e+7]))for(n=0;n<f.length;n++)s.push(f[n]);m=s[s.length-2],v=s[s.length-1],e+=7}else console.log(x);return(e=s.length)<6?(d.pop(),e=0):s[0]===s[e-2]&&s[1]===s[e-1]&&(s.closed=!0),d.totalPoints=w+e,d}function flatPointsToSegment(t,e){void 0===e&&(e=1);for(var n=t[0],r=0,a=[n,r],o=2;o<t.length;o+=2)a.push(n,r,t[o],r=(t[o]-n)*e/2,n=t[o],-r);return a}function pointsToSegment(t,e,n){var r,a,o,i,s,l,h,u,g,f,c,p,d,m,v=t.length-2,P=+t[0],w=+t[1],x=+t[2],y=+t[3],b=[P,w,P,w],T=x-P,M=y-w;for(isNaN(n)&&(n=Math.PI/10),e=e||0===e?+e:1,s=2;s<v;s+=2)r=P,a=w,P=x,w=y,p=(l=T)*l+(u=M)*u,d=(T=(x=+t[s+2])-P)*T+(M=(y=+t[s+3])-w)*M,m=(h=x-r)*h+(g=y-a)*g,c=(o=Math.acos((p+d-m)/Q(4*p*d)))/Math.PI*e,f=Q(p)*c,c*=Q(d),P===r&&w===a||(n<o?(i=L(g,h),b.push(O(P-Z(i)*f),O(w-U(i)*f),O(P),O(w),O(P+Z(i)*c),O(w+U(i)*c))):(i=L(u,l),b.push(O(P-Z(i)*f),O(w-U(i)*f)),i=L(M,T),b.push(O(P),O(w),O(P+Z(i)*c),O(w+U(i)*c))));return b.push(O(x),O(y),O(x),O(y)),b}function rawPathToString(t){l(t[0])&&(t=[t]);var e,n,r,a,o="",i=t.length;for(n=0;n<i;n++){for(a=t[n],o+="M"+O(a[0])+","+O(a[1])+" C",e=a.length,r=2;r<e;r++)o+=O(a[r++])+","+O(a[r++])+" "+O(a[r++])+","+O(a[r++])+" "+O(a[r++])+","+O(a[r])+" ";a.closed&&(o+="z")}return o}function S(t){return t.ownerSVGElement||("svg"===(t.tagName+"").toLowerCase()?t:null)}function T(t,e){if(t.parentNode&&(h||function _setDoc(t){var e=t.ownerDocument||t;!(P in t.style)&&"msTransform"in t.style&&(w=(P="msTransform")+"Origin");for(;e.parentNode&&(e=e.parentNode););return u=window,v=new G,e&&(g=(h=e).documentElement,f=e.body),e}(t))){var n=S(t),r=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",a=n?e?"rect":"g":"div",o=2!==e?0:100,i=3===e?100:0,s="position:absolute;display:block;",l=h.createElementNS?h.createElementNS(r.replace(/^https/,"http"),a):h.createElement(a);return e&&(n?(m=m||T(t),l.setAttribute("width",1),l.setAttribute("height",1),l.setAttribute("transform","translate("+o+","+i+")"),m.appendChild(l)):(c||((c=T(t)).style.cssText=s),l.style.cssText=s+"width:1px;height:1px;top:"+i+"px;left:"+o+"px",c.appendChild(l))),l}throw"Need document and parent."}function V(t,e,n,r,a,o,i){return t.a=e,t.b=n,t.c=r,t.d=a,t.e=o,t.f=i,t}var h,u,g,f,c,m,v,n,P="transform",w=P+"Origin",M=[],B=[],G=((n=Matrix2D.prototype).inverse=function inverse(){var t=this.a,e=this.b,n=this.c,r=this.d,a=this.e,o=this.f,i=t*r-e*n;return V(this,r/i,-e/i,-n/i,t/i,(n*o-r*a)/i,-(t*o-e*a)/i)},n.multiply=function multiply(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f,s=t.a,l=t.c,h=t.b,u=t.d,g=t.e,f=t.f;return V(this,s*e+h*r,s*n+h*a,l*e+u*r,l*n+u*a,o+g*e+f*r,i+g*n+f*a)},n.equals=function equals(t){var e=this.a,n=this.b,r=this.c,a=this.d,o=this.e,i=this.f;return e===t.a&&n===t.b&&r===t.c&&a===t.d&&o===t.e&&i===t.f},n.apply=function apply(t,e){void 0===e&&(e={});var n=t.x,r=t.y,a=this.a,o=this.b,i=this.c,s=this.d,l=this.e,h=this.f;return e.x=n*a+r*i+l,e.y=n*o+r*s+h,e},Matrix2D);function Matrix2D(t,e,n,r,a,o){void 0===t&&(t=1),void 0===e&&(e=0),void 0===n&&(n=0),void 0===r&&(r=1),void 0===a&&(a=0),void 0===o&&(o=0),V(this,t,e,n,r,a,o)}function getGlobalMatrix(t,e){if(!t.parentNode)return new G;var n=S(t)?M:B,r=function _placeSiblings(t){var e,n,r,a,o,i=S(t),s=t===i,l=i?M:B;return t===u?t:(l.length||l.push(T(t,1),T(t,2),T(t,3)),e=i?m:c,i?(r=s?{x:0,y:0}:t.getBBox(),(n=t.transform.baseVal).length?(a=(n=n.consolidate().matrix).a*r.x+n.c*r.y,o=n.b*r.x+n.d*r.y):(n=v,"g"===t.tagName.toLowerCase()?a=o=0:(a=r.x,o=r.y)),e.setAttribute("transform","matrix("+n.a+","+n.b+","+n.c+","+n.d+","+(n.e+a)+","+(n.f+o)+")"),(s?i:t.parentNode).appendChild(e)):(e.style.top=t.offsetTop+"px",e.style.left=t.offsetLeft+"px",n=u.getComputedStyle(t),e.style[P]=n[P],e.style[w]=n[w],t.parentNode.appendChild(e)),e)}(t),a=n[0].getBoundingClientRect(),o=n[1].getBoundingClientRect(),i=n[2].getBoundingClientRect(),s=r.parentNode,l=new G((o.left-a.left)/100,(o.top-a.top)/100,(i.left-a.left)/100,(i.top-a.top)/100,a.left+function _getDocScrollLeft(){return u.pageXOffset||h.scrollLeft||g.scrollLeft||f.scrollLeft||0}(),a.top+function _getDocScrollTop(){return u.pageYOffset||h.scrollTop||g.scrollTop||f.scrollTop||0}());return s.removeChild(r),e?l.inverse():l}
/*!
	 * MotionPathPlugin 3.0.0
	 * https://greensock.com
	 *
	 * @license Copyright 2008-2019, GreenSock. All rights reserved.
	 * Subject to the terms at https://greensock.com/standard-license or for
	 * Club GreenSock members, the agreement issued with that membership.
	 * @author: Jack Doyle, jack@greensock.com
	*/function da(t,e,n,r){for(var a=e.length,o=r,i=0;i<a;i++)t[o]=parseFloat(e[i][n]),o+=2;return t}function ea(t,e,n){return parseFloat(t._gsap.get(t,e,n||"px"))||0}function fa(t){var e,n=t[0],r=t[1];for(e=2;e<t.length;e+=2)n=t[e]+=n,r=t[e+1]+=r}function ga(t,e,n,r,a,o,i){return e="cubic"===i.type?[e]:(e.unshift(ea(n,r,i.unitX),a?ea(n,a,i.unitY):0),i.relative&&fa(e),[(a?pointsToSegment:flatPointsToSegment)(e,i.curviness)]),e=o(q(e,n,i)),$(t,n,r,e,"x",i.unitX),a&&$(t,n,a,e,"y",i.unitY),cacheRawPathMeasurements(e,i.resolution||(0===i.curviness?20:12))}function ha(t){return t}var I,k,E,j,X=["x","translateX","left","marginLeft"],Y=["y","translateY","top","marginTop"],o=Math.PI/180,q=function _align(t,e,n){var r,a,o,i,s,l,h,u,g,f,c=n.align,p=n.matrix,d=n.offsetX,m=n.offsetY;return t&&t.length?(c&&("self"===c||(s=j(c)[0]||e)===e?transformRawPath(t,1,0,0,1,r=ea(e,"x")-t[0][0],a=ea(e,"y")-t[0][1]):(o=I.to(e,{xPercent:0,yPercent:0,x:0,y:0}).progress(1),i=getGlobalMatrix(e),o.render(-1).kill(),a=s.getTotalLength&&"path"===s.tagName.toLowerCase()?(l=getRawPath(s),h=getGlobalMatrix(s.parentNode),r=l[0][0],l[0][1]):(h=getGlobalMatrix(s),r=0),g=h.a*r+h.c*a+h.e-i.e,f=h.b*r+h.d*a+h.f-i.f,r=(u=getGlobalMatrix(e.parentNode,!0)).a*g+u.c*f,a=u.b*g+u.d*f,g=t[0][0],f=t[0][1],h.multiply(u),r-=h.a*g+h.c*f,a-=h.b*g+h.d*f,transformRawPath(t,h.a,h.b,h.c,h.d,r,a))),p?transformRawPath(t,p.a,p.b,p.c,p.d,p.e,p.f):(d||m)&&transformRawPath(t,1,0,0,1,d||0,m||0),t):getRawPath("M0,0L0,0")},$=function _addDimensionalPropTween(t,e,n,r,a,o){var i=e._gsap,s=t._pt=new k(t._pt,e,n,0,0,ha,0,i.set(e,n,t));s.u=E(i.get(e,n,o))||0,s.path=r,s.pp=a,t._props.push(n)},a={version:"3.0.0",name:"motionPath",register:function register(t,e,n){E=(I=t).utils.getUnit,j=I.utils.toArray,k=n},init:function init(t,e){if(!I)return console.warn("Please gsap.registerPlugin(MotionPathPlugin)"),!1;"object"==typeof e&&!e.style&&e.path||(e={path:e});var n,r,a,o,i=[],s=e.path,l=s[0],h=e.autoRotate,u=function _sliceModifier(e,n){return function(t){return e||1!==n?sliceRawPath(t,e,n):t}}(e.start,"end"in e?e.end:1);if(this.rawPaths=i,this.target=t,(this.rotate=h||0===h)&&(this.rOffset=parseFloat(h)||0,this.radians=!!e.useRadians,this.rProp=e.rotation||"rotation",this.rSet=t._gsap.set(t,this.rProp,this),this.ru=E(t._gsap.get(t,this.rProp))||0),!Array.isArray(s)||"closed"in s||"number"==typeof l)cacheRawPathMeasurements(n=u(q(getRawPath(e.path),t,e)),e.resolution),i.push(n),$(this,t,e.x||"x",n,"x",e.unitX||"px"),$(this,t,e.y||"y",n,"y",e.unitY||"px");else{for(r in l)~X.indexOf(r)?a=r:~Y.indexOf(r)&&(o=r);for(r in a&&o?i.push(ga(this,da(da([],s,a,0),s,o,1),t,e.x||a,e.y||o,u,e)):a=o=0,l)r!==a&&r!==o&&i.push(ga(this,da([],s,r,0),t,r,0,u,e))}},render:function render(t,e){var n=e.rawPaths,r=n.length,a=e._pt;for(1<t?t=1:t<0&&(t=0);r--;)getPositionOnPath(n[r],t,!r&&e.rotate,n[r]);for(;a;)a.set(a.t,a.p,a.path[a.pp]+a.u,a.d,t),a=a._next;e.rotate&&e.rSet(e.target,e.rProp,n[0].angle*(e.radians?o:1)+e.rOffset+e.ru,e,t)},getLength:function getLength(t){return cacheRawPathMeasurements(getRawPath(t)).totalLength},sliceRawPath:sliceRawPath,getRawPath:getRawPath,pointsToSegment:pointsToSegment,stringToRawPath:stringToRawPath,rawPathToString:rawPathToString,transformRawPath:transformRawPath,convertToPath:function convertToPath$1(t,e){return j(t).map(function(t){return convertToPath(t,!1!==e)})},getGlobalMatrix:getGlobalMatrix,arrayToRawPath:function arrayToRawPath(t,e){var n=da(da([],t,(e=e||{}).x||"x",0),t,e.y||"y",1);return e.relative&&fa(n),["cubic"===e.type?n:pointsToSegment(n,e.curviness)]}};!function _getGSAP(){return I||"undefined"!=typeof window&&(I=window.gsap)&&I.registerPlugin&&I}()||I.registerPlugin(a),t.MotionPathPlugin=a,t.default=a,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=MotionPathPlugin.min.js.map


/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic main library.
 */
/**
 * @namespace ScrollMagic
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		module.exports = factory();
	} else {
		// Browser global
		root.ScrollMagic = factory();
	}
}(this, function () {
	"use strict";

	var ScrollMagic = function () {
		_util.log(2, '(COMPATIBILITY NOTICE) -> As of ScrollMagic 2.0.0 you need to use \'new ScrollMagic.Controller()\' to create a new controller instance. Use \'new ScrollMagic.Scene()\' to instance a scene.');
	};

	ScrollMagic.version = "2.0.8";

	// TODO: temporary workaround for chrome's scroll jitter bug
	if (typeof (window) !== 'undefined') {
		window.addEventListener("mousewheel", void(0));
	}

	// global const
	var PIN_SPACER_ATTRIBUTE = "data-scrollmagic-pin-spacer";

	/**
	 * The main class that is needed once per scroll container.
	 *
	 * @class
	 *
	 * @example
	 * // basic initialization
	 * var controller = new ScrollMagic.Controller();
	 *
	 * // passing options
	 * var controller = new ScrollMagic.Controller({container: "#myContainer", loglevel: 3});
	 *
	 * @param {object} [options] - An object containing one or more options for the controller.
	 * @param {(string|object)} [options.container=window] - A selector, DOM object that references the main container for scrolling.
	 * @param {boolean} [options.vertical=true] - Sets the scroll mode to vertical (`true`) or horizontal (`false`) scrolling.
	 * @param {object} [options.globalSceneOptions={}] - These options will be passed to every Scene that is added to the controller using the addScene method. For more information on Scene options see {@link ScrollMagic.Scene}.
	 * @param {number} [options.loglevel=2] Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
											 ** `0` => silent
											 ** `1` => errors
											 ** `2` => errors, warnings
											 ** `3` => errors, warnings, debuginfo
	 * @param {boolean} [options.refreshInterval=100] - Some changes don't call events by default, like changing the container size or moving a scene trigger element.  
	 																										 This interval polls these parameters to fire the necessary events.  
	 																										 If you don't use custom containers, trigger elements or have static layouts, where the positions of the trigger elements don't change, you can set this to 0 disable interval checking and improve performance.
	 *
	 */
	ScrollMagic.Controller = function (options) {
		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */
		var
			NAMESPACE = 'ScrollMagic.Controller',
			SCROLL_DIRECTION_FORWARD = 'FORWARD',
			SCROLL_DIRECTION_REVERSE = 'REVERSE',
			SCROLL_DIRECTION_PAUSED = 'PAUSED',
			DEFAULT_OPTIONS = CONTROLLER_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */
		var
			Controller = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_sceneObjects = [],
			_updateScenesOnNextCycle = false, // can be boolean (true => all scenes) or an array of scenes to be updated
			_scrollPos = 0,
			_scrollDirection = SCROLL_DIRECTION_PAUSED,
			_isDocument = true,
			_viewPortSize = 0,
			_enabled = true,
			_updateTimeout,
			_refreshTimeout;

		/*
		 * ----------------------------------------------------------------
		 * private functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Internal constructor function of the ScrollMagic Controller
		 * @private
		 */
		var construct = function () {
			for (var key in _options) {
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			_options.container = _util.get.elements(_options.container)[0];
			// check ScrollContainer
			if (!_options.container) {
				log(1, "ERROR creating object " + NAMESPACE + ": No valid scroll container supplied");
				throw NAMESPACE + " init failed."; // cancel
			}
			_isDocument = _options.container === window || _options.container === document.body || !document.body.contains(_options.container);
			// normalize to window
			if (_isDocument) {
				_options.container = window;
			}
			// update container size immediately
			_viewPortSize = getViewportSize();
			// set event handlers
			_options.container.addEventListener("resize", onChange);
			_options.container.addEventListener("scroll", onChange);

			var ri = parseInt(_options.refreshInterval, 10);
			_options.refreshInterval = _util.type.Number(ri) ? ri : DEFAULT_OPTIONS.refreshInterval;
			scheduleRefresh();

			log(3, "added new " + NAMESPACE + " controller (v" + ScrollMagic.version + ")");
		};

		/**
		 * Schedule the next execution of the refresh function
		 * @private
		 */
		var scheduleRefresh = function () {
			if (_options.refreshInterval > 0) {
				_refreshTimeout = window.setTimeout(refresh, _options.refreshInterval);
			}
		};

		/**
		 * Default function to get scroll pos - overwriteable using `Controller.scrollPos(newFunction)`
		 * @private
		 */
		var getScrollPos = function () {
			return _options.vertical ? _util.get.scrollTop(_options.container) : _util.get.scrollLeft(_options.container);
		};

		/**
		 * Returns the current viewport Size (width vor horizontal, height for vertical)
		 * @private
		 */
		var getViewportSize = function () {
			return _options.vertical ? _util.get.height(_options.container) : _util.get.width(_options.container);
		};

		/**
		 * Default function to set scroll pos - overwriteable using `Controller.scrollTo(newFunction)`
		 * Make available publicly for pinned mousewheel workaround.
		 * @private
		 */
		var setScrollPos = this._setScrollPos = function (pos) {
			if (_options.vertical) {
				if (_isDocument) {
					window.scrollTo(_util.get.scrollLeft(), pos);
				} else {
					_options.container.scrollTop = pos;
				}
			} else {
				if (_isDocument) {
					window.scrollTo(pos, _util.get.scrollTop());
				} else {
					_options.container.scrollLeft = pos;
				}
			}
		};

		/**
		 * Handle updates in cycles instead of on scroll (performance)
		 * @private
		 */
		var updateScenes = function () {
			if (_enabled && _updateScenesOnNextCycle) {
				// determine scenes to update
				var scenesToUpdate = _util.type.Array(_updateScenesOnNextCycle) ? _updateScenesOnNextCycle : _sceneObjects.slice(0);
				// reset scenes
				_updateScenesOnNextCycle = false;
				var oldScrollPos = _scrollPos;
				// update scroll pos now instead of onChange, as it might have changed since scheduling (i.e. in-browser smooth scroll)
				_scrollPos = Controller.scrollPos();
				var deltaScroll = _scrollPos - oldScrollPos;
				if (deltaScroll !== 0) { // scroll position changed?
					_scrollDirection = (deltaScroll > 0) ? SCROLL_DIRECTION_FORWARD : SCROLL_DIRECTION_REVERSE;
				}
				// reverse order of scenes if scrolling reverse
				if (_scrollDirection === SCROLL_DIRECTION_REVERSE) {
					scenesToUpdate.reverse();
				}
				// update scenes
				scenesToUpdate.forEach(function (scene, index) {
					log(3, "updating Scene " + (index + 1) + "/" + scenesToUpdate.length + " (" + _sceneObjects.length + " total)");
					scene.update(true);
				});
				if (scenesToUpdate.length === 0 && _options.loglevel >= 3) {
					log(3, "updating 0 Scenes (nothing added to controller)");
				}
			}
		};

		/**
		 * Initializes rAF callback
		 * @private
		 */
		var debounceUpdate = function () {
			_updateTimeout = _util.rAF(updateScenes);
		};

		/**
		 * Handles Container changes
		 * @private
		 */
		var onChange = function (e) {
			log(3, "event fired causing an update:", e.type);
			if (e.type == "resize") {
				// resize
				_viewPortSize = getViewportSize();
				_scrollDirection = SCROLL_DIRECTION_PAUSED;
			}
			// schedule update
			if (_updateScenesOnNextCycle !== true) {
				_updateScenesOnNextCycle = true;
				debounceUpdate();
			}
		};

		var refresh = function () {
			if (!_isDocument) {
				// simulate resize event. Only works for viewport relevant param (performance)
				if (_viewPortSize != getViewportSize()) {
					var resizeEvent;
					try {
						resizeEvent = new Event('resize', {
							bubbles: false,
							cancelable: false
						});
					} catch (e) { // stupid IE
						resizeEvent = document.createEvent("Event");
						resizeEvent.initEvent("resize", false, false);
					}
					_options.container.dispatchEvent(resizeEvent);
				}
			}
			_sceneObjects.forEach(function (scene, index) { // refresh all scenes
				scene.refresh();
			});
			scheduleRefresh();
		};

		/**
		 * Send a debug message to the console.
		 * provided publicly with _log for plugins
		 * @private
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};
		// for scenes we have getters for each option, but for the controller we don't, so we need to make it available externally for plugins
		this._options = _options;

		/**
		 * Sort scenes in ascending order of their start offset.
		 * @private
		 *
		 * @param {array} ScenesArray - an array of ScrollMagic Scenes that should be sorted
		 * @return {array} The sorted array of Scenes.
		 */
		var sortScenes = function (ScenesArray) {
			if (ScenesArray.length <= 1) {
				return ScenesArray;
			} else {
				var scenes = ScenesArray.slice(0);
				scenes.sort(function (a, b) {
					return a.scrollOffset() > b.scrollOffset() ? 1 : -1;
				});
				return scenes;
			}
		};

		/**
		 * ----------------------------------------------------------------
		 * public functions
		 * ----------------------------------------------------------------
		 */

		/**
		 * Add one ore more scene(s) to the controller.  
		 * This is the equivalent to `Scene.addTo(controller)`.
		 * @public
		 * @example
		 * // with a previously defined scene
		 * controller.addScene(scene);
		 *
		 * // with a newly created scene.
		 * controller.addScene(new ScrollMagic.Scene({duration : 0}));
		 *
		 * // adding multiple scenes
		 * controller.addScene([scene, scene2, new ScrollMagic.Scene({duration : 0})]);
		 *
		 * @param {(ScrollMagic.Scene|array)} newScene - ScrollMagic Scene or Array of Scenes to be added to the controller.
		 * @return {Controller} Parent object for chaining.
		 */
		this.addScene = function (newScene) {
			if (_util.type.Array(newScene)) {
				newScene.forEach(function (scene, index) {
					Controller.addScene(scene);
				});
			} else if (newScene instanceof ScrollMagic.Scene) {
				if (newScene.controller() !== Controller) {
					newScene.addTo(Controller);
				} else if (_sceneObjects.indexOf(newScene) < 0) {
					// new scene
					_sceneObjects.push(newScene); // add to array
					_sceneObjects = sortScenes(_sceneObjects); // sort
					newScene.on("shift.controller_sort", function () { // resort whenever scene moves
						_sceneObjects = sortScenes(_sceneObjects);
					});
					// insert Global defaults.
					for (var key in _options.globalSceneOptions) {
						if (newScene[key]) {
							newScene[key].call(newScene, _options.globalSceneOptions[key]);
						}
					}
					log(3, "adding Scene (now " + _sceneObjects.length + " total)");
				}
			} else {
				log(1, "ERROR: invalid argument supplied for '.addScene()'");
			}
			return Controller;
		};

		/**
		 * Remove one ore more scene(s) from the controller.  
		 * This is the equivalent to `Scene.remove()`.
		 * @public
		 * @example
		 * // remove a scene from the controller
		 * controller.removeScene(scene);
		 *
		 * // remove multiple scenes from the controller
		 * controller.removeScene([scene, scene2, scene3]);
		 *
		 * @param {(ScrollMagic.Scene|array)} Scene - ScrollMagic Scene or Array of Scenes to be removed from the controller.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.removeScene = function (Scene) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.removeScene(scene);
				});
			} else {
				var index = _sceneObjects.indexOf(Scene);
				if (index > -1) {
					Scene.off("shift.controller_sort");
					_sceneObjects.splice(index, 1);
					log(3, "removing Scene (now " + _sceneObjects.length + " left)");
					Scene.remove();
				}
			}
			return Controller;
		};

		/**
	 * Update one ore more scene(s) according to the scroll position of the container.  
	 * This is the equivalent to `Scene.update()`.  
	 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
	 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) â€“ Pins will be set to their correct position and tweens will be updated to their correct progress.  
	 * _**Note:** This method gets called constantly whenever Controller detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
	 * @public
	 * @example
	 * // update a specific scene on next cycle
 	 * controller.updateScene(scene);
 	 *
	 * // update a specific scene immediately
	 * controller.updateScene(scene, true);
 	 *
	 * // update multiple scenes scene on next cycle
	 * controller.updateScene([scene1, scene2, scene3]);
	 *
	 * @param {ScrollMagic.Scene} Scene - ScrollMagic Scene or Array of Scenes that is/are supposed to be updated.
	 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle.  
	 										  This is useful when changing multiple properties of the scene - this way it will only be updated once all new properties are set (updateScenes).
	 * @return {Controller} Parent object for chaining.
	 */
		this.updateScene = function (Scene, immediately) {
			if (_util.type.Array(Scene)) {
				Scene.forEach(function (scene, index) {
					Controller.updateScene(scene, immediately);
				});
			} else {
				if (immediately) {
					Scene.update(true);
				} else if (_updateScenesOnNextCycle !== true && Scene instanceof ScrollMagic.Scene) { // if _updateScenesOnNextCycle is true, all connected scenes are already scheduled for update
					// prep array for next update cycle
					_updateScenesOnNextCycle = _updateScenesOnNextCycle || [];
					if (_updateScenesOnNextCycle.indexOf(Scene) == -1) {
						_updateScenesOnNextCycle.push(Scene);
					}
					_updateScenesOnNextCycle = sortScenes(_updateScenesOnNextCycle); // sort
					debounceUpdate();
				}
			}
			return Controller;
		};

		/**
		 * Updates the controller params and calls updateScene on every scene, that is attached to the controller.  
		 * See `Controller.updateScene()` for more information about what this means.  
		 * In most cases you will not need this function, as it is called constantly, whenever ScrollMagic detects a state change event, like resize or scroll.  
		 * The only application for this method is when ScrollMagic fails to detect these events.  
		 * One application is with some external scroll libraries (like iScroll) that move an internal container to a negative offset instead of actually scrolling. In this case the update on the controller needs to be called whenever the child container's position changes.
		 * For this case there will also be the need to provide a custom function to calculate the correct scroll position. See `Controller.scrollPos()` for details.
		 * @public
		 * @example
		 * // update the controller on next cycle (saves performance due to elimination of redundant updates)
		 * controller.update();
		 *
		 * // update the controller immediately
		 * controller.update(true);
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance)
		 * @return {Controller} Parent object for chaining.
		 */
		this.update = function (immediately) {
			onChange({
				type: "resize"
			}); // will update size and set _updateScenesOnNextCycle to true
			if (immediately) {
				updateScenes();
			}
			return Controller;
		};

		/**
		 * Scroll to a numeric scroll offset, a DOM element, the start of a scene or provide an alternate method for scrolling.  
		 * For vertical controllers it will change the top scroll offset and for horizontal applications it will change the left offset.
		 * @public
		 *
		 * @since 1.1.0
		 * @example
		 * // scroll to an offset of 100
		 * controller.scrollTo(100);
		 *
		 * // scroll to a DOM element
		 * controller.scrollTo("#anchor");
		 *
		 * // scroll to the beginning of a scene
		 * var scene = new ScrollMagic.Scene({offset: 200});
		 * controller.scrollTo(scene);
		 *
		 * // define a new scroll position modification function (jQuery animate instead of jump)
		 * controller.scrollTo(function (newScrollPos) {
		 *	$("html, body").animate({scrollTop: newScrollPos});
		 * });
		 * controller.scrollTo(100); // call as usual, but the new function will be used instead
		 *
		 * // define a new scroll function with an additional parameter
		 * controller.scrollTo(function (newScrollPos, message) {
		 *  console.log(message);
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter to the defined custom function
		 * controller.scrollTo(100, "my message");
		 *
		 * // define a new scroll function with an additional parameter containing multiple variables
		 * controller.scrollTo(function (newScrollPos, options) {
		 *  someGlobalVar = options.a + options.b;
		 *	$(this).animate({scrollTop: newScrollPos});
		 * });
		 * // call as usual, but supply an extra parameter containing multiple options
		 * controller.scrollTo(100, {a: 1, b: 2});
		 *
		 * // define a new scroll function with a callback supplied as an additional parameter
		 * controller.scrollTo(function (newScrollPos, callback) {
		 *	$(this).animate({scrollTop: newScrollPos}, 400, "swing", callback);
		 * });
		 * // call as usual, but supply an extra parameter, which is used as a callback in the previously defined custom scroll function
		 * controller.scrollTo(100, function() {
		 *	console.log("scroll has finished.");
		 * });
		 *
		 * @param {mixed} scrollTarget - The supplied argument can be one of these types:
		 * 1. `number` -> The container will scroll to this new scroll offset.
		 * 2. `string` or `object` -> Can be a selector or a DOM object.  
		 *  The container will scroll to the position of this element.
		 * 3. `ScrollMagic Scene` -> The container will scroll to the start of this scene.
		 * 4. `function` -> This function will be used for future scroll position modifications.  
		 *  This provides a way for you to change the behaviour of scrolling and adding new behaviour like animation. The function receives the new scroll position as a parameter and a reference to the container element using `this`.  
		 *  It may also optionally receive an optional additional parameter (see below)  
		 *  _**NOTE:**  
		 *  All other options will still work as expected, using the new function to scroll._
		 * @param {mixed} [additionalParameter] - If a custom scroll function was defined (see above 4.), you may want to supply additional parameters to it, when calling it. You can do this using this parameter â€“ see examples for details. Please note, that this parameter will have no effect, if you use the default scrolling function.
		 * @returns {Controller} Parent object for chaining.
		 */
		this.scrollTo = function (scrollTarget, additionalParameter) {
			if (_util.type.Number(scrollTarget)) { // excecute
				setScrollPos.call(_options.container, scrollTarget, additionalParameter);
			} else if (scrollTarget instanceof ScrollMagic.Scene) { // scroll to scene
				if (scrollTarget.controller() === Controller) { // check if the controller is associated with this scene
					Controller.scrollTo(scrollTarget.scrollOffset(), additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied scene does not belong to this controller. Scroll cancelled.", scrollTarget);
				}
			} else if (_util.type.Function(scrollTarget)) { // assign new scroll function
				setScrollPos = scrollTarget;
			} else { // scroll to element
				var elem = _util.get.elements(scrollTarget)[0];
				if (elem) {
					// if parent is pin spacer, use spacer position instead so correct start position is returned for pinned elements.
					while (elem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
						elem = elem.parentNode;
					}

					var
						param = _options.vertical ? "top" : "left", // which param is of interest ?
						containerOffset = _util.get.offset(_options.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
						elementOffset = _util.get.offset(elem);

					if (!_isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
						containerOffset[param] -= Controller.scrollPos();
					}

					Controller.scrollTo(elementOffset[param] - containerOffset[param], additionalParameter);
				} else {
					log(2, "scrollTo(): The supplied argument is invalid. Scroll cancelled.", scrollTarget);
				}
			}
			return Controller;
		};

		/**
		 * **Get** the current scrollPosition or **Set** a new method to calculate it.  
		 * -> **GET**:
		 * When used as a getter this function will return the current scroll position.  
		 * To get a cached value use Controller.info("scrollPos"), which will be updated in the update cycle.  
		 * For vertical controllers it will return the top scroll offset and for horizontal applications it will return the left offset.
		 *
		 * -> **SET**:
		 * When used as a setter this method prodes a way to permanently overwrite the controller's scroll position calculation.  
		 * A typical usecase is when the scroll position is not reflected by the containers scrollTop or scrollLeft values, but for example by the inner offset of a child container.  
		 * Moving a child container inside a parent is a commonly used method for several scrolling frameworks, including iScroll.  
		 * By providing an alternate calculation function you can make sure ScrollMagic receives the correct scroll position.  
		 * Please also bear in mind that your function should return y values for vertical scrolls an x for horizontals.
		 *
		 * To change the current scroll position please use `Controller.scrollTo()`.
		 * @public
		 *
		 * @example
		 * // get the current scroll Position
		 * var scrollPos = controller.scrollPos();
		 *
		 * // set a new scroll position calculation method
		 * controller.scrollPos(function () {
		 *	return this.info("vertical") ? -mychildcontainer.y : -mychildcontainer.x
		 * });
		 *
		 * @param {function} [scrollPosMethod] - The function to be used for the scroll position calculation of the container.
		 * @returns {(number|Controller)} Current scroll position or parent object for chaining.
		 */
		this.scrollPos = function (scrollPosMethod) {
			if (!arguments.length) { // get
				return getScrollPos.call(Controller);
			} else { // set
				if (_util.type.Function(scrollPosMethod)) {
					getScrollPos = scrollPosMethod;
				} else {
					log(2, "Provided value for method 'scrollPos' is not a function. To change the current scroll position use 'scrollTo()'.");
				}
			}
			return Controller;
		};

		/**
		 * **Get** all infos or one in particular about the controller.
		 * @public
		 * @example
		 * // returns the current scroll position (number)
		 * var scrollPos = controller.info("scrollPos");
		 *
		 * // returns all infos as an object
		 * var infos = controller.info();
		 *
		 * @param {string} [about] - If passed only this info will be returned instead of an object containing all.  
		 							 Valid options are:
		 							 ** `"size"` => the current viewport size of the container
		 							 ** `"vertical"` => true if vertical scrolling, otherwise false
		 							 ** `"scrollPos"` => the current scroll position
		 							 ** `"scrollDirection"` => the last known direction of the scroll
		 							 ** `"container"` => the container element
		 							 ** `"isDocument"` => true if container element is the document.
		 * @returns {(mixed|object)} The requested info(s).
		 */
		this.info = function (about) {
			var values = {
				size: _viewPortSize, // contains height or width (in regard to orientation);
				vertical: _options.vertical,
				scrollPos: _scrollPos,
				scrollDirection: _scrollDirection,
				container: _options.container,
				isDocument: _isDocument
			};
			if (!arguments.length) { // get all as an object
				return values;
			} else if (values[about] !== undefined) {
				return values[about];
			} else {
				log(1, "ERROR: option \"" + about + "\" is not available");
				return;
			}
		};

		/**
		 * **Get** or **Set** the current loglevel option value.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var loglevel = controller.loglevel();
		 *
		 * // set a new value
		 * controller.loglevel(3);
		 *
		 * @param {number} [newLoglevel] - The new loglevel setting of the Controller. `[0-3]`
		 * @returns {(number|Controller)} Current loglevel or parent object for chaining.
		 */
		this.loglevel = function (newLoglevel) {
			if (!arguments.length) { // get
				return _options.loglevel;
			} else if (_options.loglevel != newLoglevel) { // set
				_options.loglevel = newLoglevel;
			}
			return Controller;
		};

		/**
		 * **Get** or **Set** the current enabled state of the controller.  
		 * This can be used to disable all Scenes connected to the controller without destroying or removing them.
		 * @public
		 *
		 * @example
		 * // get the current value
		 * var enabled = controller.enabled();
		 *
		 * // disable the controller
		 * controller.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the controller `true` or `false`.
		 * @returns {(boolean|Controller)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Controller.updateScene(_sceneObjects, true);
			}
			return Controller;
		};

		/**
		 * Destroy the Controller, all Scenes and everything.
		 * @public
		 *
		 * @example
		 * // without resetting the scenes
		 * controller = controller.destroy();
		 *
		 * // with scene reset
		 * controller = controller.destroy(true);
		 *
		 * @param {boolean} [resetScenes=false] - If `true` the pins and tweens (if existent) of all scenes will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (resetScenes) {
			window.clearTimeout(_refreshTimeout);
			var i = _sceneObjects.length;
			while (i--) {
				_sceneObjects[i].destroy(resetScenes);
			}
			_options.container.removeEventListener("resize", onChange);
			_options.container.removeEventListener("scroll", onChange);
			_util.cAF(_updateTimeout);
			log(3, "destroyed " + NAMESPACE + " (reset: " + (resetScenes ? "true" : "false") + ")");
			return null;
		};

		// INIT
		construct();
		return Controller;
	};

	// store pagewide controller options
	var CONTROLLER_OPTIONS = {
		defaults: {
			container: window,
			vertical: true,
			globalSceneOptions: {},
			loglevel: 2,
			refreshInterval: 100
		}
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 */
	ScrollMagic.Controller.addOption = function (name, defaultValue) {
		CONTROLLER_OPTIONS.defaults[name] = defaultValue;
	};
	// instance extension function for plugins
	ScrollMagic.Controller.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Controller = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Controller, oldClass); // copy properties
		ScrollMagic.Controller.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Controller.prototype.constructor = ScrollMagic.Controller; // restore constructor
	};


	/**
	 * A Scene defines where the controller should react and how.
	 *
	 * @class
	 *
	 * @example
	 * // create a standard scene and add it to a controller
	 * new ScrollMagic.Scene()
	 *		.addTo(controller);
	 *
	 * // create a scene with custom options and assign a handler to it.
	 * var scene = new ScrollMagic.Scene({
	 * 		duration: 100,
	 *		offset: 200,
	 *		triggerHook: "onEnter",
	 *		reverse: false
	 * });
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.  
	 							   Instead of setting the options for each scene individually you can also set them globally in the controller as the controllers `globalSceneOptions` option. The object accepts the same properties as the ones below.  
	 							   When a scene is added to the controller the options defined using the Scene constructor will be overwritten by those set in `globalSceneOptions`.
	 * @param {(number|string|function)} [options.duration=0] - The duration of the scene. 
	 					Please see `Scene.duration()` for details.
	 * @param {number} [options.offset=0] - Offset Value for the Trigger Position. If no triggerElement is defined this will be the scroll distance from the start of the page, after which the scene will start.
	 * @param {(string|object)} [options.triggerElement=null] - Selector or DOM object that defines the start of the scene. If undefined the scene will start right at the start of the page (unless an offset is set).
	 * @param {(number|string)} [options.triggerHook="onCenter"] - Can be a number between 0 and 1 defining the position of the trigger Hook in relation to the viewport.  
	 															  Can also be defined using a string:
	 															  ** `"onEnter"` => `1`
	 															  ** `"onCenter"` => `0.5`
	 															  ** `"onLeave"` => `0`
	 * @param {boolean} [options.reverse=true] - Should the scene reverse, when scrolling up?
	 * @param {number} [options.loglevel=2] - Loglevel for debugging. Note that logging is disabled in the minified version of ScrollMagic.
	 										  ** `0` => silent
	 										  ** `1` => errors
	 										  ** `2` => errors, warnings
	 										  ** `3` => errors, warnings, debuginfo
	 * 
	 */
	ScrollMagic.Scene = function (options) {

		/*
		 * ----------------------------------------------------------------
		 * settings
		 * ----------------------------------------------------------------
		 */

		var
			NAMESPACE = 'ScrollMagic.Scene',
			SCENE_STATE_BEFORE = 'BEFORE',
			SCENE_STATE_DURING = 'DURING',
			SCENE_STATE_AFTER = 'AFTER',
			DEFAULT_OPTIONS = SCENE_OPTIONS.defaults;

		/*
		 * ----------------------------------------------------------------
		 * private vars
		 * ----------------------------------------------------------------
		 */

		var
			Scene = this,
			_options = _util.extend({}, DEFAULT_OPTIONS, options),
			_state = SCENE_STATE_BEFORE,
			_progress = 0,
			_scrollOffset = {
				start: 0,
				end: 0
			}, // reflects the controllers's scroll position for the start and end of the scene respectively
			_triggerPos = 0,
			_enabled = true,
			_durationUpdateMethod,
			_controller;

		/**
		 * Internal constructor function of the ScrollMagic Scene
		 * @private
		 */
		var construct = function () {
			for (var key in _options) { // check supplied options
				if (!DEFAULT_OPTIONS.hasOwnProperty(key)) {
					log(2, "WARNING: Unknown option \"" + key + "\"");
					delete _options[key];
				}
			}
			// add getters/setters for all possible options
			for (var optionName in DEFAULT_OPTIONS) {
				addSceneOption(optionName);
			}
			// validate all options
			validateOption();
		};

		/*
		 * ----------------------------------------------------------------
		 * Event Management
		 * ----------------------------------------------------------------
		 */

		var _listeners = {};
		/**
		 * Scene start event.  
		 * Fires whenever the scroll position its the starting point of the scene.  
		 * It will also fire when scrolling back up going over the start position of the scene. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#start
		 *
		 * @example
		 * scene.on("start", function (event) {
		 * 	console.log("Hit start point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene end event.  
		 * Fires whenever the scroll position its the ending point of the scene.  
		 * It will also fire when scrolling back up from after the scene and going over its end position. If you want something to happen only when scrolling down/right, use the scrollDirection parameter passed to the callback.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#end
		 *
		 * @example
		 * scene.on("end", function (event) {
		 * 	console.log("Hit end point of scene.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene enter event.  
		 * Fires whenever the scene enters the "DURING" state.  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene enters its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#enter
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 * 	console.log("Scene entered.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene - always `"DURING"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene leave event.  
		 * Fires whenever the scene's state goes from "DURING" to either "BEFORE" or "AFTER".  
		 * Keep in mind that it doesn't matter if the scene plays forward or backward: This event always fires when the scene leaves its active scroll timeframe, regardless of the scroll-direction.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#leave
		 *
		 * @example
		 * scene.on("leave", function (event) {
		 * 	console.log("Scene left.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene update event.  
		 * Fires whenever the scene is updated (but not necessarily changes the progress).
		 *
		 * @event ScrollMagic.Scene#update
		 *
		 * @example
		 * scene.on("update", function (event) {
		 * 	console.log("Scene updated.");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.startPos - The starting position of the scene (in relation to the conainer)
		 * @property {number} event.endPos - The ending position of the scene (in relation to the conainer)
		 * @property {number} event.scrollPos - The current scroll position of the container
		 */
		/**
		 * Scene progress event.  
		 * Fires whenever the progress of the scene changes.
		 *
		 * For details on this event and the order in which it is fired, please review the {@link Scene.progress} method.
		 *
		 * @event ScrollMagic.Scene#progress
		 *
		 * @example
		 * scene.on("progress", function (event) {
		 * 	console.log("Scene progress changed to " + event.progress);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {number} event.progress - Reflects the current progress of the scene
		 * @property {string} event.state - The current state of the scene `"BEFORE"`, `"DURING"` or `"AFTER"`
		 * @property {string} event.scrollDirection - Indicates which way we are scrolling `"PAUSED"`, `"FORWARD"` or `"REVERSE"`
		 */
		/**
		 * Scene change event.  
		 * Fires whenvever a property of the scene is changed.
		 *
		 * @event ScrollMagic.Scene#change
		 *
		 * @example
		 * scene.on("change", function (event) {
		 * 	console.log("Scene Property \"" + event.what + "\" changed to " + event.newval);
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.what - Indicates what value has been changed
		 * @property {mixed} event.newval - The new value of the changed property
		 */
		/**
		 * Scene shift event.  
		 * Fires whenvever the start or end **scroll offset** of the scene change.
		 * This happens explicitely, when one of these values change: `offset`, `duration` or `triggerHook`.
		 * It will fire implicitly when the `triggerElement` changes, if the new element has a different position (most cases).
		 * It will also fire implicitly when the size of the container changes and the triggerHook is anything other than `onLeave`.
		 *
		 * @event ScrollMagic.Scene#shift
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("shift", function (event) {
		 * 	console.log("Scene moved, because the " + event.reason + " has changed.)");
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {string} event.reason - Indicates why the scene has shifted
		 */
		/**
		 * Scene destroy event.  
		 * Fires whenvever the scene is destroyed.
		 * This can be used to tidy up custom behaviour used in events.
		 *
		 * @event ScrollMagic.Scene#destroy
		 * @since 1.1.0
		 *
		 * @example
		 * scene.on("enter", function (event) {
		 *        // add custom action
		 *        $("#my-elem").left("200");
		 *      })
		 *      .on("destroy", function (event) {
		 *        // reset my element to start position
		 *        if (event.reset) {
		 *          $("#my-elem").left("0");
		 *        }
		 *      });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.reset - Indicates if the destroy method was called with reset `true` or `false`.
		 */
		/**
		 * Scene add event.  
		 * Fires when the scene is added to a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#add
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("add", function (event) {
		 * 	console.log('Scene was added to a new controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 * @property {boolean} event.controller - The controller object the scene was added to.
		 */
		/**
		 * Scene remove event.  
		 * Fires when the scene is removed from a controller.
		 * This is mostly used by plugins to know that change might be due.
		 *
		 * @event ScrollMagic.Scene#remove
		 * @since 2.0.0
		 *
		 * @example
		 * scene.on("remove", function (event) {
		 * 	console.log('Scene was removed from its controller.');
		 * });
		 *
		 * @property {object} event - The event Object passed to each callback
		 * @property {string} event.type - The name of the event
		 * @property {Scene} event.target - The Scene object that triggered this event
		 */

		/**
		 * Add one ore more event listener.  
		 * The callback function will be fired at the respective event, and an object containing relevant data will be passed to the callback.
		 * @method ScrollMagic.Scene#on
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update progress start end enter leave", callback);
		 *
		 * @param {string} names - The name or names of the event the callback should be attached to.
		 * @param {function} callback - A function that should be executed, when the event is dispatched. An event object will be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.on = function (names, callback) {
			if (_util.type.Function(callback)) {
				names = names.trim().split(' ');
				names.forEach(function (fullname) {
					var
						nameparts = fullname.split('.'),
						eventname = nameparts[0],
						namespace = nameparts[1];
					if (eventname != "*") { // disallow wildcards
						if (!_listeners[eventname]) {
							_listeners[eventname] = [];
						}
						_listeners[eventname].push({
							namespace: namespace || '',
							callback: callback
						});
					}
				});
			} else {
				log(1, "ERROR when calling '.on()': Supplied callback for '" + names + "' is not a valid function!");
			}
			return Scene;
		};

		/**
		 * Remove one or more event listener.
		 * @method ScrollMagic.Scene#off
		 *
		 * @example
		 * function callback (event) {
		 * 		console.log("Event fired! (" + event.type + ")");
		 * }
		 * // add listeners
		 * scene.on("change update", callback);
		 * // remove listeners
		 * scene.off("change update", callback);
		 *
		 * @param {string} names - The name or names of the event that should be removed.
		 * @param {function} [callback] - A specific callback function that should be removed. If none is passed all callbacks to the event listener will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.off = function (names, callback) {
			if (!names) {
				log(1, "ERROR: Invalid event name supplied.");
				return Scene;
			}
			names = names.trim().split(' ');
			names.forEach(function (fullname, key) {
				var
					nameparts = fullname.split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1] || '',
					removeList = eventname === '*' ? Object.keys(_listeners) : [eventname];
				removeList.forEach(function (remove) {
					var
						list = _listeners[remove] || [],
						i = list.length;
					while (i--) {
						var listener = list[i];
						if (listener && (namespace === listener.namespace || namespace === '*') && (!callback || callback == listener.callback)) {
							list.splice(i, 1);
						}
					}
					if (!list.length) {
						delete _listeners[remove];
					}
				});
			});
			return Scene;
		};

		/**
		 * Trigger an event.
		 * @method ScrollMagic.Scene#trigger
		 *
		 * @example
		 * this.trigger("change");
		 *
		 * @param {string} name - The name of the event that should be triggered.
		 * @param {object} [vars] - An object containing info that should be passed to the callback.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.trigger = function (name, vars) {
			if (name) {
				var
					nameparts = name.trim().split('.'),
					eventname = nameparts[0],
					namespace = nameparts[1],
					listeners = _listeners[eventname];
				log(3, 'event fired:', eventname, vars ? "->" : '', vars || '');
				if (listeners) {
					listeners.forEach(function (listener, key) {
						if (!namespace || namespace === listener.namespace) {
							listener.callback.call(Scene, new ScrollMagic.Event(eventname, listener.namespace, Scene, vars));
						}
					});
				}
			} else {
				log(1, "ERROR: Invalid event name supplied.");
			}
			return Scene;
		};

		// set event listeners
		Scene
			.on("change.internal", function (e) {
				if (e.what !== "loglevel" && e.what !== "tweenChanges") { // no need for a scene update scene with these options...
					if (e.what === "triggerElement") {
						updateTriggerElementPosition();
					} else if (e.what === "reverse") { // the only property left that may have an impact on the current scene state. Everything else is handled by the shift event.
						Scene.update();
					}
				}
			})
			.on("shift.internal", function (e) {
				updateScrollOffset();
				Scene.update(); // update scene to reflect new position
			});

		/**
		 * Send a debug message to the console.
		 * @private
		 * but provided publicly with _log for plugins
		 *
		 * @param {number} loglevel - The loglevel required to initiate output for the message.
		 * @param {...mixed} output - One or more variables that should be passed to the console.
		 */
		var log = this._log = function (loglevel, output) {
			if (_options.loglevel >= loglevel) {
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ") ->");
				_util.log.apply(window, arguments);
			}
		};

		/**
		 * Add the scene to a controller.  
		 * This is the equivalent to `Controller.addScene(scene)`.
		 * @method ScrollMagic.Scene#addTo
		 *
		 * @example
		 * // add a scene to a ScrollMagic Controller
		 * scene.addTo(controller);
		 *
		 * @param {ScrollMagic.Controller} controller - The controller to which the scene should be added.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.addTo = function (controller) {
			if (!(controller instanceof ScrollMagic.Controller)) {
				log(1, "ERROR: supplied argument of 'addTo()' is not a valid ScrollMagic Controller");
			} else if (_controller != controller) {
				// new controller
				if (_controller) { // was associated to a different controller before, so remove it...
					_controller.removeScene(Scene);
				}
				_controller = controller;
				validateOption();
				updateDuration(true);
				updateTriggerElementPosition(true);
				updateScrollOffset();
				_controller.info("container").addEventListener('resize', onContainerResize);
				controller.addScene(Scene);
				Scene.trigger("add", {
					controller: _controller
				});
				log(3, "added " + NAMESPACE + " to controller");
				Scene.update();
			}
			return Scene;
		};

		/**
		 * **Get** or **Set** the current enabled state of the scene.  
		 * This can be used to disable this scene without removing or destroying it.
		 * @method ScrollMagic.Scene#enabled
		 *
		 * @example
		 * // get the current value
		 * var enabled = scene.enabled();
		 *
		 * // disable the scene
		 * scene.enabled(false);
		 *
		 * @param {boolean} [newState] - The new enabled state of the scene `true` or `false`.
		 * @returns {(boolean|Scene)} Current enabled state or parent object for chaining.
		 */
		this.enabled = function (newState) {
			if (!arguments.length) { // get
				return _enabled;
			} else if (_enabled != newState) { // set
				_enabled = !!newState;
				Scene.update(true);
			}
			return Scene;
		};

		/**
		 * Remove the scene from the controller.  
		 * This is the equivalent to `Controller.removeScene(scene)`.
		 * The scene will not be updated anymore until you readd it to a controller.
		 * To remove the pin or the tween you need to call removeTween() or removePin() respectively.
		 * @method ScrollMagic.Scene#remove
		 * @example
		 * // remove the scene from its controller
		 * scene.remove();
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.remove = function () {
			if (_controller) {
				_controller.info("container").removeEventListener('resize', onContainerResize);
				var tmpParent = _controller;
				_controller = undefined;
				tmpParent.removeScene(Scene);
				Scene.trigger("remove");
				log(3, "removed " + NAMESPACE + " from controller");
			}
			return Scene;
		};

		/**
		 * Destroy the scene and everything.
		 * @method ScrollMagic.Scene#destroy
		 * @example
		 * // destroy the scene without resetting the pin and tween to their initial positions
		 * scene = scene.destroy();
		 *
		 * // destroy the scene and reset the pin and tween
		 * scene = scene.destroy(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the pin and tween (if existent) will be reset.
		 * @returns {null} Null to unset handler variables.
		 */
		this.destroy = function (reset) {
			Scene.trigger("destroy", {
				reset: reset
			});
			Scene.remove();
			Scene.off("*.*");
			log(3, "destroyed " + NAMESPACE + " (reset: " + (reset ? "true" : "false") + ")");
			return null;
		};


		/**
		 * Updates the Scene to reflect the current state.  
		 * This is the equivalent to `Controller.updateScene(scene, immediately)`.  
		 * The update method calculates the scene's start and end position (based on the trigger element, trigger hook, duration and offset) and checks it against the current scroll position of the container.  
		 * It then updates the current scene state accordingly (or does nothing, if the state is already correct) â€“ Pins will be set to their correct position and tweens will be updated to their correct progress.
		 * This means an update doesn't necessarily result in a progress change. The `progress` event will be fired if the progress has indeed changed between this update and the last.  
		 * _**NOTE:** This method gets called constantly whenever ScrollMagic detects a change. The only application for you is if you change something outside of the realm of ScrollMagic, like moving the trigger or changing tween parameters._
		 * @method ScrollMagic.Scene#update
		 * @example
		 * // update the scene on next tick
		 * scene.update();
		 *
		 * // update the scene immediately
		 * scene.update(true);
		 *
		 * @fires Scene.update
		 *
		 * @param {boolean} [immediately=false] - If `true` the update will be instant, if `false` it will wait until next update cycle (better performance).
		 * @returns {Scene} Parent object for chaining.
		 */
		this.update = function (immediately) {
			if (_controller) {
				if (immediately) {
					if (_controller.enabled() && _enabled) {
						var
							scrollPos = _controller.info("scrollPos"),
							newProgress;

						if (_options.duration > 0) {
							newProgress = (scrollPos - _scrollOffset.start) / (_scrollOffset.end - _scrollOffset.start);
						} else {
							newProgress = scrollPos >= _scrollOffset.start ? 1 : 0;
						}

						Scene.trigger("update", {
							startPos: _scrollOffset.start,
							endPos: _scrollOffset.end,
							scrollPos: scrollPos
						});

						Scene.progress(newProgress);
					} else if (_pin && _state === SCENE_STATE_DURING) {
						updatePinState(true); // unpin in position
					}
				} else {
					_controller.updateScene(Scene, false);
				}
			}
			return Scene;
		};

		/**
		 * Updates dynamic scene variables like the trigger element position or the duration.
		 * This method is automatically called in regular intervals from the controller. See {@link ScrollMagic.Controller} option `refreshInterval`.
		 * 
		 * You can call it to minimize lag, for example when you intentionally change the position of the triggerElement.
		 * If you don't it will simply be updated in the next refresh interval of the container, which is usually sufficient.
		 *
		 * @method ScrollMagic.Scene#refresh
		 * @since 1.1.0
		 * @example
		 * scene = new ScrollMagic.Scene({triggerElement: "#trigger"});
		 * 
		 * // change the position of the trigger
		 * $("#trigger").css("top", 500);
		 * // immediately let the scene know of this change
		 * scene.refresh();
		 *
		 * @fires {@link Scene.shift}, if the trigger element position or the duration changed
		 * @fires {@link Scene.change}, if the duration changed
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.refresh = function () {
			updateDuration();
			updateTriggerElementPosition();
			// update trigger element position
			return Scene;
		};

		/**
		 * **Get** or **Set** the scene's progress.  
		 * Usually it shouldn't be necessary to use this as a setter, as it is set automatically by scene.update().  
		 * The order in which the events are fired depends on the duration of the scene:
		 *  1. Scenes with `duration == 0`:  
		 *  Scenes that have no duration by definition have no ending. Thus the `end` event will never be fired.  
		 *  When the trigger position of the scene is passed the events are always fired in this order:  
		 *  `enter`, `start`, `progress` when scrolling forward  
		 *  and  
		 *  `progress`, `start`, `leave` when scrolling in reverse
		 *  2. Scenes with `duration > 0`:  
		 *  Scenes with a set duration have a defined start and end point.  
		 *  When scrolling past the start position of the scene it will fire these events in this order:  
		 *  `enter`, `start`, `progress`  
		 *  When continuing to scroll and passing the end point it will fire these events:  
		 *  `progress`, `end`, `leave`  
		 *  When reversing through the end point these events are fired:  
		 *  `enter`, `end`, `progress`  
		 *  And when continuing to scroll past the start position in reverse it will fire:  
		 *  `progress`, `start`, `leave`  
		 *  In between start and end the `progress` event will be called constantly, whenever the progress changes.
		 * 
		 * In short:  
		 * `enter` events will always trigger **before** the progress update and `leave` envents will trigger **after** the progress update.  
		 * `start` and `end` will always trigger at their respective position.
		 * 
		 * Please review the event descriptions for details on the events and the event object that is passed to the callback.
		 * 
		 * @method ScrollMagic.Scene#progress
		 * @example
		 * // get the current scene progress
		 * var progress = scene.progress();
		 *
		 * // set new scene progress
		 * scene.progress(0.3);
		 *
		 * @fires {@link Scene.enter}, when used as setter
		 * @fires {@link Scene.start}, when used as setter
		 * @fires {@link Scene.progress}, when used as setter
		 * @fires {@link Scene.end}, when used as setter
		 * @fires {@link Scene.leave}, when used as setter
		 *
		 * @param {number} [progress] - The new progress value of the scene `[0-1]`.
		 * @returns {number} `get` -  Current scene progress.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */
		this.progress = function (progress) {
			if (!arguments.length) { // get
				return _progress;
			} else { // set
				var
					doUpdate = false,
					oldState = _state,
					scrollDirection = _controller ? _controller.info("scrollDirection") : 'PAUSED',
					reverseOrForward = _options.reverse || progress >= _progress;
				if (_options.duration === 0) {
					// zero duration scenes
					doUpdate = _progress != progress;
					_progress = progress < 1 && reverseOrForward ? 0 : 1;
					_state = _progress === 0 ? SCENE_STATE_BEFORE : SCENE_STATE_DURING;
				} else {
					// scenes with start and end
					if (progress < 0 && _state !== SCENE_STATE_BEFORE && reverseOrForward) {
						// go back to initial state
						_progress = 0;
						_state = SCENE_STATE_BEFORE;
						doUpdate = true;
					} else if (progress >= 0 && progress < 1 && reverseOrForward) {
						_progress = progress;
						_state = SCENE_STATE_DURING;
						doUpdate = true;
					} else if (progress >= 1 && _state !== SCENE_STATE_AFTER) {
						_progress = 1;
						_state = SCENE_STATE_AFTER;
						doUpdate = true;
					} else if (_state === SCENE_STATE_DURING && !reverseOrForward) {
						updatePinState(); // in case we scrolled backwards mid-scene and reverse is disabled => update the pin position, so it doesn't move back as well.
					}
				}
				if (doUpdate) {
					// fire events
					var
						eventVars = {
							progress: _progress,
							state: _state,
							scrollDirection: scrollDirection
						},
						stateChanged = _state != oldState;

					var trigger = function (eventName) { // tmp helper to simplify code
						Scene.trigger(eventName, eventVars);
					};

					if (stateChanged) { // enter events
						if (oldState !== SCENE_STATE_DURING) {
							trigger("enter");
							trigger(oldState === SCENE_STATE_BEFORE ? "start" : "end");
						}
					}
					trigger("progress");
					if (stateChanged) { // leave events
						if (_state !== SCENE_STATE_DURING) {
							trigger(_state === SCENE_STATE_BEFORE ? "start" : "end");
							trigger("leave");
						}
					}
				}

				return Scene;
			}
		};


		/**
		 * Update the start and end scrollOffset of the container.
		 * The positions reflect what the controller's scroll position will be at the start and end respectively.
		 * Is called, when:
		 *   - Scene event "change" is called with: offset, triggerHook, duration 
		 *   - scroll container event "resize" is called
		 *   - the position of the triggerElement changes
		 *   - the controller changes -> addTo()
		 * @private
		 */
		var updateScrollOffset = function () {
			_scrollOffset = {
				start: _triggerPos + _options.offset
			};
			if (_controller && _options.triggerElement) {
				// take away triggerHook portion to get relative to top
				_scrollOffset.start -= _controller.info("size") * _options.triggerHook;
			}
			_scrollOffset.end = _scrollOffset.start + _options.duration;
		};

		/**
		 * Updates the duration if set to a dynamic function.
		 * This method is called when the scene is added to a controller and in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.change}, if the duration changed
		 * @fires {@link Scene.shift}, if the duration changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateDuration = function (suppressEvents) {
			// update duration
			if (_durationUpdateMethod) {
				var varname = "duration";
				if (changeOption(varname, _durationUpdateMethod.call(Scene)) && !suppressEvents) { // set
					Scene.trigger("change", {
						what: varname,
						newval: _options[varname]
					});
					Scene.trigger("shift", {
						reason: varname
					});
				}
			}
		};

		/**
		 * Updates the position of the triggerElement, if present.
		 * This method is called ...
		 *  - ... when the triggerElement is changed
		 *  - ... when the scene is added to a (new) controller
		 *  - ... in regular intervals from the controller through scene.refresh().
		 * 
		 * @fires {@link Scene.shift}, if the position changed
		 *
		 * @param {boolean} [suppressEvents=false] - If true the shift event will be suppressed.
		 * @private
		 */
		var updateTriggerElementPosition = function (suppressEvents) {
			var
				elementPos = 0,
				telem = _options.triggerElement;
			if (_controller && (telem || _triggerPos > 0)) { // either an element exists or was removed and the triggerPos is still > 0
				if (telem) { // there currently a triggerElement set
					if (telem.parentNode) { // check if element is still attached to DOM
						var
							controllerInfo = _controller.info(),
							containerOffset = _util.get.offset(controllerInfo.container), // container position is needed because element offset is returned in relation to document, not in relation to container.
							param = controllerInfo.vertical ? "top" : "left"; // which param is of interest ?

						// if parent is spacer, use spacer position instead so correct start position is returned for pinned elements.
						while (telem.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) {
							telem = telem.parentNode;
						}

						var elementOffset = _util.get.offset(telem);

						if (!controllerInfo.isDocument) { // container is not the document root, so substract scroll Position to get correct trigger element position relative to scrollcontent
							containerOffset[param] -= _controller.scrollPos();
						}

						elementPos = elementOffset[param] - containerOffset[param];

					} else { // there was an element, but it was removed from DOM
						log(2, "WARNING: triggerElement was removed from DOM and will be reset to", undefined);
						Scene.triggerElement(undefined); // unset, so a change event is triggered
					}
				}

				var changed = elementPos != _triggerPos;
				_triggerPos = elementPos;
				if (changed && !suppressEvents) {
					Scene.trigger("shift", {
						reason: "triggerElementPosition"
					});
				}
			}
		};

		/**
		 * Trigger a shift event, when the container is resized and the triggerHook is > 1.
		 * @private
		 */
		var onContainerResize = function (e) {
			if (_options.triggerHook > 0) {
				Scene.trigger("shift", {
					reason: "containerResize"
				});
			}
		};


		var _validate = _util.extend(SCENE_OPTIONS.validate, {
			// validation for duration handled internally for reference to private var _durationMethod
			duration: function (val) {
				if (_util.type.String(val) && val.match(/^(\.|\d)*\d+%$/)) {
					// percentage value
					var perc = parseFloat(val) / 100;
					val = function () {
						return _controller ? _controller.info("size") * perc : 0;
					};
				}
				if (_util.type.Function(val)) {
					// function
					_durationUpdateMethod = val;
					try {
						val = parseFloat(_durationUpdateMethod.call(Scene));
					} catch (e) {
						val = -1; // will cause error below
					}
				}
				// val has to be float
				val = parseFloat(val);
				if (!_util.type.Number(val) || val < 0) {
					if (_durationUpdateMethod) {
						_durationUpdateMethod = undefined;
						throw ["Invalid return value of supplied function for option \"duration\":", val];
					} else {
						throw ["Invalid value for option \"duration\":", val];
					}
				}
				return val;
			}
		});

		/**
		 * Checks the validity of a specific or all options and reset to default if neccessary.
		 * @private
		 */
		var validateOption = function (check) {
			check = arguments.length ? [check] : Object.keys(_validate);
			check.forEach(function (optionName, key) {
				var value;
				if (_validate[optionName]) { // there is a validation method for this option
					try { // validate value
						value = _validate[optionName](_options[optionName]);
					} catch (e) { // validation failed -> reset to default
						value = DEFAULT_OPTIONS[optionName];
						var logMSG = _util.type.String(e) ? [e] : e;
						if (_util.type.Array(logMSG)) {
							logMSG[0] = "ERROR: " + logMSG[0];
							logMSG.unshift(1); // loglevel 1 for error msg
							log.apply(this, logMSG);
						} else {
							log(1, "ERROR: Problem executing validation callback for option '" + optionName + "':", e.message);
						}
					} finally {
						_options[optionName] = value;
					}
				}
			});
		};

		/**
		 * Helper used by the setter/getters for scene options
		 * @private
		 */
		var changeOption = function (varname, newval) {
			var
				changed = false,
				oldval = _options[varname];
			if (_options[varname] != newval) {
				_options[varname] = newval;
				validateOption(varname); // resets to default if necessary
				changed = oldval != _options[varname];
			}
			return changed;
		};

		// generate getters/setters for all options
		var addSceneOption = function (optionName) {
			if (!Scene[optionName]) {
				Scene[optionName] = function (newVal) {
					if (!arguments.length) { // get
						return _options[optionName];
					} else {
						if (optionName === "duration") { // new duration is set, so any previously set function must be unset
							_durationUpdateMethod = undefined;
						}
						if (changeOption(optionName, newVal)) { // set
							Scene.trigger("change", {
								what: optionName,
								newval: _options[optionName]
							});
							if (SCENE_OPTIONS.shifts.indexOf(optionName) > -1) {
								Scene.trigger("shift", {
									reason: optionName
								});
							}
						}
					}
					return Scene;
				};
			}
		};

		/**
		 * **Get** or **Set** the duration option value.
		 *
		 * As a **setter** it accepts three types of parameters:
		 * 1. `number`: Sets the duration of the scene to exactly this amount of pixels.  
		 *   This means the scene will last for exactly this amount of pixels scrolled. Sub-Pixels are also valid.
		 *   A value of `0` means that the scene is 'open end' and no end will be triggered. Pins will never unpin and animations will play independently of scroll progress.
		 * 2. `string`: Always updates the duration relative to parent scroll container.  
		 *   For example `"100%"` will keep the duration always exactly at the inner height of the scroll container.
		 *   When scrolling vertically the width is used for reference respectively.
		 * 3. `function`: The supplied function will be called to return the scene duration.
		 *   This is useful in setups where the duration depends on other elements who might change size. By supplying a function you can return a value instead of updating potentially multiple scene durations.  
		 *   The scene can be referenced inside the callback using `this`.
		 *   _**WARNING:** This is an easy way to kill performance, as the callback will be executed every time `Scene.refresh()` is called, which happens a lot. The interval is defined by the controller (see ScrollMagic.Controller option `refreshInterval`).  
		 *   It's recomended to avoid calculations within the function and use cached variables as return values.  
		 *   This counts double if you use the same function for multiple scenes._
		 *
		 * @method ScrollMagic.Scene#duration
		 * @example
		 * // get the current duration value
		 * var duration = scene.duration();
		 *
		 * // set a new duration
		 * scene.duration(300);
		 *
		 * // set duration responsively to container size
		 * scene.duration("100%");
		 *
		 * // use a function to randomize the duration for some reason.
		 * var durationValueCache;
		 * function durationCallback () {
		 *   return durationValueCache;
		 * }
		 * function updateDuration () {
		 *   durationValueCache = Math.random() * 100;
		 * }
		 * updateDuration(); // set to initial value
		 * scene.duration(durationCallback); // set duration callback
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string|function)} [newDuration] - The new duration setting for the scene.
		 * @returns {number} `get` -  Current scene duration.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the offset option value.
		 * @method ScrollMagic.Scene#offset
		 * @example
		 * // get the current offset
		 * var offset = scene.offset();
		 *
		 * // set a new offset
		 * scene.offset(100);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {number} [newOffset] - The new offset of the scene.
		 * @returns {number} `get` -  Current scene offset.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerElement option value.
		 * Does **not** fire `Scene.shift`, because changing the trigger Element doesn't necessarily mean the start position changes. This will be determined in `Scene.refresh()`, which is automatically triggered.
		 * @method ScrollMagic.Scene#triggerElement
		 * @example
		 * // get the current triggerElement
		 * var triggerElement = scene.triggerElement();
		 *
		 * // set a new triggerElement using a selector
		 * scene.triggerElement("#trigger");
		 * // set a new triggerElement using a DOM object
		 * scene.triggerElement(document.getElementById("trigger"));
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {(string|object)} [newTriggerElement] - The new trigger element for the scene.
		 * @returns {(string|object)} `get` -  Current triggerElement.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the triggerHook option value.
		 * @method ScrollMagic.Scene#triggerHook
		 * @example
		 * // get the current triggerHook value
		 * var triggerHook = scene.triggerHook();
		 *
		 * // set a new triggerHook using a string
		 * scene.triggerHook("onLeave");
		 * // set a new triggerHook using a number
		 * scene.triggerHook(0.7);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @fires {@link Scene.shift}, when used as setter
		 * @param {(number|string)} [newTriggerHook] - The new triggerHook of the scene. See {@link Scene} parameter description for value options.
		 * @returns {number} `get` -  Current triggerHook (ALWAYS numerical).
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the reverse option value.
		 * @method ScrollMagic.Scene#reverse
		 * @example
		 * // get the current reverse option
		 * var reverse = scene.reverse();
		 *
		 * // set new reverse option
		 * scene.reverse(false);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {boolean} [newReverse] - The new reverse setting of the scene.
		 * @returns {boolean} `get` -  Current reverse option value.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** or **Set** the loglevel option value.
		 * @method ScrollMagic.Scene#loglevel
		 * @example
		 * // get the current loglevel
		 * var loglevel = scene.loglevel();
		 *
		 * // set new loglevel
		 * scene.loglevel(3);
		 *
		 * @fires {@link Scene.change}, when used as setter
		 * @param {number} [newLoglevel] - The new loglevel setting of the scene. `[0-3]`
		 * @returns {number} `get` -  Current loglevel.
		 * @returns {Scene} `set` -  Parent object for chaining.
		 */

		/**
		 * **Get** the associated controller.
		 * @method ScrollMagic.Scene#controller
		 * @example
		 * // get the controller of a scene
		 * var controller = scene.controller();
		 *
		 * @returns {ScrollMagic.Controller} Parent controller or `undefined`
		 */
		this.controller = function () {
			return _controller;
		};

		/**
		 * **Get** the current state.
		 * @method ScrollMagic.Scene#state
		 * @example
		 * // get the current state
		 * var state = scene.state();
		 *
		 * @returns {string} `"BEFORE"`, `"DURING"` or `"AFTER"`
		 */
		this.state = function () {
			return _state;
		};

		/**
		 * **Get** the current scroll offset for the start of the scene.  
		 * Mind, that the scrollOffset is related to the size of the container, if `triggerHook` is bigger than `0` (or `"onLeave"`).  
		 * This means, that resizing the container or changing the `triggerHook` will influence the scene's start offset.
		 * @method ScrollMagic.Scene#scrollOffset
		 * @example
		 * // get the current scroll offset for the start and end of the scene.
		 * var start = scene.scrollOffset();
		 * var end = scene.scrollOffset() + scene.duration();
		 * console.log("the scene starts at", start, "and ends at", end);
		 *
		 * @returns {number} The scroll offset (of the container) at which the scene will trigger. Y value for vertical and X value for horizontal scrolls.
		 */
		this.scrollOffset = function () {
			return _scrollOffset.start;
		};

		/**
		 * **Get** the trigger position of the scene (including the value of the `offset` option).  
		 * @method ScrollMagic.Scene#triggerPosition
		 * @example
		 * // get the scene's trigger position
		 * var triggerPosition = scene.triggerPosition();
		 *
		 * @returns {number} Start position of the scene. Top position value for vertical and left position value for horizontal scrolls.
		 */
		this.triggerPosition = function () {
			var pos = _options.offset; // the offset is the basis
			if (_controller) {
				// get the trigger position
				if (_options.triggerElement) {
					// Element as trigger
					pos += _triggerPos;
				} else {
					// return the height of the triggerHook to start at the beginning
					pos += _controller.info("size") * Scene.triggerHook();
				}
			}
			return pos;
		};


		var
			_pin,
			_pinOptions;

		Scene
			.on("shift.internal", function (e) {
				var durationChanged = e.reason === "duration";
				if ((_state === SCENE_STATE_AFTER && durationChanged) || (_state === SCENE_STATE_DURING && _options.duration === 0)) {
					// if [duration changed after a scene (inside scene progress updates pin position)] or [duration is 0, we are in pin phase and some other value changed].
					updatePinState();
				}
				if (durationChanged) {
					updatePinDimensions();
				}
			})
			.on("progress.internal", function (e) {
				updatePinState();
			})
			.on("add.internal", function (e) {
				updatePinDimensions();
			})
			.on("destroy.internal", function (e) {
				Scene.removePin(e.reset);
			});
		/**
		 * Update the pin state.
		 * @private
		 */
		var updatePinState = function (forceUnpin) {
			if (_pin && _controller) {
				var
					containerInfo = _controller.info(),
					pinTarget = _pinOptions.spacer.firstChild; // may be pin element or another spacer, if cascading pins

				if (!forceUnpin && _state === SCENE_STATE_DURING) { // during scene or if duration is 0 and we are past the trigger
					// pinned state
					if (_util.css(pinTarget, "position") != "fixed") {
						// change state before updating pin spacer (position changes due to fixed collapsing might occur.)
						_util.css(pinTarget, {
							"position": "fixed"
						});
						// update pin spacer
						updatePinDimensions();
					}

					var
						fixedPos = _util.get.offset(_pinOptions.spacer, true), // get viewport position of spacer
						scrollDistance = _options.reverse || _options.duration === 0 ?
						containerInfo.scrollPos - _scrollOffset.start // quicker
						:
						Math.round(_progress * _options.duration * 10) / 10; // if no reverse and during pin the position needs to be recalculated using the progress

					// add scrollDistance
					fixedPos[containerInfo.vertical ? "top" : "left"] += scrollDistance;

					// set new values
					_util.css(_pinOptions.spacer.firstChild, {
						top: fixedPos.top,
						left: fixedPos.left
					});
				} else {
					// unpinned state
					var
						newCSS = {
							position: _pinOptions.inFlow ? "relative" : "absolute",
							top: 0,
							left: 0
						},
						change = _util.css(pinTarget, "position") != newCSS.position;

					if (!_pinOptions.pushFollowers) {
						newCSS[containerInfo.vertical ? "top" : "left"] = _options.duration * _progress;
					} else if (_options.duration > 0) { // only concerns scenes with duration
						if (_state === SCENE_STATE_AFTER && parseFloat(_util.css(_pinOptions.spacer, "padding-top")) === 0) {
							change = true; // if in after state but havent updated spacer yet (jumped past pin)
						} else if (_state === SCENE_STATE_BEFORE && parseFloat(_util.css(_pinOptions.spacer, "padding-bottom")) === 0) { // before
							change = true; // jumped past fixed state upward direction
						}
					}
					// set new values
					_util.css(pinTarget, newCSS);
					if (change) {
						// update pin spacer if state changed
						updatePinDimensions();
					}
				}
			}
		};

		/**
		 * Update the pin spacer and/or element size.
		 * The size of the spacer needs to be updated whenever the duration of the scene changes, if it is to push down following elements.
		 * @private
		 */
		var updatePinDimensions = function () {
			if (_pin && _controller && _pinOptions.inFlow) { // no spacerresize, if original position is absolute
				var
					after = (_state === SCENE_STATE_AFTER),
					before = (_state === SCENE_STATE_BEFORE),
					during = (_state === SCENE_STATE_DURING),
					vertical = _controller.info("vertical"),
					pinTarget = _pinOptions.spacer.firstChild, // usually the pined element but can also be another spacer (cascaded pins)
					marginCollapse = _util.isMarginCollapseType(_util.css(_pinOptions.spacer, "display")),
					css = {};

				// set new size
				// if relsize: spacer -> pin | else: pin -> spacer
				if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
					if (during) {
						_util.css(_pin, {
							"width": _util.get.width(_pinOptions.spacer)
						});
					} else {
						_util.css(_pin, {
							"width": "100%"
						});
					}
				} else {
					// minwidth is needed for cascaded pins.
					css["min-width"] = _util.get.width(vertical ? _pin : pinTarget, true, true);
					css.width = during ? css["min-width"] : "auto";
				}
				if (_pinOptions.relSize.height) {
					if (during) {
						// the only padding the spacer should ever include is the duration (if pushFollowers = true), so we need to substract that.
						_util.css(_pin, {
							"height": _util.get.height(_pinOptions.spacer) - (_pinOptions.pushFollowers ? _options.duration : 0)
						});
					} else {
						_util.css(_pin, {
							"height": "100%"
						});
					}
				} else {
					// margin is only included if it's a cascaded pin to resolve an IE9 bug
					css["min-height"] = _util.get.height(vertical ? pinTarget : _pin, true, !marginCollapse); // needed for cascading pins
					css.height = during ? css["min-height"] : "auto";
				}

				// add space for duration if pushFollowers is true
				if (_pinOptions.pushFollowers) {
					css["padding" + (vertical ? "Top" : "Left")] = _options.duration * _progress;
					css["padding" + (vertical ? "Bottom" : "Right")] = _options.duration * (1 - _progress);
				}
				_util.css(_pinOptions.spacer, css);
			}
		};

		/**
		 * Updates the Pin state (in certain scenarios)
		 * If the controller container is not the document and we are mid-pin-phase scrolling or resizing the main document can result to wrong pin positions.
		 * So this function is called on resize and scroll of the document.
		 * @private
		 */
		var updatePinInContainer = function () {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) {
				updatePinState();
			}
		};

		/**
		 * Updates the Pin spacer size state (in certain scenarios)
		 * If container is resized during pin and relatively sized the size of the pin might need to be updated...
		 * So this function is called on resize of the container.
		 * @private
		 */
		var updateRelativePinSpacer = function () {
			if (_controller && _pin && // well, duh
				_state === SCENE_STATE_DURING && // element in pinned state?
				( // is width or height relatively sized, but not in relation to body? then we need to recalc.
					((_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) && _util.get.width(window) != _util.get.width(_pinOptions.spacer.parentNode)) ||
					(_pinOptions.relSize.height && _util.get.height(window) != _util.get.height(_pinOptions.spacer.parentNode))
				)
			) {
				updatePinDimensions();
			}
		};

		/**
		 * Is called, when the mousewhel is used while over a pinned element inside a div container.
		 * If the scene is in fixed state scroll events would be counted towards the body. This forwards the event to the scroll container.
		 * @private
		 */
		var onMousewheelOverPin = function (e) {
			if (_controller && _pin && _state === SCENE_STATE_DURING && !_controller.info("isDocument")) { // in pin state
				e.preventDefault();
				_controller._setScrollPos(_controller.info("scrollPos") - ((e.wheelDelta || e[_controller.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || -e.detail * 30));
			}
		};

		/**
		 * Pin an element for the duration of the scene.
		 * If the scene duration is 0 the element will only be unpinned, if the user scrolls back past the start position.  
		 * Make sure only one pin is applied to an element at the same time.
		 * An element can be pinned multiple times, but only successively.
		 * _**NOTE:** The option `pushFollowers` has no effect, when the scene duration is 0._
		 * @method ScrollMagic.Scene#setPin
		 * @example
		 * // pin element and push all following elements down by the amount of the pin duration.
		 * scene.setPin("#pin");
		 *
		 * // pin element and keeping all following elements in their place. The pinned element will move past them.
		 * scene.setPin("#pin", {pushFollowers: false});
		 *
		 * @param {(string|object)} element - A Selector targeting an element or a DOM object that is supposed to be pinned.
		 * @param {object} [settings] - settings for the pin
		 * @param {boolean} [settings.pushFollowers=true] - If `true` following elements will be "pushed" down for the duration of the pin, if `false` the pinned element will just scroll past them.  
		 												   Ignored, when duration is `0`.
		 * @param {string} [settings.spacerClass="scrollmagic-pin-spacer"] - Classname of the pin spacer element, which is used to replace the element.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setPin = function (element, settings) {
			var
				defaultSettings = {
					pushFollowers: true,
					spacerClass: "scrollmagic-pin-spacer"
				};
			var pushFollowersActivelySet = settings && settings.hasOwnProperty('pushFollowers');
			settings = _util.extend({}, defaultSettings, settings);

			// validate Element
			element = _util.get.elements(element)[0];
			if (!element) {
				log(1, "ERROR calling method 'setPin()': Invalid pin element supplied.");
				return Scene; // cancel
			} else if (_util.css(element, "position") === "fixed") {
				log(1, "ERROR calling method 'setPin()': Pin does not work with elements that are positioned 'fixed'.");
				return Scene; // cancel
			}

			if (_pin) { // preexisting pin?
				if (_pin === element) {
					// same pin we already have -> do nothing
					return Scene; // cancel
				} else {
					// kill old pin
					Scene.removePin();
				}

			}
			_pin = element;

			var
				parentDisplay = _pin.parentNode.style.display,
				boundsParams = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];

			_pin.parentNode.style.display = 'none'; // hack start to force css to return stylesheet values instead of calculated px values.
			var
				inFlow = _util.css(_pin, "position") != "absolute",
				pinCSS = _util.css(_pin, boundsParams.concat(["display"])),
				sizeCSS = _util.css(_pin, ["width", "height"]);
			_pin.parentNode.style.display = parentDisplay; // hack end.

			if (!inFlow && settings.pushFollowers) {
				log(2, "WARNING: If the pinned element is positioned absolutely pushFollowers will be disabled.");
				settings.pushFollowers = false;
			}
			window.setTimeout(function () { // wait until all finished, because with responsive duration it will only be set after scene is added to controller
				if (_pin && _options.duration === 0 && pushFollowersActivelySet && settings.pushFollowers) {
					log(2, "WARNING: pushFollowers =", true, "has no effect, when scene duration is 0.");
				}
			}, 0);

			// create spacer and insert
			var
				spacer = _pin.parentNode.insertBefore(document.createElement('div'), _pin),
				spacerCSS = _util.extend(pinCSS, {
					position: inFlow ? "relative" : "absolute",
					boxSizing: "content-box",
					mozBoxSizing: "content-box",
					webkitBoxSizing: "content-box"
				});

			if (!inFlow) { // copy size if positioned absolutely, to work for bottom/right positioned elements.
				_util.extend(spacerCSS, _util.css(_pin, ["width", "height"]));
			}

			_util.css(spacer, spacerCSS);
			spacer.setAttribute(PIN_SPACER_ATTRIBUTE, "");
			_util.addClass(spacer, settings.spacerClass);

			// set the pin Options
			_pinOptions = {
				spacer: spacer,
				relSize: { // save if size is defined using % values. if so, handle spacer resize differently...
					width: sizeCSS.width.slice(-1) === "%",
					height: sizeCSS.height.slice(-1) === "%",
					autoFullWidth: sizeCSS.width === "auto" && inFlow && _util.isMarginCollapseType(pinCSS.display)
				},
				pushFollowers: settings.pushFollowers,
				inFlow: inFlow, // stores if the element takes up space in the document flow
			};

			if (!_pin.___origStyle) {
				_pin.___origStyle = {};
				var
					pinInlineCSS = _pin.style,
					copyStyles = boundsParams.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]);
				copyStyles.forEach(function (val) {
					_pin.___origStyle[val] = pinInlineCSS[val] || "";
				});
			}

			// if relative size, transfer it to spacer and make pin calculate it...
			if (_pinOptions.relSize.width) {
				_util.css(spacer, {
					width: sizeCSS.width
				});
			}
			if (_pinOptions.relSize.height) {
				_util.css(spacer, {
					height: sizeCSS.height
				});
			}

			// now place the pin element inside the spacer	
			spacer.appendChild(_pin);
			// and set new css
			_util.css(_pin, {
				position: inFlow ? "relative" : "absolute",
				margin: "auto",
				top: "auto",
				left: "auto",
				bottom: "auto",
				right: "auto"
			});

			if (_pinOptions.relSize.width || _pinOptions.relSize.autoFullWidth) {
				_util.css(_pin, {
					boxSizing: "border-box",
					mozBoxSizing: "border-box",
					webkitBoxSizing: "border-box"
				});
			}

			// add listener to document to update pin position in case controller is not the document.
			window.addEventListener('scroll', updatePinInContainer);
			window.addEventListener('resize', updatePinInContainer);
			window.addEventListener('resize', updateRelativePinSpacer);
			// add mousewheel listener to catch scrolls over fixed elements
			_pin.addEventListener("mousewheel", onMousewheelOverPin);
			_pin.addEventListener("DOMMouseScroll", onMousewheelOverPin);

			log(3, "added pin");

			// finally update the pin to init
			updatePinState();

			return Scene;
		};

		/**
		 * Remove the pin from the scene.
		 * @method ScrollMagic.Scene#removePin
		 * @example
		 * // remove the pin from the scene without resetting it (the spacer is not removed)
		 * scene.removePin();
		 *
		 * // remove the pin from the scene and reset the pin element to its initial position (spacer is removed)
		 * scene.removePin(true);
		 *
		 * @param {boolean} [reset=false] - If `false` the spacer will not be removed and the element's position will not be reset.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removePin = function (reset) {
			if (_pin) {
				if (_state === SCENE_STATE_DURING) {
					updatePinState(true); // force unpin at position
				}
				if (reset || !_controller) { // if there's no controller no progress was made anyway...
					var pinTarget = _pinOptions.spacer.firstChild; // usually the pin element, but may be another spacer (cascaded pins)...
					if (pinTarget.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // copy margins to child spacer
						var
							style = _pinOptions.spacer.style,
							values = ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"],
							margins = {};
						values.forEach(function (val) {
							margins[val] = style[val] || "";
						});
						_util.css(pinTarget, margins);
					}
					_pinOptions.spacer.parentNode.insertBefore(pinTarget, _pinOptions.spacer);
					_pinOptions.spacer.parentNode.removeChild(_pinOptions.spacer);
					if (!_pin.parentNode.hasAttribute(PIN_SPACER_ATTRIBUTE)) { // if it's the last pin for this element -> restore inline styles
						// TODO: only correctly set for first pin (when cascading) - how to fix?
						_util.css(_pin, _pin.___origStyle);
						delete _pin.___origStyle;
					}
				}
				window.removeEventListener('scroll', updatePinInContainer);
				window.removeEventListener('resize', updatePinInContainer);
				window.removeEventListener('resize', updateRelativePinSpacer);
				_pin.removeEventListener("mousewheel", onMousewheelOverPin);
				_pin.removeEventListener("DOMMouseScroll", onMousewheelOverPin);
				_pin = undefined;
				log(3, "removed pin (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};


		var
			_cssClasses,
			_cssClassElems = [];

		Scene
			.on("destroy.internal", function (e) {
				Scene.removeClassToggle(e.reset);
			});
		/**
		 * Define a css class modification while the scene is active.  
		 * When the scene triggers the classes will be added to the supplied element and removed, when the scene is over.
		 * If the scene duration is 0 the classes will only be removed if the user scrolls back past the start position.
		 * @method ScrollMagic.Scene#setClassToggle
		 * @example
		 * // add the class 'myclass' to the element with the id 'my-elem' for the duration of the scene
		 * scene.setClassToggle("#my-elem", "myclass");
		 *
		 * // add multiple classes to multiple elements defined by the selector '.classChange'
		 * scene.setClassToggle(".classChange", "class1 class2 class3");
		 *
		 * @param {(string|object)} element - A Selector targeting one or more elements or a DOM object that is supposed to be modified.
		 * @param {string} classes - One or more Classnames (separated by space) that should be added to the element during the scene.
		 *
		 * @returns {Scene} Parent object for chaining.
		 */
		this.setClassToggle = function (element, classes) {
			var elems = _util.get.elements(element);
			if (elems.length === 0 || !_util.type.String(classes)) {
				log(1, "ERROR calling method 'setClassToggle()': Invalid " + (elems.length === 0 ? "element" : "classes") + " supplied.");
				return Scene;
			}
			if (_cssClassElems.length > 0) {
				// remove old ones
				Scene.removeClassToggle();
			}
			_cssClasses = classes;
			_cssClassElems = elems;
			Scene.on("enter.internal_class leave.internal_class", function (e) {
				var toggle = e.type === "enter" ? _util.addClass : _util.removeClass;
				_cssClassElems.forEach(function (elem, key) {
					toggle(elem, _cssClasses);
				});
			});
			return Scene;
		};

		/**
		 * Remove the class binding from the scene.
		 * @method ScrollMagic.Scene#removeClassToggle
		 * @example
		 * // remove class binding from the scene without reset
		 * scene.removeClassToggle();
		 *
		 * // remove class binding and remove the changes it caused
		 * scene.removeClassToggle(true);
		 *
		 * @param {boolean} [reset=false] - If `false` and the classes are currently active, they will remain on the element. If `true` they will be removed.
		 * @returns {Scene} Parent object for chaining.
		 */
		this.removeClassToggle = function (reset) {
			if (reset) {
				_cssClassElems.forEach(function (elem, key) {
					_util.removeClass(elem, _cssClasses);
				});
			}
			Scene.off("start.internal_class end.internal_class");
			_cssClasses = undefined;
			_cssClassElems = [];
			return Scene;
		};

		// INIT
		construct();
		return Scene;
	};

	// store pagewide scene options
	var SCENE_OPTIONS = {
		defaults: {
			duration: 0,
			offset: 0,
			triggerElement: undefined,
			triggerHook: 0.5,
			reverse: true,
			loglevel: 2
		},
		validate: {
			offset: function (val) {
				val = parseFloat(val);
				if (!_util.type.Number(val)) {
					throw ["Invalid value for option \"offset\":", val];
				}
				return val;
			},
			triggerElement: function (val) {
				val = val || undefined;
				if (val) {
					var elem = _util.get.elements(val)[0];
					if (elem && elem.parentNode) {
						val = elem;
					} else {
						throw ["Element defined in option \"triggerElement\" was not found:", val];
					}
				}
				return val;
			},
			triggerHook: function (val) {
				var translate = {
					"onCenter": 0.5,
					"onEnter": 1,
					"onLeave": 0
				};
				if (_util.type.Number(val)) {
					val = Math.max(0, Math.min(parseFloat(val), 1)); //  make sure its betweeen 0 and 1
				} else if (val in translate) {
					val = translate[val];
				} else {
					throw ["Invalid value for option \"triggerHook\": ", val];
				}
				return val;
			},
			reverse: function (val) {
				return !!val; // force boolean
			},
			loglevel: function (val) {
				val = parseInt(val);
				if (!_util.type.Number(val) || val < 0 || val > 3) {
					throw ["Invalid value for option \"loglevel\":", val];
				}
				return val;
			}
		}, // holder for  validation methods. duration validation is handled in 'getters-setters.js'
		shifts: ["duration", "offset", "triggerHook"], // list of options that trigger a `shift` event
	};
	/*
	 * method used to add an option to ScrollMagic Scenes.
	 * TODO: DOC (private for dev)
	 */
	ScrollMagic.Scene.addOption = function (name, defaultValue, validationCallback, shifts) {
		if (!(name in SCENE_OPTIONS.defaults)) {
			SCENE_OPTIONS.defaults[name] = defaultValue;
			SCENE_OPTIONS.validate[name] = validationCallback;
			if (shifts) {
				SCENE_OPTIONS.shifts.push(name);
			}
		} else {
			ScrollMagic._util.log(1, "[static] ScrollMagic.Scene -> Cannot add Scene option '" + name + "', because it already exists.");
		}
	};
	// instance extension function for plugins
	// TODO: DOC (private for dev)
	ScrollMagic.Scene.extend = function (extension) {
		var oldClass = this;
		ScrollMagic.Scene = function () {
			oldClass.apply(this, arguments);
			this.$super = _util.extend({}, this); // copy parent state
			return extension.apply(this, arguments) || this;
		};
		_util.extend(ScrollMagic.Scene, oldClass); // copy properties
		ScrollMagic.Scene.prototype = oldClass.prototype; // copy prototype
		ScrollMagic.Scene.prototype.constructor = ScrollMagic.Scene; // restore constructor
	};



	/**
	 * TODO: DOCS (private for dev)
	 * @class
	 * @private
	 */

	ScrollMagic.Event = function (type, namespace, target, vars) {
		vars = vars || {};
		for (var key in vars) {
			this[key] = vars[key];
		}
		this.type = type;
		this.target = this.currentTarget = target;
		this.namespace = namespace || '';
		this.timeStamp = this.timestamp = Date.now();
		return this;
	};

	/*
	 * TODO: DOCS (private for dev)
	 */

	var _util = ScrollMagic._util = (function (window) {
		var U = {},
			i;

		/**
		 * ------------------------------
		 * internal helpers
		 * ------------------------------
		 */

		// parse float and fall back to 0.
		var floatval = function (number) {
			return parseFloat(number) || 0;
		};
		// get current style IE safe (otherwise IE would return calculated values for 'auto')
		var _getComputedStyle = function (elem) {
			return elem.currentStyle ? elem.currentStyle : window.getComputedStyle(elem);
		};

		// get element dimension (width or height)
		var _dimension = function (which, elem, outer, includeMargin) {
			elem = (elem === document) ? window : elem;
			if (elem === window) {
				includeMargin = false;
			} else if (!_type.DomElement(elem)) {
				return 0;
			}
			which = which.charAt(0).toUpperCase() + which.substr(1).toLowerCase();
			var dimension = (outer ? elem['offset' + which] || elem['outer' + which] : elem['client' + which] || elem['inner' + which]) || 0;
			if (outer && includeMargin) {
				var style = _getComputedStyle(elem);
				dimension += which === 'Height' ? floatval(style.marginTop) + floatval(style.marginBottom) : floatval(style.marginLeft) + floatval(style.marginRight);
			}
			return dimension;
		};
		// converts 'margin-top' into 'marginTop'
		var _camelCase = function (str) {
			return str.replace(/^[^a-z]+([a-z])/g, '$1').replace(/-([a-z])/g, function (g) {
				return g[1].toUpperCase();
			});
		};

		/**
		 * ------------------------------
		 * external helpers
		 * ------------------------------
		 */

		// extend obj â€“ same as jQuery.extend({}, objA, objB)
		U.extend = function (obj) {
			obj = obj || {};
			for (i = 1; i < arguments.length; i++) {
				if (!arguments[i]) {
					continue;
				}
				for (var key in arguments[i]) {
					if (arguments[i].hasOwnProperty(key)) {
						obj[key] = arguments[i][key];
					}
				}
			}
			return obj;
		};

		// check if a css display type results in margin-collapse or not
		U.isMarginCollapseType = function (str) {
			return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(str) > -1;
		};

		// implementation of requestAnimationFrame
		// based on https://gist.github.com/paulirish/1579671
		var
			lastTime = 0,
			vendors = ['ms', 'moz', 'webkit', 'o'];
		var _requestAnimationFrame = window.requestAnimationFrame;
		var _cancelAnimationFrame = window.cancelAnimationFrame;
		// try vendor prefixes if the above doesn't work
		for (i = 0; !_requestAnimationFrame && i < vendors.length; ++i) {
			_requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
			_cancelAnimationFrame = window[vendors[i] + 'CancelAnimationFrame'] || window[vendors[i] + 'CancelRequestAnimationFrame'];
		}

		// fallbacks
		if (!_requestAnimationFrame) {
			_requestAnimationFrame = function (callback) {
				var
					currTime = new Date().getTime(),
					timeToCall = Math.max(0, 16 - (currTime - lastTime)),
					id = window.setTimeout(function () {
						callback(currTime + timeToCall);
					}, timeToCall);
				lastTime = currTime + timeToCall;
				return id;
			};
		}
		if (!_cancelAnimationFrame) {
			_cancelAnimationFrame = function (id) {
				window.clearTimeout(id);
			};
		}
		U.rAF = _requestAnimationFrame.bind(window);
		U.cAF = _cancelAnimationFrame.bind(window);

		var
			loglevels = ["error", "warn", "log"],
			console = window.console || {};

		console.log = console.log || function () {}; // no console log, well - do nothing then...
		// make sure methods for all levels exist.
		for (i = 0; i < loglevels.length; i++) {
			var method = loglevels[i];
			if (!console[method]) {
				console[method] = console.log; // prefer .log over nothing
			}
		}
		U.log = function (loglevel) {
			if (loglevel > loglevels.length || loglevel <= 0) loglevel = loglevels.length;
			var now = new Date(),
				time = ("0" + now.getHours()).slice(-2) + ":" + ("0" + now.getMinutes()).slice(-2) + ":" + ("0" + now.getSeconds()).slice(-2) + ":" + ("00" + now.getMilliseconds()).slice(-3),
				method = loglevels[loglevel - 1],
				args = Array.prototype.splice.call(arguments, 1),
				func = Function.prototype.bind.call(console[method], console);
			args.unshift(time);
			func.apply(console, args);
		};

		/**
		 * ------------------------------
		 * type testing
		 * ------------------------------
		 */

		var _type = U.type = function (v) {
			return Object.prototype.toString.call(v).replace(/^\[object (.+)\]$/, "$1").toLowerCase();
		};
		_type.String = function (v) {
			return _type(v) === 'string';
		};
		_type.Function = function (v) {
			return _type(v) === 'function';
		};
		_type.Array = function (v) {
			return Array.isArray(v);
		};
		_type.Number = function (v) {
			return !_type.Array(v) && (v - parseFloat(v) + 1) >= 0;
		};
		_type.DomElement = function (o) {
			return (
				typeof HTMLElement === "object" || typeof HTMLElement === "function" ? o instanceof HTMLElement || o instanceof SVGElement : //DOM2
				o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string"
			);
		};

		/**
		 * ------------------------------
		 * DOM Element info
		 * ------------------------------
		 */
		// always returns a list of matching DOM elements, from a selector, a DOM element or an list of elements or even an array of selectors
		var _get = U.get = {};
		_get.elements = function (selector) {
			var arr = [];
			if (_type.String(selector)) {
				try {
					selector = document.querySelectorAll(selector);
				} catch (e) { // invalid selector
					return arr;
				}
			}
			if (_type(selector) === 'nodelist' || _type.Array(selector) || selector instanceof NodeList) {
				for (var i = 0, ref = arr.length = selector.length; i < ref; i++) { // list of elements
					var elem = selector[i];
					arr[i] = _type.DomElement(elem) ? elem : _get.elements(elem); // if not an element, try to resolve recursively
				}
			} else if (_type.DomElement(selector) || selector === document || selector === window) {
				arr = [selector]; // only the element
			}
			return arr;
		};
		// get scroll top value
		_get.scrollTop = function (elem) {
			return (elem && typeof elem.scrollTop === 'number') ? elem.scrollTop : window.pageYOffset || 0;
		};
		// get scroll left value
		_get.scrollLeft = function (elem) {
			return (elem && typeof elem.scrollLeft === 'number') ? elem.scrollLeft : window.pageXOffset || 0;
		};
		// get element height
		_get.width = function (elem, outer, includeMargin) {
			return _dimension('width', elem, outer, includeMargin);
		};
		// get element width
		_get.height = function (elem, outer, includeMargin) {
			return _dimension('height', elem, outer, includeMargin);
		};

		// get element position (optionally relative to viewport)
		_get.offset = function (elem, relativeToViewport) {
			var offset = {
				top: 0,
				left: 0
			};
			if (elem && elem.getBoundingClientRect) { // check if available
				var rect = elem.getBoundingClientRect();
				offset.top = rect.top;
				offset.left = rect.left;
				if (!relativeToViewport) { // clientRect is by default relative to viewport...
					offset.top += _get.scrollTop();
					offset.left += _get.scrollLeft();
				}
			}
			return offset;
		};

		/**
		 * ------------------------------
		 * DOM Element manipulation
		 * ------------------------------
		 */

		U.addClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.add(classname);
				else
					elem.className += ' ' + classname;
			}
		};
		U.removeClass = function (elem, classname) {
			if (classname) {
				if (elem.classList)
					elem.classList.remove(classname);
				else
					elem.className = elem.className.replace(new RegExp('(^|\\b)' + classname.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
			}
		};
		// if options is string -> returns css value
		// if options is array -> returns object with css value pairs
		// if options is object -> set new css values
		U.css = function (elem, options) {
			if (_type.String(options)) {
				return _getComputedStyle(elem)[_camelCase(options)];
			} else if (_type.Array(options)) {
				var
					obj = {},
					style = _getComputedStyle(elem);
				options.forEach(function (option, key) {
					obj[option] = style[_camelCase(option)];
				});
				return obj;
			} else {
				for (var option in options) {
					var val = options[option];
					if (val == parseFloat(val)) { // assume pixel for seemingly numerical values
						val += 'px';
					}
					elem.style[_camelCase(option)] = val;
				}
			}
		};

		return U;
	}(window || {}));


	ScrollMagic.Scene.prototype.addIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling addIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeIndicators = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeIndicators() due to missing Plugin \'debug.addIndicators\'. Please make sure to include plugins/debug.addIndicators.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeTween = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeTween() due to missing Plugin \'animation.gsap\'. Please make sure to include plugins/animation.gsap.js');
		return this;
	}
	ScrollMagic.Scene.prototype.setVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling setVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}
	ScrollMagic.Scene.prototype.removeVelocity = function () {
		ScrollMagic._util.log(1, '(ScrollMagic.Scene) -> ERROR calling removeVelocity() due to missing Plugin \'animation.velocity\'. Please make sure to include plugins/animation.velocity.js');
		return this;
	}

	return ScrollMagic;
}));


/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file ScrollMagic GSAP Animation Plugin.
 *
 * requires: GSAP ~1.14
 * Powered by the Greensock Animation Platform (GSAP): http://www.greensock.com/js
 * Greensock License info at http://www.greensock.com/licensing/
 */
/**
 * This plugin is meant to be used in conjunction with the Greensock Animation Plattform.  
 * It offers an easy API to trigger Tweens or synchronize them to the scrollbar movement.
 *
 * Both the `lite` and the `max` versions of the GSAP library are supported.  
 * The most basic requirement is `TweenLite`.
 * 
 * To have access to this extension, please include `plugins/animation.gsap.js`.
 * @requires {@link http://greensock.com/gsap|GSAP ~1.14.x}
 * @mixin animation.GSAP
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic', 'gsap', 'TweenMax', 'TimelineMax'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		// Loads whole gsap package onto global scope.
		var gsap = require("gsap/dist/gsap") || require("gsap");

		// TweenMax/TimelineMax will be global in v2. In v3, they will be on the gsap object
		factory(require('scrollmagic'), gsap, TweenMax || gsap, TimelineMax || gsap);
	} else {
		// Browser globals
		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic), root.gsap, root.gsap || root.TweenMax || root.TweenLite, root.gsap || root.TimelineMax || root.TimelineLite);
	}
}(this, function (ScrollMagic, Gsap, Tween, Timeline) {
	"use strict";
	var NAMESPACE = "animation.gsap";
	var GSAP3_OR_GREATER = Gsap && parseFloat(Gsap.version) >= 3;

	var
		console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}
	if (!Tween) {
		err("(" + NAMESPACE + ") -> ERROR: TweenLite or TweenMax could not be found. Please make sure GSAP is loaded before ScrollMagic or use an asynchronous loader like requirejs.");
	}

	/*
	 * ----------------------------------------------------------------
	 * Extensions for Scene
	 * ----------------------------------------------------------------
	 */
	/**
	 * Every instance of ScrollMagic.Scene now accepts an additional option.  
	 * See {@link ScrollMagic.Scene} for a complete list of the standard options.
	 * @memberof! animation.GSAP#
	 * @method new ScrollMagic.Scene(options)
	 * @example
	 * var scene = new ScrollMagic.Scene({tweenChanges: true});
	 *
	 * @param {object} [options] - Options for the Scene. The options can be updated at any time.
	 * @param {boolean} [options.tweenChanges=false] - Tweens Animation to the progress target instead of setting it.  
	 												  Does not affect animations where duration is `0`.
	 */
	/**
	 * **Get** or **Set** the tweenChanges option value.  
	 * This only affects scenes with a duration. If `tweenChanges` is `true`, the progress update when scrolling will not be immediate, but instead the animation will smoothly animate to the target state.  
	 * For a better understanding, try enabling and disabling this option in the [Scene Manipulation Example](../examples/basic/scene_manipulation.html).
	 * @memberof! animation.GSAP#
	 * @method Scene.tweenChanges
	 * 
	 * @example
	 * // get the current tweenChanges option
	 * var tweenChanges = scene.tweenChanges();
	 *
	 * // set new tweenChanges option
	 * scene.tweenChanges(true);
	 *
	 * @fires {@link Scene.change}, when used as setter
	 * @param {boolean} [newTweenChanges] - The new tweenChanges setting of the scene.
	 * @returns {boolean} `get` -  Current tweenChanges option value.
	 * @returns {Scene} `set` -  Parent object for chaining.
	 */
	// add option (TODO: DOC (private for dev))
	ScrollMagic.Scene.addOption(
		"tweenChanges", // name
		false, // default
		function (val) { // validation callback
			return !!val;
		}
	);
	// extend scene
	ScrollMagic.Scene.extend(function () {
		var Scene = this,
			_tween;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		// set listeners
		Scene.on("progress.plugin_gsap", function () {
			updateTweenProgress();
		});
		Scene.on("destroy.plugin_gsap", function (e) {
			Scene.removeTween(e.reset);
		});

		/**
		 * Update the tween progress to current position.
		 * @private
		 */
		var updateTweenProgress = function () {
			if (_tween) {
				var
					progress = Scene.progress(),
					state = Scene.state();
				if (_tween.repeat && _tween.repeat() === -1) {
					// infinite loop, so not in relation to progress
					if (state === 'DURING' && _tween.paused()) {
						_tween.play();
					} else if (state !== 'DURING' && !_tween.paused()) {
						_tween.pause();
					}
				} else if (progress != _tween.progress()) { // do we even need to update the progress?
					// no infinite loop - so should we just play or go to a specific point in time?
					if (Scene.duration() === 0) {
						// play the animation
						if (progress > 0) { // play from 0 to 1
							_tween.play();
						} else { // play from 1 to 0
							_tween.reverse();
						}
					} else {
						// go to a specific point in time
						if (Scene.tweenChanges() && _tween.tweenTo) {
							// go smooth
							_tween.tweenTo(progress * _tween.duration());
						} else {
							// just hard set it
							_tween.progress(progress).pause();
						}
					}
				}
			}
		};

		/**
		 * Add a tween to the scene.  
		 * If you want to add multiple tweens, add them into a GSAP Timeline object and supply it instead (see example below).  
		 * 
		 * If the scene has a duration, the tween's duration will be projected to the scroll distance of the scene, meaning its progress will be synced to scrollbar movement.  
		 * For a scene with a duration of `0`, the tween will be triggered when scrolling forward past the scene's trigger position and reversed, when scrolling back.  
		 * To gain better understanding, check out the [Simple Tweening example](../examples/basic/simple_tweening.html).
		 *
		 * Instead of supplying a tween this method can also be used as a shorthand for `TweenMax.to()` (see example below).
		 * @memberof! animation.GSAP#
		 *
		 * @example
		 * // add a single tween directly
		 * scene.setTween(TweenMax.to("obj"), 1, {x: 100});
		 *
		 * // add a single tween via variable
		 * var tween = TweenMax.to("obj"), 1, {x: 100};
		 * scene.setTween(tween);
		 *
		 * // add multiple tweens, wrapped in a timeline.
		 * var timeline = new TimelineMax();
		 * var tween1 = TweenMax.from("obj1", 1, {x: 100});
		 * var tween2 = TweenMax.to("obj2", 1, {y: 100});
		 * timeline
		 *		.add(tween1)
		 *		.add(tween2);
		 * scene.addTween(timeline);
		 *
		 * // short hand to add a TweenMax.to() tween
		 * scene.setTween("obj3", 0.5, {y: 100});
		 *
		 * // short hand to add a TweenMax.to() tween for 1 second
		 * // this is useful, when the scene has a duration and the tween duration isn't important anyway
		 * scene.setTween("obj3", {y: 100});
		 *
		 * @param {(object|string)} TweenObject - A TweenMax, TweenLite, TimelineMax or TimelineLite object that should be animated in the scene. Can also be a Dom Element or Selector, when using direct tween definition (see examples).
		 * @param {(number|object)} duration - A duration for the tween, or tween parameters. If an object containing parameters are supplied, a default duration of 1 will be used.
		 * @param {object} params - The parameters for the tween
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.setTween = function (TweenObject, duration, params) {
			var newTween;

			if (arguments.length > 1) {
				var durationIsSet = typeof arguments['1'] === 'number';

				if (GSAP3_OR_GREATER) {
					// If we're using gsap 3 with proper gsap 3 syntax of 2 arguments
					if (!durationIsSet) {
						params = duration;
					}
					// Add a duration is there isn't one
					if (!params.hasOwnProperty('duration')) {
						params.duration = durationIsSet ? duration : 1;
					}
				} else {
					// If we're using gsap 2 or earlier syntax
					if (arguments.length < 3) {
						params = duration;
						duration = 1;
					}
				}

				// 2 arguments should be gsap 3 syntax, and 3 arguments for 
				TweenObject = GSAP3_OR_GREATER ? Tween.to(TweenObject, params) : Tween.to(TweenObject, duration, params);
			}
			try {
				// wrap Tween into a Timeline Object if not gsap 3 or greater and available to include delay and repeats in the duration and standardize methods.
				if (Timeline && !GSAP3_OR_GREATER) {
					newTween = new Timeline({
							smoothChildTiming: true
						})
						.add(TweenObject);
				} else {
					newTween = TweenObject;
				}
				newTween.pause();
			} catch (e) {
				log(1, "ERROR calling method 'setTween()': Supplied argument is not a valid TweenObject");
				return Scene;
			}
			if (_tween) { // kill old tween?
				Scene.removeTween();
			}
			_tween = newTween;

			// some properties need to be transferred it to the wrapper, otherwise they would get lost.
			if (TweenObject.repeat && TweenObject.repeat() === -1) { // TweenMax or TimelineMax Object?
				_tween.repeat(-1);
				_tween.yoyo(TweenObject.yoyo());
			}
			// Some tween validations and debugging helpers

			if (Scene.tweenChanges() && !_tween.tweenTo) {
				log(2, "WARNING: tweenChanges will only work if the TimelineMax object is available for ScrollMagic.");
			}

			// check if there are position tweens defined for the trigger and warn about it :)
			if (_tween && Scene.controller() && Scene.triggerElement() && Scene.loglevel() >= 2) { // controller is needed to know scroll direction.
				var
					triggerTweens = Tween.getTweensOf(Scene.triggerElement()),
					vertical = Scene.controller().info("vertical");
				triggerTweens.forEach(function (value, index) {
					var
						tweenvars = value.vars.css || value.vars,
						condition = vertical ? (tweenvars.top !== undefined || tweenvars.bottom !== undefined) : (tweenvars.left !== undefined || tweenvars.right !== undefined);
					if (condition) {
						log(2, "WARNING: Tweening the position of the trigger element affects the scene timing and should be avoided!");
						return false;
					}
				});
			}

			// warn about tween overwrites, when an element is tweened multiple times
			if (parseFloat(TweenLite.version) >= 1.14) { // onOverwrite only present since GSAP v1.14.0
				var
					// However, onInterrupt deprecated onOverwrite in GSAP v3
					methodUsed = GSAP3_OR_GREATER ? 'onInterrupt' : 'onOverwrite',
					list = _tween.getChildren ? _tween.getChildren(true, true, false) : [_tween], // get all nested tween objects
					newCallback = function () {
						log(2, "WARNING: tween was overwritten by another. To learn how to avoid this issue see here: https://github.com/janpaepke/ScrollMagic/wiki/WARNING:-tween-was-overwritten-by-another");
					};
				for (var i = 0, thisTween, oldCallback; i < list.length; i++) {
					/*jshint loopfunc: true */
					thisTween = list[i];
					if (oldCallback !== newCallback) { // if tweens is added more than once
						oldCallback = thisTween.vars[methodUsed];
						thisTween.vars[methodUsed] = function () {
							if (oldCallback) {
								oldCallback.apply(this, arguments);
							}
							newCallback.apply(this, arguments);
						};
					}
				}
			}
			log(3, "added tween");

			updateTweenProgress();
			return Scene;
		};

		/**
		 * Remove the tween from the scene.  
		 * This will terminate the control of the Scene over the tween.
		 *
		 * Using the reset option you can decide if the tween should remain in the current state or be rewound to set the target elements back to the state they were in before the tween was added to the scene.
		 * @memberof! animation.GSAP#
		 *
		 * @example
		 * // remove the tween from the scene without resetting it
		 * scene.removeTween();
		 *
		 * // remove the tween from the scene and reset it to initial position
		 * scene.removeTween(true);
		 *
		 * @param {boolean} [reset=false] - If `true` the tween will be reset to its initial values.
		 * @returns {Scene} Parent object for chaining.
		 */
		Scene.removeTween = function (reset) {
			if (_tween) {
				if (reset) {
					_tween.progress(0).pause();
				}
				_tween.kill();
				_tween = undefined;
				log(3, "removed tween (reset: " + (reset ? "true" : "false") + ")");
			}
			return Scene;
		};

	});
}));


/*!
 * ScrollMagic v2.0.8 (2020-08-14)
 * The javascript library for magical scroll interactions.
 * (c) 2020 Jan Paepke (@janpaepke)
 * Project Website: http://scrollmagic.io
 * 
 * @version 2.0.8
 * @license Dual licensed under MIT license and GPL.
 * @author Jan Paepke - e-mail@janpaepke.de
 *
 * @file Debug Extension for ScrollMagic.
 */
/**
 * This plugin was formerly known as the ScrollMagic debug extension.
 *
 * It enables you to add visual indicators to your page, to be able to see exactly when a scene is triggered.
 *
 * To have access to this extension, please include `plugins/debug.addIndicators.js`.
 * @mixin debug.addIndicators
 */
(function (root, factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		define(['ScrollMagic'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('scrollmagic'));
	} else {
		// no browser global export needed, just execute
		factory(root.ScrollMagic || (root.jQuery && root.jQuery.ScrollMagic));
	}
}(this, function (ScrollMagic) {
	"use strict";
	var NAMESPACE = "debug.addIndicators";

	var
		console = window.console || {},
		err = Function.prototype.bind.call(console.error || console.log || function () {}, console);
	if (!ScrollMagic) {
		err("(" + NAMESPACE + ") -> ERROR: The ScrollMagic main module could not be found. Please make sure it's loaded before this plugin or use an asynchronous loader like requirejs.");
	}

	// plugin settings
	var
		FONT_SIZE = "0.85em",
		ZINDEX = "9999",
		EDGE_OFFSET = 15; // minimum edge distance, added to indentation

	// overall vars
	var
		_util = ScrollMagic._util,
		_autoindex = 0;



	ScrollMagic.Scene.extend(function () {
		var
			Scene = this,
			_indicator;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		/**
		 * Add visual indicators for a ScrollMagic.Scene.  
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // add basic indicators
		 * scene.addIndicators()
		 *
		 * // passing options
		 * scene.addIndicators({name: "pin scene", colorEnd: "#FFFFFF"});
		 *
		 * @param {object} [options] - An object containing one or more options for the indicators.
		 * @param {(string|object)} [options.parent] - A selector, DOM Object or a jQuery object that the indicators should be added to.  
		 														 														 If undefined, the controller's container will be used.
		 * @param {number} [options.name=""] - This string will be displayed at the start and end indicators of the scene for identification purposes. If no name is supplied an automatic index will be used.
		 * @param {number} [options.indent=0] - Additional position offset for the indicators (useful, when having multiple scenes starting at the same position).
		 * @param {string} [options.colorStart=green] - CSS color definition for the start indicator.
		 * @param {string} [options.colorEnd=red] - CSS color definition for the end indicator.
		 * @param {string} [options.colorTrigger=blue] - CSS color definition for the trigger indicator.
		 */
		Scene.addIndicators = function (options) {
			if (!_indicator) {
				var
					DEFAULT_OPTIONS = {
						name: "",
						indent: 0,
						parent: undefined,
						colorStart: "green",
						colorEnd: "red",
						colorTrigger: "blue",
					};

				options = _util.extend({}, DEFAULT_OPTIONS, options);

				_autoindex++;
				_indicator = new Indicator(Scene, options);

				Scene.on("add.plugin_addIndicators", _indicator.add);
				Scene.on("remove.plugin_addIndicators", _indicator.remove);
				Scene.on("destroy.plugin_addIndicators", Scene.removeIndicators);

				// it the scene already has a controller we can start right away.
				if (Scene.controller()) {
					_indicator.add();
				}
			}
			return Scene;
		};

		/**
		 * Removes visual indicators from a ScrollMagic.Scene.
		 * @memberof! debug.addIndicators#
		 *
		 * @example
		 * // remove previously added indicators
		 * scene.removeIndicators()
		 *
		 */
		Scene.removeIndicators = function () {
			if (_indicator) {
				_indicator.remove();
				this.off("*.plugin_addIndicators");
				_indicator = undefined;
			}
			return Scene;
		};

	});


	/*
	 * ----------------------------------------------------------------
	 * Extension for controller to store and update related indicators
	 * ----------------------------------------------------------------
	 */
	// add option to globally auto-add indicators to scenes
	/**
	 * Every ScrollMagic.Controller instance now accepts an additional option.  
	 * See {@link ScrollMagic.Controller} for a complete list of the standard options.
	 * @memberof! debug.addIndicators#
	 * @method new ScrollMagic.Controller(options)
	 * @example
	 * // make a controller and add indicators to all scenes attached
	 * var controller = new ScrollMagic.Controller({addIndicators: true});
	 * // this scene will automatically have indicators added to it
	 * new ScrollMagic.Scene()
	 *                .addTo(controller);
	 *
	 * @param {object} [options] - Options for the Controller.
	 * @param {boolean} [options.addIndicators=false] - If set to `true` every scene that is added to the controller will automatically get indicators added to it.
	 */
	ScrollMagic.Controller.addOption("addIndicators", false);
	// extend Controller
	ScrollMagic.Controller.extend(function () {
		var
			Controller = this,
			_info = Controller.info(),
			_container = _info.container,
			_isDocument = _info.isDocument,
			_vertical = _info.vertical,
			_indicators = { // container for all indicators and methods
				groups: []
			};

		var log = function () {
			if (Controller._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Controller._log.apply(this, arguments);
			}
		};
		if (Controller._indicators) {
			log(2, "WARNING: Scene already has a property '_indicators', which will be overwritten by plugin.");
		}

		// add indicators container
		this._indicators = _indicators;
		/*
			needed updates:
			+++++++++++++++
			start/end position on scene shift (handled in Indicator class)
			trigger parameters on triggerHook value change (handled in Indicator class)
			bounds position on container scroll or resize (to keep alignment to bottom/right)
			trigger position on container resize, window resize (if container isn't document) and window scroll (if container isn't document)
		*/

		// event handler for when associated bounds markers need to be repositioned
		var handleBoundsPositionChange = function () {
			_indicators.updateBoundsPositions();
		};

		// event handler for when associated trigger groups need to be repositioned
		var handleTriggerPositionChange = function () {
			_indicators.updateTriggerGroupPositions();
		};

		_container.addEventListener("resize", handleTriggerPositionChange);
		if (!_isDocument) {
			window.addEventListener("resize", handleTriggerPositionChange);
			window.addEventListener("scroll", handleTriggerPositionChange);
		}
		// update all related bounds containers
		_container.addEventListener("resize", handleBoundsPositionChange);
		_container.addEventListener("scroll", handleBoundsPositionChange);


		// updates the position of the bounds container to aligned to the right for vertical containers and to the bottom for horizontal
		this._indicators.updateBoundsPositions = function (specificIndicator) {
			var // constant for all bounds
				groups = specificIndicator ? [_util.extend({}, specificIndicator.triggerGroup, {
					members: [specificIndicator]
				})] : // create a group with only one element
				_indicators.groups, // use all
				g = groups.length,
				css = {},
				paramPos = _vertical ? "left" : "top",
				paramDimension = _vertical ? "width" : "height",
				edge = _vertical ?
				_util.get.scrollLeft(_container) + _util.get.width(_container) - EDGE_OFFSET :
				_util.get.scrollTop(_container) + _util.get.height(_container) - EDGE_OFFSET,
				b, triggerSize, group;
			while (g--) { // group loop
				group = groups[g];
				b = group.members.length;
				triggerSize = _util.get[paramDimension](group.element.firstChild);
				while (b--) { // indicators loop
					css[paramPos] = edge - triggerSize;
					_util.css(group.members[b].bounds, css);
				}
			}
		};

		// updates the positions of all trigger groups attached to a controller or a specific one, if provided
		this._indicators.updateTriggerGroupPositions = function (specificGroup) {
			var // constant vars
				groups = specificGroup ? [specificGroup] : _indicators.groups,
				i = groups.length,
				container = _isDocument ? document.body : _container,
				containerOffset = _isDocument ? {
					top: 0,
					left: 0
				} : _util.get.offset(container, true),
				edge = _vertical ?
				_util.get.width(_container) - EDGE_OFFSET :
				_util.get.height(_container) - EDGE_OFFSET,
				paramDimension = _vertical ? "width" : "height",
				paramTransform = _vertical ? "Y" : "X";
			var // changing vars
				group,
				elem,
				pos,
				elemSize,
				transform;
			while (i--) {
				group = groups[i];
				elem = group.element;
				pos = group.triggerHook * Controller.info("size");
				elemSize = _util.get[paramDimension](elem.firstChild.firstChild);
				transform = pos > elemSize ? "translate" + paramTransform + "(-100%)" : "";

				_util.css(elem, {
					top: containerOffset.top + (_vertical ? pos : edge - group.members[0].options.indent),
					left: containerOffset.left + (_vertical ? edge - group.members[0].options.indent : pos)
				});
				_util.css(elem.firstChild.firstChild, {
					"-ms-transform": transform,
					"-webkit-transform": transform,
					"transform": transform
				});
			}
		};

		// updates the label for the group to contain the name, if it only has one member
		this._indicators.updateTriggerGroupLabel = function (group) {
			var
				text = "trigger" + (group.members.length > 1 ? "" : " " + group.members[0].options.name),
				elem = group.element.firstChild.firstChild,
				doUpdate = elem.textContent !== text;
			if (doUpdate) {
				elem.textContent = text;
				if (_vertical) { // bounds position is dependent on text length, so update
					_indicators.updateBoundsPositions();
				}
			}
		};

		// add indicators if global option is set
		this.addScene = function (newScene) {

			if (this._options.addIndicators && newScene instanceof ScrollMagic.Scene && newScene.controller() === Controller) {
				newScene.addIndicators();
			}
			// call original destroy method
			this.$super.addScene.apply(this, arguments);
		};

		// remove all previously set listeners on destroy
		this.destroy = function () {
			_container.removeEventListener("resize", handleTriggerPositionChange);
			if (!_isDocument) {
				window.removeEventListener("resize", handleTriggerPositionChange);
				window.removeEventListener("scroll", handleTriggerPositionChange);
			}
			_container.removeEventListener("resize", handleBoundsPositionChange);
			_container.removeEventListener("scroll", handleBoundsPositionChange);
			// call original destroy method
			this.$super.destroy.apply(this, arguments);
		};
		return Controller;

	});

	/*
	 * ----------------------------------------------------------------
	 * Internal class for the construction of Indicators
	 * ----------------------------------------------------------------
	 */
	var Indicator = function (Scene, options) {
		var
			Indicator = this,
			_elemBounds = TPL.bounds(),
			_elemStart = TPL.start(options.colorStart),
			_elemEnd = TPL.end(options.colorEnd),
			_boundsContainer = options.parent && _util.get.elements(options.parent)[0],
			_vertical,
			_ctrl;

		var log = function () {
			if (Scene._log) { // not available, when main source minified
				Array.prototype.splice.call(arguments, 1, 0, "(" + NAMESPACE + ")", "->");
				Scene._log.apply(this, arguments);
			}
		};

		options.name = options.name || _autoindex;

		// prepare bounds elements
		_elemStart.firstChild.textContent += " " + options.name;
		_elemEnd.textContent += " " + options.name;
		_elemBounds.appendChild(_elemStart);
		_elemBounds.appendChild(_elemEnd);

		// set public variables
		Indicator.options = options;
		Indicator.bounds = _elemBounds;
		// will be set later
		Indicator.triggerGroup = undefined;

		// add indicators to DOM
		this.add = function () {
			_ctrl = Scene.controller();
			_vertical = _ctrl.info("vertical");

			var isDocument = _ctrl.info("isDocument");

			if (!_boundsContainer) {
				// no parent supplied or doesnt exist
				_boundsContainer = isDocument ? document.body : _ctrl.info("container"); // check if window/document (then use body)
			}
			if (!isDocument && _util.css(_boundsContainer, "position") === 'static') {
				// position mode needed for correct positioning of indicators
				_util.css(_boundsContainer, {
					position: "relative"
				});
			}

			// add listeners for updates
			Scene.on("change.plugin_addIndicators", handleTriggerParamsChange);
			Scene.on("shift.plugin_addIndicators", handleBoundsParamsChange);

			// updates trigger & bounds (will add elements if needed)
			updateTriggerGroup();
			updateBounds();

			setTimeout(function () { // do after all execution is finished otherwise sometimes size calculations are off
				_ctrl._indicators.updateBoundsPositions(Indicator);
			}, 0);

			log(3, "added indicators");
		};

		// remove indicators from DOM
		this.remove = function () {
			if (Indicator.triggerGroup) { // if not set there's nothing to remove
				Scene.off("change.plugin_addIndicators", handleTriggerParamsChange);
				Scene.off("shift.plugin_addIndicators", handleBoundsParamsChange);

				if (Indicator.triggerGroup.members.length > 1) {
					// just remove from memberlist of old group
					var group = Indicator.triggerGroup;
					group.members.splice(group.members.indexOf(Indicator), 1);
					_ctrl._indicators.updateTriggerGroupLabel(group);
					_ctrl._indicators.updateTriggerGroupPositions(group);
					Indicator.triggerGroup = undefined;
				} else {
					// remove complete group
					removeTriggerGroup();
				}
				removeBounds();

				log(3, "removed indicators");
			}
		};

		/*
		 * ----------------------------------------------------------------
		 * internal Event Handlers
		 * ----------------------------------------------------------------
		 */

		// event handler for when bounds params change
		var handleBoundsParamsChange = function () {
			updateBounds();
		};

		// event handler for when trigger params change
		var handleTriggerParamsChange = function (e) {
			if (e.what === "triggerHook") {
				updateTriggerGroup();
			}
		};

		/*
		 * ----------------------------------------------------------------
		 * Bounds (start / stop) management
		 * ----------------------------------------------------------------
		 */

		// adds an new bounds elements to the array and to the DOM
		var addBounds = function () {
			var v = _ctrl.info("vertical");
			// apply stuff we didn't know before...
			_util.css(_elemStart.firstChild, {
				"border-bottom-width": v ? 1 : 0,
				"border-right-width": v ? 0 : 1,
				"bottom": v ? -1 : options.indent,
				"right": v ? options.indent : -1,
				"padding": v ? "0 8px" : "2px 4px",
			});
			_util.css(_elemEnd, {
				"border-top-width": v ? 1 : 0,
				"border-left-width": v ? 0 : 1,
				"top": v ? "100%" : "",
				"right": v ? options.indent : "",
				"bottom": v ? "" : options.indent,
				"left": v ? "" : "100%",
				"padding": v ? "0 8px" : "2px 4px"
			});
			// append
			_boundsContainer.appendChild(_elemBounds);
		};

		// remove bounds from list and DOM
		var removeBounds = function () {
			_elemBounds.parentNode.removeChild(_elemBounds);
		};

		// update the start and end positions of the scene
		var updateBounds = function () {
			if (_elemBounds.parentNode !== _boundsContainer) {
				addBounds(); // Add Bounds elements (start/end)
			}
			var css = {};
			css[_vertical ? "top" : "left"] = Scene.triggerPosition();
			css[_vertical ? "height" : "width"] = Scene.duration();
			_util.css(_elemBounds, css);
			_util.css(_elemEnd, {
				display: Scene.duration() > 0 ? "" : "none"
			});
		};

		/*
		 * ----------------------------------------------------------------
		 * trigger and trigger group management
		 * ----------------------------------------------------------------
		 */

		// adds an new trigger group to the array and to the DOM
		var addTriggerGroup = function () {
			var triggerElem = TPL.trigger(options.colorTrigger); // new trigger element
			var css = {};
			css[_vertical ? "right" : "bottom"] = 0;
			css[_vertical ? "border-top-width" : "border-left-width"] = 1;
			_util.css(triggerElem.firstChild, css);
			_util.css(triggerElem.firstChild.firstChild, {
				padding: _vertical ? "0 8px 3px 8px" : "3px 4px"
			});
			document.body.appendChild(triggerElem); // directly add to body
			var newGroup = {
				triggerHook: Scene.triggerHook(),
				element: triggerElem,
				members: [Indicator]
			};
			_ctrl._indicators.groups.push(newGroup);
			Indicator.triggerGroup = newGroup;
			// update right away
			_ctrl._indicators.updateTriggerGroupLabel(newGroup);
			_ctrl._indicators.updateTriggerGroupPositions(newGroup);
		};

		var removeTriggerGroup = function () {
			_ctrl._indicators.groups.splice(_ctrl._indicators.groups.indexOf(Indicator.triggerGroup), 1);
			Indicator.triggerGroup.element.parentNode.removeChild(Indicator.triggerGroup.element);
			Indicator.triggerGroup = undefined;
		};

		// updates the trigger group -> either join existing or add new one
		/*	
		 * Logic:
		 * 1 if a trigger group exist, check if it's in sync with Scene settings â€“ if so, nothing else needs to happen
		 * 2 try to find an existing one that matches Scene parameters
		 * 	 2.1 If a match is found check if already assigned to an existing group
		 *			 If so:
		 *       A: it was the last member of existing group -> kill whole group
		 *       B: the existing group has other members -> just remove from member list
		 *	 2.2 Assign to matching group
		 * 3 if no new match could be found, check if assigned to existing group
		 *   A: yes, and it's the only member -> just update parameters and positions and keep using this group
		 *   B: yes but there are other members -> remove from member list and create a new one
		 *   C: no, so create a new one
		 */
		var updateTriggerGroup = function () {
			var
				triggerHook = Scene.triggerHook(),
				closeEnough = 0.0001;

			// Have a group, check if it still matches
			if (Indicator.triggerGroup) {
				if (Math.abs(Indicator.triggerGroup.triggerHook - triggerHook) < closeEnough) {
					// _util.log(0, "trigger", options.name, "->", "no need to change, still in sync");
					return; // all good
				}
			}
			// Don't have a group, check if a matching one exists
			// _util.log(0, "trigger", options.name, "->", "out of sync!");
			var
				groups = _ctrl._indicators.groups,
				group,
				i = groups.length;
			while (i--) {
				group = groups[i];
				if (Math.abs(group.triggerHook - triggerHook) < closeEnough) {
					// found a match!
					// _util.log(0, "trigger", options.name, "->", "found match");
					if (Indicator.triggerGroup) { // do I have an old group that is out of sync?
						if (Indicator.triggerGroup.members.length === 1) { // is it the only remaining group?
							// _util.log(0, "trigger", options.name, "->", "kill");
							// was the last member, remove the whole group
							removeTriggerGroup();
						} else {
							Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
							_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
							_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
							// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
						}
					}
					// join new group
					group.members.push(Indicator);
					Indicator.triggerGroup = group;
					_ctrl._indicators.updateTriggerGroupLabel(group);
					return;
				}
			}

			// at this point I am obviously out of sync and don't match any other group
			if (Indicator.triggerGroup) {
				if (Indicator.triggerGroup.members.length === 1) {
					// _util.log(0, "trigger", options.name, "->", "updating existing");
					// out of sync but i'm the only member => just change and update
					Indicator.triggerGroup.triggerHook = triggerHook;
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					return;
				} else {
					// _util.log(0, "trigger", options.name, "->", "removing from previous member list");
					Indicator.triggerGroup.members.splice(Indicator.triggerGroup.members.indexOf(Indicator), 1); // just remove from memberlist of old group
					_ctrl._indicators.updateTriggerGroupLabel(Indicator.triggerGroup);
					_ctrl._indicators.updateTriggerGroupPositions(Indicator.triggerGroup);
					Indicator.triggerGroup = undefined; // need a brand new group...
				}
			}
			// _util.log(0, "trigger", options.name, "->", "add a new one");
			// did not find any match, make new trigger group
			addTriggerGroup();
		};
	};

	/*
	 * ----------------------------------------------------------------
	 * Templates for the indicators
	 * ----------------------------------------------------------------
	 */
	var TPL = {
		start: function (color) {
			// inner element (for bottom offset -1, while keeping top position 0)
			var inner = document.createElement("div");
			inner.textContent = "start";
			_util.css(inner, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			var e = document.createElement('div');
			// wrapper
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				width: 0,
				height: 0
			});
			e.appendChild(inner);
			return e;
		},
		end: function (color) {
			var e = document.createElement('div');
			e.textContent = "end";
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			return e;
		},
		bounds: function () {
			var e = document.createElement('div');
			_util.css(e, {
				position: "absolute",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			return e;
		},
		trigger: function (color) {
			// inner to be above or below line but keep position
			var inner = document.createElement('div');
			inner.textContent = "trigger";
			_util.css(inner, {
				position: "relative",
			});
			// inner wrapper for right: 0 and main element has no size
			var w = document.createElement('div');
			_util.css(w, {
				position: "absolute",
				overflow: "visible",
				"border-width": 0,
				"border-style": "solid",
				color: color,
				"border-color": color
			});
			w.appendChild(inner);
			// wrapper
			var e = document.createElement('div');
			_util.css(e, {
				position: "fixed",
				overflow: "visible",
				"white-space": "nowrap",
				"pointer-events": "none",
				"font-size": FONT_SIZE
			});
			e.style.zIndex = ZINDEX;
			e.appendChild(w);
			return e;
		},
	};

}));


/*
 Highcharts JS v10.3.3 (2023-01-20)

 (c) 2009-2021 Torstein Honsi

 License: www.highcharts.com/license
*/
(function(aa,K){"object"===typeof module&&module.exports?(K["default"]=K,module.exports=aa.document?K(aa):K):"function"===typeof define&&define.amd?define("highcharts/highcharts",function(){return K(aa)}):(aa.Highcharts&&aa.Highcharts.error(16,!0),aa.Highcharts=K(aa))})("undefined"!==typeof window?window:this,function(aa){function K(a,A,g,F){a.hasOwnProperty(A)||(a[A]=F.apply(null,g),"function"===typeof CustomEvent&&aa.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:A,module:a[A]}})))}
var g={};K(g,"Core/Globals.js",[],function(){var a;(function(a){a.SVG_NS="http://www.w3.org/2000/svg";a.product="Highcharts";a.version="10.3.3";a.win="undefined"!==typeof aa?aa:{};a.doc=a.win.document;a.svg=a.doc&&a.doc.createElementNS&&!!a.doc.createElementNS(a.SVG_NS,"svg").createSVGRect;a.userAgent=a.win.navigator&&a.win.navigator.userAgent||"";a.isChrome=-1!==a.userAgent.indexOf("Chrome");a.isFirefox=-1!==a.userAgent.indexOf("Firefox");a.isMS=/(edge|msie|trident)/i.test(a.userAgent)&&!a.win.opera;
a.isSafari=!a.isChrome&&-1!==a.userAgent.indexOf("Safari");a.isTouchDevice=/(Mobile|Android|Windows Phone)/.test(a.userAgent);a.isWebKit=-1!==a.userAgent.indexOf("AppleWebKit");a.deg2rad=2*Math.PI/360;a.hasBidiBug=a.isFirefox&&4>parseInt(a.userAgent.split("Firefox/")[1],10);a.hasTouch=!!a.win.TouchEvent;a.marginNames=["plotTop","marginRight","marginBottom","plotLeft"];a.noop=function(){};a.supportsPassiveEvents=function(){var g=!1;if(!a.isMS){var A=Object.defineProperty({},"passive",{get:function(){g=
!0}});a.win.addEventListener&&a.win.removeEventListener&&(a.win.addEventListener("testPassive",a.noop,A),a.win.removeEventListener("testPassive",a.noop,A))}return g}();a.charts=[];a.dateFormats={};a.seriesTypes={};a.symbolSizes={};a.chartCount=0})(a||(a={}));"";return a});K(g,"Core/Utilities.js",[g["Core/Globals.js"]],function(a){function g(b,c,n,J){var z=c?"Highcharts error":"Highcharts warning";32===b&&(b=""+z+": Deprecated member");var q=l(b),u=q?""+z+" #"+b+": www.highcharts.com/errors/"+b+"/":
b.toString();if("undefined"!==typeof J){var N="";q&&(u+="?");E(J,function(b,z){N+="\n - ".concat(z,": ").concat(b);q&&(u+=encodeURI(z)+"="+encodeURI(b))});u+=N}y(a,"displayError",{chart:n,code:b,message:u,params:J},function(){if(c)throw Error(u);f.console&&-1===g.messages.indexOf(u)&&console.warn(u)});g.messages.push(u)}function x(b,f){var z={};E(b,function(c,q){if(H(b[q],!0)&&!b.nodeType&&f[q])c=x(b[q],f[q]),Object.keys(c).length&&(z[q]=c);else if(H(b[q])||b[q]!==f[q]||q in b&&!(q in f))z[q]=b[q]});
return z}function F(b,f){return parseInt(b,f||10)}function C(b){return"string"===typeof b}function B(b){b=Object.prototype.toString.call(b);return"[object Array]"===b||"[object Array Iterator]"===b}function H(b,f){return!!b&&"object"===typeof b&&(!f||!B(b))}function t(b){return H(b)&&"number"===typeof b.nodeType}function r(b){var f=b&&b.constructor;return!(!H(b,!0)||t(b)||!f||!f.name||"Object"===f.name)}function l(b){return"number"===typeof b&&!isNaN(b)&&Infinity>b&&-Infinity<b}function e(b){return"undefined"!==
typeof b&&null!==b}function d(b,f,c){var z=C(f)&&!e(c),q,n=function(f,c){e(f)?b.setAttribute(c,f):z?(q=b.getAttribute(c))||"class"!==c||(q=b.getAttribute(c+"Name")):b.removeAttribute(c)};C(f)?n(c,f):E(f,n);return q}function h(b,f){var c;b||(b={});for(c in f)b[c]=f[c];return b}function m(){for(var b=arguments,f=b.length,c=0;c<f;c++){var J=b[c];if("undefined"!==typeof J&&null!==J)return J}}function k(b,f){a.isMS&&!a.svg&&f&&e(f.opacity)&&(f.filter="alpha(opacity=".concat(100*f.opacity,")"));h(b.style,
f)}function p(b){return Math.pow(10,Math.floor(Math.log(b)/Math.LN10))}function D(b,f){return 1E14<b?b:parseFloat(b.toPrecision(f||14))}function I(b,c,n){var z=a.getStyle||I;if("width"===c)return c=Math.min(b.offsetWidth,b.scrollWidth),n=b.getBoundingClientRect&&b.getBoundingClientRect().width,n<c&&n>=c-1&&(c=Math.floor(n)),Math.max(0,c-(z(b,"padding-left",!0)||0)-(z(b,"padding-right",!0)||0));if("height"===c)return Math.max(0,Math.min(b.offsetHeight,b.scrollHeight)-(z(b,"padding-top",!0)||0)-(z(b,
"padding-bottom",!0)||0));f.getComputedStyle||g(27,!0);if(b=f.getComputedStyle(b,void 0)){var q=b.getPropertyValue(c);m(n,"opacity"!==c)&&(q=F(q))}return q}function E(b,f,c){for(var z in b)Object.hasOwnProperty.call(b,z)&&f.call(c||b[z],b[z],z,b)}function L(b,f,c){function z(f,c){var v=b.removeEventListener||a.removeEventListenerPolyfill;v&&v.call(b,f,c,!1)}function q(c){var v;if(b.nodeName){if(f){var q={};q[f]=!0}else q=c;E(q,function(b,f){if(c[f])for(v=c[f].length;v--;)z(f,c[f][v].fn)})}}var n=
"function"===typeof b&&b.prototype||b;if(Object.hasOwnProperty.call(n,"hcEvents")){var u=n.hcEvents;f?(n=u[f]||[],c?(u[f]=n.filter(function(b){return c!==b.fn}),z(f,c)):(q(u),u[f]=[])):(q(u),delete n.hcEvents)}}function y(b,f,c,J){c=c||{};if(w.createEvent&&(b.dispatchEvent||b.fireEvent&&b!==a)){var z=w.createEvent("Events");z.initEvent(f,!0,!0);c=h(z,c);b.dispatchEvent?b.dispatchEvent(c):b.fireEvent(f,c)}else if(b.hcEvents){c.target||h(c,{preventDefault:function(){c.defaultPrevented=!0},target:b,
type:f});z=[];for(var q=b,n=!1;q.hcEvents;)Object.hasOwnProperty.call(q,"hcEvents")&&q.hcEvents[f]&&(z.length&&(n=!0),z.unshift.apply(z,q.hcEvents[f])),q=Object.getPrototypeOf(q);n&&z.sort(function(b,f){return b.order-f.order});z.forEach(function(f){!1===f.fn.call(b,c)&&c.preventDefault()})}J&&!c.defaultPrevented&&J.call(b,c)}var c=a.charts,w=a.doc,f=a.win;(g||(g={})).messages=[];Math.easeInOutSine=function(b){return-.5*(Math.cos(Math.PI*b)-1)};var n=Array.prototype.find?function(b,f){return b.find(f)}:
function(b,f){var c,q=b.length;for(c=0;c<q;c++)if(f(b[c],c))return b[c]};E({map:"map",each:"forEach",grep:"filter",reduce:"reduce",some:"some"},function(b,f){a[f]=function(c){var q;g(32,!1,void 0,(q={},q["Highcharts.".concat(f)]="use Array.".concat(b),q));return Array.prototype[b].apply(c,[].slice.call(arguments,1))}});var b,u=function(){var f=Math.random().toString(36).substring(2,9)+"-",c=0;return function(){return"highcharts-"+(b?"":f)+c++}}();f.jQuery&&(f.jQuery.fn.highcharts=function(){var b=
[].slice.call(arguments);if(this[0])return b[0]?(new (a[C(b[0])?b.shift():"Chart"])(this[0],b[0],b[1]),this):c[d(this[0],"data-highcharts-chart")]});n={addEvent:function(b,f,c,J){void 0===J&&(J={});var q="function"===typeof b&&b.prototype||b;Object.hasOwnProperty.call(q,"hcEvents")||(q.hcEvents={});q=q.hcEvents;a.Point&&b instanceof a.Point&&b.series&&b.series.chart&&(b.series.chart.runTrackerClick=!0);var z=b.addEventListener||a.addEventListenerPolyfill;z&&z.call(b,f,c,a.supportsPassiveEvents?{passive:void 0===
J.passive?-1!==f.indexOf("touch"):J.passive,capture:!1}:!1);q[f]||(q[f]=[]);q[f].push({fn:c,order:"number"===typeof J.order?J.order:Infinity});q[f].sort(function(b,f){return b.order-f.order});return function(){L(b,f,c)}},arrayMax:function(b){for(var f=b.length,c=b[0];f--;)b[f]>c&&(c=b[f]);return c},arrayMin:function(b){for(var f=b.length,c=b[0];f--;)b[f]<c&&(c=b[f]);return c},attr:d,clamp:function(b,f,c){return b>f?b<c?b:c:f},cleanRecursively:x,clearTimeout:function(b){e(b)&&clearTimeout(b)},correctFloat:D,
createElement:function(b,f,c,J,n){b=w.createElement(b);f&&h(b,f);n&&k(b,{padding:"0",border:"none",margin:"0"});c&&k(b,c);J&&J.appendChild(b);return b},css:k,defined:e,destroyObjectProperties:function(b,f){E(b,function(c,q){c&&c!==f&&c.destroy&&c.destroy();delete b[q]})},discardElement:function(b){b&&b.parentElement&&b.parentElement.removeChild(b)},erase:function(b,f){for(var c=b.length;c--;)if(b[c]===f){b.splice(c,1);break}},error:g,extend:h,extendClass:function(b,f){var c=function(){};c.prototype=
new b;h(c.prototype,f);return c},find:n,fireEvent:y,getMagnitude:p,getNestedProperty:function(b,c){for(b=b.split(".");b.length&&e(c);){var q=b.shift();if("undefined"===typeof q||"__proto__"===q)return;c=c[q];if(!e(c)||"function"===typeof c||"number"===typeof c.nodeType||c===f)return}return c},getStyle:I,inArray:function(b,c,f){g(32,!1,void 0,{"Highcharts.inArray":"use Array.indexOf"});return c.indexOf(b,f)},isArray:B,isClass:r,isDOMElement:t,isFunction:function(b){return"function"===typeof b},isNumber:l,
isObject:H,isString:C,keys:function(b){g(32,!1,void 0,{"Highcharts.keys":"use Object.keys"});return Object.keys(b)},merge:function(){var b,c=arguments,f={},J=function(b,c){"object"!==typeof b&&(b={});E(c,function(f,v){"__proto__"!==v&&"constructor"!==v&&(!H(f,!0)||r(f)||t(f)?b[v]=c[v]:b[v]=J(b[v]||{},f))});return b};!0===c[0]&&(f=c[1],c=Array.prototype.slice.call(c,2));var n=c.length;for(b=0;b<n;b++)f=J(f,c[b]);return f},normalizeTickInterval:function(b,c,f,J,n){var q=b;f=m(f,p(b));var u=b/f;c||(c=
n?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10],!1===J&&(1===f?c=c.filter(function(b){return 0===b%1}):.1>=f&&(c=[1/f])));for(J=0;J<c.length&&!(q=c[J],n&&q*f>=b||!n&&u<=(c[J]+(c[J+1]||c[J]))/2);J++);return q=D(q*f,-Math.round(Math.log(.001)/Math.LN10))},objectEach:E,offset:function(b){var c=w.documentElement;b=b.parentElement||b.parentNode?b.getBoundingClientRect():{top:0,left:0,width:0,height:0};return{top:b.top+(f.pageYOffset||c.scrollTop)-(c.clientTop||0),left:b.left+(f.pageXOffset||c.scrollLeft)-
(c.clientLeft||0),width:b.width,height:b.height}},pad:function(b,c,f){return Array((c||2)+1-String(b).replace("-","").length).join(f||"0")+b},pick:m,pInt:F,relativeLength:function(b,c,f){return/%$/.test(b)?c*parseFloat(b)/100+(f||0):parseFloat(b)},removeEvent:L,splat:function(b){return B(b)?b:[b]},stableSort:function(b,c){var f=b.length,J,n;for(n=0;n<f;n++)b[n].safeI=n;b.sort(function(b,f){J=c(b,f);return 0===J?b.safeI-f.safeI:J});for(n=0;n<f;n++)delete b[n].safeI},syncTimeout:function(b,c,f){if(0<
c)return setTimeout(b,c,f);b.call(0,f);return-1},timeUnits:{millisecond:1,second:1E3,minute:6E4,hour:36E5,day:864E5,week:6048E5,month:24192E5,year:314496E5},uniqueKey:u,useSerialIds:function(c){return b=m(c,b)},wrap:function(b,c,f){var n=b[c];b[c]=function(){var b=arguments,c=this;return f.apply(this,[function(){return n.apply(c,arguments.length?arguments:b)}].concat([].slice.call(arguments)))}}};"";return n});K(g,"Core/Chart/ChartDefaults.js",[],function(){return{alignThresholds:!1,panning:{enabled:!1,
type:"x"},styledMode:!1,borderRadius:0,colorCount:10,allowMutatingData:!0,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacing:[10,10,15,10],resetZoomButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}},zoomBySingleTouch:!1,zooming:{singleTouch:!1,resetButton:{theme:{zIndex:6},position:{align:"right",x:-10,y:10}}},width:null,height:null,borderColor:"#335cad",backgroundColor:"#ffffff",plotBorderColor:"#cccccc"}});K(g,"Core/Color/Color.js",[g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,
g){var A=g.isNumber,F=g.merge,C=g.pInt;g=function(){function g(A){this.rgba=[NaN,NaN,NaN,NaN];this.input=A;var t=a.Color;if(t&&t!==g)return new t(A);if(!(this instanceof g))return new g(A);this.init(A)}g.parse=function(a){return a?new g(a):g.None};g.prototype.init=function(a){var t;if("object"===typeof a&&"undefined"!==typeof a.stops)this.stops=a.stops.map(function(d){return new g(d[1])});else if("string"===typeof a){this.input=a=g.names[a.toLowerCase()]||a;if("#"===a.charAt(0)){var r=a.length;var l=
parseInt(a.substr(1),16);7===r?t=[(l&16711680)>>16,(l&65280)>>8,l&255,1]:4===r&&(t=[(l&3840)>>4|(l&3840)>>8,(l&240)>>4|l&240,(l&15)<<4|l&15,1])}if(!t)for(l=g.parsers.length;l--&&!t;){var e=g.parsers[l];(r=e.regex.exec(a))&&(t=e.parse(r))}}t&&(this.rgba=t)};g.prototype.get=function(a){var t=this.input,r=this.rgba;if("object"===typeof t&&"undefined"!==typeof this.stops){var l=F(t);l.stops=[].slice.call(l.stops);this.stops.forEach(function(e,d){l.stops[d]=[l.stops[d][0],e.get(a)]});return l}return r&&
A(r[0])?"rgb"===a||!a&&1===r[3]?"rgb("+r[0]+","+r[1]+","+r[2]+")":"a"===a?"".concat(r[3]):"rgba("+r.join(",")+")":t};g.prototype.brighten=function(a){var t=this.rgba;if(this.stops)this.stops.forEach(function(l){l.brighten(a)});else if(A(a)&&0!==a)for(var r=0;3>r;r++)t[r]+=C(255*a),0>t[r]&&(t[r]=0),255<t[r]&&(t[r]=255);return this};g.prototype.setOpacity=function(a){this.rgba[3]=a;return this};g.prototype.tweenTo=function(a,t){var r=this.rgba,l=a.rgba;if(!A(r[0])||!A(l[0]))return a.input||"none";a=
1!==l[3]||1!==r[3];return(a?"rgba(":"rgb(")+Math.round(l[0]+(r[0]-l[0])*(1-t))+","+Math.round(l[1]+(r[1]-l[1])*(1-t))+","+Math.round(l[2]+(r[2]-l[2])*(1-t))+(a?","+(l[3]+(r[3]-l[3])*(1-t)):"")+")"};g.names={white:"#ffffff",black:"#000000"};g.parsers=[{regex:/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/,parse:function(a){return[C(a[1]),C(a[2]),C(a[3]),parseFloat(a[4],10)]}},{regex:/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/,parse:function(a){return[C(a[1]),
C(a[2]),C(a[3]),1]}}];g.None=new g("");return g}();"";return g});K(g,"Core/Color/Palettes.js",[],function(){return{colors:"#7cb5ec #434348 #90ed7d #f7a35c #8085e9 #f15c80 #e4d354 #2b908f #f45b5b #91e8e1".split(" ")}});K(g,"Core/Time.js",[g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,g){var A=a.win,F=g.defined,C=g.error,B=g.extend,H=g.isObject,t=g.merge,r=g.objectEach,l=g.pad,e=g.pick,d=g.splat,h=g.timeUnits,m=a.isSafari&&A.Intl&&A.Intl.DateTimeFormat.prototype.formatRange,k=a.isSafari&&
A.Intl&&!A.Intl.DateTimeFormat.prototype.formatRange;g=function(){function p(d){this.options={};this.variableTimezone=this.useUTC=!1;this.Date=A.Date;this.getTimezoneOffset=this.timezoneOffsetFunction();this.update(d)}p.prototype.get=function(d,e){if(this.variableTimezone||this.timezoneOffset){var h=e.getTime(),k=h-this.getTimezoneOffset(e);e.setTime(k);d=e["getUTC"+d]();e.setTime(h);return d}return this.useUTC?e["getUTC"+d]():e["get"+d]()};p.prototype.set=function(d,e,h){if(this.variableTimezone||
this.timezoneOffset){if("Milliseconds"===d||"Seconds"===d||"Minutes"===d&&0===this.getTimezoneOffset(e)%36E5)return e["setUTC"+d](h);var k=this.getTimezoneOffset(e);k=e.getTime()-k;e.setTime(k);e["setUTC"+d](h);d=this.getTimezoneOffset(e);k=e.getTime()+d;return e.setTime(k)}return this.useUTC||m&&"FullYear"===d?e["setUTC"+d](h):e["set"+d](h)};p.prototype.update=function(d){void 0===d&&(d={});var h=e(d.useUTC,!0);this.options=d=t(!0,this.options,d);this.Date=d.Date||A.Date||Date;this.timezoneOffset=
(this.useUTC=h)&&d.timezoneOffset||void 0;this.getTimezoneOffset=this.timezoneOffsetFunction();this.variableTimezone=h&&!(!d.getTimezoneOffset&&!d.timezone)};p.prototype.makeTime=function(d,h,m,p,y,c){if(this.useUTC){var w=this.Date.UTC.apply(0,arguments);var f=this.getTimezoneOffset(w);w+=f;var n=this.getTimezoneOffset(w);f!==n?w+=n-f:f-36E5!==this.getTimezoneOffset(w-36E5)||k||(w-=36E5)}else w=(new this.Date(d,h,e(m,1),e(p,0),e(y,0),e(c,0))).getTime();return w};p.prototype.timezoneOffsetFunction=
function(){var d=this,e=this.options,h=e.getTimezoneOffset,k=e.moment||A.moment;if(!this.useUTC)return function(d){return 6E4*(new Date(d.toString())).getTimezoneOffset()};if(e.timezone){if(k)return function(d){return 6E4*-k.tz(d,e.timezone).utcOffset()};C(25)}return this.useUTC&&h?function(d){return 6E4*h(d.valueOf())}:function(){return 6E4*(d.timezoneOffset||0)}};p.prototype.dateFormat=function(d,h,k){if(!F(h)||isNaN(h))return a.defaultOptions.lang&&a.defaultOptions.lang.invalidDate||"";d=e(d,"%Y-%m-%d %H:%M:%S");
var m=this,p=new this.Date(h),c=this.get("Hours",p),w=this.get("Day",p),f=this.get("Date",p),n=this.get("Month",p),b=this.get("FullYear",p),u=a.defaultOptions.lang,z=u&&u.weekdays,q=u&&u.shortWeekdays;p=B({a:q?q[w]:z[w].substr(0,3),A:z[w],d:l(f),e:l(f,2," "),w:w,b:u.shortMonths[n],B:u.months[n],m:l(n+1),o:n+1,y:b.toString().substr(2,2),Y:b,H:l(c),k:c,I:l(c%12||12),l:c%12||12,M:l(this.get("Minutes",p)),p:12>c?"AM":"PM",P:12>c?"am":"pm",S:l(p.getSeconds()),L:l(Math.floor(h%1E3),3)},a.dateFormats);r(p,
function(b,c){for(;-1!==d.indexOf("%"+c);)d=d.replace("%"+c,"function"===typeof b?b.call(m,h):b)});return k?d.substr(0,1).toUpperCase()+d.substr(1):d};p.prototype.resolveDTLFormat=function(e){return H(e,!0)?e:(e=d(e),{main:e[0],from:e[1],to:e[2]})};p.prototype.getTimeTicks=function(d,k,p,m){var y=this,c=[],w={},f=new y.Date(k),n=d.unitRange,b=d.count||1,u;m=e(m,1);if(F(k)){y.set("Milliseconds",f,n>=h.second?0:b*Math.floor(y.get("Milliseconds",f)/b));n>=h.second&&y.set("Seconds",f,n>=h.minute?0:b*
Math.floor(y.get("Seconds",f)/b));n>=h.minute&&y.set("Minutes",f,n>=h.hour?0:b*Math.floor(y.get("Minutes",f)/b));n>=h.hour&&y.set("Hours",f,n>=h.day?0:b*Math.floor(y.get("Hours",f)/b));n>=h.day&&y.set("Date",f,n>=h.month?1:Math.max(1,b*Math.floor(y.get("Date",f)/b)));if(n>=h.month){y.set("Month",f,n>=h.year?0:b*Math.floor(y.get("Month",f)/b));var z=y.get("FullYear",f)}n>=h.year&&y.set("FullYear",f,z-z%b);n===h.week&&(z=y.get("Day",f),y.set("Date",f,y.get("Date",f)-z+m+(z<m?-7:0)));z=y.get("FullYear",
f);m=y.get("Month",f);var q=y.get("Date",f),N=y.get("Hours",f);k=f.getTime();!y.variableTimezone&&y.useUTC||!F(p)||(u=p-k>4*h.month||y.getTimezoneOffset(k)!==y.getTimezoneOffset(p));k=f.getTime();for(f=1;k<p;)c.push(k),k=n===h.year?y.makeTime(z+f*b,0):n===h.month?y.makeTime(z,m+f*b):!u||n!==h.day&&n!==h.week?u&&n===h.hour&&1<b?y.makeTime(z,m,q,N+f*b):k+n*b:y.makeTime(z,m,q+f*b*(n===h.day?1:7)),f++;c.push(k);n<=h.hour&&1E4>c.length&&c.forEach(function(b){0===b%18E5&&"000000000"===y.dateFormat("%H%M%S%L",
b)&&(w[b]="day")})}c.info=B(d,{higherRanks:w,totalRange:n*b});return c};p.prototype.getDateFormat=function(d,e,k,p){var m=this.dateFormat("%m-%d %H:%M:%S.%L",e),c={millisecond:15,second:12,minute:9,hour:6,day:3},w="millisecond";for(f in h){if(d===h.week&&+this.dateFormat("%w",e)===k&&"00:00:00.000"===m.substr(6)){var f="week";break}if(h[f]>d){f=w;break}if(c[f]&&m.substr(c[f])!=="01-01 00:00:00.000".substr(c[f]))break;"week"!==f&&(w=f)}return this.resolveDTLFormat(p[f]).main};return p}();"";return g});
K(g,"Core/Defaults.js",[g["Core/Chart/ChartDefaults.js"],g["Core/Color/Color.js"],g["Core/Globals.js"],g["Core/Color/Palettes.js"],g["Core/Time.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B){g=g.parse;var A=B.merge,t={colors:F.colors,symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:"January February March April May June July August September October November December".split(" "),shortMonths:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),
weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),decimalPoint:".",numericSymbols:"kMGTPE".split(""),resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",thousandsSep:" "},global:{},time:{Date:void 0,getTimezoneOffset:void 0,timezone:void 0,timezoneOffset:0,useUTC:!0},chart:a,title:{text:"Chart title",align:"center",margin:15,widthAdjust:-44},subtitle:{text:"",align:"center",widthAdjust:-44},caption:{margin:15,text:"",align:"left",verticalAlign:"bottom"},plotOptions:{},
labels:{style:{position:"absolute",color:"#333333"}},legend:{enabled:!0,align:"center",alignColumns:!0,className:"highcharts-no-tooltip",layout:"horizontal",labelFormatter:function(){return this.name},borderColor:"#999999",borderRadius:0,navigation:{activeColor:"#003399",inactiveColor:"#cccccc"},itemStyle:{color:"#333333",cursor:"pointer",fontSize:"12px",fontWeight:"bold",textOverflow:"ellipsis"},itemHoverStyle:{color:"#000000"},itemHiddenStyle:{color:"#cccccc"},shadow:!1,itemCheckboxStyle:{position:"absolute",
width:"13px",height:"13px"},squareSymbol:!0,symbolPadding:5,verticalAlign:"bottom",x:0,y:0,title:{style:{fontWeight:"bold"}}},loading:{labelStyle:{fontWeight:"bold",position:"relative",top:"45%"},style:{position:"absolute",backgroundColor:"#ffffff",opacity:.5,textAlign:"center"}},tooltip:{enabled:!0,animation:x.svg,borderRadius:3,dateTimeLabelFormats:{millisecond:"%A, %b %e, %H:%M:%S.%L",second:"%A, %b %e, %H:%M:%S",minute:"%A, %b %e, %H:%M",hour:"%A, %b %e, %H:%M",day:"%A, %b %e, %Y",week:"Week from %A, %b %e, %Y",
month:"%B %Y",year:"%Y"},footerFormat:"",headerShape:"callout",hideDelay:500,padding:8,shape:"callout",shared:!1,snap:x.isTouchDevice?25:10,headerFormat:'<span style="font-size: 10px">{point.key}</span><br/>',pointFormat:'<span style="color:{point.color}">\u25cf</span> {series.name}: <b>{point.y}</b><br/>',backgroundColor:g("#f7f7f7").setOpacity(.85).get(),borderWidth:1,shadow:!0,stickOnContact:!1,style:{color:"#333333",cursor:"default",fontSize:"12px",whiteSpace:"nowrap"},useHTML:!1},credits:{enabled:!0,
href:"https://www.highcharts.com?credits",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#999999",fontSize:"9px"},text:"Highcharts.com"}};t.chart.styledMode=!1;"";var r=new C(A(t.global,t.time));a={defaultOptions:t,defaultTime:r,getOptions:function(){return t},setOptions:function(l){A(!0,t,l);if(l.time||l.global)x.time?x.time.update(A(t.global,t.time,l.global,l.time)):x.time=r;return t}};"";return a});K(g,"Core/Animation/Fx.js",[g["Core/Color/Color.js"],
g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,g,x){var A=a.parse,C=g.win,B=x.isNumber,H=x.objectEach;return function(){function a(a,l,e){this.pos=NaN;this.options=l;this.elem=a;this.prop=e}a.prototype.dSetter=function(){var a=this.paths,l=a&&a[0];a=a&&a[1];var e=this.now||0,d=[];if(1!==e&&l&&a)if(l.length===a.length&&1>e)for(var h=0;h<a.length;h++){for(var m=l[h],k=a[h],p=[],D=0;D<k.length;D++){var I=m[D],E=k[D];B(I)&&B(E)&&("A"!==k[0]||4!==D&&5!==D)?p[D]=I+e*(E-I):p[D]=E}d.push(p)}else d=
a;else d=this.toD||[];this.elem.attr("d",d,void 0,!0)};a.prototype.update=function(){var a=this.elem,l=this.prop,e=this.now,d=this.options.step;if(this[l+"Setter"])this[l+"Setter"]();else a.attr?a.element&&a.attr(l,e,null,!0):a.style[l]=e+this.unit;d&&d.call(a,e,this)};a.prototype.run=function(r,l,e){var d=this,h=d.options,m=function(e){return m.stopped?!1:d.step(e)},k=C.requestAnimationFrame||function(d){setTimeout(d,13)},p=function(){for(var d=0;d<a.timers.length;d++)a.timers[d]()||a.timers.splice(d--,
1);a.timers.length&&k(p)};r!==l||this.elem["forceAnimate:"+this.prop]?(this.startTime=+new Date,this.start=r,this.end=l,this.unit=e,this.now=this.start,this.pos=0,m.elem=this.elem,m.prop=this.prop,m()&&1===a.timers.push(m)&&k(p)):(delete h.curAnim[this.prop],h.complete&&0===Object.keys(h.curAnim).length&&h.complete.call(this.elem))};a.prototype.step=function(a){var l=+new Date,e=this.options,d=this.elem,h=e.complete,m=e.duration,k=e.curAnim;if(d.attr&&!d.element)a=!1;else if(a||l>=m+this.startTime){this.now=
this.end;this.pos=1;this.update();var p=k[this.prop]=!0;H(k,function(d){!0!==d&&(p=!1)});p&&h&&h.call(d);a=!1}else this.pos=e.easing((l-this.startTime)/m),this.now=this.start+(this.end-this.start)*this.pos,this.update(),a=!0;return a};a.prototype.initPath=function(a,l,e){function d(d,c){for(;d.length<L;){var e=d[0],f=c[L-d.length];f&&"M"===e[0]&&(d[0]="C"===f[0]?["C",e[1],e[2],e[1],e[2],e[1],e[2]]:["L",e[1],e[2]]);d.unshift(e);p&&(e=d.pop(),d.push(d[d.length-1],e))}}function h(d,c){for(;d.length<
L;)if(c=d[Math.floor(d.length/D)-1].slice(),"C"===c[0]&&(c[1]=c[5],c[2]=c[6]),p){var e=d[Math.floor(d.length/D)].slice();d.splice(d.length/2,0,c,e)}else d.push(c)}var m=a.startX,k=a.endX;e=e.slice();var p=a.isArea,D=p?2:1;l=l&&l.slice();if(!l)return[e,e];if(m&&k&&k.length){for(a=0;a<m.length;a++)if(m[a]===k[0]){var I=a;break}else if(m[0]===k[k.length-m.length+a]){I=a;var E=!0;break}else if(m[m.length-1]===k[k.length-m.length+a]){I=m.length-a;break}"undefined"===typeof I&&(l=[])}if(l.length&&B(I)){var L=
e.length+I*D;E?(d(l,e),h(e,l)):(d(e,l),h(l,e))}return[l,e]};a.prototype.fillSetter=function(){a.prototype.strokeSetter.apply(this,arguments)};a.prototype.strokeSetter=function(){this.elem.attr(this.prop,A(this.start).tweenTo(A(this.end),this.pos),void 0,!0)};a.timers=[];return a}()});K(g,"Core/Animation/AnimationUtilities.js",[g["Core/Animation/Fx.js"],g["Core/Utilities.js"]],function(a,g){function A(d){return r(d)?l({duration:500,defer:0},d):{duration:d?500:0,defer:0}}function F(d,e){for(var k=a.timers.length;k--;)a.timers[k].elem!==
d||e&&e!==a.timers[k].prop||(a.timers[k].stopped=!0)}var C=g.defined,B=g.getStyle,H=g.isArray,t=g.isNumber,r=g.isObject,l=g.merge,e=g.objectEach,d=g.pick;return{animate:function(d,m,k){var p,h="",I,E;if(!r(k)){var g=arguments;k={duration:g[2],easing:g[3],complete:g[4]}}t(k.duration)||(k.duration=400);k.easing="function"===typeof k.easing?k.easing:Math[k.easing]||Math.easeInOutSine;k.curAnim=l(m);e(m,function(e,c){F(d,c);E=new a(d,k,c);I=void 0;"d"===c&&H(m.d)?(E.paths=E.initPath(d,d.pathArray,m.d),
E.toD=m.d,p=0,I=1):d.attr?p=d.attr(c):(p=parseFloat(B(d,c))||0,"opacity"!==c&&(h="px"));I||(I=e);"string"===typeof I&&I.match("px")&&(I=I.replace(/px/g,""));E.run(p,I,h)})},animObject:A,getDeferredAnimation:function(d,e,k){var p=A(e),h=0,m=0;(k?[k]:d.series).forEach(function(d){d=A(d.options.animation);h=e&&C(e.defer)?p.defer:Math.max(h,d.duration+d.defer);m=Math.min(p.duration,d.duration)});d.renderer.forExport&&(h=0);return{defer:Math.max(0,h-m),duration:Math.min(h,m)}},setAnimation:function(e,
m){m.renderer.globalAnimation=d(e,m.options.chart.animation,!0)},stop:F}});K(g,"Core/Renderer/HTML/AST.js",[g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,g){var A=a.SVG_NS,F=g.attr,C=g.createElement,B=g.css,H=g.error,t=g.isFunction,r=g.isString,l=g.objectEach,e=g.splat,d=(g=a.win.trustedTypes)&&t(g.createPolicy)&&g.createPolicy("highcharts",{createHTML:function(d){return d}}),h=d?d.createHTML(""):"";try{var m=!!(new DOMParser).parseFromString(h,"text/html")}catch(k){m=!1}t=function(){function k(d){this.nodes=
"string"===typeof d?this.parseMarkup(d):d}k.filterUserAttributes=function(d){l(d,function(e,h){var m=!0;-1===k.allowedAttributes.indexOf(h)&&(m=!1);-1!==["background","dynsrc","href","lowsrc","src"].indexOf(h)&&(m=r(e)&&k.allowedReferences.some(function(d){return 0===e.indexOf(d)}));m||(H(33,!1,void 0,{"Invalid attribute in config":"".concat(h)}),delete d[h]);r(e)&&d[h]&&(d[h]=e.replace(/</g,"&lt;"))});return d};k.parseStyle=function(d){return d.split(";").reduce(function(d,e){e=e.split(":").map(function(d){return d.trim()});
var k=e.shift();k&&e.length&&(d[k.replace(/-([a-z])/g,function(d){return d[1].toUpperCase()})]=e.join(":"));return d},{})};k.setElementHTML=function(d,e){d.innerHTML=k.emptyHTML;e&&(new k(e)).addToDOM(d)};k.prototype.addToDOM=function(d){function h(d,m){var p;e(d).forEach(function(d){var c=d.tagName,e=d.textContent?a.doc.createTextNode(d.textContent):void 0,f=k.bypassHTMLFiltering;if(c)if("#text"===c)var n=e;else if(-1!==k.allowedTags.indexOf(c)||f){c=a.doc.createElementNS("svg"===c?A:m.namespaceURI||
A,c);var b=d.attributes||{};l(d,function(c,f){"tagName"!==f&&"attributes"!==f&&"children"!==f&&"style"!==f&&"textContent"!==f&&(b[f]=c)});F(c,f?b:k.filterUserAttributes(b));d.style&&B(c,d.style);e&&c.appendChild(e);h(d.children||[],c);n=c}else H(33,!1,void 0,{"Invalid tagName in config":c});n&&m.appendChild(n);p=n});return p}return h(this.nodes,d)};k.prototype.parseMarkup=function(e){var h=[];e=e.trim().replace(/ style=(["'])/g," data-style=$1");if(m)e=(new DOMParser).parseFromString(d?d.createHTML(e):
e,"text/html");else{var p=C("div");p.innerHTML=e;e={body:p}}var a=function(d,e){var c=d.nodeName.toLowerCase(),h={tagName:c};"#text"===c&&(h.textContent=d.textContent||"");if(c=d.attributes){var f={};[].forEach.call(c,function(b){"data-style"===b.name?h.style=k.parseStyle(b.value):f[b.name]=b.value});h.attributes=f}if(d.childNodes.length){var n=[];[].forEach.call(d.childNodes,function(b){a(b,n)});n.length&&(h.children=n)}e.push(h)};[].forEach.call(e.body.childNodes,function(d){return a(d,h)});return h};
k.allowedAttributes="aria-controls aria-describedby aria-expanded aria-haspopup aria-hidden aria-label aria-labelledby aria-live aria-pressed aria-readonly aria-roledescription aria-selected class clip-path color colspan cx cy d dx dy disabled fill height href id in markerHeight markerWidth offset opacity orient padding paddingLeft paddingRight patternUnits r refX refY role scope slope src startOffset stdDeviation stroke stroke-linecap stroke-width style tableValues result rowspan summary target tabindex text-align text-anchor textAnchor textLength title type valign width x x1 x2 xlink:href y y1 y2 zIndex".split(" ");
k.allowedReferences="https:// http:// mailto: / ../ ./ #".split(" ");k.allowedTags="a abbr b br button caption circle clipPath code dd defs div dl dt em feComponentTransfer feFuncA feFuncB feFuncG feFuncR feGaussianBlur feOffset feMerge feMergeNode filter h1 h2 h3 h4 h5 h6 hr i img li linearGradient marker ol p path pattern pre rect small span stop strong style sub sup svg table text textPath thead title tbody tspan td th tr u ul #text".split(" ");k.emptyHTML=h;k.bypassHTMLFiltering=!1;return k}();
"";return t});K(g,"Core/FormatUtilities.js",[g["Core/Defaults.js"],g["Core/Utilities.js"]],function(a,g){function A(a,e,d,h){a=+a||0;e=+e;var m=F.lang,k=(a.toString().split(".")[1]||"").split("e")[0].length,p=a.toString().split("e"),l=e;if(-1===e)e=Math.min(k,20);else if(!H(e))e=2;else if(e&&p[1]&&0>p[1]){var g=e+ +p[1];0<=g?(p[0]=(+p[0]).toExponential(g).split("e")[0],e=g):(p[0]=p[0].split(".")[0]||0,a=20>e?(p[0]*Math.pow(10,p[1])).toFixed(e):0,p[1]=0)}g=(Math.abs(p[1]?p[0]:a)+Math.pow(10,-Math.max(e,
k)-1)).toFixed(e);k=String(r(g));var E=3<k.length?k.length%3:0;d=t(d,m.decimalPoint);h=t(h,m.thousandsSep);a=(0>a?"-":"")+(E?k.substr(0,E)+h:"");a=0>+p[1]&&!l?"0":a+k.substr(E).replace(/(\d{3})(?=\d)/g,"$1"+h);e&&(a+=d+g.slice(-e));p[1]&&0!==+a&&(a+="e"+p[1]);return a}var F=a.defaultOptions,C=a.defaultTime,B=g.getNestedProperty,H=g.isNumber,t=g.pick,r=g.pInt;return{dateFormat:function(a,e,d){return C.dateFormat(a,e,d)},format:function(a,e,d){var h="{",m=!1,k=/f$/,p=/\.([0-9])/,l=F.lang,g=d&&d.time||
C;d=d&&d.numberFormatter||A;for(var E=[];a;){var t=a.indexOf(h);if(-1===t)break;var y=a.slice(0,t);if(m){y=y.split(":");h=B(y.shift()||"",e);if(y.length&&"number"===typeof h)if(y=y.join(":"),k.test(y)){var c=parseInt((y.match(p)||["","-1"])[1],10);null!==h&&(h=d(h,c,l.decimalPoint,-1<y.indexOf(",")?l.thousandsSep:""))}else h=g.dateFormat(y,h);E.push(h)}else E.push(y);a=a.slice(t+1);h=(m=!m)?"}":"{"}E.push(a);return E.join("")},numberFormat:A}});K(g,"Core/Renderer/RendererUtilities.js",[g["Core/Utilities.js"]],
function(a){var g=a.clamp,x=a.pick,F=a.stableSort,C;(function(a){function A(a,r,l){var e=a,d=e.reducedLen||r,h=function(d,e){return(e.rank||0)-(d.rank||0)},m=function(d,e){return d.target-e.target},k,p=!0,D=[],I=0;for(k=a.length;k--;)I+=a[k].size;if(I>d){F(a,h);for(I=k=0;I<=d;)I+=a[k].size,k++;D=a.splice(k-1,a.length)}F(a,m);for(a=a.map(function(d){return{size:d.size,targets:[d.target],align:x(d.align,.5)}});p;){for(k=a.length;k--;)d=a[k],h=(Math.min.apply(0,d.targets)+Math.max.apply(0,d.targets))/
2,d.pos=g(h-d.size*d.align,0,r-d.size);k=a.length;for(p=!1;k--;)0<k&&a[k-1].pos+a[k-1].size>a[k].pos&&(a[k-1].size+=a[k].size,a[k-1].targets=a[k-1].targets.concat(a[k].targets),a[k-1].align=.5,a[k-1].pos+a[k-1].size>r&&(a[k-1].pos=r-a[k-1].size),a.splice(k,1),p=!0)}e.push.apply(e,D);k=0;a.some(function(d){var h=0;return(d.targets||[]).some(function(){e[k].pos=d.pos+h;if("undefined"!==typeof l&&Math.abs(e[k].pos-e[k].target)>l)return e.slice(0,k+1).forEach(function(d){return delete d.pos}),e.reducedLen=
(e.reducedLen||r)-.1*r,e.reducedLen>.1*r&&A(e,r,l),!0;h+=e[k].size;k++;return!1})});F(e,m);return e}a.distribute=A})(C||(C={}));return C});K(g,"Core/Renderer/SVG/SVGElement.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/Color/Color.js"],g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,g,x,F){var A=a.animate,B=a.animObject,H=a.stop,t=x.deg2rad,r=x.doc,l=x.svg,e=x.SVG_NS,d=x.win,h=F.addEvent,m=F.attr,k=F.createElement,p=F.css,D=F.defined,I=F.erase,E=F.extend,L=F.fireEvent,y=F.isArray,
c=F.isFunction,w=F.isString,f=F.merge,n=F.objectEach,b=F.pick,u=F.pInt,z=F.syncTimeout,q=F.uniqueKey;a=function(){function a(){this.element=void 0;this.onEvents={};this.opacity=1;this.renderer=void 0;this.SVG_NS=e;this.symbolCustomAttribs="x y width height r start end innerR anchorX anchorY rounded".split(" ")}a.prototype._defaultGetter=function(c){c=b(this[c+"Value"],this[c],this.element?this.element.getAttribute(c):null,0);/^[\-0-9\.]+$/.test(c)&&(c=parseFloat(c));return c};a.prototype._defaultSetter=
function(b,c,f){f.setAttribute(c,b)};a.prototype.add=function(b){var c=this.renderer,f=this.element;b&&(this.parentGroup=b);"undefined"!==typeof this.textStr&&"text"===this.element.nodeName&&c.buildText(this);this.added=!0;if(!b||b.handleZ||this.zIndex)var d=this.zIndexSetter();d||(b?b.element:c.box).appendChild(f);if(this.onAdd)this.onAdd();return this};a.prototype.addClass=function(b,c){var f=c?"":this.attr("class")||"";b=(b||"").split(/ /g).reduce(function(b,c){-1===f.indexOf(c)&&b.push(c);return b},
f?[f]:[]).join(" ");b!==f&&this.attr("class",b);return this};a.prototype.afterSetters=function(){this.doTransform&&(this.updateTransform(),this.doTransform=!1)};a.prototype.align=function(c,f,d){var n={},e=this.renderer,v=e.alignedObjects,q,J,u;if(c){if(this.alignOptions=c,this.alignByTranslate=f,!d||w(d))this.alignTo=q=d||"renderer",I(v,this),v.push(this),d=void 0}else c=this.alignOptions,f=this.alignByTranslate,q=this.alignTo;d=b(d,e[q],"scrollablePlotBox"===q?e.plotBox:void 0,e);q=c.align;var a=
c.verticalAlign;e=(d.x||0)+(c.x||0);v=(d.y||0)+(c.y||0);"right"===q?J=1:"center"===q&&(J=2);J&&(e+=(d.width-(c.width||0))/J);n[f?"translateX":"x"]=Math.round(e);"bottom"===a?u=1:"middle"===a&&(u=2);u&&(v+=(d.height-(c.height||0))/u);n[f?"translateY":"y"]=Math.round(v);this[this.placed?"animate":"attr"](n);this.placed=!0;this.alignAttr=n;return this};a.prototype.alignSetter=function(b){var c={left:"start",center:"middle",right:"end"};c[b]&&(this.alignValue=b,this.element.setAttribute("text-anchor",
c[b]))};a.prototype.animate=function(c,f,d){var e=this,q=B(b(f,this.renderer.globalAnimation,!0));f=q.defer;b(r.hidden,r.msHidden,r.webkitHidden,!1)&&(q.duration=0);0!==q.duration?(d&&(q.complete=d),z(function(){e.element&&A(e,c,q)},f)):(this.attr(c,void 0,d||q.complete),n(c,function(b,c){q.step&&q.step.call(this,b,{prop:c,pos:1,elem:this})},this));return this};a.prototype.applyTextOutline=function(b){var c=this.element;-1!==b.indexOf("contrast")&&(b=b.replace(/contrast/g,this.renderer.getContrast(c.style.fill)));
var f=b.split(" ");b=f[f.length-1];if((f=f[0])&&"none"!==f&&x.svg){this.fakeTS=!0;f=f.replace(/(^[\d\.]+)(.*?)$/g,function(b,c,f){return 2*Number(c)+f});this.removeTextOutline();var d=r.createElementNS(e,"tspan");m(d,{"class":"highcharts-text-outline",fill:b,stroke:b,"stroke-width":f,"stroke-linejoin":"round"});b=c.querySelector("textPath")||c;[].forEach.call(b.childNodes,function(b){var c=b.cloneNode(!0);c.removeAttribute&&["fill","stroke","stroke-width","stroke"].forEach(function(b){return c.removeAttribute(b)});
d.appendChild(c)});var n=0;[].forEach.call(b.querySelectorAll("text tspan"),function(b){n+=Number(b.getAttribute("dy"))});f=r.createElementNS(e,"tspan");f.textContent="\u200b";m(f,{x:Number(c.getAttribute("x")),dy:-n});d.appendChild(f);b.insertBefore(d,b.firstChild)}};a.prototype.attr=function(b,c,f,d){var e=this.element,v=this.symbolCustomAttribs,q,u=this,J,a;if("string"===typeof b&&"undefined"!==typeof c){var G=b;b={};b[G]=c}"string"===typeof b?u=(this[b+"Getter"]||this._defaultGetter).call(this,
b,e):(n(b,function(c,f){J=!1;d||H(this,f);this.symbolName&&-1!==v.indexOf(f)&&(q||(this.symbolAttr(b),q=!0),J=!0);!this.rotation||"x"!==f&&"y"!==f||(this.doTransform=!0);J||(a=this[f+"Setter"]||this._defaultSetter,a.call(this,c,f,e),!this.styledMode&&this.shadows&&/^(width|height|visibility|x|y|d|transform|cx|cy|r)$/.test(f)&&this.updateShadows(f,c,a))},this),this.afterSetters());f&&f.call(this);return u};a.prototype.clip=function(b){return this.attr("clip-path",b?"url("+this.renderer.url+"#"+b.id+
")":"none")};a.prototype.crisp=function(b,c){c=c||b.strokeWidth||0;var f=Math.round(c)%2/2;b.x=Math.floor(b.x||this.x||0)+f;b.y=Math.floor(b.y||this.y||0)+f;b.width=Math.floor((b.width||this.width||0)-2*f);b.height=Math.floor((b.height||this.height||0)-2*f);D(b.strokeWidth)&&(b.strokeWidth=c);return b};a.prototype.complexColor=function(b,c,d){var e=this.renderer,u,v,a,J,h,z,G,k,M,w,m=[],p;L(this.renderer,"complexColor",{args:arguments},function(){b.radialGradient?v="radialGradient":b.linearGradient&&
(v="linearGradient");if(v){a=b[v];h=e.gradients;z=b.stops;M=d.radialReference;y(a)&&(b[v]=a={x1:a[0],y1:a[1],x2:a[2],y2:a[3],gradientUnits:"userSpaceOnUse"});"radialGradient"===v&&M&&!D(a.gradientUnits)&&(J=a,a=f(a,e.getRadialAttr(M,J),{gradientUnits:"userSpaceOnUse"}));n(a,function(b,c){"id"!==c&&m.push(c,b)});n(z,function(b){m.push(b)});m=m.join(",");if(h[m])w=h[m].attr("id");else{a.id=w=q();var U=h[m]=e.createElement(v).attr(a).add(e.defs);U.radAttr=J;U.stops=[];z.forEach(function(b){0===b[1].indexOf("rgba")?
(u=g.parse(b[1]),G=u.get("rgb"),k=u.get("a")):(G=b[1],k=1);b=e.createElement("stop").attr({offset:b[0],"stop-color":G,"stop-opacity":k}).add(U);U.stops.push(b)})}p="url("+e.url+"#"+w+")";d.setAttribute(c,p);d.gradient=m;b.toString=function(){return p}}})};a.prototype.css=function(b){var c=this.styles,d={},e=this.element,q=!c;b.color&&(b.fill=b.color);c&&n(b,function(b,f){c&&c[f]!==b&&(d[f]=b,q=!0)});if(q){c&&(b=E(c,d));if(null===b.width||"auto"===b.width)delete this.textWidth;else if("text"===e.nodeName.toLowerCase()&&
b.width)var v=this.textWidth=u(b.width);this.styles=b;v&&!l&&this.renderer.forExport&&delete b.width;var a=f(b);e.namespaceURI===this.SVG_NS&&["textOutline","textOverflow","width"].forEach(function(b){return a&&delete a[b]});p(e,a);this.added&&("text"===this.element.nodeName&&this.renderer.buildText(this),b.textOutline&&this.applyTextOutline(b.textOutline))}return this};a.prototype.dashstyleSetter=function(c){var f=this["stroke-width"];"inherit"===f&&(f=1);if(c=c&&c.toLowerCase()){var d=c.replace("shortdashdotdot",
"3,1,1,1,1,1,").replace("shortdashdot","3,1,1,1").replace("shortdot","1,1,").replace("shortdash","3,1,").replace("longdash","8,3,").replace(/dot/g,"1,3,").replace("dash","4,3,").replace(/,$/,"").split(",");for(c=d.length;c--;)d[c]=""+u(d[c])*b(f,NaN);c=d.join(",").replace(/NaN/g,"none");this.element.setAttribute("stroke-dasharray",c)}};a.prototype.destroy=function(){var b=this,c=b.element||{},f=b.renderer,d=c.ownerSVGElement,e=f.isSVG&&"SPAN"===c.nodeName&&b.parentGroup||void 0;c.onclick=c.onmouseout=
c.onmouseover=c.onmousemove=c.point=null;H(b);if(b.clipPath&&d){var v=b.clipPath;[].forEach.call(d.querySelectorAll("[clip-path],[CLIP-PATH]"),function(b){-1<b.getAttribute("clip-path").indexOf(v.element.id)&&b.removeAttribute("clip-path")});b.clipPath=v.destroy()}if(b.stops){for(d=0;d<b.stops.length;d++)b.stops[d].destroy();b.stops.length=0;b.stops=void 0}b.safeRemoveChild(c);for(f.styledMode||b.destroyShadows();e&&e.div&&0===e.div.childNodes.length;)c=e.parentGroup,b.safeRemoveChild(e.div),delete e.div,
e=c;b.alignTo&&I(f.alignedObjects,b);n(b,function(c,f){b[f]&&b[f].parentGroup===b&&b[f].destroy&&b[f].destroy();delete b[f]})};a.prototype.destroyShadows=function(){(this.shadows||[]).forEach(function(b){this.safeRemoveChild(b)},this);this.shadows=void 0};a.prototype.dSetter=function(b,c,f){y(b)&&("string"===typeof b[0]&&(b=this.renderer.pathToSegments(b)),this.pathArray=b,b=b.reduce(function(b,c,f){return c&&c.join?(f?b+" ":"")+c.join(" "):(c||"").toString()},""));/(NaN| {2}|^$)/.test(b)&&(b="M 0 0");
this[c]!==b&&(f.setAttribute(c,b),this[c]=b)};a.prototype.fadeOut=function(c){var f=this;f.animate({opacity:0},{duration:b(c,150),complete:function(){f.hide()}})};a.prototype.fillSetter=function(b,c,f){"string"===typeof b?f.setAttribute(c,b):b&&this.complexColor(b,c,f)};a.prototype.getBBox=function(f,d){var n=this.alignValue,e=this.element,q=this.renderer,v=this.styles,u=this.textStr,h=q.cache,z=q.cacheKeys,k=e.namespaceURI===this.SVG_NS;d=b(d,this.rotation,0);var G=q.styledMode?e&&a.prototype.getStyle.call(e,
"font-size"):v&&v.fontSize,m;if(D(u)){var M=u.toString();-1===M.indexOf("<")&&(M=M.replace(/[0-9]/g,"0"));M+=["",d,G,this.textWidth,n,v&&v.textOverflow,v&&v.fontWeight].join()}M&&!f&&(m=h[M]);if(!m){if(k||q.forExport){try{var w=this.fakeTS&&function(b){var c=e.querySelector(".highcharts-text-outline");c&&p(c,{display:b})};c(w)&&w("none");m=e.getBBox?E({},e.getBBox()):{width:e.offsetWidth,height:e.offsetHeight,x:0,y:0};c(w)&&w("")}catch(V){""}if(!m||0>m.width)m={x:0,y:0,width:0,height:0}}else m=this.htmlGetBBox();
if(q.isSVG&&(q=m.width,f=m.height,k&&(m.height=f={"11px,17":14,"13px,20":16}[""+(G||"")+",".concat(Math.round(f))]||f),d)){k=Number(e.getAttribute("y")||0)-m.y;n={right:1,center:.5}[n||0]||0;v=d*t;G=(d-90)*t;var J=q*Math.cos(v);d=q*Math.sin(v);w=Math.cos(G);v=Math.sin(G);q=m.x+n*(q-J)+k*w;G=q+J;w=G-f*w;J=w-J;k=m.y+k-n*d+k*v;n=k+d;f=n-f*v;d=f-d;m.x=Math.min(q,G,w,J);m.y=Math.min(k,n,f,d);m.width=Math.max(q,G,w,J)-m.x;m.height=Math.max(k,n,f,d)-m.y}if(M&&(""===u||0<m.height)){for(;250<z.length;)delete h[z.shift()];
h[M]||z.push(M);h[M]=m}}return m};a.prototype.getStyle=function(b){return d.getComputedStyle(this.element||this,"").getPropertyValue(b)};a.prototype.hasClass=function(b){return-1!==(""+this.attr("class")).split(" ").indexOf(b)};a.prototype.hide=function(){return this.attr({visibility:"hidden"})};a.prototype.htmlGetBBox=function(){return{height:0,width:0,x:0,y:0}};a.prototype.init=function(b,c){this.element="span"===c?k(c):r.createElementNS(this.SVG_NS,c);this.renderer=b;L(this,"afterInit")};a.prototype.on=
function(b,c){var f=this.onEvents;if(f[b])f[b]();f[b]=h(this.element,b,c);return this};a.prototype.opacitySetter=function(b,c,f){this.opacity=b=Number(Number(b).toFixed(3));f.setAttribute(c,b)};a.prototype.removeClass=function(b){return this.attr("class",(""+this.attr("class")).replace(w(b)?new RegExp("(^| )".concat(b,"( |$)")):b," ").replace(/ +/g," ").trim())};a.prototype.removeTextOutline=function(){var b=this.element.querySelector("tspan.highcharts-text-outline");b&&this.safeRemoveChild(b)};a.prototype.safeRemoveChild=
function(b){var c=b.parentNode;c&&c.removeChild(b)};a.prototype.setRadialReference=function(b){var c=this.element.gradient&&this.renderer.gradients[this.element.gradient];this.element.radialReference=b;c&&c.radAttr&&c.animate(this.renderer.getRadialAttr(b,c.radAttr));return this};a.prototype.setTextPath=function(b,c){var d=this;c=f(!0,{enabled:!0,attributes:{dy:-5,startOffset:"50%",textAnchor:"middle"}},c);var n=this.renderer.url,e=this.text||this,v=e.textPath,u=c.attributes,a=c.enabled;b=b||v&&v.path;
v&&v.undo();b&&a?(c=h(e,"afterModifyTree",function(c){if(b&&a){var f=b.attr("id");f||b.attr("id",f=q());var v={x:0,y:0};D(u.dx)&&(v.dx=u.dx,delete u.dx);D(u.dy)&&(v.dy=u.dy,delete u.dy);e.attr(v);d.attr({transform:""});d.box&&(d.box=d.box.destroy());v=c.nodes.slice(0);c.nodes.length=0;c.nodes[0]={tagName:"textPath",attributes:E(u,{"text-anchor":u.textAnchor,href:""+n+"#".concat(f)}),children:v}}}),e.textPath={path:b,undo:c}):(e.attr({dx:0,dy:0}),delete e.textPath);this.added&&(e.textCache="",this.renderer.buildText(e));
return this};a.prototype.shadow=function(b,c,f){var d=[],e=this.element,v=this.oldShadowOptions,q=this.parentGroup,u=q&&90===q.rotation;q={color:"#000000",offsetX:u?-1:1,offsetY:u?-1:1,opacity:.15,width:3};var a=!1,h;!0===b?h=q:"object"===typeof b&&(h=E(q,b));h&&(h&&v&&n(h,function(b,c){b!==v[c]&&(a=!0)}),a&&this.destroyShadows(),this.oldShadowOptions=h);if(!h)this.destroyShadows();else if(!this.shadows){q=h.opacity/h.width;var G=u?"translate(".concat(h.offsetY,", ").concat(h.offsetX,")"):"translate(".concat(h.offsetX,
", ").concat(h.offsetY,")");for(u=1;u<=h.width;u++){var k=e.cloneNode(!1);var z=2*h.width+1-2*u;m(k,{stroke:b.color||"#000000","stroke-opacity":q*u,"stroke-width":z,transform:G,fill:"none"});k.setAttribute("class",(k.getAttribute("class")||"")+" highcharts-shadow");f&&(m(k,"height",Math.max(m(k,"height")-z,0)),k.cutHeight=z);c?c.element.appendChild(k):e.parentNode&&e.parentNode.insertBefore(k,e);d.push(k)}this.shadows=d}return this};a.prototype.show=function(b){void 0===b&&(b=!0);return this.attr({visibility:b?
"inherit":"visible"})};a.prototype["stroke-widthSetter"]=function(b,c,f){this[c]=b;f.setAttribute(c,b)};a.prototype.strokeWidth=function(){if(!this.renderer.styledMode)return this["stroke-width"]||0;var b=this.getStyle("stroke-width"),c=0;if(b.indexOf("px")===b.length-2)c=u(b);else if(""!==b){var f=r.createElementNS(e,"rect");m(f,{width:b,"stroke-width":0});this.element.parentNode.appendChild(f);c=f.getBBox().width;f.parentNode.removeChild(f)}return c};a.prototype.symbolAttr=function(c){var f=this;
"x y r start end width height innerR anchorX anchorY clockwise".split(" ").forEach(function(d){f[d]=b(c[d],f[d])});f.attr({d:f.renderer.symbols[f.symbolName](f.x,f.y,f.width,f.height,f)})};a.prototype.textSetter=function(b){b!==this.textStr&&(delete this.textPxLength,this.textStr=b,this.added&&this.renderer.buildText(this))};a.prototype.titleSetter=function(c){var f=this.element,d=f.getElementsByTagName("title")[0]||r.createElementNS(this.SVG_NS,"title");f.insertBefore?f.insertBefore(d,f.firstChild):
f.appendChild(d);d.textContent=String(b(c,"")).replace(/<[^>]*>/g,"").replace(/&lt;/g,"<").replace(/&gt;/g,">")};a.prototype.toFront=function(){var b=this.element;b.parentNode.appendChild(b);return this};a.prototype.translate=function(b,c){return this.attr({translateX:b,translateY:c})};a.prototype.updateShadows=function(b,c,f){var d=this.shadows;if(d)for(var e=d.length;e--;)f.call(d[e],"height"===b?Math.max(c-(d[e].cutHeight||0),0):"d"===b?this.d:c,b,d[e])};a.prototype.updateTransform=function(){var c=
this.element,f=this.matrix,d=this.rotation;d=void 0===d?0:d;var e=this.scaleX,n=this.scaleY,v=this.translateX,q=this.translateY;v=["translate("+(void 0===v?0:v)+","+(void 0===q?0:q)+")"];D(f)&&v.push("matrix("+f.join(",")+")");d&&v.push("rotate("+d+" "+b(this.rotationOriginX,c.getAttribute("x"),0)+" "+b(this.rotationOriginY,c.getAttribute("y")||0)+")");(D(e)||D(n))&&v.push("scale("+b(e,1)+" "+b(n,1)+")");v.length&&!(this.text||this).textPath&&c.setAttribute("transform",v.join(" "))};a.prototype.visibilitySetter=
function(b,c,f){"inherit"===b?f.removeAttribute(c):this[c]!==b&&f.setAttribute(c,b);this[c]=b};a.prototype.xGetter=function(b){"circle"===this.element.nodeName&&("x"===b?b="cx":"y"===b&&(b="cy"));return this._defaultGetter(b)};a.prototype.zIndexSetter=function(b,c){var f=this.renderer,d=this.parentGroup,e=(d||f).element||f.box,v=this.element;f=e===f.box;var n=!1;var q=this.added;var a;D(b)?(v.setAttribute("data-z-index",b),b=+b,this[c]===b&&(q=!1)):D(this[c])&&v.removeAttribute("data-z-index");this[c]=
b;if(q){(b=this.zIndex)&&d&&(d.handleZ=!0);c=e.childNodes;for(a=c.length-1;0<=a&&!n;a--){d=c[a];q=d.getAttribute("data-z-index");var h=!D(q);if(d!==v)if(0>b&&h&&!f&&!a)e.insertBefore(v,c[a]),n=!0;else if(u(q)<=b||h&&(!D(b)||0<=b))e.insertBefore(v,c[a+1]||null),n=!0}n||(e.insertBefore(v,c[f?3:0]||null),n=!0)}return n};return a}();a.prototype.strokeSetter=a.prototype.fillSetter;a.prototype.yGetter=a.prototype.xGetter;a.prototype.matrixSetter=a.prototype.rotationOriginXSetter=a.prototype.rotationOriginYSetter=
a.prototype.rotationSetter=a.prototype.scaleXSetter=a.prototype.scaleYSetter=a.prototype.translateXSetter=a.prototype.translateYSetter=a.prototype.verticalAlignSetter=function(b,c){this[c]=b;this.doTransform=!0};"";return a});K(g,"Core/Renderer/RendererRegistry.js",[g["Core/Globals.js"]],function(a){var g;(function(g){g.rendererTypes={};var A;g.getRendererType=function(a){void 0===a&&(a=A);return g.rendererTypes[a]||g.rendererTypes[A]};g.registerRendererType=function(x,B,H){g.rendererTypes[x]=B;if(!A||
H)A=x,a.Renderer=B}})(g||(g={}));return g});K(g,"Core/Renderer/SVG/SVGLabel.js",[g["Core/Renderer/SVG/SVGElement.js"],g["Core/Utilities.js"]],function(a,g){var A=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,e){d.__proto__=e}||function(d,e){for(var a in e)e.hasOwnProperty(a)&&(d[a]=e[a])};return a(e,d)};return function(e,d){function h(){this.constructor=e}a(e,d);e.prototype=null===d?Object.create(d):(h.prototype=d.prototype,
new h)}}(),F=g.defined,C=g.extend,B=g.isNumber,H=g.merge,t=g.pick,r=g.removeEvent;return function(g){function e(d,a,m,k,p,l,I,E,r,y){var c=g.call(this)||this;c.paddingLeftSetter=c.paddingSetter;c.paddingRightSetter=c.paddingSetter;c.init(d,"g");c.textStr=a;c.x=m;c.y=k;c.anchorX=l;c.anchorY=I;c.baseline=r;c.className=y;c.addClass("button"===y?"highcharts-no-tooltip":"highcharts-label");y&&c.addClass("highcharts-"+y);c.text=d.text(void 0,0,0,E).attr({zIndex:1});var h;"string"===typeof p&&((h=/^url\((.*?)\)$/.test(p))||
c.renderer.symbols[p])&&(c.symbolKey=p);c.bBox=e.emptyBBox;c.padding=3;c.baselineOffset=0;c.needsBox=d.styledMode||h;c.deferredAttr={};c.alignFactor=0;return c}A(e,g);e.prototype.alignSetter=function(d){d={left:0,center:.5,right:1}[d];d!==this.alignFactor&&(this.alignFactor=d,this.bBox&&B(this.xSetting)&&this.attr({x:this.xSetting}))};e.prototype.anchorXSetter=function(d,e){this.anchorX=d;this.boxAttr(e,Math.round(d)-this.getCrispAdjust()-this.xSetting)};e.prototype.anchorYSetter=function(d,e){this.anchorY=
d;this.boxAttr(e,d-this.ySetting)};e.prototype.boxAttr=function(d,e){this.box?this.box.attr(d,e):this.deferredAttr[d]=e};e.prototype.css=function(d){if(d){var h={};d=H(d);e.textProps.forEach(function(e){"undefined"!==typeof d[e]&&(h[e]=d[e],delete d[e])});this.text.css(h);"fontSize"in h||"fontWeight"in h?this.updateTextPadding():("width"in h||"textOverflow"in h)&&this.updateBoxSize()}return a.prototype.css.call(this,d)};e.prototype.destroy=function(){r(this.element,"mouseenter");r(this.element,"mouseleave");
this.text&&this.text.destroy();this.box&&(this.box=this.box.destroy());a.prototype.destroy.call(this)};e.prototype.fillSetter=function(d,e){d&&(this.needsBox=!0);this.fill=d;this.boxAttr(e,d)};e.prototype.getBBox=function(){this.textStr&&0===this.bBox.width&&0===this.bBox.height&&this.updateBoxSize();var d=this.padding,e=t(this.paddingLeft,d);return{width:this.width,height:this.height,x:this.bBox.x-e,y:this.bBox.y-d}};e.prototype.getCrispAdjust=function(){return this.renderer.styledMode&&this.box?
this.box.strokeWidth()%2/2:(this["stroke-width"]?parseInt(this["stroke-width"],10):0)%2/2};e.prototype.heightSetter=function(d){this.heightSetting=d};e.prototype.onAdd=function(){this.text.add(this);this.attr({text:t(this.textStr,""),x:this.x||0,y:this.y||0});this.box&&F(this.anchorX)&&this.attr({anchorX:this.anchorX,anchorY:this.anchorY})};e.prototype.paddingSetter=function(d,e){B(d)?d!==this[e]&&(this[e]=d,this.updateTextPadding()):this[e]=void 0};e.prototype.rSetter=function(d,e){this.boxAttr(e,
d)};e.prototype.shadow=function(d){d&&!this.renderer.styledMode&&(this.updateBoxSize(),this.box&&this.box.shadow(d));return this};e.prototype.strokeSetter=function(d,e){this.stroke=d;this.boxAttr(e,d)};e.prototype["stroke-widthSetter"]=function(d,e){d&&(this.needsBox=!0);this["stroke-width"]=d;this.boxAttr(e,d)};e.prototype["text-alignSetter"]=function(d){this.textAlign=d};e.prototype.textSetter=function(d){"undefined"!==typeof d&&this.text.attr({text:d});this.updateTextPadding()};e.prototype.updateBoxSize=
function(){var d=this.text,a=d.element.style,m={},k=this.padding,p=this.bBox=B(this.widthSetting)&&B(this.heightSetting)&&!this.textAlign||!F(d.textStr)?e.emptyBBox:d.getBBox();this.width=this.getPaddedWidth();this.height=(this.heightSetting||p.height||0)+2*k;a=this.renderer.fontMetrics(a&&a.fontSize,d);this.baselineOffset=k+Math.min((this.text.firstLineMetrics||a).b,p.height||Infinity);this.heightSetting&&(this.baselineOffset+=(this.heightSetting-a.h)/2);this.needsBox&&!d.textPath&&(this.box||(d=
this.box=this.symbolKey?this.renderer.symbol(this.symbolKey):this.renderer.rect(),d.addClass(("button"===this.className?"":"highcharts-label-box")+(this.className?" highcharts-"+this.className+"-box":"")),d.add(this)),d=this.getCrispAdjust(),m.x=d,m.y=(this.baseline?-this.baselineOffset:0)+d,m.width=Math.round(this.width),m.height=Math.round(this.height),this.box.attr(C(m,this.deferredAttr)),this.deferredAttr={})};e.prototype.updateTextPadding=function(){var d=this.text;if(!d.textPath){this.updateBoxSize();
var e=this.baseline?0:this.baselineOffset,a=t(this.paddingLeft,this.padding);F(this.widthSetting)&&this.bBox&&("center"===this.textAlign||"right"===this.textAlign)&&(a+={center:.5,right:1}[this.textAlign]*(this.widthSetting-this.bBox.width));if(a!==d.x||e!==d.y)d.attr("x",a),d.hasBoxWidthChanged&&(this.bBox=d.getBBox(!0)),"undefined"!==typeof e&&d.attr("y",e);d.x=a;d.y=e}};e.prototype.widthSetter=function(d){this.widthSetting=B(d)?d:void 0};e.prototype.getPaddedWidth=function(){var d=this.padding,
e=t(this.paddingLeft,d);d=t(this.paddingRight,d);return(this.widthSetting||this.bBox.width||0)+e+d};e.prototype.xSetter=function(d){this.x=d;this.alignFactor&&(d-=this.alignFactor*this.getPaddedWidth(),this["forceAnimate:x"]=!0);this.xSetting=Math.round(d);this.attr("translateX",this.xSetting)};e.prototype.ySetter=function(d){this.ySetting=this.y=Math.round(d);this.attr("translateY",this.ySetting)};e.emptyBBox={width:0,height:0,x:0,y:0};e.textProps="color direction fontFamily fontSize fontStyle fontWeight lineHeight textAlign textDecoration textOutline textOverflow width".split(" ");
return e}(a)});K(g,"Core/Renderer/SVG/Symbols.js",[g["Core/Utilities.js"]],function(a){function g(a,g,l,e,d){var h=[];if(d){var m=d.start||0,k=H(d.r,l);l=H(d.r,e||l);var p=(d.end||0)-.001;e=d.innerR;var D=H(d.open,.001>Math.abs((d.end||0)-m-2*Math.PI)),I=Math.cos(m),E=Math.sin(m),r=Math.cos(p),y=Math.sin(p);m=H(d.longArc,.001>p-m-Math.PI?0:1);h.push(["M",a+k*I,g+l*E],["A",k,l,0,m,H(d.clockwise,1),a+k*r,g+l*y]);C(e)&&h.push(D?["M",a+e*r,g+e*y]:["L",a+e*r,g+e*y],["A",e,e,0,m,C(d.clockwise)?1-d.clockwise:
0,a+e*I,g+e*E]);D||h.push(["Z"])}return h}function x(a,g,l,e,d){return d&&d.r?F(a,g,l,e,d):[["M",a,g],["L",a+l,g],["L",a+l,g+e],["L",a,g+e],["Z"]]}function F(a,g,l,e,d){d=d&&d.r||0;return[["M",a+d,g],["L",a+l-d,g],["C",a+l,g,a+l,g,a+l,g+d],["L",a+l,g+e-d],["C",a+l,g+e,a+l,g+e,a+l-d,g+e],["L",a+d,g+e],["C",a,g+e,a,g+e,a,g+e-d],["L",a,g+d],["C",a,g,a,g,a+d,g]]}var C=a.defined,B=a.isNumber,H=a.pick;return{arc:g,callout:function(a,g,l,e,d){var h=Math.min(d&&d.r||0,l,e),m=h+6,k=d&&d.anchorX;d=d&&d.anchorY||
0;var p=F(a,g,l,e,{r:h});if(!B(k))return p;a+k>=l?d>g+m&&d<g+e-m?p.splice(3,1,["L",a+l,d-6],["L",a+l+6,d],["L",a+l,d+6],["L",a+l,g+e-h]):p.splice(3,1,["L",a+l,e/2],["L",k,d],["L",a+l,e/2],["L",a+l,g+e-h]):0>=a+k?d>g+m&&d<g+e-m?p.splice(7,1,["L",a,d+6],["L",a-6,d],["L",a,d-6],["L",a,g+h]):p.splice(7,1,["L",a,e/2],["L",k,d],["L",a,e/2],["L",a,g+h]):d&&d>e&&k>a+m&&k<a+l-m?p.splice(5,1,["L",k+6,g+e],["L",k,g+e+6],["L",k-6,g+e],["L",a+h,g+e]):d&&0>d&&k>a+m&&k<a+l-m&&p.splice(1,1,["L",k-6,g],["L",k,g-6],
["L",k+6,g],["L",l-h,g]);return p},circle:function(a,r,l,e){return g(a+l/2,r+e/2,l/2,e/2,{start:.5*Math.PI,end:2.5*Math.PI,open:!1})},diamond:function(a,g,l,e){return[["M",a+l/2,g],["L",a+l,g+e/2],["L",a+l/2,g+e],["L",a,g+e/2],["Z"]]},rect:x,roundedRect:F,square:x,triangle:function(a,g,l,e){return[["M",a+l/2,g],["L",a+l,g+e],["L",a,g+e],["Z"]]},"triangle-down":function(a,g,l,e){return[["M",a,g],["L",a+l,g],["L",a+l/2,g+e],["Z"]]}}});K(g,"Core/Renderer/SVG/TextBuilder.js",[g["Core/Renderer/HTML/AST.js"],
g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,g,x){var A=g.doc,C=g.SVG_NS,B=g.win,H=x.attr,t=x.extend,r=x.fireEvent,l=x.isString,e=x.objectEach,d=x.pick;return function(){function h(d){var e=d.styles;this.renderer=d.renderer;this.svgElement=d;this.width=d.textWidth;this.textLineHeight=e&&e.lineHeight;this.textOutline=e&&e.textOutline;this.ellipsis=!(!e||"ellipsis"!==e.textOverflow);this.noWrap=!(!e||"nowrap"!==e.whiteSpace);this.fontSize=e&&e.fontSize}h.prototype.buildSVG=function(){var e=
this.svgElement,k=e.element,h=e.renderer,g=d(e.textStr,"").toString(),I=-1!==g.indexOf("<"),E=k.childNodes;h=this.width&&!e.added&&h.box;var L=/<br.*?>/g,y=[g,this.ellipsis,this.noWrap,this.textLineHeight,this.textOutline,this.fontSize,this.width].join();if(y!==e.textCache){e.textCache=y;delete e.actualWidth;for(y=E.length;y--;)k.removeChild(E[y]);I||this.ellipsis||this.width||e.textPath||-1!==g.indexOf(" ")&&(!this.noWrap||L.test(g))?""!==g&&(h&&h.appendChild(k),g=new a(g),this.modifyTree(g.nodes),
g.addToDOM(k),this.modifyDOM(),this.ellipsis&&-1!==(k.textContent||"").indexOf("\u2026")&&e.attr("title",this.unescapeEntities(e.textStr||"",["&lt;","&gt;"])),h&&h.removeChild(k)):k.appendChild(A.createTextNode(this.unescapeEntities(g)));l(this.textOutline)&&e.applyTextOutline&&e.applyTextOutline(this.textOutline)}};h.prototype.modifyDOM=function(){var d=this,e=this.svgElement,a=H(e.element,"x");e.firstLineMetrics=void 0;for(var h;h=e.element.firstChild;)if(/^[\s\u200B]*$/.test(h.textContent||" "))e.element.removeChild(h);
else break;[].forEach.call(e.element.querySelectorAll("tspan.highcharts-br"),function(h,c){h.nextSibling&&h.previousSibling&&(0===c&&1===h.previousSibling.nodeType&&(e.firstLineMetrics=e.renderer.fontMetrics(void 0,h.previousSibling)),H(h,{dy:d.getLineHeight(h.nextSibling),x:a}))});var g=this.width||0;if(g){var l=function(h,c){var w=h.textContent||"",f=w.replace(/([^\^])-/g,"$1- ").split(" "),n=!d.noWrap&&(1<f.length||1<e.element.childNodes.length),b=d.getLineHeight(c),u=0,z=e.actualWidth;if(d.ellipsis)w&&
d.truncate(h,w,void 0,0,Math.max(0,g-parseInt(d.fontSize||12,10)),function(b,c){return b.substring(0,c)+"\u2026"});else if(n){w=[];for(n=[];c.firstChild&&c.firstChild!==h;)n.push(c.firstChild),c.removeChild(c.firstChild);for(;f.length;)f.length&&!d.noWrap&&0<u&&(w.push(h.textContent||""),h.textContent=f.join(" ").replace(/- /g,"-")),d.truncate(h,void 0,f,0===u?z||0:0,g,function(b,c){return f.slice(0,c).join(" ").replace(/- /g,"-")}),z=e.actualWidth,u++;n.forEach(function(b){c.insertBefore(b,h)});
w.forEach(function(f){c.insertBefore(A.createTextNode(f),h);f=A.createElementNS(C,"tspan");f.textContent="\u200b";H(f,{dy:b,x:a});c.insertBefore(f,h)})}},L=function(d){[].slice.call(d.childNodes).forEach(function(c){c.nodeType===B.Node.TEXT_NODE?l(c,d):(-1!==c.className.baseVal.indexOf("highcharts-br")&&(e.actualWidth=0),L(c))})};L(e.element)}};h.prototype.getLineHeight=function(d){var e;d=d.nodeType===B.Node.TEXT_NODE?d.parentElement:d;this.renderer.styledMode||(e=d&&/(px|em)$/.test(d.style.fontSize)?
d.style.fontSize:this.fontSize||this.renderer.style.fontSize||12);return this.textLineHeight?parseInt(this.textLineHeight.toString(),10):this.renderer.fontMetrics(e,d||this.svgElement.element).h};h.prototype.modifyTree=function(d){var e=this,a=function(h,k){var m=h.attributes;m=void 0===m?{}:m;var p=h.children,g=h.style;g=void 0===g?{}:g;var c=h.tagName,w=e.renderer.styledMode;if("b"===c||"strong"===c)w?m["class"]="highcharts-strong":g.fontWeight="bold";else if("i"===c||"em"===c)w?m["class"]="highcharts-emphasized":
g.fontStyle="italic";g&&g.color&&(g.fill=g.color);"br"===c?(m["class"]="highcharts-br",h.textContent="\u200b",(k=d[k+1])&&k.textContent&&(k.textContent=k.textContent.replace(/^ +/gm,""))):"a"===c&&p&&p.some(function(c){return"#text"===c.tagName})&&(h.children=[{children:p,tagName:"tspan"}]);"#text"!==c&&"a"!==c&&(h.tagName="tspan");t(h,{attributes:m,style:g});p&&p.filter(function(c){return"#text"!==c.tagName}).forEach(a)};d.forEach(a);r(this.svgElement,"afterModifyTree",{nodes:d})};h.prototype.truncate=
function(d,e,a,h,g,l){var k=this.svgElement,m=k.renderer,c=k.rotation,w=[],f=a?1:0,n=(e||a||"").length,b=n,u,z=function(b,c){c=c||b;var f=d.parentNode;if(f&&"undefined"===typeof w[c])if(f.getSubStringLength)try{w[c]=h+f.getSubStringLength(0,a?c+1:c)}catch(Q){""}else m.getSpanWidth&&(d.textContent=l(e||a,b),w[c]=h+m.getSpanWidth(k,d));return w[c]};k.rotation=0;var q=z(d.textContent.length);if(h+q>g){for(;f<=n;)b=Math.ceil((f+n)/2),a&&(u=l(a,b)),q=z(b,u&&u.length-1),f===n?f=n+1:q>g?n=b-1:f=b;0===n?
d.textContent="":e&&n===e.length-1||(d.textContent=u||l(e||a,b))}a&&a.splice(0,b);k.actualWidth=q;k.rotation=c};h.prototype.unescapeEntities=function(d,a){e(this.renderer.escapes,function(e,h){a&&-1!==a.indexOf(e)||(d=d.toString().replace(new RegExp(e,"g"),h))});return d};return h}()});K(g,"Core/Renderer/SVG/SVGRenderer.js",[g["Core/Renderer/HTML/AST.js"],g["Core/Color/Color.js"],g["Core/Globals.js"],g["Core/Renderer/RendererRegistry.js"],g["Core/Renderer/SVG/SVGElement.js"],g["Core/Renderer/SVG/SVGLabel.js"],
g["Core/Renderer/SVG/Symbols.js"],g["Core/Renderer/SVG/TextBuilder.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B,H,t,r){var l=x.charts,e=x.deg2rad,d=x.doc,h=x.isFirefox,m=x.isMS,k=x.isWebKit,p=x.noop,D=x.SVG_NS,I=x.symbolSizes,E=x.win,L=r.addEvent,y=r.attr,c=r.createElement,w=r.css,f=r.defined,n=r.destroyObjectProperties,b=r.extend,u=r.isArray,z=r.isNumber,q=r.isObject,N=r.isString,J=r.merge,O=r.pick,Q=r.pInt,A=r.uniqueKey,Y;x=function(){function v(b,c,f,d,e,v,a){this.width=this.url=this.style=
this.isSVG=this.imgCount=this.height=this.gradients=this.globalAnimation=this.defs=this.chartIndex=this.cacheKeys=this.cache=this.boxWrapper=this.box=this.alignedObjects=void 0;this.init(b,c,f,d,e,v,a)}v.prototype.init=function(b,c,f,e,v,a,n){var G=this.createElement("svg").attr({version:"1.1","class":"highcharts-root"}),q=G.element;n||G.css(this.getStyle(e));b.appendChild(q);y(b,"dir","ltr");-1===b.innerHTML.indexOf("xmlns")&&y(q,"xmlns",this.SVG_NS);this.isSVG=!0;this.box=q;this.boxWrapper=G;this.alignedObjects=
[];this.url=this.getReferenceURL();this.createElement("desc").add().element.appendChild(d.createTextNode("Created with Highcharts 10.3.3"));this.defs=this.createElement("defs").add();this.allowHTML=a;this.forExport=v;this.styledMode=n;this.gradients={};this.cache={};this.cacheKeys=[];this.imgCount=0;this.setSize(c,f,!1);var u;h&&b.getBoundingClientRect&&(c=function(){w(b,{left:0,top:0});u=b.getBoundingClientRect();w(b,{left:Math.ceil(u.left)-u.left+"px",top:Math.ceil(u.top)-u.top+"px"})},c(),this.unSubPixelFix=
L(E,"resize",c))};v.prototype.definition=function(b){return(new a([b])).addToDOM(this.defs.element)};v.prototype.getReferenceURL=function(){if((h||k)&&d.getElementsByTagName("base").length){if(!f(Y)){var b=A();b=(new a([{tagName:"svg",attributes:{width:8,height:8},children:[{tagName:"defs",children:[{tagName:"clipPath",attributes:{id:b},children:[{tagName:"rect",attributes:{width:4,height:4}}]}]},{tagName:"rect",attributes:{id:"hitme",width:8,height:8,"clip-path":"url(#".concat(b,")"),fill:"rgba(0,0,0,0.001)"}}]}])).addToDOM(d.body);
w(b,{position:"fixed",top:0,left:0,zIndex:9E5});var c=d.elementFromPoint(6,6);Y="hitme"===(c&&c.id);d.body.removeChild(b)}if(Y)return E.location.href.split("#")[0].replace(/<[^>]*>/g,"").replace(/([\('\)])/g,"\\$1").replace(/ /g,"%20")}return""};v.prototype.getStyle=function(c){return this.style=b({fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica, sans-serif',fontSize:"12px"},c)};v.prototype.setStyle=function(b){this.boxWrapper.css(this.getStyle(b))};v.prototype.isHidden=function(){return!this.boxWrapper.getBBox().width};
v.prototype.destroy=function(){var b=this.defs;this.box=null;this.boxWrapper=this.boxWrapper.destroy();n(this.gradients||{});this.gradients=null;b&&(this.defs=b.destroy());this.unSubPixelFix&&this.unSubPixelFix();return this.alignedObjects=null};v.prototype.createElement=function(b){var c=new this.Element;c.init(this,b);return c};v.prototype.getRadialAttr=function(b,c){return{cx:b[0]-b[2]/2+(c.cx||0)*b[2],cy:b[1]-b[2]/2+(c.cy||0)*b[2],r:(c.r||0)*b[2]}};v.prototype.buildText=function(b){(new t(b)).buildSVG()};
v.prototype.getContrast=function(b){b=g.parse(b).rgba.map(function(b){b/=255;return.03928>=b?b/12.92:Math.pow((b+.055)/1.055,2.4)});b=.2126*b[0]+.7152*b[1]+.0722*b[2];return 1.05/(b+.05)>(b+.05)/.05?"#FFFFFF":"#000000"};v.prototype.button=function(c,f,d,e,v,n,u,h,z,w){void 0===v&&(v={});var G=this.label(c,f,d,z,void 0,void 0,w,void 0,"button"),k=this.styledMode;c=v.states||{};var M=0;v=J(v);delete v.states;var g=J({color:"#333333",cursor:"pointer",fontWeight:"normal"},v.style);delete v.style;var p=
a.filterUserAttributes(v);G.attr(J({padding:8,r:2},p));if(!k){p=J({fill:"#f7f7f7",stroke:"#cccccc","stroke-width":1},p);n=J(p,{fill:"#e6e6e6"},a.filterUserAttributes(n||c.hover||{}));var U=n.style;delete n.style;u=J(p,{fill:"#e6ebf5",style:{color:"#000000",fontWeight:"bold"}},a.filterUserAttributes(u||c.select||{}));var P=u.style;delete u.style;h=J(p,{style:{color:"#cccccc"}},a.filterUserAttributes(h||c.disabled||{}));var y=h.style;delete h.style}L(G.element,m?"mouseover":"mouseenter",function(){3!==
M&&G.setState(1)});L(G.element,m?"mouseout":"mouseleave",function(){3!==M&&G.setState(M)});G.setState=function(b){1!==b&&(G.state=M=b);G.removeClass(/highcharts-button-(normal|hover|pressed|disabled)/).addClass("highcharts-button-"+["normal","hover","pressed","disabled"][b||0]);k||(G.attr([p,n,u,h][b||0]),b=[g,U,P,y][b||0],q(b)&&G.css(b))};k||(G.attr(p).css(b({cursor:"default"},g)),w&&G.text.css({pointerEvents:"none"}));return G.on("touchstart",function(b){return b.stopPropagation()}).on("click",
function(b){3!==M&&e.call(G,b)})};v.prototype.crispLine=function(b,c,d){void 0===d&&(d="round");var e=b[0],v=b[1];f(e[1])&&e[1]===v[1]&&(e[1]=v[1]=Math[d](e[1])-c%2/2);f(e[2])&&e[2]===v[2]&&(e[2]=v[2]=Math[d](e[2])+c%2/2);return b};v.prototype.path=function(c){var f=this.styledMode?{}:{fill:"none"};u(c)?f.d=c:q(c)&&b(f,c);return this.createElement("path").attr(f)};v.prototype.circle=function(b,c,f){b=q(b)?b:"undefined"===typeof b?{}:{x:b,y:c,r:f};c=this.createElement("circle");c.xSetter=c.ySetter=
function(b,c,f){f.setAttribute("c"+c,b)};return c.attr(b)};v.prototype.arc=function(b,c,f,d,e,v){q(b)?(d=b,c=d.y,f=d.r,b=d.x):d={innerR:d,start:e,end:v};b=this.symbol("arc",b,c,f,f,d);b.r=f;return b};v.prototype.rect=function(b,c,f,d,e,v){e=q(b)?b.r:e;var a=this.createElement("rect");b=q(b)?b:"undefined"===typeof b?{}:{x:b,y:c,width:Math.max(f,0),height:Math.max(d,0)};this.styledMode||("undefined"!==typeof v&&(b["stroke-width"]=v,b=a.crisp(b)),b.fill="none");e&&(b.r=e);a.rSetter=function(b,c,f){a.r=
b;y(f,{rx:b,ry:b})};a.rGetter=function(){return a.r||0};return a.attr(b)};v.prototype.setSize=function(b,c,f){this.width=b;this.height=c;this.boxWrapper.animate({width:b,height:c},{step:function(){this.attr({viewBox:"0 0 "+this.attr("width")+" "+this.attr("height")})},duration:O(f,!0)?void 0:0});this.alignElements()};v.prototype.g=function(b){var c=this.createElement("g");return b?c.attr({"class":"highcharts-"+b}):c};v.prototype.image=function(b,c,f,d,e,v){var a={preserveAspectRatio:"none"},n=function(b,
c){b.setAttributeNS?b.setAttributeNS("http://www.w3.org/1999/xlink","href",c):b.setAttribute("hc-svg-href",c)};z(c)&&(a.x=c);z(f)&&(a.y=f);z(d)&&(a.width=d);z(e)&&(a.height=e);var G=this.createElement("image").attr(a);c=function(c){n(G.element,b);v.call(G,c)};v?(n(G.element,"data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="),f=new E.Image,L(f,"load",c),f.src=b,f.complete&&c({})):n(G.element,b);return G};v.prototype.symbol=function(e,v,a,n,G,q){var u=this,h=/^url\((.*?)\)$/,
z=h.test(e),k=!z&&(this.symbols[e]?e:"circle"),g=k&&this.symbols[k],m;if(g){"number"===typeof v&&(m=g.call(this.symbols,Math.round(v||0),Math.round(a||0),n||0,G||0,q));var p=this.path(m);u.styledMode||p.attr("fill","none");b(p,{symbolName:k||void 0,x:v,y:a,width:n,height:G});q&&b(p,q)}else if(z){var P=e.match(h)[1];var U=p=this.image(P);U.imgwidth=O(I[P]&&I[P].width,q&&q.width);U.imgheight=O(I[P]&&I[P].height,q&&q.height);var N=function(b){return b.attr({width:b.width,height:b.height})};["width",
"height"].forEach(function(b){U[b+"Setter"]=function(b,c){this[c]=b;b=this.alignByTranslate;var d=this.element,e=this.width,v=this.height,a=this.imgwidth,n=this.imgheight,G=this["img"+c];if(f(G)){var u=1;q&&"within"===q.backgroundSize&&e&&v?(u=Math.min(e/a,v/n),G=Math.round(G*u),y(d,{width:Math.round(a*u),height:Math.round(n*u)})):d&&d.setAttribute(c,G);b||this.translate(((e||0)-G*u)/2,((v||0)-G*u)/2)}}});f(v)&&U.attr({x:v,y:a});U.isImg=!0;f(U.imgwidth)&&f(U.imgheight)?N(U):(U.attr({width:0,height:0}),
c("img",{onload:function(){var b=l[u.chartIndex];0===this.width&&(w(this,{position:"absolute",top:"-999em"}),d.body.appendChild(this));I[P]={width:this.width,height:this.height};U.imgwidth=this.width;U.imgheight=this.height;U.element&&N(U);this.parentNode&&this.parentNode.removeChild(this);u.imgCount--;if(!u.imgCount&&b&&!b.hasLoaded)b.onload()},src:P}),this.imgCount++)}return p};v.prototype.clipRect=function(b,c,f,d){var e=A()+"-",v=this.createElement("clipPath").attr({id:e}).add(this.defs);b=this.rect(b,
c,f,d,0).add(v);b.id=e;b.clipPath=v;b.count=0;return b};v.prototype.text=function(b,c,d,e){var v={};if(e&&(this.allowHTML||!this.forExport))return this.html(b,c,d);v.x=Math.round(c||0);d&&(v.y=Math.round(d));f(b)&&(v.text=b);b=this.createElement("text").attr(v);if(!e||this.forExport&&!this.allowHTML)b.xSetter=function(b,c,f){for(var d=f.getElementsByTagName("tspan"),e=f.getAttribute(c),v=0,a;v<d.length;v++)a=d[v],a.getAttribute(c)===e&&a.setAttribute(c,b);f.setAttribute(c,b)};return b};v.prototype.fontMetrics=
function(b,c){b=!this.styledMode&&/px/.test(b)||!E.getComputedStyle?b||c&&c.style&&c.style.fontSize||this.style&&this.style.fontSize:c&&C.prototype.getStyle.call(c,"font-size");b=/px/.test(b)?Q(b):12;c=24>b?b+3:Math.round(1.2*b);return{h:c,b:Math.round(.8*c),f:b}};v.prototype.rotCorr=function(b,c,f){var d=b;c&&f&&(d=Math.max(d*Math.cos(c*e),4));return{x:-b/3*Math.sin(c*e),y:d}};v.prototype.pathToSegments=function(b){for(var c=[],f=[],d={A:8,C:7,H:2,L:3,M:3,Q:5,S:5,T:3,V:2},e=0;e<b.length;e++)N(f[0])&&
z(b[e])&&f.length===d[f[0].toUpperCase()]&&b.splice(e,0,f[0].replace("M","L").replace("m","l")),"string"===typeof b[e]&&(f.length&&c.push(f.slice(0)),f.length=0),f.push(b[e]);c.push(f.slice(0));return c};v.prototype.label=function(b,c,f,d,e,v,a,n,q){return new B(this,b,c,f,d,e,v,a,n,q)};v.prototype.alignElements=function(){this.alignedObjects.forEach(function(b){return b.align()})};return v}();b(x.prototype,{Element:C,SVG_NS:D,escapes:{"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;",'"':"&quot;"},symbols:H,
draw:p});F.registerRendererType("svg",x,!0);"";return x});K(g,"Core/Renderer/HTML/HTMLElement.js",[g["Core/Globals.js"],g["Core/Renderer/SVG/SVGElement.js"],g["Core/Utilities.js"]],function(a,g,x){var A=this&&this.__extends||function(){var d=function(e,a){d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,e){d.__proto__=e}||function(d,e){for(var a in e)e.hasOwnProperty(a)&&(d[a]=e[a])};return d(e,a)};return function(e,a){function h(){this.constructor=e}d(e,a);e.prototype=null===a?
Object.create(a):(h.prototype=a.prototype,new h)}}(),C=a.isFirefox,B=a.isMS,H=a.isWebKit,t=a.win,r=x.css,l=x.defined,e=x.extend,d=x.pick,h=x.pInt;return function(a){function k(){return null!==a&&a.apply(this,arguments)||this}A(k,a);k.compose=function(d){if(-1===k.composedClasses.indexOf(d)){k.composedClasses.push(d);var e=k.prototype,a=d.prototype;a.getSpanCorrection=e.getSpanCorrection;a.htmlCss=e.htmlCss;a.htmlGetBBox=e.htmlGetBBox;a.htmlUpdateTransform=e.htmlUpdateTransform;a.setSpanRotation=e.setSpanRotation}return d};
k.prototype.getSpanCorrection=function(d,e,a){this.xCorr=-d*a;this.yCorr=-e};k.prototype.htmlCss=function(a){var h="SPAN"===this.element.tagName&&a&&"width"in a,k=d(h&&a.width,void 0);if(h){delete a.width;this.textWidth=k;var g=!0}a&&"ellipsis"===a.textOverflow&&(a.whiteSpace="nowrap",a.overflow="hidden");this.styles=e(this.styles,a);r(this.element,a);g&&this.htmlUpdateTransform();return this};k.prototype.htmlGetBBox=function(){var d=this.element;return{x:d.offsetLeft,y:d.offsetTop,width:d.offsetWidth,
height:d.offsetHeight}};k.prototype.htmlUpdateTransform=function(){if(this.added){var d=this.renderer,e=this.element,a=this.translateX||0,k=this.translateY||0,g=this.x||0,m=this.y||0,c=this.textAlign||"left",w={left:0,center:.5,right:1}[c],f=this.styles;f=f&&f.whiteSpace;r(e,{marginLeft:a,marginTop:k});!d.styledMode&&this.shadows&&this.shadows.forEach(function(b){r(b,{marginLeft:a+1,marginTop:k+1})});this.inverted&&[].forEach.call(e.childNodes,function(b){d.invertChild(b,e)});if("SPAN"===e.tagName){var n=
this.rotation,b=this.textWidth&&h(this.textWidth),u=[n,c,e.innerHTML,this.textWidth,this.textAlign].join(),z=void 0;z=!1;if(b!==this.oldTextWidth){if(this.textPxLength)var q=this.textPxLength;else r(e,{width:"",whiteSpace:f||"nowrap"}),q=e.offsetWidth;(b>this.oldTextWidth||q>b)&&(/[ \-]/.test(e.textContent||e.innerText)||"ellipsis"===e.style.textOverflow)&&(r(e,{width:q>b||n?b+"px":"auto",display:"block",whiteSpace:f||"normal"}),this.oldTextWidth=b,z=!0)}this.hasBoxWidthChanged=z;u!==this.cTT&&(z=
d.fontMetrics(e.style.fontSize,e).b,!l(n)||n===(this.oldRotation||0)&&c===this.oldAlign||this.setSpanRotation(n,w,z),this.getSpanCorrection(!l(n)&&this.textPxLength||e.offsetWidth,z,w,n,c));r(e,{left:g+(this.xCorr||0)+"px",top:m+(this.yCorr||0)+"px"});this.cTT=u;this.oldRotation=n;this.oldAlign=c}}else this.alignOnAdd=!0};k.prototype.setSpanRotation=function(d,e,a){var h={},k=B&&!/Edge/.test(t.navigator.userAgent)?"-ms-transform":H?"-webkit-transform":C?"MozTransform":t.opera?"-o-transform":void 0;
k&&(h[k]=h.transform="rotate("+d+"deg)",h[k+(C?"Origin":"-origin")]=h.transformOrigin=100*e+"% "+a+"px",r(this.element,h))};k.composedClasses=[];return k}(g)});K(g,"Core/Renderer/HTML/HTMLRenderer.js",[g["Core/Renderer/HTML/AST.js"],g["Core/Renderer/SVG/SVGElement.js"],g["Core/Renderer/SVG/SVGRenderer.js"],g["Core/Utilities.js"]],function(a,g,x,F){var A=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d,e){d.__proto__=e}||function(d,
e){for(var a in e)e.hasOwnProperty(a)&&(d[a]=e[a])};return a(e,d)};return function(e,d){function h(){this.constructor=e}a(e,d);e.prototype=null===d?Object.create(d):(h.prototype=d.prototype,new h)}}(),B=F.attr,H=F.createElement,t=F.extend,r=F.pick;return function(l){function e(){return null!==l&&l.apply(this,arguments)||this}A(e,l);e.compose=function(d){-1===e.composedClasses.indexOf(d)&&(e.composedClasses.push(d),d.prototype.html=e.prototype.html);return d};e.prototype.html=function(d,e,m){var h=
this.createElement("span"),p=h.element,l=h.renderer,I=l.isSVG,E=function(d,e){["opacity","visibility"].forEach(function(c){d[c+"Setter"]=function(a,f,n){var b=d.div?d.div.style:e;g.prototype[c+"Setter"].call(this,a,f,n);b&&(b[f]=a)}});d.addedSetters=!0};h.textSetter=function(d){d!==this.textStr&&(delete this.bBox,delete this.oldTextWidth,a.setElementHTML(this.element,r(d,"")),this.textStr=d,h.doTransform=!0)};I&&E(h,h.element.style);h.xSetter=h.ySetter=h.alignSetter=h.rotationSetter=function(d,e){"align"===
e?h.alignValue=h.textAlign=d:h[e]=d;h.doTransform=!0};h.afterSetters=function(){this.doTransform&&(this.htmlUpdateTransform(),this.doTransform=!1)};h.attr({text:d,x:Math.round(e),y:Math.round(m)}).css({position:"absolute"});l.styledMode||h.css({fontFamily:this.style.fontFamily,fontSize:this.style.fontSize});p.style.whiteSpace="nowrap";h.css=h.htmlCss;I&&(h.add=function(d){var e=l.box.parentNode,c=[];if(this.parentGroup=d){var a=d.div;if(!a){for(;d;)c.push(d),d=d.parentGroup;c.reverse().forEach(function(f){function d(b,
c){f[c]=b;"translateX"===c?z.left=b+"px":z.top=b+"px";f.doTransform=!0}var b=B(f.element,"class"),u=f.styles||{};a=f.div=f.div||H("div",b?{className:b}:void 0,{position:"absolute",left:(f.translateX||0)+"px",top:(f.translateY||0)+"px",display:f.display,opacity:f.opacity,cursor:u.cursor,pointerEvents:u.pointerEvents,visibility:f.visibility},a||e);var z=a.style;t(f,{classSetter:function(b){return function(c){this.element.setAttribute("class",c);b.className=c}}(a),on:function(){c[0].div&&h.on.apply({element:c[0].div,
onEvents:f.onEvents},arguments);return f},translateXSetter:d,translateYSetter:d});f.addedSetters||E(f)})}}else a=e;a.appendChild(p);h.added=!0;h.alignOnAdd&&h.htmlUpdateTransform();return h});return h};e.composedClasses=[];return e}(x)});K(g,"Core/Axis/AxisDefaults.js",[],function(){var a;(function(a){a.defaultXAxisOptions={alignTicks:!0,allowDecimals:void 0,panningEnabled:!0,zIndex:2,zoomEnabled:!0,dateTimeLabelFormats:{millisecond:{main:"%H:%M:%S.%L",range:!1},second:{main:"%H:%M:%S",range:!1},
minute:{main:"%H:%M",range:!1},hour:{main:"%H:%M",range:!1},day:{main:"%e. %b"},week:{main:"%e. %b"},month:{main:"%b '%y"},year:{main:"%Y"}},endOnTick:!1,gridLineDashStyle:"Solid",gridZIndex:1,labels:{autoRotation:void 0,autoRotationLimit:80,distance:void 0,enabled:!0,indentation:10,overflow:"justify",padding:5,reserveSpace:void 0,rotation:void 0,staggerLines:0,step:0,useHTML:!1,x:0,zIndex:7,style:{color:"#666666",cursor:"default",fontSize:"11px"}},maxPadding:.01,minorGridLineDashStyle:"Solid",minorTickLength:2,
minorTickPosition:"outside",minPadding:.01,offset:void 0,opposite:!1,reversed:void 0,reversedStacks:!1,showEmpty:!0,showFirstLabel:!0,showLastLabel:!0,startOfWeek:1,startOnTick:!1,tickLength:10,tickPixelInterval:100,tickmarkPlacement:"between",tickPosition:"outside",title:{align:"middle",rotation:0,useHTML:!1,x:0,y:0,style:{color:"#666666"}},type:"linear",uniqueNames:!0,visible:!0,minorGridLineColor:"#f2f2f2",minorGridLineWidth:1,minorTickColor:"#999999",lineColor:"#ccd6eb",lineWidth:1,gridLineColor:"#e6e6e6",
gridLineWidth:void 0,tickColor:"#ccd6eb"};a.defaultYAxisOptions={reversedStacks:!0,endOnTick:!0,maxPadding:.05,minPadding:.05,tickPixelInterval:72,showLastLabel:!0,labels:{x:-8},startOnTick:!0,title:{rotation:270,text:"Values"},stackLabels:{animation:{},allowOverlap:!1,enabled:!1,crop:!0,overflow:"justify",formatter:function(){var a=this.axis.chart.numberFormatter;return a(this.total||0,-1)},style:{color:"#000000",fontSize:"11px",fontWeight:"bold",textOutline:"1px contrast"}},gridLineWidth:1,lineWidth:0};
a.defaultLeftAxisOptions={labels:{x:-15},title:{rotation:270}};a.defaultRightAxisOptions={labels:{x:15},title:{rotation:90}};a.defaultBottomAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}};a.defaultTopAxisOptions={labels:{autoRotation:[-45],x:0},margin:15,title:{rotation:0}}})(a||(a={}));return a});K(g,"Core/Foundation.js",[g["Core/Utilities.js"]],function(a){var g=a.addEvent,x=a.isFunction,F=a.objectEach,C=a.removeEvent,B;(function(a){a.registerEventOptions=function(a,r){a.eventOptions=
a.eventOptions||{};F(r.events,function(l,e){a.eventOptions[e]!==l&&(a.eventOptions[e]&&(C(a,e,a.eventOptions[e]),delete a.eventOptions[e]),x(l)&&(a.eventOptions[e]=l,g(a,e,l)))})}})(B||(B={}));return B});K(g,"Core/Axis/Tick.js",[g["Core/FormatUtilities.js"],g["Core/Globals.js"],g["Core/Utilities.js"]],function(a,g,x){var A=g.deg2rad,C=x.clamp,B=x.correctFloat,H=x.defined,t=x.destroyObjectProperties,r=x.extend,l=x.fireEvent,e=x.isNumber,d=x.merge,h=x.objectEach,m=x.pick;g=function(){function g(d,e,
a,h,g){this.isNewLabel=this.isNew=!0;this.axis=d;this.pos=e;this.type=a||"";this.parameters=g||{};this.tickmarkOffset=this.parameters.tickmarkOffset;this.options=this.parameters.options;l(this,"init");a||h||this.addLabel()}g.prototype.addLabel=function(){var d=this,h=d.axis,g=h.options,k=h.chart,L=h.categories,y=h.logarithmic,c=h.names,w=d.pos,f=m(d.options&&d.options.labels,g.labels),n=h.tickPositions,b=w===n[0],u=w===n[n.length-1],z=(!f.step||1===f.step)&&1===h.tickInterval;n=n.info;var q=d.label,
N;L=this.parameters.category||(L?m(L[w],c[w],w):w);y&&e(L)&&(L=B(y.lin2log(L)));if(h.dateTime)if(n){var J=k.time.resolveDTLFormat(g.dateTimeLabelFormats[!g.grid&&n.higherRanks[w]||n.unitName]);var O=J.main}else e(L)&&(O=h.dateTime.getXDateFormat(L,g.dateTimeLabelFormats||{}));d.isFirst=b;d.isLast=u;var Q={axis:h,chart:k,dateTimeLabelFormat:O,isFirst:b,isLast:u,pos:w,tick:d,tickPositionInfo:n,value:L};l(this,"labelFormat",Q);var t=function(b){return f.formatter?f.formatter.call(b,b):f.format?(b.text=
h.defaultLabelFormatter.call(b,b),a.format(f.format,b,k)):h.defaultLabelFormatter.call(b,b)};g=t.call(Q,Q);var Y=J&&J.list;d.shortenLabel=Y?function(){for(N=0;N<Y.length;N++)if(r(Q,{dateTimeLabelFormat:Y[N]}),q.attr({text:t.call(Q,Q)}),q.getBBox().width<h.getSlotWidth(d)-2*f.padding)return;q.attr({text:""})}:void 0;z&&h._addedPlotLB&&d.moveLabel(g,f);H(q)||d.movedLabel?q&&q.textStr!==g&&!z&&(!q.textWidth||f.style.width||q.styles.width||q.css({width:null}),q.attr({text:g}),q.textPxLength=q.getBBox().width):
(d.label=q=d.createLabel({x:0,y:0},g,f),d.rotation=0)};g.prototype.createLabel=function(e,a,h){var g=this.axis,k=g.chart;if(e=H(a)&&h.enabled?k.renderer.text(a,e.x,e.y,h.useHTML).add(g.labelGroup):null)k.styledMode||e.css(d(h.style)),e.textPxLength=e.getBBox().width;return e};g.prototype.destroy=function(){t(this,this.axis)};g.prototype.getPosition=function(d,e,a,h){var g=this.axis,k=g.chart,c=h&&k.oldChartHeight||k.chartHeight;d={x:d?B(g.translate(e+a,void 0,void 0,h)+g.transB):g.left+g.offset+(g.opposite?
(h&&k.oldChartWidth||k.chartWidth)-g.right-g.left:0),y:d?c-g.bottom+g.offset-(g.opposite?g.height:0):B(c-g.translate(e+a,void 0,void 0,h)-g.transB)};d.y=C(d.y,-1E5,1E5);l(this,"afterGetPosition",{pos:d});return d};g.prototype.getLabelPosition=function(d,e,a,h,g,k,c,w){var f=this.axis,n=f.transA,b=f.isLinked&&f.linkedParent?f.linkedParent.reversed:f.reversed,u=f.staggerLines,z=f.tickRotCorr||{x:0,y:0},q=h||f.reserveSpaceDefault?0:-f.labelOffset*("center"===f.labelAlign?.5:1),m={};a=0===f.side?a.rotation?
-8:-a.getBBox().height:2===f.side?z.y+8:Math.cos(a.rotation*A)*(z.y-a.getBBox(!1,0).height/2);H(g.y)&&(a=0===f.side&&f.horiz?g.y+a:g.y);d=d+g.x+q+z.x-(k&&h?k*n*(b?-1:1):0);e=e+a-(k&&!h?k*n*(b?1:-1):0);u&&(h=c/(w||1)%u,f.opposite&&(h=u-h-1),e+=f.labelOffset/u*h);m.x=d;m.y=Math.round(e);l(this,"afterGetLabelPosition",{pos:m,tickmarkOffset:k,index:c});return m};g.prototype.getLabelSize=function(){return this.label?this.label.getBBox()[this.axis.horiz?"height":"width"]:0};g.prototype.getMarkPath=function(d,
e,a,h,g,k){return k.crispLine([["M",d,e],["L",d+(g?0:-a),e+(g?a:0)]],h)};g.prototype.handleOverflow=function(d){var e=this.axis,a=e.options.labels,h=d.x,g=e.chart.chartWidth,k=e.chart.spacing,c=m(e.labelLeft,Math.min(e.pos,k[3]));k=m(e.labelRight,Math.max(e.isRadial?0:e.pos+e.len,g-k[1]));var w=this.label,f=this.rotation,n={left:0,center:.5,right:1}[e.labelAlign||w.attr("align")],b=w.getBBox().width,u=e.getSlotWidth(this),z={},q=u,p=1,l;if(f||"justify"!==a.overflow)0>f&&h-n*b<c?l=Math.round(h/Math.cos(f*
A)-c):0<f&&h+n*b>k&&(l=Math.round((g-h)/Math.cos(f*A)));else if(g=h+(1-n)*b,h-n*b<c?q=d.x+q*(1-n)-c:g>k&&(q=k-d.x+q*n,p=-1),q=Math.min(u,q),q<u&&"center"===e.labelAlign&&(d.x+=p*(u-q-n*(u-Math.min(b,q)))),b>q||e.autoRotation&&(w.styles||{}).width)l=q;l&&(this.shortenLabel?this.shortenLabel():(z.width=Math.floor(l)+"px",(a.style||{}).textOverflow||(z.textOverflow="ellipsis"),w.css(z)))};g.prototype.moveLabel=function(d,e){var a=this,g=a.label,k=a.axis,m=k.reversed,c=!1;g&&g.textStr===d?(a.movedLabel=
g,c=!0,delete a.label):h(k.ticks,function(f){c||f.isNew||f===a||!f.label||f.label.textStr!==d||(a.movedLabel=f.label,c=!0,f.labelPos=a.movedLabel.xy,delete f.label)});if(!c&&(a.labelPos||g)){var w=a.labelPos||g.xy;g=k.horiz?m?0:k.width+k.left:w.x;k=k.horiz?w.y:m?k.width+k.left:0;a.movedLabel=a.createLabel({x:g,y:k},d,e);a.movedLabel&&a.movedLabel.attr({opacity:0})}};g.prototype.render=function(d,e,a){var h=this.axis,g=h.horiz,k=this.pos,c=m(this.tickmarkOffset,h.tickmarkOffset);k=this.getPosition(g,
k,c,e);c=k.x;var w=k.y;h=g&&c===h.pos+h.len||!g&&w===h.pos?-1:1;g=m(a,this.label&&this.label.newOpacity,1);a=m(a,1);this.isActive=!0;this.renderGridLine(e,a,h);this.renderMark(k,a,h);this.renderLabel(k,e,g,d);this.isNew=!1;l(this,"afterRender")};g.prototype.renderGridLine=function(d,e,a){var h=this.axis,g=h.options,k={},c=this.pos,w=this.type,f=m(this.tickmarkOffset,h.tickmarkOffset),n=h.chart.renderer,b=this.gridLine,u=g.gridLineWidth,z=g.gridLineColor,q=g.gridLineDashStyle;"minor"===this.type&&
(u=g.minorGridLineWidth,z=g.minorGridLineColor,q=g.minorGridLineDashStyle);b||(h.chart.styledMode||(k.stroke=z,k["stroke-width"]=u||0,k.dashstyle=q),w||(k.zIndex=1),d&&(e=0),this.gridLine=b=n.path().attr(k).addClass("highcharts-"+(w?w+"-":"")+"grid-line").add(h.gridGroup));if(b&&(a=h.getPlotLinePath({value:c+f,lineWidth:b.strokeWidth()*a,force:"pass",old:d,acrossPanes:!1})))b[d||this.isNew?"attr":"animate"]({d:a,opacity:e})};g.prototype.renderMark=function(d,e,a){var h=this.axis,g=h.options,k=h.chart.renderer,
c=this.type,w=h.tickSize(c?c+"Tick":"tick"),f=d.x;d=d.y;var n=m(g["minor"!==c?"tickWidth":"minorTickWidth"],!c&&h.isXAxis?1:0);g=g["minor"!==c?"tickColor":"minorTickColor"];var b=this.mark,u=!b;w&&(h.opposite&&(w[0]=-w[0]),b||(this.mark=b=k.path().addClass("highcharts-"+(c?c+"-":"")+"tick").add(h.axisGroup),h.chart.styledMode||b.attr({stroke:g,"stroke-width":n})),b[u?"attr":"animate"]({d:this.getMarkPath(f,d,w[0],b.strokeWidth()*a,h.horiz,k),opacity:e}))};g.prototype.renderLabel=function(d,a,h,g){var k=
this.axis,l=k.horiz,c=k.options,w=this.label,f=c.labels,n=f.step;k=m(this.tickmarkOffset,k.tickmarkOffset);var b=d.x;d=d.y;var u=!0;w&&e(b)&&(w.xy=d=this.getLabelPosition(b,d,w,l,f,k,g,n),this.isFirst&&!this.isLast&&!c.showFirstLabel||this.isLast&&!this.isFirst&&!c.showLastLabel?u=!1:!l||f.step||f.rotation||a||0===h||this.handleOverflow(d),n&&g%n&&(u=!1),u&&e(d.y)?(d.opacity=h,w[this.isNewLabel?"attr":"animate"](d).show(!0),this.isNewLabel=!1):(w.hide(),this.isNewLabel=!0))};g.prototype.replaceMovedLabel=
function(){var d=this.label,e=this.axis,a=e.reversed;if(d&&!this.isNew){var h=e.horiz?a?e.left:e.width+e.left:d.xy.x;a=e.horiz?d.xy.y:a?e.width+e.top:e.top;d.animate({x:h,y:a,opacity:0},void 0,d.destroy);delete this.label}e.isDirty=!0;this.label=this.movedLabel;delete this.movedLabel};return g}();"";return g});K(g,"Core/Axis/Axis.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/Axis/AxisDefaults.js"],g["Core/Color/Color.js"],g["Core/Defaults.js"],g["Core/Foundation.js"],g["Core/Globals.js"],
g["Core/Axis/Tick.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B,H,t){var r=a.animObject,l=F.defaultOptions,e=C.registerEventOptions,d=B.deg2rad,h=t.arrayMax,m=t.arrayMin,k=t.clamp,p=t.correctFloat,D=t.defined,I=t.destroyObjectProperties,E=t.erase,A=t.error,y=t.extend,c=t.fireEvent,w=t.isArray,f=t.isNumber,n=t.isString,b=t.merge,u=t.normalizeTickInterval,z=t.objectEach,q=t.pick,N=t.relativeLength,J=t.removeEvent,O=t.splat,Q=t.syncTimeout,T=function(b,c){return u(c,void 0,void 0,q(b.options.allowDecimals,
.5>c||void 0!==b.tickAmount),!!b.tickAmount)};a=function(){function a(b,c){this.zoomEnabled=this.width=this.visible=this.userOptions=this.translationSlope=this.transB=this.transA=this.top=this.ticks=this.tickRotCorr=this.tickPositions=this.tickmarkOffset=this.tickInterval=this.tickAmount=this.side=this.series=this.right=this.positiveValuesOnly=this.pos=this.pointRangePadding=this.pointRange=this.plotLinesAndBandsGroups=this.plotLinesAndBands=this.paddedTicks=this.overlap=this.options=this.offset=
this.names=this.minPixelPadding=this.minorTicks=this.minorTickInterval=this.min=this.maxLabelLength=this.max=this.len=this.left=this.labelFormatter=this.labelEdge=this.isLinked=this.height=this.hasVisibleSeries=this.hasNames=this.eventOptions=this.coll=this.closestPointRange=this.chart=this.bottom=this.alternateBands=void 0;this.init(b,c)}a.prototype.init=function(b,d){var a=d.isX;this.chart=b;this.horiz=b.inverted&&!this.isZAxis?!a:a;this.isXAxis=a;this.coll=this.coll||(a?"xAxis":"yAxis");c(this,
"init",{userOptions:d});this.opposite=q(d.opposite,this.opposite);this.side=q(d.side,this.side,this.horiz?this.opposite?0:2:this.opposite?1:3);this.setOptions(d);var v=this.options,n=v.labels,h=v.type;this.userOptions=d;this.minPixelPadding=0;this.reversed=q(v.reversed,this.reversed);this.visible=v.visible;this.zoomEnabled=v.zoomEnabled;this.hasNames="category"===h||!0===v.categories;this.categories=v.categories||(this.hasNames?[]:void 0);this.names||(this.names=[],this.names.keys={});this.plotLinesAndBandsGroups=
{};this.positiveValuesOnly=!!this.logarithmic;this.isLinked=D(v.linkedTo);this.ticks={};this.labelEdge=[];this.minorTicks={};this.plotLinesAndBands=[];this.alternateBands={};this.len=0;this.minRange=this.userMinRange=v.minRange||v.maxZoom;this.range=v.range;this.offset=v.offset||0;this.min=this.max=null;d=q(v.crosshair,O(b.options.tooltip.crosshairs)[a?0:1]);this.crosshair=!0===d?{}:d;-1===b.axes.indexOf(this)&&(a?b.axes.splice(b.xAxis.length,0,this):b.axes.push(this),b[this.coll].push(this));this.series=
this.series||[];b.inverted&&!this.isZAxis&&a&&"undefined"===typeof this.reversed&&(this.reversed=!0);this.labelRotation=f(n.rotation)?n.rotation:void 0;e(this,v);c(this,"afterInit")};a.prototype.setOptions=function(f){this.options=b(g.defaultXAxisOptions,"yAxis"===this.coll&&g.defaultYAxisOptions,[g.defaultTopAxisOptions,g.defaultRightAxisOptions,g.defaultBottomAxisOptions,g.defaultLeftAxisOptions][this.side],b(l[this.coll],f));c(this,"afterSetOptions",{userOptions:f})};a.prototype.defaultLabelFormatter=
function(b){var c=this.axis;b=this.chart.numberFormatter;var d=f(this.value)?this.value:NaN,a=c.chart.time,e=this.dateTimeLabelFormat,v=l.lang,n=v.numericSymbols;v=v.numericSymbolMagnitude||1E3;var h=c.logarithmic?Math.abs(d):c.tickInterval,q=n&&n.length;if(c.categories)var u="".concat(this.value);else if(e)u=a.dateFormat(e,d);else if(q&&1E3<=h)for(;q--&&"undefined"===typeof u;)c=Math.pow(v,q+1),h>=c&&0===10*d%c&&null!==n[q]&&0!==d&&(u=b(d/c,-1)+n[q]);"undefined"===typeof u&&(u=1E4<=Math.abs(d)?b(d,
-1):b(d,-1,void 0,""));return u};a.prototype.getSeriesExtremes=function(){var b=this,d=b.chart,a;c(this,"getSeriesExtremes",null,function(){b.hasVisibleSeries=!1;b.dataMin=b.dataMax=b.threshold=null;b.softThreshold=!b.isXAxis;b.series.forEach(function(c){if(c.visible||!d.options.chart.ignoreHiddenSeries){var e=c.options,v=e.threshold;b.hasVisibleSeries=!0;b.positiveValuesOnly&&0>=v&&(v=null);if(b.isXAxis){if(e=c.xData,e.length){e=b.logarithmic?e.filter(b.validatePositiveValue):e;a=c.getXExtremes(e);
var n=a.min;var h=a.max;f(n)||n instanceof Date||(e=e.filter(f),a=c.getXExtremes(e),n=a.min,h=a.max);e.length&&(b.dataMin=Math.min(q(b.dataMin,n),n),b.dataMax=Math.max(q(b.dataMax,h),h))}}else if(c=c.applyExtremes(),f(c.dataMin)&&(n=c.dataMin,b.dataMin=Math.min(q(b.dataMin,n),n)),f(c.dataMax)&&(h=c.dataMax,b.dataMax=Math.max(q(b.dataMax,h),h)),D(v)&&(b.threshold=v),!e.softThreshold||b.positiveValuesOnly)b.softThreshold=!1}})});c(this,"afterGetSeriesExtremes")};a.prototype.translate=function(b,c,d,
a,e,n){var v=this.linkedParent||this,h=a&&v.old?v.old.min:v.min;if(!f(h))return NaN;var q=v.minPixelPadding;e=(v.isOrdinal||v.brokenAxis&&v.brokenAxis.hasBreaks||v.logarithmic&&e)&&v.lin2val;var u=1,G=0;a=a&&v.old?v.old.transA:v.transA;a||(a=v.transA);d&&(u*=-1,G=v.len);v.reversed&&(u*=-1,G-=u*(v.sector||v.len));c?(n=(b*u+G-q)/a+h,e&&(n=v.lin2val(n))):(e&&(b=v.val2lin(b)),b=u*(b-h)*a,n=(v.isRadial?b:p(b))+G+u*q+(f(n)?a*n:0));return n};a.prototype.toPixels=function(b,c){return this.translate(b,!1,
!this.horiz,void 0,!0)+(c?0:this.pos)};a.prototype.toValue=function(b,c){return this.translate(b-(c?0:this.pos),!0,!this.horiz,void 0,!0)};a.prototype.getPlotLinePath=function(b){function d(b,c,f){"pass"!==p&&(b<c||b>f)&&(p?b=k(b,c,f):r=!0);return b}var a=this,e=a.chart,v=a.left,n=a.top,h=b.old,u=b.value,g=b.lineWidth,z=h&&e.oldChartHeight||e.chartHeight,w=h&&e.oldChartWidth||e.chartWidth,m=a.transB,l=b.translatedValue,p=b.force,J,N,y,O,r;b={value:u,lineWidth:g,old:h,force:p,acrossPanes:b.acrossPanes,
translatedValue:l};c(this,"getPlotLinePath",b,function(b){l=q(l,a.translate(u,void 0,void 0,h));l=k(l,-1E5,1E5);J=y=Math.round(l+m);N=O=Math.round(z-l-m);f(l)?a.horiz?(N=n,O=z-a.bottom,J=y=d(J,v,v+a.width)):(J=v,y=w-a.right,N=O=d(N,n,n+a.height)):(r=!0,p=!1);b.path=r&&!p?null:e.renderer.crispLine([["M",J,N],["L",y,O]],g||1)});return b.path};a.prototype.getLinearTickPositions=function(b,c,f){var d=p(Math.floor(c/b)*b);f=p(Math.ceil(f/b)*b);var a=[],e;p(d+b)===d&&(e=20);if(this.single)return[c];for(c=
d;c<=f;){a.push(c);c=p(c+b,e);if(c===v)break;var v=c}return a};a.prototype.getMinorTickInterval=function(){var b=this.options;return!0===b.minorTicks?q(b.minorTickInterval,"auto"):!1===b.minorTicks?null:b.minorTickInterval};a.prototype.getMinorTickPositions=function(){var b=this.options,c=this.tickPositions,f=this.minorTickInterval,d=this.pointRangePadding||0,a=this.min-d;d=this.max+d;var e=d-a,n=[];if(e&&e/f<this.len/3){var h=this.logarithmic;if(h)this.paddedTicks.forEach(function(b,c,d){c&&n.push.apply(n,
h.getLogTickPositions(f,d[c-1],d[c],!0))});else if(this.dateTime&&"auto"===this.getMinorTickInterval())n=n.concat(this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(f),a,d,b.startOfWeek));else for(b=a+(c[0]-a)%f;b<=d&&b!==n[0];b+=f)n.push(b)}0!==n.length&&this.trimTicks(n);return n};a.prototype.adjustForMinRange=function(){var b=this.options,c=this.logarithmic,f=this.min,d=this.max,a=0,e,n,u,g;this.isXAxis&&"undefined"===typeof this.minRange&&!c&&(D(b.min)||D(b.max)||D(b.floor)||D(b.ceiling)?
this.minRange=null:(this.series.forEach(function(b){u=b.xData;g=b.xIncrement?1:u.length-1;if(1<u.length)for(e=g;0<e;e--)if(n=u[e]-u[e-1],!a||n<a)a=n}),this.minRange=Math.min(5*a,this.dataMax-this.dataMin)));if(d-f<this.minRange){var z=this.dataMax-this.dataMin>=this.minRange;var k=this.minRange;var w=(k-d+f)/2;w=[f-w,q(b.min,f-w)];z&&(w[2]=this.logarithmic?this.logarithmic.log2lin(this.dataMin):this.dataMin);f=h(w);d=[f+k,q(b.max,f+k)];z&&(d[2]=c?c.log2lin(this.dataMax):this.dataMax);d=m(d);d-f<k&&
(w[0]=d-k,w[1]=q(b.min,d-k),f=h(w))}this.min=f;this.max=d};a.prototype.getClosest=function(){var b;this.categories?b=1:this.series.forEach(function(c){var f=c.closestPointRange,d=c.visible||!c.chart.options.chart.ignoreHiddenSeries;!c.noSharedTooltip&&D(f)&&d&&(b=D(b)?Math.min(b,f):f)});return b};a.prototype.nameToX=function(b){var c=w(this.options.categories),f=c?this.categories:this.names,d=b.options.x;b.series.requireSorting=!1;D(d)||(d=this.options.uniqueNames&&f?c?f.indexOf(b.name):q(f.keys[b.name],
-1):b.series.autoIncrement());if(-1===d){if(!c&&f)var a=f.length}else a=d;"undefined"!==typeof a?(this.names[a]=b.name,this.names.keys[b.name]=a):b.x&&(a=b.x);return a};a.prototype.updateNames=function(){var b=this,c=this.names;0<c.length&&(Object.keys(c.keys).forEach(function(b){delete c.keys[b]}),c.length=0,this.minRange=this.userMinRange,(this.series||[]).forEach(function(c){c.xIncrement=null;if(!c.points||c.isDirtyData)b.max=Math.max(b.max,c.xData.length-1),c.processData(),c.generatePoints();
c.data.forEach(function(f,d){if(f&&f.options&&"undefined"!==typeof f.name){var a=b.nameToX(f);"undefined"!==typeof a&&a!==f.x&&(f.x=a,c.xData[d]=a)}})}))};a.prototype.setAxisTranslation=function(){var b=this,f=b.max-b.min,d=b.linkedParent,a=!!b.categories,e=b.isXAxis,h=b.axisPointRange||0,u=0,g=0,k=b.transA;if(e||a||h){var z=b.getClosest();d?(u=d.minPointOffset,g=d.pointRangePadding):b.series.forEach(function(c){var f=a?1:e?q(c.options.pointRange,z,0):b.axisPointRange||0,d=c.options.pointPlacement;
h=Math.max(h,f);if(!b.single||a)c=c.is("xrange")?!e:e,u=Math.max(u,c&&n(d)?0:f/2),g=Math.max(g,c&&"on"===d?0:f)});d=b.ordinal&&b.ordinal.slope&&z?b.ordinal.slope/z:1;b.minPointOffset=u*=d;b.pointRangePadding=g*=d;b.pointRange=Math.min(h,b.single&&a?1:f);e&&(b.closestPointRange=z)}b.translationSlope=b.transA=k=b.staticScale||b.len/(f+g||1);b.transB=b.horiz?b.left:b.bottom;b.minPixelPadding=k*u;c(this,"afterSetAxisTranslation")};a.prototype.minFromRange=function(){return this.max-this.range};a.prototype.setTickInterval=
function(b){var d=this.chart,a=this.logarithmic,e=this.options,n=this.isXAxis,h=this.isLinked,u=e.tickPixelInterval,v=this.categories,g=this.softThreshold,k=e.maxPadding,z=e.minPadding,w=f(e.tickInterval)&&0<=e.tickInterval?e.tickInterval:void 0,m=f(this.threshold)?this.threshold:null;this.dateTime||v||h||this.getTickAmount();var l=q(this.userMin,e.min);var J=q(this.userMax,e.max);if(h){this.linkedParent=d[this.coll][e.linkedTo];var N=this.linkedParent.getExtremes();this.min=q(N.min,N.dataMin);this.max=
q(N.max,N.dataMax);e.type!==this.linkedParent.options.type&&A(11,1,d)}else{if(g&&D(m))if(this.dataMin>=m)N=m,z=0;else if(this.dataMax<=m){var y=m;k=0}this.min=q(l,N,this.dataMin);this.max=q(J,y,this.dataMax)}a&&(this.positiveValuesOnly&&!b&&0>=Math.min(this.min,q(this.dataMin,this.min))&&A(10,1,d),this.min=p(a.log2lin(this.min),16),this.max=p(a.log2lin(this.max),16));this.range&&D(this.max)&&(this.userMin=this.min=l=Math.max(this.dataMin,this.minFromRange()),this.userMax=J=this.max,this.range=null);
c(this,"foundExtremes");this.beforePadding&&this.beforePadding();this.adjustForMinRange();!(v||this.axisPointRange||this.stacking&&this.stacking.usePercentage||h)&&D(this.min)&&D(this.max)&&(d=this.max-this.min)&&(!D(l)&&z&&(this.min-=d*z),!D(J)&&k&&(this.max+=d*k));f(this.userMin)||(f(e.softMin)&&e.softMin<this.min&&(this.min=l=e.softMin),f(e.floor)&&(this.min=Math.max(this.min,e.floor)));f(this.userMax)||(f(e.softMax)&&e.softMax>this.max&&(this.max=J=e.softMax),f(e.ceiling)&&(this.max=Math.min(this.max,
e.ceiling)));g&&D(this.dataMin)&&(m=m||0,!D(l)&&this.min<m&&this.dataMin>=m?this.min=this.options.minRange?Math.min(m,this.max-this.minRange):m:!D(J)&&this.max>m&&this.dataMax<=m&&(this.max=this.options.minRange?Math.max(m,this.min+this.minRange):m));f(this.min)&&f(this.max)&&!this.chart.polar&&this.min>this.max&&(D(this.options.min)?this.max=this.min:D(this.options.max)&&(this.min=this.max));this.tickInterval=this.min===this.max||"undefined"===typeof this.min||"undefined"===typeof this.max?1:h&&
this.linkedParent&&!w&&u===this.linkedParent.options.tickPixelInterval?w=this.linkedParent.tickInterval:q(w,this.tickAmount?(this.max-this.min)/Math.max(this.tickAmount-1,1):void 0,v?1:(this.max-this.min)*u/Math.max(this.len,u));if(n&&!b){var O=this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max);this.series.forEach(function(b){b.forceCrop=b.forceCropping&&b.forceCropping();b.processData(O)});c(this,"postProcessData",{hasExtremesChanged:O})}this.setAxisTranslation();c(this,"initialAxisTranslation");
this.pointRange&&!w&&(this.tickInterval=Math.max(this.pointRange,this.tickInterval));b=q(e.minTickInterval,this.dateTime&&!this.series.some(function(b){return b.noSharedTooltip})?this.closestPointRange:0);!w&&this.tickInterval<b&&(this.tickInterval=b);this.dateTime||this.logarithmic||w||(this.tickInterval=T(this,this.tickInterval));this.tickAmount||(this.tickInterval=this.unsquish());this.setTickPositions()};a.prototype.setTickPositions=function(){var b=this.options,d=b.tickPositions,a=b.tickPositioner,
e=this.getMinorTickInterval(),n=this.hasVerticalPanning(),h="colorAxis"===this.coll,u=(h||!n)&&b.startOnTick;n=(h||!n)&&b.endOnTick;h=[];var q;this.tickmarkOffset=this.categories&&"between"===b.tickmarkPlacement&&1===this.tickInterval?.5:0;this.minorTickInterval="auto"===e&&this.tickInterval?this.tickInterval/5:e;this.single=this.min===this.max&&D(this.min)&&!this.tickAmount&&(parseInt(this.min,10)===this.min||!1!==b.allowDecimals);if(d)h=d.slice();else if(f(this.min)&&f(this.max)){if(this.ordinal&&
this.ordinal.positions||!((this.max-this.min)/this.tickInterval>Math.max(2*this.len,200)))if(this.dateTime)h=this.getTimeTicks(this.dateTime.normalizeTimeTickInterval(this.tickInterval,b.units),this.min,this.max,b.startOfWeek,this.ordinal&&this.ordinal.positions,this.closestPointRange,!0);else if(this.logarithmic)h=this.logarithmic.getLogTickPositions(this.tickInterval,this.min,this.max);else for(e=b=this.tickInterval;e<=2*b;)if(h=this.getLinearTickPositions(this.tickInterval,this.min,this.max),this.tickAmount&&
h.length>this.tickAmount)this.tickInterval=T(this,e*=1.1);else break;else h=[this.min,this.max],A(19,!1,this.chart);h.length>this.len&&(h=[h[0],h[h.length-1]],h[0]===h[1]&&(h.length=1));a&&(this.tickPositions=h,(q=a.apply(this,[this.min,this.max]))&&(h=q))}this.tickPositions=h;this.paddedTicks=h.slice(0);this.trimTicks(h,u,n);!this.isLinked&&f(this.min)&&f(this.max)&&(this.single&&2>h.length&&!this.categories&&!this.series.some(function(b){return b.is("heatmap")&&"between"===b.options.pointPlacement})&&
(this.min-=.5,this.max+=.5),d||q||this.adjustTickAmount());c(this,"afterSetTickPositions")};a.prototype.trimTicks=function(b,f,d){var a=b[0],e=b[b.length-1],h=!this.isOrdinal&&this.minPointOffset||0;c(this,"trimTicks");if(!this.isLinked){if(f&&-Infinity!==a)this.min=a;else for(;this.min-h>b[0];)b.shift();if(d)this.max=e;else for(;this.max+h<b[b.length-1];)b.pop();0===b.length&&D(a)&&!this.options.tickPositions&&b.push((e+a)/2)}};a.prototype.alignToOthers=function(){var b=this,c=[this],d=b.options,
a="yAxis"===this.coll&&this.chart.options.chart.alignThresholds,e=[],h;b.thresholdAlignment=void 0;if((!1!==this.chart.options.chart.alignTicks&&d.alignTicks||a)&&!1!==d.startOnTick&&!1!==d.endOnTick&&!b.logarithmic){var n=function(b){var c=b.options;return[b.horiz?c.left:c.top,c.width,c.height,c.pane].join()},u=n(this);this.chart[this.coll].forEach(function(f){var d=f.series;d.length&&d.some(function(b){return b.visible})&&f!==b&&n(f)===u&&(h=!0,c.push(f))})}if(h&&a){c.forEach(function(c){c=c.getThresholdAlignment(b);
f(c)&&e.push(c)});var q=1<e.length?e.reduce(function(b,c){return b+c},0)/e.length:void 0;c.forEach(function(b){b.thresholdAlignment=q})}return h};a.prototype.getThresholdAlignment=function(b){(!f(this.dataMin)||this!==b&&this.series.some(function(b){return b.isDirty||b.isDirtyData}))&&this.getSeriesExtremes();if(f(this.threshold))return b=k((this.threshold-(this.dataMin||0))/((this.dataMax||0)-(this.dataMin||0)),0,1),this.options.reversed&&(b=1-b),b};a.prototype.getTickAmount=function(){var b=this.options,
c=b.tickPixelInterval,f=b.tickAmount;!D(b.tickInterval)&&!f&&this.len<c&&!this.isRadial&&!this.logarithmic&&b.startOnTick&&b.endOnTick&&(f=2);!f&&this.alignToOthers()&&(f=Math.ceil(this.len/c)+1);4>f&&(this.finalTickAmt=f,f=5);this.tickAmount=f};a.prototype.adjustTickAmount=function(){var b=this,c=b.finalTickAmt,d=b.max,a=b.min,e=b.options,h=b.tickPositions,n=b.tickAmount,u=b.thresholdAlignment,g=h&&h.length,k=q(b.threshold,b.softThreshold?0:null);var z=b.tickInterval;if(f(u)){var w=.5>u?Math.ceil(u*
(n-1)):Math.floor(u*(n-1));e.reversed&&(w=n-1-w)}if(b.hasData()&&f(a)&&f(d)){u=function(){b.transA*=(g-1)/(n-1);b.min=e.startOnTick?h[0]:Math.min(a,h[0]);b.max=e.endOnTick?h[h.length-1]:Math.max(d,h[h.length-1])};if(f(w)&&f(b.threshold)){for(;h[w]!==k||h.length!==n||h[0]>a||h[h.length-1]<d;){h.length=0;for(h.push(b.threshold);h.length<n;)void 0===h[w]||h[w]>b.threshold?h.unshift(p(h[0]-z)):h.push(p(h[h.length-1]+z));if(z>8*b.tickInterval)break;z*=2}u()}else if(g<n){for(;h.length<n;)h.length%2||a===
k?h.push(p(h[h.length-1]+z)):h.unshift(p(h[0]-z));u()}if(D(c)){for(z=k=h.length;z--;)(3===c&&1===z%2||2>=c&&0<z&&z<k-1)&&h.splice(z,1);b.finalTickAmt=void 0}}};a.prototype.setScale=function(){var b=!1,f=!1;this.series.forEach(function(c){b=b||c.isDirtyData||c.isDirty;f=f||c.xAxis&&c.xAxis.isDirty||!1});this.setAxisSize();var d=this.len!==(this.old&&this.old.len);d||b||f||this.isLinked||this.forceRedraw||this.userMin!==(this.old&&this.old.userMin)||this.userMax!==(this.old&&this.old.userMax)||this.alignToOthers()?
(this.stacking&&(this.stacking.resetStacks(),this.stacking.buildStacks()),this.forceRedraw=!1,this.getSeriesExtremes(),this.setTickInterval(),this.isDirty||(this.isDirty=d||this.min!==(this.old&&this.old.min)||this.max!==(this.old&&this.old.max))):this.stacking&&this.stacking.cleanStacks();b&&this.panningState&&(this.panningState.isDirty=!0);c(this,"afterSetScale")};a.prototype.setExtremes=function(b,f,d,a,e){var h=this,n=h.chart;d=q(d,!0);h.series.forEach(function(b){delete b.kdTree});e=y(e,{min:b,
max:f});c(h,"setExtremes",e,function(){h.userMin=b;h.userMax=f;h.eventArgs=e;d&&n.redraw(a)})};a.prototype.zoom=function(b,f){var d=this,a=this.dataMin,e=this.dataMax,h=this.options,n=Math.min(a,q(h.min,a)),u=Math.max(e,q(h.max,e));b={newMin:b,newMax:f};c(this,"zoom",b,function(b){var c=b.newMin,f=b.newMax;if(c!==d.min||f!==d.max)d.allowZoomOutside||(D(a)&&(c<n&&(c=n),c>u&&(c=u)),D(e)&&(f<n&&(f=n),f>u&&(f=u))),d.displayBtn="undefined"!==typeof c||"undefined"!==typeof f,d.setExtremes(c,f,!1,void 0,
{trigger:"zoom"});b.zoomed=!0});return b.zoomed};a.prototype.setAxisSize=function(){var b=this.chart,c=this.options,f=c.offsets||[0,0,0,0],d=this.horiz,a=this.width=Math.round(N(q(c.width,b.plotWidth-f[3]+f[1]),b.plotWidth)),e=this.height=Math.round(N(q(c.height,b.plotHeight-f[0]+f[2]),b.plotHeight)),h=this.top=Math.round(N(q(c.top,b.plotTop+f[0]),b.plotHeight,b.plotTop));c=this.left=Math.round(N(q(c.left,b.plotLeft+f[3]),b.plotWidth,b.plotLeft));this.bottom=b.chartHeight-e-h;this.right=b.chartWidth-
a-c;this.len=Math.max(d?a:e,0);this.pos=d?c:h};a.prototype.getExtremes=function(){var b=this.logarithmic;return{min:b?p(b.lin2log(this.min)):this.min,max:b?p(b.lin2log(this.max)):this.max,dataMin:this.dataMin,dataMax:this.dataMax,userMin:this.userMin,userMax:this.userMax}};a.prototype.getThreshold=function(b){var c=this.logarithmic,f=c?c.lin2log(this.min):this.min;c=c?c.lin2log(this.max):this.max;null===b||-Infinity===b?b=f:Infinity===b?b=c:f>b?b=f:c<b&&(b=c);return this.translate(b,0,1,0,1)};a.prototype.autoLabelAlign=
function(b){var f=(q(b,0)-90*this.side+720)%360;b={align:"center"};c(this,"autoLabelAlign",b,function(b){15<f&&165>f?b.align="right":195<f&&345>f&&(b.align="left")});return b.align};a.prototype.tickSize=function(b){var f=this.options,d=q(f["tick"===b?"tickWidth":"minorTickWidth"],"tick"===b&&this.isXAxis&&!this.categories?1:0),a=f["tick"===b?"tickLength":"minorTickLength"];if(d&&a){"inside"===f[b+"Position"]&&(a=-a);var e=[a,d]}b={tickSize:e};c(this,"afterTickSize",b);return b.tickSize};a.prototype.labelMetrics=
function(){var b=this.tickPositions&&this.tickPositions[0]||0;return this.chart.renderer.fontMetrics(this.options.labels.style.fontSize,this.ticks[b]&&this.ticks[b].label)};a.prototype.unsquish=function(){var b=this.options.labels,c=this.horiz,a=this.tickInterval,e=this.len/(((this.categories?1:0)+this.max-this.min)/a),h=b.rotation,n=this.labelMetrics(),u=Math.max(this.max-this.min,0),g=function(b){var c=b/(e||1);c=1<c?Math.ceil(c):1;c*a>u&&Infinity!==b&&Infinity!==e&&u&&(c=Math.ceil(u/a));return p(c*
a)},z=a,k=Number.MAX_VALUE;if(c){if(!b.staggerLines)if(f(h))var w=[h];else e<b.autoRotationLimit&&(w=b.autoRotation);if(w)for(var m=c=void 0,l=0,J=w;l<J.length;l++){var N=J[l];if(N===h||N&&-90<=N&&90>=N)if(c=g(Math.abs(n.h/Math.sin(d*N))),m=c+Math.abs(N/360),m<k){k=m;var y=N;z=c}}}else z=g(n.h);this.autoRotation=w;this.labelRotation=q(y,f(h)?h:0);return b.step?a:z};a.prototype.getSlotWidth=function(b){var c=this.chart,d=this.horiz,a=this.options.labels,e=Math.max(this.tickPositions.length-(this.categories?
0:1),1),h=c.margin[3];if(b&&f(b.slotWidth))return b.slotWidth;if(d&&2>a.step)return a.rotation?0:(this.staggerLines||1)*this.len/e;if(!d){b=a.style.width;if(void 0!==b)return parseInt(String(b),10);if(h)return h-c.spacing[3]}return.33*c.chartWidth};a.prototype.renderUnsquish=function(){var b=this.chart,c=b.renderer,f=this.tickPositions,d=this.ticks,a=this.options.labels,e=a.style,h=this.horiz,u=this.getSlotWidth(),q=Math.max(1,Math.round(u-2*a.padding)),g={},z=this.labelMetrics(),k=e.textOverflow,
w=0;n(a.rotation)||(g.rotation=a.rotation||0);f.forEach(function(b){b=d[b];b.movedLabel&&b.replaceMovedLabel();b&&b.label&&b.label.textPxLength>w&&(w=b.label.textPxLength)});this.maxLabelLength=w;if(this.autoRotation)w>q&&w>z.h?g.rotation=this.labelRotation:this.labelRotation=0;else if(u){var m=q;if(!k){var l="clip";for(q=f.length;!h&&q--;){var p=f[q];if(p=d[p].label)p.styles&&"ellipsis"===p.styles.textOverflow?p.css({textOverflow:"clip"}):p.textPxLength>u&&p.css({width:u+"px"}),p.getBBox().height>
this.len/f.length-(z.h-z.f)&&(p.specificTextOverflow="ellipsis")}}}g.rotation&&(m=w>.5*b.chartHeight?.33*b.chartHeight:w,k||(l="ellipsis"));if(this.labelAlign=a.align||this.autoLabelAlign(this.labelRotation))g.align=this.labelAlign;f.forEach(function(b){var c=(b=d[b])&&b.label,f=e.width,a={};c&&(c.attr(g),b.shortenLabel?b.shortenLabel():m&&!f&&"nowrap"!==e.whiteSpace&&(m<c.textPxLength||"SPAN"===c.element.tagName)?(a.width=m+"px",k||(a.textOverflow=c.specificTextOverflow||l),c.css(a)):c.styles&&c.styles.width&&
!a.width&&!f&&c.css({width:null}),delete c.specificTextOverflow,b.rotation=g.rotation)},this);this.tickRotCorr=c.rotCorr(z.b,this.labelRotation||0,0!==this.side)};a.prototype.hasData=function(){return this.series.some(function(b){return b.hasData()})||this.options.showEmpty&&D(this.min)&&D(this.max)};a.prototype.addTitle=function(c){var f=this.chart.renderer,d=this.horiz,a=this.opposite,e=this.options.title,h=this.chart.styledMode,n;this.axisTitle||((n=e.textAlign)||(n=(d?{low:"left",middle:"center",
high:"right"}:{low:a?"right":"left",middle:"center",high:a?"left":"right"})[e.align]),this.axisTitle=f.text(e.text||"",0,0,e.useHTML).attr({zIndex:7,rotation:e.rotation,align:n}).addClass("highcharts-axis-title"),h||this.axisTitle.css(b(e.style)),this.axisTitle.add(this.axisGroup),this.axisTitle.isNew=!0);h||e.style.width||this.isRadial||this.axisTitle.css({width:this.len+"px"});this.axisTitle[c?"show":"hide"](c)};a.prototype.generateTick=function(b){var c=this.ticks;c[b]?c[b].addLabel():c[b]=new H(this,
b)};a.prototype.getOffset=function(){var b=this,f=this,d=f.chart,a=f.horiz,e=f.options,h=f.side,n=f.ticks,u=f.tickPositions,g=f.coll,k=f.axisParent,w=d.renderer,m=d.inverted&&!f.isZAxis?[1,0,3,2][h]:h,l=f.hasData(),p=e.title,N=e.labels,J=d.axisOffset;d=d.clipOffset;var y=[-1,1,1,-1][h],O=e.className,r,Q=0,ja=0,da=0;f.showAxis=r=l||e.showEmpty;f.staggerLines=f.horiz&&N.staggerLines||void 0;if(!f.axisGroup){var I=function(c,f,d){return w.g(c).attr({zIndex:d}).addClass("highcharts-".concat(g.toLowerCase()).concat(f,
" ")+(b.isRadial?"highcharts-radial-axis".concat(f," "):"")+(O||"")).add(k)};f.gridGroup=I("grid","-grid",e.gridZIndex);f.axisGroup=I("axis","",e.zIndex);f.labelGroup=I("axis-labels","-labels",N.zIndex)}l||f.isLinked?(u.forEach(function(b){f.generateTick(b)}),f.renderUnsquish(),f.reserveSpaceDefault=0===h||2===h||{1:"left",3:"right"}[h]===f.labelAlign,q(N.reserveSpace,"center"===f.labelAlign?!0:null,f.reserveSpaceDefault)&&u.forEach(function(b){da=Math.max(n[b].getLabelSize(),da)}),f.staggerLines&&
(da*=f.staggerLines),f.labelOffset=da*(f.opposite?-1:1)):z(n,function(b,c){b.destroy();delete n[c]});if(p&&p.text&&!1!==p.enabled&&(f.addTitle(r),r&&!1!==p.reserveSpace)){f.titleOffset=Q=f.axisTitle.getBBox()[a?"height":"width"];var t=p.offset;ja=D(t)?0:q(p.margin,a?5:10)}f.renderLine();f.offset=y*q(e.offset,J[h]?J[h]+(e.margin||0):0);f.tickRotCorr=f.tickRotCorr||{x:0,y:0};p=0===h?-f.labelMetrics().h:2===h?f.tickRotCorr.y:0;l=Math.abs(da)+ja;da&&(l=l-p+y*(a?q(N.y,f.tickRotCorr.y+8*y):N.x));f.axisTitleMargin=
q(t,l);f.getMaxLabelDimensions&&(f.maxLabelDimensions=f.getMaxLabelDimensions(n,u));"colorAxis"!==g&&(a=this.tickSize("tick"),J[h]=Math.max(J[h],(f.axisTitleMargin||0)+Q+y*f.offset,l,u&&u.length&&a?a[0]+y*f.offset:0),e=!f.axisLine||e.offset?0:2*Math.floor(f.axisLine.strokeWidth()/2),d[m]=Math.max(d[m],e));c(this,"afterGetOffset")};a.prototype.getLinePath=function(b){var c=this.chart,f=this.opposite,d=this.offset,a=this.horiz,e=this.left+(f?this.width:0)+d;d=c.chartHeight-this.bottom-(f?this.height:
0)+d;f&&(b*=-1);return c.renderer.crispLine([["M",a?this.left:e,a?d:this.top],["L",a?c.chartWidth-this.right:e,a?d:c.chartHeight-this.bottom]],b)};a.prototype.renderLine=function(){this.axisLine||(this.axisLine=this.chart.renderer.path().addClass("highcharts-axis-line").add(this.axisGroup),this.chart.styledMode||this.axisLine.attr({stroke:this.options.lineColor,"stroke-width":this.options.lineWidth,zIndex:7}))};a.prototype.getTitlePosition=function(){var b=this.horiz,f=this.left,d=this.top,a=this.len,
e=this.options.title,h=b?f:d,n=this.opposite,u=this.offset,q=e.x,g=e.y,z=this.axisTitle,k=this.chart.renderer.fontMetrics(e.style.fontSize,z);z=z?Math.max(z.getBBox(!1,0).height-k.h-1,0):0;a={low:h+(b?0:a),middle:h+a/2,high:h+(b?a:0)}[e.align];f=(b?d+this.height:f)+(b?1:-1)*(n?-1:1)*(this.axisTitleMargin||0)+[-z,z,k.f,-z][this.side];b={x:b?a+q:f+(n?this.width:0)+u+q,y:b?f+g-(n?this.height:0)+u:a+g};c(this,"afterGetTitlePosition",{titlePosition:b});return b};a.prototype.renderMinorTick=function(b,
c){var f=this.minorTicks;f[b]||(f[b]=new H(this,b,"minor"));c&&f[b].isNew&&f[b].render(null,!0);f[b].render(null,!1,1)};a.prototype.renderTick=function(b,c,f){var d=this.ticks;if(!this.isLinked||b>=this.min&&b<=this.max||this.grid&&this.grid.isColumn)d[b]||(d[b]=new H(this,b)),f&&d[b].isNew&&d[b].render(c,!0,-1),d[b].render(c)};a.prototype.render=function(){var b=this,d=b.chart,a=b.logarithmic,e=b.options,h=b.isLinked,n=b.tickPositions,u=b.axisTitle,q=b.ticks,g=b.minorTicks,k=b.alternateBands,w=e.stackLabels,
m=e.alternateGridColor,l=b.tickmarkOffset,p=b.axisLine,N=b.showAxis,J=r(d.renderer.globalAnimation),y,O;b.labelEdge.length=0;b.overlap=!1;[q,g,k].forEach(function(b){z(b,function(b){b.isActive=!1})});if(b.hasData()||h){var D=b.chart.hasRendered&&b.old&&f(b.old.min);b.minorTickInterval&&!b.categories&&b.getMinorTickPositions().forEach(function(c){b.renderMinorTick(c,D)});n.length&&(n.forEach(function(c,f){b.renderTick(c,f,D)}),l&&(0===b.min||b.single)&&(q[-1]||(q[-1]=new H(b,-1,null,!0)),q[-1].render(-1)));
m&&n.forEach(function(c,f){O="undefined"!==typeof n[f+1]?n[f+1]+l:b.max-l;0===f%2&&c<b.max&&O<=b.max+(d.polar?-l:l)&&(k[c]||(k[c]=new B.PlotLineOrBand(b)),y=c+l,k[c].options={from:a?a.lin2log(y):y,to:a?a.lin2log(O):O,color:m,className:"highcharts-alternate-grid"},k[c].render(),k[c].isActive=!0)});b._addedPlotLB||(b._addedPlotLB=!0,(e.plotLines||[]).concat(e.plotBands||[]).forEach(function(c){b.addPlotBandOrLine(c)}))}[q,g,k].forEach(function(b){var c=[],f=J.duration;z(b,function(b,f){b.isActive||
(b.render(f,!1,0),b.isActive=!1,c.push(f))});Q(function(){for(var f=c.length;f--;)b[c[f]]&&!b[c[f]].isActive&&(b[c[f]].destroy(),delete b[c[f]])},b!==k&&d.hasRendered&&f?f:0)});p&&(p[p.isPlaced?"animate":"attr"]({d:this.getLinePath(p.strokeWidth())}),p.isPlaced=!0,p[N?"show":"hide"](N));u&&N&&(e=b.getTitlePosition(),u[u.isNew?"attr":"animate"](e),u.isNew=!1);w&&w.enabled&&b.stacking&&b.stacking.renderStackTotals();b.old={len:b.len,max:b.max,min:b.min,transA:b.transA,userMax:b.userMax,userMin:b.userMin};
b.isDirty=!1;c(this,"afterRender")};a.prototype.redraw=function(){this.visible&&(this.render(),this.plotLinesAndBands.forEach(function(b){b.render()}));this.series.forEach(function(b){b.isDirty=!0})};a.prototype.getKeepProps=function(){return this.keepProps||a.keepProps};a.prototype.destroy=function(b){var f=this,d=f.plotLinesAndBands,a=this.eventOptions;c(this,"destroy",{keepEvents:b});b||J(f);[f.ticks,f.minorTicks,f.alternateBands].forEach(function(b){I(b)});if(d)for(b=d.length;b--;)d[b].destroy();
"axisLine axisTitle axisGroup gridGroup labelGroup cross scrollbar".split(" ").forEach(function(b){f[b]&&(f[b]=f[b].destroy())});for(var e in f.plotLinesAndBandsGroups)f.plotLinesAndBandsGroups[e]=f.plotLinesAndBandsGroups[e].destroy();z(f,function(b,c){-1===f.getKeepProps().indexOf(c)&&delete f[c]});this.eventOptions=a};a.prototype.drawCrosshair=function(b,f){var d=this.crosshair,a=q(d&&d.snap,!0),e=this.chart,h,n=this.cross;c(this,"drawCrosshair",{e:b,point:f});b||(b=this.cross&&this.cross.e);if(d&&
!1!==(D(f)||!a)){a?D(f)&&(h=q("colorAxis"!==this.coll?f.crosshairPos:null,this.isXAxis?f.plotX:this.len-f.plotY)):h=b&&(this.horiz?b.chartX-this.pos:this.len-b.chartY+this.pos);if(D(h)){var u={value:f&&(this.isXAxis?f.x:q(f.stackY,f.y)),translatedValue:h};e.polar&&y(u,{isCrosshair:!0,chartX:b&&b.chartX,chartY:b&&b.chartY,point:f});u=this.getPlotLinePath(u)||null}if(!D(u)){this.hideCrosshair();return}a=this.categories&&!this.isRadial;n||(this.cross=n=e.renderer.path().addClass("highcharts-crosshair highcharts-crosshair-"+
(a?"category ":"thin ")+(d.className||"")).attr({zIndex:q(d.zIndex,2)}).add(),e.styledMode||(n.attr({stroke:d.color||(a?x.parse("#ccd6eb").setOpacity(.25).get():"#cccccc"),"stroke-width":q(d.width,1)}).css({"pointer-events":"none"}),d.dashStyle&&n.attr({dashstyle:d.dashStyle})));n.show().attr({d:u});a&&!d.width&&n.attr({"stroke-width":this.transA});this.cross.e=b}else this.hideCrosshair();c(this,"afterDrawCrosshair",{e:b,point:f})};a.prototype.hideCrosshair=function(){this.cross&&this.cross.hide();
c(this,"afterHideCrosshair")};a.prototype.hasVerticalPanning=function(){var b=this.chart.options.chart.panning;return!!(b&&b.enabled&&/y/.test(b.type))};a.prototype.validatePositiveValue=function(b){return f(b)&&0<b};a.prototype.update=function(c,f){var d=this.chart;c=b(this.userOptions,c);this.destroy(!0);this.init(d,c);d.isDirtyBox=!0;q(f,!0)&&d.redraw()};a.prototype.remove=function(b){for(var c=this.chart,f=this.coll,d=this.series,a=d.length;a--;)d[a]&&d[a].remove(!1);E(c.axes,this);E(c[f],this);
c[f].forEach(function(b,c){b.options.index=b.userOptions.index=c});this.destroy();c.isDirtyBox=!0;q(b,!0)&&c.redraw()};a.prototype.setTitle=function(b,c){this.update({title:b},c)};a.prototype.setCategories=function(b,c){this.update({categories:b},c)};a.defaultOptions=g.defaultXAxisOptions;a.keepProps="extKey hcEvents names series userMax userMin".split(" ");return a}();"";return a});K(g,"Core/Axis/DateTimeAxis.js",[g["Core/Utilities.js"]],function(a){var g=a.addEvent,x=a.getMagnitude,F=a.normalizeTickInterval,
C=a.timeUnits,B;(function(a){function t(){return this.chart.time.getTimeTicks.apply(this.chart.time,arguments)}function r(d){"datetime"!==d.userOptions.type?this.dateTime=void 0:this.dateTime||(this.dateTime=new e(this))}var l=[];a.compose=function(d){-1===l.indexOf(d)&&(l.push(d),d.keepProps.push("dateTime"),d.prototype.getTimeTicks=t,g(d,"init",r));return d};var e=function(){function d(d){this.axis=d}d.prototype.normalizeTimeTickInterval=function(d,a){var e=a||[["millisecond",[1,2,5,10,20,25,50,
100,200,500]],["second",[1,2,5,10,15,30]],["minute",[1,2,5,10,15,30]],["hour",[1,2,3,4,6,8,12]],["day",[1,2]],["week",[1,2]],["month",[1,2,3,4,6]],["year",null]];a=e[e.length-1];var h=C[a[0]],g=a[1],m;for(m=0;m<e.length&&!(a=e[m],h=C[a[0]],g=a[1],e[m+1]&&d<=(h*g[g.length-1]+C[e[m+1][0]])/2);m++);h===C.year&&d<5*h&&(g=[1,2,5]);d=F(d/h,g,"year"===a[0]?Math.max(x(d/h),1):1);return{unitRange:h,count:d,unitName:a[0]}};d.prototype.getXDateFormat=function(d,a){var e=this.axis,h=e.chart.time;return e.closestPointRange?
h.getDateFormat(e.closestPointRange,d,e.options.startOfWeek,a)||h.resolveDTLFormat(a.year).main:h.resolveDTLFormat(a.day).main};return d}();a.Additions=e})(B||(B={}));return B});K(g,"Core/Axis/LogarithmicAxis.js",[g["Core/Utilities.js"]],function(a){var g=a.addEvent,x=a.normalizeTickInterval,F=a.pick,C;(function(a){function A(a){var d=this.logarithmic;"logarithmic"!==a.userOptions.type?this.logarithmic=void 0:d||(this.logarithmic=new l(this))}function t(){var a=this.logarithmic;a&&(this.lin2val=function(d){return a.lin2log(d)},
this.val2lin=function(d){return a.log2lin(d)})}var r=[];a.compose=function(a){-1===r.indexOf(a)&&(r.push(a),a.keepProps.push("logarithmic"),g(a,"init",A),g(a,"afterInit",t));return a};var l=function(){function a(d){this.axis=d}a.prototype.getLogTickPositions=function(d,a,e,g){var h=this.axis,k=h.len,m=h.options,l=[];g||(this.minorAutoInterval=void 0);if(.5<=d)d=Math.round(d),l=h.getLinearTickPositions(d,a,e);else if(.08<=d){var r=Math.floor(a),y,c=m=void 0;for(k=.3<d?[1,2,4]:.15<d?[1,2,4,6,8]:[1,
2,3,4,5,6,7,8,9];r<e+1&&!c;r++){var w=k.length;for(y=0;y<w&&!c;y++){var f=this.log2lin(this.lin2log(r)*k[y]);f>a&&(!g||m<=e)&&"undefined"!==typeof m&&l.push(m);m>e&&(c=!0);m=f}}}else a=this.lin2log(a),e=this.lin2log(e),d=g?h.getMinorTickInterval():m.tickInterval,d=F("auto"===d?null:d,this.minorAutoInterval,m.tickPixelInterval/(g?5:1)*(e-a)/((g?k/h.tickPositions.length:k)||1)),d=x(d),l=h.getLinearTickPositions(d,a,e).map(this.log2lin),g||(this.minorAutoInterval=d/5);g||(h.tickInterval=d);return l};
a.prototype.lin2log=function(d){return Math.pow(10,d)};a.prototype.log2lin=function(d){return Math.log(d)/Math.LN10};return a}();a.Additions=l})(C||(C={}));return C});K(g,"Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js",[g["Core/Utilities.js"]],function(a){var g=a.erase,x=a.extend,F=a.isNumber,C;(function(a){var A=[],t;a.compose=function(a,e){t||(t=a);-1===A.indexOf(e)&&(A.push(e),x(e.prototype,r.prototype));return e};var r=function(){function a(){}a.prototype.getPlotBandPath=function(a,d,h){void 0===
h&&(h=this.options);var e=this.getPlotLinePath({value:d,force:!0,acrossPanes:h.acrossPanes}),g=[],l=this.horiz;d=!F(this.min)||!F(this.max)||a<this.min&&d<this.min||a>this.max&&d>this.max;a=this.getPlotLinePath({value:a,force:!0,acrossPanes:h.acrossPanes});h=1;if(a&&e){if(d){var r=a.toString()===e.toString();h=0}for(d=0;d<a.length;d+=2){var t=a[d],E=a[d+1],A=e[d],y=e[d+1];"M"!==t[0]&&"L"!==t[0]||"M"!==E[0]&&"L"!==E[0]||"M"!==A[0]&&"L"!==A[0]||"M"!==y[0]&&"L"!==y[0]||(l&&A[1]===t[1]?(A[1]+=h,y[1]+=
h):l||A[2]!==t[2]||(A[2]+=h,y[2]+=h),g.push(["M",t[1],t[2]],["L",E[1],E[2]],["L",y[1],y[2]],["L",A[1],A[2]],["Z"]));g.isFlat=r}}return g};a.prototype.addPlotBand=function(a){return this.addPlotBandOrLine(a,"plotBands")};a.prototype.addPlotLine=function(a){return this.addPlotBandOrLine(a,"plotLines")};a.prototype.addPlotBandOrLine=function(a,d){var e=this,g=this.userOptions,k=new t(this,a);this.visible&&(k=k.render());if(k){this._addedPlotLB||(this._addedPlotLB=!0,(g.plotLines||[]).concat(g.plotBands||
[]).forEach(function(a){e.addPlotBandOrLine(a)}));if(d){var l=g[d]||[];l.push(a);g[d]=l}this.plotLinesAndBands.push(k)}return k};a.prototype.removePlotBandOrLine=function(a){var d=this.plotLinesAndBands,e=this.options,m=this.userOptions;if(d){for(var k=d.length;k--;)d[k].id===a&&d[k].destroy();[e.plotLines||[],m.plotLines||[],e.plotBands||[],m.plotBands||[]].forEach(function(d){for(k=d.length;k--;)(d[k]||{}).id===a&&g(d,d[k])})}};a.prototype.removePlotBand=function(a){this.removePlotBandOrLine(a)};
a.prototype.removePlotLine=function(a){this.removePlotBandOrLine(a)};return a}()})(C||(C={}));return C});K(g,"Core/Axis/PlotLineOrBand/PlotLineOrBand.js",[g["Core/Axis/PlotLineOrBand/PlotLineOrBandAxis.js"],g["Core/Utilities.js"]],function(a,g){var A=g.arrayMax,F=g.arrayMin,C=g.defined,B=g.destroyObjectProperties,H=g.erase,t=g.fireEvent,r=g.merge,l=g.objectEach,e=g.pick;g=function(){function d(a,d){this.axis=a;d&&(this.options=d,this.id=d.id)}d.compose=function(e){return a.compose(d,e)};d.prototype.render=
function(){t(this,"render");var a=this,d=a.axis,g=d.horiz,p=d.logarithmic,D=a.options,I=D.color,E=e(D.zIndex,0),A=D.events,y={},c=d.chart.renderer,w=D.label,f=a.label,n=D.to,b=D.from,u=D.value,z=a.svgElem,q=[],N=C(b)&&C(n);q=C(u);var J=!z,O={"class":"highcharts-plot-"+(N?"band ":"line ")+(D.className||"")},Q=N?"bands":"lines";p&&(b=p.log2lin(b),n=p.log2lin(n),u=p.log2lin(u));d.chart.styledMode||(q?(O.stroke=I||"#999999",O["stroke-width"]=e(D.width,1),D.dashStyle&&(O.dashstyle=D.dashStyle)):N&&(O.fill=
I||"#e6ebf5",D.borderWidth&&(O.stroke=D.borderColor,O["stroke-width"]=D.borderWidth)));y.zIndex=E;Q+="-"+E;(p=d.plotLinesAndBandsGroups[Q])||(d.plotLinesAndBandsGroups[Q]=p=c.g("plot-"+Q).attr(y).add());J&&(a.svgElem=z=c.path().attr(O).add(p));if(q)q=d.getPlotLinePath({value:u,lineWidth:z.strokeWidth(),acrossPanes:D.acrossPanes});else if(N)q=d.getPlotBandPath(b,n,D);else return;!a.eventsAdded&&A&&(l(A,function(b,c){z.on(c,function(b){A[c].apply(a,[b])})}),a.eventsAdded=!0);(J||!z.d)&&q&&q.length?
z.attr({d:q}):z&&(q?(z.show(),z.animate({d:q})):z.d&&(z.hide(),f&&(a.label=f=f.destroy())));w&&(C(w.text)||C(w.formatter))&&q&&q.length&&0<d.width&&0<d.height&&!q.isFlat?(w=r({align:g&&N&&"center",x:g?!N&&4:10,verticalAlign:!g&&N&&"middle",y:g?N?16:10:N?6:-4,rotation:g&&!N&&90},w),this.renderLabel(w,q,N,E)):f&&f.hide();return a};d.prototype.renderLabel=function(a,d,e,g){var h=this.axis,k=h.chart.renderer,m=this.label;m||(this.label=m=k.text(this.getLabelText(a),0,0,a.useHTML).attr({align:a.textAlign||
a.align,rotation:a.rotation,"class":"highcharts-plot-"+(e?"band":"line")+"-label "+(a.className||""),zIndex:g}).add(),h.chart.styledMode||m.css(r({textOverflow:"ellipsis"},a.style)));g=d.xBounds||[d[0][1],d[1][1],e?d[2][1]:d[0][1]];d=d.yBounds||[d[0][2],d[1][2],e?d[2][2]:d[0][2]];e=F(g);k=F(d);m.align(a,!1,{x:e,y:k,width:A(g)-e,height:A(d)-k});m.alignValue&&"left"!==m.alignValue||(a=a.clip?h.width:h.chart.chartWidth,m.css({width:(90===m.rotation?h.height-(m.alignAttr.y-h.top):a-(m.alignAttr.x-h.left))+
"px"}));m.show(!0)};d.prototype.getLabelText=function(a){return C(a.formatter)?a.formatter.call(this):a.text};d.prototype.destroy=function(){H(this.axis.plotLinesAndBands,this);delete this.axis;B(this)};return d}();"";"";return g});K(g,"Core/Tooltip.js",[g["Core/FormatUtilities.js"],g["Core/Globals.js"],g["Core/Renderer/RendererUtilities.js"],g["Core/Renderer/RendererRegistry.js"],g["Core/Utilities.js"]],function(a,g,x,F,C){var A=a.format,H=g.doc,t=x.distribute,r=C.clamp,l=C.css,e=C.discardElement,
d=C.extend,h=C.fireEvent,m=C.isArray,k=C.isNumber,p=C.isString,D=C.merge,I=C.pick,E=C.splat,L=C.syncTimeout;a=function(){function a(c,a){this.allowShared=!0;this.container=void 0;this.crosshairs=[];this.distance=0;this.isHidden=!0;this.isSticky=!1;this.now={};this.options={};this.outside=!1;this.chart=c;this.init(c,a)}a.prototype.applyFilter=function(){var c=this.chart;c.renderer.definition({tagName:"filter",attributes:{id:"drop-shadow-"+c.index,opacity:.5},children:[{tagName:"feGaussianBlur",attributes:{"in":"SourceAlpha",
stdDeviation:1}},{tagName:"feOffset",attributes:{dx:1,dy:1}},{tagName:"feComponentTransfer",children:[{tagName:"feFuncA",attributes:{type:"linear",slope:.3}}]},{tagName:"feMerge",children:[{tagName:"feMergeNode"},{tagName:"feMergeNode",attributes:{"in":"SourceGraphic"}}]}]})};a.prototype.bodyFormatter=function(c){return c.map(function(c){var f=c.series.tooltipOptions;return(f[(c.point.formatPrefix||"point")+"Formatter"]||c.point.tooltipFormatter).call(c.point,f[(c.point.formatPrefix||"point")+"Format"]||
"")})};a.prototype.cleanSplit=function(c){this.chart.series.forEach(function(a){var f=a&&a.tt;f&&(!f.isActive||c?a.tt=f.destroy():f.isActive=!1)})};a.prototype.defaultFormatter=function(c){var a=this.points||E(this);var f=[c.tooltipFooterHeaderFormatter(a[0])];f=f.concat(c.bodyFormatter(a));f.push(c.tooltipFooterHeaderFormatter(a[0],!0));return f};a.prototype.destroy=function(){this.label&&(this.label=this.label.destroy());this.split&&this.tt&&(this.cleanSplit(!0),this.tt=this.tt.destroy());this.renderer&&
(this.renderer=this.renderer.destroy(),e(this.container));C.clearTimeout(this.hideTimer);C.clearTimeout(this.tooltipTimeout)};a.prototype.getAnchor=function(c,a){var f=this.chart,d=f.pointer,b=f.inverted,e=f.plotTop;f=f.plotLeft;c=E(c);c[0].series&&c[0].series.yAxis&&!c[0].series.yAxis.options.reversedStacks&&(c=c.slice().reverse());if(this.followPointer&&a)"undefined"===typeof a.chartX&&(a=d.normalize(a)),c=[a.chartX-f,a.chartY-e];else if(c[0].tooltipPos)c=c[0].tooltipPos;else{var h=0,g=0;c.forEach(function(b){if(b=
b.pos(!0))h+=b[0],g+=b[1]});h/=c.length;g/=c.length;this.shared&&1<c.length&&a&&(b?h=a.chartX:g=a.chartY);c=[h-f,g-e]}return c.map(Math.round)};a.prototype.getClassName=function(c,a,f){var d=c.series,b=d.options;return[this.options.className,"highcharts-label",f&&"highcharts-tooltip-header",a?"highcharts-tooltip-box":"highcharts-tooltip",!f&&"highcharts-color-"+I(c.colorIndex,d.colorIndex),b&&b.className].filter(p).join(" ")};a.prototype.getLabel=function(){var c=this,a=this.chart.styledMode,f=this.options,
d=this.split&&this.allowShared,b=f.style.pointerEvents||(this.shouldStickOnContact()?"auto":"none"),e,h=this.chart.renderer;if(c.label){var q=!c.label.hasClass("highcharts-label");(d&&!q||!d&&q)&&c.destroy()}if(!this.label){if(this.outside){q=this.chart.options.chart.style;var k=F.getRendererType();this.container=e=g.doc.createElement("div");e.className="highcharts-tooltip-container";l(e,{position:"absolute",top:"1px",pointerEvents:b,zIndex:Math.max(this.options.style.zIndex||0,(q&&q.zIndex||0)+3)});
g.doc.body.appendChild(e);this.renderer=h=new k(e,0,0,q,void 0,void 0,h.styledMode)}d?this.label=h.g("tooltip"):(this.label=h.label("",0,0,f.shape,void 0,void 0,f.useHTML,void 0,"tooltip").attr({padding:f.padding,r:f.borderRadius}),a||this.label.attr({fill:f.backgroundColor,"stroke-width":f.borderWidth}).css(f.style).css({pointerEvents:b}).shadow(f.shadow));a&&f.shadow&&(this.applyFilter(),this.label.attr({filter:"url(#drop-shadow-"+this.chart.index+")"}));if(c.outside&&!c.split){var m=this.label,
p=m.xSetter,y=m.ySetter;m.xSetter=function(b){p.call(m,c.distance);e.style.left=b+"px"};m.ySetter=function(b){y.call(m,c.distance);e.style.top=b+"px"}}this.label.attr({zIndex:8}).add()}return this.label};a.prototype.getPosition=function(c,a,f){var d=this.chart,b=this.distance,e={},h=d.inverted&&f.h||0,g=this.outside,k=g?H.documentElement.clientWidth-2*b:d.chartWidth,w=g?Math.max(H.body.scrollHeight,H.documentElement.scrollHeight,H.body.offsetHeight,H.documentElement.offsetHeight,H.documentElement.clientHeight):
d.chartHeight,m=d.pointer.getChartPosition(),l=function(e){var h="x"===e;return[e,h?k:w,h?c:a].concat(g?[h?c*m.scaleX:a*m.scaleY,h?m.left-b+(f.plotX+d.plotLeft)*m.scaleX:m.top-b+(f.plotY+d.plotTop)*m.scaleY,0,h?k:w]:[h?c:a,h?f.plotX+d.plotLeft:f.plotY+d.plotTop,h?d.plotLeft:d.plotTop,h?d.plotLeft+d.plotWidth:d.plotTop+d.plotHeight])},p=l("y"),y=l("x"),v;l=!!f.negative;!d.polar&&d.hoverSeries&&d.hoverSeries.yAxis&&d.hoverSeries.yAxis.reversed&&(l=!l);var r=!this.followPointer&&I(f.ttBelow,!d.inverted===
l),t=function(c,f,a,d,n,u,q){var z=g?"y"===c?b*m.scaleY:b*m.scaleX:b,k=(a-d)/2,w=d<n-b,G=n+b+d<f,l=n-z-a+k;n=n+z-k;if(r&&G)e[c]=n;else if(!r&&w)e[c]=l;else if(w)e[c]=Math.min(q-d,0>l-h?l:l-h);else if(G)e[c]=Math.max(u,n+h+a>f?n:n+h);else return!1},D=function(c,f,a,d,h){var n;h<b||h>f-b?n=!1:e[c]=h<a/2?1:h>f-d/2?f-d-2:h-a/2;return n},E=function(b){var c=p;p=y;y=c;v=b},G=function(){!1!==t.apply(0,p)?!1!==D.apply(0,y)||v||(E(!0),G()):v?e.x=e.y=0:(E(!0),G())};(d.inverted||1<this.len)&&E();G();return e};
a.prototype.hide=function(c){var a=this;C.clearTimeout(this.hideTimer);c=I(c,this.options.hideDelay);this.isHidden||(this.hideTimer=L(function(){a.getLabel().fadeOut(c?void 0:c);a.isHidden=!0},c))};a.prototype.init=function(c,a){this.chart=c;this.options=a;this.crosshairs=[];this.now={x:0,y:0};this.isHidden=!0;this.split=a.split&&!c.inverted&&!c.polar;this.shared=a.shared||this.split;this.outside=I(a.outside,!(!c.scrollablePixelsX&&!c.scrollablePixelsY))};a.prototype.shouldStickOnContact=function(c){return!(this.followPointer||
!this.options.stickOnContact||c&&!this.chart.pointer.inClass(c.target,"highcharts-tooltip"))};a.prototype.move=function(c,a,f,e){var b=this,h=b.now,n=!1!==b.options.animation&&!b.isHidden&&(1<Math.abs(c-h.x)||1<Math.abs(a-h.y)),g=b.followPointer||1<b.len;d(h,{x:n?(2*h.x+c)/3:c,y:n?(h.y+a)/2:a,anchorX:g?void 0:n?(2*h.anchorX+f)/3:f,anchorY:g?void 0:n?(h.anchorY+e)/2:e});b.getLabel().attr(h);b.drawTracker();n&&(C.clearTimeout(this.tooltipTimeout),this.tooltipTimeout=setTimeout(function(){b&&b.move(c,
a,f,e)},32))};a.prototype.refresh=function(c,a){var f=this.chart,d=this.options,b=f.pointer,e=E(c),g=e[0],q=[],k=d.formatter||this.defaultFormatter,w=this.shared,l=f.styledMode,p={};if(d.enabled&&g.series){C.clearTimeout(this.hideTimer);this.allowShared=!(!m(c)&&c.series&&c.series.noSharedTooltip);this.followPointer=!this.split&&g.series.tooltipOptions.followPointer;c=this.getAnchor(c,a);var y=c[0],r=c[1];w&&this.allowShared?(b.applyInactiveState(e),e.forEach(function(b){b.setState("hover");q.push(b.getLabelConfig())}),
p={x:g.category,y:g.y},p.points=q):p=g.getLabelConfig();this.len=q.length;k=k.call(p,this);w=g.series;this.distance=I(w.tooltipOptions.distance,16);if(!1===k)this.hide();else{if(this.split&&this.allowShared)this.renderSplit(k,e);else{var v=y,t=r;a&&b.isDirectTouch&&(v=a.chartX-f.plotLeft,t=a.chartY-f.plotTop);if(f.polar||!1===w.options.clip||e.some(function(c){return b.isDirectTouch||c.series.shouldShowTooltip(v,t)}))a=this.getLabel(),d.style.width&&!l||a.css({width:f.spacingBox.width+"px"}),a.attr({text:k&&
k.join?k.join(""):k}),a.addClass(this.getClassName(g),!0),l||a.attr({stroke:d.borderColor||g.color||w.color||"#666666"}),this.updatePosition({plotX:y,plotY:r,negative:g.negative,ttBelow:g.ttBelow,h:c[2]||0});else{this.hide();return}}this.isHidden&&this.label&&this.label.attr({opacity:1}).show();this.isHidden=!1}h(this,"refresh")}};a.prototype.renderSplit=function(c,a){function f(b,c,a,f,d){void 0===d&&(d=!0);a?(c=R?0:ba,b=r(b-f/2,P.left,P.right-f-(e.outside?V:0))):(c-=Z,b=d?b-f-x:b+x,b=r(b,d?b:P.left,
P.right));return{x:b,y:c}}var e=this,b=e.chart,h=e.chart,g=h.chartWidth,q=h.chartHeight,k=h.plotHeight,w=h.plotLeft,m=h.plotTop,l=h.pointer,y=h.scrollablePixelsY;y=void 0===y?0:y;var D=h.scrollablePixelsX,v=h.scrollingContainer;v=void 0===v?{scrollLeft:0,scrollTop:0}:v;var E=v.scrollLeft;v=v.scrollTop;var A=h.styledMode,x=e.distance,L=e.options,G=e.options.positioner,P=e.outside&&"number"!==typeof D?H.documentElement.getBoundingClientRect():{left:E,right:E+g,top:v,bottom:v+q},M=e.getLabel(),X=this.renderer||
b.renderer,R=!(!b.xAxis[0]||!b.xAxis[0].opposite);b=l.getChartPosition();var V=b.left;b=b.top;var Z=m+v,C=0,ba=k-y;p(c)&&(c=[!1,c]);c=c.slice(0,a.length+1).reduce(function(b,c,d){if(!1!==c&&""!==c){d=a[d-1]||{isHeader:!0,plotX:a[0].plotX,plotY:k,series:{}};var h=d.isHeader,n=h?e:d.series;c=c.toString();var g=n.tt,u=d.isHeader;var q=d.series;g||(g={padding:L.padding,r:L.borderRadius},A||(g.fill=L.backgroundColor,g["stroke-width"]=L.borderWidth),g=X.label("",0,0,L[u?"headerShape":"shape"],void 0,void 0,
L.useHTML).addClass(e.getClassName(d,!0,u)).attr(g).add(M));g.isActive=!0;g.attr({text:c});A||g.css(L.style).shadow(L.shadow).attr({stroke:L.borderColor||d.color||q.color||"#333333"});n=n.tt=g;u=n.getBBox();c=u.width+n.strokeWidth();h&&(C=u.height,ba+=C,R&&(Z-=C));q=d.plotX;q=void 0===q?0:q;g=d.plotY;g=void 0===g?0:g;var z=d.series;if(d.isHeader){q=w+q;var l=m+k/2}else{var v=z.xAxis,p=z.yAxis;q=v.pos+r(q,-x,v.len+x);z.shouldShowTooltip(0,p.pos-m+g,{ignoreX:!0})&&(l=p.pos+g)}q=r(q,P.left-x,P.right+
x);"number"===typeof l?(u=u.height+1,g=G?G.call(e,c,u,d):f(q,l,h,c),b.push({align:G?0:void 0,anchorX:q,anchorY:l,boxWidth:c,point:d,rank:I(g.rank,h?1:0),size:u,target:g.y,tt:n,x:g.x})):n.isActive=!1}return b},[]);!G&&c.some(function(b){var c=(e.outside?V:0)+b.anchorX;return c<P.left&&c+b.boxWidth<P.right?!0:c<V-P.left+b.boxWidth&&P.right-c>c})&&(c=c.map(function(b){var c=f(b.anchorX,b.anchorY,b.point.isHeader,b.boxWidth,!1);return d(b,{target:c.y,x:c.x})}));e.cleanSplit();t(c,ba);var B=V,F=V;c.forEach(function(b){var c=
b.x,a=b.boxWidth;b=b.isHeader;b||(e.outside&&V+c<B&&(B=V+c),!b&&e.outside&&B+a>F&&(F=V+c))});c.forEach(function(b){var c=b.x,a=b.anchorX,f=b.pos,d=b.point.isHeader;f={visibility:"undefined"===typeof f?"hidden":"inherit",x:c,y:(f||0)+Z,anchorX:a,anchorY:b.anchorY};if(e.outside&&c<a){var h=V-B;0<h&&(d||(f.x=c+h,f.anchorX=a+h),d&&(f.x=(F-B)/2,f.anchorX=a+h))}b.tt.attr(f)});c=e.container;y=e.renderer;e.outside&&c&&y&&(h=M.getBBox(),y.setSize(h.width+h.x,h.height+h.y,!1),c.style.left=B+"px",c.style.top=
b+"px")};a.prototype.drawTracker=function(){if(this.shouldStickOnContact()){var c=this.chart,a=this.label,f=this.shared?c.hoverPoints:c.hoverPoint;if(a&&f){var d={x:0,y:0,width:0,height:0};f=this.getAnchor(f);var b=a.getBBox();f[0]+=c.plotLeft-a.translateX;f[1]+=c.plotTop-a.translateY;d.x=Math.min(0,f[0]);d.y=Math.min(0,f[1]);d.width=0>f[0]?Math.max(Math.abs(f[0]),b.width-f[0]):Math.max(Math.abs(f[0]),b.width);d.height=0>f[1]?Math.max(Math.abs(f[1]),b.height-Math.abs(f[1])):Math.max(Math.abs(f[1]),
b.height);this.tracker?this.tracker.attr(d):(this.tracker=a.renderer.rect(d).addClass("highcharts-tracker").add(a),c.styledMode||this.tracker.attr({fill:"rgba(0,0,0,0)"}))}}else this.tracker&&this.tracker.destroy()};a.prototype.styledModeFormat=function(c){return c.replace('style="font-size: 10px"','class="highcharts-header"').replace(/style="color:{(point|series)\.color}"/g,'class="highcharts-color-{$1.colorIndex} {series.options.className} {point.options.className}"')};a.prototype.tooltipFooterHeaderFormatter=
function(c,a){var f=c.series,d=f.tooltipOptions,b=f.xAxis,e=b&&b.dateTime;b={isFooter:a,labelConfig:c};var g=d.xDateFormat,q=d[a?"footerFormat":"headerFormat"];h(this,"headerFormatter",b,function(b){e&&!g&&k(c.key)&&(g=e.getXDateFormat(c.key,d.dateTimeLabelFormats));e&&g&&(c.point&&c.point.tooltipDateKeys||["key"]).forEach(function(b){q=q.replace("{point."+b+"}","{point."+b+":"+g+"}")});f.chart.styledMode&&(q=this.styledModeFormat(q));b.text=A(q,{point:c,series:f},this.chart)});return b.text};a.prototype.update=
function(c){this.destroy();D(!0,this.chart.options.tooltip.userOptions,c);this.init(this.chart,D(!0,this.options,c))};a.prototype.updatePosition=function(c){var a=this.chart,f=this.distance,d=this.options,b=a.pointer,e=this.getLabel(),h=b.getChartPosition();b=h.left;var g=h.top,k=h.scaleX;h=h.scaleY;var m=(d.positioner||this.getPosition).call(this,e.width,e.height,c),p=(c.plotX||0)+a.plotLeft;c=(c.plotY||0)+a.plotTop;if(this.outside){d.positioner&&(m.x+=b-f,m.y+=g-f);f=d.borderWidth+2*f;this.renderer.setSize(e.width+
f,e.height+f,!1);if(1!==k||1!==h)l(this.container,{transform:"scale(".concat(k,", ").concat(h,")")}),p*=k,c*=h;p+=b-m.x;c+=g-m.y}this.move(Math.round(m.x),Math.round(m.y||0),p,c)};return a}();"";return a});K(g,"Core/Series/Point.js",[g["Core/Renderer/HTML/AST.js"],g["Core/Animation/AnimationUtilities.js"],g["Core/Defaults.js"],g["Core/FormatUtilities.js"],g["Core/Utilities.js"]],function(a,g,x,F,C){var A=g.animObject,H=x.defaultOptions,t=F.format,r=C.addEvent,l=C.defined,e=C.erase,d=C.extend,h=C.fireEvent,
m=C.getNestedProperty,k=C.isArray,p=C.isFunction,D=C.isNumber,I=C.isObject,E=C.merge,L=C.objectEach,y=C.pick,c=C.syncTimeout,w=C.removeEvent,f=C.uniqueKey;g=function(){function g(){this.category=void 0;this.formatPrefix="point";this.id=void 0;this.isNull=!1;this.percentage=this.options=this.name=void 0;this.selected=!1;this.total=this.shapeArgs=this.series=void 0;this.visible=!0;this.x=void 0}g.prototype.animateBeforeDestroy=function(){var b=this,c={x:b.startXPos,opacity:0},a=b.getGraphicalProps();
a.singular.forEach(function(a){b[a]=b[a].animate("dataLabel"===a?{x:b[a].startXPos,y:b[a].startYPos,opacity:0}:c)});a.plural.forEach(function(c){b[c].forEach(function(c){c.element&&c.animate(d({x:b.startXPos},c.startYPos?{x:c.startXPos,y:c.startYPos}:{}))})})};g.prototype.applyOptions=function(b,c){var a=this.series,f=a.options.pointValKey||a.pointValKey;b=g.prototype.optionsToObject.call(this,b);d(this,b);this.options=this.options?d(this.options,b):b;b.group&&delete this.group;b.dataLabels&&delete this.dataLabels;
f&&(this.y=g.prototype.getNestedProperty.call(this,f));this.formatPrefix=(this.isNull=this.isValid&&!this.isValid())?"null":"point";this.selected&&(this.state="select");"name"in this&&"undefined"===typeof c&&a.xAxis&&a.xAxis.hasNames&&(this.x=a.xAxis.nameToX(this));"undefined"===typeof this.x&&a?this.x="undefined"===typeof c?a.autoIncrement():c:D(b.x)&&a.options.relativeXValue&&(this.x=a.autoIncrement(b.x));return this};g.prototype.destroy=function(){function b(){if(a.graphic||a.graphics||a.dataLabel||
a.dataLabels)w(a),a.destroyElements();for(n in a)a[n]=null}var a=this,f=a.series,d=f.chart;f=f.options.dataSorting;var h=d.hoverPoints,g=A(a.series.chart.renderer.globalAnimation),n;a.legendItem&&d.legend.destroyItem(a);h&&(a.setState(),e(h,a),h.length||(d.hoverPoints=null));if(a===d.hoverPoint)a.onMouseOut();f&&f.enabled?(this.animateBeforeDestroy(),c(b,g.duration)):b();d.pointCount--};g.prototype.destroyElements=function(b){var c=this;b=c.getGraphicalProps(b);b.singular.forEach(function(b){c[b]=
c[b].destroy()});b.plural.forEach(function(b){c[b].forEach(function(b){b&&b.element&&b.destroy()});delete c[b]})};g.prototype.firePointEvent=function(b,c,a){var f=this,d=this.series.options;(d.point.events[b]||f.options&&f.options.events&&f.options.events[b])&&f.importEvents();"click"===b&&d.allowPointSelect&&(a=function(b){f.select&&f.select(null,b.ctrlKey||b.metaKey||b.shiftKey)});h(f,b,c,a)};g.prototype.getClassName=function(){return"highcharts-point"+(this.selected?" highcharts-point-select":
"")+(this.negative?" highcharts-negative":"")+(this.isNull?" highcharts-null-point":"")+("undefined"!==typeof this.colorIndex?" highcharts-color-"+this.colorIndex:"")+(this.options.className?" "+this.options.className:"")+(this.zone&&this.zone.className?" "+this.zone.className.replace("highcharts-negative",""):"")};g.prototype.getGraphicalProps=function(b){var c=this,a=[],f={singular:[],plural:[]},d;b=b||{graphic:1,dataLabel:1};b.graphic&&a.push("graphic","shadowGroup");b.dataLabel&&a.push("dataLabel",
"dataLabelPath","dataLabelUpper","connector");for(d=a.length;d--;){var e=a[d];c[e]&&f.singular.push(e)}["graphic","dataLabel","connector"].forEach(function(a){var d=a+"s";b[a]&&c[d]&&f.plural.push(d)});return f};g.prototype.getLabelConfig=function(){return{x:this.category,y:this.y,color:this.color,colorIndex:this.colorIndex,key:this.name||this.category,series:this.series,point:this,percentage:this.percentage,total:this.total||this.stackTotal}};g.prototype.getNestedProperty=function(b){if(b)return 0===
b.indexOf("custom.")?m(b,this.options):this[b]};g.prototype.getZone=function(){var b=this.series,c=b.zones;b=b.zoneAxis||"y";var a,f=0;for(a=c[f];this[b]>=a.value;)a=c[++f];this.nonZonedColor||(this.nonZonedColor=this.color);this.color=a&&a.color&&!this.options.color?a.color:this.nonZonedColor;return a};g.prototype.hasNewShapeType=function(){return(this.graphic&&(this.graphic.symbolName||this.graphic.element.nodeName))!==this.shapeType};g.prototype.init=function(b,c,a){this.series=b;this.applyOptions(c,
a);this.id=l(this.id)?this.id:f();this.resolveColor();b.chart.pointCount++;h(this,"afterInit");return this};g.prototype.isValid=function(){return null!==this.x&&D(this.y)};g.prototype.optionsToObject=function(b){var c=this.series,a=c.options.keys,f=a||c.pointArrayMap||["y"],d=f.length,e={},h=0,n=0;if(D(b)||null===b)e[f[0]]=b;else if(k(b))for(!a&&b.length>d&&(c=typeof b[0],"string"===c?e.name=b[0]:"number"===c&&(e.x=b[0]),h++);n<d;)a&&"undefined"===typeof b[h]||(0<f[n].indexOf(".")?g.prototype.setNestedProperty(e,
b[h],f[n]):e[f[n]]=b[h]),h++,n++;else"object"===typeof b&&(e=b,b.dataLabels&&(c._hasPointLabels=!0),b.marker&&(c._hasPointMarkers=!0));return e};g.prototype.pos=function(b,c){void 0===c&&(c=this.plotY);var a=this.plotX,f=this.series,d=f.chart,e=f.xAxis;f=f.yAxis;var h=0,g=0;if(D(a)&&D(c))return b&&(h=e?e.pos:d.plotLeft,g=f?f.pos:d.plotTop),d.inverted&&e&&f?[f.len-c+g,e.len-a+h]:[a+h,c+g]};g.prototype.resolveColor=function(){var b=this.series,c=b.chart.styledMode;var a=b.chart.options.chart.colorCount;
delete this.nonZonedColor;if(b.options.colorByPoint){if(!c){a=b.options.colors||b.chart.options.colors;var f=a[b.colorCounter];a=a.length}c=b.colorCounter;b.colorCounter++;b.colorCounter===a&&(b.colorCounter=0)}else c||(f=b.color),c=b.colorIndex;this.colorIndex=y(this.options.colorIndex,c);this.color=y(this.options.color,f)};g.prototype.setNestedProperty=function(b,c,a){a.split(".").reduce(function(b,a,f,d){b[a]=d.length-1===f?c:I(b[a],!0)?b[a]:{};return b[a]},b);return b};g.prototype.shouldDraw=
function(){return!this.isNull};g.prototype.tooltipFormatter=function(b){var c=this.series,a=c.tooltipOptions,f=y(a.valueDecimals,""),d=a.valuePrefix||"",e=a.valueSuffix||"";c.chart.styledMode&&(b=c.chart.tooltip.styledModeFormat(b));(c.pointArrayMap||["y"]).forEach(function(c){c="{point."+c;if(d||e)b=b.replace(RegExp(c+"}","g"),d+c+"}"+e);b=b.replace(RegExp(c+"}","g"),c+":,."+f+"f}")});return t(b,{point:this,series:this.series},c.chart)};g.prototype.update=function(b,c,a,f){function d(){e.applyOptions(b);
var f=g&&e.hasMockGraphic;f=null===e.y?!f:f;g&&f&&(e.graphic=g.destroy(),delete e.hasMockGraphic);I(b,!0)&&(g&&g.element&&b&&b.marker&&"undefined"!==typeof b.marker.symbol&&(e.graphic=g.destroy()),b&&b.dataLabels&&e.dataLabel&&(e.dataLabel=e.dataLabel.destroy()),e.connector&&(e.connector=e.connector.destroy()));u=e.index;h.updateParallelArrays(e,u);q.data[u]=I(q.data[u],!0)||I(b,!0)?e.options:y(b,q.data[u]);h.isDirty=h.isDirtyData=!0;!h.fixedBox&&h.hasCartesianSeries&&(n.isDirtyBox=!0);"point"===
q.legendType&&(n.isDirtyLegend=!0);c&&n.redraw(a)}var e=this,h=e.series,g=e.graphic,n=h.chart,q=h.options,u;c=y(c,!0);!1===f?d():e.firePointEvent("update",{options:b},d)};g.prototype.remove=function(b,c){this.series.removePoint(this.series.data.indexOf(this),b,c)};g.prototype.select=function(b,c){var a=this,f=a.series,d=f.chart;this.selectedStaging=b=y(b,!a.selected);a.firePointEvent(b?"select":"unselect",{accumulate:c},function(){a.selected=a.options.selected=b;f.options.data[f.data.indexOf(a)]=
a.options;a.setState(b&&"select");c||d.getSelectedPoints().forEach(function(b){var c=b.series;b.selected&&b!==a&&(b.selected=b.options.selected=!1,c.options.data[c.data.indexOf(b)]=b.options,b.setState(d.hoverPoints&&c.options.inactiveOtherPoints?"inactive":""),b.firePointEvent("unselect"))})});delete this.selectedStaging};g.prototype.onMouseOver=function(b){var c=this.series.chart,a=c.pointer;b=b?a.normalize(b):a.getChartCoordinatesFromPoint(this,c.inverted);a.runPointActions(b,this)};g.prototype.onMouseOut=
function(){var b=this.series.chart;this.firePointEvent("mouseOut");this.series.options.inactiveOtherPoints||(b.hoverPoints||[]).forEach(function(b){b.setState()});b.hoverPoints=b.hoverPoint=null};g.prototype.importEvents=function(){if(!this.hasImportedEvents){var b=this,c=E(b.series.options.point,b.options).events;b.events=c;L(c,function(c,a){p(c)&&r(b,a,c)});this.hasImportedEvents=!0}};g.prototype.setState=function(b,c){var f=this.series,e=this.state,g=f.options.states[b||"normal"]||{},n=H.plotOptions[f.type].marker&&
f.options.marker,u=n&&!1===n.enabled,k=n&&n.states&&n.states[b||"normal"]||{},m=!1===k.enabled,w=this.marker||{},l=f.chart,p=n&&f.markerAttribs,r=f.halo,t,E=f.stateMarkerGraphic;b=b||"";if(!(b===this.state&&!c||this.selected&&"select"!==b||!1===g.enabled||b&&(m||u&&!1===k.enabled)||b&&w.states&&w.states[b]&&!1===w.states[b].enabled)){this.state=b;p&&(t=f.markerAttribs(this,b));if(this.graphic&&!this.hasMockGraphic){e&&this.graphic.removeClass("highcharts-point-"+e);b&&this.graphic.addClass("highcharts-point-"+
b);if(!l.styledMode){e=f.pointAttribs(this,b);var G=y(l.options.chart.animation,g.animation);var P=e.opacity;f.options.inactiveOtherPoints&&D(P)&&((this.dataLabels||[]).forEach(function(b){b&&!b.hasClass("highcharts-data-label-hidden")&&b.animate({opacity:P},G)}),this.connector&&this.connector.animate({opacity:P},G));this.graphic.animate(e,G)}t&&this.graphic.animate(t,y(l.options.chart.animation,k.animation,n.animation));E&&E.hide()}else{if(b&&k){n=w.symbol||f.symbol;E&&E.currentSymbol!==n&&(E=E.destroy());
if(t)if(E)E[c?"animate":"attr"]({x:t.x,y:t.y});else n&&(f.stateMarkerGraphic=E=l.renderer.symbol(n,t.x,t.y,t.width,t.height).add(f.markerGroup),E.currentSymbol=n);!l.styledMode&&E&&"inactive"!==this.state&&E.attr(f.pointAttribs(this,b))}E&&(E[b&&this.isInside?"show":"hide"](),E.element.point=this,E.addClass(this.getClassName(),!0))}g=g.halo;t=(E=this.graphic||E)&&E.visibility||"inherit";g&&g.size&&E&&"hidden"!==t&&!this.isCluster?(r||(f.halo=r=l.renderer.path().add(E.parentGroup)),r.show()[c?"animate":
"attr"]({d:this.haloPath(g.size)}),r.attr({"class":"highcharts-halo highcharts-color-"+y(this.colorIndex,f.colorIndex)+(this.className?" "+this.className:""),visibility:t,zIndex:-1}),r.point=this,l.styledMode||r.attr(d({fill:this.color||f.color,"fill-opacity":g.opacity},a.filterUserAttributes(g.attributes||{})))):r&&r.point&&r.point.haloPath&&r.animate({d:r.point.haloPath(0)},null,r.hide);h(this,"afterSetState",{state:b})}};g.prototype.haloPath=function(b){var c=this.pos();return c?this.series.chart.renderer.symbols.circle(Math.floor(c[0])-
b,c[1]-b,2*b,2*b):[]};return g}();"";return g});K(g,"Core/Pointer.js",[g["Core/Color/Color.js"],g["Core/Globals.js"],g["Core/Tooltip.js"],g["Core/Utilities.js"]],function(a,g,x,F){var A=a.parse,B=g.charts,H=g.noop,t=F.addEvent,r=F.attr,l=F.css,e=F.defined,d=F.extend,h=F.find,m=F.fireEvent,k=F.isNumber,p=F.isObject,D=F.objectEach,I=F.offset,E=F.pick,L=F.splat;a=function(){function a(c,a){this.lastValidTouch={};this.pinchDown=[];this.runChartClick=!1;this.eventsToUnbind=[];this.chart=c;this.hasDragged=
!1;this.options=a;this.init(c,a)}a.prototype.applyInactiveState=function(c){var a=[],f;(c||[]).forEach(function(c){f=c.series;a.push(f);f.linkedParent&&a.push(f.linkedParent);f.linkedSeries&&(a=a.concat(f.linkedSeries));f.navigatorSeries&&a.push(f.navigatorSeries)});this.chart.series.forEach(function(c){-1===a.indexOf(c)?c.setState("inactive",!0):c.options.inactiveOtherPoints&&c.setAllPointsToState("inactive")})};a.prototype.destroy=function(){var c=this;this.eventsToUnbind.forEach(function(c){return c()});
this.eventsToUnbind=[];g.chartCount||(a.unbindDocumentMouseUp&&(a.unbindDocumentMouseUp=a.unbindDocumentMouseUp()),a.unbindDocumentTouchEnd&&(a.unbindDocumentTouchEnd=a.unbindDocumentTouchEnd()));clearInterval(c.tooltipTimeout);D(c,function(a,f){c[f]=void 0})};a.prototype.getSelectionMarkerAttrs=function(c,a){var f=this,d={args:{chartX:c,chartY:a},attrs:{},shapeType:"rect"};m(this,"getSelectionMarkerAttrs",d,function(b){var d=f.chart,e=f.mouseDownX;e=void 0===e?0:e;var h=f.mouseDownY;h=void 0===h?
0:h;var g=f.zoomHor,n=f.zoomVert;b=b.attrs;b.x=d.plotLeft;b.y=d.plotTop;b.width=g?1:d.plotWidth;b.height=n?1:d.plotHeight;g&&(d=c-e,b.width=Math.abs(d),b.x=(0<d?0:d)+e);n&&(d=a-h,b.height=Math.abs(d),b.y=(0<d?0:d)+h)});return d};a.prototype.drag=function(c){var a=this.chart,f=a.options.chart,d=a.plotLeft,b=a.plotTop,e=a.plotWidth,h=a.plotHeight,g=this.mouseDownX||0,k=this.mouseDownY||0,m=p(f.panning)?f.panning&&f.panning.enabled:f.panning,l=f.panKey&&c[f.panKey+"Key"],y=c.chartX,r=c.chartY,t=this.selectionMarker;
t&&t.touch||(y<d?y=d:y>d+e&&(y=d+e),r<b?r=b:r>b+h&&(r=b+h),this.hasDragged=Math.sqrt(Math.pow(g-y,2)+Math.pow(k-r,2)),10<this.hasDragged&&(d=a.isInsidePlot(g-d,k-b,{visiblePlotOnly:!0}),r=this.getSelectionMarkerAttrs(y,r),y=r.shapeType,r=r.attrs,!a.hasCartesianSeries&&!a.mapView||!this.zoomX&&!this.zoomY||!d||l||t||(this.selectionMarker=t=a.renderer[y](),t.attr({"class":"highcharts-selection-marker",zIndex:7}).add(),a.styledMode||t.attr({fill:f.selectionMarkerFill||A("#335cad").setOpacity(.25).get()})),
t&&t.attr(r),d&&!t&&m&&a.pan(c,f.panning)))};a.prototype.dragStart=function(c){var a=this.chart;a.mouseIsDown=c.type;a.cancelClick=!1;a.mouseDownX=this.mouseDownX=c.chartX;a.mouseDownY=this.mouseDownY=c.chartY};a.prototype.getSelectionBox=function(c){var a={args:{marker:c},result:{}};m(this,"getSelectionBox",a,function(a){a.result={x:c.attr?+c.attr("x"):c.x,y:c.attr?+c.attr("y"):c.y,width:c.attr?c.attr("width"):c.width,height:c.attr?c.attr("height"):c.height}});return a.result};a.prototype.drop=function(c){var a=
this,f=this.chart,h=this.hasPinched;if(this.selectionMarker){var b=this.getSelectionBox(this.selectionMarker),g=b.x,z=b.y,q=b.width,p=b.height,y={originalEvent:c,xAxis:[],yAxis:[],x:g,y:z,width:q,height:p},r=!!f.mapView;if(this.hasDragged||h)f.axes.forEach(function(b){if(b.zoomEnabled&&e(b.min)&&(h||a[{xAxis:"zoomX",yAxis:"zoomY"}[b.coll]])&&k(g)&&k(z)&&k(q)&&k(p)){var f=b.horiz,d="touchend"===c.type?b.minPixelPadding:0,n=b.toValue((f?g:z)+d);f=b.toValue((f?g+q:z+p)-d);y[b.coll].push({axis:b,min:Math.min(n,
f),max:Math.max(n,f)});r=!0}}),r&&m(f,"selection",y,function(b){f.zoom(d(b,h?{animation:!1}:null))});k(f.index)&&(this.selectionMarker=this.selectionMarker.destroy());h&&this.scaleGroups()}f&&k(f.index)&&(l(f.container,{cursor:f._cursor}),f.cancelClick=10<this.hasDragged,f.mouseIsDown=this.hasDragged=this.hasPinched=!1,this.pinchDown=[])};a.prototype.findNearestKDPoint=function(c,a,f){var d;c.forEach(function(b){var c=!(b.noSharedTooltip&&a)&&0>b.options.findNearestPointBy.indexOf("y");b=b.searchPoint(f,
c);if((c=p(b,!0)&&b.series)&&!(c=!p(d,!0))){c=d.distX-b.distX;var e=d.dist-b.dist,h=(b.series.group&&b.series.group.zIndex)-(d.series.group&&d.series.group.zIndex);c=0<(0!==c&&a?c:0!==e?e:0!==h?h:d.series.index>b.series.index?-1:1)}c&&(d=b)});return d};a.prototype.getChartCoordinatesFromPoint=function(c,a){var f=c.series,d=f.xAxis;f=f.yAxis;var b=c.shapeArgs;if(d&&f){var e=E(c.clientX,c.plotX),h=c.plotY||0;c.isNode&&b&&k(b.x)&&k(b.y)&&(e=b.x,h=b.y);return a?{chartX:f.len+f.pos-h,chartY:d.len+d.pos-
e}:{chartX:e+d.pos,chartY:h+f.pos}}if(b&&b.x&&b.y)return{chartX:b.x,chartY:b.y}};a.prototype.getChartPosition=function(){if(this.chartPosition)return this.chartPosition;var c=this.chart.container,a=I(c);this.chartPosition={left:a.left,top:a.top,scaleX:1,scaleY:1};var f=c.offsetWidth;c=c.offsetHeight;2<f&&2<c&&(this.chartPosition.scaleX=a.width/f,this.chartPosition.scaleY=a.height/c);return this.chartPosition};a.prototype.getCoordinates=function(c){var a={xAxis:[],yAxis:[]};this.chart.axes.forEach(function(f){a[f.isXAxis?
"xAxis":"yAxis"].push({axis:f,value:f.toValue(c[f.horiz?"chartX":"chartY"])})});return a};a.prototype.getHoverData=function(c,a,f,d,b,e){var g=[];d=!(!d||!c);var n=function(c){return c.visible&&!(!b&&c.directTouch)&&E(c.options.enableMouseTracking,!0)},k={chartX:e?e.chartX:void 0,chartY:e?e.chartY:void 0,shared:b};m(this,"beforeGetHoverData",k);var u=a&&!a.stickyTracking?[a]:f.filter(function(b){return b.stickyTracking&&(k.filter||n)(b)});var l=d||!e?c:this.findNearestKDPoint(u,b,e);a=l&&l.series;
l&&(b&&!a.noSharedTooltip?(u=f.filter(function(b){return k.filter?k.filter(b):n(b)&&!b.noSharedTooltip}),u.forEach(function(b){var c=h(b.points,function(b){return b.x===l.x&&!b.isNull});p(c)&&(b.boosted&&b.boost&&(c=b.boost.getPoint(c)),g.push(c))})):g.push(l));k={hoverPoint:l};m(this,"afterGetHoverData",k);return{hoverPoint:k.hoverPoint,hoverSeries:a,hoverPoints:g}};a.prototype.getPointFromEvent=function(c){c=c.target;for(var a;c&&!a;)a=c.point,c=c.parentNode;return a};a.prototype.onTrackerMouseOut=
function(c){c=c.relatedTarget||c.toElement;var a=this.chart.hoverSeries;this.isDirectTouch=!1;if(!(!a||!c||a.stickyTracking||this.inClass(c,"highcharts-tooltip")||this.inClass(c,"highcharts-series-"+a.index)&&this.inClass(c,"highcharts-tracker")))a.onMouseOut()};a.prototype.inClass=function(c,a){for(var f;c;){if(f=r(c,"class")){if(-1!==f.indexOf(a))return!0;if(-1!==f.indexOf("highcharts-container"))return!1}c=c.parentElement}};a.prototype.init=function(c,a){this.options=a;this.chart=c;this.runChartClick=
!(!a.chart.events||!a.chart.events.click);this.pinchDown=[];this.lastValidTouch={};x&&(c.tooltip=new x(c,a.tooltip));this.setDOMEvents()};a.prototype.normalize=function(c,a){var f=c.touches,e=f?f.length?f.item(0):E(f.changedTouches,c.changedTouches)[0]:c;a||(a=this.getChartPosition());f=e.pageX-a.left;e=e.pageY-a.top;f/=a.scaleX;e/=a.scaleY;return d(c,{chartX:Math.round(f),chartY:Math.round(e)})};a.prototype.onContainerClick=function(c){var a=this.chart,f=a.hoverPoint;c=this.normalize(c);var e=a.plotLeft,
b=a.plotTop;a.cancelClick||(f&&this.inClass(c.target,"highcharts-tracker")?(m(f.series,"click",d(c,{point:f})),a.hoverPoint&&f.firePointEvent("click",c)):(d(c,this.getCoordinates(c)),a.isInsidePlot(c.chartX-e,c.chartY-b,{visiblePlotOnly:!0})&&m(a,"click",c)))};a.prototype.onContainerMouseDown=function(a){var c=1===((a.buttons||a.button)&1);a=this.normalize(a);if(g.isFirefox&&0!==a.button)this.onContainerMouseMove(a);if("undefined"===typeof a.button||c)this.zoomOption(a),c&&a.preventDefault&&a.preventDefault(),
this.dragStart(a)};a.prototype.onContainerMouseLeave=function(c){var d=B[E(a.hoverChartIndex,-1)],f=this.chart.tooltip;c=this.normalize(c);d&&(c.relatedTarget||c.toElement)&&(d.pointer.reset(),d.pointer.chartPosition=void 0);f&&!f.isHidden&&this.reset()};a.prototype.onContainerMouseEnter=function(a){delete this.chartPosition};a.prototype.onContainerMouseMove=function(a){var c=this.chart,f=c.tooltip;a=this.normalize(a);this.setHoverChartIndex();a.preventDefault||(a.returnValue=!1);("mousedown"===c.mouseIsDown||
this.touchSelect(a))&&this.drag(a);c.openMenu||!this.inClass(a.target,"highcharts-tracker")&&!c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop,{visiblePlotOnly:!0})||f&&f.shouldStickOnContact(a)||(this.inClass(a.target,"highcharts-no-tooltip")?this.reset(!1,0):this.runPointActions(a))};a.prototype.onDocumentTouchEnd=function(c){var d=B[E(a.hoverChartIndex,-1)];d&&d.pointer.drop(c)};a.prototype.onContainerTouchMove=function(a){if(this.touchSelect(a))this.onContainerMouseMove(a);else this.touch(a)};
a.prototype.onContainerTouchStart=function(a){if(this.touchSelect(a))this.onContainerMouseDown(a);else this.zoomOption(a),this.touch(a,!0)};a.prototype.onDocumentMouseMove=function(a){var c=this.chart,f=c.tooltip,d=this.chartPosition;a=this.normalize(a,d);!d||c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop,{visiblePlotOnly:!0})||f&&f.shouldStickOnContact(a)||this.inClass(a.target,"highcharts-tracker")||this.reset()};a.prototype.onDocumentMouseUp=function(c){var d=B[E(a.hoverChartIndex,-1)];
d&&d.pointer.drop(c)};a.prototype.pinch=function(a){var c=this,f=c.chart,e=c.pinchDown,b=a.touches||[],h=b.length,g=c.lastValidTouch,k=c.hasZoom,l={},p=1===h&&(c.inClass(a.target,"highcharts-tracker")&&f.runTrackerClick||c.runChartClick),y={},r=c.chart.tooltip;r=1===h&&E(r&&r.options.followTouchMove,!0);var t=c.selectionMarker;1<h?c.initiated=!0:r&&(c.initiated=!1);k&&c.initiated&&!p&&!1!==a.cancelable&&a.preventDefault();[].map.call(b,function(b){return c.normalize(b)});"touchstart"===a.type?([].forEach.call(b,
function(b,a){e[a]={chartX:b.chartX,chartY:b.chartY}}),g.x=[e[0].chartX,e[1]&&e[1].chartX],g.y=[e[0].chartY,e[1]&&e[1].chartY],f.axes.forEach(function(b){if(b.zoomEnabled){var a=f.bounds[b.horiz?"h":"v"],c=b.minPixelPadding,d=b.toPixels(Math.min(E(b.options.min,b.dataMin),b.dataMin)),e=b.toPixels(Math.max(E(b.options.max,b.dataMax),b.dataMax)),h=Math.max(d,e);a.min=Math.min(b.pos,Math.min(d,e)-c);a.max=Math.max(b.pos+b.len,h+c)}}),c.res=!0):r?this.runPointActions(c.normalize(a)):e.length&&(m(f,"touchpan",
{originalEvent:a},function(){t||(c.selectionMarker=t=d({destroy:H,touch:!0},f.plotBox));c.pinchTranslate(e,b,l,t,y,g);c.hasPinched=k;c.scaleGroups(l,y)}),c.res&&(c.res=!1,this.reset(!1,0)))};a.prototype.pinchTranslate=function(a,d,f,e,b,h){this.zoomHor&&this.pinchTranslateDirection(!0,a,d,f,e,b,h);this.zoomVert&&this.pinchTranslateDirection(!1,a,d,f,e,b,h)};a.prototype.pinchTranslateDirection=function(a,d,f,e,b,h,g,k){var c=this.chart,n=a?"x":"y",q=a?"X":"Y",u="chart"+q,m=a?"width":"height",l=c["plot"+
(a?"Left":"Top")],z=c.inverted,p=c.bounds[a?"h":"v"],w=1===d.length,y=d[0][u],r=!w&&d[1][u];d=function(){"number"===typeof R&&20<Math.abs(y-r)&&(M=k||Math.abs(t-R)/Math.abs(y-r));P=(l-t)/M+y;G=c["plot"+(a?"Width":"Height")]/M};var G,P,M=k||1,t=f[0][u],R=!w&&f[1][u];d();f=P;if(f<p.min){f=p.min;var E=!0}else f+G>p.max&&(f=p.max-G,E=!0);E?(t-=.8*(t-g[n][0]),"number"===typeof R&&(R-=.8*(R-g[n][1])),d()):g[n]=[t,R];z||(h[n]=P-l,h[m]=G);h=z?1/M:M;b[m]=G;b[n]=f;e[z?a?"scaleY":"scaleX":"scale"+q]=M;e["translate"+
q]=h*l+(t-h*y)};a.prototype.reset=function(a,d){var c=this.chart,e=c.hoverSeries,b=c.hoverPoint,h=c.hoverPoints,g=c.tooltip,k=g&&g.shared?h:b;a&&k&&L(k).forEach(function(b){b.series.isCartesian&&"undefined"===typeof b.plotX&&(a=!1)});if(a)g&&k&&L(k).length&&(g.refresh(k),g.shared&&h?h.forEach(function(b){b.setState(b.state,!0);b.series.isCartesian&&(b.series.xAxis.crosshair&&b.series.xAxis.drawCrosshair(null,b),b.series.yAxis.crosshair&&b.series.yAxis.drawCrosshair(null,b))}):b&&(b.setState(b.state,
!0),c.axes.forEach(function(a){a.crosshair&&b.series[a.coll]===a&&a.drawCrosshair(null,b)})));else{if(b)b.onMouseOut();h&&h.forEach(function(b){b.setState()});if(e)e.onMouseOut();g&&g.hide(d);this.unDocMouseMove&&(this.unDocMouseMove=this.unDocMouseMove());c.axes.forEach(function(b){b.hideCrosshair()});this.hoverX=c.hoverPoints=c.hoverPoint=null}};a.prototype.runPointActions=function(c,d,f){var e=this.chart,b=e.tooltip&&e.tooltip.options.enabled?e.tooltip:void 0,g=b?b.shared:!1,k=d||e.hoverPoint,
q=k&&k.series||e.hoverSeries;d=this.getHoverData(k,q,e.series,(!c||"touchmove"!==c.type)&&(!!d||q&&q.directTouch&&this.isDirectTouch),g,c);k=d.hoverPoint;q=d.hoverSeries;var m=d.hoverPoints;d=q&&q.tooltipOptions.followPointer&&!q.tooltipOptions.split;var l=g&&q&&!q.noSharedTooltip;if(k&&(f||k!==e.hoverPoint||b&&b.isHidden)){(e.hoverPoints||[]).forEach(function(b){-1===m.indexOf(b)&&b.setState()});if(e.hoverSeries!==q)q.onMouseOver();this.applyInactiveState(m);(m||[]).forEach(function(b){b.setState("hover")});
e.hoverPoint&&e.hoverPoint.firePointEvent("mouseOut");if(!k.series)return;e.hoverPoints=m;e.hoverPoint=k;k.firePointEvent("mouseOver",void 0,function(){b&&k&&b.refresh(l?m:k,c)})}else d&&b&&!b.isHidden&&(f=b.getAnchor([{}],c),e.isInsidePlot(f[0],f[1],{visiblePlotOnly:!0})&&b.updatePosition({plotX:f[0],plotY:f[1]}));this.unDocMouseMove||(this.unDocMouseMove=t(e.container.ownerDocument,"mousemove",function(b){var c=B[a.hoverChartIndex];if(c)c.pointer.onDocumentMouseMove(b)}),this.eventsToUnbind.push(this.unDocMouseMove));
e.axes.forEach(function(b){var a=E((b.crosshair||{}).snap,!0),d;a&&((d=e.hoverPoint)&&d.series[b.coll]===b||(d=h(m,function(a){return a.series&&a.series[b.coll]===b})));d||!a?b.drawCrosshair(c,d):b.hideCrosshair()})};a.prototype.scaleGroups=function(a,d){var c=this.chart;c.series.forEach(function(f){var b=a||f.getPlotBox();f.group&&(f.xAxis&&f.xAxis.zoomEnabled||c.mapView)&&(f.group.attr(b),f.markerGroup&&(f.markerGroup.attr(b),f.markerGroup.clip(d?c.clipRect:null)),f.dataLabelsGroup&&f.dataLabelsGroup.attr(b))});
c.clipRect.attr(d||c.clipBox)};a.prototype.setDOMEvents=function(){var c=this,d=this.chart.container,f=d.ownerDocument;d.onmousedown=this.onContainerMouseDown.bind(this);d.onmousemove=this.onContainerMouseMove.bind(this);d.onclick=this.onContainerClick.bind(this);this.eventsToUnbind.push(t(d,"mouseenter",this.onContainerMouseEnter.bind(this)));this.eventsToUnbind.push(t(d,"mouseleave",this.onContainerMouseLeave.bind(this)));a.unbindDocumentMouseUp||(a.unbindDocumentMouseUp=t(f,"mouseup",this.onDocumentMouseUp.bind(this)));
for(var e=this.chart.renderTo.parentElement;e&&"BODY"!==e.tagName;)this.eventsToUnbind.push(t(e,"scroll",function(){delete c.chartPosition})),e=e.parentElement;g.hasTouch&&(this.eventsToUnbind.push(t(d,"touchstart",this.onContainerTouchStart.bind(this),{passive:!1})),this.eventsToUnbind.push(t(d,"touchmove",this.onContainerTouchMove.bind(this),{passive:!1})),a.unbindDocumentTouchEnd||(a.unbindDocumentTouchEnd=t(f,"touchend",this.onDocumentTouchEnd.bind(this),{passive:!1})))};a.prototype.setHoverChartIndex=
function(){var c=this.chart,d=g.charts[E(a.hoverChartIndex,-1)];if(d&&d!==c)d.pointer.onContainerMouseLeave({relatedTarget:c.container});d&&d.mouseIsDown||(a.hoverChartIndex=c.index)};a.prototype.touch=function(a,d){var c=this.chart,e;this.setHoverChartIndex();if(1===a.touches.length)if(a=this.normalize(a),(e=c.isInsidePlot(a.chartX-c.plotLeft,a.chartY-c.plotTop,{visiblePlotOnly:!0}))&&!c.openMenu){d&&this.runPointActions(a);if("touchmove"===a.type){d=this.pinchDown;var b=d[0]?4<=Math.sqrt(Math.pow(d[0].chartX-
a.chartX,2)+Math.pow(d[0].chartY-a.chartY,2)):!1}E(b,!0)&&this.pinch(a)}else d&&this.reset();else 2===a.touches.length&&this.pinch(a)};a.prototype.touchSelect=function(a){return!(!this.chart.options.chart.zooming.singleTouch||!a.touches||1!==a.touches.length)};a.prototype.zoomOption=function(a){var c=this.chart,d=c.options.chart;c=c.inverted;var e=d.zooming.type||"";/touch/.test(a.type)&&(e=E(d.zooming.pinchType,e));this.zoomX=a=/x/.test(e);this.zoomY=d=/y/.test(e);this.zoomHor=a&&!c||d&&c;this.zoomVert=
d&&!c||a&&c;this.hasZoom=a||d};return a}();"";return a});K(g,"Core/MSPointer.js",[g["Core/Globals.js"],g["Core/Pointer.js"],g["Core/Utilities.js"]],function(a,g,x){function A(){var a=[];a.item=function(a){return this[a]};h(p,function(d){a.push({pageX:d.pageX,pageY:d.pageY,target:d.target})});return a}function C(a,d,e,h){var c=H[g.hoverChartIndex||NaN];"touch"!==a.pointerType&&a.pointerType!==a.MSPOINTER_TYPE_TOUCH||!c||(c=c.pointer,h(a),c[d]({type:e,target:a.currentTarget,preventDefault:r,touches:A()}))}
var B=this&&this.__extends||function(){var a=function(d,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,c){a.__proto__=c}||function(a,c){for(var d in c)c.hasOwnProperty(d)&&(a[d]=c[d])};return a(d,e)};return function(d,e){function h(){this.constructor=d}a(d,e);d.prototype=null===e?Object.create(e):(h.prototype=e.prototype,new h)}}(),H=a.charts,t=a.doc,r=a.noop,l=a.win,e=x.addEvent,d=x.css,h=x.objectEach,m=x.pick,k=x.removeEvent,p={},D=!!l.PointerEvent;return function(h){function g(){return null!==
h&&h.apply(this,arguments)||this}B(g,h);g.isRequired=function(){return!(a.hasTouch||!l.PointerEvent&&!l.MSPointerEvent)};g.prototype.batchMSEvents=function(a){a(this.chart.container,D?"pointerdown":"MSPointerDown",this.onContainerPointerDown);a(this.chart.container,D?"pointermove":"MSPointerMove",this.onContainerPointerMove);a(t,D?"pointerup":"MSPointerUp",this.onDocumentPointerUp)};g.prototype.destroy=function(){this.batchMSEvents(k);h.prototype.destroy.call(this)};g.prototype.init=function(a,e){h.prototype.init.call(this,
a,e);this.hasZoom&&d(a.container,{"-ms-touch-action":"none","touch-action":"none"})};g.prototype.onContainerPointerDown=function(a){C(a,"onContainerTouchStart","touchstart",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY,target:a.currentTarget}})};g.prototype.onContainerPointerMove=function(a){C(a,"onContainerTouchMove","touchmove",function(a){p[a.pointerId]={pageX:a.pageX,pageY:a.pageY};p[a.pointerId].target||(p[a.pointerId].target=a.currentTarget)})};g.prototype.onDocumentPointerUp=function(a){C(a,
"onDocumentTouchEnd","touchend",function(a){delete p[a.pointerId]})};g.prototype.setDOMEvents=function(){var a=this.chart.tooltip;h.prototype.setDOMEvents.call(this);(this.hasZoom||m(a&&a.options.followTouchMove,!0))&&this.batchMSEvents(e)};return g}(g)});K(g,"Core/Legend/Legend.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/FormatUtilities.js"],g["Core/Globals.js"],g["Core/Series/Point.js"],g["Core/Renderer/RendererUtilities.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B){var A=a.animObject,
t=a.setAnimation,r=g.format,l=x.marginNames,e=C.distribute,d=B.addEvent,h=B.createElement,m=B.css,k=B.defined,p=B.discardElement,D=B.find,I=B.fireEvent,E=B.isNumber,L=B.merge,y=B.pick,c=B.relativeLength,w=B.stableSort,f=B.syncTimeout;a=function(){function a(b,a){this.allItems=[];this.contentGroup=this.box=void 0;this.display=!1;this.group=void 0;this.offsetWidth=this.maxLegendWidth=this.maxItemWidth=this.legendWidth=this.legendHeight=this.lastLineHeight=this.lastItemY=this.itemY=this.itemX=this.itemMarginTop=
this.itemMarginBottom=this.itemHeight=this.initialItemY=0;this.options=void 0;this.padding=0;this.pages=[];this.proximate=!1;this.scrollGroup=void 0;this.widthOption=this.totalItemWidth=this.titleHeight=this.symbolWidth=this.symbolHeight=0;this.chart=b;this.init(b,a)}a.prototype.init=function(b,a){this.chart=b;this.setOptions(a);a.enabled&&(this.render(),d(this.chart,"endResize",function(){this.legend.positionCheckboxes()}),this.proximate?this.unchartrender=d(this.chart,"render",function(){this.legend.proximatePositions();
this.legend.positionItems()}):this.unchartrender&&this.unchartrender())};a.prototype.setOptions=function(b){var a=y(b.padding,8);this.options=b;this.chart.styledMode||(this.itemStyle=b.itemStyle,this.itemHiddenStyle=L(this.itemStyle,b.itemHiddenStyle));this.itemMarginTop=b.itemMarginTop||0;this.itemMarginBottom=b.itemMarginBottom||0;this.padding=a;this.initialItemY=a-5;this.symbolWidth=y(b.symbolWidth,16);this.pages=[];this.proximate="proximate"===b.layout&&!this.chart.inverted;this.baseline=void 0};
a.prototype.update=function(b,a){var c=this.chart;this.setOptions(L(!0,this.options,b));this.destroy();c.isDirtyLegend=c.isDirtyBox=!0;y(a,!0)&&c.redraw();I(this,"afterUpdate")};a.prototype.colorizeItem=function(b,a){var c=b.legendItem||{},d=c.group,f=c.label,e=c.line;c=c.symbol;if(d)d[a?"removeClass":"addClass"]("highcharts-legend-item-hidden");if(!this.chart.styledMode){var h=this.options;d=this.itemHiddenStyle.color;h=a?h.itemStyle.color:d;var g=a?b.color||d:d,k=b.options&&b.options.marker,n={fill:g};
f&&f.css({fill:h,color:h});e&&e.attr({stroke:g});c&&(k&&c.isMarker&&(n=b.pointAttribs(),a||(n.stroke=n.fill=d)),c.attr(n))}I(this,"afterColorizeItem",{item:b,visible:a})};a.prototype.positionItems=function(){this.allItems.forEach(this.positionItem,this);this.chart.isResizing||this.positionCheckboxes()};a.prototype.positionItem=function(b){var a=this,c=b.legendItem||{},d=c.group,f=c.x;f=void 0===f?0:f;c=c.y;c=void 0===c?0:c;var e=this.options,h=e.symbolPadding,g=!e.rtl;e=b.checkbox;d&&d.element&&(h=
{translateX:g?f:this.legendWidth-f-2*h-4,translateY:c},d[k(d.translateY)?"animate":"attr"](h,void 0,function(){I(a,"afterPositionItem",{item:b})}));e&&(e.x=f,e.y=c)};a.prototype.destroyItem=function(b){for(var a=b.checkbox,c=b.legendItem||{},d=0,f=["group","label","line","symbol"];d<f.length;d++){var e=f[d];c[e]&&(c[e]=c[e].destroy())}a&&p(a);b.legendItem=void 0};a.prototype.destroy=function(){for(var b=0,a=this.getAllItems();b<a.length;b++)this.destroyItem(a[b]);b=0;for(a="clipRect up down pager nav box title group".split(" ");b<
a.length;b++){var c=a[b];this[c]&&(this[c]=this[c].destroy())}this.display=null};a.prototype.positionCheckboxes=function(){var b=this.group&&this.group.alignAttr,a=this.clipHeight||this.legendHeight,c=this.titleHeight;if(b){var d=b.translateY;this.allItems.forEach(function(f){var e=f.checkbox;if(e){var h=d+c+e.y+(this.scrollOffset||0)+3;m(e,{left:b.translateX+f.checkboxOffset+e.x-20+"px",top:h+"px",display:this.proximate||h>d-6&&h<d+a-6?"":"none"})}},this)}};a.prototype.renderTitle=function(){var b=
this.options,a=this.padding,c=b.title,d=0;c.text&&(this.title||(this.title=this.chart.renderer.label(c.text,a-3,a-4,void 0,void 0,void 0,b.useHTML,void 0,"legend-title").attr({zIndex:1}),this.chart.styledMode||this.title.css(c.style),this.title.add(this.group)),c.width||this.title.css({width:this.maxLegendWidth+"px"}),b=this.title.getBBox(),d=b.height,this.offsetWidth=b.width,this.contentGroup.attr({translateY:d}));this.titleHeight=d};a.prototype.setText=function(b){var a=this.options;b.legendItem.label.attr({text:a.labelFormat?
r(a.labelFormat,b,this.chart):a.labelFormatter.call(b)})};a.prototype.renderItem=function(b){var a=b.legendItem=b.legendItem||{},c=this.chart,d=c.renderer,f=this.options,e=this.symbolWidth,h=f.symbolPadding||0,g=this.itemStyle,k=this.itemHiddenStyle,n="horizontal"===f.layout?y(f.itemDistance,20):0,m=!f.rtl,l=!b.series,p=!l&&b.series.drawLegendSymbol?b.series:b,r=p.options,w=this.createCheckboxForItem&&r&&r.showCheckbox,G=f.useHTML,P=b.options.className,M=a.label;r=e+h+n+(w?20:0);M||(a.group=d.g("legend-item").addClass("highcharts-"+
p.type+"-series highcharts-color-"+b.colorIndex+(P?" "+P:"")+(l?" highcharts-series-"+b.index:"")).attr({zIndex:1}).add(this.scrollGroup),a.label=M=d.text("",m?e+h:-h,this.baseline||0,G),c.styledMode||M.css(L(b.visible?g:k)),M.attr({align:m?"left":"right",zIndex:2}).add(a.group),this.baseline||(this.fontMetrics=d.fontMetrics(c.styledMode?12:g.fontSize,M),this.baseline=this.fontMetrics.f+3+this.itemMarginTop,M.attr("y",this.baseline),this.symbolHeight=f.symbolHeight||this.fontMetrics.f,f.squareSymbol&&
(this.symbolWidth=y(f.symbolWidth,Math.max(this.symbolHeight,16)),r=this.symbolWidth+h+n+(w?20:0),m&&M.attr("x",this.symbolWidth+h))),p.drawLegendSymbol(this,b),this.setItemEvents&&this.setItemEvents(b,M,G));w&&!b.checkbox&&this.createCheckboxForItem&&this.createCheckboxForItem(b);this.colorizeItem(b,b.visible);!c.styledMode&&g.width||M.css({width:(f.itemWidth||this.widthOption||c.spacingBox.width)-r+"px"});this.setText(b);c=M.getBBox();d=this.fontMetrics&&this.fontMetrics.h||0;b.itemWidth=b.checkboxOffset=
f.itemWidth||a.labelWidth||c.width+r;this.maxItemWidth=Math.max(this.maxItemWidth,b.itemWidth);this.totalItemWidth+=b.itemWidth;this.itemHeight=b.itemHeight=Math.round(a.labelHeight||(c.height>1.5*d?c.height:d))};a.prototype.layoutItem=function(b){var a=this.options,c=this.padding,d="horizontal"===a.layout,f=b.itemHeight,e=this.itemMarginBottom,h=this.itemMarginTop,g=d?y(a.itemDistance,20):0,k=this.maxLegendWidth;a=a.alignColumns&&this.totalItemWidth>k?this.maxItemWidth:b.itemWidth;var n=b.legendItem||
{};d&&this.itemX-c+a>k&&(this.itemX=c,this.lastLineHeight&&(this.itemY+=h+this.lastLineHeight+e),this.lastLineHeight=0);this.lastItemY=h+this.itemY+e;this.lastLineHeight=Math.max(f,this.lastLineHeight);n.x=this.itemX;n.y=this.itemY;d?this.itemX+=a:(this.itemY+=h+f+e,this.lastLineHeight=f);this.offsetWidth=this.widthOption||Math.max((d?this.itemX-c-(b.checkbox?0:g):a)+c,this.offsetWidth)};a.prototype.getAllItems=function(){var b=[];this.chart.series.forEach(function(a){var c=a&&a.options;a&&y(c.showInLegend,
k(c.linkedTo)?!1:void 0,!0)&&(b=b.concat((a.legendItem||{}).labels||("point"===c.legendType?a.data:a)))});I(this,"afterGetAllItems",{allItems:b});return b};a.prototype.getAlignment=function(){var b=this.options;return this.proximate?b.align.charAt(0)+"tv":b.floating?"":b.align.charAt(0)+b.verticalAlign.charAt(0)+b.layout.charAt(0)};a.prototype.adjustMargins=function(b,a){var c=this.chart,d=this.options,f=this.getAlignment();f&&[/(lth|ct|rth)/,/(rtv|rm|rbv)/,/(rbh|cb|lbh)/,/(lbv|lm|ltv)/].forEach(function(e,
h){e.test(f)&&!k(b[h])&&(c[l[h]]=Math.max(c[l[h]],c.legend[(h+1)%2?"legendHeight":"legendWidth"]+[1,-1,-1,1][h]*d[h%2?"x":"y"]+y(d.margin,12)+a[h]+(c.titleOffset[h]||0)))})};a.prototype.proximatePositions=function(){var b=this.chart,a=[],c="left"===this.options.align;this.allItems.forEach(function(d){var f;var e=c;if(d.yAxis){d.xAxis.options.reversed&&(e=!e);d.points&&(f=D(e?d.points:d.points.slice(0).reverse(),function(b){return E(b.plotY)}));e=this.itemMarginTop+d.legendItem.label.getBBox().height+
this.itemMarginBottom;var h=d.yAxis.top-b.plotTop;d.visible?(f=f?f.plotY:d.yAxis.height,f+=h-.3*e):f=h+d.yAxis.height;a.push({target:f,size:e,item:d})}},this);for(var d,f=0,h=e(a,b.plotHeight);f<h.length;f++){var g=h[f];d=g.item.legendItem||{};E(g.pos)&&(d.y=b.plotTop-b.spacing[0]+g.pos)}};a.prototype.render=function(){var b=this.chart,a=b.renderer,d=this.options,f=this.padding,e=this.getAllItems(),h=this.group,g=this.box;this.itemX=f;this.itemY=this.initialItemY;this.lastItemY=this.offsetWidth=0;
this.widthOption=c(d.width,b.spacingBox.width-f);var k=b.spacingBox.width-2*f-d.x;-1<["rm","lm"].indexOf(this.getAlignment().substring(0,2))&&(k/=2);this.maxLegendWidth=this.widthOption||k;h||(this.group=h=a.g("legend").addClass(d.className||"").attr({zIndex:7}).add(),this.contentGroup=a.g().attr({zIndex:1}).add(h),this.scrollGroup=a.g().add(this.contentGroup));this.renderTitle();w(e,function(b,a){return(b.options&&b.options.legendIndex||0)-(a.options&&a.options.legendIndex||0)});d.reversed&&e.reverse();
this.allItems=e;this.display=k=!!e.length;this.itemHeight=this.totalItemWidth=this.maxItemWidth=this.lastLineHeight=0;e.forEach(this.renderItem,this);e.forEach(this.layoutItem,this);e=(this.widthOption||this.offsetWidth)+f;var n=this.lastItemY+this.lastLineHeight+this.titleHeight;n=this.handleOverflow(n);n+=f;g||(this.box=g=a.rect().addClass("highcharts-legend-box").attr({r:d.borderRadius}).add(h));b.styledMode||g.attr({stroke:d.borderColor,"stroke-width":d.borderWidth||0,fill:d.backgroundColor||
"none"}).shadow(d.shadow);if(0<e&&0<n)g[g.placed?"animate":"attr"](g.crisp.call({},{x:0,y:0,width:e,height:n},g.strokeWidth()));h[k?"show":"hide"]();b.styledMode&&"none"===h.getStyle("display")&&(e=n=0);this.legendWidth=e;this.legendHeight=n;k&&this.align();this.proximate||this.positionItems();I(this,"afterRender")};a.prototype.align=function(b){void 0===b&&(b=this.chart.spacingBox);var a=this.chart,c=this.options,d=b.y;/(lth|ct|rth)/.test(this.getAlignment())&&0<a.titleOffset[0]?d+=a.titleOffset[0]:
/(lbh|cb|rbh)/.test(this.getAlignment())&&0<a.titleOffset[2]&&(d-=a.titleOffset[2]);d!==b.y&&(b=L(b,{y:d}));a.hasRendered||(this.group.placed=!1);this.group.align(L(c,{width:this.legendWidth,height:this.legendHeight,verticalAlign:this.proximate?"top":c.verticalAlign}),!0,b)};a.prototype.handleOverflow=function(b){var a=this,c=this.chart,d=c.renderer,f=this.options,e=f.y,h="top"===f.verticalAlign,g=this.padding,k=f.maxHeight,n=f.navigation,m=y(n.animation,!0),l=n.arrowSize||12,p=this.pages,r=this.allItems,
w=function(b){"number"===typeof b?D.attr({height:b}):D&&(a.clipRect=D.destroy(),a.contentGroup.clip());a.contentGroup.div&&(a.contentGroup.div.style.clip=b?"rect("+g+"px,9999px,"+(g+b)+"px,0)":"auto")},G=function(b){a[b]=d.circle(0,0,1.3*l).translate(l/2,l/2).add(R);c.styledMode||a[b].attr("fill","rgba(0,0,0,0.0001)");return a[b]},P,M,t;e=c.spacingBox.height+(h?-e:e)-g;var R=this.nav,D=this.clipRect;"horizontal"!==f.layout||"middle"===f.verticalAlign||f.floating||(e/=2);k&&(e=Math.min(e,k));p.length=
0;b&&0<e&&b>e&&!1!==n.enabled?(this.clipHeight=P=Math.max(e-20-this.titleHeight-g,0),this.currentPage=y(this.currentPage,1),this.fullHeight=b,r.forEach(function(b,a){t=b.legendItem||{};b=t.y||0;var c=Math.round(t.label.getBBox().height),d=p.length;if(!d||b-p[d-1]>P&&(M||b)!==p[d-1])p.push(M||b),d++;t.pageIx=d-1;M&&((r[a-1].legendItem||{}).pageIx=d-1);a===r.length-1&&b+c-p[d-1]>P&&c<=P&&(p.push(b),t.pageIx=d);b!==M&&(M=b)}),D||(D=a.clipRect=d.clipRect(0,g,9999,0),a.contentGroup.clip(D)),w(P),R||(this.nav=
R=d.g().attr({zIndex:1}).add(this.group),this.up=d.symbol("triangle",0,0,l,l).add(R),G("upTracker").on("click",function(){a.scroll(-1,m)}),this.pager=d.text("",15,10).addClass("highcharts-legend-navigation"),!c.styledMode&&n.style&&this.pager.css(n.style),this.pager.add(R),this.down=d.symbol("triangle-down",0,0,l,l).add(R),G("downTracker").on("click",function(){a.scroll(1,m)})),a.scroll(0),b=e):R&&(w(),this.nav=R.destroy(),this.scrollGroup.attr({translateY:1}),this.clipHeight=0);return b};a.prototype.scroll=
function(b,a){var c=this,d=this.chart,e=this.pages,h=e.length,g=this.clipHeight,k=this.options.navigation,n=this.pager,m=this.padding,l=this.currentPage+b;l>h&&(l=h);0<l&&("undefined"!==typeof a&&t(a,d),this.nav.attr({translateX:m,translateY:g+this.padding+7+this.titleHeight,visibility:"inherit"}),[this.up,this.upTracker].forEach(function(b){b.attr({"class":1===l?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})}),n.attr({text:l+"/"+h}),[this.down,this.downTracker].forEach(function(b){b.attr({x:18+
this.pager.getBBox().width,"class":l===h?"highcharts-legend-nav-inactive":"highcharts-legend-nav-active"})},this),d.styledMode||(this.up.attr({fill:1===l?k.inactiveColor:k.activeColor}),this.upTracker.css({cursor:1===l?"default":"pointer"}),this.down.attr({fill:l===h?k.inactiveColor:k.activeColor}),this.downTracker.css({cursor:l===h?"default":"pointer"})),this.scrollOffset=-e[l-1]+this.initialItemY,this.scrollGroup.animate({translateY:this.scrollOffset}),this.currentPage=l,this.positionCheckboxes(),
b=A(y(a,d.renderer.globalAnimation,!0)),f(function(){I(c,"afterScroll",{currentPage:l})},b.duration))};a.prototype.setItemEvents=function(b,a,c){var d=this,f=b.legendItem||{},e=d.chart.renderer.boxWrapper,h=b instanceof F,g="highcharts-legend-"+(h?"point":"series")+"-active",k=d.chart.styledMode,n=function(a){d.allItems.forEach(function(c){b!==c&&[c].concat(c.linkedSeries||[]).forEach(function(b){b.setState(a,!h)})})},m=0;for(c=c?[a,f.symbol]:[f.group];m<c.length;m++)if(f=c[m])f.on("mouseover",function(){b.visible&&
n("inactive");b.setState("hover");b.visible&&e.addClass(g);k||a.css(d.options.itemHoverStyle)}).on("mouseout",function(){d.chart.styledMode||a.css(L(b.visible?d.itemStyle:d.itemHiddenStyle));n("");e.removeClass(g);b.setState()}).on("click",function(a){var c=function(){b.setVisible&&b.setVisible();n(b.visible?"inactive":"")};e.removeClass(g);a={browserEvent:a};b.firePointEvent?b.firePointEvent("legendItemClick",a,c):I(b,"legendItemClick",a,c)})};a.prototype.createCheckboxForItem=function(b){b.checkbox=
h("input",{type:"checkbox",className:"highcharts-legend-checkbox",checked:b.selected,defaultChecked:b.selected},this.options.itemCheckboxStyle,this.chart.container);d(b.checkbox,"click",function(a){I(b.series||b,"checkboxClick",{checked:a.target.checked,item:b},function(){b.select()})})};return a}();"";return a});K(g,"Core/Series/SeriesRegistry.js",[g["Core/Globals.js"],g["Core/Defaults.js"],g["Core/Series/Point.js"],g["Core/Utilities.js"]],function(a,g,x,F){var A=g.defaultOptions,B=F.extendClass,
H=F.merge,t;(function(g){function l(a,d){var e=A.plotOptions||{},m=d.defaultOptions,k=d.prototype;k.type=a;k.pointClass||(k.pointClass=x);m&&(e[a]=m);g.seriesTypes[a]=d}g.seriesTypes=a.seriesTypes;g.registerSeriesType=l;g.seriesType=function(a,d,h,m,k){var e=A.plotOptions||{};d=d||"";e[a]=H(e[d],h);l(a,B(g.seriesTypes[d]||function(){},m));g.seriesTypes[a].prototype.type=a;k&&(g.seriesTypes[a].prototype.pointClass=B(x,k));return g.seriesTypes[a]}})(t||(t={}));return t});K(g,"Core/Chart/Chart.js",[g["Core/Animation/AnimationUtilities.js"],
g["Core/Axis/Axis.js"],g["Core/Defaults.js"],g["Core/FormatUtilities.js"],g["Core/Foundation.js"],g["Core/Globals.js"],g["Core/Legend/Legend.js"],g["Core/MSPointer.js"],g["Core/Pointer.js"],g["Core/Renderer/RendererRegistry.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Renderer/SVG/SVGRenderer.js"],g["Core/Time.js"],g["Core/Utilities.js"],g["Core/Renderer/HTML/AST.js"]],function(a,g,x,F,C,B,H,t,r,l,e,d,h,m,k){var p=a.animate,D=a.animObject,A=a.setAnimation,E=x.defaultOptions,L=x.defaultTime,y=F.numberFormat,
c=C.registerEventOptions,w=B.charts,f=B.doc,n=B.marginNames,b=B.svg,u=B.win,z=e.seriesTypes,q=m.addEvent,N=m.attr,J=m.cleanRecursively,O=m.createElement,Q=m.css,T=m.defined,Y=m.discardElement,v=m.erase,U=m.error,K=m.extend,ca=m.find,S=m.fireEvent,G=m.getStyle,P=m.isArray,M=m.isNumber,X=m.isObject,R=m.isString,V=m.merge,Z=m.objectEach,W=m.pick,ba=m.pInt,fa=m.relativeLength,ha=m.removeEvent,ea=m.splat,ia=m.syncTimeout,ka=m.uniqueKey;a=function(){function a(b,a,c){this.series=this.renderTo=this.renderer=
this.pointer=this.pointCount=this.plotWidth=this.plotTop=this.plotLeft=this.plotHeight=this.plotBox=this.options=this.numberFormatter=this.margin=this.legend=this.labelCollectors=this.isResizing=this.index=this.eventOptions=this.container=this.colorCounter=this.clipBox=this.chartWidth=this.chartHeight=this.bounds=this.axisOffset=this.axes=void 0;this.sharedClips={};this.yAxis=this.xAxis=this.userOptions=this.titleOffset=this.time=this.symbolCounter=this.spacingBox=this.spacing=void 0;this.getArgs(b,
a,c)}a.chart=function(b,c,d){return new a(b,c,d)};a.prototype.getArgs=function(b,a,c){R(b)||b.nodeName?(this.renderTo=b,this.init(a,c)):this.init(b,a)};a.prototype.init=function(b,a){var d=b.plotOptions||{};S(this,"init",{args:arguments},function(){var f=V(E,b),e=f.chart;Z(f.plotOptions,function(b,a){X(b)&&(b.tooltip=d[a]&&V(d[a].tooltip)||void 0)});f.tooltip.userOptions=b.chart&&b.chart.forExport&&b.tooltip.userOptions||b.tooltip;this.userOptions=b;this.margin=[];this.spacing=[];this.bounds={h:{},
v:{}};this.labelCollectors=[];this.callback=a;this.isResizing=0;var g=e.zooming=e.zooming||{};b.chart&&!b.chart.zooming&&(g.resetButton=e.resetZoomButton);g.key=W(g.key,e.zoomKey);g.pinchType=W(g.pinchType,e.pinchType);g.singleTouch=W(g.singleTouch,e.zoomBySingleTouch);g.type=W(g.type,e.zoomType);this.options=f;this.axes=[];this.series=[];this.time=b.time&&Object.keys(b.time).length?new h(b.time):B.time;this.numberFormatter=e.numberFormatter||y;this.styledMode=e.styledMode;this.hasCartesianSeries=
e.showAxes;this.index=w.length;w.push(this);B.chartCount++;c(this,e);this.xAxis=[];this.yAxis=[];this.pointCount=this.colorCounter=this.symbolCounter=0;S(this,"afterInit");this.firstRender()})};a.prototype.initSeries=function(b){var a=this.options.chart;a=b.type||a.type||a.defaultSeriesType;var c=z[a];c||U(17,!0,this,{missingModuleFor:a});a=new c;"function"===typeof a.init&&a.init(this,b);return a};a.prototype.setSeriesData=function(){this.getSeriesOrderByLinks().forEach(function(b){b.points||b.data||
!b.enabledDataSorting||b.setData(b.options.data,!1)})};a.prototype.getSeriesOrderByLinks=function(){return this.series.concat().sort(function(b,a){return b.linkedSeries.length||a.linkedSeries.length?a.linkedSeries.length-b.linkedSeries.length:0})};a.prototype.orderSeries=function(b){var a=this.series;b=b||0;for(var c=a.length;b<c;++b)a[b]&&(a[b].index=b,a[b].name=a[b].getName())};a.prototype.isInsidePlot=function(b,a,c){void 0===c&&(c={});var d=this.inverted,f=this.plotBox,e=this.plotLeft,h=this.plotTop,
g=this.scrollablePlotBox,k=0;var n=0;c.visiblePlotOnly&&this.scrollingContainer&&(n=this.scrollingContainer,k=n.scrollLeft,n=n.scrollTop);var m=c.series;f=c.visiblePlotOnly&&g||f;g=c.inverted?a:b;a=c.inverted?b:a;b={x:g,y:a,isInsidePlot:!0,options:c};if(!c.ignoreX){var q=m&&(d&&!this.polar?m.yAxis:m.xAxis)||{pos:e,len:Infinity};g=c.paneCoordinates?q.pos+g:e+g;g>=Math.max(k+e,q.pos)&&g<=Math.min(k+e+f.width,q.pos+q.len)||(b.isInsidePlot=!1)}!c.ignoreY&&b.isInsidePlot&&(d=c.axis&&!c.axis.isXAxis&&c.axis||
m&&(d?m.xAxis:m.yAxis)||{pos:h,len:Infinity},c=c.paneCoordinates?d.pos+a:h+a,c>=Math.max(n+h,d.pos)&&c<=Math.min(n+h+f.height,d.pos+d.len)||(b.isInsidePlot=!1));S(this,"afterIsInsidePlot",b);return b.isInsidePlot};a.prototype.redraw=function(b){S(this,"beforeRedraw");var a=this.hasCartesianSeries?this.axes:this.colorAxis||[],c=this.series,d=this.pointer,f=this.legend,e=this.userOptions.legend,h=this.renderer,g=h.isHidden(),k=[],n=this.isDirtyBox,m=this.isDirtyLegend;this.setResponsive&&this.setResponsive(!1);
A(this.hasRendered?b:!1,this);g&&this.temporaryDisplay();this.layOutTitles();for(b=c.length;b--;){var q=c[b];if(q.options.stacking||q.options.centerInCategory){var l=!0;if(q.isDirty){var G=!0;break}}}if(G)for(b=c.length;b--;)q=c[b],q.options.stacking&&(q.isDirty=!0);c.forEach(function(b){b.isDirty&&("point"===b.options.legendType?("function"===typeof b.updateTotals&&b.updateTotals(),m=!0):e&&(e.labelFormatter||e.labelFormat)&&(m=!0));b.isDirtyData&&S(b,"updatedData")});m&&f&&f.options.enabled&&(f.render(),
this.isDirtyLegend=!1);l&&this.getStacks();a.forEach(function(b){b.updateNames();b.setScale()});this.getMargins();a.forEach(function(b){b.isDirty&&(n=!0)});a.forEach(function(b){var a=b.min+","+b.max;b.extKey!==a&&(b.extKey=a,k.push(function(){S(b,"afterSetExtremes",K(b.eventArgs,b.getExtremes()));delete b.eventArgs}));(n||l)&&b.redraw()});n&&this.drawChartBox();S(this,"predraw");c.forEach(function(b){(n||b.isDirty)&&b.visible&&b.redraw();b.isDirtyData=!1});d&&d.reset(!0);h.draw();S(this,"redraw");
S(this,"render");g&&this.temporaryDisplay(!0);k.forEach(function(b){b.call()})};a.prototype.get=function(b){function a(a){return a.id===b||a.options&&a.options.id===b}for(var c=this.series,d=ca(this.axes,a)||ca(this.series,a),f=0;!d&&f<c.length;f++)d=ca(c[f].points||[],a);return d};a.prototype.getAxes=function(){var b=this,a=this.options,c=a.xAxis=ea(a.xAxis||{});a=a.yAxis=ea(a.yAxis||{});S(this,"getAxes");c.forEach(function(b,a){b.index=a;b.isX=!0});a.forEach(function(b,a){b.index=a});c.concat(a).forEach(function(a){new g(b,
a)});S(this,"afterGetAxes")};a.prototype.getSelectedPoints=function(){return this.series.reduce(function(b,a){a.getPointsCollection().forEach(function(a){W(a.selectedStaging,a.selected)&&b.push(a)});return b},[])};a.prototype.getSelectedSeries=function(){return this.series.filter(function(b){return b.selected})};a.prototype.setTitle=function(b,a,c){this.applyDescription("title",b);this.applyDescription("subtitle",a);this.applyDescription("caption",void 0);this.layOutTitles(c)};a.prototype.applyDescription=
function(b,a){var c=this,d="title"===b?{color:"#333333",fontSize:this.options.isStock?"16px":"18px"}:{color:"#666666"};d=this.options[b]=V(!this.styledMode&&{style:d},this.options[b],a);var f=this[b];f&&a&&(this[b]=f=f.destroy());d&&!f&&(f=this.renderer.text(d.text,0,0,d.useHTML).attr({align:d.align,"class":"highcharts-"+b,zIndex:d.zIndex||4}).add(),f.update=function(a){c[{title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"}[b]](a)},this.styledMode||f.css(d.style),this[b]=f)};a.prototype.layOutTitles=
function(b){var a=[0,0,0],c=this.renderer,d=this.spacingBox;["title","subtitle","caption"].forEach(function(b){var f=this[b],e=this.options[b],h=e.verticalAlign||"top";b="title"===b?"top"===h?-3:0:"top"===h?a[0]+2:0;var g;if(f){this.styledMode||(g=e.style&&e.style.fontSize);g=c.fontMetrics(g,f).b;f.css({width:(e.width||d.width+(e.widthAdjust||0))+"px"});var k=Math.round(f.getBBox(e.useHTML).height);f.align(K({y:"bottom"===h?g:b+g,height:k},e),!1,"spacingBox");e.floating||("top"===h?a[0]=Math.ceil(a[0]+
k):"bottom"===h&&(a[2]=Math.ceil(a[2]+k)))}},this);a[0]&&"top"===(this.options.title.verticalAlign||"top")&&(a[0]+=this.options.title.margin);a[2]&&"bottom"===this.options.caption.verticalAlign&&(a[2]+=this.options.caption.margin);var f=!this.titleOffset||this.titleOffset.join(",")!==a.join(",");this.titleOffset=a;S(this,"afterLayOutTitles");!this.isDirtyBox&&f&&(this.isDirtyBox=this.isDirtyLegend=f,this.hasRendered&&W(b,!0)&&this.isDirtyBox&&this.redraw())};a.prototype.getChartSize=function(){var b=
this.options.chart,a=b.width;b=b.height;var c=this.renderTo;T(a)||(this.containerWidth=G(c,"width"));T(b)||(this.containerHeight=G(c,"height"));this.chartWidth=Math.max(0,a||this.containerWidth||600);this.chartHeight=Math.max(0,fa(b,this.chartWidth)||(1<this.containerHeight?this.containerHeight:400))};a.prototype.temporaryDisplay=function(b){var a=this.renderTo;if(b)for(;a&&a.style;)a.hcOrigStyle&&(Q(a,a.hcOrigStyle),delete a.hcOrigStyle),a.hcOrigDetached&&(f.body.removeChild(a),a.hcOrigDetached=
!1),a=a.parentNode;else for(;a&&a.style;){f.body.contains(a)||a.parentNode||(a.hcOrigDetached=!0,f.body.appendChild(a));if("none"===G(a,"display",!1)||a.hcOricDetached)a.hcOrigStyle={display:a.style.display,height:a.style.height,overflow:a.style.overflow},b={display:"block",overflow:"hidden"},a!==this.renderTo&&(b.height=0),Q(a,b),a.offsetWidth||a.style.setProperty("display","block","important");a=a.parentNode;if(a===f.body)break}};a.prototype.setClassName=function(b){this.container.className="highcharts-container "+
(b||"")};a.prototype.getContainer=function(){var a=this.options,c=a.chart,e=ka(),h,g=this.renderTo;g||(this.renderTo=g=c.renderTo);R(g)&&(this.renderTo=g=f.getElementById(g));g||U(13,!0,this);var n=ba(N(g,"data-highcharts-chart"));M(n)&&w[n]&&w[n].hasRendered&&w[n].destroy();N(g,"data-highcharts-chart",this.index);g.innerHTML=k.emptyHTML;c.skipClone||g.offsetWidth||this.temporaryDisplay();this.getChartSize();n=this.chartWidth;var m=this.chartHeight;Q(g,{overflow:"hidden"});this.styledMode||(h=K({position:"relative",
overflow:"hidden",width:n+"px",height:m+"px",textAlign:"left",lineHeight:"normal",zIndex:0,"-webkit-tap-highlight-color":"rgba(0,0,0,0)",userSelect:"none","touch-action":"manipulation",outline:"none"},c.style||{}));this.container=e=O("div",{id:e},h,g);this._cursor=e.style.cursor;this.renderer=new (c.renderer||!b?l.getRendererType(c.renderer):d)(e,n,m,void 0,c.forExport,a.exporting&&a.exporting.allowHTML,this.styledMode);A(void 0,this);this.setClassName(c.className);if(this.styledMode)for(var q in a.defs)this.renderer.definition(a.defs[q]);
else this.renderer.setStyle(c.style);this.renderer.chartIndex=this.index;S(this,"afterGetContainer")};a.prototype.getMargins=function(b){var a=this.spacing,c=this.margin,d=this.titleOffset;this.resetMargins();d[0]&&!T(c[0])&&(this.plotTop=Math.max(this.plotTop,d[0]+a[0]));d[2]&&!T(c[2])&&(this.marginBottom=Math.max(this.marginBottom,d[2]+a[2]));this.legend&&this.legend.display&&this.legend.adjustMargins(c,a);S(this,"getMargins");b||this.getAxisMargins()};a.prototype.getAxisMargins=function(){var b=
this,a=b.axisOffset=[0,0,0,0],c=b.colorAxis,d=b.margin,f=function(b){b.forEach(function(b){b.visible&&b.getOffset()})};b.hasCartesianSeries?f(b.axes):c&&c.length&&f(c);n.forEach(function(c,f){T(d[f])||(b[c]+=a[f])});b.setChartSize()};a.prototype.reflow=function(b){var a=this,c=a.options.chart,d=a.renderTo,e=T(c.width)&&T(c.height),h=c.width||G(d,"width");c=c.height||G(d,"height");d=b?b.target:u;delete a.pointer.chartPosition;if(!e&&!a.isPrinting&&h&&c&&(d===u||d===f)){if(h!==a.containerWidth||c!==
a.containerHeight)m.clearTimeout(a.reflowTimeout),a.reflowTimeout=ia(function(){a.container&&a.setSize(void 0,void 0,!1)},b?100:0);a.containerWidth=h;a.containerHeight=c}};a.prototype.setReflow=function(b){var a=this;!1===b||this.unbindReflow?!1===b&&this.unbindReflow&&(this.unbindReflow=this.unbindReflow()):(this.unbindReflow=q(u,"resize",function(b){a.options&&a.reflow(b)}),q(this,"destroy",this.unbindReflow))};a.prototype.setSize=function(b,a,c){var d=this,f=d.renderer;d.isResizing+=1;A(c,d);c=
f.globalAnimation;d.oldChartHeight=d.chartHeight;d.oldChartWidth=d.chartWidth;"undefined"!==typeof b&&(d.options.chart.width=b);"undefined"!==typeof a&&(d.options.chart.height=a);d.getChartSize();d.styledMode||(c?p:Q)(d.container,{width:d.chartWidth+"px",height:d.chartHeight+"px"},c);d.setChartSize(!0);f.setSize(d.chartWidth,d.chartHeight,c);d.axes.forEach(function(b){b.isDirty=!0;b.setScale()});d.isDirtyLegend=!0;d.isDirtyBox=!0;d.layOutTitles();d.getMargins();d.redraw(c);d.oldChartHeight=null;S(d,
"resize");ia(function(){d&&S(d,"endResize",null,function(){--d.isResizing})},D(c).duration)};a.prototype.setChartSize=function(b){var a=this.inverted,c=this.renderer,d=this.chartWidth,f=this.chartHeight,e=this.options.chart,h=this.spacing,g=this.clipOffset,k,n,m,q;this.plotLeft=k=Math.round(this.plotLeft);this.plotTop=n=Math.round(this.plotTop);this.plotWidth=m=Math.max(0,Math.round(d-k-this.marginRight));this.plotHeight=q=Math.max(0,Math.round(f-n-this.marginBottom));this.plotSizeX=a?q:m;this.plotSizeY=
a?m:q;this.plotBorderWidth=e.plotBorderWidth||0;this.spacingBox=c.spacingBox={x:h[3],y:h[0],width:d-h[3]-h[1],height:f-h[0]-h[2]};this.plotBox=c.plotBox={x:k,y:n,width:m,height:q};a=2*Math.floor(this.plotBorderWidth/2);d=Math.ceil(Math.max(a,g[3])/2);f=Math.ceil(Math.max(a,g[0])/2);this.clipBox={x:d,y:f,width:Math.floor(this.plotSizeX-Math.max(a,g[1])/2-d),height:Math.max(0,Math.floor(this.plotSizeY-Math.max(a,g[2])/2-f))};b||(this.axes.forEach(function(b){b.setAxisSize();b.setAxisTranslation()}),
c.alignElements());S(this,"afterSetChartSize",{skipAxes:b})};a.prototype.resetMargins=function(){S(this,"resetMargins");var b=this,a=b.options.chart;["margin","spacing"].forEach(function(c){var d=a[c],f=X(d)?d:[d,d,d,d];["Top","Right","Bottom","Left"].forEach(function(d,e){b[c][e]=W(a[c+d],f[e])})});n.forEach(function(a,c){b[a]=W(b.margin[c],b.spacing[c])});b.axisOffset=[0,0,0,0];b.clipOffset=[0,0,0,0]};a.prototype.drawChartBox=function(){var b=this.options.chart,a=this.renderer,c=this.chartWidth,
d=this.chartHeight,f=this.styledMode,e=this.plotBGImage,h=b.backgroundColor,g=b.plotBackgroundColor,k=b.plotBackgroundImage,n=this.plotLeft,m=this.plotTop,q=this.plotWidth,l=this.plotHeight,G=this.plotBox,u=this.clipRect,p=this.clipBox,M=this.chartBackground,v=this.plotBackground,w=this.plotBorder,r,z="animate";M||(this.chartBackground=M=a.rect().addClass("highcharts-background").add(),z="attr");if(f)var y=r=M.strokeWidth();else{y=b.borderWidth||0;r=y+(b.shadow?8:0);h={fill:h||"none"};if(y||M["stroke-width"])h.stroke=
b.borderColor,h["stroke-width"]=y;M.attr(h).shadow(b.shadow)}M[z]({x:r/2,y:r/2,width:c-r-y%2,height:d-r-y%2,r:b.borderRadius});z="animate";v||(z="attr",this.plotBackground=v=a.rect().addClass("highcharts-plot-background").add());v[z](G);f||(v.attr({fill:g||"none"}).shadow(b.plotShadow),k&&(e?(k!==e.attr("href")&&e.attr("href",k),e.animate(G)):this.plotBGImage=a.image(k,n,m,q,l).add()));u?u.animate({width:p.width,height:p.height}):this.clipRect=a.clipRect(p);z="animate";w||(z="attr",this.plotBorder=
w=a.rect().addClass("highcharts-plot-border").attr({zIndex:1}).add());f||w.attr({stroke:b.plotBorderColor,"stroke-width":b.plotBorderWidth||0,fill:"none"});w[z](w.crisp({x:n,y:m,width:q,height:l},-w.strokeWidth()));this.isDirtyBox=!1;S(this,"afterDrawChartBox")};a.prototype.propFromSeries=function(){var b=this,a=b.options.chart,c=b.options.series,d,f,e;["inverted","angular","polar"].forEach(function(h){f=z[a.type||a.defaultSeriesType];e=a[h]||f&&f.prototype[h];for(d=c&&c.length;!e&&d--;)(f=z[c[d].type])&&
f.prototype[h]&&(e=!0);b[h]=e})};a.prototype.linkSeries=function(){var b=this,a=b.series;a.forEach(function(b){b.linkedSeries.length=0});a.forEach(function(a){var c=a.options.linkedTo;R(c)&&(c=":previous"===c?b.series[a.index-1]:b.get(c))&&c.linkedParent!==a&&(c.linkedSeries.push(a),a.linkedParent=c,c.enabledDataSorting&&a.setDataSortingOptions(),a.visible=W(a.options.visible,c.options.visible,a.visible))});S(this,"afterLinkSeries")};a.prototype.renderSeries=function(){this.series.forEach(function(b){b.translate();
b.render()})};a.prototype.renderLabels=function(){var b=this,a=b.options.labels;a.items&&a.items.forEach(function(c){var d=K(a.style,c.style),f=ba(d.left)+b.plotLeft,e=ba(d.top)+b.plotTop+12;delete d.left;delete d.top;b.renderer.text(c.html,f,e).attr({zIndex:2}).css(d).add()})};a.prototype.render=function(){var b=this.axes,a=this.colorAxis,c=this.renderer,d=this.options,f=function(b){b.forEach(function(b){b.visible&&b.render()})},e=0;this.setTitle();this.legend=new H(this,d.legend);this.getStacks&&
this.getStacks();this.getMargins(!0);this.setChartSize();d=this.plotWidth;b.some(function(b){if(b.horiz&&b.visible&&b.options.labels.enabled&&b.series.length)return e=21,!0});var h=this.plotHeight=Math.max(this.plotHeight-e,0);b.forEach(function(b){b.setScale()});this.getAxisMargins();var g=1.1<d/this.plotWidth,k=1.05<h/this.plotHeight;if(g||k)b.forEach(function(b){(b.horiz&&g||!b.horiz&&k)&&b.setTickInterval(!0)}),this.getMargins();this.drawChartBox();this.hasCartesianSeries?f(b):a&&a.length&&f(a);
this.seriesGroup||(this.seriesGroup=c.g("series-group").attr({zIndex:3}).add());this.renderSeries();this.renderLabels();this.addCredits();this.setResponsive&&this.setResponsive();this.hasRendered=!0};a.prototype.addCredits=function(b){var a=this,c=V(!0,this.options.credits,b);c.enabled&&!this.credits&&(this.credits=this.renderer.text(c.text+(this.mapCredits||""),0,0).addClass("highcharts-credits").on("click",function(){c.href&&(u.location.href=c.href)}).attr({align:c.position.align,zIndex:8}),a.styledMode||
this.credits.css(c.style),this.credits.add().align(c.position),this.credits.update=function(b){a.credits=a.credits.destroy();a.addCredits(b)})};a.prototype.destroy=function(){var b=this,a=b.axes,c=b.series,d=b.container,f=d&&d.parentNode,e;S(b,"destroy");b.renderer.forExport?v(w,b):w[b.index]=void 0;B.chartCount--;b.renderTo.removeAttribute("data-highcharts-chart");ha(b);for(e=a.length;e--;)a[e]=a[e].destroy();this.scroller&&this.scroller.destroy&&this.scroller.destroy();for(e=c.length;e--;)c[e]=
c[e].destroy();"title subtitle chartBackground plotBackground plotBGImage plotBorder seriesGroup clipRect credits pointer rangeSelector legend resetZoomButton tooltip renderer".split(" ").forEach(function(a){var c=b[a];c&&c.destroy&&(b[a]=c.destroy())});d&&(d.innerHTML=k.emptyHTML,ha(d),f&&Y(d));Z(b,function(a,c){delete b[c]})};a.prototype.firstRender=function(){var b=this,a=b.options;if(!b.isReadyToRender||b.isReadyToRender()){b.getContainer();b.resetMargins();b.setChartSize();b.propFromSeries();
b.getAxes();(P(a.series)?a.series:[]).forEach(function(a){b.initSeries(a)});b.linkSeries();b.setSeriesData();S(b,"beforeRender");r&&(t.isRequired()?b.pointer=new t(b,a):b.pointer=new r(b,a));b.render();b.pointer.getChartPosition();if(!b.renderer.imgCount&&!b.hasLoaded)b.onload();b.temporaryDisplay(!0)}};a.prototype.onload=function(){this.callbacks.concat([this.callback]).forEach(function(b){b&&"undefined"!==typeof this.index&&b.apply(this,[this])},this);S(this,"load");S(this,"render");T(this.index)&&
this.setReflow(this.options.chart.reflow);this.warnIfA11yModuleNotLoaded();this.hasLoaded=!0};a.prototype.warnIfA11yModuleNotLoaded=function(){var b=this.options,a=this.title;b&&!this.accessibility&&(this.renderer.boxWrapper.attr({role:"img","aria-label":(a&&a.element.textContent||"").replace(/</g,"&lt;")}),b.accessibility&&!1===b.accessibility.enabled||U('Highcharts warning: Consider including the "accessibility.js" module to make your chart more usable for people with disabilities. Set the "accessibility.enabled" option to false to remove this warning. See https://www.highcharts.com/docs/accessibility/accessibility-module.',
!1,this))};a.prototype.addSeries=function(b,a,c){var d=this,f;b&&(a=W(a,!0),S(d,"addSeries",{options:b},function(){f=d.initSeries(b);d.isDirtyLegend=!0;d.linkSeries();f.enabledDataSorting&&f.setData(b.data,!1);S(d,"afterAddSeries",{series:f});a&&d.redraw(c)}));return f};a.prototype.addAxis=function(b,a,c,d){return this.createAxis(a?"xAxis":"yAxis",{axis:b,redraw:c,animation:d})};a.prototype.addColorAxis=function(b,a,c){return this.createAxis("colorAxis",{axis:b,redraw:a,animation:c})};a.prototype.createAxis=
function(b,a){b=new g(this,V(a.axis,{index:this[b].length,isX:"xAxis"===b}));W(a.redraw,!0)&&this.redraw(a.animation);return b};a.prototype.showLoading=function(b){var a=this,c=a.options,d=c.loading,f=function(){e&&Q(e,{left:a.plotLeft+"px",top:a.plotTop+"px",width:a.plotWidth+"px",height:a.plotHeight+"px"})},e=a.loadingDiv,h=a.loadingSpan;e||(a.loadingDiv=e=O("div",{className:"highcharts-loading highcharts-loading-hidden"},null,a.container));h||(a.loadingSpan=h=O("span",{className:"highcharts-loading-inner"},
null,e),q(a,"redraw",f));e.className="highcharts-loading";k.setElementHTML(h,W(b,c.lang.loading,""));a.styledMode||(Q(e,K(d.style,{zIndex:10})),Q(h,d.labelStyle),a.loadingShown||(Q(e,{opacity:0,display:""}),p(e,{opacity:d.style.opacity||.5},{duration:d.showDuration||0})));a.loadingShown=!0;f()};a.prototype.hideLoading=function(){var b=this.options,a=this.loadingDiv;a&&(a.className="highcharts-loading highcharts-loading-hidden",this.styledMode||p(a,{opacity:0},{duration:b.loading.hideDuration||100,
complete:function(){Q(a,{display:"none"})}}));this.loadingShown=!1};a.prototype.update=function(b,a,d,f){var e=this,g={credits:"addCredits",title:"setTitle",subtitle:"setSubtitle",caption:"setCaption"},k=b.isResponsiveOptions,n=[],m,q;S(e,"update",{options:b});k||e.setResponsive(!1,!0);b=J(b,e.options);e.userOptions=V(e.userOptions,b);var l=b.chart;if(l){V(!0,e.options.chart,l);"className"in l&&e.setClassName(l.className);"reflow"in l&&e.setReflow(l.reflow);if("inverted"in l||"polar"in l||"type"in
l){e.propFromSeries();var G=!0}"alignTicks"in l&&(G=!0);"events"in l&&c(this,l);Z(l,function(b,a){-1!==e.propsRequireUpdateSeries.indexOf("chart."+a)&&(m=!0);-1!==e.propsRequireDirtyBox.indexOf(a)&&(e.isDirtyBox=!0);-1!==e.propsRequireReflow.indexOf(a)&&(k?e.isDirtyBox=!0:q=!0)});!e.styledMode&&l.style&&e.renderer.setStyle(e.options.chart.style||{})}!e.styledMode&&b.colors&&(this.options.colors=b.colors);b.time&&(this.time===L&&(this.time=new h(b.time)),V(!0,e.options.time,b.time));Z(b,function(a,
c){if(e[c]&&"function"===typeof e[c].update)e[c].update(a,!1);else if("function"===typeof e[g[c]])e[g[c]](a);else"colors"!==c&&-1===e.collectionsWithUpdate.indexOf(c)&&V(!0,e.options[c],b[c]);"chart"!==c&&-1!==e.propsRequireUpdateSeries.indexOf(c)&&(m=!0)});this.collectionsWithUpdate.forEach(function(a){if(b[a]){var c=[];e[a].forEach(function(b,a){b.options.isInternal||c.push(W(b.options.index,a))});ea(b[a]).forEach(function(b,f){var h=T(b.id),g;h&&(g=e.get(b.id));!g&&e[a]&&(g=e[a][c?c[f]:f])&&h&&
T(g.options.id)&&(g=void 0);g&&g.coll===a&&(g.update(b,!1),d&&(g.touched=!0));!g&&d&&e.collectionsWithInit[a]&&(e.collectionsWithInit[a][0].apply(e,[b].concat(e.collectionsWithInit[a][1]||[]).concat([!1])).touched=!0)});d&&e[a].forEach(function(b){b.touched||b.options.isInternal?delete b.touched:n.push(b)})}});n.forEach(function(b){b.chart&&b.remove&&b.remove(!1)});G&&e.axes.forEach(function(b){b.update({},!1)});m&&e.getSeriesOrderByLinks().forEach(function(b){b.chart&&b.update({},!1)},this);G=l&&
l.width;l=l&&(R(l.height)?fa(l.height,G||e.chartWidth):l.height);q||M(G)&&G!==e.chartWidth||M(l)&&l!==e.chartHeight?e.setSize(G,l,f):W(a,!0)&&e.redraw(f);S(e,"afterUpdate",{options:b,redraw:a,animation:f})};a.prototype.setSubtitle=function(b,a){this.applyDescription("subtitle",b);this.layOutTitles(a)};a.prototype.setCaption=function(b,a){this.applyDescription("caption",b);this.layOutTitles(a)};a.prototype.showResetZoom=function(){function b(){a.zoomOut()}var a=this,c=E.lang,d=a.options.chart.zooming.resetButton,
f=d.theme,e="chart"===d.relativeTo||"spacingBox"===d.relativeTo?null:"scrollablePlotBox";S(this,"beforeShowResetZoom",null,function(){a.resetZoomButton=a.renderer.button(c.resetZoom,null,null,b,f).attr({align:d.position.align,title:c.resetZoomTitle}).addClass("highcharts-reset-zoom").add().align(d.position,!1,e)});S(this,"afterShowResetZoom")};a.prototype.zoomOut=function(){S(this,"selection",{resetSelection:!0},this.zoom)};a.prototype.zoom=function(b){var a=this,c=a.pointer,d=!1,f;!b||b.resetSelection?
(a.axes.forEach(function(b){f=b.zoom()}),c.initiated=!1):b.xAxis.concat(b.yAxis).forEach(function(b){var e=b.axis;if(c[e.isXAxis?"zoomX":"zoomY"]&&T(c.mouseDownX)&&T(c.mouseDownY)&&a.isInsidePlot(c.mouseDownX-a.plotLeft,c.mouseDownY-a.plotTop,{axis:e})||!T(a.inverted?c.mouseDownX:c.mouseDownY))f=e.zoom(b.min,b.max),e.displayBtn&&(d=!0)});var e=a.resetZoomButton;d&&!e?a.showResetZoom():!d&&X(e)&&(a.resetZoomButton=e.destroy());f&&a.redraw(W(a.options.chart.animation,b&&b.animation,100>a.pointCount))};
a.prototype.pan=function(b,a){var c=this,d=c.hoverPoints;a="object"===typeof a?a:{enabled:a,type:"x"};var f=c.options.chart;f&&f.panning&&(f.panning=a);var e=a.type,h;S(this,"pan",{originalEvent:b},function(){d&&d.forEach(function(b){b.setState()});var a=c.xAxis;"xy"===e?a=a.concat(c.yAxis):"y"===e&&(a=c.yAxis);var f={};a.forEach(function(a){if(a.options.panningEnabled&&!a.options.isInternal){var d=a.horiz,g=b[d?"chartX":"chartY"];d=d?"mouseDownX":"mouseDownY";var k=c[d],n=a.minPointOffset||0,m=a.reversed&&
!c.inverted||!a.reversed&&c.inverted?-1:1,l=a.getExtremes(),q=a.toValue(k-g,!0)+n*m,G=a.toValue(k+a.len-g,!0)-(n*m||a.isXAxis&&a.pointRangePadding||0),u=G<q;m=a.hasVerticalPanning();k=u?G:q;q=u?q:G;var p=a.panningState;!m||a.isXAxis||p&&!p.isDirty||a.series.forEach(function(b){var a=b.getProcessedData(!0);a=b.getExtremes(a.yData,!0);p||(p={startMin:Number.MAX_VALUE,startMax:-Number.MAX_VALUE});M(a.dataMin)&&M(a.dataMax)&&(p.startMin=Math.min(W(b.options.threshold,Infinity),a.dataMin,p.startMin),p.startMax=
Math.max(W(b.options.threshold,-Infinity),a.dataMax,p.startMax))});m=Math.min(W(p&&p.startMin,l.dataMin),n?l.min:a.toValue(a.toPixels(l.min)-a.minPixelPadding));G=Math.max(W(p&&p.startMax,l.dataMax),n?l.max:a.toValue(a.toPixels(l.max)+a.minPixelPadding));a.panningState=p;a.isOrdinal||(n=m-k,0<n&&(q+=n,k=m),n=q-G,0<n&&(q=G,k-=n),a.series.length&&k!==l.min&&q!==l.max&&k>=m&&q<=G&&(a.setExtremes(k,q,!1,!1,{trigger:"pan"}),!c.resetZoomButton&&k!==m&&q!==G&&e.match("y")&&(c.showResetZoom(),a.displayBtn=
!1),h=!0),f[d]=g)}});Z(f,function(b,a){c[a]=b});h&&c.redraw(!1);Q(c.container,{cursor:"move"})})};return a}();K(a.prototype,{callbacks:[],collectionsWithInit:{xAxis:[a.prototype.addAxis,[!0]],yAxis:[a.prototype.addAxis,[!1]],series:[a.prototype.addSeries]},collectionsWithUpdate:["xAxis","yAxis","series"],propsRequireDirtyBox:"backgroundColor borderColor borderWidth borderRadius plotBackgroundColor plotBackgroundImage plotBorderColor plotBorderWidth plotShadow shadow".split(" "),propsRequireReflow:"margin marginTop marginRight marginBottom marginLeft spacing spacingTop spacingRight spacingBottom spacingLeft".split(" "),
propsRequireUpdateSeries:"chart.inverted chart.polar chart.ignoreHiddenSeries chart.type colors plotOptions time tooltip".split(" ")});"";return a});K(g,"Core/Legend/LegendSymbol.js",[g["Core/Utilities.js"]],function(a){var g=a.extend,x=a.merge,F=a.pick,C;(function(a){a.drawLineMarker=function(a){var t=this.legendItem=this.legendItem||{},r=this.options,l=a.symbolWidth,e=a.symbolHeight,d=e/2,h=this.chart.renderer,m=t.group;a=a.baseline-Math.round(.3*a.fontMetrics.b);var k={},p=r.marker,D=0;this.chart.styledMode||
(k={"stroke-width":Math.min(r.lineWidth||0,24)},r.dashStyle?k.dashstyle=r.dashStyle:"square"!==r.linecap&&(k["stroke-linecap"]="round"));t.line=h.path().addClass("highcharts-graph").attr(k).add(m);k["stroke-linecap"]&&(D=Math.min(t.line.strokeWidth(),l)/2);t.line.attr({d:[["M",D,a],["L",l-D,a]]});p&&!1!==p.enabled&&l&&(r=Math.min(F(p.radius,d),d),0===this.symbol.indexOf("url")&&(p=x(p,{width:e,height:e}),r=0),t.symbol=t=h.symbol(this.symbol,l/2-r,a-r,2*r,2*r,g({context:"legend"},p)).addClass("highcharts-point").add(m),
t.isMarker=!0)};a.drawRectangle=function(a,g){g=g.legendItem||{};var r=a.symbolHeight,l=a.options.squareSymbol;g.symbol=this.chart.renderer.rect(l?(a.symbolWidth-r)/2:0,a.baseline-r+1,l?r:a.symbolWidth,r,F(a.options.symbolRadius,r/2)).addClass("highcharts-point").attr({zIndex:3}).add(g.group)}})(C||(C={}));return C});K(g,"Core/Series/SeriesDefaults.js",[],function(){return{lineWidth:2,allowPointSelect:!1,crisp:!0,showCheckbox:!1,animation:{duration:1E3},events:{},marker:{enabledThreshold:2,lineColor:"#ffffff",
lineWidth:0,radius:4,states:{normal:{animation:!0},hover:{animation:{duration:50},enabled:!0,radiusPlus:2,lineWidthPlus:1},select:{fillColor:"#cccccc",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:{animation:{},align:"center",borderWidth:0,defer:!0,formatter:function(){var a=this.series.chart.numberFormatter;return"number"!==typeof this.y?"":a(this.y,-1)},padding:5,style:{fontSize:"11px",fontWeight:"bold",color:"contrast",textOutline:"1px contrast"},verticalAlign:"bottom",x:0,y:0},
cropThreshold:300,opacity:1,pointRange:0,softThreshold:!0,states:{normal:{animation:!0},hover:{animation:{duration:50},lineWidthPlus:1,marker:{},halo:{size:10,opacity:.25}},select:{animation:{duration:0}},inactive:{animation:{duration:50},opacity:.2}},stickyTracking:!0,turboThreshold:1E3,findNearestPointBy:"x"}});K(g,"Core/Series/Series.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/Defaults.js"],g["Core/Foundation.js"],g["Core/Globals.js"],g["Core/Legend/LegendSymbol.js"],g["Core/Series/Point.js"],
g["Core/Series/SeriesDefaults.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Renderer/SVG/SVGElement.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B,H,t,r,l){var e=a.animObject,d=a.setAnimation,h=g.defaultOptions,m=x.registerEventOptions,k=F.hasTouch,p=F.svg,D=F.win,A=t.seriesTypes,E=l.arrayMax,L=l.arrayMin,y=l.clamp,c=l.cleanRecursively,w=l.correctFloat,f=l.defined,n=l.erase,b=l.error,u=l.extend,z=l.find,q=l.fireEvent,N=l.getNestedProperty,J=l.isArray,O=l.isNumber,Q=l.isString,T=l.merge,Y=l.objectEach,
v=l.pick,U=l.removeEvent,K=l.splat,ca=l.syncTimeout;a=function(){function a(){this.zones=this.yAxis=this.xAxis=this.userOptions=this.tooltipOptions=this.processedYData=this.processedXData=this.points=this.options=this.linkedSeries=this.index=this.eventsToUnbind=this.eventOptions=this.data=this.chart=this._i=void 0}a.prototype.init=function(b,a){q(this,"init",{options:a});var c=this,d=b.series;this.eventsToUnbind=[];c.chart=b;c.options=c.setOptions(a);a=c.options;c.linkedSeries=[];c.bindAxes();u(c,
{name:a.name,state:"",visible:!1!==a.visible,selected:!0===a.selected});m(this,a);var f=a.events;if(f&&f.click||a.point&&a.point.events&&a.point.events.click||a.allowPointSelect)b.runTrackerClick=!0;c.getColor();c.getSymbol();c.parallelArrays.forEach(function(b){c[b+"Data"]||(c[b+"Data"]=[])});c.isCartesian&&(b.hasCartesianSeries=!0);var e;d.length&&(e=d[d.length-1]);c._i=v(e&&e._i,-1)+1;c.opacity=c.options.opacity;b.orderSeries(this.insert(d));a.dataSorting&&a.dataSorting.enabled?c.setDataSortingOptions():
c.points||c.data||c.setData(a.data,!1);q(this,"afterInit")};a.prototype.is=function(b){return A[b]&&this instanceof A[b]};a.prototype.insert=function(b){var a=this.options.index,c;if(O(a)){for(c=b.length;c--;)if(a>=v(b[c].options.index,b[c]._i)){b.splice(c+1,0,this);break}-1===c&&b.unshift(this);c+=1}else b.push(this);return v(c,b.length-1)};a.prototype.bindAxes=function(){var a=this,c=a.options,d=a.chart,f;q(this,"bindAxes",null,function(){(a.axisTypes||[]).forEach(function(e){var h=0;d[e].forEach(function(b){f=
b.options;if(c[e]===h&&!f.isInternal||"undefined"!==typeof c[e]&&c[e]===f.id||"undefined"===typeof c[e]&&0===f.index)a.insert(b.series),a[e]=b,b.isDirty=!0;f.isInternal||h++});a[e]||a.optionalAxis===e||b(18,!0,d)})});q(this,"afterBindAxes")};a.prototype.updateParallelArrays=function(b,a){var c=b.series,d=arguments,f=O(a)?function(d){var f="y"===d&&c.toYData?c.toYData(b):b[d];c[d+"Data"][a]=f}:function(b){Array.prototype[a].apply(c[b+"Data"],Array.prototype.slice.call(d,2))};c.parallelArrays.forEach(f)};
a.prototype.hasData=function(){return this.visible&&"undefined"!==typeof this.dataMax&&"undefined"!==typeof this.dataMin||this.visible&&this.yData&&0<this.yData.length};a.prototype.autoIncrement=function(b){var a=this.options,c=a.pointIntervalUnit,d=a.relativeXValue,f=this.chart.time,e=this.xIncrement,h;e=v(e,a.pointStart,0);this.pointInterval=h=v(this.pointInterval,a.pointInterval,1);d&&O(b)&&(h*=b);c&&(a=new f.Date(e),"day"===c?f.set("Date",a,f.get("Date",a)+h):"month"===c?f.set("Month",a,f.get("Month",
a)+h):"year"===c&&f.set("FullYear",a,f.get("FullYear",a)+h),h=a.getTime()-e);if(d&&O(b))return e+h;this.xIncrement=e+h;return e};a.prototype.setDataSortingOptions=function(){var b=this.options;u(this,{requireSorting:!1,sorted:!1,enabledDataSorting:!0,allowDG:!1});f(b.pointRange)||(b.pointRange=1)};a.prototype.setOptions=function(b){var a=this.chart,c=a.options,d=c.plotOptions,e=a.userOptions||{};b=T(b);a=a.styledMode;var g={plotOptions:d,userOptions:b};q(this,"setOptions",g);var k=g.plotOptions[this.type],
n=e.plotOptions||{};this.userOptions=g.userOptions;e=T(k,d.series,e.plotOptions&&e.plotOptions[this.type],b);this.tooltipOptions=T(h.tooltip,h.plotOptions.series&&h.plotOptions.series.tooltip,h.plotOptions[this.type].tooltip,c.tooltip.userOptions,d.series&&d.series.tooltip,d[this.type].tooltip,b.tooltip);this.stickyTracking=v(b.stickyTracking,n[this.type]&&n[this.type].stickyTracking,n.series&&n.series.stickyTracking,this.tooltipOptions.shared&&!this.noSharedTooltip?!0:e.stickyTracking);null===k.marker&&
delete e.marker;this.zoneAxis=e.zoneAxis;d=this.zones=(e.zones||[]).slice();!e.negativeColor&&!e.negativeFillColor||e.zones||(c={value:e[this.zoneAxis+"Threshold"]||e.threshold||0,className:"highcharts-negative"},a||(c.color=e.negativeColor,c.fillColor=e.negativeFillColor),d.push(c));d.length&&f(d[d.length-1].value)&&d.push(a?{}:{color:this.color,fillColor:this.fillColor});q(this,"afterSetOptions",{options:e});return e};a.prototype.getName=function(){return v(this.options.name,"Series "+(this.index+
1))};a.prototype.getCyclic=function(b,a,c){var d=this.chart,e=this.userOptions,h=b+"Index",g=b+"Counter",k=c?c.length:v(d.options.chart[b+"Count"],d[b+"Count"]);if(!a){var n=v(e[h],e["_"+h]);f(n)||(d.series.length||(d[g]=0),e["_"+h]=n=d[g]%k,d[g]+=1);c&&(a=c[n])}"undefined"!==typeof n&&(this[h]=n);this[b]=a};a.prototype.getColor=function(){this.chart.styledMode?this.getCyclic("color"):this.options.colorByPoint?this.color="#cccccc":this.getCyclic("color",this.options.color||h.plotOptions[this.type].color,
this.chart.options.colors)};a.prototype.getPointsCollection=function(){return(this.hasGroupedData?this.points:this.data)||[]};a.prototype.getSymbol=function(){this.getCyclic("symbol",this.options.marker.symbol,this.chart.options.symbols)};a.prototype.findPointIndex=function(b,a){var c=b.id,d=b.x,f=this.points,e=this.options.dataSorting,h,g;if(c)e=this.chart.get(c),e instanceof B&&(h=e);else if(this.linkedParent||this.enabledDataSorting||this.options.relativeXValue)if(h=function(a){return!a.touched&&
a.index===b.index},e&&e.matchByName?h=function(a){return!a.touched&&a.name===b.name}:this.options.relativeXValue&&(h=function(a){return!a.touched&&a.options.x===b.x}),h=z(f,h),!h)return;if(h){var k=h&&h.index;"undefined"!==typeof k&&(g=!0)}"undefined"===typeof k&&O(d)&&(k=this.xData.indexOf(d,a));-1!==k&&"undefined"!==typeof k&&this.cropped&&(k=k>=this.cropStart?k-this.cropStart:k);!g&&O(k)&&f[k]&&f[k].touched&&(k=void 0);return k};a.prototype.updateData=function(b,a){var c=this.options,d=c.dataSorting,
e=this.points,h=[],g=this.requireSorting,k=b.length===e.length,n,m,q,l=!0;this.xIncrement=null;b.forEach(function(b,a){var m=f(b)&&this.pointClass.prototype.optionsToObject.call({series:this},b)||{},l=m.x;if(m.id||O(l)){if(m=this.findPointIndex(m,q),-1===m||"undefined"===typeof m?h.push(b):e[m]&&b!==c.data[m]?(e[m].update(b,!1,null,!1),e[m].touched=!0,g&&(q=m+1)):e[m]&&(e[m].touched=!0),!k||a!==m||d&&d.enabled||this.hasDerivedData)n=!0}else h.push(b)},this);if(n)for(b=e.length;b--;)(m=e[b])&&!m.touched&&
m.remove&&m.remove(!1,a);else!k||d&&d.enabled?l=!1:(b.forEach(function(b,a){b!==e[a].y&&e[a].update&&e[a].update(b,!1,null,!1)}),h.length=0);e.forEach(function(b){b&&(b.touched=!1)});if(!l)return!1;h.forEach(function(b){this.addPoint(b,!1,null,null,!1)},this);null===this.xIncrement&&this.xData&&this.xData.length&&(this.xIncrement=E(this.xData),this.autoIncrement());return!0};a.prototype.setData=function(a,c,d,f){void 0===c&&(c=!0);var e=this,h=e.points,g=h&&h.length||0,k=e.options,n=e.chart,m=k.dataSorting,
l=e.xAxis,q=k.turboThreshold,u=this.xData,p=this.yData,G=e.pointArrayMap;G=G&&G.length;var v=k.keys,w,r=0,z=1,y=null;if(!n.options.chart.allowMutatingData){k.data&&delete e.options.data;e.userOptions.data&&delete e.userOptions.data;var M=T(!0,a)}a=M||a||[];M=a.length;m&&m.enabled&&(a=this.sortData(a));n.options.chart.allowMutatingData&&!1!==f&&M&&g&&!e.cropped&&!e.hasGroupedData&&e.visible&&!e.boosted&&(w=this.updateData(a,d));if(!w){e.xIncrement=null;e.colorCounter=0;this.parallelArrays.forEach(function(b){e[b+
"Data"].length=0});if(q&&M>q)if(y=e.getFirstValidPoint(a),O(y))for(d=0;d<M;d++)u[d]=this.autoIncrement(),p[d]=a[d];else if(J(y))if(G)if(y.length===G)for(d=0;d<M;d++)u[d]=this.autoIncrement(),p[d]=a[d];else for(d=0;d<M;d++)f=a[d],u[d]=f[0],p[d]=f.slice(1,G+1);else if(v&&(r=v.indexOf("x"),z=v.indexOf("y"),r=0<=r?r:0,z=0<=z?z:1),1===y.length&&(z=0),r===z)for(d=0;d<M;d++)u[d]=this.autoIncrement(),p[d]=a[d][z];else for(d=0;d<M;d++)f=a[d],u[d]=f[r],p[d]=f[z];else b(12,!1,n);else for(d=0;d<M;d++)"undefined"!==
typeof a[d]&&(f={series:e},e.pointClass.prototype.applyOptions.apply(f,[a[d]]),e.updateParallelArrays(f,d));p&&Q(p[0])&&b(14,!0,n);e.data=[];e.options.data=e.userOptions.data=a;for(d=g;d--;)h[d]&&h[d].destroy&&h[d].destroy();l&&(l.minRange=l.userMinRange);e.isDirty=n.isDirtyBox=!0;e.isDirtyData=!!h;d=!1}"point"===k.legendType&&(this.processData(),this.generatePoints());c&&n.redraw(d)};a.prototype.sortData=function(b){var a=this,c=a.options.dataSorting.sortKey||"y",d=function(b,a){return f(a)&&b.pointClass.prototype.optionsToObject.call({series:b},
a)||{}};b.forEach(function(c,e){b[e]=d(a,c);b[e].index=e},this);b.concat().sort(function(b,a){b=N(c,b);a=N(c,a);return a<b?-1:a>b?1:0}).forEach(function(b,a){b.x=a},this);a.linkedSeries&&a.linkedSeries.forEach(function(a){var c=a.options,e=c.data;c.dataSorting&&c.dataSorting.enabled||!e||(e.forEach(function(c,f){e[f]=d(a,c);b[f]&&(e[f].x=b[f].x,e[f].index=f)}),a.setData(e,!1))});return b};a.prototype.getProcessedData=function(a){var c=this.xAxis,d=this.options,e=d.cropThreshold,f=a||this.getExtremesFromAll||
d.getExtremesFromAll,h=this.isCartesian;a=c&&c.val2lin;d=!(!c||!c.logarithmic);var g=0,k=this.xData,n=this.yData,m=this.requireSorting;var l=!1;var q=k.length;if(c){l=c.getExtremes();var u=l.min;var p=l.max;l=!(!c.categories||c.names.length)}if(h&&this.sorted&&!f&&(!e||q>e||this.forceCrop))if(k[q-1]<u||k[0]>p)k=[],n=[];else if(this.yData&&(k[0]<u||k[q-1]>p)){var G=this.cropData(this.xData,this.yData,u,p);k=G.xData;n=G.yData;g=G.start;G=!0}for(e=k.length||1;--e;)if(c=d?a(k[e])-a(k[e-1]):k[e]-k[e-1],
0<c&&("undefined"===typeof v||c<v))var v=c;else 0>c&&m&&!l&&(b(15,!1,this.chart),m=!1);return{xData:k,yData:n,cropped:G,cropStart:g,closestPointRange:v}};a.prototype.processData=function(b){var a=this.xAxis;if(this.isCartesian&&!this.isDirty&&!a.isDirty&&!this.yAxis.isDirty&&!b)return!1;b=this.getProcessedData();this.cropped=b.cropped;this.cropStart=b.cropStart;this.processedXData=b.xData;this.processedYData=b.yData;this.closestPointRange=this.basePointRange=b.closestPointRange;q(this,"afterProcessData")};
a.prototype.cropData=function(b,a,c,d,e){var f=b.length,h,g=0,k=f;e=v(e,this.cropShoulder);for(h=0;h<f;h++)if(b[h]>=c){g=Math.max(0,h-e);break}for(c=h;c<f;c++)if(b[c]>d){k=c+e;break}return{xData:b.slice(g,k),yData:a.slice(g,k),start:g,end:k}};a.prototype.generatePoints=function(){var b=this.options,a=this.processedData||b.data,c=this.processedXData,d=this.processedYData,e=this.pointClass,f=c.length,h=this.cropStart||0,g=this.hasGroupedData,k=b.keys,n=[];b=b.dataGrouping&&b.dataGrouping.groupAll?h:
0;var m,l,p=this.data;if(!p&&!g){var v=[];v.length=a.length;p=this.data=v}k&&g&&(this.options.keys=!1);for(l=0;l<f;l++){v=h+l;if(g){var r=(new e).init(this,[c[l]].concat(K(d[l])));r.dataGroup=this.groupMap[b+l];r.dataGroup.options&&(r.options=r.dataGroup.options,u(r,r.dataGroup.options),delete r.dataLabels)}else(r=p[v])||"undefined"===typeof a[v]||(p[v]=r=(new e).init(this,a[v],c[l]));r&&(r.index=g?b+l:v,n[l]=r)}this.options.keys=k;if(p&&(f!==(m=p.length)||g))for(l=0;l<m;l++)l!==h||g||(l+=f),p[l]&&
(p[l].destroyElements(),p[l].plotX=void 0);this.data=p;this.points=n;q(this,"afterGeneratePoints")};a.prototype.getXExtremes=function(b){return{min:L(b),max:E(b)}};a.prototype.getExtremes=function(b,a){var c=this.xAxis,d=this.yAxis,e=this.processedXData||this.xData,f=[],h=this.requireSorting?this.cropShoulder:0;d=d?d.positiveValuesOnly:!1;var g,k=0,n=0,m=0;b=b||this.stackedYData||this.processedYData||[];var l=b.length;if(c){var p=c.getExtremes();k=p.min;n=p.max}for(g=0;g<l;g++){var u=e[g];p=b[g];
var G=(O(p)||J(p))&&(p.length||0<p||!d);u=a||this.getExtremesFromAll||this.options.getExtremesFromAll||this.cropped||!c||(e[g+h]||u)>=k&&(e[g-h]||u)<=n;if(G&&u)if(G=p.length)for(;G--;)O(p[G])&&(f[m++]=p[G]);else f[m++]=p}b={activeYData:f,dataMin:L(f),dataMax:E(f)};q(this,"afterGetExtremes",{dataExtremes:b});return b};a.prototype.applyExtremes=function(){var b=this.getExtremes();this.dataMin=b.dataMin;this.dataMax=b.dataMax;return b};a.prototype.getFirstValidPoint=function(b){for(var a=b.length,c=
0,d=null;null===d&&c<a;)d=b[c],c++;return d};a.prototype.translate=function(){this.processedXData||this.processData();this.generatePoints();var b=this.options,a=b.stacking,c=this.xAxis,d=c.categories,e=this.enabledDataSorting,h=this.yAxis,g=this.points,k=g.length,n=this.pointPlacementToXValue(),m=!!n,l=b.threshold,p=b.startFromThreshold?l:0,u=this.zoneAxis||"y",r,z,t=Number.MAX_VALUE;for(r=0;r<k;r++){var D=g[r],E=D.x,A=void 0,N=void 0,I=D.y,x=D.low,C=a&&h.stacking&&h.stacking.stacks[(this.negStacks&&
I<(p?0:l)?"-":"")+this.stackKey];if(h.positiveValuesOnly&&!h.validatePositiveValue(I)||c.positiveValuesOnly&&!c.validatePositiveValue(E))D.isNull=!0;D.plotX=z=w(y(c.translate(E,0,0,0,1,n,"flags"===this.type),-1E5,1E5));if(a&&this.visible&&C&&C[E]){var L=this.getStackIndicator(L,E,this.index);!D.isNull&&L.key&&(A=C[E],N=A.points[L.key]);A&&J(N)&&(x=N[0],I=N[1],x===p&&L.key===C[E].base&&(x=v(O(l)?l:h.min)),h.positiveValuesOnly&&f(x)&&0>=x&&(x=void 0),D.total=D.stackTotal=v(A.total),D.percentage=f(D.y)&&
A.total?D.y/A.total*100:void 0,D.stackY=I,this.irregularWidths||A.setOffset(this.pointXOffset||0,this.barW||0,void 0,void 0,void 0,this.xAxis))}D.yBottom=f(x)?y(h.translate(x,0,1,0,1),-1E5,1E5):void 0;this.dataModify&&(I=this.dataModify.modifyValue(I,r));D.plotY=void 0;O(I)&&(A=h.translate(I,!1,!0,!1,!0),"undefined"!==typeof A&&(D.plotY=y(A,-1E5,1E5)));D.isInside=this.isPointInside(D);D.clientX=m?w(c.translate(E,0,0,0,1,n)):z;D.negative=D[u]<(b[u+"Threshold"]||l||0);D.category=v(d&&d[D.x],D.x);if(!D.isNull&&
!1!==D.visible){"undefined"!==typeof B&&(t=Math.min(t,Math.abs(z-B)));var B=z}D.zone=this.zones.length?D.getZone():void 0;!D.graphic&&this.group&&e&&(D.isNew=!0)}this.closestPointRangePx=t;q(this,"afterTranslate")};a.prototype.getValidPoints=function(b,a,c){var d=this.chart;return(b||this.points||[]).filter(function(b){return a&&!d.isInsidePlot(b.plotX,b.plotY,{inverted:d.inverted})?!1:!1!==b.visible&&(c||!b.isNull)})};a.prototype.getClipBox=function(){var b=this.chart,a=this.xAxis,c=this.yAxis,d=
T(b.clipBox);a&&a.len!==b.plotSizeX&&(d.width=a.len);c&&c.len!==b.plotSizeY&&(d.height=c.len);return d};a.prototype.getSharedClipKey=function(){return this.sharedClipKey=(this.options.xAxis||0)+","+(this.options.yAxis||0)};a.prototype.setClip=function(){var b=this.chart,a=this.group,c=this.markerGroup,d=b.sharedClips;b=b.renderer;var e=this.getClipBox(),f=this.getSharedClipKey(),h=d[f];h?h.animate(e):d[f]=h=b.clipRect(e);a&&a.clip(!1===this.options.clip?void 0:h);c&&c.clip()};a.prototype.animate=
function(b){var a=this.chart,c=this.group,d=this.markerGroup,f=a.inverted,h=e(this.options.animation),g=[this.getSharedClipKey(),h.duration,h.easing,h.defer].join(),k=a.sharedClips[g],n=a.sharedClips[g+"m"];if(b&&c)h=this.getClipBox(),k?k.attr("height",h.height):(h.width=0,f&&(h.x=a.plotHeight),k=a.renderer.clipRect(h),a.sharedClips[g]=k,n=a.renderer.clipRect({x:-99,y:-99,width:f?a.plotWidth+199:99,height:f?99:a.plotHeight+199}),a.sharedClips[g+"m"]=n),c.clip(k),d&&d.clip(n);else if(k&&!k.hasClass("highcharts-animating")){a=
this.getClipBox();var m=h.step;d&&d.element.childNodes.length&&(h.step=function(b,a){m&&m.apply(a,arguments);"width"===a.prop&&n&&n.element&&n.attr(f?"height":"width",b+99)});k.addClass("highcharts-animating").animate(a,h)}};a.prototype.afterAnimate=function(){var b=this;this.setClip();Y(this.chart.sharedClips,function(a,c,d){a&&!b.chart.container.querySelector('[clip-path="url(#'.concat(a.id,')"]'))&&(a.destroy(),delete d[c])});this.finishedAnimating=!0;q(this,"afterAnimate")};a.prototype.drawPoints=
function(b){void 0===b&&(b=this.points);var a=this.chart,c=a.styledMode,d=this.colorAxis,e=this.options.marker,f=this[this.specialGroup||"markerGroup"],h=this.xAxis,g=v(e.enabled,!h||h.isRadial?!0:null,this.closestPointRangePx>=e.enabledThreshold*e.radius),k,n;if(!1!==e.enabled||this._hasPointMarkers)for(k=0;k<b.length;k++){var m=b[k];var l=(n=m.graphic)?"animate":"attr";var q=m.marker||{};var p=!!m.marker;if((g&&"undefined"===typeof q.enabled||q.enabled)&&!m.isNull&&!1!==m.visible){var u=v(q.symbol,
this.symbol,"rect");var G=this.markerAttribs(m,m.selected&&"select");this.enabledDataSorting&&(m.startXPos=h.reversed?-(G.width||0):h.width);var r=!1!==m.isInside;!n&&r&&(0<(G.width||0)||m.hasImage)&&(m.graphic=n=a.renderer.symbol(u,G.x,G.y,G.width,G.height,p?q:e).add(f),this.enabledDataSorting&&a.hasRendered&&(n.attr({x:m.startXPos}),l="animate"));n&&"animate"===l&&n[r?"show":"hide"](r).animate(G);if(n)if(q=this.pointAttribs(m,c||!m.selected?void 0:"select"),c)d&&n.css({fill:q.fill});else n[l](q);
n&&n.addClass(m.getClassName(),!0)}else n&&(m.graphic=n.destroy())}};a.prototype.markerAttribs=function(b,a){var c=this.options,d=c.marker,e=b.marker||{},f=e.symbol||d.symbol,h={},g=v(e.radius,d&&d.radius);a&&(d=d.states[a],a=e.states&&e.states[a],g=v(a&&a.radius,d&&d.radius,g&&g+(d&&d.radiusPlus||0)));b.hasImage=f&&0===f.indexOf("url");b.hasImage&&(g=0);b=b.pos();O(g)&&b&&(h.x=b[0]-g,h.y=b[1]-g,c.crisp&&(h.x=Math.floor(h.x)));g&&(h.width=h.height=2*g);return h};a.prototype.pointAttribs=function(b,
a){var c=this.options.marker,d=b&&b.options,e=d&&d.marker||{},f=d&&d.color,h=b&&b.color,g=b&&b.zone&&b.zone.color,k=this.color;b=v(e.lineWidth,c.lineWidth);d=1;k=f||g||h||k;f=e.fillColor||c.fillColor||k;h=e.lineColor||c.lineColor||k;a=a||"normal";c=c.states[a]||{};a=e.states&&e.states[a]||{};b=v(a.lineWidth,c.lineWidth,b+v(a.lineWidthPlus,c.lineWidthPlus,0));f=a.fillColor||c.fillColor||f;h=a.lineColor||c.lineColor||h;d=v(a.opacity,c.opacity,d);return{stroke:h,"stroke-width":b,fill:f,opacity:d}};a.prototype.destroy=
function(b){var a=this,c=a.chart,d=/AppleWebKit\/533/.test(D.navigator.userAgent),e=a.data||[],f,h,g,k;q(a,"destroy",{keepEventsForUpdate:b});this.removeEvents(b);(a.axisTypes||[]).forEach(function(b){(k=a[b])&&k.series&&(n(k.series,a),k.isDirty=k.forceRedraw=!0)});a.legendItem&&a.chart.legend.destroyItem(a);for(h=e.length;h--;)(g=e[h])&&g.destroy&&g.destroy();a.clips&&a.clips.forEach(function(b){return b.destroy()});l.clearTimeout(a.animationTimeout);Y(a,function(b,a){b instanceof r&&!b.survive&&
(f=d&&"group"===a?"hide":"destroy",b[f]())});c.hoverSeries===a&&(c.hoverSeries=void 0);n(c.series,a);c.orderSeries();Y(a,function(c,d){b&&"hcEvents"===d||delete a[d]})};a.prototype.applyZones=function(){var b=this,a=this.chart,c=a.renderer,d=this.zones,e=this.clips||[],f=this.graph,h=this.area,g=Math.max(a.plotWidth,a.plotHeight),k=this[(this.zoneAxis||"y")+"Axis"],n=a.inverted,m,l,q,p,u,r,z,w,t=!1;if(d.length&&(f||h)&&k&&"undefined"!==typeof k.min){var D=k.reversed;var E=k.horiz;f&&!this.showLine&&
f.hide();h&&h.hide();var A=k.getExtremes();d.forEach(function(d,G){m=D?E?a.plotWidth:0:E?0:k.toPixels(A.min)||0;m=y(v(l,m),0,g);l=y(Math.round(k.toPixels(v(d.value,A.max),!0)||0),0,g);t&&(m=l=k.toPixels(A.max));p=Math.abs(m-l);u=Math.min(m,l);r=Math.max(m,l);k.isXAxis?(q={x:n?r:u,y:0,width:p,height:g},E||(q.x=a.plotHeight-q.x)):(q={x:0,y:n?r:u,width:g,height:p},E&&(q.y=a.plotWidth-q.y));n&&c.isVML&&(q=k.isXAxis?{x:0,y:D?u:r,height:q.width,width:a.chartWidth}:{x:q.y-a.plotLeft-a.spacingBox.x,y:0,width:q.height,
height:a.chartHeight});e[G]?e[G].animate(q):e[G]=c.clipRect(q);z=b["zone-area-"+G];w=b["zone-graph-"+G];f&&w&&w.clip(e[G]);h&&z&&z.clip(e[G]);t=d.value>A.max;b.resetZones&&0===l&&(l=void 0)});this.clips=e}else b.visible&&(f&&f.show(),h&&h.show())};a.prototype.plotGroup=function(b,a,c,d,e){var h=this[b],g=!h;c={visibility:c,zIndex:d||.1};"undefined"===typeof this.opacity||this.chart.styledMode||"inactive"===this.state||(c.opacity=this.opacity);g&&(this[b]=h=this.chart.renderer.g().add(e));h.addClass("highcharts-"+
a+" highcharts-series-"+this.index+" highcharts-"+this.type+"-series "+(f(this.colorIndex)?"highcharts-color-"+this.colorIndex+" ":"")+(this.options.className||"")+(h.hasClass("highcharts-tracker")?" highcharts-tracker":""),!0);h.attr(c)[g?"attr":"animate"](this.getPlotBox(a));return h};a.prototype.getPlotBox=function(b){var a=this.xAxis,c=this.yAxis,d=this.chart;b=d.inverted&&!d.polar&&a&&!1!==this.invertible&&"series"===b;d.inverted&&(a=c,c=this.xAxis);return{translateX:a?a.left:d.plotLeft,translateY:c?
c.top:d.plotTop,rotation:b?90:0,rotationOriginX:b?(a.len-c.len)/2:0,rotationOriginY:b?(a.len+c.len)/2:0,scaleX:b?-1:1,scaleY:1}};a.prototype.removeEvents=function(b){b||U(this);this.eventsToUnbind.length&&(this.eventsToUnbind.forEach(function(b){b()}),this.eventsToUnbind.length=0)};a.prototype.render=function(){var b=this,a=b.chart,c=b.options,d=e(c.animation),f=b.visible?"inherit":"hidden",h=c.zIndex,g=b.hasRendered,k=a.seriesGroup;a=!b.finishedAnimating&&a.renderer.isSVG?d.duration:0;q(this,"render");
b.plotGroup("group","series",f,h,k);b.markerGroup=b.plotGroup("markerGroup","markers",f,h,k);!1!==c.clip&&b.setClip();b.animate&&a&&b.animate(!0);b.drawGraph&&(b.drawGraph(),b.applyZones());b.visible&&b.drawPoints();b.drawDataLabels&&b.drawDataLabels();b.redrawPoints&&b.redrawPoints();b.drawTracker&&!1!==b.options.enableMouseTracking&&b.drawTracker();b.animate&&a&&b.animate();g||(a&&d.defer&&(a+=d.defer),b.animationTimeout=ca(function(){b.afterAnimate()},a||0));b.isDirty=!1;b.hasRendered=!0;q(b,"afterRender")};
a.prototype.redraw=function(){var b=this.isDirty||this.isDirtyData;this.translate();this.render();b&&delete this.kdTree};a.prototype.searchPoint=function(b,a){var c=this.xAxis,d=this.yAxis,e=this.chart.inverted;return this.searchKDTree({clientX:e?c.len-b.chartY+c.pos:b.chartX-c.pos,plotY:e?d.len-b.chartX+d.pos:b.chartY-d.pos},a,b)};a.prototype.buildKDTree=function(b){function a(b,d,e){var f=b&&b.length;if(f){var h=c.kdAxisArray[d%e];b.sort(function(b,a){return b[h]-a[h]});f=Math.floor(f/2);return{point:b[f],
left:a(b.slice(0,f),d+1,e),right:a(b.slice(f+1),d+1,e)}}}this.buildingKdTree=!0;var c=this,d=-1<c.options.findNearestPointBy.indexOf("y")?2:1;delete c.kdTree;ca(function(){c.kdTree=a(c.getValidPoints(null,!c.directTouch),d,d);c.buildingKdTree=!1},c.options.kdNow||b&&"touchstart"===b.type?0:1)};a.prototype.searchKDTree=function(b,a,c){function d(b,a,c,n){var m=a.point,l=e.kdAxisArray[c%n],q=m,p=f(b[h])&&f(m[h])?Math.pow(b[h]-m[h],2):null;var u=f(b[g])&&f(m[g])?Math.pow(b[g]-m[g],2):null;u=(p||0)+(u||
0);m.dist=f(u)?Math.sqrt(u):Number.MAX_VALUE;m.distX=f(p)?Math.sqrt(p):Number.MAX_VALUE;l=b[l]-m[l];u=0>l?"left":"right";p=0>l?"right":"left";a[u]&&(u=d(b,a[u],c+1,n),q=u[k]<q[k]?u:m);a[p]&&Math.sqrt(l*l)<q[k]&&(b=d(b,a[p],c+1,n),q=b[k]<q[k]?b:q);return q}var e=this,h=this.kdAxisArray[0],g=this.kdAxisArray[1],k=a?"distX":"dist";a=-1<e.options.findNearestPointBy.indexOf("y")?2:1;this.kdTree||this.buildingKdTree||this.buildKDTree(c);if(this.kdTree)return d(b,this.kdTree,a,a)};a.prototype.pointPlacementToXValue=
function(){var b=this.options,a=b.pointRange,c=this.xAxis;b=b.pointPlacement;"between"===b&&(b=c.reversed?-.5:.5);return O(b)?b*(a||c.pointRange):0};a.prototype.isPointInside=function(b){var a=this.chart,c=this.xAxis,d=this.yAxis;return"undefined"!==typeof b.plotY&&"undefined"!==typeof b.plotX&&0<=b.plotY&&b.plotY<=(d?d.len:a.plotHeight)&&0<=b.plotX&&b.plotX<=(c?c.len:a.plotWidth)};a.prototype.drawTracker=function(){var b=this,a=b.options,c=a.trackByArea,d=[].concat(c?b.areaPath:b.graphPath),e=b.chart,
f=e.pointer,h=e.renderer,g=e.options.tooltip.snap,n=b.tracker,m=function(a){if(e.hoverSeries!==b)b.onMouseOver()},l="rgba(192,192,192,"+(p?.0001:.002)+")";n?n.attr({d:d}):b.graph&&(b.tracker=h.path(d).attr({visibility:b.visible?"inherit":"hidden",zIndex:2}).addClass(c?"highcharts-tracker-area":"highcharts-tracker-line").add(b.group),e.styledMode||b.tracker.attr({"stroke-linecap":"round","stroke-linejoin":"round",stroke:l,fill:c?l:"none","stroke-width":b.graph.strokeWidth()+(c?0:2*g)}),[b.tracker,
b.markerGroup,b.dataLabelsGroup].forEach(function(b){if(b&&(b.addClass("highcharts-tracker").on("mouseover",m).on("mouseout",function(b){f.onTrackerMouseOut(b)}),a.cursor&&!e.styledMode&&b.css({cursor:a.cursor}),k))b.on("touchstart",m)}));q(this,"afterDrawTracker")};a.prototype.addPoint=function(b,a,c,d,e){var f=this.options,h=this.data,g=this.chart,k=this.xAxis;k=k&&k.hasNames&&k.names;var n=f.data,m=this.xData,l;a=v(a,!0);var p={series:this};this.pointClass.prototype.applyOptions.apply(p,[b]);var u=
p.x;var r=m.length;if(this.requireSorting&&u<m[r-1])for(l=!0;r&&m[r-1]>u;)r--;this.updateParallelArrays(p,"splice",r,0,0);this.updateParallelArrays(p,r);k&&p.name&&(k[u]=p.name);n.splice(r,0,b);if(l||this.processedData)this.data.splice(r,0,null),this.processData();"point"===f.legendType&&this.generatePoints();c&&(h[0]&&h[0].remove?h[0].remove(!1):(h.shift(),this.updateParallelArrays(p,"shift"),n.shift()));!1!==e&&q(this,"addPoint",{point:p});this.isDirtyData=this.isDirty=!0;a&&g.redraw(d)};a.prototype.removePoint=
function(b,a,c){var e=this,f=e.data,h=f[b],g=e.points,k=e.chart,n=function(){g&&g.length===f.length&&g.splice(b,1);f.splice(b,1);e.options.data.splice(b,1);e.updateParallelArrays(h||{series:e},"splice",b,1);h&&h.destroy();e.isDirty=!0;e.isDirtyData=!0;a&&k.redraw()};d(c,k);a=v(a,!0);h?h.firePointEvent("remove",null,n):n()};a.prototype.remove=function(b,a,c,d){function e(){f.destroy(d);h.isDirtyLegend=h.isDirtyBox=!0;h.linkSeries();v(b,!0)&&h.redraw(a)}var f=this,h=f.chart;!1!==c?q(f,"remove",null,
e):e()};a.prototype.update=function(a,d){a=c(a,this.userOptions);q(this,"update",{options:a});var e=this,f=e.chart,h=e.userOptions,g=e.initialType||e.type,k=f.options.plotOptions,n=A[g].prototype,m=e.finishedAnimating&&{animation:!1},l={},p=["eventOptions","navigatorSeries","baseSeries"],r=a.type||h.type||f.options.chart.type,z=!(this.hasDerivedData||r&&r!==this.type||"undefined"!==typeof a.pointStart||"undefined"!==typeof a.pointInterval||"undefined"!==typeof a.relativeXValue||a.joinBy||a.mapData||
e.hasOptionChanged("dataGrouping")||e.hasOptionChanged("pointStart")||e.hasOptionChanged("pointInterval")||e.hasOptionChanged("pointIntervalUnit")||e.hasOptionChanged("keys"));r=r||g;z&&(p.push("data","isDirtyData","points","processedData","processedXData","processedYData","xIncrement","cropped","_hasPointMarkers","_hasPointLabels","clips","nodes","layout","level","mapMap","mapData","minY","maxY","minX","maxX"),!1!==a.visible&&p.push("area","graph"),e.parallelArrays.forEach(function(b){p.push(b+"Data")}),
a.data&&(a.dataSorting&&u(e.options.dataSorting,a.dataSorting),this.setData(a.data,!1)));a=T(h,m,{index:"undefined"===typeof h.index?e.index:h.index,pointStart:v(k&&k.series&&k.series.pointStart,h.pointStart,e.xData[0])},!z&&{data:e.options.data},a);z&&a.data&&(a.data=e.options.data);p=["group","markerGroup","dataLabelsGroup","transformGroup","shadowGroup"].concat(p);p.forEach(function(b){p[b]=e[b];delete e[b]});k=!1;if(A[r]){if(k=r!==e.type,e.remove(!1,!1,!1,!0),k)if(Object.setPrototypeOf)Object.setPrototypeOf(e,
A[r].prototype);else{m=Object.hasOwnProperty.call(e,"hcEvents")&&e.hcEvents;for(w in n)e[w]=void 0;u(e,A[r].prototype);m?e.hcEvents=m:delete e.hcEvents}}else b(17,!0,f,{missingModuleFor:r});p.forEach(function(b){e[b]=p[b]});e.init(f,a);if(z&&this.points){a=e.options;if(!1===a.visible)l.graphic=1,l.dataLabel=1;else if(!e._hasPointLabels){n=a.marker;var w=a.dataLabels;h=h.marker||{};!n||!1!==n.enabled&&h.symbol===n.symbol&&h.height===n.height&&h.width===n.width||(l.graphic=1);w&&!1===w.enabled&&(l.dataLabel=
1)}h=0;for(n=this.points;h<n.length;h++)(w=n[h])&&w.series&&(w.resolveColor(),Object.keys(l).length&&w.destroyElements(l),!1===a.showInLegend&&w.legendItem&&f.legend.destroyItem(w))}e.initialType=g;f.linkSeries();k&&e.linkedSeries.length&&(e.isDirtyData=!0);q(this,"afterUpdate");v(d,!0)&&f.redraw(z?void 0:!1)};a.prototype.setName=function(b){this.name=this.options.name=this.userOptions.name=b;this.chart.isDirtyLegend=!0};a.prototype.hasOptionChanged=function(b){var a=this.options[b],c=this.chart.options.plotOptions,
d=this.userOptions[b];return d?a!==d:a!==v(c&&c[this.type]&&c[this.type][b],c&&c.series&&c.series[b],a)};a.prototype.onMouseOver=function(){var b=this.chart,a=b.hoverSeries;b.pointer.setHoverChartIndex();if(a&&a!==this)a.onMouseOut();this.options.events.mouseOver&&q(this,"mouseOver");this.setState("hover");b.hoverSeries=this};a.prototype.onMouseOut=function(){var b=this.options,a=this.chart,c=a.tooltip,d=a.hoverPoint;a.hoverSeries=null;if(d)d.onMouseOut();this&&b.events.mouseOut&&q(this,"mouseOut");
!c||this.stickyTracking||c.shared&&!this.noSharedTooltip||c.hide();a.series.forEach(function(b){b.setState("",!0)})};a.prototype.setState=function(b,a){var c=this,d=c.options,e=c.graph,f=d.inactiveOtherPoints,h=d.states,g=v(h[b||"normal"]&&h[b||"normal"].animation,c.chart.options.chart.animation),k=d.lineWidth,n=0,m=d.opacity;b=b||"";if(c.state!==b&&([c.group,c.markerGroup,c.dataLabelsGroup].forEach(function(a){a&&(c.state&&a.removeClass("highcharts-series-"+c.state),b&&a.addClass("highcharts-series-"+
b))}),c.state=b,!c.chart.styledMode)){if(h[b]&&!1===h[b].enabled)return;b&&(k=h[b].lineWidth||k+(h[b].lineWidthPlus||0),m=v(h[b].opacity,m));if(e&&!e.dashstyle&&O(k))for(d={"stroke-width":k},e.animate(d,g);c["zone-graph-"+n];)c["zone-graph-"+n].animate(d,g),n+=1;f||[c.group,c.markerGroup,c.dataLabelsGroup,c.labelBySeries].forEach(function(b){b&&b.animate({opacity:m},g)})}a&&f&&c.points&&c.setAllPointsToState(b||void 0)};a.prototype.setAllPointsToState=function(b){this.points.forEach(function(a){a.setState&&
a.setState(b)})};a.prototype.setVisible=function(b,a){var c=this,d=c.chart,e=d.options.chart.ignoreHiddenSeries,f=c.visible,h=(c.visible=b=c.options.visible=c.userOptions.visible="undefined"===typeof b?!f:b)?"show":"hide";["group","dataLabelsGroup","markerGroup","tracker","tt"].forEach(function(b){if(c[b])c[b][h]()});if(d.hoverSeries===c||(d.hoverPoint&&d.hoverPoint.series)===c)c.onMouseOut();c.legendItem&&d.legend.colorizeItem(c,b);c.isDirty=!0;c.options.stacking&&d.series.forEach(function(b){b.options.stacking&&
b.visible&&(b.isDirty=!0)});c.linkedSeries.forEach(function(a){a.setVisible(b,!1)});e&&(d.isDirtyBox=!0);q(c,h);!1!==a&&d.redraw()};a.prototype.show=function(){this.setVisible(!0)};a.prototype.hide=function(){this.setVisible(!1)};a.prototype.select=function(b){this.selected=b=this.options.selected="undefined"===typeof b?!this.selected:b;this.checkbox&&(this.checkbox.checked=b);q(this,b?"select":"unselect")};a.prototype.shouldShowTooltip=function(b,a,c){void 0===c&&(c={});c.series=this;c.visiblePlotOnly=
!0;return this.chart.isInsidePlot(b,a,c)};a.defaultOptions=H;a.types=t.seriesTypes;a.registerType=t.registerSeriesType;return a}();u(a.prototype,{axisTypes:["xAxis","yAxis"],coll:"series",colorCounter:0,cropShoulder:1,directTouch:!1,drawLegendSymbol:C.drawLineMarker,isCartesian:!0,kdAxisArray:["clientX","plotY"],parallelArrays:["x","y"],pointClass:B,requireSorting:!0,sorted:!0});t.series=a;"";"";return a});K(g,"Extensions/ScrollablePlotArea.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/Axis/Axis.js"],
g["Core/Chart/Chart.js"],g["Core/Series/Series.js"],g["Core/Renderer/RendererRegistry.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B){var A=a.stop,t=B.addEvent,r=B.createElement,l=B.defined,e=B.merge,d=B.pick;t(x,"afterSetChartSize",function(a){var d=this.options.chart.scrollablePlotArea,h=d&&d.minWidth;d=d&&d.minHeight;if(!this.renderer.forExport){if(h){if(this.scrollablePixelsX=h=Math.max(0,h-this.chartWidth)){this.scrollablePlotBox=this.renderer.scrollablePlotBox=e(this.plotBox);this.plotBox.width=
this.plotWidth+=h;this.inverted?this.clipBox.height+=h:this.clipBox.width+=h;var p={1:{name:"right",value:h}}}}else d&&(this.scrollablePixelsY=h=Math.max(0,d-this.chartHeight),l(h)&&(this.scrollablePlotBox=this.renderer.scrollablePlotBox=e(this.plotBox),this.plotBox.height=this.plotHeight+=h,this.inverted?this.clipBox.width+=h:this.clipBox.height+=h,p={2:{name:"bottom",value:h}}));p&&!a.skipAxes&&this.axes.forEach(function(a){p[a.side]?a.getPlotLinePath=function(){var d=p[a.side].name,e=this[d];this[d]=
e-p[a.side].value;var h=g.prototype.getPlotLinePath.apply(this,arguments);this[d]=e;return h}:(a.setAxisSize(),a.setAxisTranslation())})}});t(x,"render",function(){this.scrollablePixelsX||this.scrollablePixelsY?(this.setUpScrolling&&this.setUpScrolling(),this.applyFixed()):this.fixedDiv&&this.applyFixed()});x.prototype.setUpScrolling=function(){var a=this,d={WebkitOverflowScrolling:"touch",overflowX:"hidden",overflowY:"hidden"};this.scrollablePixelsX&&(d.overflowX="auto");this.scrollablePixelsY&&
(d.overflowY="auto");this.scrollingParent=r("div",{className:"highcharts-scrolling-parent"},{position:"relative"},this.renderTo);this.scrollingContainer=r("div",{className:"highcharts-scrolling"},d,this.scrollingParent);var e;t(this.scrollingContainer,"scroll",function(){a.pointer&&(delete a.pointer.chartPosition,a.hoverPoint&&(e=a.hoverPoint),a.pointer.runPointActions(void 0,e,!0))});this.innerContainer=r("div",{className:"highcharts-inner-container"},null,this.scrollingContainer);this.innerContainer.appendChild(this.container);
this.setUpScrolling=null};x.prototype.moveFixedElements=function(){var a=this.container,d=this.fixedRenderer,e=".highcharts-breadcrumbs-group .highcharts-contextbutton .highcharts-credits .highcharts-legend .highcharts-legend-checkbox .highcharts-navigator-series .highcharts-navigator-xaxis .highcharts-navigator-yaxis .highcharts-navigator .highcharts-reset-zoom .highcharts-drillup-button .highcharts-scrollbar .highcharts-subtitle .highcharts-title".split(" "),g;this.scrollablePixelsX&&!this.inverted?
g=".highcharts-yaxis":this.scrollablePixelsX&&this.inverted?g=".highcharts-xaxis":this.scrollablePixelsY&&!this.inverted?g=".highcharts-xaxis":this.scrollablePixelsY&&this.inverted&&(g=".highcharts-yaxis");g&&e.push(""+g+":not(.highcharts-radial-axis)",""+g+"-labels:not(.highcharts-radial-axis-labels)");e.forEach(function(e){[].forEach.call(a.querySelectorAll(e),function(a){(a.namespaceURI===d.SVG_NS?d.box:d.box.parentNode).appendChild(a);a.style.pointerEvents="auto"})})};x.prototype.applyFixed=function(){var a=
!this.fixedDiv,e=this.options.chart,g=e.scrollablePlotArea,l=C.getRendererType();a?(this.fixedDiv=r("div",{className:"highcharts-fixed"},{position:"absolute",overflow:"hidden",pointerEvents:"none",zIndex:(e.style&&e.style.zIndex||0)+2,top:0},null,!0),this.scrollingContainer&&this.scrollingContainer.parentNode.insertBefore(this.fixedDiv,this.scrollingContainer),this.renderTo.style.overflow="visible",this.fixedRenderer=e=new l(this.fixedDiv,this.chartWidth,this.chartHeight,this.options.chart.style),
this.scrollableMask=e.path().attr({fill:this.options.chart.backgroundColor||"#fff","fill-opacity":d(g.opacity,.85),zIndex:-1}).addClass("highcharts-scrollable-mask").add(),t(this,"afterShowResetZoom",this.moveFixedElements),t(this,"afterApplyDrilldown",this.moveFixedElements),t(this,"afterLayOutTitles",this.moveFixedElements)):this.fixedRenderer.setSize(this.chartWidth,this.chartHeight);if(this.scrollableDirty||a)this.scrollableDirty=!1,this.moveFixedElements();e=this.chartWidth+(this.scrollablePixelsX||
0);l=this.chartHeight+(this.scrollablePixelsY||0);A(this.container);this.container.style.width=e+"px";this.container.style.height=l+"px";this.renderer.boxWrapper.attr({width:e,height:l,viewBox:[0,0,e,l].join(" ")});this.chartBackground.attr({width:e,height:l});this.scrollingContainer.style.height=this.chartHeight+"px";a&&(g.scrollPositionX&&(this.scrollingContainer.scrollLeft=this.scrollablePixelsX*g.scrollPositionX),g.scrollPositionY&&(this.scrollingContainer.scrollTop=this.scrollablePixelsY*g.scrollPositionY));
l=this.axisOffset;a=this.plotTop-l[0]-1;g=this.plotLeft-l[3]-1;e=this.plotTop+this.plotHeight+l[2]+1;l=this.plotLeft+this.plotWidth+l[1]+1;var D=this.plotLeft+this.plotWidth-(this.scrollablePixelsX||0),x=this.plotTop+this.plotHeight-(this.scrollablePixelsY||0);a=this.scrollablePixelsX?[["M",0,a],["L",this.plotLeft-1,a],["L",this.plotLeft-1,e],["L",0,e],["Z"],["M",D,a],["L",this.chartWidth,a],["L",this.chartWidth,e],["L",D,e],["Z"]]:this.scrollablePixelsY?[["M",g,0],["L",g,this.plotTop-1],["L",l,this.plotTop-
1],["L",l,0],["Z"],["M",g,x],["L",g,this.chartHeight],["L",l,this.chartHeight],["L",l,x],["Z"]]:[["M",0,0]];"adjustHeight"!==this.redrawTrigger&&this.scrollableMask.attr({d:a})};t(g,"afterInit",function(){this.chart.scrollableDirty=!0});t(F,"show",function(){this.chart.scrollableDirty=!0});""});K(g,"Core/Axis/Stacking/StackItem.js",[g["Core/FormatUtilities.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x){var A=a.format,C=g.series,B=x.destroyObjectProperties,H=x.pick,
t=x.isNumber;a=function(){function a(a,e,d,h,g){var k=a.chart.inverted,m=a.reversed;this.axis=a;a=this.isNegative=!!d!==!!m;this.options=e=e||{};this.x=h;this.cumulative=this.total=null;this.points={};this.hasValidPoints=!1;this.stack=g;this.rightCliff=this.leftCliff=0;this.alignOptions={align:e.align||(k?a?"left":"right":"center"),verticalAlign:e.verticalAlign||(k?"middle":a?"bottom":"top"),y:e.y,x:e.x};this.textAlign=e.textAlign||(k?a?"right":"left":"center")}a.prototype.destroy=function(){B(this,
this.axis)};a.prototype.render=function(a){var e=this.axis.chart,d=this.options,h=d.format;h=h?A(h,this,e):d.formatter.call(this);this.label?this.label.attr({text:h,visibility:"hidden"}):(this.label=e.renderer.label(h,null,void 0,d.shape,void 0,void 0,d.useHTML,!1,"stack-labels"),h={r:d.borderRadius||0,text:h,padding:H(d.padding,5),visibility:"hidden"},e.styledMode||(h.fill=d.backgroundColor,h.stroke=d.borderColor,h["stroke-width"]=d.borderWidth,this.label.css(d.style||{})),this.label.attr(h),this.label.added||
this.label.add(a));this.label.labelrank=e.plotSizeY};a.prototype.setOffset=function(a,e,d,h,g,k){var m=this.alignOptions,l=this.axis,r=this.label,E=this.options,A=this.textAlign,y=l.chart;a=this.getStackBox({xOffset:a,width:e,boxBottom:d,boxTop:h,defaultX:g,xAxis:k});g=m.verticalAlign;r&&a&&(e=r.getBBox(),d=r.padding,h="justify"===H(E.overflow,"justify"),m.x=E.x||0,m.y=E.y||0,g=this.adjustStackPosition({labelBox:e,verticalAlign:g,textAlign:A}),A=g.x,g=g.y,a.x-=A,a.y-=g,r.align(m,!1,a),(A=y.isInsidePlot(r.alignAttr.x+
m.x+A,r.alignAttr.y+m.y+g))||(h=!1),h&&C.prototype.justifyDataLabel.call(l,r,m,r.alignAttr,e,a),r.attr({x:r.alignAttr.x,y:r.alignAttr.y,rotation:E.rotation,rotationOriginX:e.width/2,rotationOriginY:e.height/2}),H(!h&&E.crop,!0)&&(A=t(r.x)&&t(r.y)&&y.isInsidePlot(r.x-d+r.width,r.y)&&y.isInsidePlot(r.x+d,r.y)),r[A?"show":"hide"]())};a.prototype.adjustStackPosition=function(a){var e=a.labelBox,d={bottom:0,middle:1,top:2,right:1,center:0,left:-1};return{x:e.width/2+e.width/2*d[a.textAlign],y:e.height/
2*d[a.verticalAlign]}};a.prototype.getStackBox=function(a){var e=this.axis,d=e.chart,h=a.boxTop,g=a.defaultX,k=a.xOffset,l=a.width,r=a.boxBottom;h=e.stacking.usePercentage?100:H(h,this.total,0);h=e.toPixels(h);a=H(g,(a.xAxis||d.xAxis[0]).toPixels(this.x))+k;e=e.toPixels(r?r:0);e=Math.abs(h-e);r=this.isNegative;return d.inverted?{x:(r?h:h-e)-d.plotLeft,y:a-d.plotTop,width:e,height:l}:{x:a-d.plotLeft,y:(r?h-e:h)-d.plotTop,width:l,height:e}};return a}();"";return a});K(g,"Core/Axis/Stacking/StackingAxis.js",
[g["Core/Animation/AnimationUtilities.js"],g["Core/Axis/Axis.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Axis/Stacking/StackItem.js"],g["Core/Utilities.js"]],function(a,g,x,F,C){function A(){var b=this,a=b.inverted;b.yAxis.forEach(function(b){b.stacking&&b.stacking.stacks&&b.hasVisibleSeries&&(b.stacking.oldStacks=b.stacking.stacks)});b.series.forEach(function(c){var d=c.xAxis&&c.xAxis.options||{};!c.options.stacking||!0!==c.visible&&!1!==b.options.chart.ignoreHiddenSeries||(c.stackKey=[c.type,
f(c.options.stack,""),a?d.top:d.left,a?d.height:d.width].join())})}function H(){var b=this.stacking;if(b){var a=b.stacks;w(a,function(b,c){E(b);a[c]=null});b&&b.stackTotalGroup&&b.stackTotalGroup.destroy()}}function t(){"yAxis"!==this.coll||this.stacking||(this.stacking=new n(this))}function r(b,a,c,d){!I(b)||b.x!==a||d&&b.stackKey!==d?b={x:a,index:0,key:d,stackKey:d}:b.index++;b.key=[c,a,b.index].join();return b}function l(){var b=this,a=b.stackKey,c=b.yAxis.stacking.stacks,d=b.processedXData,e=
b[b.options.stacking+"Stacker"],f;e&&[a,"-"+a].forEach(function(a){for(var h=d.length,g,k;h--;)g=d[h],f=b.getStackIndicator(f,g,b.index,a),(k=(g=c[a]&&c[a][g])&&g.points[f.key])&&e.call(b,k,g,h)})}function e(b,a,c){a=a.total?100/a.total:0;b[0]=D(b[0]*a);b[1]=D(b[1]*a);this.stackedYData[c]=b[1]}function d(){var b=this.yAxis.stacking;this.options.centerInCategory&&(this.is("column")||this.is("columnrange"))&&!this.options.stacking&&1<this.chart.series.length?k.setStackedPoints.call(this,"group"):b&&
w(b.stacks,function(a,c){"group"===c.slice(-5)&&(w(a,function(b){return b.destroy()}),delete b.stacks[c])})}function h(b){var a=this.chart,c=b||this.options.stacking;if(c&&(!0===this.visible||!1===a.options.chart.ignoreHiddenSeries)){var d=this.processedXData,e=this.processedYData,h=[],g=e.length,k=this.options,n=k.threshold,m=f(k.startFromThreshold&&n,0);k=k.stack;b=b?""+this.type+",".concat(c):this.stackKey;var l="-"+b,p=this.negStacks;a="group"===c?a.yAxis[0]:this.yAxis;var u=a.stacking.stacks,
r=a.stacking.oldStacks,w,t;a.stacking.stacksTouched+=1;for(t=0;t<g;t++){var E=d[t];var A=e[t];var x=this.getStackIndicator(x,E,this.index);var C=x.key;var B=(w=p&&A<(m?0:n))?l:b;u[B]||(u[B]={});u[B][E]||(r[B]&&r[B][E]?(u[B][E]=r[B][E],u[B][E].total=null):u[B][E]=new F(a,a.options.stackLabels,!!w,E,k));B=u[B][E];null!==A?(B.points[C]=B.points[this.index]=[f(B.cumulative,m)],I(B.cumulative)||(B.base=C),B.touched=a.stacking.stacksTouched,0<x.index&&!1===this.singleStacks&&(B.points[C][0]=B.points[this.index+
","+E+",0"][0])):B.points[C]=B.points[this.index]=null;"percent"===c?(w=w?b:l,p&&u[w]&&u[w][E]?(w=u[w][E],B.total=w.total=Math.max(w.total,B.total)+Math.abs(A)||0):B.total=D(B.total+(Math.abs(A)||0))):"group"===c?(y(A)&&(A=A[0]),null!==A&&(B.total=(B.total||0)+1)):B.total=D(B.total+(A||0));B.cumulative="group"===c?(B.total||1)-1:f(B.cumulative,m)+(A||0);null!==A&&(B.points[C].push(B.cumulative),h[t]=B.cumulative,B.hasValidPoints=!0)}"percent"===c&&(a.stacking.usePercentage=!0);"group"!==c&&(this.stackedYData=
h);a.stacking.oldStacks={}}}var m=a.getDeferredAnimation,k=x.series.prototype,p=C.addEvent,D=C.correctFloat,I=C.defined,E=C.destroyObjectProperties,L=C.fireEvent,y=C.isArray,c=C.isNumber,w=C.objectEach,f=C.pick,n=function(){function b(b){this.oldStacks={};this.stacks={};this.stacksTouched=0;this.axis=b}b.prototype.buildStacks=function(){var b=this.axis,a=b.series,c=b.options.reversedStacks,d=a.length,e;this.usePercentage=!1;for(e=d;e--;){var f=a[c?e:d-e-1];f.setStackedPoints();f.setGroupedPoints()}for(e=
0;e<d;e++)a[e].modifyStacks();L(b,"afterBuildStacks")};b.prototype.cleanStacks=function(){if(this.oldStacks)var b=this.stacks=this.oldStacks;w(b,function(b){w(b,function(b){b.cumulative=b.total})})};b.prototype.resetStacks=function(){var b=this;w(this.stacks,function(a){w(a,function(d,e){c(d.touched)&&d.touched<b.stacksTouched?(d.destroy(),delete a[e]):(d.total=null,d.cumulative=null)})})};b.prototype.renderStackTotals=function(){var b=this.axis,a=b.chart,c=a.renderer,d=this.stacks;b=m(a,b.options.stackLabels&&
b.options.stackLabels.animation||!1);var e=this.stackTotalGroup=this.stackTotalGroup||c.g("stack-labels").attr({zIndex:6,opacity:0}).add();e.translate(a.plotLeft,a.plotTop);w(d,function(b){w(b,function(b){b.render(e)})});e.animate({opacity:1},b)};return b}(),b;(function(b){var a=[];b.compose=function(b,c,f){-1===a.indexOf(b)&&(a.push(b),p(b,"init",t),p(b,"destroy",H));-1===a.indexOf(c)&&(a.push(c),c.prototype.getStacks=A);-1===a.indexOf(f)&&(a.push(f),b=f.prototype,b.getStackIndicator=r,b.modifyStacks=
l,b.percentStacker=e,b.setGroupedPoints=d,b.setStackedPoints=h)}})(b||(b={}));return b});K(g,"Series/Line/LineSeries.js",[g["Core/Series/Series.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x){var A=this&&this.__extends||function(){var a=function(g,r){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var d in e)e.hasOwnProperty(d)&&(a[d]=e[d])};return a(g,r)};return function(g,r){function l(){this.constructor=g}
a(g,r);g.prototype=null===r?Object.create(r):(l.prototype=r.prototype,new l)}}(),C=x.defined,B=x.merge;x=function(g){function t(){var a=null!==g&&g.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}A(t,g);t.prototype.drawGraph=function(){var a=this,g=this.options,e=(this.gappedPath||this.getGraphPath).call(this),d=this.chart.styledMode,h=[["graph","highcharts-graph"]];d||h[0].push(g.lineColor||this.color||"#cccccc",g.dashStyle);h=a.getZonesGraphs(h);h.forEach(function(h,
k){var m=h[0],l=a[m],r=l?"animate":"attr";l?(l.endX=a.preventGraphAnimation?null:e.xMap,l.animate({d:e})):e.length&&(a[m]=l=a.chart.renderer.path(e).addClass(h[1]).attr({zIndex:1}).add(a.group));l&&!d&&(m={stroke:h[2],"stroke-width":g.lineWidth||0,fill:a.fillGraph&&a.color||"none"},h[3]?m.dashstyle=h[3]:"square"!==g.linecap&&(m["stroke-linecap"]=m["stroke-linejoin"]="round"),l[r](m).shadow(2>k&&g.shadow));l&&(l.startX=e.xMap,l.isArea=e.isArea)})};t.prototype.getGraphPath=function(a,g,e){var d=this,
h=d.options,m=[],k=[],l,r=h.step;a=a||d.points;var t=a.reversed;t&&a.reverse();(r={right:1,center:2}[r]||r&&3)&&t&&(r=4-r);a=this.getValidPoints(a,!1,!(h.connectNulls&&!g&&!e));a.forEach(function(p,t){var y=p.plotX,c=p.plotY,w=a[t-1];(p.leftCliff||w&&w.rightCliff)&&!e&&(l=!0);p.isNull&&!C(g)&&0<t?l=!h.connectNulls:p.isNull&&!g?l=!0:(0===t||l?t=[["M",p.plotX,p.plotY]]:d.getPointSpline?t=[d.getPointSpline(a,p,t)]:r?(t=1===r?[["L",w.plotX,c]]:2===r?[["L",(w.plotX+y)/2,w.plotY],["L",(w.plotX+y)/2,c]]:
[["L",y,w.plotY]],t.push(["L",y,c])):t=[["L",y,c]],k.push(p.x),r&&(k.push(p.x),2===r&&k.push(p.x)),m.push.apply(m,t),l=!1)});m.xMap=k;return d.graphPath=m};t.prototype.getZonesGraphs=function(a){this.zones.forEach(function(g,e){e=["zone-graph-"+e,"highcharts-graph highcharts-zone-graph-"+e+" "+(g.className||"")];this.chart.styledMode||e.push(g.color||this.color,g.dashStyle||this.options.dashStyle);a.push(e)},this);return a};t.defaultOptions=B(a.defaultOptions,{});return t}(a);g.registerSeriesType("line",
x);"";return x});K(g,"Series/Area/AreaSeries.js",[g["Core/Color/Color.js"],g["Core/Legend/LegendSymbol.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x,F){var A=this&&this.__extends||function(){var a=function(d,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e])};return a(d,e)};return function(d,e){function h(){this.constructor=d}a(d,e);d.prototype=null===e?Object.create(e):
(h.prototype=e.prototype,new h)}}(),B=a.parse,H=x.seriesTypes.line;a=F.extend;var t=F.merge,r=F.objectEach,l=F.pick;F=function(a){function d(){var d=null!==a&&a.apply(this,arguments)||this;d.data=void 0;d.options=void 0;d.points=void 0;return d}A(d,a);d.prototype.drawGraph=function(){this.areaPath=[];a.prototype.drawGraph.apply(this);var d=this,e=this.areaPath,g=this.options,p=[["area","highcharts-area",this.color,g.fillColor]];this.zones.forEach(function(a,e){p.push(["zone-area-"+e,"highcharts-area highcharts-zone-area-"+
e+" "+a.className,a.color||d.color,a.fillColor||g.fillColor])});p.forEach(function(a){var h=a[0],k={},m=d[h],p=m?"animate":"attr";m?(m.endX=d.preventGraphAnimation?null:e.xMap,m.animate({d:e})):(k.zIndex=0,m=d[h]=d.chart.renderer.path(e).addClass(a[1]).add(d.group),m.isArea=!0);d.chart.styledMode||(k.fill=l(a[3],B(a[2]).setOpacity(l(g.fillOpacity,.75)).get()));m[p](k);m.startX=e.xMap;m.shiftUnit=g.step?2:1})};d.prototype.getGraphPath=function(a){var d=H.prototype.getGraphPath,e=this.options,h=e.stacking,
g=this.yAxis,r=[],t=[],A=this.index,y=g.stacking.stacks[this.stackKey],c=e.threshold,w=Math.round(g.getThreshold(e.threshold));e=l(e.connectNulls,"percent"===h);var f=function(b,d,e){var f=a[b];b=h&&y[f.x].points[A];var n=f[e+"Null"]||0;e=f[e+"Cliff"]||0;f=!0;if(e||n){var k=(n?b[0]:b[1])+e;var m=b[0]+e;f=!!n}else!h&&a[d]&&a[d].isNull&&(k=m=c);"undefined"!==typeof k&&(t.push({plotX:z,plotY:null===k?w:g.getThreshold(k),isNull:f,isCliff:!0}),r.push({plotX:z,plotY:null===m?w:g.getThreshold(m),doCurve:!1}))};
a=a||this.points;h&&(a=this.getStackPoints(a));for(var n=0,b=a.length;n<b;++n){h||(a[n].leftCliff=a[n].rightCliff=a[n].leftNull=a[n].rightNull=void 0);var u=a[n].isNull;var z=l(a[n].rectPlotX,a[n].plotX);var q=h?l(a[n].yBottom,w):w;if(!u||e)e||f(n,n-1,"left"),u&&!h&&e||(t.push(a[n]),r.push({x:n,plotX:z,plotY:q})),e||f(n,n+1,"right")}f=d.call(this,t,!0,!0);r.reversed=!0;u=d.call(this,r,!0,!0);(q=u[0])&&"M"===q[0]&&(u[0]=["L",q[1],q[2]]);u=f.concat(u);u.length&&u.push(["Z"]);d=d.call(this,t,!1,e);u.xMap=
f.xMap;this.areaPath=u;return d};d.prototype.getStackPoints=function(a){var d=this,e=[],h=[],g=this.xAxis,t=this.yAxis,A=t.stacking.stacks[this.stackKey],x={},y=t.series,c=y.length,w=t.options.reversedStacks?1:-1,f=y.indexOf(d);a=a||this.points;if(this.options.stacking){for(var n=0;n<a.length;n++)a[n].leftNull=a[n].rightNull=void 0,x[a[n].x]=a[n];r(A,function(b,a){null!==b.total&&h.push(a)});h.sort(function(b,a){return b-a});var b=y.map(function(b){return b.visible});h.forEach(function(a,n){var k=
0,m,p;if(x[a]&&!x[a].isNull)e.push(x[a]),[-1,1].forEach(function(e){var g=1===e?"rightNull":"leftNull",k=A[h[n+e]],l=0;if(k)for(var q=f;0<=q&&q<c;){var u=y[q].index;m=k.points[u];m||(u===d.index?x[a][g]=!0:b[q]&&(p=A[a].points[u])&&(l-=p[1]-p[0]));q+=w}x[a][1===e?"rightCliff":"leftCliff"]=l});else{for(var u=f;0<=u&&u<c;){if(m=A[a].points[y[u].index]){k=m[1];break}u+=w}k=l(k,0);k=t.translate(k,0,1,0,1);e.push({isNull:!0,plotX:g.translate(a,0,0,0,1),x:a,plotY:k,yBottom:k})}})}return e};d.defaultOptions=
t(H.defaultOptions,{threshold:0});return d}(H);a(F.prototype,{singleStacks:!1,drawLegendSymbol:g.drawRectangle});x.registerSeriesType("area",F);"";return F});K(g,"Series/Spline/SplineSeries.js",[g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g){var A=this&&this.__extends||function(){var a=function(g,r){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var d in e)e.hasOwnProperty(d)&&(a[d]=e[d])};return a(g,r)};return function(g,
r){function l(){this.constructor=g}a(g,r);g.prototype=null===r?Object.create(r):(l.prototype=r.prototype,new l)}}(),F=a.seriesTypes.line,C=g.merge,B=g.pick;g=function(a){function g(){var g=null!==a&&a.apply(this,arguments)||this;g.data=void 0;g.options=void 0;g.points=void 0;return g}A(g,a);g.prototype.getPointSpline=function(a,g,e){var d=g.plotX||0,h=g.plotY||0,m=a[e-1];e=a[e+1];if(m&&!m.isNull&&!1!==m.doCurve&&!g.isCliff&&e&&!e.isNull&&!1!==e.doCurve&&!g.isCliff){a=m.plotY||0;var k=e.plotX||0;e=
e.plotY||0;var l=0;var r=(1.5*d+(m.plotX||0))/2.5;var t=(1.5*h+a)/2.5;k=(1.5*d+k)/2.5;var A=(1.5*h+e)/2.5;k!==r&&(l=(A-t)*(k-d)/(k-r)+h-A);t+=l;A+=l;t>a&&t>h?(t=Math.max(a,h),A=2*h-t):t<a&&t<h&&(t=Math.min(a,h),A=2*h-t);A>e&&A>h?(A=Math.max(e,h),t=2*h-A):A<e&&A<h&&(A=Math.min(e,h),t=2*h-A);g.rightContX=k;g.rightContY=A}g=["C",B(m.rightContX,m.plotX,0),B(m.rightContY,m.plotY,0),B(r,d,0),B(t,h,0),d,h];m.rightContX=m.rightContY=void 0;return g};g.defaultOptions=C(F.defaultOptions);return g}(F);a.registerSeriesType("spline",
g);"";return g});K(g,"Series/AreaSpline/AreaSplineSeries.js",[g["Series/Spline/SplineSeries.js"],g["Core/Legend/LegendSymbol.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x,F){var A=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e])};return a(e,d)};return function(e,d){function g(){this.constructor=e}a(e,d);e.prototype=
null===d?Object.create(d):(g.prototype=d.prototype,new g)}}(),B=x.seriesTypes,H=B.area;B=B.area.prototype;var t=F.extend,r=F.merge;F=function(g){function e(){var a=null!==g&&g.apply(this,arguments)||this;a.data=void 0;a.points=void 0;a.options=void 0;return a}A(e,g);e.defaultOptions=r(a.defaultOptions,H.defaultOptions);return e}(a);t(F.prototype,{getGraphPath:B.getGraphPath,getStackPoints:B.getStackPoints,drawGraph:B.drawGraph,drawLegendSymbol:g.drawRectangle});x.registerSeriesType("areaspline",F);
"";return F});K(g,"Series/Column/ColumnSeriesDefaults.js",[],function(){"";return{borderRadius:0,centerInCategory:!1,groupPadding:.2,marker:null,pointPadding:.1,minPointLength:0,cropThreshold:50,pointRange:null,states:{hover:{halo:!1,brightness:.1},select:{color:"#cccccc",borderColor:"#000000"}},dataLabels:{align:void 0,verticalAlign:void 0,y:void 0},startFromThreshold:!0,stickyTracking:!1,tooltip:{distance:6},threshold:0,borderColor:"#ffffff"}});K(g,"Series/Column/ColumnSeries.js",[g["Core/Animation/AnimationUtilities.js"],
g["Core/Color/Color.js"],g["Series/Column/ColumnSeriesDefaults.js"],g["Core/Globals.js"],g["Core/Legend/LegendSymbol.js"],g["Core/Series/Series.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B,H,t){var r=this&&this.__extends||function(){var a=function(c,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,b){a.__proto__=b}||function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])};return a(c,d)};return function(c,d){function e(){this.constructor=
c}a(c,d);c.prototype=null===d?Object.create(d):(e.prototype=d.prototype,new e)}}(),l=a.animObject,e=g.parse,d=F.hasTouch;a=F.noop;var h=t.clamp,m=t.defined,k=t.extend,p=t.fireEvent,A=t.isArray,I=t.isNumber,E=t.merge,L=t.pick,y=t.objectEach;t=function(a){function c(){var c=null!==a&&a.apply(this,arguments)||this;c.borderWidth=void 0;c.data=void 0;c.group=void 0;c.options=void 0;c.points=void 0;return c}r(c,a);c.prototype.animate=function(a){var c=this,b=this.yAxis,d=c.options,e=this.chart.inverted,
f={},g=e?"translateX":"translateY";if(a)f.scaleY=.001,a=h(b.toPixels(d.threshold),b.pos,b.pos+b.len),e?f.translateX=a-b.len:f.translateY=a,c.clipBox&&c.setClip(),c.group.attr(f);else{var m=Number(c.group.attr(g));c.group.animate({scaleY:1},k(l(c.options.animation),{step:function(a,d){c.group&&(f[g]=m+d.pos*(b.pos-m),c.group.attr(f))}}))}};c.prototype.init=function(c,d){a.prototype.init.apply(this,arguments);var b=this;c=b.chart;c.hasRendered&&c.series.forEach(function(a){a.type===b.type&&(a.isDirty=
!0)})};c.prototype.getColumnMetrics=function(){var a=this,c=a.options,b=a.xAxis,d=a.yAxis,e=b.options.reversedStacks;e=b.reversed&&!e||!b.reversed&&e;var g={},h,k=0;!1===c.grouping?k=1:a.chart.series.forEach(function(b){var c=b.yAxis,e=b.options;if(b.type===a.type&&(b.visible||!a.chart.options.chart.ignoreHiddenSeries)&&d.len===c.len&&d.pos===c.pos){if(e.stacking&&"group"!==e.stacking){h=b.stackKey;"undefined"===typeof g[h]&&(g[h]=k++);var f=g[h]}else!1!==e.grouping&&(f=k++);b.columnIndex=f}});var m=
Math.min(Math.abs(b.transA)*(b.ordinal&&b.ordinal.slope||c.pointRange||b.closestPointRange||b.tickInterval||1),b.len),l=m*c.groupPadding,p=(m-2*l)/(k||1);c=Math.min(c.maxPointWidth||b.len,L(c.pointWidth,p*(1-2*c.pointPadding)));a.columnMetrics={width:c,offset:(p-c)/2+(l+((a.columnIndex||0)+(e?1:0))*p-m/2)*(e?-1:1),paddedWidth:p,columnCount:k};return a.columnMetrics};c.prototype.crispCol=function(a,c,b,d){var e=this.chart,f=this.borderWidth,g=-(f%2?.5:0);f=f%2?.5:1;e.inverted&&e.renderer.isVML&&(f+=
1);this.options.crisp&&(b=Math.round(a+b)+g,a=Math.round(a)+g,b-=a);d=Math.round(c+d)+f;g=.5>=Math.abs(c)&&.5<d;c=Math.round(c)+f;d-=c;g&&d&&(--c,d+=1);return{x:a,y:c,width:b,height:d}};c.prototype.adjustForMissingColumns=function(a,c,b,d){var e=this,f=this.options.stacking;if(!b.isNull&&1<d.columnCount){var g=this.yAxis.options.reversedStacks,h=0,k=g?0:-d.columnCount;y(this.yAxis.stacking&&this.yAxis.stacking.stacks,function(a){if("number"===typeof b.x){var c=a[b.x.toString()];c&&(a=c.points[e.index],
f?(a&&(h=k),c.hasValidPoints&&(g?k++:k--)):A(a)&&(a=Object.keys(c.points).filter(function(b){return!b.match(",")&&c.points[b]&&1<c.points[b].length}).map(parseFloat).sort(function(b,a){return a-b}),h=a.indexOf(e.index),k=a.length))}});a=(b.plotX||0)+((k-1)*d.paddedWidth+c)/2-c-h*d.paddedWidth}return a};c.prototype.translate=function(){var a=this,c=a.chart,b=a.options,d=a.dense=2>a.closestPointRange*a.xAxis.transA;d=a.borderWidth=L(b.borderWidth,d?0:1);var e=a.xAxis,g=a.yAxis,k=b.threshold,l=a.translatedThreshold=
g.getThreshold(k),p=L(b.minPointLength,5),r=a.getColumnMetrics(),w=r.width,y=a.pointXOffset=r.offset,v=a.dataMin,t=a.dataMax,A=a.barW=Math.max(w,1+2*d);c.inverted&&(l-=.5);b.pointPadding&&(A=Math.ceil(A));B.prototype.translate.apply(a);a.points.forEach(function(d){var f=L(d.yBottom,l),n=999+Math.abs(f),q=d.plotX||0;n=h(d.plotY,-n,g.len+n);var u=Math.min(n,f),z=Math.max(n,f)-u,D=w,x=q+y,E=A;p&&Math.abs(z)<p&&(z=p,q=!g.reversed&&!d.negative||g.reversed&&d.negative,I(k)&&I(t)&&d.y===k&&t<=k&&(g.min||
0)<k&&(v!==t||(g.max||0)<=k)&&(q=!q),u=Math.abs(u-l)>p?f-p:l-(q?p:0));m(d.options.pointWidth)&&(D=E=Math.ceil(d.options.pointWidth),x-=Math.round((D-w)/2));b.centerInCategory&&(x=a.adjustForMissingColumns(x,D,d,r));d.barX=x;d.pointWidth=D;d.tooltipPos=c.inverted?[h(g.len+g.pos-c.plotLeft-n,g.pos-c.plotLeft,g.len+g.pos-c.plotLeft),e.len+e.pos-c.plotTop-x-E/2,z]:[e.left-c.plotLeft+x+E/2,h(n+g.pos-c.plotTop,g.pos-c.plotTop,g.len+g.pos-c.plotTop),z];d.shapeType=a.pointClass.prototype.shapeType||"rect";
d.shapeArgs=a.crispCol.apply(a,d.isNull?[x,l,E,0]:[x,u,E,z])})};c.prototype.drawGraph=function(){this.group[this.dense?"addClass":"removeClass"]("highcharts-dense-data")};c.prototype.pointAttribs=function(a,c){var b=this.options,d=this.pointAttrToOptions||{},f=d.stroke||"borderColor",g=d["stroke-width"]||"borderWidth",h=a&&a.color||this.color,k=a&&a[f]||b[f]||h;d=a&&a.options.dashStyle||b.dashStyle;var n=a&&a[g]||b[g]||this[g]||0,m=L(a&&a.opacity,b.opacity,1);if(a&&this.zones.length){var l=a.getZone();
h=a.options.color||l&&(l.color||a.nonZonedColor)||this.color;l&&(k=l.borderColor||k,d=l.dashStyle||d,n=l.borderWidth||n)}c&&a&&(a=E(b.states[c],a.options.states&&a.options.states[c]||{}),c=a.brightness,h=a.color||"undefined"!==typeof c&&e(h).brighten(a.brightness).get()||h,k=a[f]||k,n=a[g]||n,d=a.dashStyle||d,m=L(a.opacity,m));f={fill:h,stroke:k,"stroke-width":n,opacity:m};d&&(f.dashstyle=d);return f};c.prototype.drawPoints=function(a){void 0===a&&(a=this.points);var c=this,b=this.chart,d=c.options,
e=b.renderer,f=d.animationLimit||250,g;a.forEach(function(a){var h=a.graphic,k=!!h,n=h&&b.pointCount<f?"animate":"attr";if(I(a.plotY)&&null!==a.y){g=a.shapeArgs;h&&a.hasNewShapeType()&&(h=h.destroy());c.enabledDataSorting&&(a.startXPos=c.xAxis.reversed?-(g?g.width||0:0):c.xAxis.width);h||(a.graphic=h=e[a.shapeType](g).add(a.group||c.group))&&c.enabledDataSorting&&b.hasRendered&&b.pointCount<f&&(h.attr({x:a.startXPos}),k=!0,n="animate");if(h&&k)h[n](E(g));if(d.borderRadius)h[n]({r:d.borderRadius});
b.styledMode||h[n](c.pointAttribs(a,a.selected&&"select")).shadow(!1!==a.allowShadow&&d.shadow,null,d.stacking&&!d.borderRadius);h&&(h.addClass(a.getClassName(),!0),h.attr({visibility:a.visible?"inherit":"hidden"}))}else h&&(a.graphic=h.destroy())})};c.prototype.drawTracker=function(a){void 0===a&&(a=this.points);var c=this,b=c.chart,e=b.pointer,f=function(a){var b=e.getPointFromEvent(a);"undefined"!==typeof b&&(e.isDirectTouch=!0,b.onMouseOver(a))},g;a.forEach(function(a){g=A(a.dataLabels)?a.dataLabels:
a.dataLabel?[a.dataLabel]:[];a.graphic&&(a.graphic.element.point=a);g.forEach(function(b){b.div?b.div.point=a:b.element.point=a})});c._hasTracking||(c.trackerGroups.forEach(function(a){if(c[a]){c[a].addClass("highcharts-tracker").on("mouseover",f).on("mouseout",function(a){e.onTrackerMouseOut(a)});if(d)c[a].on("touchstart",f);!b.styledMode&&c.options.cursor&&c[a].css({cursor:c.options.cursor})}}),c._hasTracking=!0);p(this,"afterDrawTracker")};c.prototype.remove=function(){var a=this,c=a.chart;c.hasRendered&&
c.series.forEach(function(b){b.type===a.type&&(b.isDirty=!0)});B.prototype.remove.apply(a,arguments)};c.defaultOptions=E(B.defaultOptions,x);return c}(B);k(t.prototype,{cropShoulder:0,directTouch:!0,drawLegendSymbol:C.drawRectangle,getSymbol:a,negStacks:!0,trackerGroups:["group","dataLabelsGroup"]});H.registerSeriesType("column",t);"";return t});K(g,"Core/Series/DataLabel.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/FormatUtilities.js"],g["Core/Utilities.js"]],function(a,g,x){var A=a.getDeferredAnimation,
C=g.format,B=x.defined,H=x.extend,t=x.fireEvent,r=x.isArray,l=x.isString,e=x.merge,d=x.objectEach,h=x.pick,m=x.splat,k;(function(a){function g(a,c,b,d,e){var f=this,g=this.chart,k=this.isCartesian&&g.inverted,n=this.enabledDataSorting,m=a.plotX,l=a.plotY,p=b.rotation,r=b.align,u=B(m)&&B(l)&&g.isInsidePlot(m,Math.round(l),{inverted:k,paneCoordinates:!0,series:f});l=function(b){n&&f.xAxis&&!w&&f.setDataLabelStartPos(a,c,e,u,b)};var w="justify"===h(b.overflow,n?"none":"justify");m=this.visible&&!1!==
a.visible&&B(m)&&(a.series.forceDL||n&&!w||u||h(b.inside,!!this.options.stacking)&&d&&g.isInsidePlot(m,k?d.x+1:d.y+d.height-1,{inverted:k,paneCoordinates:!0,series:f}));k=a.pos();if(m&&k){p&&c.attr({align:r});r=c.getBBox(!0);var y=[0,0];var t=g.renderer.fontMetrics(g.styledMode?void 0:b.style.fontSize,c).b;d=H({x:k[0],y:Math.round(k[1]),width:0,height:0},d);H(b,{width:r.width,height:r.height});p?(w=!1,y=g.renderer.rotCorr(t,p),t={x:d.x+(b.x||0)+d.width/2+y.x,y:d.y+(b.y||0)+{top:0,middle:.5,bottom:1}[b.verticalAlign]*
d.height},y=[r.x-Number(c.attr("x")),r.y-Number(c.attr("y"))],l(t),c[e?"attr":"animate"](t)):(l(d),c.align(b,void 0,d),t=c.alignAttr);w&&0<=d.height?this.justifyDataLabel(c,b,t,r,d,e):h(b.crop,!0)&&(d=t.x,l=t.y,d+=y[0],l+=y[1],m=g.isInsidePlot(d,l,{paneCoordinates:!0,series:f})&&g.isInsidePlot(d+r.width,l+r.height,{paneCoordinates:!0,series:f}));if(b.shape&&!p)c[e?"attr":"animate"]({anchorX:k[0],anchorY:k[1]})}e&&n&&(c.placed=!1);m||n&&!w?c.show():(c.hide(),c.placed=!1)}function k(a,c){var b=c.filter;
return b?(c=b.operator,a=a[b.property],b=b.value,">"===c&&a>b||"<"===c&&a<b||">="===c&&a>=b||"<="===c&&a<=b||"=="===c&&a==b||"==="===c&&a===b?!0:!1):!0}function p(a){void 0===a&&(a=this.points);var c=this,b=c.chart,e=c.options,f=c.hasRendered||0,g=b.renderer,p=b.options.chart,w=p.backgroundColor;p=p.plotBackgroundColor;var x=g.getContrast(l(p)&&p||l(w)&&w||"#000000"),D=e.dataLabels,E;w=D.animation;w=D.defer?A(b,w,c):{defer:0,duration:0};D=y(y(b.options.plotOptions&&b.options.plotOptions.series&&b.options.plotOptions.series.dataLabels,
b.options.plotOptions&&b.options.plotOptions[c.type]&&b.options.plotOptions[c.type].dataLabels),D);t(this,"drawDataLabels");if(r(D)||D.enabled||c._hasPointLabels){var F=c.plotGroup("dataLabelsGroup","data-labels",f?"inherit":"hidden",D.zIndex||6);F.attr({opacity:+f});!f&&(f=c.dataLabelsGroup)&&(c.visible&&F.show(),f[e.animation?"animate":"attr"]({opacity:1},w));a.forEach(function(a){E=m(y(D,a.dlOptions||a.options&&a.options.dataLabels));E.forEach(function(f,n){var m=f.enabled&&(!a.isNull||a.dataLabelOnNull)&&
k(a,f),l=a.connectors?a.connectors[n]:a.connector,p=a.dataLabels?a.dataLabels[n]:a.dataLabel,q=!p,r=h(f.distance,a.labelDistance);if(m){var u=a.getLabelConfig();var w=h(f[a.formatPrefix+"Format"],f.format);u=B(w)?C(w,u,b):(f[a.formatPrefix+"Formatter"]||f.formatter).call(u,f);w=f.style;var y=f.rotation;b.styledMode||(w.color=h(f.color,w.color,c.color,"#000000"),"contrast"===w.color?(a.contrastColor=g.getContrast(a.color||c.color),w.color=!B(r)&&f.inside||0>r||e.stacking?a.contrastColor:x):delete a.contrastColor,
e.cursor&&(w.cursor=e.cursor));var t={r:f.borderRadius||0,rotation:y,padding:f.padding,zIndex:1};if(!b.styledMode){r=f.backgroundColor;var v=f.borderColor;t.fill="auto"===r?a.color:r;t.stroke="auto"===v?a.color:v;t["stroke-width"]=f.borderWidth}d(t,function(a,b){"undefined"===typeof a&&delete t[b]})}!p||m&&B(u)&&!!p.div===!!f.useHTML&&(p.rotation&&f.rotation||p.rotation===f.rotation)||(q=!0,a.dataLabel=p=a.dataLabel&&a.dataLabel.destroy(),a.dataLabels&&(1===a.dataLabels.length?delete a.dataLabels:
delete a.dataLabels[n]),n||delete a.dataLabel,l&&(a.connector=a.connector.destroy(),a.connectors&&(1===a.connectors.length?delete a.connectors:delete a.connectors[n])));m&&B(u)?(p?t.text=u:(a.dataLabels=a.dataLabels||[],p=a.dataLabels[n]=y?g.text(u,0,0,f.useHTML).addClass("highcharts-data-label"):g.label(u,0,0,f.shape,null,null,f.useHTML,null,"data-label"),n||(a.dataLabel=p),p.addClass(" highcharts-data-label-color-"+a.colorIndex+" "+(f.className||"")+(f.useHTML?" highcharts-tracker":""))),p.options=
f,p.attr(t),b.styledMode||p.css(w).shadow(f.shadow),(n=f[a.formatPrefix+"TextPath"]||f.textPath)&&!f.useHTML&&(p.setTextPath(a.getDataLabelPath&&a.getDataLabelPath(p)||a.graphic,n),a.dataLabelPath&&!n.enabled&&(a.dataLabelPath=a.dataLabelPath.destroy())),p.added||p.add(F),c.alignDataLabel(a,p,f,null,q)):p&&p.hide()})})}t(this,"afterDrawDataLabels")}function x(a,c,b,d,e,g){var f=this.chart,h=c.align,k=c.verticalAlign,n=a.box?0:a.padding||0,m=c.x;m=void 0===m?0:m;var l=c.y;l=void 0===l?0:l;var p=(b.x||
0)+n;if(0>p){"right"===h&&0<=m?(c.align="left",c.inside=!0):m-=p;var q=!0}p=(b.x||0)+d.width-n;p>f.plotWidth&&("left"===h&&0>=m?(c.align="right",c.inside=!0):m+=f.plotWidth-p,q=!0);p=b.y+n;0>p&&("bottom"===k&&0<=l?(c.verticalAlign="top",c.inside=!0):l-=p,q=!0);p=(b.y||0)+d.height-n;p>f.plotHeight&&("top"===k&&0>=l?(c.verticalAlign="bottom",c.inside=!0):l+=f.plotHeight-p,q=!0);q&&(c.x=m,c.y=l,a.placed=!g,a.align(c,void 0,e));return q}function y(a,c){var b=[],d;if(r(a)&&!r(c))b=a.map(function(a){return e(a,
c)});else if(r(c)&&!r(a))b=c.map(function(b){return e(a,b)});else if(r(a)||r(c))for(d=Math.max(a.length,c.length);d--;)b[d]=e(a[d],c[d]);else b=e(a,c);return b}function c(a,c,b,d,e){var f=this.chart,g=f.inverted,h=this.xAxis,k=h.reversed,m=g?c.height/2:c.width/2;a=(a=a.pointWidth)?a/2:0;c.startXPos=g?e.x:k?-m-a:h.width-m+a;c.startYPos=g?k?this.yAxis.height-m+a:-m-a:e.y;d?"hidden"===c.visibility&&(c.show(),c.attr({opacity:0}).animate({opacity:1})):c.attr({opacity:1}).animate({opacity:0},void 0,c.hide);
f.hasRendered&&(b&&c.attr({x:c.startXPos,y:c.startYPos}),c.placed=!0)}var w=[];a.compose=function(a){if(-1===w.indexOf(a)){var d=a.prototype;w.push(a);d.alignDataLabel=g;d.drawDataLabels=p;d.justifyDataLabel=x;d.setDataLabelStartPos=c}}})(k||(k={}));"";return k});K(g,"Series/Column/ColumnDataLabel.js",[g["Core/Series/DataLabel.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x){var A=g.series,C=x.merge,B=x.pick,H;(function(g){function r(a,d,g,m,k){var e=this.chart.inverted,
h=a.series,l=(h.xAxis?h.xAxis.len:this.chart.plotSizeX)||0;h=(h.yAxis?h.yAxis.len:this.chart.plotSizeY)||0;var r=a.dlBox||a.shapeArgs,t=B(a.below,a.plotY>B(this.translatedThreshold,h)),y=B(g.inside,!!this.options.stacking);r&&(m=C(r),0>m.y&&(m.height+=m.y,m.y=0),r=m.y+m.height-h,0<r&&r<m.height&&(m.height-=r),e&&(m={x:h-m.y-m.height,y:l-m.x-m.width,width:m.height,height:m.width}),y||(e?(m.x+=t?0:m.width,m.width=0):(m.y+=t?m.height:0,m.height=0)));g.align=B(g.align,!e||y?"center":t?"right":"left");
g.verticalAlign=B(g.verticalAlign,e||y?"middle":t?"top":"bottom");A.prototype.alignDataLabel.call(this,a,d,g,m,k);g.inside&&a.contrastColor&&d.css({color:a.contrastColor})}var l=[];g.compose=function(e){a.compose(A);-1===l.indexOf(e)&&(l.push(e),e.prototype.alignDataLabel=r)}})(H||(H={}));return H});K(g,"Series/Bar/BarSeries.js",[g["Series/Column/ColumnSeries.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],function(a,g,x){var A=this&&this.__extends||function(){var a=function(g,r){a=
Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,e){a.__proto__=e}||function(a,e){for(var d in e)e.hasOwnProperty(d)&&(a[d]=e[d])};return a(g,r)};return function(g,r){function l(){this.constructor=g}a(g,r);g.prototype=null===r?Object.create(r):(l.prototype=r.prototype,new l)}}(),C=x.extend,B=x.merge;x=function(g){function t(){var a=null!==g&&g.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}A(t,g);t.defaultOptions=B(a.defaultOptions,{});return t}(a);
C(x.prototype,{inverted:!0});g.registerSeriesType("bar",x);"";return x});K(g,"Series/Scatter/ScatterSeriesDefaults.js",[],function(){"";return{lineWidth:0,findNearestPointBy:"xy",jitter:{x:0,y:0},marker:{enabled:!0},tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {series.name}</span><br/>',pointFormat:"x: <b>{point.x}</b><br/>y: <b>{point.y}</b><br/>"}}});K(g,"Series/Scatter/ScatterSeries.js",[g["Series/Scatter/ScatterSeriesDefaults.js"],g["Core/Series/SeriesRegistry.js"],
g["Core/Utilities.js"]],function(a,g,x){var A=this&&this.__extends||function(){var a=function(e,d){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e])};return a(e,d)};return function(e,d){function g(){this.constructor=e}a(e,d);e.prototype=null===d?Object.create(d):(g.prototype=d.prototype,new g)}}(),C=g.seriesTypes,B=C.column,H=C.line;C=x.addEvent;var t=x.extend,r=x.merge;x=function(g){function e(){var a=
null!==g&&g.apply(this,arguments)||this;a.data=void 0;a.options=void 0;a.points=void 0;return a}A(e,g);e.prototype.applyJitter=function(){var a=this,e=this.options.jitter,g=this.points.length;e&&this.points.forEach(function(d,h){["x","y"].forEach(function(k,m){var l="plot"+k.toUpperCase();if(e[k]&&!d.isNull){var p=a[k+"Axis"];var r=e[k]*p.transA;if(p&&!p.isLog){var c=Math.max(0,d[l]-r);p=Math.min(p.len,d[l]+r);m=1E4*Math.sin(h+m*g);d[l]=c+(p-c)*(m-Math.floor(m));"x"===k&&(d.clientX=d.plotX)}}})})};
e.prototype.drawGraph=function(){this.options.lineWidth?g.prototype.drawGraph.call(this):this.graph&&(this.graph=this.graph.destroy())};e.defaultOptions=r(H.defaultOptions,a);return e}(H);t(x.prototype,{drawTracker:B.prototype.drawTracker,sorted:!1,requireSorting:!1,noSharedTooltip:!0,trackerGroups:["group","markerGroup","dataLabelsGroup"],takeOrdinalPosition:!1});C(x,"afterTranslate",function(){this.applyJitter()});g.registerSeriesType("scatter",x);return x});K(g,"Series/CenteredUtilities.js",[g["Core/Globals.js"],
g["Core/Series/Series.js"],g["Core/Utilities.js"]],function(a,g,x){var A=a.deg2rad,C=x.fireEvent,B=x.isNumber,H=x.pick,t=x.relativeLength,r;(function(a){a.getCenter=function(){var a=this.options,d=this.chart,h=2*(a.slicedOffset||0),m=d.plotWidth-2*h,k=d.plotHeight-2*h,l=a.center,r=Math.min(m,k),A=a.thickness,x=a.size,F=a.innerSize||0;"string"===typeof x&&(x=parseFloat(x));"string"===typeof F&&(F=parseFloat(F));a=[H(l[0],"50%"),H(l[1],"50%"),H(x&&0>x?void 0:a.size,"100%"),H(F&&0>F?void 0:a.innerSize||
0,"0%")];!d.angular||this instanceof g||(a[3]=0);for(l=0;4>l;++l)x=a[l],d=2>l||2===l&&/%$/.test(x),a[l]=t(x,[m,k,r,a[2]][l])+(d?h:0);a[3]>a[2]&&(a[3]=a[2]);B(A)&&2*A<a[2]&&0<A&&(a[3]=a[2]-2*A);C(this,"afterGetCenter",{positions:a});return a};a.getStartAndEndRadians=function(a,d){a=B(a)?a:0;d=B(d)&&d>a&&360>d-a?d:a+360;return{start:A*(a+-90),end:A*(d+-90)}}})(r||(r={}));"";return r});K(g,"Series/Pie/PiePoint.js",[g["Core/Animation/AnimationUtilities.js"],g["Core/Series/Point.js"],g["Core/Utilities.js"]],
function(a,g,x){var A=this&&this.__extends||function(){var a=function(d,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var e in d)d.hasOwnProperty(e)&&(a[e]=d[e])};return a(d,e)};return function(d,e){function g(){this.constructor=d}a(d,e);d.prototype=null===e?Object.create(e):(g.prototype=e.prototype,new g)}}(),C=a.setAnimation,B=x.addEvent,H=x.defined;a=x.extend;var t=x.isNumber,r=x.pick,l=x.relativeLength;g=function(a){function d(){var d=
null!==a&&a.apply(this,arguments)||this;d.labelDistance=void 0;d.options=void 0;d.series=void 0;return d}A(d,a);d.prototype.getConnectorPath=function(){var a=this.labelPosition,d=this.series.options.dataLabels,e=this.connectorShapes,g=d.connectorShape;e[g]&&(g=e[g]);return g.call(this,{x:a.final.x,y:a.final.y,alignment:a.alignment},a.connectorPosition,d)};d.prototype.getTranslate=function(){return this.sliced?this.slicedTranslation:{translateX:0,translateY:0}};d.prototype.haloPath=function(a){var d=
this.shapeArgs;return this.sliced||!this.visible?[]:this.series.chart.renderer.symbols.arc(d.x,d.y,d.r+a,d.r+a,{innerR:d.r-1,start:d.start,end:d.end})};d.prototype.init=function(){var d=this;a.prototype.init.apply(this,arguments);this.name=r(this.name,"Slice");var e=function(a){d.slice("select"===a.type)};B(this,"select",e);B(this,"unselect",e);return this};d.prototype.isValid=function(){return t(this.y)&&0<=this.y};d.prototype.setVisible=function(a,d){var e=this,g=this.series,h=g.chart,m=g.options.ignoreHiddenPoint;
d=r(d,m);a!==this.visible&&(this.visible=this.options.visible=a="undefined"===typeof a?!this.visible:a,g.options.data[g.data.indexOf(this)]=this.options,["graphic","dataLabel","connector","shadowGroup"].forEach(function(d){if(e[d])e[d][a?"show":"hide"](a)}),this.legendItem&&h.legend.colorizeItem(this,a),a||"hover"!==this.state||this.setState(""),m&&(g.isDirty=!0),d&&h.redraw())};d.prototype.slice=function(a,d,e){var g=this.series;C(e,g.chart);r(d,!0);this.sliced=this.options.sliced=H(a)?a:!this.sliced;
g.options.data[g.data.indexOf(this)]=this.options;this.graphic&&this.graphic.animate(this.getTranslate());this.shadowGroup&&this.shadowGroup.animate(this.getTranslate())};return d}(g);a(g.prototype,{connectorShapes:{fixedOffset:function(a,d,g){var e=d.breakAt;d=d.touchingSliceAt;return[["M",a.x,a.y],g.softConnector?["C",a.x+("left"===a.alignment?-5:5),a.y,2*e.x-d.x,2*e.y-d.y,e.x,e.y]:["L",e.x,e.y],["L",d.x,d.y]]},straight:function(a,d){d=d.touchingSliceAt;return[["M",a.x,a.y],["L",d.x,d.y]]},crookedLine:function(a,
d,g){d=d.touchingSliceAt;var e=this.series,h=e.center[0],p=e.chart.plotWidth,r=e.chart.plotLeft;e=a.alignment;var t=this.shapeArgs.r;g=l(g.crookDistance,1);p="left"===e?h+t+(p+r-h-t)*(1-g):r+(h-t)*g;g=["L",p,a.y];h=!0;if("left"===e?p>a.x||p<d.x:p<a.x||p>d.x)h=!1;a=[["M",a.x,a.y]];h&&a.push(g);a.push(["L",d.x,d.y]);return a}}});return g});K(g,"Series/Pie/PieSeriesDefaults.js",[],function(){"";return{center:[null,null],clip:!1,colorByPoint:!0,dataLabels:{allowOverlap:!0,connectorPadding:5,connectorShape:"fixedOffset",
crookDistance:"70%",distance:30,enabled:!0,formatter:function(){return this.point.isNull?void 0:this.point.name},softConnector:!0,x:0},fillColor:void 0,ignoreHiddenPoint:!0,inactiveOtherPoints:!0,legendType:"point",marker:null,size:null,showInLegend:!1,slicedOffset:10,stickyTracking:!1,tooltip:{followPointer:!0},borderColor:"#ffffff",borderWidth:1,lineWidth:void 0,states:{hover:{brightness:.1}}}});K(g,"Series/Pie/PieSeries.js",[g["Series/CenteredUtilities.js"],g["Series/Column/ColumnSeries.js"],g["Core/Globals.js"],
g["Core/Legend/LegendSymbol.js"],g["Series/Pie/PiePoint.js"],g["Series/Pie/PieSeriesDefaults.js"],g["Core/Series/Series.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Renderer/SVG/Symbols.js"],g["Core/Utilities.js"]],function(a,g,x,F,C,B,H,t,r,l){var e=this&&this.__extends||function(){var a=function(d,e){a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,d){a.__proto__=d}||function(a,d){for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c])};return a(d,e)};return function(d,e){function c(){this.constructor=
d}a(d,e);d.prototype=null===e?Object.create(e):(c.prototype=e.prototype,new c)}}(),d=a.getStartAndEndRadians;x=x.noop;var h=l.clamp,m=l.extend,k=l.fireEvent,p=l.merge,A=l.pick,I=l.relativeLength;l=function(a){function g(){var d=null!==a&&a.apply(this,arguments)||this;d.center=void 0;d.data=void 0;d.maxLabelDistance=void 0;d.options=void 0;d.points=void 0;return d}e(g,a);g.prototype.animate=function(a){var c=this,d=c.points,e=c.startAngleRad;a||d.forEach(function(a){var b=a.graphic,d=a.shapeArgs;b&&
d&&(b.attr({r:A(a.startR,c.center&&c.center[3]/2),start:e,end:e}),b.animate({r:d.r,start:d.start,end:d.end},c.options.animation))})};g.prototype.drawEmpty=function(){var a=this.startAngleRad,c=this.endAngleRad,d=this.options;if(0===this.total&&this.center){var e=this.center[0];var g=this.center[1];this.graph||(this.graph=this.chart.renderer.arc(e,g,this.center[1]/2,0,a,c).addClass("highcharts-empty-series").add(this.group));this.graph.attr({d:r.arc(e,g,this.center[2]/2,0,{start:a,end:c,innerR:this.center[3]/
2})});this.chart.styledMode||this.graph.attr({"stroke-width":d.borderWidth,fill:d.fillColor||"none",stroke:d.color||"#cccccc"})}else this.graph&&(this.graph=this.graph.destroy())};g.prototype.drawPoints=function(){var a=this.chart.renderer;this.points.forEach(function(c){c.graphic&&c.hasNewShapeType()&&(c.graphic=c.graphic.destroy());c.graphic||(c.graphic=a[c.shapeType](c.shapeArgs).add(c.series.group),c.delayedRendering=!0)})};g.prototype.generatePoints=function(){a.prototype.generatePoints.call(this);
this.updateTotals()};g.prototype.getX=function(a,c,d){var e=this.center,g=this.radii?this.radii[d.index]||0:e[2]/2;a=Math.asin(h((a-e[1])/(g+d.labelDistance),-1,1));return e[0]+(c?-1:1)*Math.cos(a)*(g+d.labelDistance)+(0<d.labelDistance?(c?-1:1)*this.options.dataLabels.padding:0)};g.prototype.hasData=function(){return!!this.processedXData.length};g.prototype.redrawPoints=function(){var a=this,c=a.chart,d=c.renderer,e=a.options.shadow,g,b,h,k;this.drawEmpty();!e||a.shadowGroup||c.styledMode||(a.shadowGroup=
d.g("shadow").attr({zIndex:-1}).add(a.group));a.points.forEach(function(f){var n={};b=f.graphic;if(!f.isNull&&b){var l=void 0;k=f.shapeArgs;g=f.getTranslate();c.styledMode||(l=f.shadowGroup,e&&!l&&(l=f.shadowGroup=d.g("shadow").add(a.shadowGroup)),l&&l.attr(g),h=a.pointAttribs(f,f.selected&&"select"));f.delayedRendering?(b.setRadialReference(a.center).attr(k).attr(g),c.styledMode||b.attr(h).attr({"stroke-linejoin":"round"}).shadow(e,l),f.delayedRendering=!1):(b.setRadialReference(a.center),c.styledMode||
p(!0,n,h),p(!0,n,k,g),b.animate(n));b.attr({visibility:f.visible?"inherit":"hidden"});b.addClass(f.getClassName(),!0)}else b&&(f.graphic=b.destroy())})};g.prototype.sortByAngle=function(a,c){a.sort(function(a,d){return"undefined"!==typeof a.angle&&(d.angle-a.angle)*c})};g.prototype.translate=function(a){k(this,"translate");this.generatePoints();var c=this.options,e=c.slicedOffset,f=e+(c.borderWidth||0),g=d(c.startAngle,c.endAngle),b=this.startAngleRad=g.start;g=(this.endAngleRad=g.end)-b;var h=this.points,
l=c.dataLabels.distance;c=c.ignoreHiddenPoint;var m=h.length,p,r=0;a||(this.center=a=this.getCenter());for(p=0;p<m;p++){var t=h[p];var y=b+r*g;!t.isValid()||c&&!t.visible||(r+=t.percentage/100);var x=b+r*g;var D={x:a[0],y:a[1],r:a[2]/2,innerR:a[3]/2,start:Math.round(1E3*y)/1E3,end:Math.round(1E3*x)/1E3};t.shapeType="arc";t.shapeArgs=D;t.labelDistance=A(t.options.dataLabels&&t.options.dataLabels.distance,l);t.labelDistance=I(t.labelDistance,D.r);this.maxLabelDistance=Math.max(this.maxLabelDistance||
0,t.labelDistance);x=(x+y)/2;x>1.5*Math.PI?x-=2*Math.PI:x<-Math.PI/2&&(x+=2*Math.PI);t.slicedTranslation={translateX:Math.round(Math.cos(x)*e),translateY:Math.round(Math.sin(x)*e)};D=Math.cos(x)*a[2]/2;var v=Math.sin(x)*a[2]/2;t.tooltipPos=[a[0]+.7*D,a[1]+.7*v];t.half=x<-Math.PI/2||x>Math.PI/2?1:0;t.angle=x;y=Math.min(f,t.labelDistance/5);t.labelPosition={natural:{x:a[0]+D+Math.cos(x)*t.labelDistance,y:a[1]+v+Math.sin(x)*t.labelDistance},"final":{},alignment:0>t.labelDistance?"center":t.half?"right":
"left",connectorPosition:{breakAt:{x:a[0]+D+Math.cos(x)*y,y:a[1]+v+Math.sin(x)*y},touchingSliceAt:{x:a[0]+D,y:a[1]+v}}}}k(this,"afterTranslate")};g.prototype.updateTotals=function(){var a=this.points,c=a.length,d=this.options.ignoreHiddenPoint,e,g=0;for(e=0;e<c;e++){var b=a[e];!b.isValid()||d&&!b.visible||(g+=b.y)}this.total=g;for(e=0;e<c;e++)b=a[e],b.percentage=0<g&&(b.visible||!d)?b.y/g*100:0,b.total=g};g.defaultOptions=p(H.defaultOptions,B);return g}(H);m(l.prototype,{axisTypes:[],directTouch:!0,
drawGraph:void 0,drawLegendSymbol:F.drawRectangle,drawTracker:g.prototype.drawTracker,getCenter:a.getCenter,getSymbol:x,isCartesian:!1,noSharedTooltip:!0,pointAttribs:g.prototype.pointAttribs,pointClass:C,requireSorting:!1,searchPoint:x,trackerGroups:["group","dataLabelsGroup"]});t.registerSeriesType("pie",l);return l});K(g,"Series/Pie/PieDataLabel.js",[g["Core/Series/DataLabel.js"],g["Core/Globals.js"],g["Core/Renderer/RendererUtilities.js"],g["Core/Series/SeriesRegistry.js"],g["Core/Utilities.js"]],
function(a,g,x,F,C){var A=g.noop,H=x.distribute,t=F.series,r=C.arrayMax,l=C.clamp,e=C.defined,d=C.merge,h=C.pick,m=C.relativeLength,k;(function(g){function k(){var a=this,g=a.data,f=a.chart,k=a.options.dataLabels||{},b=k.connectorPadding,l=f.plotWidth,m=f.plotHeight,p=f.plotLeft,y=Math.round(f.chartWidth/3),A=a.center,x=A[2]/2,D=A[1],B=[[],[]],E=[0,0,0,0],v=a.dataLabelPositioners,C,F,I,L,G,K,M,X,R,V,Z,W;a.visible&&(k.enabled||a._hasPointLabels)&&(g.forEach(function(a){a.dataLabel&&a.visible&&a.dataLabel.shortened&&
(a.dataLabel.attr({width:"auto"}).css({width:"auto",textOverflow:"clip"}),a.dataLabel.shortened=!1)}),t.prototype.drawDataLabels.apply(a),g.forEach(function(a){a.dataLabel&&(a.visible?(B[a.half].push(a),a.dataLabel._pos=null,!e(k.style.width)&&!e(a.options.dataLabels&&a.options.dataLabels.style&&a.options.dataLabels.style.width)&&a.dataLabel.getBBox().width>y&&(a.dataLabel.css({width:Math.round(.7*y)+"px"}),a.dataLabel.shortened=!0)):(a.dataLabel=a.dataLabel.destroy(),a.dataLabels&&1===a.dataLabels.length&&
delete a.dataLabels))}),B.forEach(function(c,d){var g=c.length,n=[],q;if(g){a.sortByAngle(c,d-.5);if(0<a.maxLabelDistance){var r=Math.max(0,D-x-a.maxLabelDistance);var t=Math.min(D+x+a.maxLabelDistance,f.plotHeight);c.forEach(function(a){0<a.labelDistance&&a.dataLabel&&(a.top=Math.max(0,D-x-a.labelDistance),a.bottom=Math.min(D+x+a.labelDistance,f.plotHeight),q=a.dataLabel.getBBox().height||21,a.distributeBox={target:a.labelPosition.natural.y-a.top+q/2,size:q,rank:a.y},n.push(a.distributeBox))});r=
t+q-r;H(n,r,r/5)}for(Z=0;Z<g;Z++){C=c[Z];K=C.labelPosition;L=C.dataLabel;V=!1===C.visible?"hidden":"inherit";R=r=K.natural.y;n&&e(C.distributeBox)&&("undefined"===typeof C.distributeBox.pos?V="hidden":(M=C.distributeBox.size,R=v.radialDistributionY(C)));delete C.positionIndex;if(k.justify)X=v.justify(C,x,A);else switch(k.alignTo){case "connectors":X=v.alignToConnectors(c,d,l,p);break;case "plotEdges":X=v.alignToPlotEdges(L,d,l,p);break;default:X=v.radialDistributionX(a,C,R,r)}L._attr={visibility:V,
align:K.alignment};W=C.options.dataLabels||{};L._pos={x:X+h(W.x,k.x)+({left:b,right:-b}[K.alignment]||0),y:R+h(W.y,k.y)-10};K.final.x=X;K.final.y=R;h(k.crop,!0)&&(G=L.getBBox().width,r=null,X-G<b&&1===d?(r=Math.round(G-X+b),E[3]=Math.max(r,E[3])):X+G>l-b&&0===d&&(r=Math.round(X+G-l+b),E[1]=Math.max(r,E[1])),0>R-M/2?E[0]=Math.max(Math.round(-R+M/2),E[0]):R+M/2>m&&(E[2]=Math.max(Math.round(R+M/2-m),E[2])),L.sideOverflow=r)}}}),0===r(E)||this.verifyDataLabelOverflow(E))&&(this.placeDataLabels(),this.points.forEach(function(b){W=
d(k,b.options.dataLabels);if(F=h(W.connectorWidth,1)){var c;I=b.connector;if((L=b.dataLabel)&&L._pos&&b.visible&&0<b.labelDistance){V=L._attr.visibility;if(c=!I)b.connector=I=f.renderer.path().addClass("highcharts-data-label-connector  highcharts-color-"+b.colorIndex+(b.className?" "+b.className:"")).add(a.dataLabelsGroup),f.styledMode||I.attr({"stroke-width":F,stroke:W.connectorColor||b.color||"#666666"});I[c?"attr":"animate"]({d:b.getConnectorPath()});I.attr("visibility",V)}else I&&(b.connector=
I.destroy())}}))}function p(){this.points.forEach(function(a){var c=a.dataLabel,d;c&&a.visible&&((d=c._pos)?(c.sideOverflow&&(c._attr.width=Math.max(c.getBBox().width-c.sideOverflow,0),c.css({width:c._attr.width+"px",textOverflow:(this.options.dataLabels.style||{}).textOverflow||"ellipsis"}),c.shortened=!0),c.attr(c._attr),c[c.moved?"animate":"attr"](d),c.moved=!0):c&&c.attr({y:-9999}));delete a.distributeBox},this)}function x(a){var c=this.center,d=this.options,e=d.center,b=d.minSize||80,g=null!==
d.size;if(!g){if(null!==e[0])var h=Math.max(c[2]-Math.max(a[1],a[3]),b);else h=Math.max(c[2]-a[1]-a[3],b),c[0]+=(a[3]-a[1])/2;null!==e[1]?h=l(h,b,c[2]-Math.max(a[0],a[2])):(h=l(h,b,c[2]-a[0]-a[2]),c[1]+=(a[0]-a[2])/2);h<c[2]?(c[2]=h,c[3]=Math.min(d.thickness?Math.max(0,h-2*d.thickness):Math.max(0,m(d.innerSize||0,h)),h),this.translate(c),this.drawDataLabels&&this.drawDataLabels()):g=!0}return g}var B=[],y={radialDistributionY:function(a){return a.top+a.distributeBox.pos},radialDistributionX:function(a,
d,e,g){return a.getX(e<d.top+2||e>d.bottom-2?g:e,d.half,d)},justify:function(a,d,e){return e[0]+(a.half?-1:1)*(d+a.labelDistance)},alignToPlotEdges:function(a,d,e,g){a=a.getBBox().width;return d?a+g:e-a-g},alignToConnectors:function(a,d,e,g){var b=0,c;a.forEach(function(a){c=a.dataLabel.getBBox().width;c>b&&(b=c)});return d?b+g:e-b-g}};g.compose=function(c){a.compose(t);-1===B.indexOf(c)&&(B.push(c),c=c.prototype,c.dataLabelPositioners=y,c.alignDataLabel=A,c.drawDataLabels=k,c.placeDataLabels=p,c.verifyDataLabelOverflow=
x)}})(k||(k={}));return k});K(g,"Extensions/OverlappingDataLabels.js",[g["Core/Chart/Chart.js"],g["Core/Utilities.js"]],function(a,g){function A(a,e){var d=!1;if(a){var g=a.newOpacity;a.oldOpacity!==g&&(a.alignAttr&&a.placed?(a[g?"removeClass":"addClass"]("highcharts-data-label-hidden"),d=!0,a.alignAttr.opacity=g,a[a.isOld?"animate":"attr"](a.alignAttr,null,function(){e.styledMode||a.css({pointerEvents:g?"auto":"none"})}),C(e,"afterHideOverlappingLabel")):a.attr({opacity:g}));a.isOld=!0}return d}
var F=g.addEvent,C=g.fireEvent,B=g.isArray,H=g.isNumber,t=g.objectEach,r=g.pick;F(a,"render",function(){var a=this,e=[];(this.labelCollectors||[]).forEach(function(a){e=e.concat(a())});(this.yAxis||[]).forEach(function(a){a.stacking&&a.options.stackLabels&&!a.options.stackLabels.allowOverlap&&t(a.stacking.stacks,function(a){t(a,function(a){a.label&&e.push(a.label)})})});(this.series||[]).forEach(function(d){var g=d.options.dataLabels;d.visible&&(!1!==g.enabled||d._hasPointLabels)&&(g=function(d){return d.forEach(function(d){d.visible&&
(B(d.dataLabels)?d.dataLabels:d.dataLabel?[d.dataLabel]:[]).forEach(function(g){var h=g.options;g.labelrank=r(h.labelrank,d.labelrank,d.shapeArgs&&d.shapeArgs.height);h.allowOverlap?(g.oldOpacity=g.opacity,g.newOpacity=1,A(g,a)):e.push(g)})})},g(d.nodes||[]),g(d.points))});this.hideOverlappingLabels(e)});a.prototype.hideOverlappingLabels=function(a){var e=this,d=a.length,g=e.renderer,l,k,p,r=!1;var t=function(a){var c,d=a.box?0:a.padding||0,e=c=0,h;if(a&&(!a.alignAttr||a.placed)){var b=a.alignAttr||
{x:a.attr("x"),y:a.attr("y")};var k=a.parentGroup;a.width||(c=a.getBBox(),a.width=c.width,a.height=c.height,c=g.fontMetrics(null,a.element).h);var l=a.width-2*d;(h={left:"0",center:"0.5",right:"1"}[a.alignValue])?e=+h*l:H(a.x)&&Math.round(a.x)!==a.translateX&&(e=a.x-a.translateX);return{x:b.x+(k.translateX||0)+d-(e||0),y:b.y+(k.translateY||0)+d-c,width:a.width-2*d,height:a.height-2*d}}};for(k=0;k<d;k++)if(l=a[k])l.oldOpacity=l.opacity,l.newOpacity=1,l.absoluteBox=t(l);a.sort(function(a,c){return(c.labelrank||
0)-(a.labelrank||0)});for(k=0;k<d;k++){var x=(t=a[k])&&t.absoluteBox;for(l=k+1;l<d;++l){var B=(p=a[l])&&p.absoluteBox;!x||!B||t===p||0===t.newOpacity||0===p.newOpacity||"hidden"===t.visibility||"hidden"===p.visibility||B.x>=x.x+x.width||B.x+B.width<=x.x||B.y>=x.y+x.height||B.y+B.height<=x.y||((t.labelrank<p.labelrank?t:p).newOpacity=0)}}a.forEach(function(a){A(a,e)&&(r=!0)});r&&C(e,"afterHideAllOverlappingLabels")}});K(g,"Core/Responsive.js",[g["Core/Utilities.js"]],function(a){var g=a.extend,x=a.find,
F=a.isArray,C=a.isObject,B=a.merge,H=a.objectEach,t=a.pick,r=a.splat,l=a.uniqueKey,e;(function(a){var d=[];a.compose=function(a){-1===d.indexOf(a)&&(d.push(a),g(a.prototype,e.prototype));return a};var e=function(){function a(){}a.prototype.currentOptions=function(a){function d(a,g,c,h){var f;H(a,function(a,b){if(!h&&-1<e.collectionsWithUpdate.indexOf(b)&&g[b])for(a=r(a),c[b]=[],f=0;f<Math.max(a.length,g[b].length);f++)g[b][f]&&(void 0===a[f]?c[b][f]=g[b][f]:(c[b][f]={},d(a[f],g[b][f],c[b][f],h+1)));
else C(a)?(c[b]=F(a)?[]:{},d(a,g[b]||{},c[b],h+1)):c[b]="undefined"===typeof g[b]?null:g[b]})}var e=this,g={};d(a,this.options,g,0);return g};a.prototype.matchResponsiveRule=function(a,d){var e=a.condition;(e.callback||function(){return this.chartWidth<=t(e.maxWidth,Number.MAX_VALUE)&&this.chartHeight<=t(e.maxHeight,Number.MAX_VALUE)&&this.chartWidth>=t(e.minWidth,0)&&this.chartHeight>=t(e.minHeight,0)}).call(this)&&d.push(a._id)};a.prototype.setResponsive=function(a,d){var e=this,g=this.options.responsive,
h=this.currentResponsive,k=[];!d&&g&&g.rules&&g.rules.forEach(function(a){"undefined"===typeof a._id&&(a._id=l());e.matchResponsiveRule(a,k)},this);d=B.apply(void 0,k.map(function(a){return x((g||{}).rules||[],function(c){return c._id===a})}).map(function(a){return a&&a.chartOptions}));d.isResponsiveOptions=!0;k=k.toString()||void 0;k!==(h&&h.ruleIds)&&(h&&this.update(h.undoOptions,a,!0),k?(h=this.currentOptions(d),h.isResponsiveOptions=!0,this.currentResponsive={ruleIds:k,mergedOptions:d,undoOptions:h},
this.update(d,a,!0)):this.currentResponsive=void 0)};return a}()})(e||(e={}));"";"";return e});K(g,"masters/highcharts.src.js",[g["Core/Globals.js"],g["Core/Utilities.js"],g["Core/Defaults.js"],g["Core/Animation/Fx.js"],g["Core/Animation/AnimationUtilities.js"],g["Core/Renderer/HTML/AST.js"],g["Core/FormatUtilities.js"],g["Core/Renderer/RendererUtilities.js"],g["Core/Renderer/SVG/SVGElement.js"],g["Core/Renderer/SVG/SVGRenderer.js"],g["Core/Renderer/HTML/HTMLElement.js"],g["Core/Renderer/HTML/HTMLRenderer.js"],
g["Core/Axis/Axis.js"],g["Core/Axis/DateTimeAxis.js"],g["Core/Axis/LogarithmicAxis.js"],g["Core/Axis/PlotLineOrBand/PlotLineOrBand.js"],g["Core/Axis/Tick.js"],g["Core/Tooltip.js"],g["Core/Series/Point.js"],g["Core/Pointer.js"],g["Core/MSPointer.js"],g["Core/Legend/Legend.js"],g["Core/Chart/Chart.js"],g["Core/Axis/Stacking/StackingAxis.js"],g["Core/Axis/Stacking/StackItem.js"],g["Core/Series/Series.js"],g["Core/Series/SeriesRegistry.js"],g["Series/Column/ColumnSeries.js"],g["Series/Column/ColumnDataLabel.js"],
g["Series/Pie/PieSeries.js"],g["Series/Pie/PieDataLabel.js"],g["Core/Series/DataLabel.js"],g["Core/Responsive.js"],g["Core/Color/Color.js"],g["Core/Time.js"]],function(a,g,x,F,C,B,H,t,r,l,e,d,h,m,k,p,D,I,E,L,y,c,w,f,n,b,u,z,q,K,J,O,Q,T,Y){a.animate=C.animate;a.animObject=C.animObject;a.getDeferredAnimation=C.getDeferredAnimation;a.setAnimation=C.setAnimation;a.stop=C.stop;a.timers=F.timers;a.AST=B;a.Axis=h;a.Chart=w;a.chart=w.chart;a.Fx=F;a.Legend=c;a.PlotLineOrBand=p;a.Point=E;a.Pointer=y.isRequired()?
y:L;a.Series=b;a.StackItem=n;a.SVGElement=r;a.SVGRenderer=l;a.Tick=D;a.Time=Y;a.Tooltip=I;a.Color=T;a.color=T.parse;d.compose(l);e.compose(r);a.defaultOptions=x.defaultOptions;a.getOptions=x.getOptions;a.time=x.defaultTime;a.setOptions=x.setOptions;a.dateFormat=H.dateFormat;a.format=H.format;a.numberFormat=H.numberFormat;a.addEvent=g.addEvent;a.arrayMax=g.arrayMax;a.arrayMin=g.arrayMin;a.attr=g.attr;a.clearTimeout=g.clearTimeout;a.correctFloat=g.correctFloat;a.createElement=g.createElement;a.css=
g.css;a.defined=g.defined;a.destroyObjectProperties=g.destroyObjectProperties;a.discardElement=g.discardElement;a.distribute=t.distribute;a.erase=g.erase;a.error=g.error;a.extend=g.extend;a.extendClass=g.extendClass;a.find=g.find;a.fireEvent=g.fireEvent;a.getMagnitude=g.getMagnitude;a.getStyle=g.getStyle;a.inArray=g.inArray;a.isArray=g.isArray;a.isClass=g.isClass;a.isDOMElement=g.isDOMElement;a.isFunction=g.isFunction;a.isNumber=g.isNumber;a.isObject=g.isObject;a.isString=g.isString;a.keys=g.keys;
a.merge=g.merge;a.normalizeTickInterval=g.normalizeTickInterval;a.objectEach=g.objectEach;a.offset=g.offset;a.pad=g.pad;a.pick=g.pick;a.pInt=g.pInt;a.relativeLength=g.relativeLength;a.removeEvent=g.removeEvent;a.seriesType=u.seriesType;a.splat=g.splat;a.stableSort=g.stableSort;a.syncTimeout=g.syncTimeout;a.timeUnits=g.timeUnits;a.uniqueKey=g.uniqueKey;a.useSerialIds=g.useSerialIds;a.wrap=g.wrap;q.compose(z);O.compose(b);m.compose(h);k.compose(h);J.compose(K);p.compose(h);Q.compose(w);f.compose(h,
w,b);return a});g["masters/highcharts.src.js"]._modules=g;return g["masters/highcharts.src.js"]});
//# sourceMappingURL=highcharts.js.map