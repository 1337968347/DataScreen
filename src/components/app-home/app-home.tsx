import { Component, State, Event, EventEmitter, h } from '@stencil/core';
import { ComType } from "../../interfaces"

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    @State() showMenuControl: boolean[] = [false, false, false];
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;
    @State() mockData: ComType[] = []

    componentDidLoad() {
    }

    handleMenuChoose(e: CustomEvent) {
        this.showMenuControl[e.detail] = !!!this.showMenuControl[e.detail];
        this.showMenuControl = [...this.showMenuControl];
    }

    render() {
        return [
            <datascreen-header checkMenuControl={this.showMenuControl} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-header>,
            <ion-content>
                <div class="datascreen-box">
                    <div class="datascreen-edit-box">
                        <div class="datascreen-edit-container">
                            <cy-draggable-canvas style={{ transform: "scale(1)" }} comOptionList={this.mockData}>
                            </cy-draggable-canvas>
                        </div>
                        <div class="datascreen-edit-footer">

                        </div>
                    </div>
                    <datascreen-setting></datascreen-setting>
                </div>
            </ion-content>
        ];
    }
}
