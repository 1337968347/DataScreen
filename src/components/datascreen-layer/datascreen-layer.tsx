import { Component,Event, EventEmitter, h } from '@stencil/core';


@Component({
    tag: 'datascreen-layer',
    styleUrl: 'datascreen-layer.scss'
})
export class DatascreenLayer {
    @Event() checkMenu: EventEmitter;

    handleMoveLayer(detail) {
        console.log(detail)
        detail.complete();
    }

    closeThisPage(){
        this.checkMenu.emit(0);
    }

    render() {
        return [
            <ion-header>
                <ion-toolbar color="secondary">
                    <ion-title>图层</ion-title>
                    <ion-buttons slot="end">
                        <ion-button onClick={()=>{this.closeThisPage()}}>
                            <ion-icon mode="ios" name="arrow-back"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>,
            <ion-content>
                <ion-reorder-group disabled={false} onIonItemReorder={(e) => { this.handleMoveLayer(e.detail) }}>
                    <ion-reorder>
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                            </ion-thumbnail>
                            <ion-label>
                                echart图表
                            </ion-label>
                        </ion-item>
                    </ion-reorder>

                    <ion-reorder>
                        <ion-item>
                            <ion-thumbnail slot="start">
                                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                            </ion-thumbnail>
                            <ion-label>
                                echart Line
                            </ion-label>
                        </ion-item>
                    </ion-reorder>
                </ion-reorder-group>
            </ion-content>
        ];
    }
}