import{g as o,c as t,s as e}from"./p-6bae5055.js";import{c as i,a,b as s,s as n}from"./p-9a0f8c0e.js";const r=(o,t)=>{return"string"==typeof o&&(t=o,o=void 0),(e=o,c(e)).includes(t);var e},c=(o=window)=>{o.Ionic=o.Ionic||{};let t=o.Ionic.platforms;return null==t&&(t=o.Ionic.platforms=d(o),t.forEach(t=>o.document.documentElement.classList.add("plt-"+t))),t},d=o=>Object.keys(g).filter(t=>g[t](o)),p=o=>!!u(o,/iPad/i)||!(!u(o,/Macintosh/i)||!b(o)),m=o=>u(o,/android|sink/i),b=o=>f(o,"(any-pointer:coarse)"),l=o=>h(o)||j(o),h=o=>!!(o.cordova||o.phonegap||o.PhoneGap),j=o=>{const t=o.Capacitor;return!(!t||!t.isNative)},u=(o,t)=>t.test(o.navigator.userAgent),f=(o,t)=>o.matchMedia(t).matches,g={ipad:p,iphone:o=>u(o,/iPhone/i),ios:o=>u(o,/iPhone|iPod/i)||p(o),android:m,phablet:o=>{const t=o.innerWidth,e=o.innerHeight,i=Math.min(t,e),a=Math.max(t,e);return i>390&&i<520&&a>620&&a<800},tablet:o=>{const t=o.innerWidth,e=o.innerHeight,i=Math.min(t,e),a=Math.max(t,e);return p(o)||(o=>m(o)&&!u(o,/mobile/i))(o)||i>460&&i<820&&a>780&&a<1400},cordova:h,capacitor:j,electron:o=>u(o,/electron/i),pwa:o=>!(!o.matchMedia("(display-mode: standalone)").matches&&!o.navigator.standalone),mobile:b,mobileweb:o=>b(o)&&!l(o),desktop:o=>!b(o),hybrid:l};let w;const M=t=>t&&o(t)||w,O=()=>{const o=document,d=window;t.config=i;const p=d.Ionic=d.Ionic||{};c(d);const m=Object.assign(Object.assign(Object.assign(Object.assign({},a(d)),{persistConfig:!1}),p.config),s(d));i.reset(m),i.getBoolean("persistConfig")&&n(d,m),p.config=i,p.mode=w=i.get("mode",o.documentElement.getAttribute("mode")||(r(d,"ios")?"ios":"md")),i.set("mode",w),o.documentElement.setAttribute("mode",w),o.documentElement.classList.add(w),i.getBoolean("_testing")&&i.set("animated",!1),e(o=>o.mode=o.mode||o.getAttribute("mode")||w)};export{r as a,M as g,O as i}