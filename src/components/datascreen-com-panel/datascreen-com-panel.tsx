import { Component, State, Event, EventEmitter, h } from '@stencil/core';

import uuid from "uuid";
import { DragComOption, comType } from "../../interfaces";
import { componentTemplateDataMap } from "../../util/component/component-template";
import { addComponentData } from "../../util/datascreen-controller"

// ComData
@Component({
    tag: 'datascreen-com-panel',
    styleUrl: 'datascreen-com-panel.scss'
})
export class DatascreenComPanel {
    @State() chooseComType: string = "chart";
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

    handleComTypeChange(e: CustomEvent) {
        this.chooseComType = e.detail.value;
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
                <div class="full-content">
                    <ion-segment value={this.chooseComType} onIonChange={(e) => { this.handleComTypeChange(e) }}>
                        <ion-segment-button value="chart" title="图表">
                            <ion-icon name="podium"></ion-icon>
                        </ion-segment-button>
                        <ion-segment-button value="media" title="媒体">
                            <ion-icon name="photos"></ion-icon>
                        </ion-segment-button>
                        <ion-segment-button value="table" title="表格">
                            <ion-icon name="grid"></ion-icon>
                        </ion-segment-button>
                        <ion-segment-button value="text" title="文本">
                            <ion-icon name="information-circle-outline"></ion-icon>
                        </ion-segment-button>
                        <ion-segment-button value="map" title="地图">
                            <ion-icon name="globe"></ion-icon>
                        </ion-segment-button>
                    </ion-segment>
                    <div class="com-box">
                        {Object.keys(componentTemplateDataMap).filter((comName) => {
                            return comName.split("-")[0] == this.chooseComType
                        }).map((comName) =>
                            <div class="com-item" onClick={() => { this.addComToCanvas(comName as comType, componentTemplateDataMap[comName]) }}>
                                <div style={{ "background-image": `url(../../${componentTemplateDataMap[comName].icon})` }} class="com-img"></div>
                                <div>{componentTemplateDataMap[comName].nickName}</div>
                            </div>
                        )}
                    </div>
                </div>
            </ion-content>
        ];
    }
}