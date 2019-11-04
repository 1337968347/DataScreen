import { Component, Prop, h } from '@stencil/core';

import { DraggableConfig, DraggableView, TableOrderOption } from "../../interfaces"

@Component({
    tag: 'table-adapter',
    styleUrl: 'table-adapter.scss'
})
export class TableAdapter {
    @Prop() comDataConfig: DraggableConfig;
    @Prop() comDataView: DraggableView;
    @Prop() dataSource: any;


    render() {
        return (
            <cy-table
                style={{
                    "--odd-bg": this.comDataConfig.tableRowOption && this.comDataConfig.tableRowOption.oddBgc || "",
                    "--even-bg": this.comDataConfig.tableRowOption && this.comDataConfig.tableRowOption.evenBgc || "",
                    "--background": this.comDataConfig.backgroundColor,
                    "--header-bg": this.comDataConfig.tableHeaderOption && this.comDataConfig.tableHeaderOption.backgroundColor || "",
                    "font-weight": this.comDataConfig.commonTextStyle && this.comDataConfig.commonTextStyle.fontWeight || "",
                    "text-align": this.comDataConfig.commonTextStyle && this.comDataConfig.commonTextStyle.textAlign || "",
                    "--font-size": this.comDataConfig.commonTextStyle && this.comDataConfig.commonTextStyle.fontSize + "px" || "" + "px",
                    "--color": this.comDataConfig.commonTextStyle && this.comDataConfig.commonTextStyle.color || "",
                }} option={{
                    orderOption: this.comDataConfig.tableOrderOption as TableOrderOption,
                    tableAllOption:  this.comDataConfig.tableAllOption&&{
                        rowNum: this.comDataConfig.tableAllOption.rowNum,
                        isScroll: this.comDataConfig.tableAllOption.isScroll,
                        intervalSecond: this.comDataConfig.tableAllOption.intervalSecond,
                    },
                    headerHeight: this.comDataConfig.tableHeaderOption && this.comDataConfig.tableHeaderOption.headerHeight
                    
                }}
                dataSource={this.dataSource || []}
                Columns={this.comDataConfig.columns}>
            </cy-table>
        );
    }
}