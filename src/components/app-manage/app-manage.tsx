import { Component, Prop, State, Element, Host, h } from '@stencil/core';
import { RouterHistory } from "@stencil/router"

import { DataScreen } from '../../interfaces';
import { DataScreenData } from "../../providers/datascreen-data";

@Component({
    tag: 'app-manage',
    styleUrl: 'app-manage.scss'
})
export class AppManage {
    @Prop() history: RouterHistory;
    @Element() el: HTMLElement;
    @State() chooseSeg: "my-canvas" | "my-component" | string = "my-canvas";
    @State() dataScreenList: DataScreen[] = []

    componentWillLoad() {
        this.getDataScreenListData()
    }

    async getDataScreenListData() {
        let dataScreenIds = await DataScreenData.getDataScreenIdList();
        this.dataScreenList = await Promise.all(
            dataScreenIds.map(async (id) => {
                return await DataScreenData.getDataScreenById(id);
            })
        )
    }

    addNewCanvas() {
        this.history.push('/new');
    }

    jumpToCanvasEdit(dataScreenId: string) {
        this.history.push(`canvas/${dataScreenId}/edit`)
    }

    render() {
        return (
            <Host class="ion-page">
                <ion-header>
                    <ion-segment value={this.chooseSeg} onIonChange={(e) => { this.chooseSeg = e.detail.value }}>
                        <ion-segment-button value="my-canvas" layout="icon-start">
                            <ion-icon name="logo-buffer"></ion-icon>
                            <ion-label>我的可视化</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="my-component" layout="icon-start">
                            <ion-icon name="cube"></ion-icon>
                            <ion-label>我的组件</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </ion-header>
                <ion-content>
                    {this.chooseSeg == "my-canvas" ?
                        <div class="canvas-box">
                            <ion-card button onClick={() => { this.addNewCanvas() }} class="add-canvas">
                                <div class="add-card-content">
                                    <ion-icon name="add"></ion-icon>
                                    <br />
                                    <span>新建可视化</span>
                                </div>
                            </ion-card>
                            {this.dataScreenList.map((dataScreen: DataScreen) =>
                                <ion-card onClick={() => { this.jumpToCanvasEdit(dataScreen.id) }}>
                                    <div style={{ "background-image": `url(${dataScreen.scaleImg || "../../assets/image/default-canvas.png"})` }} class="canvas-preivew"></div>
                                    <ion-card-content>
                                        <ion-item onClick={(e) => { e.stopPropagation(); e.preventDefault() }} lines="none">
                                            <ion-icon name="create" slot="start"></ion-icon>
                                            <ion-input value={dataScreen.name}></ion-input>
                                            <ion-button fill="outline" slot="end">View</ion-button>
                                        </ion-item>
                                    </ion-card-content>
                                </ion-card>
                            )}
                        </div> : null
                    }

                </ion-content>
            </Host>
        )

    }
}