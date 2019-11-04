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
        if (JSON.stringify(newValue) !== JSON.stringify(oldValue)) {
            this.initTableByOption();
        }
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
        this.timeNum = 0;
        this.timerId && clearInterval(this.timerId);

        if (this.option.tableAllOption && this.option.tableAllOption.rowNum) {
            let tableHeight = parseInt(this.el.closest("cy-draggable").style.height);
            this.tableHeaderHeight = tableHeight * ((this.option.headerHeight || 10) / 100);
            this.tableRowHeight = (tableHeight - this.tableHeaderHeight) / this.option.tableAllOption.rowNum;
        }

        if (this.option.tableAllOption && this.option.tableAllOption.isScroll) {
            this.timerId = setInterval(() => {
                this.timeNum++;
            }, this.option.tableAllOption && this.option.tableAllOption.intervalSecond >= 1 &&
            this.option.tableAllOption.intervalSecond * 1000 || 3000)
        }
    }

    render() {
        return (

            <div class="table">
                <div class="table-header">
                    <table>
                        <colgroup>
                            {this.option.orderOption && this.option.orderOption.show ?
                                <col style={{
                                    "width": this.option.orderOption && this.option.orderOption.width + "%",
                                }}></col> : null
                            }
                            {this.Columns.map((column) =>
                                <col style={{
                                    "width": column.width && (column.width + "%")
                                }}>
                                </col>
                            )}
                        </colgroup>
                        <thead>
                            <tr style={{
                                "height": this.tableHeaderHeight + "px",
                                "z-index": "2"
                            }}>
                                {this.option.orderOption && this.option.orderOption.show ?
                                    <th></th> : null
                                }
                                {this.Columns.map((column) =>
                                    <th>
                                        {column.title}
                                    </th>
                                )}
                            </tr>
                        </thead>
                    </table>
                </div>
                <div class="table-body">
                    <table>
                        <colgroup>
                            {this.option.orderOption && this.option.orderOption.show ?
                                <col style={{
                                    "width": this.option.orderOption && this.option.orderOption.width + "%",
                                }}></col> : null
                            }
                            {this.Columns.map((column) =>
                                <col style={{
                                    "width": column.width && (column.width + "%")
                                }}>
                                </col>
                            )}
                        </colgroup>
                        <tbody style={{
                            transform: this.tableRowHeight && this.option.tableAllOption && this.option.tableAllOption.isScroll && this.option.tableAllOption.rowNum
                                && `matrix(1, 0, 0, 1, 0, ${-1 * (this.timeNum % (this.dataSource.length + 1 - parseInt(this.option.tableAllOption.rowNum + ""))) * this.tableRowHeight})`
                        }}>
                            {this.dataSource.map((row, rowIndex) =>
                                <tr style={{
                                    height: this.tableRowHeight + "px"
                                }} key={row.key || ""}>
                                    {this.option.orderOption && this.option.orderOption.show ?
                                        <td>{rowIndex + 1}</td>
                                        : null
                                    }
                                    {this.Columns.map((column) => {
                                        if (column.render) {
                                            return <td>{column.render(row, rowIndex)}</td>
                                        } else {
                                            return <td  >{row[column.dataIndex] || ""}</td>
                                        }
                                    })}
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}