import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';

// import * as echarts from 'echarts/lib/echarts'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'

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
        return (
            <img style={{
                width: "100%",
                height: "100%"
            }} src={this.comOptionData.data.icon} alt="" />
        );
    }
}