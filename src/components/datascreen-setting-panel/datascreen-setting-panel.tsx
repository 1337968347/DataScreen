import {
  Component,
  State,
  Method,
  h,
  Element,
  Event,
  EventEmitter,
} from "@stencil/core";
import _ from "lodash";

import { ComData, CanvasConfig } from "../../interfaces";
import {
  setComDataChange,
  initSettingComponent,
} from "../../util/datascreen-controller";
import { RenderComSetting } from "../../util/component/component-setting-render";
import { deepCopy } from "../../util/helper";

@Component({
  tag: "datascreen-setting-panel",
  styleUrl: "datascreen-setting-panel.scss",
})
export class DatascreenSettingPanel {
  @Element() el: HTMLElement;
  @State() chooseSeg: string = "config";
  @State() ComDataData: ComData;
  @State() canvasOption: CanvasConfig;
  @Event() alert: EventEmitter;

  componentDidLoad() {
    initSettingComponent(this.el);
  }

  @Method()
  async setComponentConfigData(comData) {
    this.ComDataData = deepCopy({} as ComData, comData);
    this.chooseSeg = "config";
  }

  @Method()
  async setCanvasConfig(canvasConfig: CanvasConfig) {
    this.canvasOption = deepCopy({}, canvasConfig);
  }

  handleComConfigChange(type: string, name: string, value: any) {
    this.ComDataData.data[type][name] = value;
    this.ComDataData = deepCopy<ComData>({} as ComData, this.ComDataData);
    setComDataChange(this.ComDataData, true, false);
  }

  handleDeepComConfigValueChange(args: string, value) {
    debugger;
    _.set(this.ComDataData.data, args, value);
    this.ComDataData = deepCopy<ComData>({} as ComData, this.ComDataData);
    setComDataChange(this.ComDataData, true, false);
  }

  handleSegChange(e) {
    this.chooseSeg = e.detail.value;
  }

  render() {
    if (!this.ComDataData || !this.ComDataData.id) {
      return (
        <setting-canvas-option
          canvasOption={this.canvasOption}
        ></setting-canvas-option>
      );
    } else {
      const comData = this.ComDataData.data;
      const comName = this.ComDataData.comName;
      return [
        <ion-header>
          <ion-segment
            onIonChange={(e) => {
              this.handleSegChange(e);
            }}
            value={this.chooseSeg}
          >
            <ion-segment-button title="配置" value="config">
              <ion-icon name="options"></ion-icon>
            </ion-segment-button>
            <ion-segment-button title="数据" value="interface">
              <ion-icon name="link"></ion-icon>
            </ion-segment-button>
          </ion-segment>
        </ion-header>,
        <ion-toolbar>
          <ion-title>{comData.nickName || ""}</ion-title>
        </ion-toolbar>,
        <ion-content>
          {this.chooseSeg == "config" ? (
            <div>
              {/* common-config */}
              <setting-common-config
                comData={comData}
                onCyChange={(e) => {
                  this.handleComConfigChange(
                    e.detail.type,
                    e.detail.name,
                    e.detail.value
                  );
                }}
              ></setting-common-config>
              <ion-grid>
                <RenderComSetting
                  comType={comName}
                  comData={comData}
                  handleComConfigChange={this.handleDeepComConfigValueChange.bind(this)}
                ></RenderComSetting>
              </ion-grid>
            </div>
          ) : null}

          {this.chooseSeg == "interface" ? (
            <div>
              {this.ComDataData.data.api_data ? (
                <setting-data-config
                  comId={this.ComDataData.id}
                  comDataApiData={comData.api_data}
                  onCyChange={(e) => {
                    this.handleComConfigChange(
                      e.detail.type,
                      e.detail.name,
                      e.detail.value
                    );
                  }}
                ></setting-data-config>
              ) : (
                "该组件不存在数据接口"
              )}
            </div>
          ) : null}
        </ion-content>,
      ];
    }
  }
}
