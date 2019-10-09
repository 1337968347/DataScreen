import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

import { DraggableApiData } from "../../interfaces"

@Component({
    tag: 'setting-data-config',
    styleUrl: 'setting-data-config.scss'
})
export class SettingDataConfig {
    @Prop() comDataApiData: DraggableApiData;
    @Event() cyChange: EventEmitter;

    handleConfigChange(type: string, name: string, value: any) {
        this.cyChange.emit({
            type, name, value
        })
    }

    render() {
        return (
            <ion-gird>
                <ion-item>
                    <ion-label>数据来源</ion-label>
                    <ion-radio-group value={this.comDataApiData.dataSourceType || "static"} onIonChange={(e)=>{this.handleConfigChange("api_data","dataSourceType",e.detail.value+"")}}>
                        <ion-item lines="none">
                            <ion-label>静态数据</ion-label>
                            <ion-radio slot="start" value="static"></ion-radio>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-label>动态数据</ion-label>
                            <ion-radio slot="start" value="rest"></ion-radio>
                        </ion-item>
                    </ion-radio-group>
                </ion-item>

                <ion-item>
                    <ion-label position="floating">静态数据</ion-label>
                    <ion-textarea
                        rows={20} 
                        wrap="soft"
                        value={JSON.stringify(this.comDataApiData.staticData, null, 1)}>
                    </ion-textarea>
                </ion-item>


            </ion-gird>
        );
    }
}