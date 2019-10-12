import { comConfig } from "./component-interface";

const isComponentHasThisConfig = (comType: string, configName: comConfig) => {
    return comConfigMap[comType] && comConfigMap[comType].indexOf(configName) > -1
}

const comConfigMap: { [comName: string]: comConfig[] } = {
    "media-basic-img": ["bgi"],
    "media-iframe":   ["iframeSrc"],
    "media-border": ["backgroundColor", "borderWidth", "borderColor","borderImg"],
    
    "text-common": ["fontSize", "fontContent", "fontWeight", "color", "backgroundColor", "textAlign"],

    "table": ["columns","headerColor","color", "fontSize", "backgroundColor", "textAlign",  "borderWidth", "borderColor"]
};

export { comConfigMap, isComponentHasThisConfig }