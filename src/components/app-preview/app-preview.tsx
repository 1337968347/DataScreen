import { Component,h, State } from '@stencil/core';

import { ComType, CanvasConfig } from "../../interfaces";

@Component({
    tag: 'app-preview',
    styleUrl: 'app-preview.scss'
})
export class AppPreview {
    @State() canvasOption: CanvasConfig;
    @State() comOptionList: ComType[] = [];

    componentWillLoad() {
    }

    render() {
        return (
            <ion-content>
                <datascreen-canvas canModify={false}></datascreen-canvas>
            </ion-content>
        );
    }
}