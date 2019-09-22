import { CanvasConfig,ComType } from "../../interfaces"

export interface DataScreen{
    canvasOption: CanvasConfig;
    scaleImg?: string;
    name?: string;
    id?: string;
    componentsData?: ComType[]
}