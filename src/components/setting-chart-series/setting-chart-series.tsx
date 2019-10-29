import { Component, Prop, State, Event, EventEmitter, h } from '@stencil/core';

import { deepCopy } from "../../util/helper";

@Component({
    tag: 'setting-chart-series'
})
export class SettingChartSeries {
    @Prop() series: any[];
    @State() chooseSeriesIndex: string = "0";
    @State() chooseSeries: any;
    @Event() cyChange: EventEmitter;

    componentWillLoad() {
        this.handleSerieschange("0");
        console.log(this.series)
    }

    handleSeriesChange(argList: string[], value) {
        this.cyChange.emit({
            argList, value
        })
    }

    handleSerieschange(index) {
        this.chooseSeriesIndex = index;
        this.chooseSeries = { ...this.series[this.chooseSeriesIndex] };
    }

    addSeries() {

        this.handleSeriesChange(["config", "series"], [...this.series, {
            type: this.series[0].type
        }]);
    }

    deleteSeries() {
        // 最少得剩一个吧
        if (this.series[1]) {
            let deepSeries = deepCopy([], this.series)
            deepSeries.splice(parseInt(this.chooseSeriesIndex), 1)
            this.handleSeriesChange(["config", "series"], deepSeries);
            this.chooseSeriesIndex = "0";
            this.chooseSeries = deepSeries[0] ? { ...deepSeries[0] } : null;
        }
    }

    render() {
        return [
            <ion-row>
                <ion-col>
                    <ion-button expand="full" onClick={() => { this.addSeries() }}>添加</ion-button>
                    <ion-button expand="full" onClick={() => { this.deleteSeries() }}>删除</ion-button>
                </ion-col>
            </ion-row>,
            <ion-segment scrollable value={this.chooseSeriesIndex} onIonChange={(e) => { this.handleSerieschange(e.detail.value) }}>
                {this.series.map((series, index) =>
                    <ion-segment-button value={index + ""}>
                        <ion-label>{"系列" + (index + 1)}</ion-label>
                    </ion-segment-button>
                )}
            </ion-segment>,
            <ion-list>
                <ion-row>
                    <ion-col size="4">
                        系列名
                    </ion-col>
                    <ion-col size="8">
                        <ion-input debounce={1500} value={this.chooseSeries && this.chooseSeries.name || ""}
                            onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "name"], e.detail.value) }}>
                        </ion-input>
                    </ion-col>
                </ion-row>
                {this.chooseSeries && this.chooseSeries.type == "line" ?
                    [
                        <cy-item-extend header="折线">
                            <ion-row>
                                <ion-col size="4">
                                    颜色
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} value={this.chooseSeries && this.chooseSeries.lineStyle && this.chooseSeries.lineStyle.color || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "lineStyle", "color"], e.detail.value) }}></ion-input>
                                    <input style={{ "height": "100%" }} type="color" value={this.chooseSeries && this.chooseSeries.lineStyle && this.chooseSeries.lineStyle.color || ""}
                                        onChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "lineStyle", "color"], e.target['value']) }}></input>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    样式
                                </ion-col>
                                <ion-col size="8">
                                    <ion-select value={this.chooseSeries && this.chooseSeries.lineStyle && this.chooseSeries.lineStyle.type || ""} interface="popover"
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "lineStyle", "type"], e.detail.value) }}>
                                        <ion-select-option value="solid">solid</ion-select-option>
                                        <ion-select-option value="dashed">dashed</ion-select-option>
                                        <ion-select-option value="dotted">dotted</ion-select-option>
                                    </ion-select>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    粗细
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} type="number" min="0" value={this.chooseSeries && this.chooseSeries.lineStyle && this.chooseSeries.lineStyle.width || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "lineStyle", "width"], e.detail.value) }}></ion-input>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    近似曲线
                                </ion-col>
                                <ion-col size="8">
                                    <ion-toggle checked={this.chooseSeries && this.chooseSeries.smooth || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "smooth"], e.detail.checked); }}>
                                    </ion-toggle>
                                </ion-col>
                            </ion-row>

                        </cy-item-extend>,
                        <cy-item-extend header="圆点">
                            <ion-row>
                                <ion-col size="4">
                                    显示
                                </ion-col>
                                <ion-col size="8">
                                    <ion-toggle checked={this.chooseSeries && this.chooseSeries.itemStyle && this.chooseSeries.itemStyle.opacity == 1 || false}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "itemStyle", "opacity"], e.detail.checked ? 1 : 0); }}>
                                    </ion-toggle>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    颜色
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} value={this.chooseSeries && this.chooseSeries.itemStyle && this.chooseSeries.itemStyle.color || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "itemStyle", "color"], e.detail.value) }}></ion-input>
                                    <input style={{ "height": "100%" }} type="color" value={this.chooseSeries && this.chooseSeries.itemStyle && this.chooseSeries.itemStyle.color || ""}
                                        onChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "itemStyle", "color"], e.target['value']) }}></input>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    半径
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} type="number" min="0" value={this.chooseSeries && this.chooseSeries.itemStyle && this.chooseSeries.itemStyle.borderWidth || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "itemStyle", "borderWidth"], e.detail.value) }}></ion-input>
                                </ion-col>
                            </ion-row>
                        </cy-item-extend>,
                        <cy-item-extend header="区域">
                            <ion-row>
                                <ion-col size="4">
                                    显示
                                </ion-col>
                                <ion-col size="8">
                                    <ion-toggle checked={this.chooseSeries && this.chooseSeries.areaStyle && this.chooseSeries.areaStyle.opacity == 1 || false}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "areaStyle", "opacity"], e.detail.checked ? 1 : 0); }}>
                                    </ion-toggle>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    颜色
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} value={this.chooseSeries && this.chooseSeries.areaStyle && this.chooseSeries.areaStyle.color || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "areaStyle", "color"], e.detail.value) }}></ion-input>
                                    <input style={{ "height": "100%" }} type="color" value={this.chooseSeries && this.chooseSeries.areaStyle && this.chooseSeries.areaStyle.color || ""}
                                        onChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "areaStyle", "color"], e.target['value']) }}></input>
                                </ion-col>
                            </ion-row>
                        </cy-item-extend>,
                        <cy-item-extend header="标签">
                            <ion-row>
                                <ion-col size="4">
                                    显示
                                </ion-col>
                                <ion-col size="8">
                                    <ion-toggle checked={this.chooseSeries && this.chooseSeries.label && this.chooseSeries.label.show || false}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "label", "show"], e.detail.checked); }}>
                                    </ion-toggle>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    字号
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} type="number" min="0" value={this.chooseSeries && this.chooseSeries.label && this.chooseSeries.label.fontSize || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "label", "fontSize"], e.detail.value) }}></ion-input>
                                </ion-col>
                            </ion-row>
                            <ion-row>
                                <ion-col size="4">
                                    颜色
                                </ion-col>
                                <ion-col size="8">
                                    <ion-input debounce={1500} value={this.chooseSeries && this.chooseSeries.label && this.chooseSeries.label.color || ""}
                                        onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "label", "color"], e.detail.value) }}></ion-input>
                                    <input style={{ "height": "100%" }} type="color" value={this.chooseSeries && this.chooseSeries.label && this.chooseSeries.label.color || ""}
                                        onChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "label", "color"], e.target['value']) }}></input>
                                </ion-col>
                            </ion-row>
                        </cy-item-extend>
                    ] : null
                }

                {this.chooseSeries && this.chooseSeries.type == "bar" ?
                    <ion-row>
                        <ion-col size="4">
                            颜色
                        </ion-col>
                        <ion-col size="8">
                            <ion-input debounce={1500} value={this.chooseSeries && this.chooseSeries.itemStyle && this.chooseSeries.itemStyle.color || ""}
                                onIonChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "itemStyle", "color"], e.detail.value) }}></ion-input>
                            <input style={{ "height": "100%" }} type="color" value={this.chooseSeries && this.chooseSeries.itemStyle && this.chooseSeries.itemStyle.color || ""}
                                onChange={(e) => { this.handleSeriesChange(["config", "series", this.chooseSeriesIndex, "itemStyle", "color"], e.target['value']) }}></input>
                        </ion-col>
                    </ion-row> : null
                }

            </ion-list>
        ];
    }
}