(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{3825:function(n,e,t){Promise.resolve().then(t.t.bind(t,4892,23)),Promise.resolve().then(t.t.bind(t,7891,23)),Promise.resolve().then(t.t.bind(t,2916,23)),Promise.resolve().then(t.bind(t,8011))},7891:function(){},2916:function(){},4892:function(){},622:function(n,e,t){"use strict";var r=t(2265),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(n,e,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==e.key&&(c=""+e.key),void 0!==e.ref&&(l=e.ref),e)o.call(e,r)&&!s.hasOwnProperty(r)&&(i[r]=e[r]);if(n&&n.defaultProps)for(r in e=n.defaultProps)void 0===i[r]&&(i[r]=e[r]);return{$$typeof:a,type:n,key:c,ref:l,props:i,_owner:u.current}}e.Fragment=i,e.jsx=c,e.jsxs=c},7437:function(n,e,t){"use strict";n.exports=t(622)},8011:function(n,e,t){"use strict";t.r(e),t.d(e,{Fireworks:function(){return nr}});var r,a,i=t(7437),o=t(2265),u={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},s={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},c=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],l={CSS:{},springs:{}};function f(n,e,t){return Math.min(Math.max(n,e),t)}function d(n,e){return n.indexOf(e)>-1}function h(n,e){return n.apply(null,e)}var p={arr:function(n){return Array.isArray(n)},obj:function(n){return d(Object.prototype.toString.call(n),"Object")},pth:function(n){return p.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||p.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},nil:function(n){return p.und(n)||null===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return p.hex(n)||p.rgb(n)||p.hsl(n)},key:function(n){return!u.hasOwnProperty(n)&&!s.hasOwnProperty(n)&&"targets"!==n&&"keyframes"!==n}};function m(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function v(n,e){var t=m(n),r=f(p.und(t[0])?1:t[0],.1,100),a=f(p.und(t[1])?100:t[1],.1,100),i=f(p.und(t[2])?10:t[2],.1,100),o=f(p.und(t[3])?0:t[3],.1,100),u=Math.sqrt(a/r),s=i/(2*Math.sqrt(a*r)),c=s<1?u*Math.sqrt(1-s*s):0,d=s<1?(s*u+-o)/c:-o+u;function h(n){var t=e?e*n/1e3:n;return(t=s<1?Math.exp(-t*s*u)*(1*Math.cos(c*t)+d*Math.sin(c*t)):(1+d*t)*Math.exp(-t*u),0===n||1===n)?n:1-t}return e?h:function(){var e=l.springs[n];if(e)return e;for(var t=1/6,r=0,a=0;;)if(1===h(r+=t)){if(++a>=16)break}else a=0;var i=r*t*1e3;return l.springs[n]=i,i}}function g(n){return void 0===n&&(n=10),function(e){return Math.ceil(f(e,1e-6,1)*n)*(1/n)}}var y=function(){function n(n,e,t){return(((1-3*t+3*e)*n+(3*t-6*e))*n+3*e)*n}function e(n,e,t){return 3*(1-3*t+3*e)*n*n+2*(3*t-6*e)*n+3*e}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var o=new Float32Array(11);if(t!==r||a!==i)for(var u=0;u<11;++u)o[u]=n(.1*u,t,a);return function(u){return t===r&&a===i||0===u||1===u?u:n(function(r){for(var i=0,u=1;10!==u&&o[u]<=r;++u)i+=.1;var s=i+(r-o[--u])/(o[u+1]-o[u])*.1,c=e(s,t,a);return c>=.001?function(t,r,a,i){for(var o=0;o<4;++o){var u=e(r,a,i);if(0===u)break;var s=n(r,a,i)-t;r-=s/u}return r}(r,s,t,a):0===c?s:function(e,t,r,a,i){var o,u,s=0;do(o=n(u=t+(r-t)/2,a,i)-e)>0?r=u:t=u;while(Math.abs(o)>1e-7&&++s<10);return u}(r,i,i+.1,t,a)}(u),r,i)}}}}(),b=(r={linear:function(){return function(n){return n}}},a={Sine:function(){return function(n){return 1-Math.cos(n*Math.PI/2)}},Circ:function(){return function(n){return 1-Math.sqrt(1-n*n)}},Back:function(){return function(n){return n*n*(3*n-2)}},Bounce:function(){return function(n){for(var e,t=4;n<((e=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*e-2)/22-n,2)}},Elastic:function(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var t=f(n,1,10),r=f(e,.1,2);return function(n){return 0===n||1===n?n:-t*Math.pow(2,10*(n-1))*Math.sin((n-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(n,e){a[n]=function(){return function(n){return Math.pow(n,e+2)}}}),Object.keys(a).forEach(function(n){var e=a[n];r["easeIn"+n]=e,r["easeOut"+n]=function(n,t){return function(r){return 1-e(n,t)(1-r)}},r["easeInOut"+n]=function(n,t){return function(r){return r<.5?e(n,t)(2*r)/2:1-e(n,t)(-2*r+2)/2}},r["easeOutIn"+n]=function(n,t){return function(r){return r<.5?(1-e(n,t)(1-2*r))/2:(e(n,t)(2*r-1)+1)/2}}}),r);function w(n,e){if(p.fnc(n))return n;var t=n.split("(")[0],r=b[t],a=m(n);switch(t){case"spring":return v(n,e);case"cubicBezier":return h(y,a);case"steps":return h(g,a);default:return h(r,a)}}function x(n){try{return document.querySelectorAll(n)}catch(n){return}}function M(n,e){for(var t=n.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in n){var o=n[i];e.call(r,o,i,n)&&a.push(o)}return a}function P(n){return n.reduce(function(n,e){return n.concat(p.arr(e)?P(e):e)},[])}function k(n){return p.arr(n)?n:(p.str(n)&&(n=x(n)||n),n instanceof NodeList||n instanceof HTMLCollection)?[].slice.call(n):[n]}function O(n,e){return n.some(function(n){return n===e})}function E(n){var e={};for(var t in n)e[t]=n[t];return e}function C(n,e){var t=E(n);for(var r in n)t[r]=e.hasOwnProperty(r)?e[r]:n[r];return t}function I(n,e){var t=E(n);for(var r in e)t[r]=p.und(n[r])?e[r]:n[r];return t}function D(n){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[1]}function T(n,e){return p.fnc(n)?n(e.target,e.id,e.total):n}function _(n,e){return n.getAttribute(e)}function B(n,e,t){if(O([t,"deg","rad","turn"],D(e)))return e;var r=l.CSS[e+t];if(!p.und(r))return r;var a=document.createElement(n.tagName),i=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+t;var o=100/a.offsetWidth;i.removeChild(a);var u=o*parseFloat(e);return l.CSS[e+t]=u,u}function N(n,e,t){if(e in n.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(r)||"0";return t?B(n,a,t):a}}function S(n,e){return p.dom(n)&&!p.inp(n)&&(!p.nil(_(n,e))||p.svg(n)&&n[e])?"attribute":p.dom(n)&&O(c,e)?"transform":p.dom(n)&&"transform"!==e&&N(n,e)?"css":null!=n[e]?"object":void 0}function F(n){if(p.dom(n)){for(var e,t=n.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(t);)a.set(e[1],e[2]);return a}}function A(n,e,t,r){switch(S(n,e)){case"transform":var a,i;return a=d(e,"scale")?1:0+(d(e,"translate")||"perspective"===e?"px":d(e,"rotate")||d(e,"skew")?"deg":void 0),i=F(n).get(e)||a,r&&(r.transforms.list.set(e,i),r.transforms.last=e),t?B(n,i,t):i;case"css":return N(n,e,t);case"attribute":return _(n,e);default:return n[e]||0}}function L(n,e){var t=/^(\*=|\+=|-=)/.exec(n);if(!t)return n;var r=D(n)||0,a=parseFloat(e),i=parseFloat(n.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function R(n,e){if(p.col(n)){var t,r,a,i;return t=n,p.rgb(t)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t))?"rgba("+r[1]+",1)":t:p.hex(t)?(a=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,t,r){return e+e+t+t+r+r}),"rgba("+parseInt((i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))[1],16)+","+parseInt(i[2],16)+","+parseInt(i[3],16)+",1)"):p.hsl(t)?function(n){var e,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(n,e,t){return(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?n+(e-n)*6*t:t<.5?e:t<2/3?n+(e-n)*(2/3-t)*6:n}if(0==o)e=t=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,f=2*u-l;e=c(f,l,i+1/3),t=c(f,l,i),r=c(f,l,i-1/3)}return"rgba("+255*e+","+255*t+","+255*r+","+s+")"}(t):void 0}if(/\s/g.test(n))return n;var o=D(n),u=o?n.substr(0,n.length-o.length):n;return e?u+e:u}function j(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function W(n){for(var e,t=n.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=j(e,i)),e=i}return r}function q(n){var e;if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return 2*Math.PI*_(n,"r");case"rect":return 2*_(n,"width")+2*_(n,"height");case"line":return j({x:_(n,"x1"),y:_(n,"y1")},{x:_(n,"x2"),y:_(n,"y2")});case"polyline":return W(n);case"polygon":return e=n.points,W(n)+j(e.getItem(e.numberOfItems-1),e.getItem(0))}}function H(n,e){var t=e||{},r=t.el||function(n){for(var e=n.parentNode;p.svg(e)&&p.svg(e.parentNode);)e=e.parentNode;return e}(n),a=r.getBoundingClientRect(),i=_(r,"viewBox"),o=a.width,u=a.height,s=t.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function $(n,e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=R(p.pth(n)?n.totalLength:n,e)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:p.str(n)||e?r.split(t):[]}}function Y(n){return M(n?P(p.arr(n)?n.map(k):k(n)):[],function(n,e,t){return t.indexOf(n)===e})}function V(n){var e=Y(n);return e.map(function(n,t){return{target:n,id:t,total:e.length,transforms:{list:F(n)}}})}var X={css:function(n,e,t){return n.style[e]=t},attribute:function(n,e,t){return n.setAttribute(e,t)},object:function(n,e,t){return n[e]=t},transform:function(n,e,t,r,a){if(r.list.set(e,t),e===r.last||a){var i="";r.list.forEach(function(n,e){i+=e+"("+n+") "}),n.style.transform=i}}};function Z(n,e){V(n).forEach(function(n){for(var t in e){var r=T(e[t],n),a=n.target,i=D(r),o=A(a,t,i,n),u=L(R(r,i||D(o)),o);X[S(a,t)](a,t,u,n.transforms,!0)}})}function z(n,e){var t=n.length,r=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,n.map(function(n){return r(n)+n.duration})):e.duration,a.delay=t?Math.min.apply(Math,n.map(function(n){return r(n)+n.delay})):e.delay,a.endDelay=t?a.duration-Math.max.apply(Math,n.map(function(n){return r(n)+n.duration-n.endDelay})):e.endDelay,a}var G=0,Q=[],U=function(){var n;function e(t){for(var r=Q.length,a=0;a<r;){var i=Q[a];i.paused?(Q.splice(a,1),r--):(i.tick(t),a++)}n=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){K.suspendWhenDocumentHidden&&(J()?n=cancelAnimationFrame(n):(Q.forEach(function(n){return n._onDocumentVisibility()}),U()))}),function(){n||J()&&K.suspendWhenDocumentHidden||!(Q.length>0)||(n=requestAnimationFrame(e))}}();function J(){return!!document&&document.hidden}function K(n){void 0===n&&(n={});var e,t,r,a,i,o,c,l,d,h=0,m=0,g=0,y=0,b=null;function x(n){var e=window.Promise&&new Promise(function(n){return b=n});return n.finished=e,e}var k=(t=C(u,e=n),a=function(n,e){var t=[],r=e.keyframes;for(var a in r&&(e=I(function(n){for(var e=M(P(n.map(function(n){return Object.keys(n)})),function(n){return p.key(n)}).reduce(function(n,e){return 0>n.indexOf(e)&&n.push(e),n},[]),t={},r=0;r<e.length;r++)!function(r){var a=e[r];t[a]=n.map(function(n){var e={};for(var t in n)p.key(t)?t==a&&(e.value=n[t]):e[t]=n[t];return e})}(r);return t}(r),e)),e)p.key(a)&&t.push({name:a,tweens:function(n,e){var t=E(e);if(/^spring/.test(t.easing)&&(t.duration=v(t.easing)),p.arr(n)){var r=n.length;2!==r||p.obj(n[0])?p.fnc(e.duration)||(t.duration=e.duration/r):n={value:n}}var a=p.arr(n)?n:[n];return a.map(function(n,t){var r=p.obj(n)&&!p.pth(n)?n:{value:n};return p.und(r.delay)&&(r.delay=t?0:e.delay),p.und(r.endDelay)&&(r.endDelay=t===a.length-1?e.endDelay:0),r}).map(function(n){return I(n,t)})}(e[a],n)});return t}(r=C(s,e),e),c=z(o=M(P((i=V(e.targets)).map(function(n){return a.map(function(e){return function(n,e){var t=S(n.target,e.name);if(t){var r,a=e.tweens.map(function(t){var a=function(n,e){var t={};for(var r in n){var a=T(n[r],e);p.arr(a)&&1===(a=a.map(function(n){return T(n,e)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(t,n),i=a.value,o=p.arr(i)?i[1]:i,u=D(o),s=A(n.target,e.name,u,n),c=r?r.to.original:s,l=p.arr(i)?i[0]:c,f=D(l)||D(s),d=u||f;return p.und(o)&&(o=c),a.from=$(l,d),a.to=$(L(o,l),d),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=w(a.easing,a.duration),a.isPath=p.pth(i),a.isPathTargetInsideSVG=a.isPath&&p.svg(n.target),a.isColor=p.col(a.from.original),a.isColor&&(a.round=1),r=a,a}),i=a[a.length-1];return{type:t,property:e.name,animatable:n,tweens:a,duration:i.end,delay:a[0].delay,endDelay:i.endDelay}}}(n,e)})})),function(n){return!p.und(n)}),r),l=G,G++,I(t,{id:l,children:[],animatables:i,animations:o,duration:c.duration,delay:c.delay,endDelay:c.endDelay}));function O(){var n=k.direction;"alternate"!==n&&(k.direction="normal"!==n?"normal":"reverse"),k.reversed=!k.reversed,d.forEach(function(n){return n.reversed=k.reversed})}function _(n){return k.reversed?k.duration-n:n}function B(){h=0,m=_(k.currentTime)*(1/K.speed)}function N(n,e){e&&e.seek(n-e.timelineOffset)}function F(n){for(var e=0,t=k.animations,r=t.length;e<r;){var a=t[e],i=a.animatable,o=a.tweens,u=o.length-1,s=o[u];u&&(s=M(o,function(e){return n<e.end})[0]||s);for(var c=f(n-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(c)?1:s.easing(c),d=s.to.strings,h=s.round,p=[],m=s.to.numbers.length,v=void 0,g=0;g<m;g++){var y=void 0,b=s.to.numbers[g],w=s.from.numbers[g]||0;y=s.isPath?function(n,e,t){function r(t){void 0===t&&(t=0);var r=e+t>=1?e+t:0;return n.el.getPointAtLength(r)}var a=H(n.el,n.svg),i=r(),o=r(-1),u=r(1),s=t?1:a.w/a.vW,c=t?1:a.h/a.vH;switch(n.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}(s.value,l*b,s.isPathTargetInsideSVG):w+l*(b-w),h&&!(s.isColor&&g>2)&&(y=Math.round(y*h)/h),p.push(y)}var x=d.length;if(x){v=d[0];for(var P=0;P<x;P++){d[P];var O=d[P+1],E=p[P];isNaN(E)||(O?v+=E+O:v+=E+" ")}}else v=p[0];X[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,e++}}function R(n){k[n]&&!k.passThrough&&k[n](k)}function j(n){var e=k.duration,t=k.delay,r=e-k.endDelay,a=_(n);k.progress=f(a/e*100,0,100),k.reversePlayback=a<k.currentTime,d&&function(n){if(k.reversePlayback)for(var e=y;e--;)N(n,d[e]);else for(var t=0;t<y;t++)N(n,d[t])}(a),!k.began&&k.currentTime>0&&(k.began=!0,R("begin")),!k.loopBegan&&k.currentTime>0&&(k.loopBegan=!0,R("loopBegin")),a<=t&&0!==k.currentTime&&F(0),(a>=r&&k.currentTime!==e||!e)&&F(e),a>t&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,R("changeBegin")),R("change"),F(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,R("changeComplete")),k.currentTime=f(a,0,e),k.began&&R("update"),n>=e&&(m=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(h=g,R("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&O()):(k.paused=!0,!k.completed&&(k.completed=!0,R("loopComplete"),R("complete"),!k.passThrough&&"Promise"in window&&(b(),x(k)))))}return x(k),k.reset=function(){var n=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===n,k.remaining=k.loop,y=(d=k.children).length;for(var e=y;e--;)k.children[e].reset();(k.reversed&&!0!==k.loop||"alternate"===n&&1===k.loop)&&k.remaining++,F(k.reversed?k.duration:0)},k._onDocumentVisibility=B,k.set=function(n,e){return Z(n,e),k},k.tick=function(n){g=n,h||(h=g),j((g+(m-h))*K.speed)},k.seek=function(n){j(_(n))},k.pause=function(){k.paused=!0,B()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,Q.push(k),B(),U())},k.reverse=function(){O(),k.completed=!k.reversed,B()},k.restart=function(){k.reset(),k.play()},k.remove=function(n){ne(Y(n),k)},k.reset(),k.autoplay&&k.play(),k}function nn(n,e){for(var t=e.length;t--;)O(n,e[t].animatable.target)&&e.splice(t,1)}function ne(n,e){var t=e.animations,r=e.children;nn(n,t);for(var a=r.length;a--;){var i=r[a],o=i.animations;nn(n,o),o.length||i.children.length||r.splice(a,1)}t.length||r.length||e.pause()}K.version="3.2.1",K.speed=1,K.suspendWhenDocumentHidden=!0,K.running=Q,K.remove=function(n){for(var e=Y(n),t=Q.length;t--;)ne(e,Q[t])},K.get=A,K.set=Z,K.convertPx=B,K.path=function(n,e){var t=p.str(n)?x(n)[0]:n,r=e||100;return function(n){return{property:n,el:t,svg:H(t),totalLength:q(t)*(r/100)}}},K.setDashoffset=function(n){var e=q(n);return n.setAttribute("stroke-dasharray",e),e},K.stagger=function(n,e){void 0===e&&(e={});var t=e.direction||"normal",r=e.easing?w(e.easing):null,a=e.grid,i=e.axis,o=e.from||0,u="first"===o,s="center"===o,c="last"===o,l=p.arr(n),f=l?parseFloat(n[0]):parseFloat(n),d=l?parseFloat(n[1]):0,h=D(l?n[1]:n)||0,m=e.start||0+(l?f:0),v=[],g=0;return function(n,e,p){if(u&&(o=0),s&&(o=(p-1)/2),c&&(o=p-1),!v.length){for(var y=0;y<p;y++){if(a){var b=s?(a[0]-1)/2:o%a[0],w=s?(a[1]-1)/2:Math.floor(o/a[0]),x=y%a[0],M=Math.floor(y/a[0]),P=b-x,k=w-M,O=Math.sqrt(P*P+k*k);"x"===i&&(O=-P),"y"===i&&(O=-k),v.push(O)}else v.push(Math.abs(o-y));g=Math.max.apply(Math,v)}r&&(v=v.map(function(n){return r(n/g)*g})),"reverse"===t&&(v=v.map(function(n){return i?n<0?-1*n:-n:Math.abs(g-n)}))}return m+(l?(d-f)/g:f)*(Math.round(100*v[e])/100)+h}},K.timeline=function(n){void 0===n&&(n={});var e=K(n);return e.duration=0,e.add=function(t,r){var a=Q.indexOf(e),i=e.children;function o(n){n.passThrough=!0}a>-1&&Q.splice(a,1);for(var u=0;u<i.length;u++)o(i[u]);var c=I(t,C(s,n));c.targets=c.targets||n.targets;var l=e.duration;c.autoplay=!1,c.direction=e.direction,c.timelineOffset=p.und(r)?l:L(r,l),o(e),e.seek(c.timelineOffset);var f=K(c);o(f),i.push(f);var d=z(i,n);return e.delay=d.delay,e.endDelay=d.endDelay,e.duration=d.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},K.easing=w,K.penner=b,K.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var nt=K;let nr=()=>{let n=(0,o.useRef)(!1);return o.useEffect(()=>{n.current||(function(n){let e=["102, 167, 221","62, 131, 225","33, 78, 194"];n=Object.assign({colors:e,numberOfParticules:20,orbitRadius:{min:50,max:100},circleRadius:{min:10,max:20},diffuseRadius:{min:50,max:100},animeDuration:{min:900,max:1500}},n);let t=0,r=0,a=n.colors||e,i=document.querySelector(".fireworks"),o=i.getContext("2d");function u(n){n.width=window.innerWidth,n.height=window.innerHeight,n.style.width="".concat(window.innerWidth,"px"),n.style.height="".concat(window.innerHeight,"px")}function s(n){for(let e=0;e<n.animatables.length;e++)n.animatables[e].target.draw()}let c=nt({duration:1/0,update:()=>{o.clearRect(0,0,i.width,i.height)}});document.addEventListener("mousedown",e=>{c.play(),t=e.clientX||(e.touches[0]?e.touches[0].clientX:e.changedTouches[0].clientX),r=e.clientY||(e.touches[0]?e.touches[0].clientY:e.changedTouches[0].clientY),function(e,t){let r=function(n,e){let t={x:n,y:e,color:"#000",radius:.1,alpha:.5,lineWidth:6,draw(){}};return t.draw=function(){o.globalAlpha=t.alpha,o.beginPath(),o.arc(t.x,t.y,t.radius,0,2*Math.PI,!0),o.lineWidth=t.lineWidth,o.strokeStyle=t.color,o.stroke(),o.globalAlpha=1},t}(e,t),i=[];for(let r=0;r<n.numberOfParticules;r++)i.push(function(e,t){let r={x:e,y:t,color:"rgba(".concat(a[nt.random(0,a.length-1)],",").concat(nt.random(.2,.8),")"),radius:nt.random(n.circleRadius.min,n.circleRadius.max),endPos:null,draw(){}};return r.endPos=function(e){let t=nt.random(0,360)*Math.PI/180,r=nt.random(n.diffuseRadius.min,n.diffuseRadius.max),a=[-1,1][nt.random(0,1)]*r;return{x:e.x+a*Math.cos(t),y:e.y+a*Math.sin(t)}}(r),r.draw=function(){o.beginPath(),o.arc(r.x,r.y,r.radius,0,2*Math.PI,!0),o.fillStyle=r.color,o.fill()},r}(e,t));nt.timeline().add({targets:i,x:n=>n.endPos.x,y:n=>n.endPos.y,radius:.1,duration:nt.random(n.animeDuration.min,n.animeDuration.max),easing:"easeOutExpo",update:s}).add({targets:r,radius:nt.random(n.orbitRadius.min,n.orbitRadius.max),lineWidth:0,alpha:{value:0,easing:"linear",duration:nt.random(600,800)},duration:nt.random(1200,1800),easing:"easeOutExpo",update:s},0)}(t,r)},!1),u(i),window.addEventListener("resize",()=>{u(i)},!1)}({}),n.current=!0)},[n]),(0,i.jsx)("canvas",{id:"fireworks",className:"fireworks"})}}},function(n){n.O(0,[29,971,472,744],function(){return n(n.s=3825)}),_N_E=n.O()}]);