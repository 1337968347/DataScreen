import { Component, h } from '@stencil/core';
import { canvasTemplateList } from "../../util/canvas/canvas-templatedata";

@Component({
    tag: 'app-create',
    styleUrl: 'app-create.scss'
})
export class AppCreate {
    componentWillLoad() {
        console.log(canvasTemplateList)
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
                            <ion-item button>
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
                                
                        </div>
                </div>
            </ion-content>
        ];
    }
}