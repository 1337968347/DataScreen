import { comConfig } from "./component-interface";

const isComponentHasThisConfig = (comType: string, configName: comConfig) => {
    return comConfigMap[comType] && comConfigMap[comType].indexOf(configName) > -1
}

const comConfigMap: { [comName: string]: comConfig[] } = {
    "media-basic-img": ["bgi"],
    "media-img-slides": ["swiperAutoTime"],
    "media-iframe": ["iframeSrc"],
    "media-border": ["backgroundColor", "borderWidth", "borderColor", "borderImg"],
    "media-video": ["videoSrc"],

    "text-common": ["fontSize", "fontContent", "fontWeight", "color", "backgroundColor", "textAlign"],

    "table": ["columns", "headerColor", "color", "fontSize", "backgroundColor", "textAlign", "borderWidth", "borderColor"],

    "chart-base-line": ["textStyle", "title", "xAxis", "yAxis", "legend"]
};

export { comConfigMap, isComponentHasThisConfig }