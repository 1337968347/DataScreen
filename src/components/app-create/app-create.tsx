import { Component, Element, h } from '@stencil/core';

import { ComType, CanvasConfig } from "../../interfaces"
import { initCanvasComponent, saveCanvasConfig, setComponentDatas, initDataScreenController } from "../../util/datascreen-controller";
import { canvasTemplateList } from "../../util/canvas/canvas-templatedata";
import { deepCopy } from "../../util/helper"

@Component({
    tag: 'app-create',
    styleUrl: 'app-create.scss'
})
export class AppCreate {
    @Element() el: HTMLElement;

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"));
    }

    handleChooseTemplate(template: CanvasConfig) {
        let chooseTemplate = deepCopy({}, template)
        initDataScreenController({
            componentDatas: []
        })
        console.log(chooseTemplate)
        let comsData: ComType[] = chooseTemplate.componentsData;
        setComponentDatas(comsData);
        delete chooseTemplate.componentsData;
        saveCanvasConfig(chooseTemplate)
    }

    jumpToEdit(){
        this.el.closest("ion-nav").push("app-home");
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start">
                        <ion-back-button></ion-back-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                <div class="canvas-box">
                    <div class="canvas-template">

                        <ion-item button>
                            <div slot="start" class="blank-img">

                            </div>
                            <ion-label>
                                <h2>空白</h2>
                            </ion-label>
                        </ion-item>

                        {canvasTemplateList.map((canvasTemplate) =>
                            <ion-item button onClick={() => { this.handleChooseTemplate(canvasTemplate) }}>
                                {canvasTemplate.scaleImg ?
                                    <ion-thumbnail slot="start">
                                        <img src={canvasTemplate.scaleImg} />
                                    </ion-thumbnail> : null
                                }
                                <ion-label>
                                    <h2>{canvasTemplate.name}</h2>
                                    <p>{`${canvasTemplate.w}px X ${canvasTemplate.h}px`}</p>
                                </ion-label>
                            </ion-item>
                        )}
                    </div>

                    <div class="canvas-preview">
                        <h2>选择模板</h2>
                        <datascreen-canvas onClick={()=>{this.jumpToEdit()}} scale={35} canModify={false}>
                        </datascreen-canvas>
                    </div>
                </div>
            </ion-content>
        ];
    }
}