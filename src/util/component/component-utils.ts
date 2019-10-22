import { comConfig } from "./component-interface";

const isComponentHasThisConfig = (comType: string, configName: comConfig) => {
    return comConfigMap[comType] && comConfigMap[comType].indexOf(configName) > -1
}

const comConfigMap: { [comName: string]: comConfig[] } = {
    "media-basic-img": ["bgi"],
    "media-img-slides": ["swiperAutoTime"],
    "media-iframe": ["iframeSrc"],
    "media-border": ["backgroundColor", "borderStyle", "borderImg"],
    "media-video": ["videoSrc"],

    "text-common": ["commonTextStyle", "fontContent", "backgroundColor",],

    "table": ["columns", "tableHeaderOption","tableRowOption", "commonTextStyle", "borderStyle"],

    "chart-base-line": ["textStyle", "title", "xAxis", "yAxis", "legend", "tooltip"]
};

export { comConfigMap, isComponentHasThisConfig }