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
            iframeSrc:"https://www.baidu.com/"
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
        view: {
            x: "0",
            y: "0",
            w: "400",
            h: "300",
            opacity: "1",
            deg: "0"
        }
    },
    "chart-line-stack": {
        nickName: "折线图堆叠",
        config: {
            title: {
                text: 'biaoti'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name: '邮件营销',
                    type: 'line',
                    stack: '总量',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: '联盟广告',
                    type: 'line',
                    stack: '总量',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: '视频广告',
                    type: 'line',
                    stack: '总量',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: '直接访问',
                    type: 'line',
                    stack: '总量',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: '搜索引擎',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
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
    "chart-pie-custom": {
        nickName: "普通饼图",
        config: {
            title: {
                text: 'Customized Pie',
                left: 'center',
                top: 20,
                textStyle: {
                    color: '#ccc'
                }
            },

            tooltip: {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },

            visualMap: {
                show: false,
                min: 80,
                max: 600,
                inRange: {
                    colorLightness: [0, 1]
                }
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '50%'],
                    data: [
                        { value: 335, name: '直接访问' },
                        { value: 310, name: '邮件营销' },
                        { value: 274, name: '联盟广告' },
                        { value: 235, name: '视频广告' },
                        { value: 400, name: '搜索引擎' }
                    ].sort(function (a, b) { return a.value - b.value; }),
                    roseType: 'radius',
                    label: {
                        normal: {
                            textStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            }
                        }
                    },
                    labelLine: {
                        normal: {
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.3)'
                            },
                            smooth: 0.2,
                            length: 10,
                            length2: 20
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: '#c23531',
                            shadowBlur: 200,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    },

                    animationType: 'scale',
                    animationEasing: 'elasticOut',
                    animationDelay: function () {
                        return Math.random() * 200;
                    }
                }
            ]
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
    "chart-bar-simple": {
        nickName: "普通柱状图",
        config: {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar'
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
            restUrl:"/r40cq",
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
            textAlign:"center",
            fontSize:"30",
            color:"#261818",
            borderColor:"#000000",
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
    }
}

export { componentTemplateDataMap }