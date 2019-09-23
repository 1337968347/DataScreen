import { Component, State, Element, h } from '@stencil/core';

import { changeChooseComponent, initCanvasComponent, getCanvasConfig } from "../../util/datascreen-controller";
import { reduceFrequency } from"../../util/helper";
import { CanvasConfig } from "../../interfaces"

@Component({
    tag: 'datascreen-edit-main',
    styleUrl: 'datascreen-edit-main.scss'
})
export class DatascreenEditMain {
    @Element() el: HTMLElement;
    @State() scaleRange: number = 35;
    rangeStep: number = 5;
    minRange: number = 10;
    maxRange: number = 200;


    componentDidLoad() {
        this.initResize();
        initCanvasComponent(this.el.querySelector("datascreen-canvas"))
    }

    componentDidUpdate(){
        window.onresize = null;
    }

    initResize(){
        let canvasOption = getCanvasConfig();
        this.resizeSCale(canvasOption);
        window.onresize = () => {
            reduceFrequency("onresizeCanvas",()=>{
                let canvasOption1 = getCanvasConfig();
                this.resizeSCale(canvasOption1)
            })
        }
    }

    resizeSCale(canvasOption: CanvasConfig) {
        let canShowBoxWidth = this.el.querySelector(".datascreen-edit-container").clientWidth;
        let canShowBoxHeight = this.el.querySelector(".datascreen-edit-container").clientHeight;
        let scale = this.scaleRange;
        if ((parseFloat(canvasOption.w) / parseFloat(canvasOption.h)) > (canShowBoxWidth / canShowBoxHeight)) {
            scale = Math.floor((canShowBoxWidth / parseFloat(canvasOption.w)) * 100)
        } else {
            scale = Math.floor((canShowBoxHeight / parseFloat(canvasOption.h)) * 100)
        }
        this.scaleRange = scale > this.minRange ? scale : this.minRange;
        this.scaleRange = scale > this.maxRange ? this.maxRange : scale;
    }

    changeRangeValue(value) {
        if (value >= this.minRange && value <= this.maxRange) {
            this.scaleRange = value;
        }
    }

    reduceRange() {
        this.changeRangeValue(this.scaleRange - this.rangeStep)
    }

    addRange() {
        this.changeRangeValue(this.scaleRange + this.rangeStep)
    }

    render() {
        return [
            <div class="datascreen-edit-container" onClick={() => { changeChooseComponent("") }}>
                <datascreen-canvas scale={this.scaleRange}>
                </datascreen-canvas>
            </div>,
            <div class="datascreen-edit-footer">
                <div class="right-range-control">
                    <ion-label>{this.scaleRange}&nbsp;&nbsp;&nbsp;</ion-label>
                    <ion-range value={this.scaleRange} onIonChange={(e) => { this.changeRangeValue(e.detail.value) }} min={this.minRange} pin={true} max={this.maxRange} step={this.rangeStep} >
                        <ion-icon slot="start" name="remove" onClick={() => { this.reduceRange() }}></ion-icon>
                        <ion-icon slot="end" name="add" onClick={() => { this.addRange() }}></ion-icon>
                    </ion-range>
                </div>
            </div>
        ];
    }
}