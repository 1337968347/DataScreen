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
        let ComData = this.comOptionData.ComData || "";
        switch (ComData) {
            case "media-basic-img":
                return (
                    <media-basic-img comData={this.comOptionData}></media-basic-img>
                );
            case "chart-base-line":
                return (
                    <chart-basic-line comData={this.comOptionData} theme={this.theme}></chart-basic-line>
                )
            default:
                break;
        }

    }
}