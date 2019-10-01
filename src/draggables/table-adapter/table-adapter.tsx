import { Component, Prop, h } from '@stencil/core';

import { ComData } from "../../interfaces"

@Component({
    tag: 'table-adapter',
    styleUrl: 'table-adapter.scss'
})
export class TableAdapter {
    @Prop() comData: ComData;

    componentWillLoad() {
    }

    render() {
        return (
            <cy-table 
            style={{
                "--background": this.comData.data.config.backgroundColor,
                "--header-bg": this.comData.data.config.headerColor,
                "text-align": this.comData.data.config.textAlign,
                "--font-size": this.comData.data.config.fontSize+"px",
                "--color": this.comData.data.config.color,
                "--border-color": this.comData.data.config.borderColor,
                "--border-width": this.comData.data.config.borderWidth || 0+"px"
            }}
            dataSource={this.comData.data.api_data.dataSource}
            Columns={this.comData.data.config.columns}>
            </cy-table>
        );
    }
}