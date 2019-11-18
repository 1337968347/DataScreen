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
        "scaleImg": "http://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/86047_0b867e53c1d233ce9fe49d54549a2323.png?date=1573455786132",
        "name": "demo111",
        "componentsData": [
            {
                "data": {
                    "nickName": "普通文字",
                    "config": {
                        "fontSize": "40",
                        "fontContent": "我是标题数据",
                        "fontWeight": "bold",
                        "color": "#ffffff",
                        "backgroundColor": "transparent",
                        "textAlign": "center",
                        "commonTextStyle": {
                            "textAlign": "center",
                            "fontSize": "60",
                            "fontWeight": "bold",
                            "color": "#ffffff"
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "712",
                        "y": "27",
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
                        "bgi": "http://img.alicdn.com/tps/TB1aS9wJFXXXXaHXpXXXXXXXXXX-1380-251.png"
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "383",
                        "y": "-6",
                        "w": "1209",
                        "h": "265",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
                "id": "6cf4ac40-f486-11e9-aea1-2b6c859a81a1"
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
                    "nickName": "边框",
                    "config": {
                        "borderStyle": {}
                    },
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "57",
                        "y": "252",
                        "w": "472",
                        "h": "211",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-border",
                "id": "6369bc70-f94e-11e9-8caa-81565bcc800e"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontSize": 25,
                        "fontContent": "我是标题数据",
                        "fontWeight": "normal",
                        "color": "#ffffff",
                        "backgroundColor": "transparent",
                        "textAlign": "center",
                        "commonTextStyle": {
                            "color": "#f4b738",
                            "fontWeight": "bold",
                            "fontSize": "22",
                            "textAlign": "left"
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "59",
                        "y": "188",
                        "w": "200",
                        "h": "65",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "7860b5c0-f94e-11e9-8caa-81565bcc800e"
            },
            {
                "data": {
                    "nickName": "表格",
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
                            },
                            {
                                "key": "3",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "4",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "5",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "6",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "7",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            }
                        ]
                    },
                    "config": {
                        "backgroundColor": "#ffffff",
                        "headerColor": "#12ecf0",
                        "textAlign": "center",
                        "fontSize": "30",
                        "color": "#261818",
                        "columns": [
                            {
                                "title": "姓名",
                                "dataIndex": "name",
                                "width": 20
                            },
                            {
                                "title": "年龄",
                                "dataIndex": "age",
                                "width": 20
                            },
                            {
                                "title": "住址",
                                "dataIndex": "address",
                                "width": 20
                            }
                        ],
                        "commonTextStyle": {
                            "color": "#ffffff",
                            "textAlign": "center",
                            "fontSize": "20"
                        },
                        "tableRowOption": {
                            "oddBgc": "transparent",
                            "evenBgc": "transparent"
                        },
                        "tableAllOption": {
                            "isScroll": true,
                            "rowNum": "1",
                            "intervalSecond": "3"
                        },
                        "tableOrderOption": {
                            "show": true,
                            "width": "5"
                        },
                        "tableHeaderOption": {
                            "height": "10",
                            "backgroundColor": "rgba(0,0,0,0.2)"
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "67",
                        "y": "261",
                        "w": "447",
                        "h": "186",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "table",
                "id": "c2f8ee90-f94e-11e9-8caa-81565bcc800e"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontSize": 25,
                        "fontContent": "我是标题数据",
                        "fontWeight": "normal",
                        "color": "#ffffff",
                        "backgroundColor": "transparent",
                        "textAlign": "center",
                        "commonTextStyle": {
                            "color": "#f4b738",
                            "fontSize": "25",
                            "fontWeight": "bold"
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "1380",
                        "y": "188",
                        "w": "200",
                        "h": "53",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "c2892050-f94f-11e9-8caa-81565bcc800e"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontSize": 25,
                        "fontContent": "$ 23428304",
                        "fontWeight": "normal",
                        "color": "#ffffff",
                        "backgroundColor": "rgb(80,54,84)",
                        "textAlign": "center",
                        "commonTextStyle": {
                            "fontSize": "50",
                            "color": "#f7e17f",
                            "fontWeight": "bold"
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "771",
                        "y": "154",
                        "w": "356",
                        "h": "177",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "3d997d80-f950-11e9-8caa-81565bcc800e"
            },
            {
                "data": {
                    "nickName": "基本柱图",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "x": "内蒙古",
                                "y": "375",
                                "s": "1"
                            },
                            {
                                "x": "内蒙古",
                                "y": "180",
                                "s": "2"
                            },
                            {
                                "x": "内蒙古",
                                "y": "100",
                                "s": "3"
                            },
                            {
                                "x": "浙江",
                                "y": "200",
                                "s": "1"
                            },
                            {
                                "x": "浙江",
                                "y": "100",
                                "s": "2"
                            },
                            {
                                "x": "浙江",
                                "y": "200",
                                "s": "3"
                            },
                            {
                                "x": "辽宁",
                                "y": "25",
                                "s": "1"
                            },
                            {
                                "x": "辽宁",
                                "y": "125",
                                "s": "2"
                            },
                            {
                                "x": "辽宁",
                                "y": "100",
                                "s": "3"
                            },
                            {
                                "x": "吉林",
                                "y": "190",
                                "s": "1"
                            },
                            {
                                "x": "吉林",
                                "y": "110",
                                "s": "2"
                            },
                            {
                                "x": "吉林",
                                "y": "170",
                                "s": "3"
                            },
                            {
                                "x": "黑龙江",
                                "y": "90",
                                "s": "1"
                            },
                            {
                                "x": "黑龙江",
                                "y": "60",
                                "s": "2"
                            },
                            {
                                "x": "黑龙江",
                                "y": "70",
                                "s": "3"
                            },
                            {
                                "x": "安徽",
                                "y": "240",
                                "s": "1"
                            },
                            {
                                "x": "安徽",
                                "y": "170",
                                "s": "2"
                            },
                            {
                                "x": "安徽",
                                "y": "280",
                                "s": "3"
                            },
                            {
                                "x": "福建",
                                "y": "420",
                                "s": "1"
                            },
                            {
                                "x": "福建",
                                "y": "190",
                                "s": "2"
                            },
                            {
                                "x": "福建",
                                "y": "390",
                                "s": "3"
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
                        "textStyle": {
                            "color": "#ffffff"
                        },
                        "xAxis": {
                            "type": "category",
                            "boundaryGap": false
                        },
                        "yAxis": {
                            "type": "value",
                            "show": false,
                            "axisLine": {},
                            "splitLine": {}
                        },
                        "tooltip": {
                            "show": true
                        },
                        "series": [
                            {
                                "type": "bar",
                                "itemStyle": {
                                    "color": "#26c956"
                                },
                                "name": "系列以"
                            },
                            {
                                "type": "bar",
                                "name": "系列2",
                                "itemStyle": {
                                    "color": "#007ffc"
                                }
                            },
                            {
                                "type": "bar",
                                "name": "",
                                "itemStyle": {
                                    "color": ""
                                }
                            }
                        ],
                        "legend": {
                            "show": false,
                            "textStyle": {
                                "color": "#ffffff"
                            }
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "0",
                        "y": "637",
                        "w": "704",
                        "h": "413",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-bar-base",
                "id": "c1c7ead0-f95d-11e9-918c-0fa9ef280c62"
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
                        "textStyle": {
                            "color": "#ffffff"
                        },
                        "xAxis": {
                            "type": "category",
                            "boundaryGap": false
                        },
                        "yAxis": {
                            "type": "value",
                            "axisLine": {
                                "show": false
                            },
                            "splitLine": {
                                "show": false
                            },
                            "show": false
                        },
                        "tooltip": {},
                        "series": [
                            {
                                "type": "line",
                                "areaStyle": {}
                            },
                            {
                                "type": "line",
                                "areaStyle": {},
                                "lineStyle": {
                                    "color": "#004aff"
                                },
                                "itemStyle": {
                                    "opacity": 1
                                },
                                "label": {
                                    "show": false
                                }
                            }
                        ],
                        "legend": {
                            "show": false
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "742",
                        "y": "577",
                        "w": "520",
                        "h": "436",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-line-base",
                "id": "f7e91dd0-f95f-11e9-8f48-f31e136006fe"
            },
            {
                "data": {
                    "nickName": "基本柱图",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "x": "上海",
                                "y": 23
                            },
                            {
                                "x": "深圳",
                                "y": 13
                            },
                            {
                                "x": "合肥",
                                "y": 2
                            },
                            {
                                "x": "成都",
                                "y": 9
                            },
                            {
                                "x": "安徽",
                                "y": 5
                            },
                            {
                                "x": "北京",
                                "y": 10
                            },
                            {
                                "x": "杭州",
                                "y": 14
                            },
                            {
                                "x": "长沙",
                                "y": 24
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
                        "textStyle": {
                            "color": "#ffffff"
                        },
                        "xAxis": {
                            "type": "category",
                            "boundaryGap": false
                        },
                        "yAxis": {
                            "type": "value",
                            "show": false,
                            "axisLine": {},
                            "splitLine": {}
                        },
                        "tooltip": {},
                        "series": [
                            {
                                "type": "bar",
                                "areaStyle": {}
                            },
                            {
                                "type": "bar",
                                "areaStyle": {}
                            }
                        ],
                        "legend": {
                            "textStyle": {
                                "color": ""
                            }
                        },
                        "tableOrderOption": {},
                        "title": {
                            "text": ""
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "672",
                        "y": "419",
                        "w": "400",
                        "h": "300",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-bar-base",
                "id": "d50a2240-f9ec-11e9-8e14-55b400b2a5a6"
            },
            {
                "data": {
                    "nickName": "基本柱图",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "x": "上海",
                                "y": 23
                            },
                            {
                                "x": "深圳",
                                "y": 13
                            },
                            {
                                "x": "合肥",
                                "y": 2
                            },
                            {
                                "x": "成都",
                                "y": 9
                            },
                            {
                                "x": "安徽",
                                "y": 5
                            },
                            {
                                "x": "北京",
                                "y": 10
                            },
                            {
                                "x": "杭州",
                                "y": 14
                            },
                            {
                                "x": "长沙",
                                "y": 24
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
                        "textStyle": {
                            "color": "#ffffff"
                        },
                        "xAxis": {
                            "type": "category",
                            "boundaryGap": false
                        },
                        "yAxis": {
                            "type": "value",
                            "show": false
                        },
                        "tooltip": {},
                        "series": [
                            {
                                "type": "bar",
                                "areaStyle": {}
                            }
                        ],
                        "title": {
                            "text": ""
                        }
                    },
                    "icon": "assets/com-icon/chart-base-line.png",
                    "view": {
                        "x": "86",
                        "y": "471",
                        "w": "400",
                        "h": "300",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-bar-base",
                "id": "432d5d90-f9ee-11e9-8e14-55b400b2a5a6"
            },
            {
                "data": {
                    "nickName": "时间器",
                    "config": {
                        "commonTextStyle": {
                            "textAlign": "center",
                            "fontWeight": "normal",
                            "color": "#ffffff",
                            "fontSize": 20
                        },
                        "iconStyle": {
                            "show": true,
                            "color": "#516fe4",
                            "fontSize": "37",
                            "margin": "10"
                        },
                        "timerOption": {
                            "format": "YYYY年MM月DD日",
                            "interval": "90"
                        },
                        "backgroundColor": "transparent"
                    },
                    "icon": "iconshijianqi",
                    "view": {
                        "x": "1570",
                        "y": "64",
                        "w": "318",
                        "h": "80",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-timer",
                "id": "03938800-044b-11ea-af97-43d047b2acb2"
            },
            {
                "data": {
                    "nickName": "基础款饼图",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "x": "普货",
                                "y": 5
                            },
                            {
                                "x": "普货",
                                "y": 22
                            },
                            {
                                "x": "泡货",
                                "y": 22
                            },
                            {
                                "x": "设备",
                                "y": 14
                            },
                            {
                                "x": "矿产",
                                "y": 15
                            },
                            {
                                "x": "钢铁",
                                "y": 15
                            },
                            {
                                "x": "建材",
                                "y": 12
                            },
                            {
                                "x": "食品",
                                "y": 12
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
                            }
                        ]
                    },
                    "config": {
                        "textStyle": {
                            "color": "#ffffff"
                        },
                        "tooltip": {
                            "trigger": "item"
                        },
                        "series": [
                            {
                                "name": "访问来源",
                                "type": "pie",
                                "label": {
                                    "normal": {
                                        "show": true
                                    },
                                    "emphasis": {
                                        "show": true,
                                        "textStyle": {
                                            "fontSize": "30",
                                            "fontWeight": "bold"
                                        }
                                    }
                                },
                                "labelLine": {
                                    "normal": {
                                        "show": false
                                    }
                                }
                            }
                        ]
                    },
                    "icon": "iconbingtu",
                    "view": {
                        "x": "1474",
                        "y": "369",
                        "w": "400",
                        "h": "300",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-pie-basic",
                "id": "c48ad8b0-0450-11ea-ac6d-cb78c9ae955f"
            },
            {
                "data": {
                    "nickName": "环形饼图",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
                        "restRefreshTime": 0,
                        "staticData": [
                            {
                                "x": "普货",
                                "y": 5
                            },
                            {
                                "x": "普货",
                                "y": 22
                            },
                            {
                                "x": "泡货",
                                "y": 22
                            },
                            {
                                "x": "设备",
                                "y": 14
                            },
                            {
                                "x": "矿产",
                                "y": 15
                            },
                            {
                                "x": "钢铁",
                                "y": 15
                            },
                            {
                                "x": "建材",
                                "y": 12
                            },
                            {
                                "x": "食品",
                                "y": 12
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
                            }
                        ]
                    },
                    "config": {
                        "textStyle": {
                            "color": "#ffffff"
                        },
                        "tooltip": {
                            "trigger": "item"
                        },
                        "series": [
                            {
                                "name": "访问来源",
                                "type": "pie",
                                "radius": [
                                    "50%",
                                    "70%"
                                ],
                                "label": {
                                    "normal": {
                                        "show": true
                                    },
                                    "emphasis": {
                                        "show": true,
                                        "textStyle": {
                                            "fontSize": "30",
                                            "fontWeight": "bold"
                                        }
                                    }
                                },
                                "labelLine": {
                                    "normal": {
                                        "show": false
                                    }
                                }
                            }
                        ]
                    },
                    "icon": "iconhuanxingtu",
                    "view": {
                        "x": "1445",
                        "y": "720",
                        "w": "400",
                        "h": "300",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-pie-sector",
                "id": "c66a2000-0450-11ea-ac6d-cb78c9ae955f"
            }
        ],
        "canvasOption": {
            "w": "1920",
            "h": "1080",
            "bgc": "#06264e",
            "bgi": "https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/9bd18164f2344101e03d3e9e29af8d15.png",
            "baseUrl": "https://api.myjson.com/bins"
        }
    },
    {
        "scaleImg": "",
        "name": "DashBoard",
        "componentsData": [
            {
                "data": {
                    "nickName": "边框",
                    "config": {
                        "borderStyle": {
                            "color": "#ffffff",
                            "width": "3"
                        },
                        "backgroundColor": "#ffffff"
                    },
                    "icon": "iconbiankuang-wai",
                    "view": {
                        "x": "21",
                        "y": "25",
                        "w": "782",
                        "h": "183",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-border",
                "id": "1447c390-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontContent": "3589",
                        "commonTextStyle": {
                            "textAlign": "center",
                            "fontWeight": "normal",
                            "color": "#000000",
                            "fontSize": "30"
                        },
                        "backgroundColor": "transparent"
                    },
                    "icon": "iconwenben",
                    "view": {
                        "x": "120",
                        "y": "61",
                        "w": "98",
                        "h": "50",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "4afc95f0-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontContent": "今日有效告警数量",
                        "commonTextStyle": {
                            "textAlign": "center",
                            "fontWeight": "normal",
                            "color": "#404040",
                            "fontSize": "15"
                        },
                        "backgroundColor": "transparent"
                    },
                    "icon": "iconwenben",
                    "view": {
                        "x": "119",
                        "y": "107",
                        "w": "135",
                        "h": "42",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "686c4a90-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {},
                    "icon": "icontupian",
                    "view": {
                        "x": "35",
                        "y": "71",
                        "w": "80",
                        "h": "68",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
                "id": "91ba53b0-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {},
                    "icon": "icontupian",
                    "view": {
                        "x": "250",
                        "y": "71",
                        "w": "80",
                        "h": "68",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
                "id": "b3350940-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontContent": "content",
                        "commonTextStyle": {
                            "textAlign": "center",
                            "fontWeight": "normal",
                            "color": "#000000",
                            "fontSize": 25
                        },
                        "backgroundColor": "transparent"
                    },
                    "icon": "iconwenben",
                    "view": {
                        "x": "337",
                        "y": "61",
                        "w": "126",
                        "h": "49",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "c6b73ce0-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "文字",
                    "config": {
                        "fontContent": "今日场景数量",
                        "commonTextStyle": {
                            "textAlign": "center",
                            "fontWeight": "normal",
                            "color": "#404040",
                            "fontSize": "15"
                        },
                        "backgroundColor": "transparent"
                    },
                    "icon": "iconwenben",
                    "view": {
                        "x": "336",
                        "y": "101",
                        "w": "135",
                        "h": "51",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "text-common",
                "id": "dacb0220-09a6-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "边框",
                    "config": {
                        "borderStyle": {},
                        "backgroundColor": "#ffffff",
                        "borderImg": ""
                    },
                    "icon": "iconbiankuang-wai",
                    "view": {
                        "x": "21",
                        "y": "230",
                        "w": "782",
                        "h": "183",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-border",
                "id": "0cefc510-09a7-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "表格",
                    "api_data": {
                        "dataSourceType": "static",
                        "restType": "get",
                        "restUrl": "",
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
                            },
                            {
                                "key": "3",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "4",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "5",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "6",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            },
                            {
                                "key": "7",
                                "name": "胡彦祖",
                                "age": 42,
                                "address": "西湖区湖底公园1号"
                            }
                        ]
                    },
                    "config": {
                        "backgroundColor": "#ffffff",
                        "headerColor": "#12ecf0",
                        "textAlign": "center",
                        "fontSize": "30",
                        "color": "#261818",
                        "columns": [
                            {
                                "title": "姓名",
                                "dataIndex": "name",
                                "width": 20
                            },
                            {
                                "title": "年龄",
                                "dataIndex": "age",
                                "width": 20
                            },
                            {
                                "title": "住址",
                                "dataIndex": "address",
                                "width": 20
                            }
                        ],
                        "commonTextStyle": {
                            "color": "#000000",
                            "textAlign": "center",
                            "fontSize": "15"
                        },
                        "tableRowOption": {
                            "oddBgc": "#eaeaea",
                            "evenBgc": "#ffffff"
                        },
                        "tableAllOption": {
                            "isScroll": true,
                            "rowNum": "3",
                            "intervalSecond": "5"
                        },
                        "tableOrderOption": {
                            "show": true,
                            "width": "5"
                        },
                        "tableHeaderOption": {
                            "height": "10"
                        },
                        "legend": {
                            "show": true
                        }
                    },
                    "icon": "iconlunbobiaoge",
                    "view": {
                        "x": "33",
                        "y": "236",
                        "w": "750",
                        "h": "168",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "table",
                "id": "34d19400-09a7-11ea-bd74-afb80f1b9b90"
            },
            {
                "data": {
                    "nickName": "边框",
                    "config": {
                        "backgroundColor": "#ffffff",
                        "borderStyle": {
                            "width": "2",
                            "color": "#000000"
                        },
                        "borderImg": ""
                    },
                    "icon": "iconbiankuang-wai",
                    "view": {
                        "x": "20",
                        "y": "430",
                        "w": "780",
                        "h": "340",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "media-border",
                "id": "145964e0-09a8-11ea-9163-4b4026d379f6"
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
                        "textStyle": {
                            "color": "#000000"
                        },
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
                                "areaStyle": {
                                    "opacity": 0
                                },
                                "lineStyle": {
                                    "color": "#29a7e9"
                                }
                            },
                            {
                                "type": "line",
                                "areaStyle": {
                                    "opacity": 0
                                },
                                "lineStyle": {
                                    "color": "#15e89f"
                                }
                            }
                        ],
                        "legend": {
                            "show": false
                        },
                        "tableOrderOption": {
                            "show": false
                        },
                        "title": {
                            "text": "有效告警识别"
                        }
                    },
                    "icon": "iconjibenzhexiantu",
                    "view": {
                        "x": "33",
                        "y": "460",
                        "w": "750",
                        "h": "300",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-line-base",
                "id": "bd86fbf0-09a7-11ea-9163-4b4026d379f6"
            }
        ],
        "canvasOption": {
            "w": "840",
            "h": "1380",
            "bgc": "#d7d7d7",
            "bgi": "",
            "baseUrl": "https://api.myjson.com/bins"
        }
    }


]

export { dataScreenTemplateList }