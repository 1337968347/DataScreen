import { Component, Prop, Host, Method, Event, EventEmitter, Listen, Element, h } from '@stencil/core';

@Component({
    tag: 'datascreen-canvas-content',
    styleUrl: 'datascreen-canvas-content.scss'
})
export class DatascreenCanvasContent {
    @Element() el: HTMLElement;
    @Prop() minCanvasScale: number = 10;
    @Prop() maxCanvasSCale: number = 300;
    @Event() canvasScaleChange: EventEmitter;

    componentDidLoad() {
        setTimeout(() => {
            this.resizeSCale()
        }, 500)
    }

    @Listen('canvasChange')
    customEventHandler() {
        this.resizeSCale()
    }

    @Listen('resize', { target: 'window' })
    @Method()
    async resizeSCale() {
        let dataScreenCanvasEl = this.el.querySelector("datascreen-canvas");
        let scale: number;
        if (dataScreenCanvasEl) {
            let dataScreenCanvasSize = await dataScreenCanvasEl.getCanvasSize();
            if (dataScreenCanvasSize) {
                if ((dataScreenCanvasSize.w / dataScreenCanvasSize.h) > (this.el.clientWidth / this.el.clientHeight)) {
                    scale = parseFloat((this.el.clientWidth / dataScreenCanvasSize.w).toFixed(5)) * 100;
                } else {
                    scale = parseFloat((this.el.clientHeight / dataScreenCanvasSize.h).toFixed(5)) * 100;
                }
                scale = scale > this.minCanvasScale ? scale : this.minCanvasScale;
                scale = scale > this.maxCanvasSCale ? this.maxCanvasSCale : scale;
                this.canvasScaleChange.emit(scale)
                dataScreenCanvasEl.scale = scale;
            }
        }


    }
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}