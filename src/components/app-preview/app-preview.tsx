import { Component, Prop, State,Listen, Element, h, Host } from '@stencil/core';
import { MatchResults } from "@stencil/router";

import { initDataScreen, getDataScreen, initCanvasComponent } from "../../util/datascreen-controller";

@Component({
    tag: 'app-preview',
    styleUrl: 'app-preview.scss'
})
export class AppPreview {
    @Prop() match: MatchResults;
    @State() transformScale: string;
    @Element() el: HTMLElement;

    @Listen('resize', { target: 'window' })
    async resizeSCale() {
       this.initCanvasScale()
    }

    componentWillLoad() {
        this.initDataScreenOption();
    }

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"));
        this.initCanvasScale();
    }

    initCanvasScale() {
        let canvasElement = this.el.querySelector("datascreen-canvas");
        this.transformScale = ` ${this.el.clientWidth / parseInt(canvasElement.style.width)}, ${this.el.clientHeight / parseInt(canvasElement.style.height)}`
    
    }

    async initDataScreenOption() {
        let dataScreenId = this.match.params.dataScreenId;
        let dataScreenData = await getDataScreen(dataScreenId);
        initDataScreen(dataScreenId, {
            componentsData: dataScreenData.componentsData,
            canvasOption: dataScreenData.canvasOption
        }, false)
    }
    render() {
        return (
            <Host class="ion-page">
                <datascreen-canvas style={{ "transform": `scale(${this.transformScale})` }} canModify={false}>
                </datascreen-canvas>
            </Host>
        );
    }
}