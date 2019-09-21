import { ComponentInitalMap } from "../../interfaces";
const componentDefaultDataMap: ComponentInitalMap = {
    "media-basic-img": {
        nickName: "单张图片",
        config: {},
        icon: "assets/com-icon/img-icon.png",
        comName: "单张图片",
        view: {
            x: "200",
            y: "100",
            w: "200",
            h: "150",
            opacity: "0.8",
            deg: "0"
        }
    },
    "chart-base-line": {
        nickName: "基本折线图",
        config: {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: 'line'
            }]
        },
        icon: "assets/com-icon/chart-base-line.png",
        comName: "基本折线图",
        view: {
            x: "0",
            y: "0",
            w: "300",
            h: "200",
            opacity: "1",
            deg: "0"
        }
    }
}

export { componentDefaultDataMap}