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
        console.log(this.comTypeData)
        this.chooseComId = comId;
    }

    render() {
        if (this.chooseComId == "") {
            return (
                <setting-canvas-option></setting-canvas-option>
            )
        } else {
            return [
                <ion-header>
                    <ion-segment color="primary" value="friends">
                        <ion-segment-button value="friends">
                            <ion-icon name="options"></ion-icon>
                        </ion-segment-button>
                        <ion-segment-button value="enemies">
                            <ion-icon name="link"></ion-icon>
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