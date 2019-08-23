import { Component, State, Event, EventEmitter, h } from '@stencil/core';
import { ChartDraggAble } from "../../type/chartDraggAble"

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @Event() popover: EventEmitter;
    @State() mockData: ChartDraggAble[] = [
        {
            width: "300px",
            height: "300px",
            top: "0px",
            left: "0px",
            echartData: {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                        type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                legend: {
                    data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎', '百度', '谷歌', '必应', '其他']
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis: [
                    {
                        type: 'category',
                        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '直接访问',
                        type: 'bar',
                        data: [320, 332, 301, 334, 390, 330, 320]
                    },
                    {
                        name: '邮件营销',
                        type: 'bar',
                        stack: '广告',
                        data: [120, 132, 101, 134, 90, 230, 210]
                    },
                    {
                        name: '联盟广告',
                        type: 'bar',
                        stack: '广告',
                        data: [220, 182, 191, 234, 290, 330, 310]
                    },
                    {
                        name: '视频广告',
                        type: 'bar',
                        stack: '广告',
                        data: [150, 232, 201, 154, 190, 330, 410]
                    },
                    {
                        name: '搜索引擎',
                        type: 'bar',
                        data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                        markLine: {
                            lineStyle: {
                                normal: {
                                    type: 'dashed'
                                }
                            },
                            data: [
                                [{ type: 'min' }, { type: 'max' }]
                            ]
                        }
                    },
                    {
                        name: '百度',
                        type: 'bar',
                        barWidth: 5,
                        stack: '搜索引擎',
                        data: [620, 732, 701, 734, 1090, 1130, 1120]
                    },
                    {
                        name: '谷歌',
                        type: 'bar',
                        stack: '搜索引擎',
                        data: [120, 132, 101, 134, 290, 230, 220]
                    },
                    {
                        name: '必应',
                        type: 'bar',
                        stack: '搜索引擎',
                        data: [60, 72, 71, 74, 190, 130, 110]
                    },
                    {
                        name: '其他',
                        type: 'bar',
                        stack: '搜索引擎',
                        data: [62, 82, 91, 84, 109, 110, 120]
                    }
                ]
            },
            zIndex: 1
        },
    ]

    componentDidLoad() {
    }

    popoverThemeSelectBox() {
        this.popover.emit({ component: 'popover-theme' });
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="primary">
                    <ion-buttons slot="start" class="header-buttons">
                        <ion-button fill="outline" class="header-btn">
                            <div class="btn-container">
                                <ion-icon name="stats"></ion-icon>
                                <span>常规图表</span>
                            </div>
                        </ion-button>

                        <ion-button fill="outline" class="header-btn">
                            <div class="btn-container">
                                <ion-icon name="brush"></ion-icon>
                                <span>文字</span>
                            </div>
                        </ion-button>

                        <ion-button fill="outline" class="header-btn">
                            <div class="btn-container">
                                <ion-icon name="image"></ion-icon>
                                <span>图片</span>
                            </div>
                        </ion-button>

                        <ion-button fill="outline" class="header-btn">
                            <div class="btn-container">
                                <ion-icon name="square-outline"></ion-icon>
                                <span>图形</span>
                            </div>
                        </ion-button>

                        <ion-button fill="outline" class="header-btn">
                            <div class="btn-container">
                                <ion-icon name="add-circle-outline"></ion-icon>
                                <span>拓展</span>
                            </div>
                        </ion-button>

                    </ion-buttons>
                    <ion-buttons slot="end" class="header-buttons">
                        <ion-button color="secondary" fill="outline" class="header-btn" onClick={() => { this.popoverThemeSelectBox() }}>
                            <div class="btn-container">
                                <ion-icon name="color-palette"></ion-icon>
                                <span>主题</span>
                            </div>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                <div class="datascreen-box">
                    <div class="datascreen-edit-box">
                        <div class="datascreen-edit-container">
                            <cy-draggable-canvas style={{ transform: "scale(1)" }}>
                                {this.mockData.map((chartDarggable) =>
                                    <cy-draggable-chart
                                        chartDraggableoption={chartDarggable}
                                        canModify={true}
                                    ></cy-draggable-chart>
                                )}
                            </cy-draggable-canvas>
                        </div>
                        <div class="datascreen-edit-footer">

                        </div>
                    </div>
                    <div class="datascreen-setting-box">
                        <cy-datascreen-setting></cy-datascreen-setting>
                    </div>
                </div>
            </ion-content>
        ];
    }
}
