(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{5054:function(e,s,t){Promise.resolve().then(t.bind(t,6389))},6389:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return r}});var l=t(7437),n=t(2265),a=t(1396),c=t.n(a);function i(e){let{article:s}=e,{title:t,date:n,tags:a,slug:i}=s;return(0,l.jsx)(c(),{href:"/pages/article/".concat(i),className:"text-black no-underline",children:(0,l.jsxs)("div",{className:"article-card flex h-24",children:[(0,l.jsx)("div",{className:"img w-40 h-24 rounded overflow-hidden",children:(0,l.jsx)("picture",{className:"w-full h-full object-cover",children:(0,l.jsx)("img",{src:"https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&q=50&fm=webp&crop=entropy&cs=srgb&width=400&fmt=webp",alt:""})})}),(0,l.jsxs)("div",{className:"content w-full h-full flex flex-col justify-between",children:[(0,l.jsxs)("div",{className:"header",children:[(0,l.jsx)("div",{className:"title text-3xl font-bold",children:t}),(0,l.jsx)("div",{className:"date text-gray-400 text-sm",children:n.toLocaleString()})]}),(0,l.jsx)("div",{className:"tags mx-2",children:a.map(e=>(0,l.jsxs)("span",{className:"tag mx-1 font-light relative group",children:["#",e,(0,l.jsx)("span",{className:"absolute inset-x-0 bottom-[-5px] h-0.5 bg-blue-500 group-hover:h-1 transition-all duration-300"})]},e))})]})]})})}function r(){let[e,s]=(0,n.useState)([]);return(0,n.useEffect)(()=>{fetch("/pages/archive/api").then(e=>e.json()).then(e=>{s(e.articles)})},[]),(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{children:"Archive"}),e.map(e=>(0,l.jsx)(i,{article:e},e.slug))]})}}},function(e){e.O(0,[176,971,472,744],function(){return e(e.s=5054)}),_N_E=e.O()}]);