import { Component, State, Event, EventEmitter, Element, h } from '@stencil/core';
import { menuController } from "@ionic/core"
import uuid from "uuid";

import { DataScreen, CanvasConfig } from "../../interfaces";
import { DataScreenData } from "../../providers/datascreen-data"
import { initCanvasComponent, setDataScreen, getCanvasConfig } from "../../util/datascreen-controller";
import { dataScreenTemplateList } from "../../util/datascreen/datascreen-template";
import { deepCopy, reduceFrequency } from "../../util/helper"

@Component({
    tag: 'app-create',
    styleUrl: 'app-create.scss'
})
export class AppCreate {
    @Element() el: HTMLElement;
    @State() scaleRange: number = 35;
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    chooseTemplate: DataScreen;
    minRange: number = 10;
    maxRange: number = 200;

    componentWillLoad() {
        this.handleChooseTemplate(dataScreenTemplateList[0]);
    }

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"));
        this.initResize()
    }

    initResize() {
        let canvasOption1 = getCanvasConfig();
        this.resizeSCale(canvasOption1);
        window.onresize = () => {
            reduceFrequency("onresizeCanvas", () => {
                let canvasOption1 = getCanvasConfig();
                this.resizeSCale(canvasOption1)
            })
        }
    }

    resizeSCale(canvasOption: CanvasConfig) {
        if (this.el.querySelector(".canvas-container")) {
            let canShowBoxWidth = this.el.querySelector(".canvas-container").clientWidth;
            let canShowBoxHeight = this.el.querySelector(".canvas-container").clientHeight;
            let scale = this.scaleRange;
            if ((parseFloat(canvasOption.w) / parseFloat(canvasOption.h)) > (canShowBoxWidth / canShowBoxHeight)) {
                scale = Math.floor((canShowBoxWidth / parseFloat(canvasOption.w)) * 100)
            } else {
                scale = Math.floor((canShowBoxHeight / parseFloat(canvasOption.h)) * 100)
            }
            this.scaleRange = scale > this.minRange ? scale : this.minRange;
            this.scaleRange = scale > this.maxRange ? this.maxRange : scale;
        }
    }

    handleChooseTemplate(template: DataScreen) {
        this.chooseTemplate = deepCopy({}, template)
        this.chooseTemplate.id = uuid.v1();
        setDataScreen(this.chooseTemplate.id, {
            componentsData: this.chooseTemplate.componentsData,
            canvasOption: this.chooseTemplate.canvasOption
        }, false)
        let canvasOption1 = getCanvasConfig();
        menuController.close();
        this.resizeSCale(canvasOption1)
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
                            DataScreenData.addDataScreen(this.chooseTemplate).then(()=>{
                                this.el.closest("ion-nav").push("app-home", { dataScreenId: this.chooseTemplate.id });
                            })
                        }

                    }
                }
            ]
        })

    }

    render() {
        return [
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
                                {this.chooseTemplate.name || ""}
                            </ion-title>
                        </ion-toolbar>
                    </ion-header>
                    <ion-content>
                        <div class="canvas-content">
                            <div class="canvas-container">
                                <div class="fit-box">
                                    <datascreen-canvas scale={this.scaleRange} canModify={false}>
                                    </datascreen-canvas>
                                    <div class="top-oper-box">
                                        <ion-button onClick={() => { this.jumpToEdit() }} color="primary">创 建</ion-button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ion-content>
                </div>
            </ion-split-pane>
        ];
    }
}