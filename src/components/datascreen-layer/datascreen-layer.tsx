import { Component, State, Method, Event, EventEmitter, h } from '@stencil/core';

import { changeChooseComponent, getComponentDataById, updateLayerMove, getComponentDatas } from "../../util/datascreen-controller";

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
        changeChooseComponent(comId)
    }

    handleMoveLayer(detail) {
        updateLayerMove(detail.from, detail.to);
        detail.complete();
    }

    renderRender(id) {
        let comOption = getComponentDataById(id);
        return (
            <cy-fast-click onFastClick={(e) => { e.stopPropagation(); this.chooseComponent(id) }}>
                <ion-item button color={this.chooseComId == id ? "primary" : ""}>
                    <ion-thumbnail slot="start">
                        <img src={comOption.data.icon} />
                    </ion-thumbnail>
                    <ion-label>
                        {comOption.data.nickName || comOption.data.comName || ""}
                    </ion-label>
                </ion-item>
            </cy-fast-click>
        )
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
                    {this.comIdList.map((id) =>
                        <ion-reorder>
                            {this.renderRender(id)}
                        </ion-reorder>
                    )}
                </ion-reorder-group>
            </ion-content>
        ];
    }
}