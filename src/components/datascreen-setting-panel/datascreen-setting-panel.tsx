import { Component, State, Method, h } from '@stencil/core';
import { ComType } from "../../interfaces";
import { getComponentDataById } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-setting-panel',
    styleUrl: 'datascreen-setting-panel.scss'
})
export class DatascreenSettingPanel {
    @State() chooseComId: string = "";
    @State() comTypeData: ComType;

    @Method()
    async setCurrentComponentId(comId) {
        this.comTypeData = getComponentDataById(comId)
        this.chooseComId = comId;
    }

    render() {
        if (this.chooseComId == "") {
            return (
                <setting-canvas-option canvasOption={this.comTypeData}></setting-canvas-option>
            )
        } else {
            return [
                <ion-header>
                    <ion-segment value="friends">
                        <ion-segment-button value="friends">
                            <ion-label>Friends</ion-label>
                        </ion-segment-button>
                        <ion-segment-button value="enemies">
                            <ion-label>Enemies</ion-label>
                        </ion-segment-button>
                    </ion-segment>
                </ion-header>,
                <ion-content>
                    this is the setting Content of the box
                </ion-content>
            ];
        }
    }

}