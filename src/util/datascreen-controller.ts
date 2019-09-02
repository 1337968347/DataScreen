import { ComType } from "../interfaces"
// 负责几个组件之间的数据共享

// 所有的拖拽组件的列表
let componentDatas: ComType[] = []

// 图层组件
let layerComponent: any = document.querySelector('datascreen-layer');
// canvas组件
let canvasCompoennt: any= document.querySelector("cy-draggable-canvas");
// 设置面板组件
let settingComponent: any =document.querySelector("datascreen-setting");

// 更新组件列表数据都要通过这个方法
export const setComponentDatas=(comList : ComType[]) => {
    componentDatas = comList;
    console.log(componentDatas);
    // 分发到各个组件中去
}

// 更新hover组件的id
export const changeHoverComponent = (comId: string) =>{
    layerComponent&&layerComponent.setCurrentComponent(comId, false)
    canvasCompoennt&&canvasCompoennt.setCurrentComponent(comId, false);
}

export const changeChooseComponentId = (comId: string)=>{
    layerComponent&&layerComponent.setCurrentComponent(comId, false)
    canvasCompoennt&&canvasCompoennt.setCurrentComponent(comId, false);
    settingComponent&&settingComponent.setCurrentComponentData(getComponentDataById(comId))
}   


const getComponentDataById= (comId: string)=>{
    return componentDatas.filter((item:ComType)=>{
        return  item.id == comId;
    })
}