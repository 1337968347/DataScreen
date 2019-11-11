import { Component, Prop, Watch, State, h } from '@stencil/core';

import { DraggableConfig, ComData } from "../../interfaces"
import moment from "moment";

@Component({
    tag: 'text-adapter',
    styleUrl: "text-adapter.css"
})
export class TextAdapter {
    @Prop() comData: ComData;
    @Prop() dataSource: any[] = [];
    @Watch('dataSource')
    watchDataSourceHandler(newValue, oldValue) {
        if (this.comData.comName == "text-number-flop") {
            this.currentNumber = newValue[0].value;
        }
    }
    @Prop() comDataConfig: DraggableConfig;
    @Watch('comDataConfig')
    watchComDataConfigHandler(newValue: DraggableConfig, oldValue: DraggableConfig) {
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initComponentOption()
        }
    }
    @State() timerStr: string = ""
    currentNumber: number = 0;

    // 当前时间 定时器ID
    timerId: number = 0;

    componentWillLoad() {

        this.initComponentOption();
    }

    initComponentOption() {
        if (this.comData.comName == "text-timer") {
            this.timerStr = moment().format(this.comData.data.config.timerOption.format || "");
            this.timerId = setInterval(() => {
                this.timerStr = moment().format(this.comData.data.config.timerOption.format || '');
            }, this.comData.data.config.timerOption.interval || 1000)
        }
        if (this.comData.comName == "text-number-flop") {
            this.currentNumber = this.dataSource[0].value;
        }
    }


    render() {
        let textConfig = this.comData.data.config;
        switch (this.comData.comName) {
            case "text-common":
                return (
                    <div class="text-box">
                        <span style={{
                            "line-height": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize && Math.floor(1.5 * textConfig.commonTextStyle.fontSize) + "px" || "",
                            "font-weight": textConfig.commonTextStyle && textConfig.commonTextStyle.fontWeight || "",
                            "text-align": textConfig.commonTextStyle && textConfig.commonTextStyle.textAlign || "",
                            "font-size": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize + "px" || "" + "px",
                            "color": textConfig.commonTextStyle && textConfig.commonTextStyle.color || "",
                        }}>{textConfig.fontContent || ""}</span>
                    </div>

                );
            case "text-timer":
                return (
                    <div class="text-box" style={{
                        "line-height": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize && Math.floor(1.5 * textConfig.commonTextStyle.fontSize) + "px" || "",
                        "font-weight": textConfig.commonTextStyle && textConfig.commonTextStyle.fontWeight || "",
                        "text-align": textConfig.commonTextStyle && textConfig.commonTextStyle.textAlign || "",
                        "font-size": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize + "px" || "" + "px",
                        "color": textConfig.commonTextStyle && textConfig.commonTextStyle.color || "",
                    }}>
                        {this.comData.data.config.iconStyle.show ?
                            <ion-icon style={{
                                "color": this.comData.data.config.iconStyle.color,
                                "font-size": (this.comData.data.config.iconStyle.fontSize || "20") + "px",
                                "margin-right": (this.comData.data.config.iconStyle.margin || "0") + "px",
                            }} name="time"></ion-icon> : null}
                        {this.timerStr || ""}
                    </div>
                );
            case "text-number-flop":
                return (
                    <div class="text-box" style={{
                        "line-height": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize && Math.floor(1.5 * textConfig.commonTextStyle.fontSize) + "px" || "",
                        "font-weight": textConfig.commonTextStyle && textConfig.commonTextStyle.fontWeight || "",
                        "text-align": textConfig.commonTextStyle && textConfig.commonTextStyle.textAlign || "",
                        "font-size": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize + "px" || "" + "px",
                        "color": textConfig.commonTextStyle && textConfig.commonTextStyle.color || "",
                    }}>
                        {this.dataSource[0].value || ""}
                    </div>
                );

        }
    }
}