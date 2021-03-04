var __spreadArrays=this&&this.__spreadArrays||function(){for(var e=0,o=0,i=arguments.length;o<i;o++)e+=arguments[o].length;for(var n=Array(e),t=0,o=0;o<i;o++)for(var a=arguments[o],s=0,l=a.length;s<l;s++,t++)n[t]=a[s];return n};System.register(["./p-7752e167.system.js","./p-a02e260e.system.js","./p-73c94ebc.system.js","./p-d0797318.system.js","./p-47c6959b.system.js","./p-ea49f7e4.system.js","./p-4a623231.system.js","./p-76b7368b.system.js","./p-01e2df7b.system.js","./p-aff7ea33.system.js"],(function(e){"use strict";var o,i,n,t,a,s,l,r,c,h,u;return{setters:[function(e){o=e.r;i=e.i;n=e.h;t=e.H;a=e.e},function(e){s=e.g},function(){},function(){},function(){},function(e){l=e.j;r=e.d},function(){},function(e){c=e.c},function(e){h=e.c},function(e){u=e.r}],execute:function(){var d=":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";var g=e("ion_img",function(){function e(e){var n=this;o(this,e);this.ionImgWillLoad=i(this,"ionImgWillLoad",7);this.ionImgDidLoad=i(this,"ionImgDidLoad",7);this.ionError=i(this,"ionError",7);this.onLoad=function(){n.ionImgDidLoad.emit()};this.onError=function(){n.ionError.emit()}}e.prototype.srcChanged=function(){this.addIO()};e.prototype.componentDidLoad=function(){this.addIO()};e.prototype.addIO=function(){var e=this;if(this.src===undefined){return}if("IntersectionObserver"in window){this.removeIO();this.io=new IntersectionObserver((function(o){if(o[0].isIntersecting){e.load();e.removeIO()}}));this.io.observe(this.el)}else{setTimeout((function(){return e.load()}),200)}};e.prototype.load=function(){this.loadError=this.onError;this.loadSrc=this.src;this.ionImgWillLoad.emit()};e.prototype.removeIO=function(){if(this.io){this.io.disconnect();this.io=undefined}};e.prototype.render=function(){return n(t,{class:s(this)},n("img",{decoding:"async",src:this.loadSrc,alt:this.alt,onLoad:this.onLoad,onError:this.loadError}))};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{src:["srcChanged"]}},enumerable:false,configurable:true});return e}());g.style=d;var p=":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-350, #a6a6a6)}";var f=":host{color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}:host(.ion-color){color:var(--ion-color-base)}:host{--color:var(--ion-color-step-600, #666666);font-size:14px}";var v=e("ion_note",function(){function e(e){o(this,e)}e.prototype.render=function(){var e;var o=s(this);return n(t,{class:Object.assign(Object.assign({},h(this.color)),(e={},e[o]=true,e))},n("slot",null))};return e}());v.style={ios:p,md:f};var y="setting-canvas-option ion-grid ion-col{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}setting-canvas-option ion-grid ion-col ion-button{--border-radius:0}setting-canvas-option ion-grid ion-col ion-input{--background:var(--ion-color-secondary)!important}";var S=e("setting_canvas_option",function(){function e(e){o(this,e);this.toast=i(this,"toast",7)}e.prototype.handleCanvasChange=function(e,o){this.canvasOption[e]=o;this.canvasOption=Object.assign({},this.canvasOption);l(this.canvasOption)};e.prototype.getCanvasToImg=function(){this.toast.emit("暂且不支持")};e.prototype.render=function(){var e=this;if(this.canvasOption){return[n("ion-header",null,n("ion-toolbar",{color:"secondary"},n("ion-title",null,"页面设置"))),n("ion-content",null,n("ion-grid",null,n("ion-row",null,n("ion-col",null,"屏幕大小"),n("ion-col",null,n("ion-input",{type:"number",placeholder:"宽度",onIonChange:function(o){e.handleCanvasChange("w",o.detail.value)},value:this.canvasOption.w})),n("ion-col",null,n("ion-input",{type:"number",placeholder:"高度",onIonChange:function(o){e.handleCanvasChange("h",o.detail.value)},value:this.canvasOption.h}))),n("ion-row",null,n("ion-col",{size:"4"},"背景颜色"),n("ion-col",{size:"8"},n("ion-input",{value:this.canvasOption.bgc,onIonChange:function(o){e.handleCanvasChange("bgc",o.detail.value)}}),n("input",{style:{height:"100%"},type:"color",value:this.canvasOption.bgc,onChange:function(o){e.handleCanvasChange("bgc",o.target["value"])}}))),n("ion-row",null,n("ion-col",{size:"4"},"背景图"),n("ion-col",{size:"8"},n("ion-input",{debounce:500,clearInput:true,value:this.canvasOption.bgi,onIonChange:function(o){e.handleCanvasChange("bgi",o.detail.value)}}))),n("ion-row",null,n("ion-col",{size:"4"},"环境地址"),n("ion-col",{size:"8"},n("ion-input",{debounce:500,clearInput:true,value:this.canvasOption.baseUrl,onIonChange:function(o){e.handleCanvasChange("baseUrl",o.detail.value)}}))),this.canvasOption.bgi?n("ion-row",null,n("ion-col",{size:"4"}),n("ion-col",{size:"8"},n("ion-img",{style:{height:"100px","object-fit":"cover"},src:this.canvasOption.bgi}))):null,n("ion-row",null,n("ion-col",{size:"4"},"重置"),n("ion-col",{size:"8"},n("ion-button",{size:"small",fill:"outline",onClick:function(){e.handleCanvasChange("bgi",c.bgi)}},"恢复默认背景"))),n("ion-row",null,n("ion-col",{size:"4"},"缩略图"),n("ion-col",{size:"8"},n("ion-button",{size:"small",fill:"outline",onClick:function(){e.getCanvasToImg()}},"获取封面"))),this.imgAdress?n("ion-row",null,n("ion-col",{size:"4"}),n("ion-col",{size:"8",id:"canvasBox"},n("img",{style:{height:"100px","object-fit":"cover"},src:this.imgAdress}))):null))]}};Object.defineProperty(e.prototype,"el",{get:function(){return a(this)},enumerable:false,configurable:true});return e}());S.style=y;var m=e("setting_chart_series",function(){function e(e){o(this,e);this.cyChange=i(this,"cyChange",7);this.chooseSeriesIndex="0"}e.prototype.componentWillLoad=function(){this.handleSerieschange("0")};e.prototype.handleSeriesChange=function(e,o){this.cyChange.emit({argList:e,value:o})};e.prototype.handleSerieschange=function(e){this.chooseSeriesIndex=e;this.chooseSeries=Object.assign({},this.series[this.chooseSeriesIndex])};e.prototype.addSeries=function(){this.handleSeriesChange(["config","series"],__spreadArrays(this.series,[Object.assign(Object.assign({},this.series[0]),{name:""})]))};e.prototype.deleteSeries=function(){if(this.series[1]){var e=r([],this.series);e.splice(parseInt(this.chooseSeriesIndex),1);this.handleSeriesChange(["config","series"],e);this.chooseSeriesIndex="0";this.chooseSeries=e[0]?Object.assign({},e[0]):null}};e.prototype.render=function(){var e=this;return[n("ion-row",null,n("ion-col",null,n("ion-button",{expand:"full",onClick:function(){e.addSeries()}},"添加"),n("ion-button",{expand:"full",onClick:function(){e.deleteSeries()}},"删除"))),n("ion-segment",{scrollable:true,value:this.chooseSeriesIndex,onIonChange:function(o){e.handleSerieschange(o.detail.value)}},this.series.map((function(e,o){return n("ion-segment-button",{value:o+""},n("ion-label",null,"系列"+(o+1)))}))),n("ion-list",null,n("ion-row",null,n("ion-col",{size:"4"},"系列名"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,value:this.chooseSeries&&this.chooseSeries.name||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"name"],o.detail.value)}}))),this.chooseSeries&&this.chooseSeries.type=="line"?[n("cy-item-extend",{header:"折线"},n("ion-row",null,n("ion-col",{size:"4"},"颜色"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,value:this.chooseSeries&&this.chooseSeries.lineStyle&&this.chooseSeries.lineStyle.color||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"lineStyle","color"],o.detail.value)}}),n("input",{style:{height:"100%"},type:"color",value:this.chooseSeries&&this.chooseSeries.lineStyle&&this.chooseSeries.lineStyle.color||"",onChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"lineStyle","color"],o.target["value"])}}))),n("ion-row",null,n("ion-col",{size:"4"},"样式"),n("ion-col",{size:"8"},n("ion-select",{value:this.chooseSeries&&this.chooseSeries.lineStyle&&this.chooseSeries.lineStyle.type||"",interface:"popover",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"lineStyle","type"],o.detail.value)}},n("ion-select-option",{value:"solid"},"solid"),n("ion-select-option",{value:"dashed"},"dashed"),n("ion-select-option",{value:"dotted"},"dotted")))),n("ion-row",null,n("ion-col",{size:"4"},"粗细"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,type:"number",min:"0",value:this.chooseSeries&&this.chooseSeries.lineStyle&&this.chooseSeries.lineStyle.width||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"lineStyle","width"],o.detail.value)}}))),n("ion-row",null,n("ion-col",{size:"4"},"近似曲线"),n("ion-col",{size:"8"},n("ion-toggle",{checked:this.chooseSeries&&this.chooseSeries.smooth||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"smooth"],o.detail.checked)}})))),n("cy-item-extend",{header:"圆点"},n("ion-row",null,n("ion-col",{size:"4"},"显示"),n("ion-col",{size:"8"},n("ion-toggle",{checked:this.chooseSeries&&this.chooseSeries.itemStyle&&this.chooseSeries.itemStyle.opacity==1||false,onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"itemStyle","opacity"],o.detail.checked?1:0)}}))),n("ion-row",null,n("ion-col",{size:"4"},"颜色"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,value:this.chooseSeries&&this.chooseSeries.itemStyle&&this.chooseSeries.itemStyle.color||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"itemStyle","color"],o.detail.value)}}),n("input",{style:{height:"100%"},type:"color",value:this.chooseSeries&&this.chooseSeries.itemStyle&&this.chooseSeries.itemStyle.color||"",onChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"itemStyle","color"],o.target["value"])}}))),n("ion-row",null,n("ion-col",{size:"4"},"半径"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,type:"number",min:"0",value:this.chooseSeries&&this.chooseSeries.itemStyle&&this.chooseSeries.itemStyle.borderWidth||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"itemStyle","borderWidth"],o.detail.value)}})))),n("cy-item-extend",{header:"区域"},n("ion-row",null,n("ion-col",{size:"4"},"显示"),n("ion-col",{size:"8"},n("ion-toggle",{checked:this.chooseSeries&&this.chooseSeries.areaStyle&&this.chooseSeries.areaStyle.opacity==1||false,onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"areaStyle","opacity"],o.detail.checked?1:0)}}))),n("ion-row",null,n("ion-col",{size:"4"},"颜色"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,value:this.chooseSeries&&this.chooseSeries.areaStyle&&this.chooseSeries.areaStyle.color||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"areaStyle","color"],o.detail.value)}}),n("input",{style:{height:"100%"},type:"color",value:this.chooseSeries&&this.chooseSeries.areaStyle&&this.chooseSeries.areaStyle.color||"",onChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"areaStyle","color"],o.target["value"])}})))),n("cy-item-extend",{header:"标签"},n("ion-row",null,n("ion-col",{size:"4"},"显示"),n("ion-col",{size:"8"},n("ion-toggle",{checked:this.chooseSeries&&this.chooseSeries.label&&this.chooseSeries.label.show||false,onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"label","show"],o.detail.checked)}}))),n("ion-row",null,n("ion-col",{size:"4"},"字号"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,type:"number",min:"0",value:this.chooseSeries&&this.chooseSeries.label&&this.chooseSeries.label.fontSize||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"label","fontSize"],o.detail.value)}}))),n("ion-row",null,n("ion-col",{size:"4"},"颜色"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,value:this.chooseSeries&&this.chooseSeries.label&&this.chooseSeries.label.color||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"label","color"],o.detail.value)}}),n("input",{style:{height:"100%"},type:"color",value:this.chooseSeries&&this.chooseSeries.label&&this.chooseSeries.label.color||"",onChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"label","color"],o.target["value"])}}))))]:null,this.chooseSeries&&this.chooseSeries.type=="bar"?n("ion-row",null,n("ion-col",{size:"4"},"颜色"),n("ion-col",{size:"8"},n("ion-input",{debounce:1500,value:this.chooseSeries&&this.chooseSeries.itemStyle&&this.chooseSeries.itemStyle.color||"",onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"itemStyle","color"],o.detail.value)}}),n("input",{style:{height:"100%"},type:"color",value:this.chooseSeries&&this.chooseSeries.itemStyle&&this.chooseSeries.itemStyle.color||"",onChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"itemStyle","color"],o.target["value"])}}))):null,this.chooseSeries&&this.chooseSeries.type=="pie"?[n("ion-row",null,n("ion-col",{size:"4"},"南丁格尔图"),n("ion-col",{size:"8"},n("ion-toggle",{checked:this.chooseSeries&&this.chooseSeries.roseType,onIonChange:function(o){e.handleSeriesChange(["config","series",e.chooseSeriesIndex,"roseType"],o.detail.checked)}})))]:null)]};return e}());var b=e("setting_common_config",function(){function e(e){o(this,e);this.cyChange=i(this,"cyChange",7)}e.prototype.handleConfigChange=function(e,o,i){this.cyChange.emit({type:e,name:o,value:i})};e.prototype.render=function(){var e=this;return n("ion-grid",null,n("ion-row",null,n("ion-col",null,"图标尺寸"),n("ion-col",null,n("ion-input",{debounce:500,type:"number",placeholder:"宽度",onIonChange:function(o){e.handleConfigChange("view","w",o.detail.value)},value:this.comData.view.w})),n("ion-col",null,n("ion-input",{debounce:500,type:"number",placeholder:"高度",onIonChange:function(o){e.handleConfigChange("view","h",o.detail.value)},value:this.comData.view.h}))),n("ion-row",null,n("ion-col",null,"图表位置"),n("ion-col",null,n("ion-input",{debounce:500,type:"number",placeholder:"top",onIonChange:function(o){e.handleConfigChange("view","x",o.detail.value)},value:this.comData.view.x})),n("ion-col",null,n("ion-input",{debounce:500,type:"number",placeholder:"left",onIonChange:function(o){e.handleConfigChange("view","y",o.detail.value)},value:this.comData.view.y}))),n("ion-row",null,n("ion-col",{size:"4"},"旋转角度"),n("ion-col",{size:"4"},n("ion-input",{debounce:500,type:"number",onIonChange:function(o){e.handleConfigChange("view","deg",o.detail.value)},value:this.comData.view.deg+""}))),n("ion-row",null,n("ion-col",{size:"4"},"透明度"),n("ion-col",{size:"4"},n("ion-range",{debounce:500,value:parseFloat(this.comData.view.opacity),onIonChange:function(o){e.handleConfigChange("view","opacity",o.detail.value.toFixed(2))},min:0,max:1,step:.05})),n("ion-col",{size:"4"},n("ion-input",{debounce:500,type:"number",onIonChange:function(o){e.handleConfigChange("view","opacity",o.detail.value)},value:this.comData.view.opacity+"",min:"0",max:"1",step:"0.05"}))))};return e}());var C="setting-data-config ion-item ion-textarea,setting-data-config ion-col ion-textarea{--background:var(--ion-background-shade) !important}setting-data-config ion-item ion-input,setting-data-config ion-col ion-input{--background:var(--ion-background-shade) !important}setting-data-config ion-row ion-col{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}setting-data-config ion-row ion-range{-webkit-padding-start:0px;padding-inline-start:0px;padding-top:0;padding-bottom:0;-webkit-padding-end:0px;padding-inline-end:0px}setting-data-config ion-row ion-button{--border-radius:0}setting-data-config ion-row ion-input{--background:var(--ion-background-shade) !important}setting-data-config ion-row ion-input input[type=number]::-webkit-inner-spin-button,setting-data-config ion-row input[type=number]::-webkit-outer-spin-button{width:25px;height:30px}setting-data-config ion-row cy-table{--font-size:13px;text-align:left;--color:var(--ion-text-color, #ffffff)}setting-data-config ion-row ion-select{width:100%;background:var(--ion-background-shade) !important}setting-data-config cy-item-extend{--header-bg:var(--ion-background-color);--color:var(--ion-text-color);--content-bg:var(--ion-background-shade)}setting-data-config cy-item-extend ion-input,setting-data-config cy-item-extend input{height:25px;--background:var(--ion-background-tint) !important}setting-data-config cy-item-extend ion-select{width:100%;--padding-top:6px;--padding-bottom:0;background:var(--ion-background-tint) !important}";var x=e("setting_data_config",function(){function e(e){o(this,e);this.cyChange=i(this,"cyChange",7);this.toast=i(this,"toast",7);this.isStaticDataOJBk=true}e.prototype.componentWillLoad=function(){this.dataType=this.comDataApiData.dataSourceType};e.prototype.handleConfigChange=function(e,o,i){this.cyChange.emit({type:e,name:o,value:i})};e.prototype.handlefieldMapChange=function(e,o,i){this.comDataApiData.fieldMap[e][o]=i;this.handleConfigChange("api_data","fieldMap",this.comDataApiData.fieldMap)};e.prototype.refreshComData=function(e){u(e)};e.prototype.checkStaticDataOJBK=function(e){try{JSON.parse(e);this.isStaticDataOJBk=true;return true}catch(o){this.isStaticDataOJBk=false;this.toast.emit("数据格式错误!");return false}};e.prototype.render=function(){var e=this;var o=[{title:"字段",dataIndex:"name"},{title:"映射",dataIndex:"mapping",render:function(o,i){return n("ion-input",{placeholder:"可自定义",debounce:1500,style:{width:"108px",height:"30px","--background":"var(--ion-background-shade)"},onIonChange:function(o){e.handlefieldMapChange(i,"mapping",o.detail.value)},value:o.mapping||""})}}];return n("ion-gird",null,n("ion-row",{style:{"margin-bottom":"20px"}},n("ion-col",{size:"4"},"数据来源"),n("ion-col",{size:"8"},n("ion-select",{value:this.comDataApiData.dataSourceType||"static",interface:"popover",onIonChange:function(o){e.dataType=o.detail.value;e.handleConfigChange("api_data","dataSourceType",o.detail.value+"")}},n("ion-select-option",{value:"static"},"静态"),n("ion-select-option",{value:"rest"},"动态")))),this.comDataApiData.fieldMap?n("ion-row",null,n("ion-col",{size:"12"},"数据映射"),n("ion-col",{size:"12"},n("cy-table",{Columns:o,dataSource:this.comDataApiData.fieldMap||[]}))):null,this.dataType=="static"?n("ion-gird",null,n("ion-row",null,n("ion-col",null,"静态数据")),n("ion-row",null,n("ion-col",null,n("ion-textarea",{debounce:600,rows:20,wrap:"soft",onIonChange:function(o){e.checkStaticDataOJBK(o.detail.value)&&e.handleConfigChange("api_data","staticData",JSON.parse(o.detail.value+""))},value:JSON.stringify(this.comDataApiData.staticData,null,1)}),!!!this.isStaticDataOJBk?n("ion-note",{slot:"end",color:"danger"},"数据错误"):null))):null,this.dataType=="rest"?n("ion-gird",null,n("cy-item-extend",{style:{"margin-top":"15px"},header:"接口设置"},n("ion-row",null,n("ion-col",{size:"4"},"拼接环境地址"),n("ion-col",{size:"8"},n("ion-toggle",{checked:this.comDataApiData.isSplicing||false,onIonChange:function(o){e.handleConfigChange("api_data","isSplicing",o.detail.checked)}}))),n("ion-row",null,n("ion-col",{size:"4"},"请求类型"),n("ion-col",{size:"8"},n("ion-select",{value:this.comDataApiData.restType,interface:"popover",onIonChange:function(o){e.handleConfigChange("api_data","restType",o.detail.value+"")}},n("ion-select-option",{value:"get"},"get"),n("ion-select-option",{value:"post"},"post")))),n("ion-row",null,n("ion-col",{size:"4"},"接口地址"),n("ion-col",{size:"8"},n("ion-input",{debounce:1e3,onIonChange:function(o){e.handleConfigChange("api_data","restUrl",o.detail.value+"")},value:this.comDataApiData.restUrl||""})))),n("ion-row",null,n("ion-col",{size:"4"},"刷新间隔(s)"),n("ion-col",{size:"8"},n("ion-input",{debounce:1e3,placeholder:"0为只刷新一次",min:"0",type:"number",onIonChange:function(o){e.handleConfigChange("api_data","restRefreshTime",o.detail.value||"0")},value:this.comDataApiData.restRefreshTime+""||"0"}))),n("ion-row",null,n("ion-col",null,n("ion-button",{onClick:function(){e.refreshComData(e.comId)},fill:"outline",expand:"block"},"刷新数据")))):null)};return e}());x.style=C}}}));