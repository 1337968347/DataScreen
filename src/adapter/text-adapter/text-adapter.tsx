import { Component, Prop, Watch, State, h } from '@stencil/core';

import { ComData } from "../../interfaces"
import moment from "moment";

@Component({
    tag: 'text-adapter',
    styleUrl: "text-adapter.css"
})
export class TextAdapter {
    @Prop() comData: ComData;
    @Watch('comData')
    watchHandler(newValue, oldValue) {
        this.initComponentOption()
    }
    @State() timerStr: string = ""

    timerId: number = 0;

    componentWillLoad() {
        this.initComponentOption()
    }


    initComponentOption() {
        if (this.comData.comName == "text-timer") {
            this.timerStr = moment().format(this.comData.data.config.timerOption.format || "");
            this.timerId = setInterval(() => {
                this.timerStr = moment().format(this.comData.data.config.timerOption.format || '');
            }, this.comData.data.config.timerOption.interval || 1000)
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
        }
    }
}