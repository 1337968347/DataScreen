import { Component, Prop,State, Event, EventEmitter, Element, Host, h } from '@stencil/core';
import { RouterHistory } from "@stencil/router"
import { menuController } from "@ionic/core"
import uuid from "uuid";

import { DataScreen } from "../../interfaces";
import { DataScreenData } from "../../providers/datascreen-data"
import { initCanvasComponent, setDataScreen } from "../../util/datascreen-controller";
import { dataScreenTemplateList } from "../../util/datascreen/datascreen-template";
import { deepCopy } from "../../util/helper"

@Component({
    tag: 'app-create',
    styleUrl: 'app-create.scss'
})
export class AppCreate {
    @Prop() history: RouterHistory;
    @Element() el: HTMLElement;
    @State() chooseTemplate: DataScreen;
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;

    componentWillLoad() {
        this.setChooseTemplate(dataScreenTemplateList[0]);
    }

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"));
    }

    handleChooseTemplate(template: DataScreen) {
        this.setChooseTemplate(template);
        menuController.close();
    }

    setChooseTemplate(template: DataScreen) {
        this.chooseTemplate = deepCopy({}, template)
        this.chooseTemplate.id = uuid.v1();
        setDataScreen(this.chooseTemplate.id, {
            componentsData: this.chooseTemplate.componentsData,
            canvasOption: this.chooseTemplate.canvasOption
        }, false)
    }

    async jumpToEdit() {
        this.alert.emit({
            header: "新建可视化",
            inputs: [{
                type: "text",
                label: "name",
                name: "name"
            }],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    cssClass: 'secondary',
                    handler: () => {
                    }
                }, {
                    text: '确定',
                    handler: (e) => {
                        if (e.name == "") {
                            this.toast.emit("请输入可视化名称!")
                            return false;
                        } else {
                            this.chooseTemplate.name = e.name;
                            DataScreenData.addDataScreen(this.chooseTemplate).then(() => {
                                this.history.replace(`canvas/${this.chooseTemplate.id}/edit`)
                            })
                        }
                    }
                }
            ]
        })

    }

    render() {
        return (
            <Host class="ion-page">
                <ion-split-pane content-id="menu-content">
                    <ion-menu content-id="menu-content">
                        <ion-header>
                            <ion-toolbar>
                                <ion-title>模板</ion-title>
                            </ion-toolbar>
                        </ion-header>
                        <ion-content forceOverscroll={false}>
                            {dataScreenTemplateList.map((dataScreentemplate) =>
                                <ion-item button onClick={() => { this.handleChooseTemplate(dataScreentemplate) }}>
                                    {dataScreentemplate.scaleImg ?
                                        <ion-thumbnail slot="start">
                                            <img src={dataScreentemplate.scaleImg} />
                                        </ion-thumbnail> :
                                        <div slot="start" class="blank-img">
                                        </div>
                                    }
                                    <ion-label>
                                        <h2>{dataScreentemplate.name}</h2>
                                        <p>{`${dataScreentemplate.canvasOption.w}px X ${dataScreentemplate.canvasOption.h}px`}</p>
                                    </ion-label>
                                </ion-item>
                            )}
                        </ion-content>
                    </ion-menu>
                    <div class="ion-page" id="menu-content">
                        <ion-header>
                            <ion-toolbar>
                                <ion-buttons slot="start">
                                    <ion-menu-button></ion-menu-button>
                                </ion-buttons>
                                <ion-title>
                                    {this.chooseTemplate && this.chooseTemplate.name || ""}
                                </ion-title>
                            </ion-toolbar>
                        </ion-header>
                        <ion-content class="right-content">
                                <datascreen-canvas-content>
                                    <div class="fit-box">
                                        <datascreen-canvas  canModify={false}>
                                        </datascreen-canvas>
                                        <div class="top-oper-box">
                                            <ion-button onClick={() => { this.jumpToEdit() }} color="primary">创 建</ion-button>
                                        </div>
                                    </div>
                                </datascreen-canvas-content>
                        </ion-content>
                    </div>
                </ion-split-pane>
            </Host>
        );
    }
}