import { Component, Prop, State, Event, EventEmitter, Element, Host, h } from '@stencil/core';
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
    @Event() popover: EventEmitter;
    @Event() alert: EventEmitter;

    componentWillLoad() {
        this.getDataScreenListData()
    }

    async getDataScreenListData() {
        let dataScreenIds = await DataScreenData.getDataScreenIdList();
        this.dataScreenList = await Promise.all(
            dataScreenIds.map(async (id) => {
                return await DataScreenData.getDataScreenOptionById(id);
            })
        )
    }

    addNewCanvas() {
        this.history.push('/new');
    }

    jumpToCanvasEdit(dataScreenId: string) {
        this.history.push(`canvas/${dataScreenId}/edit`)
    }

    jumpTOCanvasPreview(dataScreenId: string) {
        this.history.push(`canvas/${dataScreenId}/preview`)
    }

    async removeCanvas(dataScreen: DataScreen) {
        this.alert.emit({
            header: "确定要删除这个可视化吗？",
            message: dataScreen.name,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: 'Okay',
                    handler: () => {
                        DataScreenData.deleteDataScreen(dataScreen.id).then(() => {
                            this.getDataScreenListData()
                        })
                    }
                }
            ]
        })

    }

    popoverThemeSelectBox() {
        this.popover.emit({ component: 'popover-theme' });
    }

    popoverCodeModify(dataScreenId: string) {
        this.popover.emit({
            component: 'popover-code-modify',
            cssClass: "code-view-popover",
            componentProps: {
                dataScreenId: dataScreenId,
                dismissCallBack: () => {
                    this.getDataScreenListData()
                }
            }
        })
    }

    handleDataSCreenChange(dataScreen: DataScreen, name: string, value: string) {
        dataScreen[name] = value;
        this.dataScreenList = [...this.dataScreenList];
        DataScreenData.setDataScreenById(dataScreen.id, dataScreen)
    }

    render() {
        return (
            <Host class="ion-page">
                <ion-header>
                    <ion-toolbar>
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
                        <ion-buttons slot="end">
                            <ion-button title="导入" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.popoverCodeModify("") }}>
                                <ion-icon slot="icon-only" name="code"></ion-icon>
                            </ion-button>
                            <ion-button title="主题" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.popoverThemeSelectBox() }}>
                                <ion-icon slot="icon-only" name="color-palette"></ion-icon>
                            </ion-button>
                        </ion-buttons>
                    </ion-toolbar>
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
                                            <ion-input debounce={500} onIonChange={(e) => { this.handleDataSCreenChange(dataScreen, "name", e.detail.value) }} value={dataScreen.name}></ion-input>

                                            <ion-buttons slot="end">
                                                <ion-button color="danger" onClick={() => { this.removeCanvas(dataScreen) }} title="删除" fill="outline">
                                                    <ion-icon slot="icon-only" name="trash"></ion-icon>
                                                </ion-button>

                                                <ion-button onClick={() => { this.popoverCodeModify(dataScreen.id) }} title="代码" fill="outline">
                                                    <ion-icon slot="icon-only" name="code"></ion-icon>
                                                </ion-button>

                                                <ion-button onClick={() => { this.jumpTOCanvasPreview(dataScreen.id) }} title="预览" fill="outline">
                                                    <ion-icon slot="icon-only" name="easel"></ion-icon>
                                                </ion-button>
                                            </ion-buttons>

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