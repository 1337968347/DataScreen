import { HttpClient } from "../providers/httpclient";
import { DraggableApiData } from "../interfaces";


let comDataMap = new Map<string, Function>();
// 有些动态数据需要定时刷新的
let comIdMapTimerId = new Map<string, number>();


const fetchData = async (restType: "get" | "post", restUrl: string) :Promise<any>=> {
    return await HttpClient.fetch(restType, restUrl, {})
}

export const registerDataReceiver = (comId: string, comApiData: DraggableApiData, dataCallBack: Function) => {

    if (comApiData.dataSourceType == "static") {
        comDataMap.set(comId, () => {
            dataCallBack(comApiData.staticData)
        })
    } else if (comApiData.dataSourceType == "rest") {
        // 存储到map中
        comDataMap.set(comId, () => {
            fetchData(comApiData.restType,comApiData.restUrl).then((data)=>{
                dataCallBack(data)
            })
        })
        // 如果已经有当前组件的定时刷新
        comIdMapTimerId.has(comId) && clearTimeout(comIdMapTimerId.get(comId));
        // 需要定时请求
        if (comApiData.restRefreshTime && comApiData.restRefreshTime >= 0) {
            // 开启定时刷新
            let timeId = setInterval(() => {
                comDataMap.get(comId)();
            }, comApiData.restRefreshTime)
            comIdMapTimerId.set(comId, timeId);
        } 
    }
    comDataMap.get(comId)();
}

export const unRegisterDataReceiver = (comId: string, ) => {
    if(comDataMap.has(comId)){comDataMap.delete(comId)}
    if(comIdMapTimerId.has(comId)){
        clearInterval(comIdMapTimerId.get(comId));
        comIdMapTimerId.delete(comId)
    }
}

