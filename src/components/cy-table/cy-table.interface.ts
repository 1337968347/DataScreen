export interface Column {
    title: string;
    dataIndex: string;
    render?: Function;
}
export interface TableOrderOption {
    show: boolean;
    width?: number;
}
export interface TableAllOption {
    isScroll?: boolean;
    intervalSecond?: number;
    rowNum?: number;
}

export interface TableOption {
    orderOption: TableOrderOption;
    tableAllOption?: TableAllOption;
    headerHeight?: number;
}