import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';
import { RouterHistory } from "@stencil/router";

import { getDataScreen, setDataScreen } from "../../util/datascreen-controller";

@Component({
    tag: 'datascreen-header',
    styleUrl: 'datascreen-header.scss'
})
export class DatascreenHeader {
    @Element() el: HTMLElement;
    @Prop() history: RouterHistory;
    @Prop() dataScreenId: string;
    @Prop() checkMenuControl: boolean[] = [false, false, false];
    @Event() checkMenu: EventEmitter;
    @Event() popover: EventEmitter;

    previewCanvas() {
        this.history.push(`/canvas/${this.dataScreenId}/preview`)
    }

    handleMenuChoose(index: number) {
        this.checkMenu.emit(index);
    }

    talkIsCheapShowMeTheCode() {
        this.popover.emit({
            component: 'popover-code-modify',
            translucent: true,
            cssClass: "code-view-popover",
            componentProps: {
                dataScreenId: this.dataScreenId,
                dismissCallBack: (dataScreenId) => {
                    if(dataScreenId){
                        getDataScreen(dataScreenId).then((dataScreenData)=>{
                            setDataScreen(dataScreenId, {
                                componentsData: dataScreenData.componentsData,
                                canvasOption: dataScreenData.canvasOption
                            }, false)
                        });
                    }
                }
            }
        })
    }

    render() {
        return (
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start" class="header-buttons">
                        <ion-button title="图层" color={this.checkMenuControl[0] ? "primary" : "secondary"} size="large" fill="solid" class="header-btn" onClick={() => { this.handleMenuChoose(0) }}>
                            <ion-icon name="logo-buffer"></ion-icon>
                        </ion-button>

                        <ion-button title="组件" color={this.checkMenuControl[1] ? "primary" : "secondary"} size="large" fill="solid" class="header-btn" onClick={() => { this.handleMenuChoose(1) }}>
                            <ion-icon name="cube"></ion-icon>
                        </ion-button>

                        <ion-button title="设置面板" color={this.checkMenuControl[2] ? "primary" : "secondary"} size="large" fill="solid" class="header-btn" onClick={() => { this.handleMenuChoose(2) }}>
                            <ion-icon name="settings"></ion-icon>
                        </ion-button>

                    </ion-buttons>
                    <ion-buttons slot="end" class="header-buttons">
                        <ion-button title="数据" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.talkIsCheapShowMeTheCode() }}>
                            <ion-icon name="code"></ion-icon>
                        </ion-button>

                        <ion-button title="预览" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.previewCanvas() }}>
                            <ion-icon slot="icon-only" name="easel"></ion-icon>
                        </ion-button>

                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
        );
    }
}