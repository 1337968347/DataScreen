import { Component,Prop,Watch, Element,h} from '@stencil/core';
import echarts from 'echarts'

import { ComData,themeType } from "../../interfaces";

@Component({
    tag: 'chart-adapter'
})
export class ChartAdapter {
    @Element() el :HTMLElement;
    @Prop() comData: ComData;
    @Watch('comData')
    watchHandlerComData(newValue:ComData,oldValue:ComData) {
        if(newValue.data.view.w!==oldValue.data.view.w || newValue.data.view.h!==oldValue.data.view.h){
            this.chartObj.resize({ width: newValue.data.view.w, height:  newValue.data.view.h });
        }
    }
    chartObj:any;

    @Prop() comDataApiData: any;
    @Watch('comDataApiData')
    watchHandler() {
        this.initChart();
    }
    
    
    @Prop() theme: themeType = "default";
    @Watch('theme')
    watchHandlerTheme() {
        this.initChart();
    }
    
    componentDidLoad() {
        this.initChart();
    }

    initChart(){
        this.chartObj&&this.chartObj.dispose();
        this.chartObj = echarts.init(this.el.querySelector('#chartId'),this.theme , { width: this.comData.data.view.w, height:  this.comData.data.view.h });
        let chartOption= {...this.comData.data.config,  dataset: {
            dimensions: this.comData.data.api_data.fieldMap.map((field)=> field.name),
            source: this.comDataApiData||[]
        }}
        console.log(chartOption)
        this.chartObj.setOption(chartOption);
    }

    render() {
        return (
            <div id="chartId"></div>
        );
    }
}