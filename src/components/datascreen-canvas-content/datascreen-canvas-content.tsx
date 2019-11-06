import { Component, Prop, Host, Method, Event, EventEmitter, Listen, Element, h } from '@stencil/core';

@Component({
    tag: 'datascreen-canvas-content',
    styleUrl: 'datascreen-canvas-content.scss'
})
export class DatascreenCanvasContent {
    @Element() el: HTMLElement;
    @Prop() minCanvasScale: number = 15;
    @Prop() maxCanvasSCale: number = 300;
    @Prop() padding: number = 0;
    @Event() canvasScaleChange: EventEmitter;

    componentDidLoad() {
        this.resizeSCale()
    }

    @Listen('canvasChange')
    customEventHandler() {
        this.resizeSCale()
    }

    @Listen('resize', { target: 'window' })
    @Method()
    async resizeSCale() {
        let dataScreenCanvasEl = this.el.querySelector("datascreen-canvas");
        // 这里可能为负数，但是下边已经做了控制
        let contentCLientWidth = this.el.clientWidth - 2 * this.padding;
        let contentCLientHeight = this.el.clientHeight - 2 * this.padding;

        let scale: number;
        let dataScreenCanvasSize = await dataScreenCanvasEl.getCanvasSize();
        if (dataScreenCanvasEl && dataScreenCanvasSize) {
            if (dataScreenCanvasSize) {
                if ((dataScreenCanvasSize.w / dataScreenCanvasSize.h) > (contentCLientWidth / contentCLientHeight)) {
                    scale = (contentCLientWidth / dataScreenCanvasSize.w) * 100;
                } else {
                    scale = (contentCLientHeight / dataScreenCanvasSize.h) * 100;
                }
                scale = scale > this.minCanvasScale ? scale : this.minCanvasScale;
                scale = scale > this.maxCanvasSCale ? this.maxCanvasSCale : scale;
                scale = Math.ceil(scale * 100) / 100
                this.canvasScaleChange.emit(scale)
                dataScreenCanvasEl.scale = scale;
            }
        }
    }

    render() {
        return (
            <Host style={{ "padding": this.padding + "px" }}>
                <slot></slot>
            </Host>
        );
    }
}