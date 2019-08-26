import { Component, Prop, Event, EventEmitter, Element,h } from '@stencil/core';
import { ComDraggAble } from "../../types/comDraggAble"
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

@Component({
    tag: 'cy-draggable-component',
    styleUrl: 'cy-draggable-component.css'
})
export class CyDraggableComponent {
    @Prop() comDraggableoption: ComDraggAble;
    @Prop() canModify: boolean = false;
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @Element() el: HTMLElement;
    chartDemo: any;

    componentDidLoad() {
        this.initEchart()
    }

    // 初始化echarts
    initEchart() {
        this.chartDemo = echarts.init(this.el.querySelector('#chartDemo'));
        this.chartDemo.setOption(this.comDraggableoption.echartData);
        this.chartDemo.resize({ width: this.comDraggableoption.width, height:  this.comDraggableoption.height });
    }


    scaleBarLayerFunc(e) {
        this.chartDemo.resize({ width: e.detail.clientWidth, height: e.detail.clientHeight });
    }

    render() {
        return (
            <cy-draggable
                boxZindex={1}
                canModify={this.canModify} onCyScale={(e) => { this.scaleBarLayerFunc(e) }}
                style={{ "position": "absolute", 
                "top": this.comDraggableoption.top, "left": this.comDraggableoption.left,
                "width": this.comDraggableoption.width, "height":this.comDraggableoption.height,
                "z-index": this.comDraggableoption.zIndex+""
                 }}>
                <div id="chartDemo"></div>
            </cy-draggable>
        );
    }
}