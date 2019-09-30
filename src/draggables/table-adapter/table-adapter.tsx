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
            dataSource={this.comData.data.api_data.dataSource}
            Columns={this.comData.data.config.columns}>
            </cy-table>
        );
    }
}