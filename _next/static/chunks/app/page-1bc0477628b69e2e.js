(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{62601:function(e,t,r){"use strict";var n,o;e.exports=(null==(n=r.g.process)?void 0:n.env)&&"object"==typeof(null==(o=r.g.process)?void 0:o.env)?r.g.process:r(58960)},15469:function(e,t,r){Promise.resolve().then(r.bind(r,62319))},62319:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(57437),o=r(2265),i=r(62601);function s(){let[e,t]=(0,o.useState)({city:"",temperature:"",weather:""});return(0,o.useEffect)(()=>{let e=new URLSearchParams({key:i.env.WEATHER_API_KEY,city:"330100"});fetch("https://restapi.amap.com/v3/weather/weatherInfo?".concat(e)).then(e=>e.json()).then(e=>{t(e.lives[0])})},[]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"weather shadow-xl border-sky-200 flex-grow",children:[(0,n.jsx)("div",{className:"city",children:e.city}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsxs)("div",{className:"temperature",children:[e.temperature,"℃"]}),(0,n.jsx)("div",{className:"weather",children:e.weather})]})]})})}},58960:function(e){!function(){var t={229:function(e){var t,r,n,o=e.exports={};function i(){throw Error("setTimeout has not been defined")}function s(){throw Error("clearTimeout has not been defined")}function c(e){if(t===setTimeout)return setTimeout(e,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(r){try{return t.call(null,e,0)}catch(r){return t.call(this,e,0)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:i}catch(e){t=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u=[],a=!1,l=-1;function f(){a&&n&&(a=!1,n.length?u=n.concat(u):l=-1,u.length&&h())}function h(){if(!a){var e=c(f);a=!0;for(var t=u.length;t;){for(n=u,u=[];++l<t;)n&&n[l].run();l=-1,t=u.length}n=null,a=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function d(){}o.nextTick=function(e){var t=Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new p(e,t)),1!==u.length||a||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=d,o.addListener=d,o.once=d,o.off=d,o.removeListener=d,o.removeAllListeners=d,o.emit=d,o.prependListener=d,o.prependOnceListener=d,o.listeners=function(e){return[]},o.binding=function(e){throw Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw Error("process.chdir is not supported")},o.umask=function(){return 0}}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}},s=!0;try{t[e](i,i.exports,n),s=!1}finally{s&&delete r[e]}return i.exports}n.ab="//";var o=n(229);e.exports=o}()},30622:function(e,t,r){"use strict";var n=r(2265),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,i={},a=null,l=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!u.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:a,ref:l,props:i,_owner:c.current}}t.Fragment=i,t.jsx=a,t.jsxs=a},57437:function(e,t,r){"use strict";e.exports=r(30622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=15469)}),_N_E=e.O()}]);