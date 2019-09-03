import { ComType } from "../interfaces"
// 负责几个组件之间的数据共享

// 所有的拖拽组件的列表
let componentDatas: ComType[] = []
let chooseComId: string = "";

let canvasCompoennt = null;
let layerComponent = null;
let settingComponent = null;

// 图层组件
let getLayerComponent = () => { return layerComponent || (layerComponent = document.querySelector("datascreen-layer")) };
// canvas组件 
let getCanvasComponent = () => { return canvasCompoennt || (canvasCompoennt = document.querySelector("datascreen-canvas")) };
// 设置面板组件
let getSettingComponent = () => { return settingComponent || (settingComponent = document.querySelector("datascreen-setting-panel")) };

/**
 * 更新组件列表数据都要通过这个方法
 * 通过全局状态管理的方式管理数据
 * @param comList 
 */
export const setComponentDatas = (comList: ComType[]) => {
    componentDatas = comList;
    // 分发到各个组件中去
    getCanvasComponent() && canvasCompoennt.mapComDatasToState(comList);
    getLayerComponent() && layerComponent.mapComDatasToState(comList);
}

export const getComponentDatas = (): ComType[] => {
    return componentDatas;
}

/**
 * 添加组件数据并且选中当前组件
 * @param com 
 */
export const addComponentData = (com: ComType) => {
    setComponentDatas([...componentDatas, com])
    changeChooseComponent(com.id);
}

// 更新hover组件的id
export const changeHoverComponent = (comId: string) => {
    layerComponent && layerComponent.setCurrentComponent(comId, false)
    canvasCompoennt && canvasCompoennt.setCurrentComponent(comId, false);
}

// 更新选中的组件id
export const changeChooseComponent = (comId: string) => {
    if (chooseComId !== comId) {
        chooseComId =comId;
        getLayerComponent() && layerComponent.chooseCurrentComponent(comId)
        getCanvasComponent() && canvasCompoennt.chooseCurrentComponent(comId);
        getSettingComponent() && settingComponent.setCurrentComponentId(comId)
    }
}

// 根据id获取当前component的数据
export const getComponentDataById = (comId: string) => {
    return componentDatas.filter((item: ComType) => {
        return item.id == comId;
    })[0] || null
}