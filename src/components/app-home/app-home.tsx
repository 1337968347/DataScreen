import { Component, Prop, State, Event, EventEmitter, Element, Host, h } from '@stencil/core';
import { RouterHistory,MatchResults } from "@stencil/router"

import { get, set } from "../../providers/local-storage";
import { initLayerComponent, initSettingComponent, initDataScreen, getDataScreen } from "../../util/datascreen-controller";

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    @Prop() history: RouterHistory;
    @Prop() match: MatchResults;
    @Element() el: HTMLElement;
    @State() showMenuControl: boolean[] = [false, false, false];
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @State() dataScreenId: string;

    async componentWillLoad() {
        this.dataScreenId = this.match.params.dataScreenId;
        this.initMenuControl()
        await this.initCanvasOption()
    }

    componentDidLoad() {
        initLayerComponent(this.el.querySelector("datascreen-layer"));
        initSettingComponent(this.el.querySelector("datascreen-setting-panel"))
    }

    async initCanvasOption() {
        let dataScreenData = await getDataScreen(this.dataScreenId);
        initDataScreen(this.dataScreenId, {
            componentsData: dataScreenData.componentsData,
            canvasOption: dataScreenData.canvasOption
        }, true)
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
        return (
            <Host class="ion-page">
                <datascreen-header history={this.history} dataScreenId={this.dataScreenId} checkMenuControl={this.showMenuControl} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-header>
                <ion-content>
                    <div class="datascreen-box">
                        <datascreen-layer style={{ width: this.showMenuControl[0] ? "200px" : "0" }} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-layer>
                        <datascreen-com-panel style={{ width: this.showMenuControl[1] ? "233px" : "0" }} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-com-panel>
                        <datascreen-edit-main></datascreen-edit-main>
                        <datascreen-setting-panel style={{ width: this.showMenuControl[2] ? "332px" : "0" }}></datascreen-setting-panel>
                    </div>
                </ion-content>
            </Host>
        );
    }
}
