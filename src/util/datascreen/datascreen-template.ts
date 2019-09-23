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

        scaleImg: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        name: "pcDemo",
        canvasOption: {
            w: "1920",
            h: "1080",
            bgc: "#0d2111",
            bgi: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        },
        componentsData: [
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "56",
                        "y": "52",
                        "w": "589",
                        "h": "263",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "098cdfe0-dad4-11e9-a61e-03cc6aa3f385"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "1482",
                        "y": "648",
                        "w": "300",
                        "h": "200",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "2b9f1d40-db52-11e9-a61a-cb03a0353118"
            },
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {},
                    "icon": "assets/com-icon/img-icon.png",
                    "comName": "单张图片",
                    "view": {
                        "x": "634",
                        "y": "340",
                        "w": "706",
                        "h": "460",
                        "opacity": "0.8",
                        "deg": "0"
                    }
                },
                "ComData": "media-basic-img",
                "id": "2d8ae7b0-db52-11e9-a61a-cb03a0353118"
            }
        ]

    },
    {
        scaleImg: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        name: "mobileDemo",
        canvasOption: {
            w: "375",
            h: "812",
            bgc: "#0b4c84",
            bgi: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        },
        componentsData: [
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {
                        "bgi": "https://fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "comName": "单张图片",
                    "view": {
                        "x": "71",
                        "y": "0",
                        "w": "205",
                        "h": "87",
                        "opacity": "0.8",
                        "deg": "0"
                    }
                },
                "ComData": "media-basic-img",
                "id": "2d8ae7b0-db52-11e9-a61a-cb03a0353118"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "19",
                        "y": "539",
                        "w": "309",
                        "h": "207",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "5f5eb4b0-dc74-11e9-8c89-a32b8ca97c4a"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "58",
                        "y": "106",
                        "w": "224",
                        "h": "148",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "098cdfe0-dad4-11e9-a61e-03cc6aa3f385"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "36",
                        "y": "272",
                        "w": "300",
                        "h": "200",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "2b9f1d40-db52-11e9-a61a-cb03a0353118"
            }
        ]

    },
    {
        scaleImg: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        name: "pcDemo2",
        canvasOption: {
            "w": "375",
            "h": "812",
            "bgc": "#25fc0d",
            "bgi": "",
        },
        componentsData: [
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {
                        "bgi": "https://fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "comName": "单张图片",
                    "view": {
                        "x": "51",
                        "y": "28",
                        "w": "205",
                        "h": "87",
                        "opacity": "0.8",
                        "deg": "0"
                    }
                },
                "ComData": "media-basic-img",
                "id": "2d8ae7b0-db52-11e9-a61a-cb03a0353118"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "19",
                        "y": "539",
                        "w": "309",
                        "h": "207",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "5f5eb4b0-dc74-11e9-8c89-a32b8ca97c4a"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "58",
                        "y": "106",
                        "w": "224",
                        "h": "148",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "098cdfe0-dad4-11e9-a61e-03cc6aa3f385"
            },
            {
                "data": {
                    "nickName": "基本折线图",
                    "config": {
                        "xAxis": {
                            "type": "category",
                            "data": [
                                "Mon",
                                "Tue",
                                "Wed",
                                "Thu",
                                "Fri",
                                "Sat",
                                "Sun"
                            ]
                        },
                        "yAxis": {
                            "type": "value"
                        },
                        "series": [
                            {
                                "data": [
                                    820,
                                    932,
                                    901,
                                    934,
                                    1290,
                                    1330,
                                    1320
                                ],
                                "type": "line"
                            }
                        ]
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "comName": "基本折线图",
                    "view": {
                        "x": "64",
                        "y": "269",
                        "w": "300",
                        "h": "200",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "ComData": "chart-base-line",
                "id": "2b9f1d40-db52-11e9-a61a-cb03a0353118"
            }
        ]

    }


]

export { dataScreenTemplateList }