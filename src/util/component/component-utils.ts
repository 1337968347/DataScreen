const isComponentHasThisConfig = (comType: string, configName: string) => {
    return comConfigMap[comType] && comConfigMap[comType].indexOf(configName) > -1
}

const comConfigMap: { [comName: string]: string[] } = {
    "media-basic-img": ["bgi"]
};
export { comConfigMap, isComponentHasThisConfig }