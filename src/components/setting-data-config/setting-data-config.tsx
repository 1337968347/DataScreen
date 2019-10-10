import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

import { refreshComData } from "../../adapter/adapterdata-controller"
import { DraggableApiData } from "../../interfaces"

@Component({
    tag: 'setting-data-config',
    styleUrl: 'setting-data-config.scss'
})
export class SettingDataConfig {
    @Prop() comId: string;
    @Prop() comDataApiData: DraggableApiData;
    @State() dataType: "rest" | "static";
    // 是否静态数据有误
    @State() isStaticDataOJBk: boolean = true;
    @Event() cyChange: EventEmitter;
    @Event() toast: EventEmitter;

    componentWillLoad() {
        this.dataType = this.comDataApiData.dataSourceType;
    }

    handleConfigChange(type: string, name: string, value: any) {
        this.cyChange.emit({
            type, name, value
        })
    }

    refreshComData(comId: string){
        refreshComData(comId)
    }

    checkStaticDataOJBK(objStr: string) {
        try {
            JSON.parse(objStr)
            this.isStaticDataOJBk = true;
            return true;
        } catch (error) {
            this.isStaticDataOJBk = false;
            this.toast.emit("数据格式错误!");
            return false;
        }
    }

    render() {
        return (
            <ion-gird>
                <ion-item>
                    <ion-label position="floating">数据来源</ion-label>
                    <ion-radio-group value={this.comDataApiData.dataSourceType || "static"} onIonChange={(e) => { this.dataType = e.detail.value; this.handleConfigChange("api_data", "dataSourceType", e.detail.value + "") }}>
                        <ion-item lines="none">
                            <ion-label>静态</ion-label>
                            <ion-radio slot="start" value="static"></ion-radio>
                        </ion-item>

                        <ion-item lines="none">
                            <ion-label>动态</ion-label>
                            <ion-radio slot="start" value="rest"></ion-radio>
                        </ion-item>
                    </ion-radio-group>
                </ion-item>
                {this.dataType == "static" ?
                    <ion-item style={{ "margin-top": "20px" }}>
                        <ion-label position="floating">静态数据</ion-label>
                        <ion-textarea
                            debounce={600}
                            rows={20}
                            wrap="soft"
                            onIonChange={(e) => { this.checkStaticDataOJBK(e.detail.value); this.handleConfigChange("api_data", "staticData", JSON.parse(e.detail.value + "")) }}
                            value={JSON.stringify(this.comDataApiData.staticData, null, 1)}>
                        </ion-textarea>
                        {!!!this.isStaticDataOJBk ?
                            <ion-note slot="end" color="danger">数据错误</ion-note>
                            : null
                        }

                    </ion-item> :
                    null
                }

                {this.dataType == "rest" ?
                    [<ion-item>
                        <ion-label position="floating">接口方法</ion-label>
                        <ion-radio-group value={this.comDataApiData.restType} onIonChange={(e) => { this.handleConfigChange("api_data", "restType", e.detail.value + "") }}>
                            <ion-item lines="none">
                                <ion-label>get</ion-label>
                                <ion-radio slot="start" value="get"></ion-radio>
                            </ion-item>

                            <ion-item lines="none">
                                <ion-label>post</ion-label>
                                <ion-radio slot="start" value="post"></ion-radio>
                            </ion-item>
                        </ion-radio-group>
                    </ion-item>,
                    <ion-row>
                        <ion-col size="4">接口地址</ion-col>
                        <ion-col size="8">
                            <ion-input
                                debounce={1000}
                                onIonChange={(e) => { this.handleConfigChange("api_data", "restUrl", e.detail.value + "") }}
                                value={this.comDataApiData.restUrl || ""}>
                            </ion-input>
                        </ion-col>
                    </ion-row>,
                    <ion-row>
                        <ion-col size="4">刷新间隔(s)</ion-col>
                        <ion-col size="8">
                            <ion-input
                                debounce={1000}
                                placeholder="0为只刷新一次"
                                type="number"
                                onIonChange={(e) => { this.handleConfigChange("api_data", "restRefreshTime", parseInt(e.detail.value) * 1000) }}
                                value={this.comDataApiData.restRefreshTime + "" || "0"}>
                            </ion-input>
                        </ion-col>
                    </ion-row>,
                    <ion-row>
                        <ion-col>
                            <ion-button onClick={()=>{this.refreshComData(this.comId)}} fill="outline" expand="block">刷新数据</ion-button>
                        </ion-col>
                    </ion-row>
                    ] : null
                }

            </ion-gird>
        );
    }
}