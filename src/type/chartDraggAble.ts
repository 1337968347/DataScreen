export class ChartDraggAble {
    width: string;
    height: string;
    top: string;
    left: string;
    echartData: EchartOptionData;
    zIndex: number;
}
class EchartOptionData{
    [optionName: string]: any
}