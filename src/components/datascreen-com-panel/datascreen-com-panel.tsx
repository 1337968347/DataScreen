import { Component, Event, EventEmitter, h } from '@stencil/core';
import { componentDefaultDataMap } from "../../util/component/component-defaultdata";

@Component({
    tag: 'datascreen-com-panel',
    styleUrl: 'datascreen-com-panel.scss'
})
export class DatascreenComPanel {
    @Event() checkMenu: EventEmitter;

    closeThisPage() {
        this.checkMenu.emit(1);
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
                <ion-segment>
                    <ion-segment-button layout="icon-end" value="friends">
                        <ion-icon name="stats"></ion-icon>
                    </ion-segment-button>
                    <ion-segment-button value="enemies">
                        <ion-label>Enemies</ion-label>
                    </ion-segment-button>
                </ion-segment>
                <div class="com-box">
                    {Object.keys(componentDefaultDataMap).map((com) =>
                        <div class="com-item"> 
                            <div style={{ "background-image": `url(${"../../" + componentDefaultDataMap[com].icon})`}} class="com-img"></div>
                            <div>{componentDefaultDataMap[com].comName}</div>
                        </div>
                    )}
                </div>
            </ion-content>
        ];
    }
}