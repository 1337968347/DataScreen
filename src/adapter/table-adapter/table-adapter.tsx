import { Component, Prop, h } from '@stencil/core';

import { DraggableConfig } from "../../interfaces"

@Component({
    tag: 'table-adapter',
    styleUrl: 'table-adapter.scss'
})
export class TableAdapter {
    @Prop() comDataConfig: DraggableConfig;
    @Prop() comDataApiData: any;

    componentWillLoad() {
    }

    render() {
        return (
            <cy-table
                style={{
                    "--background": this.comDataConfig.backgroundColor,
                    "--header-bg": this.comDataConfig.headerColor,
                    "text-align": this.comDataConfig.textAlign,
                    "--font-size": this.comDataConfig.fontSize + "px",
                    "--color": this.comDataConfig.color,
                    "--border-color": this.comDataConfig.borderColor,
                    "--border-width": this.comDataConfig.borderWidth + "px" || 0 + "px"
                }}
                dataSource={this.comDataApiData || []}
                Columns={this.comDataConfig.columns}>
            </cy-table>
        );
    }
}