(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{2434:function(e,n,t){Promise.resolve().then(t.t.bind(t,4892,23)),Promise.resolve().then(t.t.bind(t,7891,23)),Promise.resolve().then(t.t.bind(t,2916,23)),Promise.resolve().then(t.t.bind(t,9366,23)),Promise.resolve().then(t.bind(t,8011)),Promise.resolve().then(t.bind(t,7420))},7420:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return o}});var r=t(7437),a=t(4033),i=t(2265);function o(){let[e,n]=(0,i.useState)(""),t=(0,a.useRouter)(),o=e=>{console.log(111),n(e=""===e?"/":"/pages/".concat(e)),t.push(e)};return(0,i.useEffect)(()=>{n(window.location.pathname);let e=document.querySelector(".top-bar"),t=document.querySelector("body");t.addEventListener("mousemove",n=>{"/pages/music"===window.location.pathname&&(n.screenY<200?e.classList.replace("h-0","h-16"):e.classList.replace("h-16","h-0"))})},[]),(0,i.useEffect)(()=>{if(e||n(window.location.pathname),"/pages/music"!==window.location.pathname){let e=document.querySelector(".top-bar");e.classList.replace("h-0","h-16")}},[e]),(0,r.jsx)("div",{className:"w-screen overflow-hidden h-0 top-bar transition-all duration-[1s]",children:(0,r.jsxs)("div",{className:"row place-items-center h-full mx-auto w-full xl:w-3/5 font-bold",children:[(0,r.jsxs)("div",{className:"left col flex justify-start items-center font-thin",children:[(0,r.jsx)("i",{className:"bi-activity text-[25px] mr-4"}),"Lycoiref's Blog"]}),(0,r.jsxs)("div",{className:"text-center col-8 flex justify-center font-thin",children:[(0,r.jsxs)("div",{className:"item",onClick:()=>o(""),children:[(0,r.jsx)("i",{className:"bi bi-house"}),(0,r.jsx)("div",{className:"text",children:"首页"})]}),(0,r.jsxs)("div",{className:"item",onClick:()=>o("archive"),children:[(0,r.jsx)("i",{className:"bi bi-book"}),(0,r.jsx)("div",{className:"text",children:"归档"})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("i",{className:"bi bi-chat-left-text"}),(0,r.jsx)("div",{className:"text",children:"友链"})]}),(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("i",{className:"bi bi-image"}),(0,r.jsx)("div",{className:"text",children:"图库"})]}),(0,r.jsx)("div",{className:"hidden xl:block",children:(0,r.jsxs)("div",{className:"item",children:[(0,r.jsx)("i",{className:"bi bi-music-note-list"}),(0,r.jsx)("div",{className:"text",onClick:()=>o("music"),children:"OST"})]})})]}),(0,r.jsx)("div",{className:"right col flex justify-end",children:(0,r.jsx)("div",{className:" w-[40px] h-[40px]  cursor-pointer  hover:bg-slate-300  rounded-full  flex justify-center items-center transition-all duration-300 ",children:(0,r.jsx)("i",{className:"bi bi-search text-[20px]"})})})]})})}},9366:function(){},7891:function(){},2916:function(){},4892:function(){},622:function(e,n,t){"use strict";var r=t(2265),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,r)&&!s.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:l,props:i,_owner:u.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},7437:function(e,n,t){"use strict";e.exports=t(622)},4033:function(e,n,t){e.exports=t(94)},8011:function(e,n,t){"use strict";t.r(n),t.d(n,{Fireworks:function(){return er}});var r,a,i=t(7437),o=t(2265),u={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},s={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},c=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],l={CSS:{},springs:{}};function d(e,n,t){return Math.min(Math.max(e,n),t)}function f(e,n){return e.indexOf(n)>-1}function h(e,n){return e.apply(null,n)}var m={arr:function(e){return Array.isArray(e)},obj:function(e){return f(Object.prototype.toString.call(e),"Object")},pth:function(e){return m.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||m.svg(e)},str:function(e){return"string"==typeof e},fnc:function(e){return"function"==typeof e},und:function(e){return void 0===e},nil:function(e){return m.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return m.hex(e)||m.rgb(e)||m.hsl(e)},key:function(e){return!u.hasOwnProperty(e)&&!s.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function p(e){var n=/\(([^)]+)\)/.exec(e);return n?n[1].split(",").map(function(e){return parseFloat(e)}):[]}function v(e,n){var t=p(e),r=d(m.und(t[0])?1:t[0],.1,100),a=d(m.und(t[1])?100:t[1],.1,100),i=d(m.und(t[2])?10:t[2],.1,100),o=d(m.und(t[3])?0:t[3],.1,100),u=Math.sqrt(a/r),s=i/(2*Math.sqrt(a*r)),c=s<1?u*Math.sqrt(1-s*s):0,f=s<1?(s*u+-o)/c:-o+u;function h(e){var t=n?n*e/1e3:e;return(t=s<1?Math.exp(-t*s*u)*(1*Math.cos(c*t)+f*Math.sin(c*t)):(1+f*t)*Math.exp(-t*u),0===e||1===e)?e:1-t}return n?h:function(){var n=l.springs[e];if(n)return n;for(var t=1/6,r=0,a=0;;)if(1===h(r+=t)){if(++a>=16)break}else a=0;var i=r*t*1e3;return l.springs[e]=i,i}}function g(e){return void 0===e&&(e=10),function(n){return Math.ceil(d(n,1e-6,1)*e)*(1/e)}}var y=function(){function e(e,n,t){return(((1-3*t+3*n)*e+(3*t-6*n))*e+3*n)*e}function n(e,n,t){return 3*(1-3*t+3*n)*e*e+2*(3*t-6*n)*e+3*n}return function(t,r,a,i){if(0<=t&&t<=1&&0<=a&&a<=1){var o=new Float32Array(11);if(t!==r||a!==i)for(var u=0;u<11;++u)o[u]=e(.1*u,t,a);return function(u){return t===r&&a===i||0===u||1===u?u:e(function(r){for(var i=0,u=1;10!==u&&o[u]<=r;++u)i+=.1;var s=i+(r-o[--u])/(o[u+1]-o[u])*.1,c=n(s,t,a);return c>=.001?function(t,r,a,i){for(var o=0;o<4;++o){var u=n(r,a,i);if(0===u)break;var s=e(r,a,i)-t;r-=s/u}return r}(r,s,t,a):0===c?s:function(n,t,r,a,i){var o,u,s=0;do(o=e(u=t+(r-t)/2,a,i)-n)>0?r=u:t=u;while(Math.abs(o)>1e-7&&++s<10);return u}(r,i,i+.1,t,a)}(u),r,i)}}}}(),x=(r={linear:function(){return function(e){return e}}},a={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){for(var n,t=4;e<((n=Math.pow(2,--t))-1)/11;);return 1/Math.pow(4,3-t)-7.5625*Math.pow((3*n-2)/22-e,2)}},Elastic:function(e,n){void 0===e&&(e=1),void 0===n&&(n=.5);var t=d(e,1,10),r=d(n,.1,2);return function(e){return 0===e||1===e?e:-t*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/t))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach(function(e,n){a[e]=function(){return function(e){return Math.pow(e,n+2)}}}),Object.keys(a).forEach(function(e){var n=a[e];r["easeIn"+e]=n,r["easeOut"+e]=function(e,t){return function(r){return 1-n(e,t)(1-r)}},r["easeInOut"+e]=function(e,t){return function(r){return r<.5?n(e,t)(2*r)/2:1-n(e,t)(-2*r+2)/2}},r["easeOutIn"+e]=function(e,t){return function(r){return r<.5?(1-n(e,t)(1-2*r))/2:(n(e,t)(2*r-1)+1)/2}}}),r);function b(e,n){if(m.fnc(e))return e;var t=e.split("(")[0],r=x[t],a=p(e);switch(t){case"spring":return v(e,n);case"cubicBezier":return h(y,a);case"steps":return h(g,a);default:return h(r,a)}}function w(e){try{return document.querySelectorAll(e)}catch(e){return}}function M(e,n){for(var t=e.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<t;i++)if(i in e){var o=e[i];n.call(r,o,i,e)&&a.push(o)}return a}function N(e){return e.reduce(function(e,n){return e.concat(m.arr(n)?N(n):n)},[])}function k(e){return m.arr(e)?e:(m.str(e)&&(e=w(e)||e),e instanceof NodeList||e instanceof HTMLCollection)?[].slice.call(e):[e]}function P(e,n){return e.some(function(e){return e===n})}function j(e){var n={};for(var t in e)n[t]=e[t];return n}function O(e,n){var t=j(e);for(var r in e)t[r]=n.hasOwnProperty(r)?n[r]:e[r];return t}function E(e,n){var t=j(e);for(var r in n)t[r]=m.und(e[r])?n[r]:e[r];return t}function C(e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(n)return n[1]}function I(e,n){return m.fnc(e)?e(n.target,n.id,n.total):e}function D(e,n){return e.getAttribute(n)}function S(e,n,t){if(P([t,"deg","rad","turn"],C(n)))return n;var r=l.CSS[n+t];if(!m.und(r))return r;var a=document.createElement(e.tagName),i=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+t;var o=100/a.offsetWidth;i.removeChild(a);var u=o*parseFloat(n);return l.CSS[n+t]=u,u}function T(e,n,t){if(n in e.style){var r=n.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=e.style[n]||getComputedStyle(e).getPropertyValue(r)||"0";return t?S(e,a,t):a}}function _(e,n){return m.dom(e)&&!m.inp(e)&&(!m.nil(D(e,n))||m.svg(e)&&e[n])?"attribute":m.dom(e)&&P(c,n)?"transform":m.dom(e)&&"transform"!==n&&T(e,n)?"css":null!=e[n]?"object":void 0}function B(e){if(m.dom(e)){for(var n,t=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;n=r.exec(t);)a.set(n[1],n[2]);return a}}function L(e,n,t,r){switch(_(e,n)){case"transform":var a,i;return a=f(n,"scale")?1:0+(f(n,"translate")||"perspective"===n?"px":f(n,"rotate")||f(n,"skew")?"deg":void 0),i=B(e).get(n)||a,r&&(r.transforms.list.set(n,i),r.transforms.last=n),t?S(e,i,t):i;case"css":return T(e,n,t);case"attribute":return D(e,n);default:return e[n]||0}}function F(e,n){var t=/^(\*=|\+=|-=)/.exec(e);if(!t)return e;var r=C(e)||0,a=parseFloat(n),i=parseFloat(e.replace(t[0],""));switch(t[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function R(e,n){if(m.col(e)){var t,r,a,i;return t=e,m.rgb(t)?(r=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(t))?"rgba("+r[1]+",1)":t:m.hex(t)?(a=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(e,n,t,r){return n+n+t+t+r+r}),"rgba("+parseInt((i=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a))[1],16)+","+parseInt(i[2],16)+","+parseInt(i[3],16)+",1)"):m.hsl(t)?function(e){var n,t,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,u=parseInt(a[3],10)/100,s=a[4]||1;function c(e,n,t){return(t<0&&(t+=1),t>1&&(t-=1),t<1/6)?e+(n-e)*6*t:t<.5?n:t<2/3?e+(n-e)*(2/3-t)*6:e}if(0==o)n=t=r=u;else{var l=u<.5?u*(1+o):u+o-u*o,d=2*u-l;n=c(d,l,i+1/3),t=c(d,l,i),r=c(d,l,i-1/3)}return"rgba("+255*n+","+255*t+","+255*r+","+s+")"}(t):void 0}if(/\s/g.test(e))return e;var o=C(e),u=o?e.substr(0,e.length-o.length):e;return n?u+n:u}function A(e,n){return Math.sqrt(Math.pow(n.x-e.x,2)+Math.pow(n.y-e.y,2))}function q(e){for(var n,t=e.points,r=0,a=0;a<t.numberOfItems;a++){var i=t.getItem(a);a>0&&(r+=A(n,i)),n=i}return r}function W(e){var n;if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return 2*Math.PI*D(e,"r");case"rect":return 2*D(e,"width")+2*D(e,"height");case"line":return A({x:D(e,"x1"),y:D(e,"y1")},{x:D(e,"x2"),y:D(e,"y2")});case"polyline":return q(e);case"polygon":return n=e.points,q(e)+A(n.getItem(n.numberOfItems-1),n.getItem(0))}}function H(e,n){var t=n||{},r=t.el||function(e){for(var n=e.parentNode;m.svg(n)&&m.svg(n.parentNode);)n=n.parentNode;return n}(e),a=r.getBoundingClientRect(),i=D(r,"viewBox"),o=a.width,u=a.height,s=t.viewBox||(i?i.split(" "):[0,0,o,u]);return{el:r,viewBox:s,x:s[0]/1,y:s[1]/1,w:o,h:u,vW:s[2],vH:s[3]}}function Y(e,n){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=R(m.pth(e)?e.totalLength:e,n)+"";return{original:r,numbers:r.match(t)?r.match(t).map(Number):[0],strings:m.str(e)||n?r.split(t):[]}}function $(e){return M(e?N(m.arr(e)?e.map(k):k(e)):[],function(e,n,t){return t.indexOf(e)===n})}function V(e){var n=$(e);return n.map(function(e,t){return{target:e,id:t,total:n.length,transforms:{list:B(e)}}})}var X={css:function(e,n,t){return e.style[n]=t},attribute:function(e,n,t){return e.setAttribute(n,t)},object:function(e,n,t){return e[n]=t},transform:function(e,n,t,r,a){if(r.list.set(n,t),n===r.last||a){var i="";r.list.forEach(function(e,n){i+=n+"("+e+") "}),e.style.transform=i}}};function Z(e,n){V(e).forEach(function(e){for(var t in n){var r=I(n[t],e),a=e.target,i=C(r),o=L(a,t,i,e),u=F(R(r,i||C(o)),o);X[_(a,t)](a,t,u,e.transforms,!0)}})}function z(e,n){var t=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},a={};return a.duration=t?Math.max.apply(Math,e.map(function(e){return r(e)+e.duration})):n.duration,a.delay=t?Math.min.apply(Math,e.map(function(e){return r(e)+e.delay})):n.delay,a.endDelay=t?a.duration-Math.max.apply(Math,e.map(function(e){return r(e)+e.duration-e.endDelay})):n.endDelay,a}var G=0,Q=[],U=function(){var e;function n(t){for(var r=Q.length,a=0;a<r;){var i=Q[a];i.paused?(Q.splice(a,1),r--):(i.tick(t),a++)}e=a>0?requestAnimationFrame(n):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",function(){K.suspendWhenDocumentHidden&&(J()?e=cancelAnimationFrame(e):(Q.forEach(function(e){return e._onDocumentVisibility()}),U()))}),function(){e||J()&&K.suspendWhenDocumentHidden||!(Q.length>0)||(e=requestAnimationFrame(n))}}();function J(){return!!document&&document.hidden}function K(e){void 0===e&&(e={});var n,t,r,a,i,o,c,l,f,h=0,p=0,g=0,y=0,x=null;function w(e){var n=window.Promise&&new Promise(function(e){return x=e});return e.finished=n,n}var k=(t=O(u,n=e),a=function(e,n){var t=[],r=n.keyframes;for(var a in r&&(n=E(function(e){for(var n=M(N(e.map(function(e){return Object.keys(e)})),function(e){return m.key(e)}).reduce(function(e,n){return 0>e.indexOf(n)&&e.push(n),e},[]),t={},r=0;r<n.length;r++)!function(r){var a=n[r];t[a]=e.map(function(e){var n={};for(var t in e)m.key(t)?t==a&&(n.value=e[t]):n[t]=e[t];return n})}(r);return t}(r),n)),n)m.key(a)&&t.push({name:a,tweens:function(e,n){var t=j(n);if(/^spring/.test(t.easing)&&(t.duration=v(t.easing)),m.arr(e)){var r=e.length;2!==r||m.obj(e[0])?m.fnc(n.duration)||(t.duration=n.duration/r):e={value:e}}var a=m.arr(e)?e:[e];return a.map(function(e,t){var r=m.obj(e)&&!m.pth(e)?e:{value:e};return m.und(r.delay)&&(r.delay=t?0:n.delay),m.und(r.endDelay)&&(r.endDelay=t===a.length-1?n.endDelay:0),r}).map(function(e){return E(e,t)})}(n[a],e)});return t}(r=O(s,n),n),c=z(o=M(N((i=V(n.targets)).map(function(e){return a.map(function(n){return function(e,n){var t=_(e.target,n.name);if(t){var r,a=n.tweens.map(function(t){var a=function(e,n){var t={};for(var r in e){var a=I(e[r],n);m.arr(a)&&1===(a=a.map(function(e){return I(e,n)})).length&&(a=a[0]),t[r]=a}return t.duration=parseFloat(t.duration),t.delay=parseFloat(t.delay),t}(t,e),i=a.value,o=m.arr(i)?i[1]:i,u=C(o),s=L(e.target,n.name,u,e),c=r?r.to.original:s,l=m.arr(i)?i[0]:c,d=C(l)||C(s),f=u||d;return m.und(o)&&(o=c),a.from=Y(l,f),a.to=Y(F(o,l),f),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=b(a.easing,a.duration),a.isPath=m.pth(i),a.isPathTargetInsideSVG=a.isPath&&m.svg(e.target),a.isColor=m.col(a.from.original),a.isColor&&(a.round=1),r=a,a}),i=a[a.length-1];return{type:t,property:n.name,animatable:e,tweens:a,duration:i.end,delay:a[0].delay,endDelay:i.endDelay}}}(e,n)})})),function(e){return!m.und(e)}),r),l=G,G++,E(t,{id:l,children:[],animatables:i,animations:o,duration:c.duration,delay:c.delay,endDelay:c.endDelay}));function P(){var e=k.direction;"alternate"!==e&&(k.direction="normal"!==e?"normal":"reverse"),k.reversed=!k.reversed,f.forEach(function(e){return e.reversed=k.reversed})}function D(e){return k.reversed?k.duration-e:e}function S(){h=0,p=D(k.currentTime)*(1/K.speed)}function T(e,n){n&&n.seek(e-n.timelineOffset)}function B(e){for(var n=0,t=k.animations,r=t.length;n<r;){var a=t[n],i=a.animatable,o=a.tweens,u=o.length-1,s=o[u];u&&(s=M(o,function(n){return e<n.end})[0]||s);for(var c=d(e-s.start-s.delay,0,s.duration)/s.duration,l=isNaN(c)?1:s.easing(c),f=s.to.strings,h=s.round,m=[],p=s.to.numbers.length,v=void 0,g=0;g<p;g++){var y=void 0,x=s.to.numbers[g],b=s.from.numbers[g]||0;y=s.isPath?function(e,n,t){function r(t){void 0===t&&(t=0);var r=n+t>=1?n+t:0;return e.el.getPointAtLength(r)}var a=H(e.el,e.svg),i=r(),o=r(-1),u=r(1),s=t?1:a.w/a.vW,c=t?1:a.h/a.vH;switch(e.property){case"x":return(i.x-a.x)*s;case"y":return(i.y-a.y)*c;case"angle":return 180*Math.atan2(u.y-o.y,u.x-o.x)/Math.PI}}(s.value,l*x,s.isPathTargetInsideSVG):b+l*(x-b),h&&!(s.isColor&&g>2)&&(y=Math.round(y*h)/h),m.push(y)}var w=f.length;if(w){v=f[0];for(var N=0;N<w;N++){f[N];var P=f[N+1],j=m[N];isNaN(j)||(P?v+=j+P:v+=j+" ")}}else v=m[0];X[a.type](i.target,a.property,v,i.transforms),a.currentValue=v,n++}}function R(e){k[e]&&!k.passThrough&&k[e](k)}function A(e){var n=k.duration,t=k.delay,r=n-k.endDelay,a=D(e);k.progress=d(a/n*100,0,100),k.reversePlayback=a<k.currentTime,f&&function(e){if(k.reversePlayback)for(var n=y;n--;)T(e,f[n]);else for(var t=0;t<y;t++)T(e,f[t])}(a),!k.began&&k.currentTime>0&&(k.began=!0,R("begin")),!k.loopBegan&&k.currentTime>0&&(k.loopBegan=!0,R("loopBegin")),a<=t&&0!==k.currentTime&&B(0),(a>=r&&k.currentTime!==n||!n)&&B(n),a>t&&a<r?(k.changeBegan||(k.changeBegan=!0,k.changeCompleted=!1,R("changeBegin")),R("change"),B(a)):k.changeBegan&&(k.changeCompleted=!0,k.changeBegan=!1,R("changeComplete")),k.currentTime=d(a,0,n),k.began&&R("update"),e>=n&&(p=0,k.remaining&&!0!==k.remaining&&k.remaining--,k.remaining?(h=g,R("loopComplete"),k.loopBegan=!1,"alternate"===k.direction&&P()):(k.paused=!0,!k.completed&&(k.completed=!0,R("loopComplete"),R("complete"),!k.passThrough&&"Promise"in window&&(x(),w(k)))))}return w(k),k.reset=function(){var e=k.direction;k.passThrough=!1,k.currentTime=0,k.progress=0,k.paused=!0,k.began=!1,k.loopBegan=!1,k.changeBegan=!1,k.completed=!1,k.changeCompleted=!1,k.reversePlayback=!1,k.reversed="reverse"===e,k.remaining=k.loop,y=(f=k.children).length;for(var n=y;n--;)k.children[n].reset();(k.reversed&&!0!==k.loop||"alternate"===e&&1===k.loop)&&k.remaining++,B(k.reversed?k.duration:0)},k._onDocumentVisibility=S,k.set=function(e,n){return Z(e,n),k},k.tick=function(e){g=e,h||(h=g),A((g+(p-h))*K.speed)},k.seek=function(e){A(D(e))},k.pause=function(){k.paused=!0,S()},k.play=function(){k.paused&&(k.completed&&k.reset(),k.paused=!1,Q.push(k),S(),U())},k.reverse=function(){P(),k.completed=!k.reversed,S()},k.restart=function(){k.reset(),k.play()},k.remove=function(e){en($(e),k)},k.reset(),k.autoplay&&k.play(),k}function ee(e,n){for(var t=n.length;t--;)P(e,n[t].animatable.target)&&n.splice(t,1)}function en(e,n){var t=n.animations,r=n.children;ee(e,t);for(var a=r.length;a--;){var i=r[a],o=i.animations;ee(e,o),o.length||i.children.length||r.splice(a,1)}t.length||r.length||n.pause()}K.version="3.2.1",K.speed=1,K.suspendWhenDocumentHidden=!0,K.running=Q,K.remove=function(e){for(var n=$(e),t=Q.length;t--;)en(n,Q[t])},K.get=L,K.set=Z,K.convertPx=S,K.path=function(e,n){var t=m.str(e)?w(e)[0]:e,r=n||100;return function(e){return{property:e,el:t,svg:H(t),totalLength:W(t)*(r/100)}}},K.setDashoffset=function(e){var n=W(e);return e.setAttribute("stroke-dasharray",n),n},K.stagger=function(e,n){void 0===n&&(n={});var t=n.direction||"normal",r=n.easing?b(n.easing):null,a=n.grid,i=n.axis,o=n.from||0,u="first"===o,s="center"===o,c="last"===o,l=m.arr(e),d=l?parseFloat(e[0]):parseFloat(e),f=l?parseFloat(e[1]):0,h=C(l?e[1]:e)||0,p=n.start||0+(l?d:0),v=[],g=0;return function(e,n,m){if(u&&(o=0),s&&(o=(m-1)/2),c&&(o=m-1),!v.length){for(var y=0;y<m;y++){if(a){var x=s?(a[0]-1)/2:o%a[0],b=s?(a[1]-1)/2:Math.floor(o/a[0]),w=y%a[0],M=Math.floor(y/a[0]),N=x-w,k=b-M,P=Math.sqrt(N*N+k*k);"x"===i&&(P=-N),"y"===i&&(P=-k),v.push(P)}else v.push(Math.abs(o-y));g=Math.max.apply(Math,v)}r&&(v=v.map(function(e){return r(e/g)*g})),"reverse"===t&&(v=v.map(function(e){return i?e<0?-1*e:-e:Math.abs(g-e)}))}return p+(l?(f-d)/g:d)*(Math.round(100*v[n])/100)+h}},K.timeline=function(e){void 0===e&&(e={});var n=K(e);return n.duration=0,n.add=function(t,r){var a=Q.indexOf(n),i=n.children;function o(e){e.passThrough=!0}a>-1&&Q.splice(a,1);for(var u=0;u<i.length;u++)o(i[u]);var c=E(t,O(s,e));c.targets=c.targets||e.targets;var l=n.duration;c.autoplay=!1,c.direction=n.direction,c.timelineOffset=m.und(r)?l:F(r,l),o(n),n.seek(c.timelineOffset);var d=K(c);o(d),i.push(d);var f=z(i,e);return n.delay=f.delay,n.endDelay=f.endDelay,n.duration=f.duration,n.seek(0),n.reset(),n.autoplay&&n.play(),n},n},K.easing=b,K.penner=x,K.random=function(e,n){return Math.floor(Math.random()*(n-e+1))+e};var et=K;let er=()=>{let e=(0,o.useRef)(!1);return o.useEffect(()=>{e.current||(function(e){let n=["102, 167, 221","62, 131, 225","33, 78, 194"];e=Object.assign({colors:n,numberOfParticules:20,orbitRadius:{min:50,max:100},circleRadius:{min:10,max:20},diffuseRadius:{min:50,max:100},animeDuration:{min:900,max:1500}},e);let t=0,r=0,a=e.colors||n,i=document.querySelector(".fireworks"),o=i.getContext("2d");function u(e){e.width=window.innerWidth,e.height=window.innerHeight,e.style.width="".concat(window.innerWidth,"px"),e.style.height="".concat(window.innerHeight,"px")}function s(e){for(let n=0;n<e.animatables.length;n++)e.animatables[n].target.draw()}let c=et({duration:1/0,update:()=>{o.clearRect(0,0,i.width,i.height)}});document.addEventListener("mousedown",n=>{c.play(),t=n.clientX||(n.touches[0]?n.touches[0].clientX:n.changedTouches[0].clientX),r=n.clientY||(n.touches[0]?n.touches[0].clientY:n.changedTouches[0].clientY),function(n,t){let r=function(e,n){let t={x:e,y:n,color:"#000",radius:.1,alpha:.5,lineWidth:6,draw(){}};return t.draw=function(){o.globalAlpha=t.alpha,o.beginPath(),o.arc(t.x,t.y,t.radius,0,2*Math.PI,!0),o.lineWidth=t.lineWidth,o.strokeStyle=t.color,o.stroke(),o.globalAlpha=1},t}(n,t),i=[];for(let r=0;r<e.numberOfParticules;r++)i.push(function(n,t){let r={x:n,y:t,color:"rgba(".concat(a[et.random(0,a.length-1)],",").concat(et.random(.2,.8),")"),radius:et.random(e.circleRadius.min,e.circleRadius.max),endPos:null,draw(){}};return r.endPos=function(n){let t=et.random(0,360)*Math.PI/180,r=et.random(e.diffuseRadius.min,e.diffuseRadius.max),a=[-1,1][et.random(0,1)]*r;return{x:n.x+a*Math.cos(t),y:n.y+a*Math.sin(t)}}(r),r.draw=function(){o.beginPath(),o.arc(r.x,r.y,r.radius,0,2*Math.PI,!0),o.fillStyle=r.color,o.fill()},r}(n,t));et.timeline().add({targets:i,x:e=>e.endPos.x,y:e=>e.endPos.y,radius:.1,duration:et.random(e.animeDuration.min,e.animeDuration.max),easing:"easeOutExpo",update:s}).add({targets:r,radius:et.random(e.orbitRadius.min,e.orbitRadius.max),lineWidth:0,alpha:{value:0,easing:"linear",duration:et.random(600,800)},duration:et.random(1200,1800),easing:"easeOutExpo",update:s},0)}(t,r)},!1),u(i),window.addEventListener("resize",()=>{u(i)},!1)}({}),e.current=!0)},[e]),(0,i.jsx)("canvas",{id:"fireworks",className:"fireworks"})}}},function(e){e.O(0,[29,971,472,744],function(){return e(e.s=2434)}),_N_E=e.O()}]);