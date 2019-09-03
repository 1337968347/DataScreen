import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';

// import * as echarts from 'echarts/lib/echarts'
// import 'echarts/lib/chart/line'
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'

import { ComType } from "../../interfaces"

@Component({
    tag: 'cy-draggable-adapter',
    styleUrl: 'cy-draggable-adapter.css'
})
export class CyDraggableComponent {
    @Prop() comOptionData: ComType;
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @Element() el: HTMLElement;
    chartDemo: any;

    componentDidLoad() {
    }

    // 初始化echarts
    initEchart() {
        // this.chartDemo = echarts.init(this.el.querySelector('#chartDemo'));
        // this.chartDemo.setOption(this.dragComoption.echartData);
        // this.chartDemo.resize({ width: this.dragComoption.width, height:  this.dragComoption.height });
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