import { DataScreen } from "../../interfaces";
import { canvasDefaultConfig } from "../canvas/canvas-defaultdata"
const dataScreenTemplateList: DataScreen[] = [
    {
        scaleImg: "",
        name: "空白",
        canvasOption: canvasDefaultConfig,
        componentsData: []
    },
    {
        "scaleImg": "",
        "name": "demo",
        "componentsData": [
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {
                        "bgi": "https://img.alicdn.com/tps/TB1Pg3pPXXXXXcxXpXXXXXXXXXX-1920-1080.gif"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "484",
                        "y": "0",
                        "w": "932",
                        "h": "232",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
                "id": "34b51220-ee5a-11e9-a931-b7a23d1c8c60"
            },
            {
                "data": {
                    "nickName": "普通文字",
                    "config": {
                        "fontSize": "40",
                        "fontContent": "数据展示",
                        "fontWeight": "bold",
                        "color": "#ffffff",
                        "backgroundColor": "transparent",
                        "textAlign": "center"
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "715",
                        "y": "0",
                        "w": "466",
                        "h": "121",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "28b05ef0-e07a-11e9-9405-15386521428d"
            },
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {
                        "bgi": "https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/8a4accd1623d48c7d77b7d0603dea1f2.png"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "-10",
                        "y": "144",
                        "w": "1920",
                        "h": "15",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
                "id": "8dde7880-ee5c-11e9-a931-b7a23d1c8c60"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "x": "00",
                                "y": 75,
                                "s": "1"
                            },
                            {
                                "x": "00",
                                "y": 80,
                                "s": "2"
                            },
                            {
                                "x": "03",
                                "y": 100,
                                "s": "1"
                            },
                            {
                                "x": "03",
                                "y": 100,
                                "s": "2"
                            },
                            {
                                "x": "06",
                                "y": 125,
                                "s": "1"
                            },
                            {
                                "x": "06",
                                "y": 150,
                                "s": "2"
                            },
                            {
                                "x": "09",
                                "y": 290,
                                "s": "1"
                            },
                            {
                                "x": "09",
                                "y": 210,
                                "s": "2"
                            },
                            {
                                "x": "12",
                                "y": 390,
                                "s": "1"
                            },
                            {
                                "x": "12",
                                "y": 360,
                                "s": "2"
                            },
                            {
                                "x": "16",
                                "y": 690,
                                "s": "1"
                            },
                            {
                                "x": "16",
                                "y": 610,
                                "s": "2"
                            },
                            {
                                "x": "19",
                                "y": 990,
                                "s": "1"
                            },
                            {
                                "x": "19",
                                "y": 960,
                                "s": "2"
                            },
                            {
                                "x": "21",
                                "y": 1190,
                                "s": "1"
                            },
                            {
                                "x": "21",
                                "y": 1110,
                                "s": "2"
                            },
                            {
                                "x": "23",
                                "y": 1290,
                                "s": "1"
                            },
                            {
                                "x": "23",
                                "y": 1260,
                                "s": "2"
                            },
                            {
                                "x": "24",
                                "y": 2190,
                                "s": "1"
                            },
                            {
                                "x": "24",
                                "y": 2260,
                                "s": "2"
                            }
                        ],
                        "fieldMap": [
                            {
                                "name": "x(类目)",
                                "mapping": ""
                            },
                            {
                                "name": "y(值)",
                                "mapping": ""
                            },
                            {
                                "name": "s(系列)",
                                "mapping": ""
                            }
                        ]
                    },
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "boundaryGap": false
                        },
                        "yAxis": {
                            "type": "value",
                            "axisLine": {
                                "show": false
                            }
                        },
                        "tooltip": {},
                        "series": [
                            {
                                "type": "line",
                                "areaStyle": {}
                            },
                            {
                                "type": "line",
                                "areaStyle": {}
                            }
                        ],
                        "textStyle": {
                            "color": "#fff6f6",
                            "fontFamily": "Courier New"
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "473",
                        "y": "274",
                        "w": "1004",
                        "h": "663",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
                "id": "8cb7ca30-f3eb-11e9-827d-632c462eb18d"
            }
        ],
        "canvasOption": {
            "w": "1920",
            "h": "1080",
            "bgc": "#06264e",
            "bgi": "https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/51182f91cfa0fd0b3c8754d7ca23e877.png",
            "baseUrl": "https://api.myjson.com/bins"
        }
    }


]

export { dataScreenTemplateList }