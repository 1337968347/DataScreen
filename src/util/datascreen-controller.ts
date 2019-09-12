import { ComType, CanvasConfig } from "../interfaces"
import { canvasDefaultConfig } from "../util/canvas/canvas-defaultdata"
import{deepCopy} from "./helper"

// 所有的拖拽组件的列表
let componentDatas: ComType[] = []
let chooseComId: string = "";

let canvasCompoennt = null;
let layerComponent = null;
let settingComponent = null;

let canvasConfig: CanvasConfig = null;

// 图层组件
const getLayerComponent = () => { return layerComponent || (layerComponent = document.querySelector("datascreen-layer")) };
// canvas组件 
export const getCanvasComponent = () => { return canvasCompoennt || (canvasCompoennt = document.querySelector("datascreen-canvas")) };
// get面板组件
const getSettingComponent = () => { return settingComponent || (settingComponent = document.querySelector("datascreen-setting-panel")) };

/**
 * 获取画布的设置
 */
export const getCanvasConfig = (): CanvasConfig => { return canvasConfig || saveCanvasConfig(canvasDefaultConfig) }


export const saveCanvasConfig = (config: CanvasConfig) => {
    canvasConfig = config;
    // 随改随保存
    localStorage.setItem("canvasConfig", JSON.stringify(canvasConfig));
    getCanvasComponent() && canvasCompoennt.updateCanvasConfig(config);
    return canvasConfig;
}

/**
 * 更新组件列表数据都要通过这个方法
 * 通过全局状态管理的方式管理数据
 * @param comList 
 */
export const setComponentDatas = (comList: ComType[]) => {
    componentDatas = deepCopy([],comList);
    // 随改随保存
    localStorage.setItem("comList",JSON.stringify(componentDatas))
    // 分发到各个组件中去
    getCanvasComponent() && canvasCompoennt.mapComDatasToState([...comList]);
    getLayerComponent() && layerComponent.mapComDatasToState([...comList]);
}

export const getComponentDatas = (): ComType[] => {
    return componentDatas;
}

/**
 * 添加组件数据并且选中当前组件
 * @param com 
 */
export const addComponentData = (com: ComType) => {
    setComponentDatas([...componentDatas, deepCopy({},com)])
    changeChooseComponent(com.id);
}

// 更新选中的组件id
export const changeChooseComponent = (comId: string) => {
    if (chooseComId !== comId) {
        chooseComId = comId;
        getLayerComponent() && layerComponent.chooseComponent(comId)
        getCanvasComponent() && canvasCompoennt.chooseComponent(comId);
        getSettingComponent() && settingComponent.setComponentConfigData(getComponentDataById(comId))
    }
}

// 根据id获取当前component的数据
export const getComponentDataById = (comId: string) => {
    return (componentDatas.filter((item: ComType) => {
        return item.id == comId;
    })[0] || null);
}


export const setComConfigData = (comDataItem: ComType) => {
    let comDatas = componentDatas.map((comData) => {
        if (comData.id == comDataItem.id) {
            return comDataItem
        } else {
            return comData
        }
    })
    setComponentDatas(comDatas)
}

export const updateChooseComConfig = (comDataItem: ComType) => {
    setComConfigData(comDataItem);
    getSettingComponent() && settingComponent.setComponentConfigData(comDataItem);
}