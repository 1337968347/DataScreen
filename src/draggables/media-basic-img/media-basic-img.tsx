import { Component,Prop, h } from '@stencil/core';
import { ComType } from "../../interfaces";

@Component({
    tag: 'media-basic-img'
})
export class MediaBasicImg {
    @Prop() comData: ComType;

    render() {
        return (
            <div style={{
                width: "100%",
                height: "100%",
                "background-repeat": "no-repeat",
                "background-size": "100% 100%",
                "image-rendering": "auto",
                "background-image": `url(${this.comData.data.config.bgi|| "assets/image/img-default.png"})`}}>

            </div>
        );
    }
}