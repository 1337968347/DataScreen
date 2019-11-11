import { ComponentInitalMap } from "../../interfaces";
const componentTemplateDataMap: ComponentInitalMap = {
    "media-basic-img": {
        nickName: "单张图片",
        config: {

        },
        icon: "icontupian",
        view: {
            x: "200",
            y: "100",
            w: "200",
            h: "150",
            opacity: "1",
            deg: "0"
        }
    },
    "media-border": {
        nickName: "边框",
        config: {

        },
        icon: "iconbiankuang-wai",
        view: {
            x: "200",
            y: "100",
            w: "200",
            h: "150",
            opacity: "1",
            deg: "0"
        }
    },
    "media-iframe": {
        nickName: "Iframe",
        config: {
            iframeSrc: "https://www.baidu.com/"
        },
        icon: "iconiframe",
        view: {
            x: "0",
            y: "0",
            w: "300",
            h: "200",
            opacity: "1",
            deg: "0"
        }
    },
    "media-img-slides": {
        nickName: "轮播图",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "/",
            restRefreshTime: 0,
            staticData: ["https://fanyi.bdstatic.com/static/translation/img/header/logo_40c4f13.svg", "https://swiperjs.com/i/logo.svg"]
        },
        config: {
        },
        icon: "iconlunbotu",
        view: {
            x: "0",
            y: "0",
            w: "300",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "media-video": {
        nickName: "视频",
        config: {
            videoSrc: "https://interactive-examples.mdn.mozilla.net/media/examples/flower.webm"
        },
        icon: "iconvideo",
        view: {
            x: "0",
            y: "0",
            w: "300",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "text-common": {
        nickName: "文字",
        config: {
            fontContent: "content",
            commonTextStyle: {
                textAlign: "center",
                fontWeight: "normal",
                color: "#ffffff",
                fontSize: 25,
            }
        },
        icon: "iconwenben",
        view: {
            x: "0",
            y: "0",
            w: "250",
            h: "50",
            opacity: "1",
            deg: "0"
        }
    },
    "text-timer": {
        nickName: "时间器",
        config: {
            commonTextStyle: {
                textAlign: "center",
                fontWeight: "normal",
                color: "#ffffff",
                fontSize: 20,
            },
            iconStyle: {
                show: true,
                color: "#516fe4",
                fontSize: "37",
                margin: "10"
            },
            timerOption: {
                format: "YYYY年MM月DD日",
                interval: "1000"
            }
        },
        icon: "iconshijianqi",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "80",
            opacity: "1",
            deg: "0"
        }
    },
    "text-number-flop": {
        nickName: "数字翻牌器",
        api_data: {
            fieldMap: [
                { name: "value", mapping: "" },
            ],
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [{ value: 123456 }]
        },
        config: {
            commonTextStyle: {
                textAlign: "center",
                fontWeight: "normal",
                color: "#ffffff",
                fontSize: 20,
            },
        },
        icon: "iconshijianqi",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "80",
            opacity: "1",
            deg: "0"
        }
    },
    "table": {
        nickName: "表格",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [
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
        config: {
            backgroundColor: "#ffffff",
            headerColor: "#12ecf0",
            textAlign: "center",
            fontSize: "30",
            color: "#261818",
            columns: [
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
            commonTextStyle: {
                color: "#ffffff",
                textAlign: "center",
                fontSize: "20"
            },
            tableRowOption: {
                oddBgc: "#003b51",
                evenBgc: "#0a2732"
            },
            tableAllOption: {
                isScroll: true,
                rowNum: "1",
                intervalSecond: "3"
            },
            tableOrderOption: {
                show: true,
                width: "5"
            }
        },
        icon: "iconlunbobiaoge",
        view: {
            x: "0",
            y: "0",
            w: "550",
            h: "400",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-line-base": {
        nickName: "基本折线图",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [
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
            fieldMap: [
                { name: "x(类目)", mapping: "" },
                { name: "y(值)", mapping: "" },
                { name: "s(系列)", mapping: "" },
            ]
        },
        config: {
            textStyle: {
                color: "#ffffff"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    show: false
                }
            },
            tooltip: {},
            series: [{
                type: 'line',
                areaStyle: {}
            }, {
                type: 'line',
                areaStyle: {}
            }]
        },
        icon: "iconjibenzhexiantu",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-bar-base": {
        nickName: "基本柱图",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [
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
            fieldMap: [
                { name: "x(类目)", mapping: "" },
                { name: "y(值)", mapping: "" },
                { name: "s(系列)", mapping: "" },
            ]
        },
        config: {
            textStyle: {
                color: "#ffffff"
            },
            xAxis: {
                type: 'category',
                boundaryGap: false
            },
            yAxis: {
                type: 'value',
                show: false,
            },
            tooltip: {},
            series: [{
                type: 'bar',
                areaStyle: {}
            }]
        },
        icon: "iconjibenzhuzhuangtu",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-bar-vertical": {
        nickName: "多系列柱形图",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [
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
                    "y": "200",
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
            fieldMap: [
                { name: "x(类目)", mapping: "" },
                { name: "y(值)", mapping: "" },
                { name: "s(系列)", mapping: "" },
            ]
        },
        config: {
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
                },
                {
                    "type": "bar"
                },
                {
                    "type": "bar"
                }
            ]
        },
        icon: "iconduoxilieezhuzhuangtu",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-pie-basic": {
        nickName: "基础款饼图",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [
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
            fieldMap: [
                { name: "x(类目)", mapping: "" },
                { name: "y(值)", mapping: "" }
            ]
        },
        config: {
            "textStyle": {
                "color": "#ffffff"
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    label: {
                        normal: {
                            show: true,
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                }
            ]
        },
        icon: "iconbingtu",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-pie-sector": {
        nickName: "环形饼图",
        api_data: {
            dataSourceType: "static",
            restType: "get",
            restUrl: "",
            restRefreshTime: 0,
            staticData: [
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
            fieldMap: [
                { name: "x(类目)", mapping: "" },
                { name: "y(值)", mapping: "" }
            ]
        },
        config: {
            "textStyle": {
                "color": "#ffffff"
            },
            tooltip: {
                trigger: 'item'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['50%', '70%'],
                    label: {
                        normal: {
                            show: true,
                        },
                        emphasis: {
                            show: true,
                            textStyle: {
                                fontSize: '30',
                                fontWeight: 'bold'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                }
            ]
        },
        icon: "iconhuanxingtu",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    }

}




export { componentTemplateDataMap }