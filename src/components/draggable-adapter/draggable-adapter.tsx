import { Component, Prop,Event, EventEmitter, Element, h } from '@stencil/core';
import { ComType } from "../../interfaces"

@Component({
    tag: 'draggable-adapter',
    styleUrl: 'draggable-adapter.css'
})
export class DraggableComponent {
    @Prop() comOptionData: ComType;
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @Element() el: HTMLElement;
    chartDemo: any;

    componentDidLoad() {
    }

    render() {
        let comType = this.comOptionData.comType || "";
        switch (comType) {
            case "media-basic-img":
                return (
                    <media-basic-img comData={this.comOptionData}></media-basic-img>
                );
            case "chart-base-line":
                return (
                    <chart-basic-line comData={this.comOptionData}></chart-basic-line>
                )
            default:
                break;
        }

    }
}