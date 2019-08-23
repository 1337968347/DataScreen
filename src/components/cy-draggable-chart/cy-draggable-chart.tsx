import { Component, Prop, Event, EventEmitter, Element,h } from '@stencil/core';
import { ChartDraggAble } from "../../type/chartDraggAble"
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/line'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

@Component({
    tag: 'cy-draggable-chart',
    styleUrl: 'cy-draggable-chart.css'
})
export class CyDraggableChart {
    @Prop() chartDraggableoption: ChartDraggAble;
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
        this.chartDemo.setOption(this.chartDraggableoption.echartData);
        this.chartDemo.resize({ width: this.chartDraggableoption.width, height:  this.chartDraggableoption.height });
    }

    // 关闭弹窗
    closeLayerFunc(e) {
        e.stopPropagation();
        this.alert.emit({
            header: '提示!',
            message: '确定要删除这个图层吗!!!',
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: () => {
                        this.toast.emit("你点击了取消");
                    }
                }, {
                    text: '确定',
                    handler: () => {
                        this.toast.emit("你点击了确定");
                    }
                }
            ]
        })
    }

    scaleBarLayerFunc(e) {
        this.chartDemo.resize({ width: e.detail.clientWidth, height: e.detail.clientHeight });
    }

    render() {
        return (
            <cy-draggable
                boxZindex={1}
                canModify={this.canModify}
                onCyClose={(e) => { this.closeLayerFunc(e) }} onCyScale={(e) => { this.scaleBarLayerFunc(e) }}
                style={{ "position": "absolute", 
                "top": this.chartDraggableoption.top, "left": this.chartDraggableoption.left,
                "width": this.chartDraggableoption.width, "height":this.chartDraggableoption.height,
                "z-index": this.chartDraggableoption.zIndex+""
                 }}>
                <div id="chartDemo"></div>
            </cy-draggable>
        );
    }
}