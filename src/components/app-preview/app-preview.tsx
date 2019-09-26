import { Component, Prop, Element, h } from '@stencil/core';
import { MatchResults } from "@stencil/router";

import { initDataScreen, getDataScreen, initCanvasComponent } from "../../util/datascreen-controller";

@Component({
    tag: 'app-preview',
    styleUrl: 'app-preview.scss'
})
export class AppPreview {
    @Prop() match: MatchResults;
    @Element() el: HTMLElement;

    componentWillLoad() {
        this.initDataScreenOption();
    }

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"))
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
            <datascreen-canvas-content>
                <datascreen-canvas canModify={false}>
                </datascreen-canvas>
            </datascreen-canvas-content>
        );
    }
}