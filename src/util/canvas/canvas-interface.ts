import { ComType } from "../../interfaces"
export interface CanvasConfig {
    w: string;
    h: string;
    bgc: string;
    bgi: string;
    name?: string;
    id?: string;
    scaleImg?: string;
    componentsData?: ComType[]
}

