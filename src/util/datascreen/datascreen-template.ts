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
        "name": "demoTemplate",
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
           "nickName": "单张图片",
           "config": {
            "bgi": "http://img.alicdn.com/tps/TB1aS9wJFXXXXaHXpXXXXXXXXXX-1380-251.png"
           },
           "icon": "assets/com-icon/img-icon.png",
           "view": {
            "x": "341",
            "y": "0",
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
           "nickName": "普通文字",
           "config": {
            "fontSize": "40",
            "fontContent": "数据展示",
            "fontWeight": "bold",
            "color": "#ffffff",
            "backgroundColor": "transparent",
            "textAlign": "center",
            "commonTextStyle": {
             "textAlign": "center",
             "fontSize": "50",
             "fontWeight": "bold",
             "color": "#ffffff"
            }
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "756",
            "y": "39",
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
            "legend": {},
            "tableOrderOption": {},
            "textStyle": {
             "color": ""
            },
            "title": {
             "text": ""
            }
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "0",
            "y": "522",
            "w": "833",
            "h": "558",
            "opacity": "1",
            "deg": "0"
           }
          },
          "comName": "chart-base-line",
          "id": "ed242df0-f490-11e9-ac9b-75b19f5f0825"
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
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
              "address": "西湖区湖底公园1号"
             },
             {
              "key": "2",
              "name": "胡彦祖",
              "age": 42,
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
            "backgroundColor": "#ffffff",
            "headerColor": "#12ecf0",
            "textAlign": "center",
            "fontSize": "30",
            "color": "#261818",
            "borderColor": "#000000",
            "borderWidth": 0,
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
            ],
            "commonTextStyle": {
             "fontSize": "20",
             "textAlign": "center",
             "fontWeight": "lighter",
             "color": "#ffffff"
            },
            "borderStyle": {
             "color": "",
             "width": "30"
            },
            "tableHeaderOption": {
             "backgroundColor": "",
             "height": "10"
            },
            "tableRowOption": {
             "oddBgc": "#003b51",
             "evenBgc": "#0a2732"
            },
            "yAxis": {},
            "tableOrderOption": {
             "show": true,
             "width": "5"
            },
            "legend": {
             "show": true
            },
            "tableOption": {
             "rowNum": "4",
             "isScroll": true
            },
            "ScrollOption": {
             "isScroll": true,
             "rowNum": "4"
            },
            "tableAllOption": {
             "rowNum": "4",
             "isScroll": true,
             "intervalSecond": "3"
            }
           },
           "icon": "assets/com-icon/chart-base-line.png",
           "view": {
            "x": "1000",
            "y": "417",
            "w": "910",
            "h": "662",
            "opacity": "1.00",
            "deg": "0"
           }
          },
          "comName": "table",
          "id": "3ad17880-f49d-11e9-bda7-590109eee0db"
         }
        ],
        "canvasOption": {
         "w": "1920",
         "h": "1080",
         "bgc": "#06264e",
         "bgi": "https://datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/9bd18164f2344101e03d3e9e29af8d15.png",
         "baseUrl": "https://api.myjson.com/bins"
        }
       }


]

export { dataScreenTemplateList }