import { Component, State, Method, h, Element, Event, EventEmitter } from '@stencil/core';

import { ComData } from "../../interfaces";
import { setComDataChange } from "../../util/datascreen-controller"
import { isComponentHasThisConfig } from "../../util/component/component-utils"
import { deepCopy } from "../../util/helper"


@Component({
    tag: 'datascreen-setting-panel',
    styleUrl: 'datascreen-setting-panel.scss'
})
export class DatascreenSettingPanel {
    @Element() el: HTMLElement;
    @State() chooseSeg: string = "config"
    @State() ComDataData: ComData;
    @Event() alert: EventEmitter;

    @Method()
    async setComponentConfigData(comData) {
        this.ComDataData = deepCopy({}, comData);
        this.chooseSeg = "config";
    }

    handleComConfigChange(type: string, name: string, value: any) {
        this.ComDataData.data[type][name] = value;
        this.ComDataData = { ...this.ComDataData };
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
        this.handleComConfigChange("config", "columns", [...this.ComDataData.data.config.columns, { title: "", dataIndex: "" }])
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
                title: '操作',
                dataIndex: 'oper',
                render: row => (
                    <span>
                        <ion-button fill="clear"  onClick={() => {  }}>编辑</ion-button>
                        <ion-button fill="clear"  onClick={() => { this.handleComTableColumnChange(row) }}>删除</ion-button>
                    </span>
                ),
            }
        ]

        if (!this.ComDataData || !this.ComDataData.id) {
            return (<setting-canvas-option></setting-canvas-option>)
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

                            {/* media-config */}
                            <ion-grid>
                                {isComponentHasThisConfig(comName, "bgi") ?
                                    [<ion-row>
                                        <ion-col size="4">
                                            图片地址
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input clearInput value={comData.config.bgi} onChange={(e) => { this.handleComConfigChange("config", "bgi", e.target['value']) }}>
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
                                {/* text-config */}
                                {isComponentHasThisConfig(comName, "fontContent") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            内容
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input clearInput value={comData.config.fontContent} onChange={(e) => { this.handleComConfigChange("config", "fontContent", e.target['value']) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "fontSize") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            字体大小
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input type="number" min="0" value={comData.config.fontSize} onIonChange={(e) => { this.handleComConfigChange("config", "fontSize", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "fontWeight") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            字体粗细
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-select value={comData.config.fontWeight} interface="popover" onIonChange={(e) => { this.handleComConfigChange("config", "fontWeight", e.detail.value) }}>
                                                <ion-select-option value="normal">normal</ion-select-option>
                                                <ion-select-option value="bold">bold</ion-select-option>
                                                <ion-select-option value="bolder">bolder</ion-select-option>
                                                <ion-select-option value="lighter">lighter</ion-select-option>
                                            </ion-select>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "color") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            文本颜色
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input value={comData.config.color} onIonChange={(e) => { this.handleComConfigChange("config", "color", e.detail.value) }}></ion-input>
                                            <input style={{ "height": "100%" }} type="color" value={comData.config.color} onChange={(e) => { this.handleComConfigChange("config", "color", e.target['value']) }}></input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "backgroundColor") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            背景颜色
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input value={comData.config.backgroundColor} onIonChange={(e) => { this.handleComConfigChange("config", "backgroundColor", e.detail.value) }}></ion-input>
                                            <input style={{ "height": "100%" }} type="color" value={comData.config.backgroundColor} onChange={(e) => { this.handleComConfigChange("config", "backgroundColor", e.target['value']) }}></input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "textAlign") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            文字对齐
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-select value={comData.config.textAlign} interface="popover" onIonChange={(e) => { this.handleComConfigChange("config", "textAlign", e.detail.value) }}>
                                                <ion-select-option value="center">居中</ion-select-option>
                                                <ion-select-option value="left">左对齐</ion-select-option>
                                                <ion-select-option value="right">右对齐</ion-select-option>
                                            </ion-select>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "borderWidth") ?
                                    <ion-row>
                                        <ion-col size="4">
                                            边框宽度
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input type="number" min="0" value={comData.config.borderWidth} onIonChange={(e) => { this.handleComConfigChange("config", "borderWidth", e.detail.value) }}>
                                            </ion-input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "borderColor") ?
                                    <ion-row class="marginTop">
                                        <ion-col size="4">
                                            边框颜色
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input value={comData.config.borderColor} onIonChange={(e) => { this.handleComConfigChange("config", "borderColor", e.detail.value) }}></ion-input>
                                            <input style={{ "height": "100%" }} type="color" value={comData.config.borderColor} onChange={(e) => { this.handleComConfigChange("config", "borderColor", e.target['value']) }}></input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "headerColor") ?
                                    <ion-row class="marginTop">
                                        <ion-col size="4">
                                            表头颜色
                                        </ion-col>
                                        <ion-col size="8">
                                            <ion-input value={comData.config.headerColor} onIonChange={(e) => { this.handleComConfigChange("config", "headerColor", e.detail.value) }}></ion-input>
                                            <input style={{ "height": "100%" }} type="color" value={comData.config.headerColor} onChange={(e) => { this.handleComConfigChange("config", "headerColor", e.target['value']) }}></input>
                                        </ion-col>
                                    </ion-row> : null
                                }
                                {isComponentHasThisConfig(comName, "columns") ?
                                    <ion-row class="marginTop">
                                        <ion-col size="12">
                                            <ion-button fill="outline" onClick={() => { this.addNewTableColumn() }}>新增</ion-button>
                                        </ion-col>
                                        <ion-col size="12">
                                            <cy-table Columns={TableColumns} dataSource={comData.config.columns}></cy-table>
                                        </ion-col>
                                    </ion-row> : null
                                }
                            </ion-grid>
                        </div>
                        : null
                    }

                    {this.chooseSeg == "interface" ?
                        <ion-grid>

                        </ion-grid>
                        : null
                    }
                </ion-content>
            ];
        }
    }

}