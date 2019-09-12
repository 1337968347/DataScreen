import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';


@Component({
    tag: 'media-basic-img-config'
})
export class MediaBasicImgConfig {
    @Prop() draggableConfig: any;
    @Event() configChange: EventEmitter;

    handleConfigChange(configName: string, value:any) {
        this.configChange.emit({
            name: configName,
            value: value
        })
    }

    render() {
        return (
            <ion-grid>
                <ion-row>
                    <ion-col size="4">
                        背景图
                    </ion-col>
                    <ion-col size="8">
                        <ion-input clearInput value={this.draggableConfig.bgi} onChange={(e) => { this.handleConfigChange("bgi", e.target['value']) }}>
                        </ion-input>
                    </ion-col>
                </ion-row>
                <ion-row>
                    <ion-col size="4">
                    </ion-col>
                    <ion-col size="8">
                        <cy-lazy-img isLazy={false} defaultImg="assets/image/img-default.png" style={{ "height": "100px", "object-fit": "cover" }} src={this.draggableConfig.bgi}></cy-lazy-img>
                    </ion-col>
                </ion-row>
            </ion-grid>
        );
    }
}