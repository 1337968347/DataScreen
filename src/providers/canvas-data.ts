import { get,} from './storage';

export class canvasDataController {

    async getCanvasIdList(): Promise<string[]> {
        return get("allCanvasIds")
    }

    async getCanvasDataList(): Promise<any> {
        let allCanvasIdList = await this.getCanvasIdList();
        let allCanvasDataList = allCanvasIdList.map(async (id) => { 
            return await get("canvas-data-" + id) 
        })
        console.log("getAllKey")
        return allCanvasDataList
    }
}