var __awaiter=this&&this.__awaiter||function(e,t,i,r){function o(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,n){function a(e){try{d(r.next(e))}catch(t){n(t)}}function s(e){try{d(r["throw"](e))}catch(t){n(t)}}function d(e){e.done?i(e.value):o(e.value).then(a,s)}d((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var i={label:0,sent:function(){if(n[0]&1)throw n[1];return n[1]},trys:[],ops:[]},r,o,n,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(e){return function(t){return d([e,t])}}function d(a){if(r)throw new TypeError("Generator is already executing.");while(i)try{if(r=1,o&&(n=a[0]&2?o["return"]:a[0]?o["throw"]||((n=o["return"])&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;if(o=0,n)a=[a[0]&2,n.value];switch(a[0]){case 0:case 1:n=a;break;case 4:i.label++;return{value:a[1],done:false};case 5:i.label++;o=a[1];a=[0];continue;case 7:a=i.ops.pop();i.trys.pop();continue;default:if(!(n=i.trys,n=n.length>0&&n[n.length-1])&&(a[0]===6||a[0]===2)){i=0;continue}if(a[0]===3&&(!n||a[1]>n[0]&&a[1]<n[3])){i.label=a[1];break}if(a[0]===6&&i.label<n[1]){i.label=n[1];n=a;break}if(n&&i.label<n[2]){i.label=n[2];i.ops.push(a);break}if(n[2])i.ops.pop();i.trys.pop();continue}a=t.call(e,i)}catch(s){a=[6,s];o=0}finally{r=n=0}if(a[0]&5)throw a[1];return{value:a[0]?a[1]:void 0,done:true}}};System.register(["./p-7752e167.system.js","./p-a02e260e.system.js","./p-73c94ebc.system.js","./p-9adeb6da.system.js","./p-317619c9.system.js","./p-dadace63.system.js","./p-4a623231.system.js","./p-01e2df7b.system.js","./p-b53fa570.system.js"],(function(e){"use strict";var t,i,r,o,n,a,s,d,l,h,c,m,u,p,f,b;return{setters:[function(e){t=e.r;i=e.i;r=e.h;o=e.H;n=e.e},function(e){a=e.g},function(){},function(){},function(e){s=e.c},function(e){d=e.d},function(e){l=e.B;h=e.c;c=e.d;m=e.e;u=e.f},function(e){p=e.g},function(e){f=e.a;b=e.d}],execute:function(){var w=function(e){var t=s();var i=s();var r=s();i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.4);r.addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)");return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([i,r])};var v=function(e){var t=s();var i=s();var r=s();var o=e.querySelector(".modal-wrapper");var n=o.getBoundingClientRect();i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.4,0);r.addElement(o).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY("+(e.ownerDocument.defaultView.innerHeight-n.top)+"px)");return t.addElement(e).easing("ease-out").duration(250).addAnimation([i,r])};var y=function(e){var t=s();var i=s();var r=s();i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32);r.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([i,r])};var x=function(e){var t=s();var i=s();var r=s();var o=e.querySelector(".modal-wrapper");i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0);r.addElement(o).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([i,r])};var g=".sc-ion-modal-ios-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-ios-h{display:none}.modal-wrapper.sc-ion-modal-ios{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-ios-h{--width:600px;--height:600px}}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-ios-h{--border-radius:10px}}.modal-wrapper.sc-ion-modal-ios{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}";var k=".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}@media only screen and (min-width: 768px) and (min-height: 600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}";var D=e("ion_modal",function(){function e(e){var r=this;t(this,e);this.didPresent=i(this,"ionModalDidPresent",7);this.willPresent=i(this,"ionModalWillPresent",7);this.willDismiss=i(this,"ionModalWillDismiss",7);this.didDismiss=i(this,"ionModalDidDismiss",7);this.presented=false;this.mode=a(this);this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.onBackdropTap=function(){r.dismiss(undefined,l)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();r.dismiss()};this.onLifecycle=function(e){var t=r.usersElement;var i=E[e.type];if(t&&i){var o=new CustomEvent(i,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(o)}};h(this.el)}e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,i;return __generator(this,(function(r){switch(r.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign(Object.assign({},this.componentProps),{modal:this.el});i=this;return[4,f(this.delegate,e,this.component,["ion-page"],t)];case 1:i.usersElement=r.sent();return[4,d(this.usersElement)];case 2:r.sent();return[2,c(this,"modalEnter",w,y)]}}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var i;return __generator(this,(function(r){switch(r.label){case 0:return[4,m(this,e,t,"modalLeave",v,x)];case 1:i=r.sent();if(!i)return[3,3];return[4,b(this.delegate,this.usersElement)];case 2:r.sent();r.label=3;case 3:return[2,i]}}))}))};e.prototype.onDidDismiss=function(){return u(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return u(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e,t;var i=a(this);return r(o,{"no-router":true,"aria-modal":"true",class:Object.assign((e={},e[i]=true,e),p(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},r("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),r("div",{role:"dialog",class:(t={},t["modal-wrapper"]=true,t[i]=true,t)}))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return e}());var E={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};D.style={ios:g,md:k}}}}));