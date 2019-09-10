import { Component, State, Method, Event, EventEmitter, h } from '@stencil/core';

import { ComType } from "../../interfaces";
import { getComponentDatas, changeChooseComponent } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-layer',
    styleUrl: 'datascreen-layer.scss'
})
export class DatascreenLayer {
    @State() chooseComId: string = "";
    @State() comOptionList: ComType[] = [];
    @Event() checkMenu: EventEmitter;

    componentWillLoad() {
        this.mapComDatasToState(getComponentDatas())
    }

    @Method()
    async mapComDatasToState(comList: ComType[]) {
        this.comOptionList = comList;
    }

    @Method()
    async chooseComponent(comId) {
        this.chooseComId = comId;
        changeChooseComponent(comId)
    }

    handleMoveLayer(detail) {
        detail.complete();
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-title>图层</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => { this.checkMenu.emit(0); }}>
                            <ion-icon mode="ios" name="arrow-back"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,
            <ion-content onClick={() => { changeChooseComponent("") }}>
                <ion-reorder-group disabled={false} onIonItemReorder={(e) => { this.handleMoveLayer(e.detail) }}>
                    {this.comOptionList.map((com) =>
                        <ion-reorder>
                            <cy-fast-click onFastClick={(e) => { e.stopPropagation(); this.chooseComponent(com.id) }}>
                                <ion-item button color={this.chooseComId == com.id ? "primary" : ""}>
                                    <ion-thumbnail slot="start">
                                        <img src={com.data.icon} />
                                    </ion-thumbnail>
                                    <ion-label>
                                        {com.data.nickName || com.data.comName || ""}
                                    </ion-label>
                                </ion-item>
                            </cy-fast-click>

                        </ion-reorder>
                    )}
                </ion-reorder-group>
            </ion-content>
        ];
    }
}