System.register(["./p-7752e167.system.js","./p-a02e260e.system.js","./p-73c94ebc.system.js","./p-4a623231.system.js"],(function(e){"use strict";var n,t,i,s,o;return{setters:[function(e){n=e.r;t=e.h;i=e.H},function(e){s=e.g},function(){},function(e){o=e.s}],execute:function(){var r=".sc-ion-select-popover-h ion-list.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:-1px;margin-bottom:-1px}.sc-ion-select-popover-h ion-list-header.sc-ion-select-popover,.sc-ion-select-popover-h ion-label.sc-ion-select-popover{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}";var l=e("ion_select_popover",function(){function e(e){n(this,e);this.options=[]}e.prototype.onSelect=function(e){var n=this.options.find((function(n){return n.value===e.target.value}));if(n){o(n.handler)}};e.prototype.render=function(){return t(i,{class:s(this)},t("ion-list",null,this.header!==undefined&&t("ion-list-header",null,this.header),(this.subHeader!==undefined||this.message!==undefined)&&t("ion-item",null,t("ion-label",{class:"ion-text-wrap"},this.subHeader!==undefined&&t("h3",null,this.subHeader),this.message!==undefined&&t("p",null,this.message))),t("ion-radio-group",null,this.options.map((function(e){return t("ion-item",null,t("ion-label",null,e.text),t("ion-radio",{checked:e.checked,value:e.value,disabled:e.disabled}))})))))};return e}());l.style=r}}}));