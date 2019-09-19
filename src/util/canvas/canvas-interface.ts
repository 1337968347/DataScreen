import { ComType } from "../../interfaces"
export interface CanvasConfig {
    id: string;
    w: string;
    h: string;
    bgc: string;
    bgi: string;
    scaleImg: string;
    componentsData?: ComType[]
}

