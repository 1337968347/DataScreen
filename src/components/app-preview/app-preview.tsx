import { Component, h, State } from '@stencil/core';

import { ComType, CanvasConfig } from "../../interfaces";
import { get } from "../../providers/storage";
import { initDataScreenController } from "../../util/datascreen-controller";

@Component({
    tag: 'app-preview',
    styleUrl: 'app-preview.scss'
})
export class AppPreview {
    @State() canvasOption: CanvasConfig;
    @State() comOptionList: ComType[] = [];

    componentWillLoad() {
        this.initCanvasOption();
    }

    async initCanvasOption() {
        let componentDatas = await get<ComType[]>("comList");
        let canvasConfig = await get<CanvasConfig>("canvasConfig");
        initDataScreenController({
            componentDatas: componentDatas,
            canvasConfig: canvasConfig
        })
    }
    render() {
        return (
            <datascreen-canvas canModify={false}></datascreen-canvas>
        );
    }
}