import { Component, State, Event, EventEmitter, Element, h } from '@stencil/core';

import { ComType, CanvasConfig } from "../../interfaces"
import { get, set } from "../../providers/storage";
import { initLayerComponent,initSettingComponent,initDataScreenController} from "../../util/datascreen-controller";

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    @Element() el: HTMLElement;
    @State() showMenuControl: boolean[] = [false, false, false];
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;

    componentWillLoad() {
       
        this.initMenuControl()
        this.initCanvasOption()
    }

    componentDidLoad() {
        initLayerComponent(this.el.querySelector("datascreen-layer"));
        initSettingComponent(this.el.querySelector("datascreen-setting-panel"))
    }

    async initCanvasOption(){
        let componentDatas = await get<ComType[]>("comList");
        let canvasConfig = await get<CanvasConfig>("canvasConfig");
        initDataScreenController({
            componentDatas: componentDatas,
            canvasConfig: canvasConfig
        })
    }

    async initMenuControl() {
        if (await get<boolean[]>("show_menu_control")) {
            this.showMenuControl = [...await get<boolean[]>("show_menu_control")];
        } else {
            set("show_menu_control", this.showMenuControl)
        }
    }

    handleMenuChoose(e: CustomEvent) {
        this.showMenuControl[e.detail] = !!!this.showMenuControl[e.detail];
        this.showMenuControl = [...this.showMenuControl];
        set("show_menu_control", this.showMenuControl)
    }

    render() {
        return [
            <datascreen-header checkMenuControl={this.showMenuControl} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-header>,
            <ion-content>
                <div class="datascreen-box">
                    <datascreen-layer style={{ width: this.showMenuControl[0] ? "200px" : "0" }} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-layer>
                    <datascreen-com-panel style={{ width: this.showMenuControl[1] ? "233px" : "0" }} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-com-panel>
                    <datascreen-edit-main></datascreen-edit-main>
                    <datascreen-setting-panel style={{ width: this.showMenuControl[2] ? "332px" : "0" }}></datascreen-setting-panel>
                </div>
            </ion-content>
        ];
    }
}
