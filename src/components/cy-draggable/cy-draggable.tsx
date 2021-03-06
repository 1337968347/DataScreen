import { Component, State, Element, Event, EventEmitter, Prop, Watch, Host, h } from '@stencil/core';
// 组件定义
// 可以拖拽缩放
@Component({
    tag: 'cy-draggable',
    styleUrl: 'cy-draggable.css',
    shadow: true
})
export class CyDraggable {
    @Element() el: HTMLElement;
    // 是否处于编辑模式下
    @Prop() canModify: boolean = false;
    // 当前dom是否获取到焦点
    @Prop() isChoose: boolean = false;
    @Prop() scale: number = 1;

    // 是否被拖拽放大缩小拖动 flag;
    @State() isDomDrag: boolean = false;

    @State() isHover: boolean = false;
    // 拖拽方法
    @Event() cyScale: EventEmitter;
    // 拖动方法
    @Event() cyDrag: EventEmitter;

    @Event() choose: EventEmitter;

    @Watch('isChoose')
    watchHandler(newValue) {
        this.setZindexByChoose(newValue)
    }

    componentDidLoad() {
        this.setZindexByChoose(this.isChoose);
    }

    setZindexByChoose(isChoose: boolean) {
        this.el.style.zIndex = isChoose ? "999" : "";
    }

    // type 拖放的类型
    // 拖动缩放方法
    onDragScaleDown(e: MouseEvent, type, offsetX: number, offserY: number) {
        e.stopPropagation();
        this.isDomDrag = true;
        var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g)

        // div左上角距离最左边的距离
        var boxOffsetLeft = Math.floor(e.clientX - (elAdress && parseInt(elAdress[0]) * this.scale || 0) - offsetX * this.scale);
        var boxOffsetTop = Math.floor(e.clientY - (elAdress && parseInt(elAdress[1]) * this.scale || 0) - offserY * this.scale);
        var startClientWidth = this.el.clientWidth;
        var startClientHeight = this.el.clientHeight;
        var startClientX = elAdress[0];
        var startClientY = elAdress[1];
        document.onpointermove = (e1) => {
            e1.stopPropagation();
            this.onDragScaleMove(e1, type, boxOffsetLeft, boxOffsetTop, startClientWidth, startClientHeight, parseInt(startClientX), parseInt(startClientY));
        }

        // 释放鼠标
        document.onpointerup = () => {
            this.isDomDrag = false;
            document.onpointermove = null;
            document.onpointerup = null;
            var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g)
            this.cyScale.emit({
                w: parseInt(this.el.clientWidth + ""),
                h: parseInt(this.el.clientHeight + ""),
                x: parseInt(elAdress[0]),
                y: parseInt(elAdress[1])
            });
        }
    }

    onDragScaleMove(e, type: string, boxOffsetLeft: number, boxOffsetTop: number, startClientWIdth: number, startClientHeight: number, startClientX: number, startClientY: number) {
        switch (type) {
            case "righttop":
                this.el.style.width = Math.floor((e.clientX - boxOffsetLeft) / this.scale) - startClientX + "px";
                var elementHeight = Math.floor((startClientHeight + startClientY) * this.scale + boxOffsetTop - e.clientY) / this.scale;
                this.el.style.height = elementHeight > 0 ? elementHeight + "px" : 0 + "px";
                this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${startClientX}px, ${(e.clientY - boxOffsetTop) / this.scale}px`);
                break;
            case "lefttop":
                var elementWidth = Math.floor((startClientWIdth + startClientX) * this.scale + boxOffsetLeft - e.clientX) / this.scale;
                this.el.style.width = elementWidth > 0 ? elementWidth + "px" : 0 + "px";
                var elementHeight = Math.floor((startClientHeight + startClientY) * this.scale + boxOffsetTop - e.clientY) / this.scale;
                this.el.style.height = elementHeight > 0 ? elementHeight + "px" : 0 + "px";
                this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${(e.clientX - boxOffsetLeft) / this.scale}px, ${(e.clientY - boxOffsetTop) / this.scale}px`);
                break;
            case "leftbottom":
                var elementWidth = Math.floor((startClientWIdth + startClientX) * this.scale + boxOffsetLeft - e.clientX) / this.scale;
                this.el.style.width = elementWidth > 0 ? elementWidth + "px" : 0 + "px";
                this.el.style.height = Math.floor((e.clientY - boxOffsetTop) / this.scale) - startClientY + "px";
                this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${(e.clientX - boxOffsetLeft) / this.scale}px, ${startClientY}px`);
                break;
            case "rightbottom":
                this.el.style.width = Math.floor((e.clientX - boxOffsetLeft) / this.scale) - startClientX + "px";
                this.el.style.height = Math.floor((e.clientY - boxOffsetTop) / this.scale) - startClientY + "px";
                break;
            case "top":
                var elementHeight = Math.floor((startClientHeight + startClientY) * this.scale + boxOffsetTop - e.clientY) / this.scale;
                this.el.style.height = elementHeight > 0 ? elementHeight + "px" : 0 + "px";
                this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${startClientX}px, ${(e.clientY - boxOffsetTop) / this.scale}px`);
                break;
            case "left":
                var elementWidth = Math.floor((startClientWIdth + startClientX) * this.scale + boxOffsetLeft - e.clientX) / this.scale;
                this.el.style.width = elementWidth > 0 ? elementWidth + "px" : 0 + "px";
                this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${(e.clientX - boxOffsetLeft) / this.scale}px, ${startClientY}px`);
                break;
            case "bottom":
                this.el.style.height = Math.floor((e.clientY - boxOffsetTop) / this.scale) - startClientY + "px"
                break;
            case "right":
                this.el.style.width = Math.floor((e.clientX - boxOffsetLeft) / this.scale) - startClientX + "px"
                break;
            default:
                break;
        }
    }

    // 拖动box方法
    onDragBoxDown(e) {
        e.preventDefault()
        e.stopPropagation();
        this.isDomDrag = true;
        let clientX = e.clientX;
        let clientY = e.clientY;
        var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g)
        // 包括两段距离 1,div左上角距离最左边的距离 2,div质点距离div左边的距离
        var boxOffsetLeft = clientX - (elAdress && parseInt(elAdress[0]) * this.scale || 0);
        var boxOffsetTop = clientY - (elAdress && parseInt(elAdress[1]) * this.scale || 0);

        document.onpointermove = (e1) => {
            e1.stopPropagation();
            this.onDragBoxMove(e1, boxOffsetLeft, boxOffsetTop);
        }
        // 释放鼠标
        document.onpointerup = () => {
            this.isDomDrag = false;
            document.onpointermove = null;
            document.onpointerup = null;
            var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g);
            this.cyDrag.emit(
                {
                    w: parseInt(this.el.clientWidth + ""),
                    h: parseInt(this.el.clientHeight + ""),
                    x: parseInt(elAdress[0]),
                    y: parseInt(elAdress[1])
                }
            );
        }

    }

    // 拖动box方法
    onDragBoxMove(e, boxOffsetLeft: number, boxOffsetTop: number) {
        let clientX = e.clientX;
        let clientY = e.clientY;
        var left = (clientX - boxOffsetLeft) / this.scale,
            top = (clientY - boxOffsetTop) / this.scale;
        this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${left}px, ${top}px`);
    }


    handleDomChoose(e) {
        e.preventDefault()
        e.stopPropagation();
        this.choose.emit()
    }


    render() {
        return (
            <Host
                style={{ "touch-action": this.isChoose ? "none" : "auto", border: (this.isHover && this.canModify && !this.isChoose) && "1px solid var(--border-color)" || "" }}
                onMouseEnter={() => { this.isHover = true }}
                onMouseLeave={() => { this.isHover = false }}
                onClick={(e) => { this.handleDomChoose(e) }}
                onPointerDown={(e) => { this.canModify && this.isChoose && this.onDragBoxDown(e) }}>
                {/* 编辑才显示的dom */}
                {/* 拖拽box的背景元素 */}
                {/* 悬浮上去才显示dom 操作 */}
                <div class={this.canModify && this.isChoose || this.isDomDrag ? "draggable_over" : "draggable_over hiddlen"}>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_righttop"
                        onPointerDown={(e) => { this.onDragScaleDown(e, 'righttop', this.el.clientWidth, 0) }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_rightbottom" onPointerDown={(e) => { this.onDragScaleDown(e, 'rightbottom', this.el.clientWidth, this.el.clientHeight) }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_leftbottom" onPointerDown={(e) => { this.onDragScaleDown(e, 'leftbottom', 0, this.el.clientHeight) }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_lefttop" onPointerDown={(e) => { this.onDragScaleDown(e, 'lefttop', 0, 0) }}></i>

                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_right" onPointerDown={(e) => { this.onDragScaleDown(e, 'right', this.el.clientWidth, Math.floor(this.el.clientHeight * 0.5)) }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_bottom" onPointerDown={(e) => { this.onDragScaleDown(e, 'bottom', Math.floor(this.el.clientWidth * 0.5), this.el.clientHeight) }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_left" onPointerDown={(e) => { this.onDragScaleDown(e, 'left', 0, Math.floor(0.5 * this.el.clientHeight)) }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_top" onPointerDown={(e) => { this.onDragScaleDown(e, 'top', Math.floor(0.5 * this.el.clientWidth), 0) }}></i>
                </div>

                {/* 一直显示的dom */}
                <div class="container">
                    <slot />
                </div>
            </Host>
        );
    }
}