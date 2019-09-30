import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';

import { ComData, themeType } from "../../interfaces"

@Component({
    tag: 'draggable-adapter',
    styleUrl: 'draggable-adapter.css'
})
export class DraggableComponent {
    @Prop() comOptionData: ComData;
    @Prop() theme: themeType = "default";
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @Element() el: HTMLElement;
    chartDemo: any;

    componentDidLoad() {
    }

    render() {
        let comType = this.comOptionData.comName.split("-")[0] || "";
        switch (comType) {
            case "media":
                return (
                    <media-adapter comData={this.comOptionData}></media-adapter>
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
                    <table-adapter comData={this.comOptionData}></table-adapter>
                )
            default:
                break;
        }

    }
}