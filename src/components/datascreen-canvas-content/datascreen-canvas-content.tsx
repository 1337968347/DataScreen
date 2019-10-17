import { Component, Prop, Host, Method, Event, EventEmitter, Listen, Element, h } from '@stencil/core';

@Component({
    tag: 'datascreen-canvas-content',
    styleUrl: 'datascreen-canvas-content.scss'
})
export class DatascreenCanvasContent {
    @Element() el: HTMLElement;
    @Prop() minCanvasScale: number = 15;
    @Prop() maxCanvasSCale: number = 300;
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
        let scale: number;
        if (dataScreenCanvasEl) {
            let dataScreenCanvasSize = await dataScreenCanvasEl.getCanvasSize();
            if (dataScreenCanvasSize) {
                if ((dataScreenCanvasSize.w / dataScreenCanvasSize.h) > (this.el.clientWidth / this.el.clientHeight)) {
                    scale = (this.el.clientWidth / dataScreenCanvasSize.w) * 100;
                } else {
                    scale = (this.el.clientHeight / dataScreenCanvasSize.h) * 100;
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
            <Host>
                <slot></slot>
            </Host>
        );
    }
}