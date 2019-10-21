import { ComponentInitalMap } from "../../interfaces";
const componentTemplateDataMap: ComponentInitalMap = {
    "media-basic-img": {
        nickName: "单张图片",
        config: {

        },
        icon: "assets/com-icon/img-icon.png",
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
        icon: "assets/com-icon/img-icon.png",
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
        icon: "assets/com-icon/img-icon.png",
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
        icon: "assets/com-icon/img-icon.png",
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
        icon: "assets/com-icon/img-icon.png",
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
            fontSize: 25,
            fontContent: "content",
            fontWeight: "normal",
            color: "#ffffff",
            backgroundColor: "transparent",
            textAlign: "center"
        },
        icon: "assets/com-icon/chart-base-line.png",
        view: {
            x: "0",
            y: "0",
            w: "150",
            h: "80",
            opacity: "1",
            deg: "0"
        }
    },
    "table": {
        nickName: "表格",
        api_data: {
            dataSourceType: "rest",
            restType: "get",
            restUrl: "/r40cq",
            restRefreshTime: 0,
            staticData: [
                {
                    key: '1',
                    name: '胡彦斌',
                    age: 32,
                    address: '西湖区湖底公园1号',
                },
                {
                    key: '2',
                    name: '胡彦祖',
                    age: 42,
                    address: '西湖区湖底公园1号',
                },
            ]
        },
        config: {
            backgroundColor: "#ffffff",
            headerColor: "#12ecf0",
            textAlign: "center",
            fontSize: "30",
            color: "#261818",
            borderColor: "#000000",
            borderWidth: 0,
            columns: [
                {
                    title: '姓名',
                    dataIndex: 'name',
                },
                {
                    title: '年龄',
                    dataIndex: 'age',
                },
                {
                    title: '住址',
                    dataIndex: 'address',
                },
            ]
        },
        icon: "assets/com-icon/chart-base-line.png",
        view: {
            x: "0",
            y: "0",
            w: "550",
            h: "400",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-base-line": {
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
        icon: "assets/com-icon/chart-base-line.png",
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
}

export { componentTemplateDataMap }