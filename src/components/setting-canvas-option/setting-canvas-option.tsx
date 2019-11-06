import { Component, Prop, State, Element, Event, EventEmitter, h } from '@stencil/core';

import { CanvasConfig } from "../../interfaces";
import { setCanvasConfig } from "../../util/datascreen-controller";
import { canvasDefaultConfig } from "../../util/canvas/canvas-defaultdata";

@Component({
    tag: 'setting-canvas-option',
    styleUrl: "setting-canvas-option.scss"
})
export class SettingCanvasOption {
    @Element() el: HTMLElement;
    @Prop() canvasOption: CanvasConfig;
    @State() imgAdress: string;
    @Event() toast: EventEmitter;


    handleCanvasChange(name: string, value) {
        this.canvasOption[name] = value;
        this.canvasOption = { ...this.canvasOption };
        setCanvasConfig(this.canvasOption)
    }

    getCanvasToImg() {
        //TODO  
        this.toast.emit("暂且不支持");
    }

    render() {
        if (this.canvasOption) {
            return [
                <ion-header>
                    <ion-toolbar color="secondary">
                        <ion-title>
                            页面设置
                        </ion-title>
                    </ion-toolbar>
                </ion-header>,
                <ion-content>
                    <ion-grid>
                        <ion-row>
                            <ion-col>
                                屏幕大小
                            </ion-col>
                            <ion-col>
                                <ion-input type="number" placeholder="宽度" onIonChange={(e) => { this.handleCanvasChange("w", e.detail.value) }} value={this.canvasOption.w}></ion-input>
                            </ion-col>
                            <ion-col>
                                <ion-input type="number" placeholder="高度" onIonChange={(e) => { this.handleCanvasChange("h", e.detail.value) }} value={this.canvasOption.h}></ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size="4">
                                背景颜色
                            </ion-col>
                            <ion-col size="8">
                                <ion-input value={this.canvasOption.bgc} onIonChange={(e) => { this.handleCanvasChange("bgc", e.detail.value) }}></ion-input>
                                <input style={{ "height": "100%" }} type="color" value={this.canvasOption.bgc} onChange={(e) => { this.handleCanvasChange("bgc", e.target['value']) }}></input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size="4">
                                背景图
                            </ion-col>
                            <ion-col size="8">
                                {/* <ion-icon name="infinite"></ion-icon> */}
                                <ion-input debounce={500} clearInput value={this.canvasOption.bgi} onIonChange={(e) => { this.handleCanvasChange("bgi", e.detail.value) }}>
                                </ion-input>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size="4">
                                环境地址
                            </ion-col>
                            <ion-col size="8">
                                {/* <ion-icon name="infinite"></ion-icon> */}
                                <ion-input debounce={500} clearInput value={this.canvasOption.baseUrl} onIonChange={(e) => { this.handleCanvasChange("baseUrl", e.detail.value) }}>
                                </ion-input>
                            </ion-col>
                        </ion-row>

                        {this.canvasOption.bgi ?
                            <ion-row>
                                <ion-col size="4">
                                </ion-col>
                                <ion-col size="8">
                                    <ion-img style={{ "height": "100px", "object-fit": "cover" }} src={this.canvasOption.bgi}></ion-img>
                                </ion-col>
                            </ion-row>
                            : null}

                        <ion-row>
                            <ion-col size="4">
                                重置
                            </ion-col>
                            <ion-col size="8">
                                <ion-button size="small" fill="outline" onClick={() => { this.handleCanvasChange("bgi", canvasDefaultConfig.bgi) }}>恢复默认背景</ion-button>
                            </ion-col>
                        </ion-row>

                        <ion-row>
                            <ion-col size="4">
                                缩略图
                            </ion-col>
                            <ion-col size="8">
                                <ion-button size="small" fill="outline" onClick={() => { this.getCanvasToImg() }}>获取封面</ion-button>
                            </ion-col>
                        </ion-row>

                        {this.imgAdress ?
                            <ion-row>
                                <ion-col size="4">
                                </ion-col>
                                <ion-col size="8" id="canvasBox">
                                    <img style={{ "height": "100px", "object-fit": "cover" }} src={this.imgAdress}></img>
                                </ion-col>
                            </ion-row>
                            : null
                        }
                    </ion-grid>
                </ion-content>
            ];
        }

    }
}