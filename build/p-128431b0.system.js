System.register(["./p-9adeb6da.system.js"],(function(e){"use strict";var t,n;return{setters:[function(e){t=e.n;n=e.p}],execute:function(){var r=e("startTapClick",(function(e){var r=-f*10;var v=0;var d;var l;var p;var m;var L=e.getBoolean("animated",true)&&e.getBoolean("rippleEffect",true);var E=new WeakMap;var h=function(){return d!==undefined&&d.parentElement!==null};var w=function(e){r=t(e);b(e)};var g=function(e){r=t(e);R(e)};var S=function(e){var n=t(e)-f;if(r<n){b(e)}};var T=function(e){var n=t(e)-f;if(r<n){R(e)}};var y=function(){clearTimeout(m);m=undefined;if(l){B(false);l=undefined}};var b=function(e){if(l||h()){return}d=undefined;k(a(e),e)};var R=function(e){k(undefined,e)};var k=function(e,t){if(e&&e===l){return}clearTimeout(m);m=undefined;var r=n(t),a=r.x,o=r.y;if(l){if(E.has(l)){throw new Error("internal error")}if(!l.classList.contains(u)){q(l,a,o)}B(true)}if(e){var c=E.get(e);if(c){clearTimeout(c);E.delete(e)}var f=i(e)?0:s;e.classList.remove(u);m=setTimeout((function(){q(e,a,o);m=undefined}),f)}l=e};var q=function(e,t,n){v=Date.now();e.classList.add(u);var r=L&&o(e);if(r&&r.addRipple){x();p=r.addRipple(t,n)}};var x=function(){if(p!==undefined){p.then((function(e){return e()}));p=undefined}};var B=function(e){x();var t=l;if(!t){return}var n=c-Date.now()+v;if(e&&n>0&&!i(t)){var r=setTimeout((function(){t.classList.remove(u);E.delete(t)}),c);E.set(t,r)}else{t.classList.remove(u)}};var C=document;C.addEventListener("ionScrollStart",(function(e){d=e.target;y()}));C.addEventListener("ionScrollEnd",(function(){d=undefined}));C.addEventListener("ionGestureCaptured",y);C.addEventListener("touchstart",w,true);C.addEventListener("touchcancel",g,true);C.addEventListener("touchend",g,true);C.addEventListener("mousedown",S,true);C.addEventListener("mouseup",T,true)}));var a=function(e){if(e.composedPath){var t=e.composedPath();for(var n=0;n<t.length-2;n++){var r=t[n];if(r.classList&&r.classList.contains("ion-activatable")){return r}}}else{return e.target.closest(".ion-activatable")}};var i=function(e){return e.classList.contains("ion-activatable-instant")};var o=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t){return t}}return e.querySelector("ion-ripple-effect")};var u="activated";var s=200;var c=200;var f=2500}}}));