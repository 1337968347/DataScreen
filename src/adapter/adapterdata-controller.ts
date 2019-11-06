import { HttpClient } from "../providers/httpclient";
import { getCanvasConfig } from "../util/datascreen-controller";
import { DraggableApiData, DataFieldMap } from "../interfaces";


let comDataMap = new Map<string, Function>();
// 有些动态数据需要定时刷新的
let comIdMapTimerId = new Map<string, number>();


const fetchData = async (restType: "get" | "post", isSplicing: boolean, restUrl: string): Promise<any> => {
    let finalUrl = "";
    if (isSplicing) {
        finalUrl = (await getCanvasConfig().baseUrl || "") + restUrl
    } else {
        finalUrl = restUrl;
    }
    return await HttpClient.fetch(restType, finalUrl, {})
}

const mapData = (dataList: any[], fieldMap: DataFieldMap[]) => {
    // 如果有数据映射
    if (fieldMap) {
        return dataList.map((item) => {
            let itemCopy = item;
            fieldMap.map((filed) => {
                if (itemCopy[filed.mapping]) {
                    let temp = itemCopy[filed.mapping];
                    delete itemCopy[filed.mapping];
                    itemCopy[filed.name] = temp;
                }
            })
            return itemCopy
        })
    } else {
        return dataList;
    }
}

export const registerDataReceiver = (comId: string, comApiData: DraggableApiData, dataCallBack: Function) => {

    if (comApiData.dataSourceType == "static") {
        comDataMap.set(comId, () => {
            let dataMaped = mapData(comApiData.staticData, comApiData.fieldMap)
            dataCallBack(dataMaped)
        })
    } else if (comApiData.dataSourceType == "rest") {
        // 存储到map中
        comDataMap.set(comId, () => {
            fetchData(comApiData.restType || "get", comApiData.isSplicing || false, comApiData.restUrl || "").then((data) => {
                let dataMaped = mapData(data, comApiData.fieldMap)
                dataCallBack(mapData(dataMaped, comApiData.fieldMap))
            })
        })
        // 如果已经有当前组件的定时刷新
        comIdMapTimerId.has(comId) && clearTimeout(comIdMapTimerId.get(comId));
        // 需要定时请求
        if (comApiData.restRefreshTime && comApiData.restRefreshTime > 0) {
            // 开启定时刷新
            let timeId = setInterval(() => {
                comDataMap.get(comId)();
            }, comApiData.restRefreshTime * 1000)
            comIdMapTimerId.set(comId, timeId);
        }
    }
    comDataMap.get(comId)();
}


export const unRegisterDataReceiver = (comId: string, ) => {
    if (comDataMap.has(comId)) { comDataMap.delete(comId) }
    if (comIdMapTimerId.has(comId)) {
        clearInterval(comIdMapTimerId.get(comId));
        comIdMapTimerId.delete(comId)
    }
}

// 刷新数据
export const refreshComData = (comId: string) => {
    comDataMap.get(comId)();
}