import { Component,Prop, State, Element, h } from '@stencil/core';

import { changeChooseComponent, initCanvasComponent } from "../../util/datascreen-controller";

@Component({
    tag: 'datascreen-edit-main',
    styleUrl: 'datascreen-edit-main.scss'
})
export class DatascreenEditMain {
    @Element() el: HTMLElement;
    @Prop() dataScreenId: string;
    @State() scaleRange: number = 35;
    rangeStep: number = 5;
    minRange: number = 10;
    maxRange: number = 300;

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"))
        this.initCanvasOption()
    }

    async initCanvasOption() {
        let canvasElement = this.el.querySelector("datascreen-canvas");
        let dataScreenData = await canvasElement.getDataScreen(this.dataScreenId);
        canvasElement.setDataScreen(this.dataScreenId, {
            componentsData: dataScreenData.componentsData,
            canvasOption: dataScreenData.canvasOption
        }, false)
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

    fitContentSize(){
        this.el.querySelector("datascreen-canvas-content").resizeSCale()
    }

    render() {
        return [
            <div class="canvas-box" onClick={(e) => { changeChooseComponent("") }}>
                <datascreen-canvas-content padding={60} onCanvasScaleChange={(e) => { this.scaleRange = e.detail }}>
                    <datascreen-canvas scale={this.scaleRange}>
                    </datascreen-canvas>
                </datascreen-canvas-content>
            </div>,
            <div class="datascreen-edit-footer">
                <div class="right-range-control">
                    <ion-button size="small" onClick={()=>{this.fitContentSize()}}>fit</ion-button>&nbsp;
                    <ion-label>{this.scaleRange}%&nbsp;&nbsp;&nbsp;</ion-label>
                    <ion-range value={this.scaleRange} onIonChange={(e) => { this.changeRangeValue(e.detail.value) }} min={this.minRange} pin={true} max={this.maxRange} step={this.rangeStep} >
                        <ion-icon slot="start" name="remove" onClick={() => { this.reduceRange() }}></ion-icon>
                        <ion-icon slot="end" name="add" onClick={() => { this.addRange() }}></ion-icon>
                    </ion-range>
                </div>
            </div>
        ];
    }
}