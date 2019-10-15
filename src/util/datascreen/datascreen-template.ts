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
        "scaleImg": "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        "name": "rest接口测试",
        "componentsData": [
            {
                "data": {
                    "nickName": "边框",
                    "config": {
                        "backgroundColor": "",
                        "borderWidth": "4"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "1293",
                        "y": "502",
                        "w": "617",
                        "h": "578",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-border",
                "id": "1492ba00-eef1-11e9-8b57-23b03d6077c5"
            },
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {
                        "bgi": "https://img.alicdn.com/tps/TB1Pg3pPXXXXXcxXpXXXXXXXXXX-1920-1080.gif"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "566",
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
                    "nickName": "边框",
                    "config": {
                        "backgroundColor": "",
                        "borderWidth": "25",
                        "borderColor": "",
                        "borderImg": "border-2",
                        "textAlign": "border-2"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "0",
                        "y": "415",
                        "w": "1025",
                        "h": "665",
                        "opacity": "1.00",
                        "deg": "0"
                    }
                },
                "comName": "media-border",
                "id": "304bf860-ebf9-11e9-8e1f-5f48e7622676"
            },
            {
                "data": {
                    "nickName": "普通文字",
                    "config": {
                        "fontSize": "40",
                        "fontContent": "农机数据展示",
                        "fontWeight": "bold",
                        "color": "#ffffff",
                        "backgroundColor": "transparent",
                        "textAlign": "center"
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "799",
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
                    "nickName": "表格",
                    "api_data": {
                        "dataSourceType": "static",
                        "staticData": [
                            {
                                "key": "1",
                                "name": "胡彦斌",
                                "age": 32,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "2",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            }
                        ],
                        "restUrl": "/j0sk2",
                        "restType": "get",
                        "restRefreshTime": 1000
                    },
                    "config": {
                        "backgroundColor": "#ffffff",
                        "headerColor": "#12a3f0",
                        "textAlign": "center",
                        "fontSize": "20",
                        "color": "#261818",
                        "borderColor": "#000000",
                        "borderWidth": "0",
                        "columns": [
                            {
                                "title": "姓名",
                                "dataIndex": "name"
                            },
                            {
                                "title": "年龄",
                                "dataIndex": "age"
                            },
                            {
                                "title": "住址",
                                "dataIndex": "address"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "22",
                        "y": "521",
                        "w": "990",
                        "h": "542",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "table",
                "id": "05ac0270-eb0a-11e9-a5c2-fd2454f79480"
            },
            {
                "data": {
                    "nickName": "普通文字",
                    "config": {
                        "fontSize": "40",
                        "fontContent": "西湖区调查",
                        "fontWeight": "bold",
                        "color": "#ffffff",
                        "backgroundColor": "transparent",
                        "textAlign": "left"
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "26",
                        "y": "425",
                        "w": "286",
                        "h": "101",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "5d8845e0-e078-11e9-be9b-f911a493f25f"
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
                        "restUrl": "/r40cq",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "key": "1",
                                "name": "胡彦斌",
                                "age": 32,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "2",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            }
                        ]
                    },
                    "config": {
                        "title": {},
                        "xAxis": {
                            "type": "category"
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "1415",
                        "y": "616",
                        "w": "400",
                        "h": "300",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
                "id": "77296420-ef0f-11e9-9333-7ba77df8c3fd"
            }
        ],
        "canvasOption": {
            "w": "1920",
            "h": "1080",
            "bgc": "#06264e",
            "bgi": "https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/51182f91cfa0fd0b3c8754d7ca23e877.png",
            "theme": "default",
            "baseUrl": "https://api.myjson.com/bins"
        }
    }

]

export { dataScreenTemplateList }