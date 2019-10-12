import { Component, Prop, h } from '@stencil/core';

import { ComData } from "../../interfaces";

@Component({
    tag: 'media-adapter'
})
export class MediaAdapter {
    @Prop() comData: ComData;
    @Prop() comDataApiData: any;
    @Prop() canModify: boolean = false;

    renderCover() {
        if (!!this.canModify) {
            return (<div style={{
                "width": "100%",
                "height": "100%",
                "z-index": "999",
                "position": "absolute",
                "top": "0",
                "left": "0"
            }}></div>)
        }
    }

    render() {
        switch (this.comData.comName) {
            case "media-basic-img":
                return (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        "background-repeat": "no-repeat",
                        "background-size": "100% 100%",
                        "image-rendering": "auto",
                        "background-image": `url(${this.comData.data.config.bgi || "../../assets/image/img-default.png"})`
                    }}>
                    </div>
                );
            case "media-border":
                return (
                    <div style={{
                        width: "100%",
                        height: "100%",
                        "background-color": this.comData.data.config.backgroundColor,
                        "border-color": this.comData.data.config.borderColor,
                        "border-width": this.comData.data.config.borderWidth + "px" || 0 + "px",
                        "background-repeat": "no-repeat",
                        "background-size": "100% 100%",
                        "image-rendering": "auto",
                        "border-image-slice": (this.comData.data.config.borderWidth || 10) + " fill",
                        "border-style": "solid",
                        "border-image-source": `url(${this.comData.data.config.borderImg &&
                            `../../assets/image/border/${this.comData.data.config.borderImg}.png`
                            || "../../assets/image/border/border-2.png"})`
                    }}>
                    </div>
                );
            case "media-iframe":
                return (
                    <div>
                        <iframe
                            draggable={false}
                            width={this.comData.data.view.w + "px"}
                            height={this.comData.data.view.h + "px"}
                            style={{
                                "position": "relative",
                                "width": this.comData.data.view.w + "px",
                                "height": this.comData.data.view.h + "px"
                            }}
                            src={this.comData.data.config.iframeSrc || "https://www.baidu.com/"}>
                        </iframe>
                        {this.renderCover()}
                    </div>
                );
            case "media-img-slides":
                return [
                    <ion-slides pager={true} options={
                        this.comData.data.config.swiperAutoTime && !this.canModify && this.comData.data.config.swiperAutoTime !== "0" ? {
                            autoplay: { delay: this.comData.data.config.swiperAutoTime, disableOnInteraction: false }
                        } : null} style={{ "height": "100%" }}>
                        {(this.comDataApiData || []).map((item) =>
                            <ion-slide>
                                <cy-lazy-img style={{ "width": "100%", "height": "100%" }} src={item} defaultImg="../../assets/image/img-default.png">
                                </cy-lazy-img>
                            </ion-slide>
                        )}
                    </ion-slides>,
                    this.renderCover()
                ];
            default:
                break;
        }

    }
}