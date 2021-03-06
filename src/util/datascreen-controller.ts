import { ComData, CanvasConfig, DataScreen } from "../interfaces";
import { DataScreenData } from "../providers/datascreen-data";
import { deepCopy, reduceFrequency } from "./helper";

let componentDatas: ComData[] = [];
let canvasConfig: CanvasConfig = null;
let chooseComId: string = "";
let dataScreenId: string = "";

/**
 * set
 * @param DataScreenId
 * @param dataScreen
 * @param isLocalUpDate 是否更新localStorage 编辑时候打开
 */
export const setDataScreen = async (
  DataScreenId: string,
  dataScreen: DataScreen,
  isLocalUpDate: boolean = true
) => {
  changeChooseComponent("");
  dataScreenId = DataScreenId;
  await setComponentDatas(dataScreen.componentsData, true, true, isLocalUpDate);
  await setCanvasConfig(dataScreen.canvasOption, isLocalUpDate);
};

export const getDataScreen = async (id: string): Promise<DataScreen> => {
  return await DataScreenData.getDataScreen(id);
};

let canvasComponent = null;
let layerComponent = null;
let settingComponent = null;

export const initLayerComponent = (layerHTmlElement: HTMLElement) => {
  layerComponent = layerHTmlElement;
};
export const initSettingComponent = (settingHTmlElement: HTMLElement) => {
  settingComponent = settingHTmlElement;
};
export const initCanvasComponent = (canvasHTmlElement: HTMLElement) => {
  canvasComponent = canvasHTmlElement;
};

// 图层组件
const getLayerComponent = () => {
  return layerComponent;
};
// canvas组件
export const getCanvasComponent = () => {
  return canvasComponent;
};
// get面板组件
const getSettingComponent = () => {
  return settingComponent;
};

// 获取画布的设置
export const getCanvasConfig = (): CanvasConfig => {
  return canvasConfig;
};
export const setCanvasConfig = async (
  config: CanvasConfig,
  isLocalUpdate: boolean = true
) => {
  canvasConfig = config;
  isLocalUpdate &&
    (await DataScreenData.setDataScreenCanvasConfig(
      dataScreenId,
      canvasConfig
    ));
  // 随改随保存
  getCanvasComponent() && (await canvasComponent.setCanvasConfig(config));
  getSettingComponent() && settingComponent.setCanvasConfig(config);
  return canvasConfig;
};

/**
 * 更新组件列表数据都要通过这个方法
 * 通过全局状态管理的方式管理数据
 * @param comList
 */
export const setComponentDatas = async (
  comList: ComData[],
  isCanvasUpdate: boolean = true,
  isLayerUpdate: boolean = true,
  isLocalUpDate: boolean = true
) => {
  componentDatas = deepCopy([], comList);
  await Promise.all([
    isCanvasUpdate &&
      reduceFrequency("canvasDataCallback", async () => {
        getCanvasComponent() &&
          (await canvasComponent.mapComDatasToState(
            deepCopy([], componentDatas)
          ));
      }),
    isLayerUpdate &&
      reduceFrequency("layerDataCallback", async () => {
        let comIdsList = componentDatas.map((item) => {
          return item.id;
        });
        getLayerComponent() &&
          (await layerComponent.mapComIdsToState(comIdsList));
      }),
  ]);
  isLocalUpDate &&
    DataScreenData.setDataScreenComData(dataScreenId, componentDatas);
};

export const getComponentDatas = (): ComData[] => {
  return componentDatas;
};

export const setComDataChange = async (
  comDataItem: ComData,
  isCanvasUpdate: boolean = true,
  isSettingUpdate: boolean = true
) => {
  let comDatas = componentDatas.map((comData) => {
    return comData.id == comDataItem.id ? comDataItem : comData;
  });
  await setComponentDatas(comDatas, isCanvasUpdate, false);
  isSettingUpdate &&
    getSettingComponent() &&
    settingComponent.setComponentConfigData(comDataItem);
};

/**
 * 添加组件数据并且选中当前组件
 * @param comData
 */
export const addComponentData = async (comData: ComData) => {
  await setComponentDatas(deepCopy([], [...componentDatas, comData]));
  await changeChooseComponent(comData.id);
};

export const removeComponentData = async (comId: string) => {
  // 删除当前选中的组件
  if (comId == chooseComId) {
    await changeChooseComponent("");
  }
  await setComponentDatas(
    deepCopy(
      [],
      componentDatas.filter((comItem) => {
        return comId !== comItem.id;
      })
    )
  );
};

// 更新选中的组件id
export const changeChooseComponent = async (comId: string) => {
  if (chooseComId !== comId) {
    chooseComId = comId;
    getLayerComponent() && (await layerComponent.chooseComponentById(comId));
    getCanvasComponent() && (await canvasComponent.chooseComponentById(comId));
    getSettingComponent() &&
      (await settingComponent.setComponentConfigData(
        getComponentDataById(comId)
      ));
  }
};

// 根据id获取当前component的数据
export const getComponentDataById = (comId: string) => {
  return (
    componentDatas.filter((item: ComData) => {
      return item.id == comId;
    })[0] || null
  );
};

export const updateLayerMove = (
  from: number,
  to: number,
  isCanvasUpdate: boolean = true,
  isLayerUpdate: boolean = true,
  isLocalUpDate: boolean = true
) => {
  let comOptionTemp = componentDatas[from];
  componentDatas.splice(from, 1);
  componentDatas.splice(to, 0, comOptionTemp);
  setComponentDatas(
    componentDatas,
    isCanvasUpdate,
    isLayerUpdate,
    isLocalUpDate
  );
};
