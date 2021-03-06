import { DraggableView } from "../../interfaces";


export interface ComponentInitalMap {
    [keyName: string]: DragComOption;
}

export declare type comType =
    // media
    "media-basic-img" | "media-border" | "media-iframe" | "media-img-slides" | "media-video" |
    // chart
    "chart-line-base" | "chart-line-stack" | "chart-pie-basic" | "chart-pie-sector" | "chart-bar-base" | "chart-bar-vertical" |
    // text
    "text-common" | "text-timer" | "text-number-flop" |
    // table
    "table";

declare type echartOption = "textStyle" | "title" | "xAxis" | "yAxis" | "legend" | "tooltip"|"series";

// 表格设置
declare type tableConfig = "tableAllOption" | "columns" | "tableHeaderOption" | "tableRowOption" | "tableOrderOption";

export declare type comConfig =
    "bgi" | "commonTextStyle" | "iconStyle" | "fontContent" | "backgroundColor" | "borderStyle" | "timerOption"
    | "videoSrc" | "borderImg" | "iframeSrc" | "swiperAutoTime"
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
    fieldMap?: DataFieldMap[];
    dataSourceType?: "static" | "rest";
    // static
    staticData?: any;
    // rest
    // 是否拼接环境地址
    isSplicing?: boolean;
    restUrl?: string;
    restType?: "get" | "post";
    restRefreshTime?: number;
}

export interface DataFieldMap {
    name: string;
    mapping: string;
}

export interface DraggableConfig {
    [configName: string]: any;
}