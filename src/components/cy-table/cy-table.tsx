import { Component, Prop, h } from '@stencil/core';
import { Column } from '../../interfaces';

@Component({
    tag: 'cy-table',
    styleUrl: 'cy-table.scss',
    shadow: true
})
export class CyTable {
    @Prop() Columns: Column[];
    @Prop() dataSource: any[];
    
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        {this.Columns.map((column) =>
                            <th>{column.title}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {this.dataSource.map((row,rowIndex) =>
                        <tr key={row.key || ""}>
                            {this.Columns.map((column) => {
                                if (column.render) {
                                    return <td>{column.render(row,rowIndex)}</td> 
                                } else {
                                    return <td>{row[column.dataIndex] || ""}</td>
                                }}
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }
}