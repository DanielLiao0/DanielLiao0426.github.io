if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,o)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(r[n])return;let t={};const c=e=>i(e,n),l={module:{uri:n},exports:t,require:c};r[n]=Promise.all(s.map((e=>l[e]||c(e)))).then((e=>(o(...e),t)))}}define(["./workbox-d169e1d7"],(function(e){"use strict";e.setCacheNameDetails({prefix:"robot"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/css/app.17423fec.css",revision:null},{url:"/img/robot/map.png",revision:"6f8188ac001415c122f2cf4a3586462e"},{url:"/img/robot/ride.png",revision:"3a5b11e1b0b99c74741dfe0043bc45e1"},{url:"/index.html",revision:"9129fc4c98278f1664651efdb5976605"},{url:"/js/app.96ae5f07.js",revision:null},{url:"/js/chunk-vendors.88ebb28c.js",revision:null},{url:"/manifest.json",revision:"43a688585c2d0693eea45adeed569f31"},{url:"/robot.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map