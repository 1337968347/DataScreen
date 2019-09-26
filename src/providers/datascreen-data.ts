import { get, set,remove } from './storage';
import { DataScreen, ComData } from "../interfaces"
import { CanvasConfig } from '../util/canvas/canvas-interface';

export class DataScreenDataController {
    // DataScreen
    async addDataScreen(dataScreen: DataScreen): Promise<void> {
        let id = dataScreen.id;
        await this.addDataScreenId(id);
        await this.setDataScreenComData(id, dataScreen.componentsData)
        await this.setDataScreenCanvasConfig(id, dataScreen.canvasOption);
        delete dataScreen.componentsData;
        delete dataScreen.canvasOption;
        await set(`dataScreen-${id}`, dataScreen);
    }

    async getDataScreen(id: string): Promise<DataScreen> {
        let dataScreen = await this.getDataScreenOptionById(id);
        dataScreen.componentsData = await this.getDataScreenComData(id);
        dataScreen.canvasOption = await this.getDataScreenCanvasConfig(id);
        return dataScreen
    }

    async deleteDataScreen(id: string): Promise<void> {
        await this.deleteDataScreenId(id);
        await this.deleteDataScreenComData(id);
        await this.deleteDataScreenCanvasConfig(id);
        await remove(`dataScreen-${id}`);
    }

    async setDataScreenById(dataScreenId: string, dataScreen: DataScreen): Promise<void> {
        await this.setDataScreenComData(dataScreenId, dataScreen.componentsData)
        await this.setDataScreenCanvasConfig(dataScreenId, dataScreen.canvasOption);
        delete dataScreen.componentsData;
        delete dataScreen.canvasOption;
        await set(`dataScreen-${dataScreenId}`, dataScreen);
    }

    async getDataScreenOptionById(dataScreenId: string): Promise<DataScreen> {
        return await get(`dataScreen-${dataScreenId}`)
    }

    // DataScreen ID
    async addDataScreenId(id: string) {
        let ids = await this.getDataScreenIdList();
        ids = [...ids, id];
        await set("allDataScreenIds", ids)
    }

    async deleteDataScreenId(id: string) {
        let ids = await this.getDataScreenIdList();
        ids = ids.filter((idItem) => {
            return idItem !== id
        });
        await set("allDataScreenIds", ids)
    }

    async getDataScreenIdList(): Promise<string[]> {
        return (await get("allDataScreenIds")) || [];
    }

    // DataSCreen Canvas
    async setDataScreenCanvasConfig(id: string, canvasConfig: CanvasConfig): Promise<void> {
        await set(`canvas-${id}`, canvasConfig);
    }

    async getDataScreenCanvasConfig(id: string): Promise<CanvasConfig> {
        return await get(`canvas-${id}`);
    }

    async deleteDataScreenCanvasConfig(id: string): Promise<void> {
        await remove(`canvas-${id}`);
    }

    // DataScreen ComData
    async setDataScreenComData(id: string, comData: ComData[]): Promise<void> {
        await set(`comData-${id}`, comData);
    }

    async getDataScreenComData(id: string): Promise<ComData[]> {
        return (await get(`comData-${id}`)) || [];
    }

    async deleteDataScreenComData(id: string): Promise<void> {
         await remove(`comData-${id}`);
    }

}

export const DataScreenData = new DataScreenDataController()