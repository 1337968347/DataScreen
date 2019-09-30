import { DraggableView } from "../../interfaces";


export interface ComponentInitalMap {
    [keyName: string]: DragComOption;
}

export declare type comType =
    "media-basic-img" |
    "chart-base-line" | "chart-line-stack" | "chart-pie-custom" | "chart-bar-simple" |
    "text-common";

export declare type comConfig = "bgi" | "fontSize" | "fontContent" | "fontWeight" | "color" 
| "backgroundColor" | "textAlign";

export interface ComData {
    data: DragComOption;
    comName: comType;
    id: string;
}

export interface DragComOption {
    api_data?: DraggableApiData;
    apis?: DraggableApi;
    nickName: string;
    config: DraggableConfig;
    icon: string;
    view: DraggableView;
}

export interface DraggableApiData {
    [sourceName: string]: any[]
}

export interface DraggableApi {
    source: DraggableApiSource;
}

export interface DraggableApiSource {
    description: string;
    fields: DarggableApiSourceField;
}

export interface DarggableApiSourceField {
    [optionName: string]: DarggableApiSourceFieldOption
}

export interface DarggableApiSourceFieldOption {
    description: string;
    optional: boolean;
    type: string;
}

export interface DraggableConfig {
    [configName: string]: any;
}