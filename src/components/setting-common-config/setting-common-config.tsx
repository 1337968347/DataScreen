import { Component,Prop,Event,EventEmitter, h } from '@stencil/core';
import { DragComOption } from "../../interfaces"

@Component({
    tag: 'setting-common-config'
})
export class SettingCommonConfig {
    @Prop() comData: DragComOption;
    @Event() cyChange: EventEmitter;

    handleConfigChange(type: string, name: string, value:any) {
        this.cyChange.emit({
           type,name,value
        })
    }
    render() {
        return (
            <ion-grid>
            <ion-row>
                <ion-col>
                    图标尺寸
                </ion-col>
                <ion-col>
                    <ion-input debounce={500} type="number" placeholder="宽度" onIonChange={(e) => { this.handleConfigChange("view", "w", e.detail.value) }} value={this.comData.view.w}></ion-input>
                </ion-col>
                <ion-col>
                    <ion-input debounce={500}  type="number" placeholder="高度" onIonChange={(e) => { this.handleConfigChange("view", "h", e.detail.value) }} value={this.comData.view.h}></ion-input>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col>
                    图表位置
                </ion-col>
                <ion-col>
                    <ion-input debounce={500}  type="number" placeholder="top" onIonChange={(e) => { this.handleConfigChange("view", "x", e.detail.value) }} value={this.comData.view.x}></ion-input>
                </ion-col>
                <ion-col>
                    <ion-input debounce={500}  type="number" placeholder="left" onIonChange={(e) => { this.handleConfigChange("view", "y", e.detail.value) }} value={this.comData.view.y}></ion-input>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="4">
                    旋转角度
                </ion-col>
                <ion-col size="4">
                    <ion-input debounce={500}  type="number" onIonChange={(e) => { this.handleConfigChange("view", "deg", e.detail.value) }} value={this.comData.view.deg + ""}></ion-input>
                </ion-col>
            </ion-row>

            <ion-row>
                <ion-col size="4">
                    透明度
                </ion-col>
                <ion-col size="4">
                    <ion-range debounce={500}  value={parseFloat(this.comData.view.opacity)} onIonChange={(e) => { this.handleConfigChange("view", "opacity", (e.detail.value as number).toFixed(2)) }} min={0} max={1} step={0.05}>
                    </ion-range>
                </ion-col>
                <ion-col size="4">
                    <ion-input debounce={500}  type="number" onIonChange={(e) => { this.handleConfigChange("view", "opacity", e.detail.value) }} value={this.comData.view.opacity + ""}min="0"max="1" step="0.05"></ion-input>
                </ion-col>
            </ion-row>

        </ion-grid>
        );
    }
}