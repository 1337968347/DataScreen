System.register([],(function(t){"use strict";return{execute:function(){var e=function(){function t(){this.m=new Map}t.prototype.reset=function(t){this.m=new Map(Object.entries(t))};t.prototype.get=function(t,e){var n=this.m.get(t);return n!==undefined?n:e};t.prototype.getBoolean=function(t,e){if(e===void 0){e=false}var n=this.m.get(t);if(n===undefined){return e}if(typeof n==="string"){return n==="true"}return!!n};t.prototype.getNumber=function(t,e){var n=parseFloat(this.m.get(t));return isNaN(n)?e!==undefined?e:NaN:n};t.prototype.set=function(t,e){this.m.set(t,e)};return t}();var n=t("c",new e);var r=t("a",(function(t){try{var e=t.sessionStorage.getItem(s);return e!==null?JSON.parse(e):{}}catch(n){return{}}}));var i=t("s",(function(t,e){try{t.sessionStorage.setItem(s,JSON.stringify(e))}catch(n){return}}));var o=t("b",(function(t){var e={};t.location.search.slice(1).split("&").map((function(t){return t.split("=")})).map((function(t){var e=t[0],n=t[1];return[decodeURIComponent(e),decodeURIComponent(n)]})).filter((function(t){var e=t[0];return u(e,a)})).map((function(t){var e=t[0],n=t[1];return[e.slice(a.length),n]})).forEach((function(t){var n=t[0],r=t[1];e[n]=r}));return e}));var u=function(t,e){return t.substr(0,e.length)===e};var a="ionic:";var s="ionic-persist-config"}}}));