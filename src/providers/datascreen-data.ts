import { get, set } from './storage';
import { DataScreen, ComData } from "../interfaces"
import { CanvasConfig } from '../util/canvas/canvas-interface';

export class DataScreenDataController {
    // DataScreen
    async addDataScreen(dataScreen: DataScreen): Promise<void> {
        let id = dataScreen.id;
        await this.setDataScreenId(id);
        await this.setDataScreenComData(id, dataScreen.componentsData)
        await this.setDataScreenCanvasConfig(id, dataScreen.canvasOption);
        delete dataScreen.componentsData;
        delete dataScreen.canvasOption;
        await set(`dataScreen-${id}`, dataScreen);
    }

    async getDataScreenById(dataScreenId: string): Promise<DataScreen> {
        return await get(`dataScreen-${dataScreenId}`)
    }

    // DataScreen ID
    async setDataScreenId(id: string) {
        let ids = await this.getDataScreenIdList();
        ids = [...ids, id];
        await set("allDataScreenIds", ids)
    }

    async getDataScreenIdList(): Promise<string[]> {
        return (await get("allDataScreenIds"))||[];
    }

    // DataSCreen Canvas
    async setDataScreenCanvasConfig(id: string, canvasConfig: CanvasConfig): Promise<void> {
        await set(`canvas-${id}`, canvasConfig);
    }

    async getDataScreenCanvasConfig(id: string): Promise<CanvasConfig> {
        return await get(`canvas-${id}`);
    }

    // DataScreen ComData
    async setDataScreenComData(id: string, comData: ComData[]): Promise<void> {
        await set(`comData-${id}`, comData);
    }

    async getDataScreenComData(id: string): Promise<ComData[]> {
        return (await get(`comData-${id}`)) ||[];
    }

}

export const DataScreenData = new DataScreenDataController()