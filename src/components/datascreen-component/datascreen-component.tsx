import { Component, Event, EventEmitter, h } from '@stencil/core';


@Component({
    tag: 'datascreen-component',
    styleUrl: 'datascreen-component.scss'
})
export class DatascreenComponent {
    @Event() checkMenu: EventEmitter;

    closeThisPage() {
        this.checkMenu.emit(1);
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-title>组件列表</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={() => { this.closeThisPage() }}>
                            <ion-icon mode="ios" name="arrow-back"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                <ion-segment>
                    <ion-segment-button layout="icon-end" value="friends">
                        <ion-icon name="stats"></ion-icon>
                    </ion-segment-button>
                    <ion-segment-button value="enemies">
                        <ion-label>Enemies</ion-label>
                    </ion-segment-button>
                </ion-segment>
            </ion-content>
        ];
    }
}