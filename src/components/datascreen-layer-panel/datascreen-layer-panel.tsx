import { Component, State, Method, Event, EventEmitter, Element, h } from '@stencil/core';
import { componentTemplateDataMap } from "../../util/component/component-template";
import { initLayerComponent, changeChooseComponent, updateLayerMove, getComponentDatas } from "../../util/datascreen-controller";

@Component({
    tag: 'datascreen-layer-panel',
    styleUrl: 'datascreen-layer-panel.scss'
})
export class DatascreenLayer {
    @Element() el: HTMLElement;
    @State() chooseComId: string = "";
    @State() comIdList: string[] = [];
    @Event() checkMenu: EventEmitter;

    componentWillLoad() {
        let comIdsList = getComponentDatas().map((item) => { return item.id });
        this.mapComIdsToState(comIdsList)
    }

    componentDidLoad() {
        initLayerComponent(this.el);

    }
    @Method()
    async mapComIdsToState(newComIdList: string[]) {
        this.comIdList = [...newComIdList];
    }

    @Method()
    async chooseComponentById(comId) {
        if (this.chooseComId !== comId) {
            this.chooseComId = comId;
            await changeChooseComponent(comId)
        }
    }

    handleMoveLayer(detail) {
        updateLayerMove(detail.from, detail.to, true, false, true);
        detail.complete();
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

                        <ion-item button onClick={(e) => { e.stopPropagation(); this.chooseComponentById(comData.id) }} color={this.chooseComId == comData.id ? "primary" : ""}>
                            <ion-thumbnail slot="start">
                                <cy-iconfont class="com-img" name={componentTemplateDataMap[comData.comName].icon}></cy-iconfont>
                            </ion-thumbnail>
                            <ion-label>
                                {comData.data.nickName || ""}
                            </ion-label>
                            <ion-reorder slot="end"></ion-reorder>
                        </ion-item>

                    )}
                </ion-reorder-group>
            </ion-content>
        ];
    }
}