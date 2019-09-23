import {DraggableView} from "../../interfaces";


export interface ComponentInitalMap{
    [keyName: string]: DragComOption;
}

export interface ComData {
    data: DragComOption;
    ComData: string;
    id: string;
}

export interface DragComOption {
    api_data?: DraggableApiData;
    apis?: DraggableApi;
    comName: string;
    nickName: string;
    config: DraggableConfig;
    icon: string;
    view: DraggableView;
}

export interface DraggableApiData{
    source: any[]
}

export interface DraggableApi {
    source: DraggableApiSource;
}

export interface DraggableApiSource {
    description: string;
    fields: DarggableApiSourceField;
}

export interface DarggableApiSourceField{
    [optionName: string]: DarggableApiSourceFieldOption
}

export interface DarggableApiSourceFieldOption{
    description: string;
    optional: boolean;
    type: string;
}

export interface DraggableConfig {
    [configName: string]:any;
}