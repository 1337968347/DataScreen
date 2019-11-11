import { Component, State, Method, h, Element, Event, EventEmitter } from '@stencil/core';

import { ComData, CanvasConfig } from "../../interfaces";
import { setComDataChange, initSettingComponent } from "../../util/datascreen-controller"
import { isComponentHasThisConfig } from "../../util/component/component-utils"
import { deepCopy, deepChangeValue } from "../../util/helper"


@Component({
    tag: 'datascreen-setting-panel',
    styleUrl: 'datascreen-setting-panel.scss'
})
export class DatascreenSettingPanel {
    @Element() el: HTMLElement;
    @State() chooseSeg: string = "config"
    @State() ComDataData: ComData;
    @State() canvasOption: CanvasConfig;
    @Event() alert: EventEmitter;

    componentDidLoad() {
        initSettingComponent(this.el);
    }

    @Method()
    async setComponentConfigData(comData) {
        this.ComDataData = deepCopy({} as ComData, comData);
        this.chooseSeg = "config";
    }

    @Method()
    async setCanvasConfig(canvasConfig: CanvasConfig) {
        this.canvasOption = deepCopy({}, canvasConfig);
    }

    handleComConfigChange(type: string, name: string, value: any) {
        this.ComDataData.data[type][name] = value;
        this.ComDataData = deepCopy<ComData>({} as ComData, this.ComDataData);
        setComDataChange(this.ComDataData, true, false);
    }

    handleDeepComConfigValueChange(argList: string[], value) {
        deepChangeValue(this.ComDataData.data, argList, value);
        this.ComDataData = deepCopy<ComData>({} as ComData, this.ComDataData);
        setComDataChange(this.ComDataData, true, false);
    }

    handleSegChange(e) {
        this.chooseSeg = e.detail.value;
    }

    handleComTableColumnChange(row) {
        this.alert.emit({
            header: "删除",
            message: `确定要删除 ${row.title}？`,
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',

                }, {
                    text: '确定',
                    handler: () => {

                        this.handleComConfigChange("config", "columns", this.ComDataData.data.config.columns.filter((column) => {
                            return column.dataIndex !== row.dataIndex
                        }))
                    }
                }
            ]
        })
    }

    addNewTableColumn() {
        this.alert.emit({
            header: "新增",
            inputs: [{
                type: "text",
                placeholder: "名称",
                name: "title",
            }, {
                type: "text",
                placeholder: "dataIndex",
                name: "dataIndex",
            }],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: '确定',
                    handler: (e) => {
                        this.handleComConfigChange("config", "columns", [...this.ComDataData.data.config.columns, e])
                    }
                }
            ]
        })
    }

    handleTableRowEdit(row, rowIndex) {
        this.alert.emit({
            header: "编辑",
            inputs: [{
                type: "text",
                placeholder: "名称",
                name: "title",
                value: row.title || ""
            }, {
                type: "text",
                placeholder: "dataIndex",
                name: "dataIndex",
                value: row.dataIndex || ""
            }, {
                type: "number",
                placeholder: "宽度百分比",
                name: "width",
                value: row.width || ""
            }],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: '确定',
                    handler: (e) => {
                        this.handleComConfigChange("config", "columns", this.ComDataData.data.config.columns.map((column, index) => {
                            if (index == rowIndex) {
                                return e
                            } else {
                                return column
                            }
                        }))
                    }
                }
            ]
        })

    }

    render() {
        const TableColumns = [
            {
                title: '名称',
                dataIndex: 'title'
            },
            {
                title: 'dataIndex',
                dataIndex: 'dataIndex'
            },
            {
                title: '宽度',
                dataIndex: 'width'
            },
            {
                title: '操作',
                dataIndex: 'oper',
                render: (row, rowIndex) => (
                    <span>
                        <ion-button fill="clear" onClick={() => { this.handleTableRowEdit(row, rowIndex) }}>编辑</ion-button>
                        <ion-button fill="clear" onClick={() => { this.handleComTableColumnChange(row) }}>删除</ion-button>
                    </span>
                ),
            }
        ]

        if (!this.ComDataData || !this.ComDataData.id) {
            return (<setting-canvas-option canvasOption={this.canvasOption}></setting-canvas-option>)
        } else {
            const comData = this.ComDataData.data;
            const comName = this.ComDataData.comName;
            return [
                <ion-header>
                    <ion-segment onIonChange={(e) => { this.handleSegChange(e) }} value={this.chooseSeg}>
                        <ion-segment-button title="配置" value="config">
                            <ion-icon name="options"></ion-icon>
                        </ion-segment-button>
                        <ion-segment-button title="数据" value="interface">
                            <ion-icon name="link"></ion-icon>
                        </ion-segment-button>
                    </ion-segment>
                </ion-header>,
                <ion-toolbar>
                    <ion-title>{comData.nickName || ""}</ion-title>
                </ion-toolbar>,
                <ion-content>
                    {this.chooseSeg == "config" ?
                        <div>
                            {/* common-config */}
                            <setting-common-config comData={comData} onCyChange={(e) => { this.handleComConfigChange(e.detail.type, e.detail.name, e.detail.value) }}></setting-common-config>

                            <ion-grid>
                                {isComponentHasThisConfig(comName, "bgi") ?
                                    [<ion-row>
                                        <ion-col size="4">
                                            图片地址
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input clearInput debounce={1500} value={comData.config.bgi} onIonChange={(e) => { this.handleComConfigChange("config", "bgi", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row>,
                                    <ion-row>
                                        <ion-col size="4">
                                        </ion-col>
                                        <ion-col size="8">
                                            <cy-lazy-img isLazy={false} defaultImg="../../assets/image/img-default.png" style={{ "height": "100px", "object-fit": "cover" }} src={comData.config.bgi}></cy-lazy-img>
                                        </ion-col>
                                    </ion-row>] : null
                                }
                                {isComponentHasThisConfig(comName, "fontContent") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            内容
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input clearInput debounce={1500} value={comData.config.fontContent} onIonChange={(e) => { this.handleComConfigChange("config", "fontContent", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "tableAllOption") ?
                                    <cy-item-extend header="全局">
                                        <ion-row>
                                            <ion-col size="4">
                                                是否轮播
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.tableAllOption && comData.config.tableAllOption.isScroll}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableAllOption", "isScroll"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                表格行数
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="1" value={comData.config.tableAllOption && comData.config.tableAllOption.rowNum} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableAllOption", "rowNum"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                轮播间隔(s)
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="1" value={comData.config.tableAllOption && comData.config.tableAllOption.intervalSecond} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableAllOption", "intervalSecond"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend> : null
                                }
                                {isComponentHasThisConfig(comName, "iconStyle") ?
                                    <cy-item-extend header="图标样式">
                                        <ion-row>
                                            <ion-col size="4">
                                                显示
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.iconStyle && comData.config.iconStyle.show}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "iconStyle", "show"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                图标颜色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.iconStyle && comData.config.iconStyle.color} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "iconStyle", "color"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.iconStyle && comData.config.iconStyle.color} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "iconStyle", "color"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                图标大小
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" value={comData.config.iconStyle && comData.config.iconStyle.fontSize} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "iconStyle", "fontSize"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                边距
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" value={comData.config.iconStyle && comData.config.iconStyle.margin} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "iconStyle", "margin"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend> : null
                                }
                                {isComponentHasThisConfig(comName, "commonTextStyle") ?
                                    <cy-item-extend header="文本样式">
                                        <ion-row>
                                            <ion-col size="4">
                                                文本颜色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.commonTextStyle && comData.config.commonTextStyle.color} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "commonTextStyle", "color"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.commonTextStyle && comData.config.commonTextStyle.color} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "commonTextStyle", "color"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                字体大小
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" value={comData.config.commonTextStyle && comData.config.commonTextStyle.fontSize} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "commonTextStyle", "fontSize"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                字体粗细
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-select value={comData.config.commonTextStyle && comData.config.commonTextStyle.fontWeight} interface="popover" onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "commonTextStyle", "fontWeight"], e.detail.value) }}>
                                                    <ion-select-option value="normal">normal</ion-select-option>
                                                    <ion-select-option value="bold">bold</ion-select-option>
                                                    <ion-select-option value="bolder">bolder</ion-select-option>
                                                    <ion-select-option value="lighter">lighter</ion-select-option>
                                                </ion-select>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                文字对齐
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-select value={comData.config.commonTextStyle && comData.config.commonTextStyle.textAlign} interface="popover" onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "commonTextStyle", "textAlign"], e.detail.value) }}>
                                                    <ion-select-option value="center">center</ion-select-option>
                                                    <ion-select-option value="left">left</ion-select-option>
                                                    <ion-select-option value="right">right</ion-select-option>
                                                </ion-select>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend> : null
                                }
                                {isComponentHasThisConfig(comName, "timerOption") ?
                                    <cy-item-extend header="时间器">
                                        <ion-row>
                                            <ion-col size="4">
                                                格式化
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.timerOption && comData.config.timerOption.format} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "timerOption", "format"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                间隔时间(ms)
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" value={comData.config.timerOption && comData.config.timerOption.interval} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "timerOption", "interval"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend> : null
                                }
                                {isComponentHasThisConfig(comName, "borderStyle") ?
                                    <cy-item-extend header="边框">
                                        <ion-row>
                                            <ion-col size="4">
                                                颜色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.borderStyle && comData.config.borderStyle.color} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "borderStyle", "color"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.borderStyle && comData.config.borderStyle.color} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "borderStyle", "color"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                宽度
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" value={comData.config.borderStyle && comData.config.borderStyle.width} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "borderStyle", "width"], e.detail.value) }}></ion-input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend> : null
                                }
                                {isComponentHasThisConfig(comName, "backgroundColor") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            背景颜色
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input debounce={1500} value={comData.config.backgroundColor} onIonChange={(e) => { this.handleComConfigChange("config", "backgroundColor", e.detail.value) }}></ion-input>
                                            <input style={{ "height": "100%" }} type="color" value={comData.config.backgroundColor} onChange={(e) => { this.handleComConfigChange("config", "backgroundColor", e.target['value']) }}></input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "tableHeaderOption") ?
                                    <cy-item-extend header="表头">
                                        <ion-row >
                                            <ion-col size="4">
                                                表头行高(%)
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" max="100" value={comData.config.tableHeaderOption && comData.config.tableHeaderOption.height} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableHeaderOption", "height"], e.detail.value) }}></ion-input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row >
                                            <ion-col size="4">
                                                背景颜色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.tableHeaderOption && comData.config.tableHeaderOption.backgroundColor} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableHeaderOption", "backgroundColor"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.tableHeaderOption && comData.config.tableHeaderOption.backgroundColor} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableHeaderOption", "backgroundColor"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend>
                                    : null
                                }
                                {isComponentHasThisConfig(comName, "tableRowOption") ?
                                    <cy-item-extend header="行配置">
                                        <ion-row >
                                            <ion-col size="4">
                                                奇行背景色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.tableRowOption && comData.config.tableRowOption.oddBgc} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableRowOption", "oddBgc"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.tableRowOption && comData.config.tableRowOption.oddBgc} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableRowOption", "oddBgc"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row >
                                            <ion-col size="4">
                                                偶行背景色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.tableRowOption && comData.config.tableRowOption.evenBgc} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableRowOption", "evenBgc"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.tableRowOption && comData.config.tableRowOption.evenBgc} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableRowOption", "evenBgc"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend>
                                    : null
                                }
                                {isComponentHasThisConfig(comName, "tableOrderOption") ?
                                    <cy-item-extend header="序列号">
                                        <ion-row>
                                            <ion-col size="4">
                                                显示
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.tableOrderOption && comData.config.tableOrderOption.show}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableOrderOption", "show"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row >
                                            <ion-col size="4">
                                                列宽(%)
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" max="100" value={comData.config.tableOrderOption && comData.config.tableOrderOption.width} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tableOrderOption", "width"], e.detail.value) }}></ion-input>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend>
                                    : null
                                }
                                {isComponentHasThisConfig(comName, "columns") ?
                                    <cy-item-extend header="自定义列">
                                        <ion-row class="marginTop">
                                            <ion-col size="12">
                                                <ion-button fill="outline" onClick={() => { this.addNewTableColumn() }}>新增</ion-button>
                                            </ion-col>
                                            <ion-col size="12">
                                                <cy-table Columns={TableColumns} dataSource={comData.config.columns}></cy-table>
                                            </ion-col>
                                        </ion-row>
                                    </cy-item-extend>
                                    : null
                                }
                                {isComponentHasThisConfig(comName, "borderImg") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            图片边框
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-select value={comData.config.borderImg} interface="popover" onIonChange={(e) => { this.handleComConfigChange("config", "borderImg", e.detail.value) }}>
                                                <ion-select-option value="">无</ion-select-option>
                                                <ion-select-option value="border-1">border-1</ion-select-option>
                                                <ion-select-option value="border-2">border-2</ion-select-option>
                                            </ion-select>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "iframeSrc") ?
                                    <ion-row class="marginTop">
                                        <ion-col size="4">
                                            iframe地址
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input clearInput debounce={1500} value={comData.config.iframeSrc} onIonChange={(e) => { this.handleComConfigChange("config", "iframeSrc", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "swiperAutoTime") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            轮播时间(ms)
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input debounce={1500} type="number" min="0" value={comData.config.swiperAutoTime} onIonChange={(e) => { this.handleComConfigChange("config", "swiperAutoTime", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "videoSrc") ?
                                    <ion-row class="marginTop">
                                        <ion-col size="4">
                                            video地址
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input clearInput debounce={1500} value={comData.config.videoSrc} onIonChange={(e) => { this.handleComConfigChange("config", "videoSrc", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {/* echarts */}
                                {isComponentHasThisConfig(comName, "textStyle") ?
                                    <cy-item-extend header="全局样式">
                                        <ion-row>
                                            <ion-col size="4">
                                                字体
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-select value={comData.config.textStyle && comData.config.textStyle.fontFamily || ""} interface="popover"
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "textStyle", "fontFamily"], e.detail.value) }}>
                                                    <ion-select-option value="Microsoft YaHei">Microsoft YaHei</ion-select-option>
                                                    <ion-select-option value="Courier New">Courier New</ion-select-option>
                                                    <ion-select-option value="Arial">Arial</ion-select-option>
                                                    <ion-select-option value="monospace">monospace</ion-select-option>
                                                    <ion-select-option value="serif">serif</ion-select-option>
                                                </ion-select>
                                            </ion-col>
                                        </ion-row>
                                        <ion-row>
                                            <ion-col size="4">
                                                文字颜色
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.textStyle && comData.config.textStyle.color || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "textStyle", "color"], e.detail.value) }}></ion-input>
                                                <input style={{ "height": "100%" }} type="color" value={comData.config.textStyle && comData.config.textStyle.color || ""} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "textStyle", "color"], e.target['value']) }}></input>
                                            </ion-col>
                                        </ion-row>
                                        <cy-item-extend header="边距">
                                            <ion-row>
                                                <ion-col size="4">
                                                    顶部
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} placeholder="百分比或固定值，默认 60" value={comData.config.grid && comData.config.grid.top || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "grid", "top"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    底部
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} placeholder="百分比或固定值，默认 60" value={comData.config.grid && comData.config.grid.bottom || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "grid", "bottom"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    左侧
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} placeholder="百分比或固定值，默认 10%" value={comData.config.grid && comData.config.grid.left || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "grid", "left"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    右侧
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} placeholder="百分比或固定值，默认 10%" value={comData.config.grid && comData.config.grid.right || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "grid", "right"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>
                                    </cy-item-extend> : null
                                }
                                {isComponentHasThisConfig(comName, "title") ?
                                    <cy-item-extend header="标题">
                                        <ion-row>
                                            <ion-col size="4">
                                                内容
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} value={comData.config.title && comData.config.title.text || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "title", "text"], e.detail.value) }}></ion-input>
                                            </ion-col>
                                        </ion-row>
                                        <cy-item-extend header="字体样式">
                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.title && comData.config.title.textStyle && comData.config.title.textStyle.color || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "title", "textStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.title && comData.config.title.textStyle && comData.config.title.textStyle.color || ""} onChange={(e) => { this.handleDeepComConfigValueChange(["config", "title", "textStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    大小
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.title && comData.config.title.textStyle && comData.config.title.textStyle.fontSize || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "title", "textStyle", "fontSize"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    水平对齐
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select interface="popover" value={comData.config.title && comData.config.title.left || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "title", "left"], e.detail.value) }}>
                                                        <ion-select-option value="auto">自适应</ion-select-option>
                                                        <ion-select-option value="center">居中</ion-select-option>
                                                        <ion-select-option value="left">左对齐</ion-select-option>
                                                        <ion-select-option value="right">右对齐</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    字体粗细
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select interface="popover" value={comData.config.title && comData.config.title.textStyle && comData.config.title.textStyle.fontWeight || ""} onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "title", "textStyle", "fontWeight"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="bold">bold</ion-select-option>
                                                        <ion-select-option value="bolder">bolder</ion-select-option>
                                                        <ion-select-option value="lighter">lighter</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>
                                    </cy-item-extend> :
                                    null
                                }
                                {isComponentHasThisConfig(comName, "xAxis") ?
                                    <cy-item-extend header="x轴">
                                        <ion-row>
                                            <ion-col size="4">
                                                显示
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.xAxis && comData.config.xAxis.show}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "show"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>
                                        <cy-item-extend header="文本">
                                            <ion-row>
                                                <ion-col size="4">
                                                    字号
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} type="number" min="0" value={comData.config.xAxis && comData.config.xAxis.axisLabel && comData.config.xAxis.axisLabel.fontSize || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLabel", "fontSize"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.xAxis && comData.config.xAxis.axisLabel && comData.config.xAxis.axisLabel.color || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLabel", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.xAxis && comData.config.xAxis.axisLabel && comData.config.xAxis.axisLabel.color || ""}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLabel", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    风格
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.xAxis && comData.config.xAxis.axisLabel && comData.config.xAxis.axisLabel.fontStyle || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLabel", "fontStyle"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="italic">italic</ion-select-option>
                                                        <ion-select-option value="oblique">oblique</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    粗细
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.xAxis && comData.config.xAxis.axisLabel && comData.config.xAxis.axisLabel.fontWeight || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLabel", "fontWeight"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="bold">bold</ion-select-option>
                                                        <ion-select-option value="bolder">bolder</ion-select-option>
                                                        <ion-select-option value="lighter">lighter</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                        </cy-item-extend>

                                        <cy-item-extend header="轴线">
                                            <ion-row>
                                                <ion-col size="4">
                                                    显示
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-toggle checked={comData.config.xAxis && comData.config.xAxis.axisLine && comData.config.xAxis.axisLine.show}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLine", "show"], e.detail.checked); }}>
                                                    </ion-toggle>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.xAxis && comData.config.xAxis.axisLine && comData.config.xAxis.axisLine.lineStyle && comData.config.xAxis.axisLine.lineStyle.color}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLine", "lineStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.xAxis && comData.config.xAxis.axisLine && comData.config.xAxis.axisLine.lineStyle && comData.config.xAxis.axisLine.lineStyle.color}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLine", "lineStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    线宽
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input type="number" min="0" value={comData.config.xAxis && comData.config.xAxis.axisLine && comData.config.xAxis.axisLine.lineStyle && comData.config.xAxis.axisLine.lineStyle.width}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "axisLine", "lineStyle", "width"], e.detail.value); }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>

                                        <cy-item-extend header="网格线">
                                            <ion-row>
                                                <ion-col size="4">
                                                    显示
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-toggle checked={comData.config.xAxis && comData.config.xAxis.splitLine && comData.config.xAxis.splitLine.show}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "splitLine", "show"], e.detail.checked); }}>
                                                    </ion-toggle>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.xAxis && comData.config.xAxis.splitLine && comData.config.xAxis.splitLine.lineStyle && comData.config.xAxis.splitLine.lineStyle.color}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "splitLine", "lineStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.xAxis && comData.config.xAxis.splitLine && comData.config.xAxis.splitLine.lineStyle && comData.config.xAxis.splitLine.lineStyle.color}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "splitLine", "lineStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    线宽
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input type="number" min="0" value={comData.config.xAxis && comData.config.xAxis.splitLine && comData.config.xAxis.splitLine.lineStyle && comData.config.xAxis.splitLine.lineStyle.width}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "xAxis", "splitLine", "lineStyle", "width"], e.detail.value); }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>
                                    </cy-item-extend> :
                                    null
                                }
                                {isComponentHasThisConfig(comName, "yAxis") ?
                                    <cy-item-extend header="y轴">
                                        <ion-row>
                                            <ion-col size="4">
                                                显示
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.yAxis && comData.config.yAxis.show}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "show"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>
                                        <cy-item-extend header="文本">
                                            <ion-row>
                                                <ion-col size="4">
                                                    字号
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} type="number" min="0" value={comData.config.yAxis && comData.config.yAxis.axisLabel && comData.config.yAxis.axisLabel.fontSize || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLabel", "fontSize"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.yAxis && comData.config.yAxis.axisLabel && comData.config.yAxis.axisLabel.color || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLabel", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.yAxis && comData.config.yAxis.axisLabel && comData.config.yAxis.axisLabel.color || ""}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLabel", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    风格
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.yAxis && comData.config.yAxis.axisLabel && comData.config.yAxis.axisLabel.fontStyle || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLabel", "fontStyle"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="italic">italic</ion-select-option>
                                                        <ion-select-option value="oblique">oblique</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    粗细
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.yAxis && comData.config.yAxis.axisLabel && comData.config.yAxis.axisLabel.fontWeight || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLabel", "fontWeight"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="bold">bold</ion-select-option>
                                                        <ion-select-option value="bolder">bolder</ion-select-option>
                                                        <ion-select-option value="lighter">lighter</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                        </cy-item-extend>

                                        <cy-item-extend header="轴单位">

                                            <ion-row>
                                                <ion-col size="4">
                                                    单位
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.yAxis && comData.config.yAxis.name}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "name"], e.detail.value); }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>

                                        <cy-item-extend header="轴线">
                                            <ion-row>
                                                <ion-col size="4">
                                                    显示
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-toggle checked={comData.config.yAxis && comData.config.yAxis.axisLine && comData.config.yAxis.axisLine.show}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLine", "show"], e.detail.checked); }}>
                                                    </ion-toggle>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.yAxis && comData.config.yAxis.axisLine && comData.config.yAxis.axisLine.lineStyle && comData.config.yAxis.axisLine.lineStyle.color}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLine", "lineStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.yAxis && comData.config.yAxis.axisLine && comData.config.yAxis.axisLine.lineStyle && comData.config.yAxis.axisLine.lineStyle.color}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLine", "lineStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    线宽
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} type="number" min="0" value={comData.config.yAxis && comData.config.yAxis.axisLine && comData.config.yAxis.axisLine.lineStyle && comData.config.yAxis.axisLine.lineStyle.width}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "axisLine", "lineStyle", "width"], e.detail.value); }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>

                                        <cy-item-extend header="网格线">
                                            <ion-row>
                                                <ion-col size="4">
                                                    显示
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-toggle checked={comData.config.yAxis && comData.config.yAxis.splitLine && comData.config.yAxis.splitLine.show}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "splitLine", "show"], e.detail.checked); }}>
                                                    </ion-toggle>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.yAxis && comData.config.yAxis.splitLine && comData.config.yAxis.splitLine.lineStyle && comData.config.yAxis.splitLine.lineStyle.color}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "splitLine", "lineStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.yAxis && comData.config.yAxis.splitLine && comData.config.yAxis.splitLine.lineStyle && comData.config.yAxis.splitLine.lineStyle.color}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "splitLine", "lineStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    线宽
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input type="number" min="0" value={comData.config.yAxis && comData.config.yAxis.splitLine && comData.config.yAxis.splitLine.lineStyle && comData.config.yAxis.splitLine.lineStyle.width}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "yAxis", "splitLine", "lineStyle", "width"], e.detail.value); }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>

                                        </cy-item-extend>
                                    </cy-item-extend> :
                                    null
                                }
                                {isComponentHasThisConfig(comName, "legend") ?
                                    <cy-item-extend header="图例">
                                        <ion-row>
                                            <ion-col size="4">
                                                显示
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.legend && comData.config.legend.show}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "show"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>
                                        <cy-item-extend header="文本">
                                            <ion-row>
                                                <ion-col size="4">
                                                    字号
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} type="number" min="0" value={comData.config.legend && comData.config.legend.textStyle && comData.config.legend.textStyle.fontSize || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "textStyle", "fontSize"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.legend && comData.config.legend.textStyle && comData.config.legend.textStyle.color || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "textStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.legend && comData.config.legend.textStyle && comData.config.legend.textStyle.color || ""}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "textStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    风格
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.legend && comData.config.legend.textStyle && comData.config.legend.textStyle.fontStyle || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "textStyle", "fontStyle"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="italic">italic</ion-select-option>
                                                        <ion-select-option value="oblique">oblique</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    粗细
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.legend && comData.config.legend.textStyle && comData.config.legend.textStyle.fontWeight || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "textStyle", "fontWeight"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="bold">bold</ion-select-option>
                                                        <ion-select-option value="bolder">bolder</ion-select-option>
                                                        <ion-select-option value="lighter">lighter</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                        </cy-item-extend>
                                        <cy-item-extend header="布局">

                                            <ion-row>
                                                <ion-col size="4">
                                                    水平
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.legend && comData.config.legend.x || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "x"], e.detail.value) }}>
                                                        <ion-select-option value="center">center</ion-select-option>
                                                        <ion-select-option value="left">left</ion-select-option>
                                                        <ion-select-option value="right">right</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>

                                            <ion-row>
                                                <ion-col size="4">
                                                    竖直
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.legend && comData.config.legend.y || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "legend", "y"], e.detail.value) }}>
                                                        <ion-select-option value="center">center</ion-select-option>
                                                        <ion-select-option value="top">top</ion-select-option>
                                                        <ion-select-option value="bottom">bottom</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                        </cy-item-extend>

                                    </cy-item-extend> :
                                    null
                                }
                                {isComponentHasThisConfig(comName, "tooltip") ?
                                    <cy-item-extend header="提示框">
                                        <ion-row>
                                            <ion-col size="4">
                                                显示
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-toggle checked={comData.config.tooltip && comData.config.tooltip.show}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "show"], e.detail.checked); }}>
                                                </ion-toggle>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col size="4">
                                                触发类型
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-select value={comData.config.tooltip && comData.config.tooltip.trigger || ""} interface="popover"
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "trigger"], e.detail.value) }}>
                                                    <ion-select-option value="item">数据项</ion-select-option>
                                                    <ion-select-option value="axis">坐标轴</ion-select-option>
                                                </ion-select>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col size="4">
                                                触发动作
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-select value={comData.config.tooltip && comData.config.tooltip.triggerOn || ""} interface="popover"
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "triggerOn"], e.detail.value) }}>
                                                    <ion-select-option value="mousemove">悬浮</ion-select-option>
                                                    <ion-select-option value="click">点击</ion-select-option>
                                                </ion-select>
                                            </ion-col>
                                        </ion-row>

                                        <ion-row>
                                            <ion-col size="4">
                                                消失延时时间
                                            </ion-col>
                                            <ion-col size="8">
                                                <ion-input debounce={1500} type="number" min="0" value={comData.config.tooltip && comData.config.tooltip.hideDelay || ""}
                                                    onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "hideDelay"], e.detail.value) }}>
                                                </ion-input>
                                            </ion-col>
                                        </ion-row>

                                        <cy-item-extend header="文本">
                                            <ion-row>
                                                <ion-col size="4">
                                                    字号
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} type="number" min="0" value={comData.config.tooltip && comData.config.tooltip.textStyle && comData.config.tooltip.textStyle.fontSize || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "textStyle", "fontSize"], e.detail.value) }}>
                                                    </ion-input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    颜色
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-input debounce={1500} value={comData.config.tooltip && comData.config.tooltip.textStyle && comData.config.tooltip.textStyle.color || ""}
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "textStyle", "color"], e.detail.value) }}></ion-input>
                                                    <input style={{ "height": "100%" }} type="color" value={comData.config.tooltip && comData.config.tooltip.textStyle && comData.config.tooltip.textStyle.color || ""}
                                                        onChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "textStyle", "color"], e.target['value']) }}></input>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    风格
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.tooltip && comData.config.tooltip.textStyle && comData.config.tooltip.textStyle.fontStyle || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "textStyle", "fontStyle"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="italic">italic</ion-select-option>
                                                        <ion-select-option value="oblique">oblique</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                            <ion-row>
                                                <ion-col size="4">
                                                    粗细
                                                </ion-col>
                                                <ion-col size="8">
                                                    <ion-select value={comData.config.tooltip && comData.config.tooltip.textStyle && comData.config.tooltip.textStyle.fontWeight || ""} interface="popover"
                                                        onIonChange={(e) => { this.handleDeepComConfigValueChange(["config", "tooltip", "textStyle", "fontWeight"], e.detail.value) }}>
                                                        <ion-select-option value="normal">normal</ion-select-option>
                                                        <ion-select-option value="bold">bold</ion-select-option>
                                                        <ion-select-option value="bolder">bolder</ion-select-option>
                                                        <ion-select-option value="lighter">lighter</ion-select-option>
                                                    </ion-select>
                                                </ion-col>
                                            </ion-row>
                                        </cy-item-extend>
                                    </cy-item-extend> :
                                    null
                                }
                                {isComponentHasThisConfig(comName, "tooltip") ?
                                    <cy-item-extend header="数据系列">
                                        {comData.config && comData.config.series && comData.config.series[0] ?
                                            <setting-chart-series series={comData.config.series} onCyChange={(e) => { this.handleDeepComConfigValueChange(e.detail.argList, e.detail.value) }}></setting-chart-series>
                                            : null
                                        }
                                    </cy-item-extend> :
                                    null
                                }
                            </ion-grid>
                        </div> : null
                    }

                    {this.chooseSeg == "interface" ?
                        <div>
                            {this.ComDataData.data.api_data ?
                                <setting-data-config comId={this.ComDataData.id} comDataApiData={comData.api_data} onCyChange={(e) => { this.handleComConfigChange(e.detail.type, e.detail.name, e.detail.value) }}></setting-data-config>
                                : "该组件不存在数据接口"
                            }

                        </div>
                        : null
                    }
                </ion-content>
            ];
        }
    }

}