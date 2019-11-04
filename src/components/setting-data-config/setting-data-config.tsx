import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

import { refreshComData } from "../../adapter/adapterdata-controller";
import { DraggableApiData } from "../../interfaces";

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

    handlefieldMapChange(index: number, name: string, value: string) {
        this.comDataApiData.fieldMap[index][name] = value;
        this.handleConfigChange("api_data", "fieldMap", this.comDataApiData.fieldMap)
    }

    refreshComData(comId: string) {
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
        const TableColumns = [
            {
                title: '字段',
                dataIndex: 'name'
            },
            {
                title: '映射',
                dataIndex: 'mapping',
                render: (row, rowIndex: number) => (
                    <ion-input placeholder="可自定义" debounce={1500} style={{ "width": "108px", "height": "30px", "--background": "var(--ion-background-shade)" }}
                        onIonChange={(e) => { this.handlefieldMapChange(rowIndex, "mapping", e.detail.value) }}
                        value={row.mapping || ""}></ion-input>
                ),
            }
        ]
        return (
            <ion-gird>
                <ion-row style={{ "margin-bottom": "20px" }}>
                    <ion-col size="4">
                        数据来源
                    </ion-col>
                    <ion-col size="8">
                        <ion-select value={this.comDataApiData.dataSourceType || "static"} interface="popover" onIonChange={(e) => { this.dataType = e.detail.value; this.handleConfigChange("api_data", "dataSourceType", e.detail.value + "") }}>
                            <ion-select-option value="static">静态</ion-select-option>
                            <ion-select-option value="rest">动态</ion-select-option>
                        </ion-select>
                    </ion-col>
                </ion-row>
                {this.comDataApiData.fieldMap ?
                    <ion-row>
                        <ion-col size="12">
                            数据映射
                        </ion-col>
                        <ion-col size="12">
                            <cy-table Columns={TableColumns} dataSource={this.comDataApiData.fieldMap || []}></cy-table>
                        </ion-col>
                    </ion-row> : null
                }

                {this.dataType == "static" ?
                    <ion-gird>
                        <ion-row>
                            <ion-col>静态数据</ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-textarea
                                    debounce={600}
                                    rows={20}
                                    wrap="soft"
                                    onIonChange={(e) => { this.checkStaticDataOJBK(e.detail.value) && this.handleConfigChange("api_data", "staticData", JSON.parse(e.detail.value + "")) }}
                                    value={JSON.stringify(this.comDataApiData.staticData, null, 1)}>
                                </ion-textarea>
                                {!!!this.isStaticDataOJBk ?
                                    <ion-note slot="end" color="danger">数据错误</ion-note>
                                    : null
                                }
                            </ion-col>
                        </ion-row>
                    </ion-gird> :
                    null
                }

                {this.dataType == "rest" ?
                    <ion-gird>
                        <cy-item-extend style={{ "margin-top": "15px" }} header="接口设置">
                            <ion-row>
                                <ion-col size="4">
                                    拼接环境地址
                                </ion-col>
                                <ion-col size="8">
                                    <ion-toggle checked={this.comDataApiData.isSplicing || false}
                                        onIonChange={(e) => { this.handleConfigChange("api_data", "isSplicing", e.detail.checked); }}>
                                    </ion-toggle>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">请求类型</ion-col>
                                <ion-col size="8">
                                    <ion-select value={this.comDataApiData.restType} interface="popover" onIonChange={(e) => { this.handleConfigChange("api_data", "restType", e.detail.value + "") }}>
                                        <ion-select-option value="get">get</ion-select-option>
                                        <ion-select-option value="post">post</ion-select-option>
                                    </ion-select>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">接口地址</ion-col>
                                <ion-col size="8">
                                    <ion-input
                                        debounce={1000}
                                        onIonChange={(e) => { this.handleConfigChange("api_data", "restUrl", e.detail.value + "") }}
                                        value={this.comDataApiData.restUrl || ""}>
                                    </ion-input>
                                </ion-col>
                            </ion-row>
                        </cy-item-extend>
                        <ion-row>
                            <ion-col size="4">刷新间隔(s)</ion-col>
                            <ion-col size="8">
                                <ion-input
                                    debounce={1000}
                                    placeholder="0为只刷新一次"
                                    min="0"
                                    type="number"
                                    onIonChange={(e) => { this.handleConfigChange("api_data", "restRefreshTime", e.detail.value || "0") }}
                                    value={this.comDataApiData.restRefreshTime + "" || "0"}>
                                </ion-input>
                            </ion-col>
                        </ion-row>
                        <ion-row>
                            <ion-col>
                                <ion-button onClick={() => { this.refreshComData(this.comId) }} fill="outline" expand="block">刷新数据</ion-button>
                            </ion-col>
                        </ion-row>
                    </ion-gird>
                    : null
                }

            </ion-gird>
        );
    }
}