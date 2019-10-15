import { Component,Prop,Watch, Element,h} from '@stencil/core';
import echarts from 'echarts'

import { ComData,themeType } from "../../interfaces";

@Component({
    tag: 'chart-adapter'
})
export class ChartAdapter {
    @Element() el :HTMLElement;
    @Prop() comData: ComData;
    @Prop() comDataApiData: any;
    chartObj:any;

    @Watch('comData')
    watchHandlerComData(newValue:ComData,oldValue:ComData) {
        if(newValue.data.view.w!==oldValue.data.view.w || newValue.data.view.h!==oldValue.data.view.h){
            this.chartObj.resize({ width: newValue.data.view.w, height:  newValue.data.view.h });
        }
    }
    
    @Prop() theme: themeType = "default";
    @Watch('theme')
    watchHandlerTheme() {
        this.chartObj.dispose();
        this.initChart();
    }
    
    componentDidLoad() {
        this.initChart();
    }

    initChart(){
        this.chartObj = echarts.init(this.el.querySelector('#chartId'),this.theme , { width: this.comData.data.view.w, height:  this.comData.data.view.h });
        this.chartObj.setOption(this.comData.data.config);
    }

    render() {
        return (
            <div id="chartId"></div>
        );
    }
}