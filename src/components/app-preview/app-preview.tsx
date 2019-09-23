import { Component, Prop,Element, h } from '@stencil/core';

import { initDataScreen, getDataScreen,initCanvasComponent } from "../../util/datascreen-controller";

@Component({
    tag: 'app-preview',
    styleUrl: 'app-preview.scss'
})
export class AppPreview {
    @Element() el: HTMLElement;
    @Prop() dataScreenId: string;

    componentWillLoad() {
        this.initDataScreenOption();
    }

    componentDidLoad() {
        initCanvasComponent(this.el.querySelector("datascreen-canvas"))
    }

    async initDataScreenOption() {
        let dataScreenData = await getDataScreen(this.dataScreenId);
        initDataScreen(this.dataScreenId, {
            componentsData: dataScreenData.componentsData,
            canvasOption: dataScreenData.canvasOption
        }, false)
    }
    render() {
        return (
            <datascreen-canvas canModify={false}></datascreen-canvas>
        );
    }
}