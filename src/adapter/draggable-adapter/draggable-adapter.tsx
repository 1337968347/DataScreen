import { Component, Prop, State,Watch, Event, EventEmitter, h } from '@stencil/core';

import { registerDataReceiver } from "../adapterdata-controller";
import { ComData, themeType } from "../../interfaces"

@Component({
    tag: 'draggable-adapter',
    styleUrl: 'draggable-adapter.css'
})
export class DraggableComponent {
    @Prop() comOptionData: ComData;
    @Prop() canModify: boolean= false;
    @Prop() theme: themeType = "default";
    @State() apiData: any;
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;

    @Watch('comOptionData')
    watchHandler(newValue:ComData, oldValue:ComData) {
        // 为了简单判断两个对象的值是否相同 
        if( JSON.stringify(newValue.data.api_data ) !== JSON.stringify(oldValue.data.api_data) ){
            this.resignDataReceiver();
        }
    }

    componentWillLoad() {
        this.resignDataReceiver();
    }

    resignDataReceiver(){
        this.comOptionData.data.api_data&&registerDataReceiver(this.comOptionData.id, this.comOptionData.data.api_data,
            (apiData) => {
                this.apiData = apiData;
            })
    }

    render() {
        let comType = this.comOptionData.comName.split("-")[0] || "";
        switch (comType) {
            case "media":
                return (
                    <media-adapter canModify={this.canModify} comData={this.comOptionData}></media-adapter>
                );
            case "chart":
                return (
                    <chart-adapter comData={this.comOptionData} theme={this.theme}></chart-adapter>
                )
            case "text":
                return (
                    <text-adapter comData={this.comOptionData}></text-adapter>
                )
            case "table":
                return (
                    <table-adapter comDataConfig={this.comOptionData.data.config} comDataApiData={this.apiData}></table-adapter>
                )
            default:
                break;
        }

    }
}