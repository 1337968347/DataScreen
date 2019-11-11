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

    "text-common": ["commonTextStyle", "fontContent",],
    "text-timer": ["commonTextStyle", "iconStyle", "timerOption"],
    "text-number-flop": ["commonTextStyle"],

    "table": ["columns", "tableAllOption", "tableHeaderOption", "tableRowOption", "tableOrderOption", "commonTextStyle"],
    // 中间那个是series的type
    "chart-line-base": ["textStyle", "title", "xAxis", "yAxis", "legend", "tooltip"],
    "chart-bar-base": ["textStyle", "title", "xAxis", "yAxis", "legend", "tooltip"],
    "chart-bar-vertical": ["textStyle", "title", "xAxis", "yAxis", "legend", "tooltip"],
    "chart-pie-basic": ["textStyle", "title", "legend", "tooltip"],
    "chart-pie-sector": ["textStyle", "title", "legend", "tooltip"]
};

export { comConfigMap, isComponentHasThisConfig }