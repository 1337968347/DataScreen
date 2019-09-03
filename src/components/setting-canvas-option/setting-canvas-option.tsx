import { Component, Prop, h } from '@stencil/core';
import { ComType } from "../../interfaces";

@Component({
    tag: 'setting-canvas-option',
    styleUrl: 'setting-canvas-option.css'
})
export class SettingCanvasOption {
    @Prop() canvasOption: ComType;

    componentWillLoad() {
        console.log(this.canvasOption)
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="secondary">
                    <div class="header-box">
                        页面设置
                    </div>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                this is the setting Content of the box
            </ion-content>
        ];
    }
}