import { Component, Prop, State, Event, EventEmitter, Element, Host, h } from '@stencil/core';
import { RouterHistory, MatchResults } from "@stencil/router"

import { get, set } from "../../providers/local-storage";

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

    componentWillLoad() {
        this.initMenuControl()
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
                <datascreen-header history={this.history} dataScreenId={this.match.params.dataScreenId} checkMenuControl={this.showMenuControl} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-header>
                <div class="datascreen-box">
                    <datascreen-layer-panel style={{ width: this.showMenuControl[0] ? "200px" : "0" }} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-layer-panel>
                    <datascreen-com-panel style={{ width: this.showMenuControl[1] ? "240px" : "0" }} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-com-panel>
                    <datascreen-edit-main dataScreenId={this.match.params.dataScreenId}></datascreen-edit-main>
                    <datascreen-setting-panel style={{ width: this.showMenuControl[2] ? "332px" : "0" }}></datascreen-setting-panel>
                </div>
            </Host>
        );
    }
}
