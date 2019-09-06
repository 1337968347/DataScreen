import { Component, State, h } from '@stencil/core';

import { changeChooseComponent } from "../../util/datascreen-controller";

@Component({
    tag: 'datascreen-edit-main',
    styleUrl: 'datascreen-edit-main.scss'
})
export class DatascreenEditMain {
    @State() scaleRange: number = 35;
    rangeStep: number = 5;
    minRange: number = 10;
    maxRange: number = 200;

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
            <cy-fast-click class="datascreen-edit-container" onFastClick={()=>{changeChooseComponent("")}}>
                <datascreen-canvas scale={this.scaleRange}>
                </datascreen-canvas>
            </cy-fast-click>,
            <div class="datascreen-edit-footer">
                <div class="right-range-control">
                    <ion-label>{this.scaleRange}&nbsp;&nbsp;&nbsp;</ion-label>
                    <ion-range  value={this.scaleRange} onIonChange={(e) => { this.changeRangeValue(e.detail.value) }} min={this.minRange} pin={true} max={this.maxRange} step={this.rangeStep} >
                        <ion-icon slot="start" name="remove" onClick={() => { this.reduceRange() }}></ion-icon>
                        <ion-icon slot="end" name="add" onClick={() => { this.addRange() }}></ion-icon>
                    </ion-range>
                </div>
            </div>
        ];
    }
}