import { Component, State, Method, h } from '@stencil/core';
import { ComType } from "../../interfaces";
import { getComponentDataById } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-setting',
    styleUrl: 'datascreen-setting.scss'
})
export class DatascreenSetting {
    @State() chooseComId: string ="";
    @State() comTypeData: ComType;

    @Method()
    async setCurrentComponentId(comId) {
        this.chooseComId = comId;
        this.comTypeData =getComponentDataById(comId)
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