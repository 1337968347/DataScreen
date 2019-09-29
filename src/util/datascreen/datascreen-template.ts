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
            theme: "dark",
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
                    "view": {
                        "x": "56",
                        "y": "52",
                        "w": "589",
                        "h": "263",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
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
                    "view": {
                        "x": "1482",
                        "y": "648",
                        "w": "300",
                        "h": "200",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
                "id": "2b9f1d40-db52-11e9-a61a-cb03a0353118"
            },
            {
                "data": {
                    "nickName": "单张图片",
                    "config": {},
                    "icon": "assets/com-icon/img-icon.png",
                    "view": {
                        "x": "634",
                        "y": "340",
                        "w": "706",
                        "h": "460",
                        "opacity": "0.8",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
                "id": "2d8ae7b0-db52-11e9-a61a-cb03a0353118"
            }
        ]

    },
    {
        scaleImg: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        name: "mobileDemo",
        canvasOption: {
            theme: "purple",
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
                    "view": {
                        "x": "71",
                        "y": "0",
                        "w": "205",
                        "h": "87",
                        "opacity": "0.8",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
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
                    "view": {
                        "x": "19",
                        "y": "539",
                        "w": "309",
                        "h": "207",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
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
                    "view": {
                        "x": "58",
                        "y": "106",
                        "w": "224",
                        "h": "148",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
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
                    "view": {
                        "x": "36",
                        "y": "272",
                        "w": "300",
                        "h": "200",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
                "id": "2b9f1d40-db52-11e9-a61a-cb03a0353118"
            }
        ]

    },
    {
        scaleImg: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        name: "pcDemo2",
        canvasOption: {
            theme: "default",
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
                    "view": {
                        "x": "51",
                        "y": "28",
                        "w": "205",
                        "h": "87",
                        "opacity": "0.8",
                        "deg": "0"
                    }
                },
                "comName": "media-basic-img",
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
                    "view": {
                        "x": "19",
                        "y": "539",
                        "w": "309",
                        "h": "207",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
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
                    "view": {
                        "x": "58",
                        "y": "106",
                        "w": "224",
                        "h": "148",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
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
                    "view": {
                        "x": "64",
                        "y": "269",
                        "w": "300",
                        "h": "200",
                        "opacity": "1",
                        "deg": "0"
                    }
                },
                "comName": "chart-base-line",
                "id": "2b9f1d40-db52-11e9-a61a-cb03a0353118"
            }
        ]

    },
    {
        scaleImg: "https://img.alicdn.com/tfs/TB1ZIX9OVYqK1RjSZLeXXbXppXa-2880-600.png",
        name: "demo1",
        componentsData: [
         {
          "data": {
           "nickName": "折线图堆叠",
           "config": {
            "title": {
             "text": "demo"
            },
            "tooltip": {
             "trigger": "axis"
            },
            "legend": {
             "data": [
              "邮件营销",
              "联盟广告",
              "视频广告",
              "直接访问",
              "搜索引擎"
             ]
            },
            "grid": {
             "left": "3%",
             "right": "4%",
             "bottom": "3%",
             "containLabel": true
            },
            "toolbox": {
             "feature": {
              "saveAsImage": {}
             }
            },
            "xAxis": {
             "type": "category",
             "boundaryGap": false,
             "data": [
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
              "周日"
             ]
            },
            "yAxis": {
             "type": "value"
            },
            "series": [
             {
              "name": "邮件营销",
              "type": "line",
              "stack": "总量",
              "data": [
               120,
               132,
               101,
               134,
               90,
               230,
               210
              ]
             },
             {
              "name": "联盟广告",
              "type": "line",
              "stack": "总量",
              "data": [
               220,
               182,
               191,
               234,
               290,
               330,
               310
              ]
             },
             {
              "name": "视频广告",
              "type": "line",
              "stack": "总量",
              "data": [
               150,
               232,
               201,
               154,
               190,
               330,
               410
              ]
             },
             {
              "name": "直接访问",
              "type": "line",
              "stack": "总量",
              "data": [
               320,
               332,
               301,
               334,
               390,
               330,
               320
              ]
             },
             {
              "name": "搜索引擎",
              "type": "line",
              "stack": "总量",
              "data": [
               820,
               932,
               901,
               934,
               1290,
               1330,
               1320
              ]
             }
            ]
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "44",
            "y": "150",
            "w": "914",
            "h": "487",
            "opacity": "1.00",
            "deg": "0"
           }
          },
          "comName": "chart-line-stack",
          "id": "d34f1dc0-e06f-11e9-ad75-a5560ad09fbc"
         },
         {
          "data": {
           "nickName": "普通饼图",
           "config": {
            "backgroundColor": "#2c343c",
            "title": {
             "text": "Customized Pie",
             "left": "center",
             "top": 20,
             "textStyle": {
              "color": "#ccc"
             }
            },
            "tooltip": {
             "trigger": "item",
             "formatter": "{a} <br/>{b} : {c} ({d}%)"
            },
            "visualMap": {
             "show": false,
             "min": 80,
             "max": 600,
             "inRange": {
              "colorLightness": [
               0,
               1
              ]
             }
            },
            "series": [
             {
              "name": "访问来源",
              "type": "pie",
              "radius": "55%",
              "center": [
               "50%",
               "50%"
              ],
              "data": [
               {
                "value": 235,
                "name": "视频广告"
               },
               {
                "value": 274,
                "name": "联盟广告"
               },
               {
                "value": 310,
                "name": "邮件营销"
               },
               {
                "value": 335,
                "name": "直接访问"
               },
               {
                "value": 400,
                "name": "搜索引擎"
               }
              ],
              "roseType": "radius",
              "label": {
               "normal": {
                "textStyle": {
                 "color": "rgba(255, 255, 255, 0.3)"
                }
               }
              },
              "labelLine": {
               "normal": {
                "lineStyle": {
                 "color": "rgba(255, 255, 255, 0.3)"
                },
                "smooth": 0.2,
                "length": 10,
                "length2": 20
               }
              },
              "itemStyle": {
               "normal": {
                "color": "#c23531",
                "shadowBlur": 200,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
               }
              },
              "animationType": "scale",
              "animationEasing": "elasticOut"
             }
            ]
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "208",
            "y": "770",
            "w": "400",
            "h": "300",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "chart-pie-custom",
          "id": "1c7b26f0-e071-11e9-ad7d-cfff95bd12cd"
         },
         {
          "data": {
           "nickName": "普通饼图",
           "config": {
            "title": {
             "text": "Customized Pie",
             "left": "center",
             "top": 20,
             "textStyle": {
              "color": "#ccc"
             }
            },
            "tooltip": {
             "trigger": "item",
             "formatter": "{a} <br/>{b} : {c} ({d}%)"
            },
            "visualMap": {
             "show": false,
             "min": 80,
             "max": 600,
             "inRange": {
              "colorLightness": [
               0,
               1
              ]
             }
            },
            "series": [
             {
              "name": "访问来源",
              "type": "pie",
              "radius": "55%",
              "center": [
               "50%",
               "50%"
              ],
              "data": [
               {
                "value": 235,
                "name": "视频广告"
               },
               {
                "value": 274,
                "name": "联盟广告"
               },
               {
                "value": 310,
                "name": "邮件营销"
               },
               {
                "value": 335,
                "name": "直接访问"
               },
               {
                "value": 400,
                "name": "搜索引擎"
               }
              ],
              "roseType": "radius",
              "label": {
               "normal": {
                "textStyle": {
                 "color": "rgba(255, 255, 255, 0.3)"
                }
               }
              },
              "labelLine": {
               "normal": {
                "lineStyle": {
                 "color": "rgba(255, 255, 255, 0.3)"
                },
                "smooth": 0.2,
                "length": 10,
                "length2": 20
               }
              },
              "itemStyle": {
               "normal": {
                "color": "#c23531",
                "shadowBlur": 200,
                "shadowColor": "rgba(0, 0, 0, 0.5)"
               }
              },
              "animationType": "scale",
              "animationEasing": "elasticOut"
             }
            ]
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "1177",
            "y": "290",
            "w": "400",
            "h": "300",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "chart-pie-custom",
          "id": "8f604c90-e071-11e9-b9f5-9b097a076145"
         },
         {
          "data": {
           "nickName": "折线图堆叠",
           "config": {
            "title": {
             "text": "biaoti"
            },
            "tooltip": {
             "trigger": "axis"
            },
            "legend": {
             "data": [
              "邮件营销",
              "联盟广告",
              "视频广告",
              "直接访问",
              "搜索引擎"
             ]
            },
            "grid": {
             "left": "3%",
             "right": "4%",
             "bottom": "3%",
             "containLabel": true
            },
            "toolbox": {
             "feature": {
              "saveAsImage": {}
             }
            },
            "xAxis": {
             "type": "category",
             "boundaryGap": false,
             "data": [
              "周一",
              "周二",
              "周三",
              "周四",
              "周五",
              "周六",
              "周日"
             ]
            },
            "yAxis": {
             "type": "value"
            },
            "series": [
             {
              "name": "邮件营销",
              "type": "line",
              "stack": "总量",
              "data": [
               120,
               132,
               101,
               134,
               90,
               230,
               210
              ]
             },
             {
              "name": "联盟广告",
              "type": "line",
              "stack": "总量",
              "data": [
               220,
               182,
               191,
               234,
               290,
               330,
               310
              ]
             },
             {
              "name": "视频广告",
              "type": "line",
              "stack": "总量",
              "data": [
               150,
               232,
               201,
               154,
               190,
               330,
               410
              ]
             },
             {
              "name": "直接访问",
              "type": "line",
              "stack": "总量",
              "data": [
               320,
               332,
               301,
               334,
               390,
               330,
               320
              ]
             },
             {
              "name": "搜索引擎",
              "type": "line",
              "stack": "总量",
              "data": [
               820,
               932,
               901,
               934,
               1290,
               1330,
               1320
              ]
             }
            ]
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "741",
            "y": "703",
            "w": "400",
            "h": "300",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "chart-line-stack",
          "id": "c8efdd40-e071-11e9-b9f5-9b097a076145"
         },
         {
          "data": {
           "nickName": "单张图片",
           "config": {},
           "icon": "assets/com-icon/img-icon.png",
           "view": {
            "x": "1306",
            "y": "67",
            "w": "200",
            "h": "150",
            "opacity": "1.00",
            "deg": "0"
           }
          },
          "comName": "media-basic-img",
          "id": "cdd9cc80-e071-11e9-b9f5-9b097a076145"
         },
         {
          "data": {
           "nickName": "普通柱状图",
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
               120,
               200,
               150,
               80,
               70,
               110,
               130
              ],
              "type": "bar"
             }
            ]
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "1510",
            "y": "94",
            "w": "400",
            "h": "300",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "chart-bar-simple",
          "id": "06c9a550-e073-11e9-a6be-1d0c9e4f5934"
         },
         {
          "data": {
           "nickName": "普通文字",
           "config": {
            "fontSize": 18,
            "fontContent": "content",
            "fontWeight": "normal",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "textAlign": "center"
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "1290",
            "y": "662",
            "w": "427",
            "h": "292",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "text-common",
          "id": "5d8845e0-e078-11e9-be9b-f911a493f25f"
         },
         {
          "data": {
           "nickName": "普通文字",
           "config": {
            "fontSize": 18,
            "fontContent": "content",
            "fontWeight": "normal",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "textAlign": "center"
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "290",
            "y": "118",
            "w": "182",
            "h": "109",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "text-common",
          "id": "4a7420e0-e079-11e9-89e4-a3a607e1b712"
         },
         {
          "data": {
           "nickName": "普通文字",
           "config": {
            "fontSize": 25,
            "fontContent": "content",
            "fontWeight": "normal",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "textAlign": "center"
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "715",
            "y": "0",
            "w": "243",
            "h": "153",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "text-common",
          "id": "28b05ef0-e07a-11e9-9405-15386521428d"
         }
        ],
        canvasOption: {
         "w": "1920",
         "h": "1080",
         "bgc": "#0d2a43",
         "bgi": "",
         "theme": "purple"
        }
    }

]

export { dataScreenTemplateList }