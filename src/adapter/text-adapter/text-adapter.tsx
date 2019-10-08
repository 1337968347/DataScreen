import { Component, Prop, h } from '@stencil/core';

import { ComData, TextConfig } from "../../interfaces"

@Component({
    tag: 'text-adapter',
    styleUrl: "text-adapter.css"
})
export class TextAdapter {
    @Prop() comData: ComData;

    render() {
        let textConfig: TextConfig = this.comData.data.config;
        return (
            <div class="text-box">
                <span style={{
                    "font-size": textConfig.fontSize + "px",
                    "line-height": Math.floor(1.5 * textConfig.fontSize) + "px",
                    "font-weight": textConfig.fontWeight || "normal",
                    "color": textConfig.color || "#ffffff",
                    "text-align": textConfig.textAlign || "center"
                }}>{textConfig.fontContent || ""}</span>
            </div>

        );
    }
}