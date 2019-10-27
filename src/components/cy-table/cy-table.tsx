import { Component, Prop, State, Watch, h, Element } from '@stencil/core';
import { Column, TableOption } from '../../interfaces';

@Component({
    tag: 'cy-table',
    styleUrl: 'cy-table.scss',
    shadow: true
})
export class CyTable {
    @Element() el: HTMLElement;
    @Prop() Columns: Column[];
    @Prop() option?: TableOption = {
        orderOption: {
            show: false
        },
    };
    @Watch('option')
    watchHandler(newValue, oldValue) {
        this.initTableByOption();
    }
    @Prop() dataSource: any[];
    @State() timeNum: number = 0;
    // 表格的高度相关
    @State() tableHeaderHeight: number;
    @State() tableRowHeight: number;
    timerId: number;

    componentWillLoad() {
        this.initTableByOption()
    }

    initTableByOption() {
        if (this.option.tableAllOption && this.option.tableAllOption.rowNum) {
            let tableHeight = parseInt(this.el.closest("cy-draggable").style.height);
            this.tableHeaderHeight = tableHeight * ((this.option.headerHeight || 10) / 100);
            this.tableRowHeight = (tableHeight - this.tableHeaderHeight) / this.option.tableAllOption.rowNum;
        }

        if (this.option.tableAllOption && this.option.tableAllOption.isScroll) {
            this.timeNum = 0;
            this.timerId && clearInterval(this.timerId)

            this.timerId = setInterval(() => {
                this.timeNum++;
            }, this.option.tableAllOption && this.option.tableAllOption.intervalSecond >= 1 &&
            this.option.tableAllOption.intervalSecond * 1000 || 3000)
        } else {
            this.timerId && clearInterval(this.timerId)
            this.timeNum = 0;
        }
    }

    render() {
        return (
            <div class="table">

                <div class="table-header">
                    <div class="cy-row" style={{
                        "position": "absolute",
                        "height": this.tableHeaderHeight + "px",
                        "z-index": "2"
                    }}>
                        {this.option.orderOption && this.option.orderOption.show ?
                            <div class="cy-col" style={{
                                "width": this.option.orderOption && this.option.orderOption.width + "%",
                                "flex": this.option.orderOption && this.option.orderOption.width ? "none" : "1"
                            }}></div> : null
                        }

                        {this.Columns.map((column) =>
                            <div class="cy-col">
                                {column.title}
                            </div>
                        )}
                    </div>
                    <div class="cy-row" style={{ "height": this.tableHeaderHeight + "px" }}>
                    </div>
                </div>
                <div class="table-body">
                    {this.dataSource.map((row, rowIndex) =>
                        <div class="cy-row" style={{
                            height: this.tableRowHeight + "px",
                            transform: this.tableRowHeight && this.option.tableAllOption && this.option.tableAllOption.rowNum && `matrix(1, 0, 0, 1, 0, ${-1 * (this.timeNum % this.option.tableAllOption.rowNum) * this.tableRowHeight})`
                        }} key={row.key || ""}>
                            {this.option.orderOption && this.option.orderOption.show ?
                                <div class="cy-col" style={{
                                    "width": this.option.orderOption && this.option.orderOption.width + "%",
                                    "flex": this.option.orderOption && this.option.orderOption.width ? "none" : "1"
                                }}>{rowIndex + 1}</div>
                                : null
                            }
                            {this.Columns.map((column) => {
                                if (column.render) {
                                    return <div class="cy-col" >{column.render(row, rowIndex)}</div>
                                } else {
                                    return <div class="cy-col" >{row[column.dataIndex] || ""}</div>
                                }
                            })}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}