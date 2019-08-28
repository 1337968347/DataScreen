import { Component, State, Event, EventEmitter, h } from '@stencil/core';

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    @State() showMenuControl: boolean[] = [false, false, false];
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;

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
                    <datascreen-layer style={{width: this.showMenuControl[0]? "200px":"0"}} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-layer>
                    <datascreen-component  style={{width: this.showMenuControl[1]? "233px":"0"}} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-component>
                    <datascreen-edit-main></datascreen-edit-main>
                    <datascreen-setting  style={{width: this.showMenuControl[2]? "332px":"0"}}></datascreen-setting>
                </div>
            </ion-content>
        ];
    }
}
