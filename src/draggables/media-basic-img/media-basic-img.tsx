import { Component,Prop, h } from '@stencil/core';
import { ComType } from "../../interfaces";

@Component({
    tag: 'media-basic-img',
    styleUrl: 'media-basic-img.scss'
})
export class MediaBasicImg {
    @Prop() comData: ComType;

    render() {
        return (
            <img style={{
                width: "100%",
                height: "100%"
            }} src={this.comData.data.icon} alt="" />
        );
    }
}