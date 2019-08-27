import { Component, h } from '@stencil/core';


@Component({
    tag: 'datascreen-setting',
    styleUrl: 'datascreen-setting.scss'
})
export class DatascreenSetting {

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