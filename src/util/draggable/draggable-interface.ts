export interface ComType {
    data: DragComOption;
    key: string;
}

export interface DragComOption {
    api_data: DraggableApiData;
    apis: DraggableApi;
    nickName: string;
    config: DraggableConfig;
    icon: string;
    comName: string;
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
    animation?: any;
    chart?: any;
    legend?: any;
    series?: any;
    tooltip?: any;
    xaxis?: any;
    yaxis?: any;
}

export interface DraggableView {
    width: string;
    height: string;
    minWidth: string;
    minHeight: string;
}