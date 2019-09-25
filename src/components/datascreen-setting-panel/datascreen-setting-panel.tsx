import { Component, State, Method, h, Element } from '@stencil/core';

import { ComData } from "../../interfaces";
import { setComDataChange } from "../../util/datascreen-controller"
import { deepCopy } from "../../util/helper"

@Component({
    tag: 'datascreen-setting-panel',
    styleUrl: 'datascreen-setting-panel.scss'
})
export class DatascreenSettingPanel {
    @Element() el: HTMLElement;
    @State() chooseSeg: string = "config"
    @State() ComDataData: ComData;

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

    render() {
        if (!this.ComDataData || !this.ComDataData.id) {
            return (<setting-canvas-option></setting-canvas-option>)
        } else {
            const comData = this.ComDataData.data;
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
                    <ion-title>{comData.comName || ""}</ion-title>
                </ion-toolbar>,
                <ion-content>
                    {this.chooseSeg == "config" ?
                        <div>
                            {/* basic config */}
                            <ion-grid>
                                <ion-row>
                                    <ion-col>
                                        图标尺寸
                                    </ion-col>
                                    <ion-col>
                                        <ion-input type="number" placeholder="宽度" onIonChange={(e) => { this.handleComConfigChange("view", "w", e.detail.value) }} value={comData.view.w}></ion-input>
                                    </ion-col>
                                    <ion-col>
                                        <ion-input type="number" placeholder="高度" onIonChange={(e) => { this.handleComConfigChange("view", "h", e.detail.value) }} value={comData.view.h}></ion-input>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col>
                                        图表位置
                                    </ion-col>
                                    <ion-col>
                                        <ion-input type="number" placeholder="top" onIonChange={(e) => { this.handleComConfigChange("view", "x", e.detail.value) }} value={comData.view.x}></ion-input>
                                    </ion-col>
                                    <ion-col>
                                        <ion-input type="number" placeholder="left" onIonChange={(e) => { this.handleComConfigChange("view", "y", e.detail.value) }} value={comData.view.y}></ion-input>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="4">
                                        旋转角度
                                    </ion-col>
                                    <ion-col size="4">
                                        <ion-input type="number" onIonChange={(e) => { this.handleComConfigChange("view", "deg", e.detail.value) }} value={comData.view.deg + ""}></ion-input>
                                    </ion-col>
                                </ion-row>

                                <ion-row>
                                    <ion-col size="4">
                                        透明度
                                    </ion-col>
                                    <ion-col size="4">
                                        <ion-range value={parseFloat(comData.view.opacity)} onIonChange={(e) => { this.handleComConfigChange("view", "opacity", (e.detail.value as number).toFixed(2)) }} min={0} max={1} step={0.05}>
                                        </ion-range>
                                    </ion-col>
                                    <ion-col size="4">
                                        <ion-input type="number" onIonChange={(e) => { this.handleComConfigChange("view", "opacity", e.detail.value) }} value={comData.view.opacity + ""}></ion-input>
                                    </ion-col>
                                </ion-row>

                            </ion-grid>
                            {this.ComDataData.ComData == "media-basic-img" ?
                                <media-basic-img-config draggableConfig={comData.config} onConfigChange={(e) => { this.handleComConfigChange("config", e.detail.name, e.detail.value) }}></media-basic-img-config> : null
                            }
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