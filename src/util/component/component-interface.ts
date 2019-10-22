import { DraggableView } from "../../interfaces";


export interface ComponentInitalMap {
    [keyName: string]: DragComOption;
}

export declare type comType =
    // media
    "media-basic-img" | "media-border" | "media-iframe" | "media-img-slides" | "media-video" |
    // chart
    "chart-base-line" | "chart-line-stack" | "chart-pie-custom" | "chart-bar-simple" |
    // text
    "text-common" |
    // table
    "table";

declare type echartOption = "textStyle" | "title" | "xAxis" | "yAxis" | "legend" | "tooltip";

// 表格设置
declare type tableConfig = "columns" | "tableHeaderOption" | "tableRowOption";

export declare type comConfig = "bgi" | "commonTextStyle" | "fontContent" | "videoSrc"
    | "backgroundColor" | "borderStyle" | "borderImg" | "iframeSrc" | "swiperAutoTime"
    | tableConfig | echartOption;

export interface ComData {
    data: DragComOption;
    comName: comType;
    id: string;
}

export interface DragComOption {
    api_data?: DraggableApiData;
    nickName: string;
    config: DraggableConfig;
    icon: string;
    view: DraggableView;
}

export interface DraggableApiData {
    dataSourceType?: "static" | "rest";
    // static
    staticData?: any;
    // rest
    restUrl?: string;
    restType?: "get" | "post";
    restRefreshTime?: number;
    fieldMap?: DataFieldMap[];
}

export interface DataFieldMap {
    name: string;
    mapping: string;
}

export interface DraggableConfig {
    [configName: string]: any;
}