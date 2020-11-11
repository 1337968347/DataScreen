import { h, FunctionalComponent } from "@stencil/core";
import { alertController } from "@ionic/core";
import _ from "lodash";
import { comConfig } from "./component-interface";
import { DragComOption } from "../../interfaces";

const comConfigMap: { [comName: string]: comConfig[] } = {
  "media-basic-img": ["bgi"],
  "media-img-slides": ["swiperAutoTime"],
  "media-iframe": ["iframeSrc"],
  "media-border": ["backgroundColor", "borderStyle", "borderImg"],
  "media-video": ["videoSrc"],

  "text-common": ["commonTextStyle", "fontContent"],
  "text-timer": ["commonTextStyle", "iconStyle", "timerOption"],
  "text-number-flop": ["commonTextStyle"],

  table: [
    "columns",
    "tableAllOption",
    "tableHeaderOption",
    "tableRowOption",
    "tableOrderOption",
    "commonTextStyle",
  ],
  // 中间那个是series的type
  "chart-line-base": [
    "textStyle",
    "title",
    "xAxis",
    "yAxis",
    "legend",
    "tooltip",
    "series",
  ],
  "chart-bar-base": [
    "textStyle",
    "title",
    "xAxis",
    "yAxis",
    "legend",
    "tooltip",
    "series",
  ],
  "chart-bar-vertical": [
    "textStyle",
    "title",
    "xAxis",
    "yAxis",
    "legend",
    "tooltip",
    "series",
  ],
  "chart-pie-basic": ["textStyle", "title", "legend", "tooltip", "series"],
  "chart-pie-sector": ["textStyle", "title", "legend", "tooltip", "series"],
};

interface RenderComSettingProps {
  comType: string;
  comData: DragComOption;
  handleComConfigChange: Function;
}
const RenderComSetting: FunctionalComponent<RenderComSettingProps> = ({
  comType,
  comData,
  handleComConfigChange,
}) => (
  <div>
    {comConfigMap[comType].map((configName) =>
      RenderSettingItem(configName, comData, handleComConfigChange)
    )}
  </div>
);

const RenderSettingItem = (
  configName: comConfig,
  comData: DragComOption,
  handleComConfigChange: Function
) => {
  const addNewTableColumn = async () => {
    const alert = await alertController.create({
      header: "新增",
      inputs: [
        {
          type: "text",
          placeholder: "名称",
          name: "title",
        },
        {
          type: "text",
          placeholder: "dataIndex",
          name: "dataIndex",
        },
      ],
      buttons: [
        {
          text: "取消",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "确定",
          handler: (e) => {
            handleComConfigChange("config.columns", [
              ...comData.config.columns,
              e,
            ]);
          },
        },
      ],
    });
    await alert.present();
  };

  const handleTableRowEdit = async (row, rowIndex) => {
    const alert = await alertController.create({
      header: "编辑",
      inputs: [
        {
          type: "text",
          placeholder: "名称",
          name: "title",
          value: row.title || "",
        },
        {
          type: "text",
          placeholder: "dataIndex",
          name: "dataIndex",
          value: row.dataIndex || "",
        },
        {
          type: "number",
          placeholder: "宽度百分比",
          name: "width",
          value: row.width || "",
        },
      ],
      buttons: [
        {
          text: "取消",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {},
        },
        {
          text: "确定",
          handler: (e) => {
            handleComConfigChange(
              "config.columns",
              comData.config.columns.map((column, index) => {
                if (index == rowIndex) {
                  return e;
                } else {
                  return column;
                }
              })
            );
          },
        },
      ],
    });
    await alert.present();
  };

  const handleComTableColumnChange = async (row) => {
    const alert = await alertController.create({
      header: "删除",
      message: `确定要删除 ${row.title}？`,
      buttons: [
        {
          text: "取消",
          role: "cancel",
        },
        {
          text: "确定",
          handler: () => {
            handleComConfigChange(
              "config.columns",
              comData.config.columns.filter((column) => {
                return column.dataIndex !== row.dataIndex;
              })
            );
          },
        },
      ],
    });
    await alert.present();
  };

  const TableColumns = [
    {
      title: "名称",
      dataIndex: "title",
    },
    {
      title: "dataIndex",
      dataIndex: "dataIndex",
    },
    {
      title: "宽度",
      dataIndex: "width",
    },
    {
      title: "操作",
      dataIndex: "oper",
      render: (row, rowIndex) => (
        <span>
          <ion-button
            fill="clear"
            onClick={() => {
              handleTableRowEdit(row, rowIndex);
            }}
          >
            编辑
          </ion-button>
          <ion-button
            fill="clear"
            onClick={() => {
              handleComTableColumnChange(row);
            }}
          >
            删除
          </ion-button>
        </span>
      ),
    },
  ];
  switch (configName) {
    case "bgi":
      return (
        <div>
          <ion-row>
            <ion-col size="4">图片地址</ion-col>
            <ion-col size="8">
              <ion-input
                clearInput
                debounce={1500}
                value={comData.config.bgi}
                onIonChange={(e) => {
                  handleComConfigChange("config.bgi", e.detail.value);
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          ,
          <ion-row>
            <ion-col size="4"></ion-col>
            <ion-col size="8">
              <cy-lazy-img
                isLazy={false}
                defaultImg="../../assets/image/img-default.png"
                style={{ height: "100px", "object-fit": "cover" }}
                src={comData.config.bgi}
              ></cy-lazy-img>
            </ion-col>
          </ion-row>
        </div>
      );
    case "commonTextStyle":
      return (
        <cy-item-extend header="文本样式">
          <ion-row>
            <ion-col size="4">文本颜色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.commonTextStyle.color", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.commonTextStyle.color",
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={_.get(comData, "config.commonTextStyle.color", "")}
                onChange={(e) => {
                  handleComConfigChange(
                    "config.commonTextStyle.color",
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">字体大小</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                value={_.get(comData, "config.commonTextStyle.fontSize", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.commonTextStyle.fontSize",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">字体粗细</ion-col>
            <ion-col size="8">
              <ion-select
                value={_.get(comData, "config.commonTextStyle.fontWeight", "")}
                interface="popover"
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.commonTextStyle.fontWeight",
                    e.detail.value
                  );
                }}
              >
                <ion-select-option value="normal">normal</ion-select-option>
                <ion-select-option value="bold">bold</ion-select-option>
                <ion-select-option value="bolder">bolder</ion-select-option>
                <ion-select-option value="lighter">lighter</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">文字对齐</ion-col>
            <ion-col size="8">
              <ion-select
                value={_.get(comData, "config.commonTextStyle.textAlign", "")}
                interface="popover"
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.commonTextStyle.textAlign",
                    e.detail.value
                  );
                }}
              >
                <ion-select-option value="center">center</ion-select-option>
                <ion-select-option value="left">left</ion-select-option>
                <ion-select-option value="right">right</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "iconStyle":
      return (
        <cy-item-extend header="图标样式">
          <ion-row>
            <ion-col size="4">显示</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={_.get(comData, "config.iconStyle.show", false)}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.iconStyle.show",
                    e.detail.checked
                  );
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">图标颜色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.iconStyle.color", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.iconStyle.color",
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={_.get(comData, "config.iconStyle.color", "")}
                onChange={(e) => {
                  handleComConfigChange(
                    "config.iconStyle.color",
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">图标大小</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                value={_.get(comData, "config.iconStyle.fontSize", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.iconStyle.fontSize",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">边距</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                value={_.get(comData, "config.iconStyle.margin", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.iconStyle.margin",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "fontContent":
      return (
        <ion-row>
          <ion-col size="4">内容</ion-col>
          <ion-col size="8">
            <ion-input
              clearInput
              debounce={1500}
              value={comData.config.fontContent}
              onIonChange={(e) => {
                handleComConfigChange("config.fontContent", e.detail.value);
              }}
            ></ion-input>
          </ion-col>
        </ion-row>
      );
    case "backgroundColor":
      return (
        <ion-row>
          <ion-col size="4">背景颜色</ion-col>
          <ion-col size="8">
            <ion-input
              debounce={1500}
              value={comData.config.backgroundColor}
              onIonChange={(e) => {
                handleComConfigChange("config.backgroundColor", e.detail.value);
              }}
            ></ion-input>
            <input
              style={{ height: "100%" }}
              type="color"
              value={comData.config.backgroundColor}
              onChange={(e) => {
                handleComConfigChange(
                  "config.backgroundColor",
                  e.target["value"]
                );
              }}
            ></input>
          </ion-col>
        </ion-row>
      );
    case "borderStyle":
      return (
        <cy-item-extend header="边框">
          <ion-row>
            <ion-col size="4">颜色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.borderStyle.color", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.borderStyle.color",
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={_.get(comData, "config.borderStyle.color", "")}
                onChange={(e) => {
                  handleComConfigChange(
                    "config.borderStyle.color",
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">宽度</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                value={_.get(comData, "config.borderStyle.width", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.borderStyle.width",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "timerOption":
      return (
        <cy-item-extend header="时间器">
          <ion-row>
            <ion-col size="4">格式化</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.timerOption.format", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.timerOption.format",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">间隔时间(ms)</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                value={_.get(comData, "config.timerOption.interval", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.timerOption.interval",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "videoSrc":
      return (
        <ion-row class="marginTop">
          <ion-col size="4">video地址</ion-col>
          <ion-col size="8">
            <ion-input
              clearInput
              debounce={1500}
              value={comData.config.videoSrc}
              onIonChange={(e) => {
                handleComConfigChange("config.videoSrc", e.detail.value);
              }}
            ></ion-input>
          </ion-col>
        </ion-row>
      );
    case "borderImg":
      return (
        <ion-row>
          <ion-col size="4">图片边框</ion-col>
          <ion-col size="8">
            <ion-select
              value={comData.config.borderImg}
              interface="popover"
              onIonChange={(e) => {
                handleComConfigChange("config.borderImg", e.detail.value);
              }}
            >
              <ion-select-option value="">无</ion-select-option>
              <ion-select-option value="border-1">border-1</ion-select-option>
              <ion-select-option value="border-2">border-2</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>
      );
    case "iframeSrc":
      return (
        <ion-row class="marginTop">
          <ion-col size="4">iframe地址</ion-col>
          <ion-col size="8">
            <ion-input
              clearInput
              debounce={1500}
              value={comData.config.iframeSrc}
              onIonChange={(e) => {
                handleComConfigChange("config.iframeSrc", e.detail.value);
              }}
            ></ion-input>
          </ion-col>
        </ion-row>
      );
    case "swiperAutoTime":
      return (
        <ion-row>
          <ion-col size="4">轮播时间(ms)</ion-col>
          <ion-col size="8">
            <ion-input
              debounce={1500}
              type="number"
              min="0"
              value={comData.config.swiperAutoTime}
              onIonChange={(e) => {
                handleComConfigChange("config.swiperAutoTime", e.detail.value);
              }}
            ></ion-input>
          </ion-col>
        </ion-row>
      );
    case "tableAllOption":
      return (
        <cy-item-extend header="全局">
          <ion-row>
            <ion-col size="4">是否轮播</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={_.get(
                  comData,
                  "config.tableAllOption.isScroll",
                  false
                )}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableAllOption.isScroll",
                    e.detail.checked
                  );
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">表格行数</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="1"
                value={_.get(comData, "config.tableAllOption.rowNum", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableAllOption.rowNum",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">轮播间隔(s)</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="1"
                value={_.get(
                  comData,
                  "config.tableAllOption.intervalSecond",
                  ""
                )}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableAllOption.intervalSecond",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "columns":
      return (
        <cy-item-extend header="自定义列">
          <ion-row class="marginTop">
            <ion-col size="12">
              <ion-button
                fill="outline"
                onClick={() => {
                  addNewTableColumn();
                }}
              >
                新增
              </ion-button>
            </ion-col>
            <ion-col size="12">
              <cy-table
                Columns={TableColumns}
                dataSource={comData.config.columns}
              ></cy-table>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "tableHeaderOption":
      return (
        <cy-item-extend header="表头">
          <ion-row>
            <ion-col size="4">表头行高(%)</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                max="100"
                value={_.get(comData, "config.tableHeaderOption.height", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableHeaderOption.height",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">背景颜色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(
                  comData,
                  "config.tableHeaderOption.backgroundColor",
                  ""
                )}
                onIonChange={(e) => {
                  handleComConfigChange(
                    ["config.tableHeaderOption.backgroundColor"],
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={_.get(
                  comData,
                  "config.tableHeaderOption.backgroundColor",
                  ""
                )}
                onChange={(e) => {
                  handleComConfigChange(
                    "config.tableHeaderOption.backgroundColor",
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "tableRowOption":
      return (
        <cy-item-extend header="行配置">
          <ion-row>
            <ion-col size="4">奇行背景色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.tableRowOption.oddBgc", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableRowOption.oddBgc",
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={_.get(comData, "config.tableRowOption.oddBgc", "")}
                onChange={(e) => {
                  handleComConfigChange(
                    ["config.tableRowOption.oddBgc"],
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">偶行背景色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.tableRowOption.evenBgc", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    ["config.tableRowOption.evenBgc"],
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={_.get(comData, "config.tableRowOption.evenBgc", "")}
                onChange={(e) => {
                  handleComConfigChange(
                    ["config.tableRowOption.evenBgc"],
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "tableOrderOption":
      return (
        <cy-item-extend header="序列号">
          <ion-row>
            <ion-col size="4">显示</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={_.get(comData, "config.tableOrderOption.show", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableOrderOption.show",
                    e.detail.checked
                  );
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">列宽(%)</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                max="100"
                value={_.get(comData, "config.tableOrderOption.width", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tableOrderOption.width",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
        </cy-item-extend>
      );
    case "textStyle":
      return (
        <cy-item-extend header="全局样式">
          <ion-row>
            <ion-col size="4">字体</ion-col>
            <ion-col size="8">
              <ion-select
                value={_.get(comData, "config.textStyle.fontFamily", "")}
                interface="popover"
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.textStyle.fontFamily",
                    e.detail.value
                  );
                }}
              >
                <ion-select-option value="Microsoft YaHei">
                  Microsoft YaHei
                </ion-select-option>
                <ion-select-option value="Courier New">
                  Courier New
                </ion-select-option>
                <ion-select-option value="Arial">Arial</ion-select-option>
                <ion-select-option value="monospace">
                  monospace
                </ion-select-option>
                <ion-select-option value="serif">serif</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col size="4">文字颜色</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.textStyle.color", "")}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.textStyle.color",
                    e.detail.value
                  );
                }}
              ></ion-input>
              <input
                style={{ height: "100%" }}
                type="color"
                value={
                  (comData.config.textStyle &&
                    comData.config.textStyle.color) ||
                  ""
                }
                onChange={(e) => {
                  handleComConfigChange(
                    "config.textStyle.color",
                    e.target["value"]
                  );
                }}
              ></input>
            </ion-col>
          </ion-row>
          <cy-item-extend header="边距">
            <ion-row>
              <ion-col size="4">顶部</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  placeholder="百分比或固定值，默认 60"
                  value={_.get(comData, "config.grid.top", "")}
                  onIonChange={(e) => {
                    handleComConfigChange("config.grid.top", e.detail.value);
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">底部</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  placeholder="百分比或固定值，默认 60"
                  value={_.get(comData, "config.grid.bottom", "")}
                  onIonChange={(e) => {
                    handleComConfigChange("config.grid.bottom", e.detail.value);
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">左侧</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  placeholder="百分比或固定值，默认 10%"
                  value={_.get(comData, "config.grid.left", "")}
                  onIonChange={(e) => {
                    handleComConfigChange("config.grid.left", e.detail.value);
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">右侧</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  placeholder="百分比或固定值，默认 10%"
                  value={_.get(comData, "config.grid.right", "")}
                  onIonChange={(e) => {
                    handleComConfigChange("config.grid.right", e.detail.value);
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
          </cy-item-extend>
        </cy-item-extend>
      );
    case "title":
      return (
        <cy-item-extend header="标题">
          <ion-row>
            <ion-col size="4">内容</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                value={_.get(comData, "config.title.text", "")}
                onIonChange={(e) => {
                  handleComConfigChange("config.title.text", e.detail.value);
                }}
              ></ion-input>
            </ion-col>
          </ion-row>
          <cy-item-extend header="字体样式">
            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={_.get(comData, "config.title.textStyle.color", "")}
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.title.textStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={_.get(comData, "config.title.textStyle.color", "")}
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.title.textStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">大小</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={_.get(comData, "config.title.textStyle.fontSize", "")}
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.title.textStyle.fontSize",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">水平对齐</ion-col>
              <ion-col size="8">
                <ion-select
                  interface="popover"
                  value={_.get(comData, "config.title.left", "")}
                  onIonChange={(e) => {
                    handleComConfigChange("config.title.left", e.detail.value);
                  }}
                >
                  <ion-select-option value="auto">自适应</ion-select-option>
                  <ion-select-option value="center">居中</ion-select-option>
                  <ion-select-option value="left">左对齐</ion-select-option>
                  <ion-select-option value="right">右对齐</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">字体粗细</ion-col>
              <ion-col size="8">
                <ion-select
                  interface="popover"
                  value={_.get(
                    comData,
                    "config.title.textStyle.fontWeight",
                    ""
                  )}
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.title.textStyle.fontWeight",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="bold">bold</ion-select-option>
                  <ion-select-option value="bolder">bolder</ion-select-option>
                  <ion-select-option value="lighter">lighter</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </cy-item-extend>
        </cy-item-extend>
      );
    case "xAxis":
      return (
        <cy-item-extend header="x轴">
          <ion-row>
            <ion-col size="4">显示</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={comData.config.xAxis && comData.config.xAxis.show}
                onIonChange={(e) => {
                  handleComConfigChange("config.xAxis.show", e.detail.checked);
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>
          <cy-item-extend header="文本">
            <ion-row>
              <ion-col size="4">字号</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  type="number"
                  min="0"
                  value={
                    (comData.config.xAxis &&
                      comData.config.xAxis.axisLabel &&
                      comData.config.xAxis.axisLabel.fontSize) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLabel.fontSize",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    (comData.config.xAxis &&
                      comData.config.xAxis.axisLabel &&
                      comData.config.xAxis.axisLabel.color) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLabel.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    (comData.config.xAxis &&
                      comData.config.xAxis.axisLabel &&
                      comData.config.xAxis.axisLabel.color) ||
                    ""
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLabel.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">风格</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.xAxis &&
                      comData.config.xAxis.axisLabel &&
                      comData.config.xAxis.axisLabel.fontStyle) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLabel.fontStyle",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="italic">italic</ion-select-option>
                  <ion-select-option value="oblique">oblique</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">粗细</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.xAxis &&
                      comData.config.xAxis.axisLabel &&
                      comData.config.xAxis.axisLabel.fontWeight) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLabel.fontWeight",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="bold">bold</ion-select-option>
                  <ion-select-option value="bolder">bolder</ion-select-option>
                  <ion-select-option value="lighter">lighter</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </cy-item-extend>

          <cy-item-extend header="轴线">
            <ion-row>
              <ion-col size="4">显示</ion-col>
              <ion-col size="8">
                <ion-toggle
                  checked={
                    comData.config.xAxis &&
                    comData.config.xAxis.axisLine &&
                    comData.config.xAxis.axisLine.show
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLine.show",
                      e.detail.checked
                    );
                  }}
                ></ion-toggle>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    comData.config.xAxis &&
                    comData.config.xAxis.axisLine &&
                    comData.config.xAxis.axisLine.lineStyle &&
                    comData.config.xAxis.axisLine.lineStyle.color
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLine.lineStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    comData.config.xAxis &&
                    comData.config.xAxis.axisLine &&
                    comData.config.xAxis.axisLine.lineStyle &&
                    comData.config.xAxis.axisLine.lineStyle.color
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLine.lineStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">线宽</ion-col>
              <ion-col size="8">
                <ion-input
                  type="number"
                  min="0"
                  value={
                    comData.config.xAxis &&
                    comData.config.xAxis.axisLine &&
                    comData.config.xAxis.axisLine.lineStyle &&
                    comData.config.xAxis.axisLine.lineStyle.width
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.axisLine.lineStyle.width",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
          </cy-item-extend>

          <cy-item-extend header="网格线">
            <ion-row>
              <ion-col size="4">显示</ion-col>
              <ion-col size="8">
                <ion-toggle
                  checked={
                    comData.config.xAxis &&
                    comData.config.xAxis.splitLine &&
                    comData.config.xAxis.splitLine.show
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.splitLine.show",
                      e.detail.checked
                    );
                  }}
                ></ion-toggle>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    comData.config.xAxis &&
                    comData.config.xAxis.splitLine &&
                    comData.config.xAxis.splitLine.lineStyle &&
                    comData.config.xAxis.splitLine.lineStyle.color
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.splitLine.lineStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    comData.config.xAxis &&
                    comData.config.xAxis.splitLine &&
                    comData.config.xAxis.splitLine.lineStyle &&
                    comData.config.xAxis.splitLine.lineStyle.color
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.splitLine.lineStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">线宽</ion-col>
              <ion-col size="8">
                <ion-input
                  type="number"
                  min="0"
                  value={
                    comData.config.xAxis &&
                    comData.config.xAxis.splitLine &&
                    comData.config.xAxis.splitLine.lineStyle &&
                    comData.config.xAxis.splitLine.lineStyle.width
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.xAxis.splitLine.lineStyle.width",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
          </cy-item-extend>
        </cy-item-extend>
      );
    case "yAxis":
      return (
        <cy-item-extend header="y轴">
          <ion-row>
            <ion-col size="4">显示</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={comData.config.yAxis && comData.config.yAxis.show}
                onIonChange={(e) => {
                  handleComConfigChange("config.yAxis.show", e.detail.checked);
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>
          <cy-item-extend header="文本">
            <ion-row>
              <ion-col size="4">字号</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  type="number"
                  min="0"
                  value={
                    (comData.config.yAxis &&
                      comData.config.yAxis.axisLabel &&
                      comData.config.yAxis.axisLabel.fontSize) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLabel.fontSize",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    (comData.config.yAxis &&
                      comData.config.yAxis.axisLabel &&
                      comData.config.yAxis.axisLabel.color) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLabel.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    (comData.config.yAxis &&
                      comData.config.yAxis.axisLabel &&
                      comData.config.yAxis.axisLabel.color) ||
                    ""
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLabel.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">风格</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.yAxis &&
                      comData.config.yAxis.axisLabel &&
                      comData.config.yAxis.axisLabel.fontStyle) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLabel.fontStyle",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="italic">italic</ion-select-option>
                  <ion-select-option value="oblique">oblique</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">粗细</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.yAxis &&
                      comData.config.yAxis.axisLabel &&
                      comData.config.yAxis.axisLabel.fontWeight) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLabel.fontWeight",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="bold">bold</ion-select-option>
                  <ion-select-option value="bolder">bolder</ion-select-option>
                  <ion-select-option value="lighter">lighter</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </cy-item-extend>

          <cy-item-extend header="轴单位">
            <ion-row>
              <ion-col size="4">单位</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={comData.config.yAxis && comData.config.yAxis.name}
                  onIonChange={(e) => {
                    handleComConfigChange("config.yAxis.name", e.detail.value);
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
          </cy-item-extend>

          <cy-item-extend header="轴线">
            <ion-row>
              <ion-col size="4">显示</ion-col>
              <ion-col size="8">
                <ion-toggle
                  checked={
                    comData.config.yAxis &&
                    comData.config.yAxis.axisLine &&
                    comData.config.yAxis.axisLine.show
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLine.show",
                      e.detail.checked
                    );
                  }}
                ></ion-toggle>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    comData.config.yAxis &&
                    comData.config.yAxis.axisLine &&
                    comData.config.yAxis.axisLine.lineStyle &&
                    comData.config.yAxis.axisLine.lineStyle.color
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLine.lineStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    comData.config.yAxis &&
                    comData.config.yAxis.axisLine &&
                    comData.config.yAxis.axisLine.lineStyle &&
                    comData.config.yAxis.axisLine.lineStyle.color
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLine.lineStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">线宽</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  type="number"
                  min="0"
                  value={
                    comData.config.yAxis &&
                    comData.config.yAxis.axisLine &&
                    comData.config.yAxis.axisLine.lineStyle &&
                    comData.config.yAxis.axisLine.lineStyle.width
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.axisLine.lineStyle.width",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
          </cy-item-extend>

          <cy-item-extend header="网格线">
            <ion-row>
              <ion-col size="4">显示</ion-col>
              <ion-col size="8">
                <ion-toggle
                  checked={
                    comData.config.yAxis &&
                    comData.config.yAxis.splitLine &&
                    comData.config.yAxis.splitLine.show
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.splitLine.show",
                      e.detail.checked
                    );
                  }}
                ></ion-toggle>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    comData.config.yAxis &&
                    comData.config.yAxis.splitLine &&
                    comData.config.yAxis.splitLine.lineStyle &&
                    comData.config.yAxis.splitLine.lineStyle.color
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.splitLine.lineStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    comData.config.yAxis &&
                    comData.config.yAxis.splitLine &&
                    comData.config.yAxis.splitLine.lineStyle &&
                    comData.config.yAxis.splitLine.lineStyle.color
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.splitLine.lineStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">线宽</ion-col>
              <ion-col size="8">
                <ion-input
                  type="number"
                  min="0"
                  value={
                    comData.config.yAxis &&
                    comData.config.yAxis.splitLine &&
                    comData.config.yAxis.splitLine.lineStyle &&
                    comData.config.yAxis.splitLine.lineStyle.width
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.yAxis.splitLine.lineStyle.width",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
          </cy-item-extend>
        </cy-item-extend>
      );
    case "legend":
      return (
        <cy-item-extend header="图例">
          <ion-row>
            <ion-col size="4">显示</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={comData.config.legend && comData.config.legend.show}
                onIonChange={(e) => {
                  handleComConfigChange("config.legend.show", e.detail.checked);
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>
          <cy-item-extend header="文本">
            <ion-row>
              <ion-col size="4">字号</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  type="number"
                  min="0"
                  value={
                    (comData.config.legend &&
                      comData.config.legend.textStyle &&
                      comData.config.legend.textStyle.fontSize) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.legend.textStyle.fontSize",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    (comData.config.legend &&
                      comData.config.legend.textStyle &&
                      comData.config.legend.textStyle.color) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.legend.textStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    (comData.config.legend &&
                      comData.config.legend.textStyle &&
                      comData.config.legend.textStyle.color) ||
                    ""
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.legend.textStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">风格</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.legend &&
                      comData.config.legend.textStyle &&
                      comData.config.legend.textStyle.fontStyle) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.legend.textStyle.fontStyle",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="italic">italic</ion-select-option>
                  <ion-select-option value="oblique">oblique</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">粗细</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.legend &&
                      comData.config.legend.textStyle &&
                      comData.config.legend.textStyle.fontWeight) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.legend.textStyle.fontWeight",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="bold">bold</ion-select-option>
                  <ion-select-option value="bolder">bolder</ion-select-option>
                  <ion-select-option value="lighter">lighter</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </cy-item-extend>
          <cy-item-extend header="布局">
            <ion-row>
              <ion-col size="4">水平</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.legend && comData.config.legend.x) || ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange("config.legend.x", e.detail.value);
                  }}
                >
                  <ion-select-option value="center">center</ion-select-option>
                  <ion-select-option value="left">left</ion-select-option>
                  <ion-select-option value="right">right</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>

            <ion-row>
              <ion-col size="4">竖直</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.legend && comData.config.legend.y) || ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange("config.legend.y", e.detail.value);
                  }}
                >
                  <ion-select-option value="center">center</ion-select-option>
                  <ion-select-option value="top">top</ion-select-option>
                  <ion-select-option value="bottom">bottom</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </cy-item-extend>
        </cy-item-extend>
      );
    case "tooltip":
      return (
        <cy-item-extend header="提示框">
          <ion-row>
            <ion-col size="4">显示</ion-col>
            <ion-col size="8">
              <ion-toggle
                checked={comData.config.tooltip && comData.config.tooltip.show}
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tooltip.show",
                    e.detail.checked
                  );
                }}
              ></ion-toggle>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="4">触发类型</ion-col>
            <ion-col size="8">
              <ion-select
                value={
                  (comData.config.tooltip && comData.config.tooltip.trigger) ||
                  ""
                }
                interface="popover"
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tooltip.trigger",
                    e.detail.value
                  );
                }}
              >
                <ion-select-option value="item">数据项</ion-select-option>
                <ion-select-option value="axis">坐标轴</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="4">触发动作</ion-col>
            <ion-col size="8">
              <ion-select
                value={
                  (comData.config.tooltip &&
                    comData.config.tooltip.triggerOn) ||
                  ""
                }
                interface="popover"
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tooltip.triggerOn",
                    e.detail.value
                  );
                }}
              >
                <ion-select-option value="mousemove">悬浮</ion-select-option>
                <ion-select-option value="click">点击</ion-select-option>
              </ion-select>
            </ion-col>
          </ion-row>

          <ion-row>
            <ion-col size="4">消失延时时间</ion-col>
            <ion-col size="8">
              <ion-input
                debounce={1500}
                type="number"
                min="0"
                value={
                  (comData.config.tooltip &&
                    comData.config.tooltip.hideDelay) ||
                  ""
                }
                onIonChange={(e) => {
                  handleComConfigChange(
                    "config.tooltip.hideDelay",
                    e.detail.value
                  );
                }}
              ></ion-input>
            </ion-col>
          </ion-row>

          <cy-item-extend header="文本">
            <ion-row>
              <ion-col size="4">字号</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  type="number"
                  min="0"
                  value={
                    (comData.config.tooltip &&
                      comData.config.tooltip.textStyle &&
                      comData.config.tooltip.textStyle.fontSize) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.tooltip.textStyle.fontSize",
                      e.detail.value
                    );
                  }}
                ></ion-input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">颜色</ion-col>
              <ion-col size="8">
                <ion-input
                  debounce={1500}
                  value={
                    (comData.config.tooltip &&
                      comData.config.tooltip.textStyle &&
                      comData.config.tooltip.textStyle.color) ||
                    ""
                  }
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.tooltip.textStyle.color",
                      e.detail.value
                    );
                  }}
                ></ion-input>
                <input
                  style={{ height: "100%" }}
                  type="color"
                  value={
                    (comData.config.tooltip &&
                      comData.config.tooltip.textStyle &&
                      comData.config.tooltip.textStyle.color) ||
                    ""
                  }
                  onChange={(e) => {
                    handleComConfigChange(
                      "config.tooltip.textStyle.color",
                      e.target["value"]
                    );
                  }}
                ></input>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">风格</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.tooltip &&
                      comData.config.tooltip.textStyle &&
                      comData.config.tooltip.textStyle.fontStyle) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.tooltip.textStyle.fontStyle",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="italic">italic</ion-select-option>
                  <ion-select-option value="oblique">oblique</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
            <ion-row>
              <ion-col size="4">粗细</ion-col>
              <ion-col size="8">
                <ion-select
                  value={
                    (comData.config.tooltip &&
                      comData.config.tooltip.textStyle &&
                      comData.config.tooltip.textStyle.fontWeight) ||
                    ""
                  }
                  interface="popover"
                  onIonChange={(e) => {
                    handleComConfigChange(
                      "config.tooltip.textStyle.fontWeight",
                      e.detail.value
                    );
                  }}
                >
                  <ion-select-option value="normal">normal</ion-select-option>
                  <ion-select-option value="bold">bold</ion-select-option>
                  <ion-select-option value="bolder">bolder</ion-select-option>
                  <ion-select-option value="lighter">lighter</ion-select-option>
                </ion-select>
              </ion-col>
            </ion-row>
          </cy-item-extend>
        </cy-item-extend>
      );
    case "series":
      return (
        <cy-item-extend header="数据系列">
          {_.get(comData, "config.series[0]", "") ? (
            <setting-chart-series
              series={comData.config.series}
              onCyChange={(e) => {
                handleComConfigChange(
                  e.detail.argList.join("."),
                  e.detail.value
                );
              }}
            ></setting-chart-series>
          ) : null}
        </cy-item-extend>
      );
    default:
      return <div></div>;
  }
};

export { comConfigMap, RenderComSetting };
