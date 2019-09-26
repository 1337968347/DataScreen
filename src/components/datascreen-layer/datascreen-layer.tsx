import { Component, State, Method, Event, EventEmitter, h } from '@stencil/core';

import { changeChooseComponent, updateLayerMove, getComponentDatas } from "../../util/datascreen-controller";

@Component({
    tag: 'datascreen-layer',
    styleUrl: 'datascreen-layer.scss'
})
export class DatascreenLayer {
    @State() chooseComId: string = "";
    @State() comIdList: string[] = [];
    @Event() checkMenu: EventEmitter;

    componentWillLoad() {
        let comIdsList = getComponentDatas().map((item) => { return item.id });
        this.mapComIdsToState(comIdsList)
    }

    @Method()
    async mapComIdsToState(newComIdList: string[]) {
        this.comIdList = [...newComIdList];
    }

    @Method()
    async chooseComponent(comId) {
        this.chooseComId = comId;
        await changeChooseComponent(comId)
    }

    handleMoveLayer(detail) {
        updateLayerMove(detail.from, detail.to);
        detail.complete();
    }

    renderRender(comData) {
        return (
            <cy-fast-click onFastClick={(e) => { e.stopPropagation(); this.chooseComponent(comData.id) }}>
                <ion-item button color={this.chooseComId == comData.id ? "primary" : ""}>
                    <ion-thumbnail slot="start">
                        <img src={"../../"+comData.data.icon} />
                    </ion-thumbnail>
                    <ion-label>
                        {comData.data.nickName || comData.data.comName || ""}
                    </ion-label>
                </ion-item>
            </cy-fast-click>
        )
    }

    render() {
        let comDatas = getComponentDatas();
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
                    {comDatas.map((comData) =>
                        <ion-reorder>
                            {this.renderRender(comData)}
                        </ion-reorder>
                    )}
                </ion-reorder-group>
            </ion-content>
        ];
    }
}