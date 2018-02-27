layui.define(function(t){t("layui.mobile",layui.v)}),layui.define(function(t){"use strict";var e={open:"{{",close:"}}"},n={exp:function(t){return new RegExp(t,"g")},query:function(t,n,r){var o=["#([\\s\\S])+?","([^{#}])*?"][t||0];return i((n||"")+e.open+o+e.close+(r||""))},escape:function(t){return String(t||"").replace(/&(?!#?[a-zA-Z0-9]+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/'/g,"&#39;").replace(/"/g,"&quot;")},error:function(t,e){var n="Laytpl Error：";return"object"==typeof console&&console.error(n+t+"\n"+(e||"")),n+t}},i=n.exp,r=function(t){this.tpl=t};r.pt=r.prototype,window.errors=0,r.pt.parse=function(t,r){var o=this,a=t,s=i("^"+e.open+"#",""),u=i(e.close+"$","");t=t.replace(/\s+|\r|\t|\n/g," ").replace(i(e.open+"#"),e.open+"# ").replace(i(e.close+"}"),"} "+e.close).replace(/\\/g,"\\\\").replace(/(?="|')/g,"\\").replace(n.query(),function(t){return t=t.replace(s,"").replace(u,""),'";'+t.replace(/\\/g,"")+';view+="'}).replace(n.query(1),function(t){var n='"+(';return t.replace(/\s/g,"")===e.open+e.close?"":(t=t.replace(i(e.open+"|"+e.close),""),/^=/.test(t)&&(t=t.replace(/^=/,""),n='"+_escape_('),n+t.replace(/\\/g,"")+')+"')}),t='"use strict";var view = "'+t+'";return view;';try{return o.cache=t=new Function("d, _escape_",t),t(r,n.escape)}catch(c){return delete o.cache,n.error(c,a)}},r.pt.render=function(t,e){var i,r=this;return t?(i=r.cache?r.cache(t,n.escape):r.parse(r.tpl,t),e?void e(i):i):n.error("no data")};var o=function(t){return"string"!=typeof t?n.error("Template not found"):new r(t)};o.config=function(t){t=t||{};for(var n in t)e[n]=t[n]},o.v="1.2.0",t("laytpl",o)}),layui.define(function(t){"use strict";var e=(window,document),n="querySelectorAll",i="getElementsByClassName",r=function(t){return e[n](t)},o={type:0,shade:!0,shadeClose:!0,fixed:!0,anim:"scale"},a={extend:function(t){var e=JSON.parse(JSON.stringify(o));for(var n in t)e[n]=t[n];return e},timer:{},end:{}};a.touch=function(t,e){t.addEventListener("click",function(t){e.call(this,t)},!1)};var s=0,u=["layui-m-layer"],c=function(t){var e=this;e.config=a.extend(t),e.view()};c.prototype.view=function(){var t=this,n=t.config,o=e.createElement("div");t.id=o.id=u[0]+s,o.setAttribute("class",u[0]+" "+u[0]+(n.type||0)),o.setAttribute("index",s);var a=function(){var t="object"==typeof n.title;return n.title?'<h3 style="'+(t?n.title[1]:"")+'">'+(t?n.title[0]:n.title)+"</h3>":""}(),c=function(){"string"==typeof n.btn&&(n.btn=[n.btn]);var t,e=(n.btn||[]).length;return 0!==e&&n.btn?(t='<span yes type="1">'+n.btn[0]+"</span>",2===e&&(t='<span no type="0">'+n.btn[1]+"</span>"+t),'<div class="layui-m-layerbtn">'+t+"</div>"):""}();if(n.fixed||(n.top=n.hasOwnProperty("top")?n.top:100,n.style=n.style||"",n.style+=" top:"+(e.body.scrollTop+n.top)+"px"),2===n.type&&(n.content='<i></i><i class="layui-m-layerload"></i><i></i><p>'+(n.content||"")+"</p>"),n.skin&&(n.anim="up"),"msg"===n.skin&&(n.shade=!1),o.innerHTML=(n.shade?"<div "+("string"==typeof n.shade?'style="'+n.shade+'"':"")+' class="layui-m-layershade"></div>':"")+'<div class="layui-m-layermain" '+(n.fixed?"":'style="position:static;"')+'><div class="layui-m-layersection"><div class="layui-m-layerchild '+(n.skin?"layui-m-layer-"+n.skin+" ":"")+(n.className?n.className:"")+" "+(n.anim?"layui-m-anim-"+n.anim:"")+'" '+(n.style?'style="'+n.style+'"':"")+">"+a+'<div class="layui-m-layercont">'+n.content+"</div>"+c+"</div></div></div>",!n.type||2===n.type){var f=e[i](u[0]+n.type),p=f.length;p>=1&&l.close(f[0].getAttribute("index"))}document.body.appendChild(o);var h=t.elem=r("#"+t.id)[0];n.success&&n.success(h),t.index=s++,t.action(n,h)},c.prototype.action=function(t,e){var n=this;t.time&&(a.timer[n.index]=setTimeout(function(){l.close(n.index)},1e3*t.time));var r=function(){var e=this.getAttribute("type");0==e?(t.no&&t.no(),l.close(n.index)):t.yes?t.yes(n.index):l.close(n.index)};if(t.btn)for(var o=e[i]("layui-m-layerbtn")[0].children,s=o.length,u=0;u<s;u++)a.touch(o[u],r);if(t.shade&&t.shadeClose){var c=e[i]("layui-m-layershade")[0];a.touch(c,function(){l.close(n.index,t.end)})}t.end&&(a.end[n.index]=t.end)};var l={v:"2.0 m",index:s,open:function(t){var e=new c(t||{});return e.index},close:function(t){var n=r("#"+u[0]+t)[0];n&&(n.innerHTML="",e.body.removeChild(n),clearTimeout(a.timer[t]),delete a.timer[t],"function"==typeof a.end[t]&&a.end[t](),delete a.end[t])},closeAll:function(){for(var t=e[i](u[0]),n=0,r=t.length;n<r;n++)l.close(0|t[0].getAttribute("index"))}};t("layer-mobile",l)}),layui.define(function(t){var e=function(){function t(t){return null==t?String(t):X[W.call(t)]||"object"}function e(e){return"function"==t(e)}function n(t){return null!=t&&t==t.window}function i(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE}function r(e){return"object"==t(e)}function o(t){return r(t)&&!n(t)&&Object.getPrototypeOf(t)==Object.prototype}function a(t){var e=!!t&&"length"in t&&t.length,i=T.type(t);return"function"!=i&&!n(t)&&("array"==i||0===e||"number"==typeof e&&e>0&&e-1 in t)}function s(t){return A.call(t,function(t){return null!=t})}function u(t){return t.length>0?T.fn.concat.apply([],t):t}function c(t){return t.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function l(t){return t in $?$[t]:$[t]=new RegExp("(^|\\s)"+t+"(\\s|$)")}function f(t,e){return"number"!=typeof e||z[c(t)]?e:e+"px"}function p(t){var e,n;return L[t]||(e=D.createElement(t),D.body.appendChild(e),n=getComputedStyle(e,"").getPropertyValue("display"),e.parentNode.removeChild(e),"none"==n&&(n="block"),L[t]=n),L[t]}function h(t){return"children"in t?k.call(t.children):T.map(t.childNodes,function(t){if(1==t.nodeType)return t})}function d(t,e){var n,i=t?t.length:0;for(n=0;n<i;n++)this[n]=t[n];this.length=i,this.selector=e||""}function m(t,e,n){for(j in e)n&&(o(e[j])||Q(e[j]))?(o(e[j])&&!o(t[j])&&(t[j]={}),Q(e[j])&&!Q(t[j])&&(t[j]=[]),m(t[j],e[j],n)):e[j]!==E&&(t[j]=e[j])}function y(t,e){return null==e?T(t):T(t).filter(e)}function v(t,n,i,r){return e(n)?n.call(t,i,r):n}function g(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function b(t,e){var n=t.className||"",i=n&&n.baseVal!==E;return e===E?i?n.baseVal:n:void(i?n.baseVal=e:t.className=e)}function x(t){try{return t?"true"==t||"false"!=t&&("null"==t?null:+t+""==t?+t:/^[\[\{]/.test(t)?T.parseJSON(t):t):t}catch(e){return t}}function w(t,e){e(t);for(var n=0,i=t.childNodes.length;n<i;n++)w(t.childNodes[n],e)}var E,j,T,S,C,N,O=[],P=O.concat,A=O.filter,k=O.slice,D=window.document,L={},$={},z={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},R=/^\s*<(\w+|!)[^>]*>/,F=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,q=/^(?:body|html)$/i,Z=/([A-Z])/g,_=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],I=D.createElement("table"),B=D.createElement("tr"),J={tr:D.createElement("tbody"),tbody:I,thead:I,tfoot:I,td:B,th:B,"*":D.createElement("div")},V=/complete|loaded|interactive/,U=/^[\w-]*$/,X={},W=X.toString,Y={},G=D.createElement("div"),K={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Q=Array.isArray||function(t){return t instanceof Array};return Y.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.matches||t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&&(r=G).appendChild(t),i=~Y.qsa(r,e).indexOf(t),o&&G.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():""})},N=function(t){return A.call(t,function(e,n){return t.indexOf(e)==n})},Y.fragment=function(t,e,n){var i,r,a;return F.test(t)&&(i=T(D.createElement(RegExp.$1))),i||(t.replace&&(t=t.replace(M,"<$1></$2>")),e===E&&(e=R.test(t)&&RegExp.$1),e in J||(e="*"),a=J[e],a.innerHTML=""+t,i=T.each(k.call(a.childNodes),function(){a.removeChild(this)})),o(n)&&(r=T(i),T.each(n,function(t,e){_.indexOf(t)>-1?r[t](e):r.attr(t,e)})),i},Y.Z=function(t,e){return new d(t,e)},Y.isZ=function(t){return t instanceof Y.Z},Y.init=function(t,n){var i;if(!t)return Y.Z();if("string"==typeof t)if(t=t.trim(),"<"==t[0]&&R.test(t))i=Y.fragment(t,RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);i=Y.qsa(D,t)}else{if(e(t))return T(D).ready(t);if(Y.isZ(t))return t;if(Q(t))i=s(t);else if(r(t))i=[t],t=null;else if(R.test(t))i=Y.fragment(t.trim(),RegExp.$1,n),t=null;else{if(n!==E)return T(n).find(t);i=Y.qsa(D,t)}}return Y.Z(i,t)},T=function(t,e){return Y.init(t,e)},T.extend=function(t){var e,n=k.call(arguments,1);return"boolean"==typeof t&&(e=t,t=n.shift()),n.forEach(function(n){m(t,n,e)}),t},Y.qsa=function(t,e){var n,i="#"==e[0],r=!i&&"."==e[0],o=i||r?e.slice(1):e,a=U.test(o);return t.getElementById&&a&&i?(n=t.getElementById(o))?[n]:[]:1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType?[]:k.call(a&&!i&&t.getElementsByClassName?r?t.getElementsByClassName(o):t.getElementsByTagName(e):t.querySelectorAll(e))},T.contains=D.documentElement.contains?function(t,e){return t!==e&&t.contains(e)}:function(t,e){for(;e&&(e=e.parentNode);)if(e===t)return!0;return!1},T.type=t,T.isFunction=e,T.isWindow=n,T.isArray=Q,T.isPlainObject=o,T.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},T.isNumeric=function(t){var e=Number(t),n=typeof t;return null!=t&&"boolean"!=n&&("string"!=n||t.length)&&!isNaN(e)&&isFinite(e)||!1},T.inArray=function(t,e,n){return O.indexOf.call(e,t,n)},T.camelCase=C,T.trim=function(t){return null==t?"":String.prototype.trim.call(t)},T.uuid=0,T.support={},T.expr={},T.noop=function(){},T.map=function(t,e){var n,i,r,o=[];if(a(t))for(i=0;i<t.length;i++)n=e(t[i],i),null!=n&&o.push(n);else for(r in t)n=e(t[r],r),null!=n&&o.push(n);return u(o)},T.each=function(t,e){var n,i;if(a(t)){for(n=0;n<t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},T.grep=function(t,e){return A.call(t,e)},window.JSON&&(T.parseJSON=JSON.parse),T.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(t,e){X["[object "+e+"]"]=e.toLowerCase()}),T.fn={constructor:Y.Z,length:0,forEach:O.forEach,reduce:O.reduce,push:O.push,sort:O.sort,splice:O.splice,indexOf:O.indexOf,concat:function(){var t,e,n=[];for(t=0;t<arguments.length;t++)e=arguments[t],n[t]=Y.isZ(e)?e.toArray():e;return P.apply(Y.isZ(this)?this.toArray():this,n)},map:function(t){return T(T.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return T(k.apply(this,arguments))},ready:function(t){return V.test(D.readyState)&&D.body?t(T):D.addEventListener("DOMContentLoaded",function(){t(T)},!1),this},get:function(t){return t===E?k.call(this):this[t>=0?t:t+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(t){return O.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return e(t)?this.not(this.not(t)):T(A.call(this,function(e){return Y.matches(e,t)}))},add:function(t,e){return T(N(this.concat(T(t,e))))},is:function(t){return this.length>0&&Y.matches(this[0],t)},not:function(t){var n=[];if(e(t)&&t.call!==E)this.each(function(e){t.call(this,e)||n.push(this)});else{var i="string"==typeof t?this.filter(t):a(t)&&e(t.item)?k.call(t):T(t);this.forEach(function(t){i.indexOf(t)<0&&n.push(t)})}return T(n)},has:function(t){return this.filter(function(){return r(t)?T.contains(this,t):T(this).find(t).size()})},eq:function(t){return t===-1?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&&!r(t)?t:T(t)},last:function(){var t=this[this.length-1];return t&&!r(t)?t:T(t)},find:function(t){var e,n=this;return e=t?"object"==typeof t?T(t).filter(function(){var t=this;return O.some.call(n,function(e){return T.contains(e,t)})}):1==this.length?T(Y.qsa(this[0],t)):this.map(function(){return Y.qsa(this,t)}):T()},closest:function(t,e){var n=[],r="object"==typeof t&&T(t);return this.each(function(o,a){for(;a&&!(r?r.indexOf(a)>=0:Y.matches(a,t));)a=a!==e&&!i(a)&&a.parentNode;a&&n.indexOf(a)<0&&n.push(a)}),T(n)},parents:function(t){for(var e=[],n=this;n.length>0;)n=T.map(n,function(t){if((t=t.parentNode)&&!i(t)&&e.indexOf(t)<0)return e.push(t),t});return y(e,t)},parent:function(t){return y(N(this.pluck("parentNode")),t)},children:function(t){return y(this.map(function(){return h(this)}),t)},contents:function(){return this.map(function(){return this.contentDocument||k.call(this.childNodes)})},siblings:function(t){return y(this.map(function(t,e){return A.call(h(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(t){return T.map(this,function(e){return e[t]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=p(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var n=e(t);if(this[0]&&!n)var i=T(t).get(0),r=i.parentNode||this.length>1;return this.each(function(e){T(this).wrapAll(n?t.call(this,e):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){T(this[0]).before(t=T(t));for(var e;(e=t.children()).length;)t=e.first();T(t).append(this)}return this},wrapInner:function(t){var n=e(t);return this.each(function(e){var i=T(this),r=i.contents(),o=n?t.call(this,e):t;r.length?r.wrapAll(o):i.append(o)})},unwrap:function(){return this.parent().each(function(){T(this).replaceWith(T(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(t){return this.each(function(){var e=T(this);(t===E?"none"==e.css("display"):t)?e.show():e.hide()})},prev:function(t){return T(this.pluck("previousElementSibling")).filter(t||"*")},next:function(t){return T(this.pluck("nextElementSibling")).filter(t||"*")},html:function(t){return 0 in arguments?this.each(function(e){var n=this.innerHTML;T(this).empty().append(v(this,t,e,n))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=v(this,t,e,this.textContent);this.textContent=null==n?"":""+n}):0 in this?this.pluck("textContent").join(""):null},attr:function(t,e){var n;return"string"!=typeof t||1 in arguments?this.each(function(n){if(1===this.nodeType)if(r(t))for(j in t)g(this,j,t[j]);else g(this,t,v(this,e,n,this.getAttribute(t)))}):0 in this&&1==this[0].nodeType&&null!=(n=this[0].getAttribute(t))?n:E},removeAttr:function(t){return this.each(function(){1===this.nodeType&&t.split(" ").forEach(function(t){g(this,t)},this)})},prop:function(t,e){return t=K[t]||t,1 in arguments?this.each(function(n){this[t]=v(this,e,n,this[t])}):this[0]&&this[0][t]},removeProp:function(t){return t=K[t]||t,this.each(function(){delete this[t]})},data:function(t,e){var n="data-"+t.replace(Z,"-$1").toLowerCase(),i=1 in arguments?this.attr(n,e):this.attr(n);return null!==i?x(i):E},val:function(t){return 0 in arguments?(null==t&&(t=""),this.each(function(e){this.value=v(this,t,e,this.value)})):this[0]&&(this[0].multiple?T(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(t){if(t)return this.each(function(e){var n=T(this),i=v(this,t,e,n.offset()),r=n.offsetParent().offset(),o={top:i.top-r.top,left:i.left-r.left};"static"==n.css("position")&&(o.position="relative"),n.css(o)});if(!this.length)return null;if(D.documentElement!==this[0]&&!T.contains(D.documentElement,this[0]))return{top:0,left:0};var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(e,n){if(arguments.length<2){var i=this[0];if("string"==typeof e){if(!i)return;return i.style[C(e)]||getComputedStyle(i,"").getPropertyValue(e)}if(Q(e)){if(!i)return;var r={},o=getComputedStyle(i,"");return T.each(e,function(t,e){r[e]=i.style[C(e)]||o.getPropertyValue(e)}),r}}var a="";if("string"==t(e))n||0===n?a=c(e)+":"+f(e,n):this.each(function(){this.style.removeProperty(c(e))});else for(j in e)e[j]||0===e[j]?a+=c(j)+":"+f(j,e[j])+";":this.each(function(){this.style.removeProperty(c(j))});return this.each(function(){this.style.cssText+=";"+a})},index:function(t){return t?this.indexOf(T(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return!!t&&O.some.call(this,function(t){return this.test(b(t))},l(t))},addClass:function(t){return t?this.each(function(e){if("className"in this){S=[];var n=b(this),i=v(this,t,e,n);i.split(/\s+/g).forEach(function(t){T(this).hasClass(t)||S.push(t)},this),S.length&&b(this,n+(n?" ":"")+S.join(" "))}}):this},removeClass:function(t){return this.each(function(e){if("className"in this){if(t===E)return b(this,"");S=b(this),v(this,t,e,S).split(/\s+/g).forEach(function(t){S=S.replace(l(t)," ")}),b(this,S.trim())}})},toggleClass:function(t,e){return t?this.each(function(n){var i=T(this),r=v(this,t,n,b(this));r.split(/\s+/g).forEach(function(t){(e===E?!i.hasClass(t):e)?i.addClass(t):i.removeClass(t)})}):this},scrollTop:function(t){if(this.length){var e="scrollTop"in this[0];return t===E?e?this[0].scrollTop:this[0].pageYOffset:this.each(e?function(){this.scrollTop=t}:function(){this.scrollTo(this.scrollX,t)})}},scrollLeft:function(t){if(this.length){var e="scrollLeft"in this[0];return t===E?e?this[0].scrollLeft:this[0].pageXOffset:this.each(e?function(){this.scrollLeft=t}:function(){this.scrollTo(t,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),n=this.offset(),i=q.test(e[0].nodeName)?{top:0,left:0}:e.offset();return n.top-=parseFloat(T(t).css("margin-top"))||0,n.left-=parseFloat(T(t).css("margin-left"))||0,i.top+=parseFloat(T(e[0]).css("border-top-width"))||0,i.left+=parseFloat(T(e[0]).css("border-left-width"))||0,{top:n.top-i.top,left:n.left-i.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||D.body;t&&!q.test(t.nodeName)&&"static"==T(t).css("position");)t=t.offsetParent;return t})}},T.fn.detach=T.fn.remove,["width","height"].forEach(function(t){var e=t.replace(/./,function(t){return t[0].toUpperCase()});T.fn[t]=function(r){var o,a=this[0];return r===E?n(a)?a["inner"+e]:i(a)?a.documentElement["scroll"+e]:(o=this.offset())&&o[t]:this.each(function(e){a=T(this),a.css(t,v(this,r,e,a[t]()))})}}),H.forEach(function(e,n){var i=n%2;T.fn[e]=function(){var e,r,o=T.map(arguments,function(n){var i=[];return e=t(n),"array"==e?(n.forEach(function(t){return t.nodeType!==E?i.push(t):T.zepto.isZ(t)?i=i.concat(t.get()):void(i=i.concat(Y.fragment(t)))}),i):"object"==e||null==n?n:Y.fragment(n)}),a=this.length>1;return o.length<1?this:this.each(function(t,e){r=i?e:e.parentNode,e=0==n?e.nextSibling:1==n?e.firstChild:2==n?e:null;var s=T.contains(D.documentElement,r);o.forEach(function(t){if(a)t=t.cloneNode(!0);else if(!r)return T(t).remove();r.insertBefore(t,e),s&&w(t,function(t){if(!(null==t.nodeName||"SCRIPT"!==t.nodeName.toUpperCase()||t.type&&"text/javascript"!==t.type||t.src)){var e=t.ownerDocument?t.ownerDocument.defaultView:window;e.eval.call(e,t.innerHTML)}})})})},T.fn[i?e+"To":"insert"+(n?"Before":"After")]=function(t){return T(t)[e](this),this}}),Y.Z.prototype=d.prototype=T.fn,Y.uniq=N,Y.deserializeValue=x,T.zepto=Y,T}();!function(t){function e(t){return t._zid||(t._zid=p++)}function n(t,n,o,a){if(n=i(n),n.ns)var s=r(n.ns);return(y[e(t)]||[]).filter(function(t){return t&&(!n.e||t.e==n.e)&&(!n.ns||s.test(t.ns))&&(!o||e(t.fn)===e(o))&&(!a||t.sel==a)})}function i(t){var e=(""+t).split(".");return{e:e[0],ns:e.slice(1).sort().join(" ")}}function r(t){return new RegExp("(?:^| )"+t.replace(" "," .* ?")+"(?: |$)")}function o(t,e){return t.del&&!g&&t.e in b||!!e}function a(t){return x[t]||g&&b[t]||t}function s(n,r,s,u,l,p,h){var d=e(n),m=y[d]||(y[d]=[]);r.split(/\s/).forEach(function(e){if("ready"==e)return t(document).ready(s);var r=i(e);r.fn=s,r.sel=l,r.e in x&&(s=function(e){var n=e.relatedTarget;if(!n||n!==this&&!t.contains(this,n))return r.fn.apply(this,arguments)}),r.del=p;var d=p||s;r.proxy=function(t){if(t=c(t),!t.isImmediatePropagationStopped()){t.data=u;var e=d.apply(n,t._args==f?[t]:[t].concat(t._args));return e===!1&&(t.preventDefault(),t.stopPropagation()),e}},r.i=m.length,m.push(r),"addEventListener"in n&&n.addEventListener(a(r.e),r.proxy,o(r,h))})}function u(t,i,r,s,u){var c=e(t);(i||"").split(/\s/).forEach(function(e){n(t,e,r,s).forEach(function(e){delete y[c][e.i],"removeEventListener"in t&&t.removeEventListener(a(e.e),e.proxy,o(e,u))})})}function c(e,n){return!n&&e.isDefaultPrevented||(n||(n=e),t.each(T,function(t,i){var r=n[t];e[t]=function(){return this[i]=w,r&&r.apply(n,arguments)},e[i]=E}),e.timeStamp||(e.timeStamp=Date.now()),(n.defaultPrevented!==f?n.defaultPrevented:"returnValue"in n?n.returnValue===!1:n.getPreventDefault&&n.getPreventDefault())&&(e.isDefaultPrevented=w)),e}function l(t){var e,n={originalEvent:t};for(e in t)j.test(e)||t[e]===f||(n[e]=t[e]);return c(n,t)}var f,p=1,h=Array.prototype.slice,d=t.isFunction,m=function(t){return"string"==typeof t},y={},v={},g="onfocusin"in window,b={focus:"focusin",blur:"focusout"},x={mouseenter:"mouseover",mouseleave:"mouseout"};v.click=v.mousedown=v.mouseup=v.mousemove="MouseEvents",t.event={add:s,remove:u},t.proxy=function(n,i){var r=2 in arguments&&h.call(arguments,2);if(d(n)){var o=function(){return n.apply(i,r?r.concat(h.call(arguments)):arguments)};return o._zid=e(n),o}if(m(i))return r?(r.unshift(n[i],n),t.proxy.apply(null,r)):t.proxy(n[i],n);throw new TypeError("expected function")},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var w=function(){return!0},E=function(){return!1},j=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,T={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,n,i,r,o){var a,c,p=this;return e&&!m(e)?(t.each(e,function(t,e){p.on(t,n,i,e,o)}),p):(m(n)||d(r)||r===!1||(r=i,i=n,n=f),r!==f&&i!==!1||(r=i,i=f),r===!1&&(r=E),p.each(function(f,p){o&&(a=function(t){return u(p,t.type,r),r.apply(this,arguments)}),n&&(c=function(e){var i,o=t(e.target).closest(n,p).get(0);if(o&&o!==p)return i=t.extend(l(e),{currentTarget:o,liveFired:p}),(a||r).apply(o,[i].concat(h.call(arguments,1)))}),s(p,e,r,i,n,c||a)}))},t.fn.off=function(e,n,i){var r=this;return e&&!m(e)?(t.each(e,function(t,e){r.off(t,n,e)}),r):(m(n)||d(i)||i===!1||(i=n,n=f),i===!1&&(i=E),r.each(function(){u(this,e,i,n)}))},t.fn.trigger=function(e,n){return e=m(e)||t.isPlainObject(e)?t.Event(e):c(e),e._args=n,this.each(function(){e.type in b&&"function"==typeof this[e.type]?this[e.type]():"dispatchEvent"in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,i){var r,o;return this.each(function(a,s){r=l(m(e)?t.Event(e):e),r._args=i,r.target=s,t.each(n(s,e.type||e),function(t,e){if(o=e.proxy(r),r.isImmediatePropagationStopped())return!1})}),o},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){m(t)||(e=t,t=e.type);var n=document.createEvent(v[t]||"Events"),i=!0;if(e)for(var r in e)"bubbles"==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),c(n)}}(e),function(t){function e(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function n(t,n,i,r){if(t.global)return e(n||b,i,r)}function i(e){e.global&&0===t.active++&&n(e,null,"ajaxStart")}function r(e){e.global&&!--t.active&&n(e,null,"ajaxStop")}function o(t,e){var i=e.context;return e.beforeSend.call(i,t,e)!==!1&&n(e,i,"ajaxBeforeSend",[t,e])!==!1&&void n(e,i,"ajaxSend",[t,e])}function a(t,e,i,r){var o=i.context,a="success";i.success.call(o,t,a,e),r&&r.resolveWith(o,[t,a,e]),n(i,o,"ajaxSuccess",[e,i,t]),u(a,e,i)}function s(t,e,i,r,o){var a=r.context;r.error.call(a,i,e,t),o&&o.rejectWith(a,[i,e,t]),n(r,a,"ajaxError",[i,r,t||e]),u(e,i,r)}function u(t,e,i){var o=i.context;i.complete.call(o,e,t),n(i,o,"ajaxComplete",[e,i]),r(i)}function c(t,e,n){if(n.dataFilter==l)return t;var i=n.context;return n.dataFilter.call(i,t,e)}function l(){}function f(t){return t&&(t=t.split(";",2)[0]),t&&(t==T?"html":t==j?"json":w.test(t)?"script":E.test(t)&&"xml")||"text"}function p(t,e){return""==e?t:(t+"&"+e).replace(/[&?]{1,2}/,"?")}function h(e){e.processData&&e.data&&"string"!=t.type(e.data)&&(e.data=t.param(e.data,e.traditional)),!e.data||e.type&&"GET"!=e.type.toUpperCase()&&"jsonp"!=e.dataType||(e.url=p(e.url,e.data),e.data=void 0)}function d(e,n,i,r){return t.isFunction(n)&&(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function m(e,n,i,r){var o,a=t.isArray(n),s=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&&(n=i?r:r+"["+(s||"object"==o||"array"==o?n:"")+"]"),!r&&a?e.add(u.name,u.value):"array"==o||!i&&"object"==o?m(e,u,i,n):e.add(n,u)})}var y,v,g=+new Date,b=window.document,x=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,w=/^(?:text|application)\/javascript/i,E=/^(?:text|application)\/xml/i,j="application/json",T="text/html",S=/^\s*$/,C=b.createElement("a");C.href=window.location.href,t.active=0,t.ajaxJSONP=function(e,n){if(!("type"in e))return t.ajax(e);var i,r,u=e.jsonpCallback,c=(t.isFunction(u)?u():u)||"Zepto"+g++,l=b.createElement("script"),f=window[c],p=function(e){t(l).triggerHandler("error",e||"abort")},h={abort:p};return n&&n.promise(h),t(l).on("load error",function(o,u){clearTimeout(r),t(l).off().remove(),"error"!=o.type&&i?a(i[0],h,e,n):s(null,u||"error",h,e,n),window[c]=f,i&&t.isFunction(f)&&f(i[0]),f=i=void 0}),o(h,e)===!1?(p("abort"),h):(window[c]=function(){i=arguments},l.src=e.url.replace(/\?(.+)=\?/,"?$1="+c),b.head.appendChild(l),e.timeout>0&&(r=setTimeout(function(){p("timeout")},e.timeout)),h)},t.ajaxSettings={type:"GET",beforeSend:l,success:l,error:l,complete:l,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:"text/javascript, application/javascript, application/x-javascript",json:j,xml:"application/xml, text/xml",html:T,text:"text/plain"},crossDomain:!1,timeout:0,processData:!0,cache:!0,dataFilter:l},t.ajax=function(e){var n,r,u=t.extend({},e||{}),d=t.Deferred&&t.Deferred();for(y in t.ajaxSettings)void 0===u[y]&&(u[y]=t.ajaxSettings[y]);i(u),u.crossDomain||(n=b.createElement("a"),n.href=u.url,n.href=n.href,u.crossDomain=C.protocol+"//"+C.host!=n.protocol+"//"+n.host),u.url||(u.url=window.location.toString()),(r=u.url.indexOf("#"))>-1&&(u.url=u.url.slice(0,r)),h(u);var m=u.dataType,g=/\?.+=\?/.test(u.url);if(g&&(m="jsonp"),u.cache!==!1&&(e&&e.cache===!0||"script"!=m&&"jsonp"!=m)||(u.url=p(u.url,"_="+Date.now())),"jsonp"==m)return g||(u.url=p(u.url,u.jsonp?u.jsonp+"=?":u.jsonp===!1?"":"callback=?")),t.ajaxJSONP(u,d);var x,w=u.accepts[m],E={},j=function(t,e){E[t.toLowerCase()]=[t,e]},T=/^([\w-]+:)\/\//.test(u.url)?RegExp.$1:window.location.protocol,N=u.xhr(),O=N.setRequestHeader;if(d&&d.promise(N),u.crossDomain||j("X-Requested-With","XMLHttpRequest"),j("Accept",w||"*/*"),(w=u.mimeType||w)&&(w.indexOf(",")>-1&&(w=w.split(",",2)[0]),N.overrideMimeType&&N.overrideMimeType(w)),(u.contentType||u.contentType!==!1&&u.data&&"GET"!=u.type.toUpperCase())&&j("Content-Type",u.contentType||"application/x-www-form-urlencoded"),u.headers)for(v in u.headers)j(v,u.headers[v]);if(N.setRequestHeader=j,N.onreadystatechange=function(){if(4==N.readyState){N.onreadystatechange=l,clearTimeout(x);var e,n=!1;if(N.status>=200&&N.status<300||304==N.status||0==N.status&&"file:"==T){if(m=m||f(u.mimeType||N.getResponseHeader("content-type")),"arraybuffer"==N.responseType||"blob"==N.responseType)e=N.response;else{e=N.responseText;try{e=c(e,m,u),"script"==m?(0,eval)(e):"xml"==m?e=N.responseXML:"json"==m&&(e=S.test(e)?null:t.parseJSON(e))}catch(i){n=i}if(n)return s(n,"parsererror",N,u,d)}a(e,N,u,d)}else s(N.statusText||null,N.status?"error":"abort",N,u,d)}},o(N,u)===!1)return N.abort(),s(null,"abort",N,u,d),N;var P=!("async"in u)||u.async;if(N.open(u.type,u.url,P,u.username,u.password),u.xhrFields)for(v in u.xhrFields)N[v]=u.xhrFields[v];for(v in E)O.apply(N,E[v]);return u.timeout>0&&(x=setTimeout(function(){N.onreadystatechange=l,N.abort(),s(null,"timeout",N,u,d)},u.timeout)),N.send(u.data?u.data:null),N},t.get=function(){return t.ajax(d.apply(null,arguments))},t.post=function(){var e=d.apply(null,arguments);return e.type="POST",t.ajax(e)},t.getJSON=function(){var e=d.apply(null,arguments);return e.dataType="json",t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var r,o=this,a=e.split(/\s/),s=d(e,n,i),u=s.success;return a.length>1&&(s.url=a[0],r=a[1]),s.success=function(e){o.html(r?t("<div>").html(e.replace(x,"")).find(r):e),u&&u.apply(o,arguments)},t.ajax(s),this};var N=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&&(n=n()),null==n&&(n=""),this.push(N(e)+"="+N(n))},m(i,e,n),i.join("&").replace(/%20/g,"+")}}(e),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&&t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&&"fieldset"!=o.nodeName.toLowerCase()&&!o.disabled&&"submit"!=n&&"reset"!=n&&"button"!=n&&"file"!=n&&("radio"!=n&&"checkbox"!=n||o.checked)&&r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value))}),t.join("&")},t.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var n=t.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(e),function(){try{getComputedStyle(void 0)}catch(t){var e=getComputedStyle;window.getComputedStyle=function(t,n){try{return e(t,n)}catch(i){return null}}}}(),t("zepto",e)}),layui.define(["layer-mobile","zepto"],function(t){"use strict";var e=layui.zepto,n=layui["layer-mobile"],i=(layui.device(),"layui-upload-enter"),r="layui-upload-iframe",o={icon:2,shift:6},a={file:"文件",video:"视频",audio:"音频"};n.msg=function(t){return n.open({content:t||"",skin:"msg",time:2})};var s=function(t){this.options=t};s.prototype.init=function(){var t=this,n=t.options,o=e("body"),s=e(n.elem||".layui-upload-file"),u=e('<iframe id="'+r+'" class="'+r+'" name="'+r+'"></iframe>');return e("#"+r)[0]||o.append(u),s.each(function(o,s){s=e(s);var u='<form target="'+r+'" method="'+(n.method||"post")+'" key="set-mine" enctype="multipart/form-data" action="'+(n.url||"")+'"></form>',c=s.attr("lay-type")||n.type;n.unwrap||(u='<div class="layui-box layui-upload-button">'+u+'<span class="layui-upload-icon"><i class="layui-icon">&#xe608;</i>'+(s.attr("lay-title")||n.title||"上传"+(a[c]||"图片"))+"</span></div>"),u=e(u),n.unwrap||u.on("dragover",function(t){t.preventDefault(),e(this).addClass(i)}).on("dragleave",function(){e(this).removeClass(i)}).on("drop",function(){e(this).removeClass(i)}),s.parent("form").attr("target")===r&&(n.unwrap?s.unwrap():(s.parent().next().remove(),s.unwrap().unwrap())),s.wrap(u),s.off("change").on("change",function(){t.action(this,c);
})})},s.prototype.action=function(t,i){var a=this,s=a.options,u=t.value,c=e(t),l=c.attr("lay-ext")||s.ext||"";if(u){switch(i){case"file":if(l&&!RegExp("\\w\\.("+l+")$","i").test(escape(u)))return n.msg("不支持该文件格式",o),t.value="";break;case"video":if(!RegExp("\\w\\.("+(l||"avi|mp4|wma|rmvb|rm|flash|3gp|flv")+")$","i").test(escape(u)))return n.msg("不支持该视频格式",o),t.value="";break;case"audio":if(!RegExp("\\w\\.("+(l||"mp3|wav|mid")+")$","i").test(escape(u)))return n.msg("不支持该音频格式",o),t.value="";break;default:if(!RegExp("\\w\\.("+(l||"jpg|png|gif|bmp|jpeg")+")$","i").test(escape(u)))return n.msg("不支持该图片格式",o),t.value=""}s.before&&s.before(t),c.parent().submit();var f=e("#"+r),p=setInterval(function(){var e;try{e=f.contents().find("body").text()}catch(i){n.msg("上传接口存在跨域",o),clearInterval(p)}if(e){clearInterval(p),f.contents().find("body").html("");try{e=JSON.parse(e)}catch(i){return e={},n.msg("请对上传接口返回JSON字符",o)}"function"==typeof s.success&&s.success(e,t)}},30);t.value=""}},t("upload-mobile",function(t){var e=new s(t=t||{});e.init()})}),layui.define(function(t){t("layim-mobile",layui.v)}),layui["layui.mobile"]||layui.config({base:layui.cache.dir+"lay/modules/mobile/"}).extend({"layer-mobile":"layer-mobile",zepto:"zepto","upload-mobile":"upload-mobile","layim-mobile":"layim-mobile"}),layui.define(["layer-mobile","zepto","layim-mobile"],function(t){t("mobile",{layer:layui["layer-mobile"],layim:layui["layim-mobile"]})});