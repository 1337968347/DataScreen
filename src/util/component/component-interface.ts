import { DraggableView } from "../../interfaces";


export interface ComponentInitalMap {
    [keyName: string]: DragComOption;
}

export declare type comType =
    // media
    "media-basic-img" | "media-border" | "media-iframe" | "media-img-slides" |
    // chart
    "chart-base-line" | "chart-line-stack" | "chart-pie-custom" | "chart-bar-simple" |
    // text
    "text-common" |
    // table
    "table";

// 常用的设置
declare type commonConfig = "bgi" | "fontSize" | "fontContent" | "fontWeight" | "color"
    | "backgroundColor" | "textAlign" | "borderWidth" | "borderColor" | "borderImg" | "iframeSrc" | "swiperAutoTime";

// 表格设置
declare type tableConfig = "columns" | "headerColor";

export declare type comConfig = commonConfig | tableConfig;

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
}

export interface DraggableConfig {
    [configName: string]: any;
}