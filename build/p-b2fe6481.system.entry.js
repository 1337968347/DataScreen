System.register(["./p-7752e167.system.js"],(function(t){"use strict";var e,n;return{setters:[function(t){e=t.r;n=t.i}],execute:function(){var o=t("ion_route",function(){function t(t){e(this,t);this.ionRouteDataChanged=n(this,"ionRouteDataChanged",7);this.url=""}t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)};t.prototype.onComponentProps=function(t,e){if(t===e){return}var n=t?Object.keys(t):[];var o=e?Object.keys(e):[];if(n.length!==o.length){this.onUpdate(t);return}for(var r=0,i=n;r<i.length;r++){var a=i[r];if(t[a]!==e[a]){this.onUpdate(t);return}}};t.prototype.connectedCallback=function(){this.ionRouteDataChanged.emit()};Object.defineProperty(t,"watchers",{get:function(){return{url:["onUpdate"],component:["onUpdate"],componentProps:["onComponentProps"]}},enumerable:false,configurable:true});return t}())}}}));