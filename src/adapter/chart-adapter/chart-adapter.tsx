import { Component, Prop, Watch, Element, h } from '@stencil/core';
import echarts from 'echarts'

import { DraggableView, DraggableApiData, DraggableConfig } from "../../interfaces";

@Component({
    tag: 'chart-adapter'
})
export class ChartAdapter {
    @Element() el: HTMLElement;
    chartObj: any;

    @Prop() comDataView: DraggableView;
    @Watch('comDataView')
    watchHandlerComData(newValue: DraggableView) {
        this.chartObj.resize({ width: newValue.w, height: newValue.h });
    }

    // @Watch('theme')
    // watchHandlerTheme() {
    //     this.initChart();
    // }

    // apidata的变化会通过datascource体现出来，所以只需要监听datascource
    @Prop() comDataApiData: DraggableApiData;
    @Prop() dataSource: any[];
    @Watch('dataSource')
    watchHandlerData(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initChart();
        }
    }

    @Prop() comDataConfig: DraggableConfig;
    @Watch('comDataConfig')
    watchHandlerConfig(newValue, oldValue) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initChart();
        }
    }

    componentDidLoad() {
        this.initChart();
    }

    getSeriesData(data: any,type: string){
        if(type=="pie"){
            return {name: data.x , value:data.y}
        }else{
            return data.y
        }
    }

    initChart() {
        this.chartObj && this.chartObj.dispose();
        this.chartObj = echarts.init(this.el.querySelector('#chartId'), "", { width: this.comDataView.w, height: this.comDataView.h });
        let chartOption = {
            ...this.comDataConfig,
            legend: {
                ...this.comDataConfig.legend,
                data: this.comDataConfig.series.map((series, index) => {
                    return series.name || `系列${index + 1}`
                })
            },
            series: this.comDataConfig.series.map((series, index) => {
                return {
                    ...series,
                    name: series.name || `系列${index + 1}`,
                    data: this.dataSource.filter((data) => {
                        // 筛选系列属性
                        if (index == 0 && !data.s) {
                            return true;
                        } else {
                            return data.s == (index + 1)
                        }
                    }).map((item) => this.getSeriesData(item, series.type) )
                }
            })
        }
        if (chartOption['xAxis']) {
            chartOption['xAxis'] = {
                ...this.comDataConfig.xAxis,
                data: [...new Set(this.dataSource.map((item) => item.x))]
            }
        }

        this.chartObj.setOption(chartOption);
    }

    render() {
        return (
            <div id="chartId"></div>
        );
    }
}