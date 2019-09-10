import { Component, State, Event, EventEmitter, h } from '@stencil/core';


@Component({
    tag: 'cy-fast-click',
    shadow: true
})
export class CyFastClick {
    // 移动端用来模拟点击的东东
    @State() clientX: number = 0;
    @State() clientY: number = 0;
    @Event() fastClick: EventEmitter;

    // 手机点击事件
    touchStart(e) {
        this.clientX = e.clientX;
        this.clientY = e.clientY;
    }

    touchEnd(e) {
        let moveX = e.clientX - this.clientX;
        let moveY = e.clientY - this.clientY;
        // 勾股定理
        if (Math.sqrt(Math.pow(moveX, 2) + Math.pow(moveY, 2)) < 4) {
            this.fastClick.emit(e)
        }
    }

    render() {
        return (
            <div style={{ "display": "inherit", "width": "100%", "height": "100%" }}
                onMouseDown={(e) => { this.touchStart(e); }} onMouseUp={(e) => { this.touchEnd(e) }}>
                <slot></slot>
            </div >
        );
    }
}