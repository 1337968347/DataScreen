import { CanvasConfig,ComData } from "../../interfaces"

export interface DataScreen{
    canvasOption: CanvasConfig;
    scaleImg?: string;
    name?: string;
    id?: string;
    componentsData?: ComData[]
}