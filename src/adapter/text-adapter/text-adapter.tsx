import { Component, Prop, h } from '@stencil/core';

import { ComData } from "../../interfaces"
import moment from "moment";

@Component({
    tag: 'text-adapter',
    styleUrl: "text-adapter.css"
})
export class TextAdapter {
    @Prop() comData: ComData;

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
                    <div class="text-box">
                        <span style={{
                            "line-height": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize && Math.floor(1.5 * textConfig.commonTextStyle.fontSize) + "px" || "",
                            "font-weight": textConfig.commonTextStyle && textConfig.commonTextStyle.fontWeight || "",
                            "text-align": textConfig.commonTextStyle && textConfig.commonTextStyle.textAlign || "",
                            "font-size": textConfig.commonTextStyle && textConfig.commonTextStyle.fontSize + "px" || "" + "px",
                            "color": textConfig.commonTextStyle && textConfig.commonTextStyle.color || "",
                        }}>
                            <ion-icon name="time"></ion-icon>
                            {moment().format('MMMM Do YYYY, h:mm:ss a')}
                        </span>
                    </div>

                );
        }
    }
}