import { Component, Event, EventEmitter, h } from '@stencil/core';

import uuid from "uuid";
import { DragComOption,comType } from "../../interfaces";
import { componentTemplateDataMap } from "../../util/component/component-template";
import { addComponentData } from "../../util/datascreen-controller"

// ComData
@Component({
    tag: 'datascreen-com-panel',
    styleUrl: 'datascreen-com-panel.scss'
})
export class DatascreenComPanel {
    @Event() checkMenu: EventEmitter;

    closeThisPage() {
        this.checkMenu.emit(1);
    }

    addComToCanvas(ComName: comType, comOption: DragComOption) {
        addComponentData({
            data: comOption,
            comName: ComName,
            id: uuid.v1()
        })
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-title>组件列表</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => { this.closeThisPage() }}>
                            <ion-icon mode="ios" name="arrow-back"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                <ion-segment value="friends">
                    <ion-segment-button layout="icon-end" value="friends">
                        <ion-icon name="stats"></ion-icon>
                    </ion-segment-button>
                    <ion-segment-button value="enemies">
                        <ion-label>Enemies</ion-label>
                    </ion-segment-button>
                </ion-segment>
                <div class="com-box">
                    {Object.keys(componentTemplateDataMap).map((comName) =>
                        <div class="com-item" onClick={() => { this.addComToCanvas(comName as comType, componentTemplateDataMap[comName]) }}>
                            <div style={{ "background-image": `url(../../${componentTemplateDataMap[comName].icon})` }} class="com-img"></div>
                            <div>{componentTemplateDataMap[comName].nickName}</div>
                        </div>
                    )}
                </div>
            </ion-content>
        ];
    }
}