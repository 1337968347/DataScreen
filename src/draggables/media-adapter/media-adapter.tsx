import { Component,Prop, h } from '@stencil/core';
import { ComData } from "../../interfaces";

@Component({
    tag: 'media-adapter'
})
export class MediaAdapter {
    @Prop() comData: ComData;

    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%",
                "image-rendering": "auto",
                "background-image": `url(${this.comData.data.config.bgi|| "../../assets/image/img-default.png"})`}}>

            </div>
        );
    }
}