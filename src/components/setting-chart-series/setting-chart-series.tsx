import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';


@Component({
    tag: 'setting-chart-series'
})
export class SettingChartSeries {
    @Prop() series: any[];
    @Event() cyChange: EventEmitter;

    render() {
        return (
            <ion-segment scrollable>
                {this.series.map((series, index) =>
                    <ion-segment-button value={series}>
                        <ion-label>{"系列" + (index + 1)}</ion-label>
                    </ion-segment-button>
                )}
            </ion-segment>
        );
    }
}