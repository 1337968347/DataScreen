import { Component, Watch, State, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
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
        this.changeZIndexByChoose(newValue);
    }

    componentDidLoad() {
        // 如果是修改模式 添加css类
        this.el.oncontextmenu = function () { return false };
        this.changeZIndexByChoose(this.isChoose);
    }



    // type 拖放的类型
    // 拖动缩放方法
    onDragScaleDown(e, type) {
        e.preventDefault()
        e.stopPropagation();
        console.log(e)
        this.isDomDrag = true;
        var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g)
        // div左上角距离最左边的距离
        var boxOffsetLeft = e.clientX - (elAdress && parseInt(elAdress[0]) * this.scale || 0);
        var boxOffsetTop = e.clientY - (elAdress && parseInt(elAdress[1]) * this.scale || 0);
        document.onmousemove = (e1) => {
            e1.stopPropagation();
            this.onDragScaleMove(e1, type, Math.floor(boxOffsetLeft - e.layerX* this.scale) , Math.floor(boxOffsetTop- e.layerY* this.scale) );
        }

        // 释放鼠标
        document.onmouseup = () => {
            this.isDomDrag = false;
            document.onmousemove = null;
            document.onmouseup = null;
            this.cyScale.emit(this.el.shadowRoot.querySelector(".container"));
        }
    }

    onDragScaleMove(e, type: string, boxOffsetLeft: number, boxOffsetTop: number) {
        console.log(boxOffsetTop)
        var elAdress: string[] = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g);
        // var clientHeight = this.el.clientHeight;
        switch (type) {
            case "top":
                this.el.style.height = parseInt(elAdress[1])  - Math.floor((e.clientY - boxOffsetTop) / this.scale) + "px";
                // this.el.style.transform = this.el.style.transforsm.replace(/translate(.*px, .*px)/g, `translate(${elAdress[0]}px, ${Math.floor((e.clientY - boxOffsetTop) / this.scale)}px`);
                break;
            case "bottom":
                    this.el.style.height = Math.floor(e.clientY - Math.floor(parseInt(elAdress[1]) * this.scale))   + "px";
                break;
            case "righttop":
                if (e.clientX > boxOffsetLeft) {
                    this.el.style.width = e.clientX - boxOffsetLeft + "px";
                }
                if (e.clientY > boxOffsetTop) {
                    this.el.style.height = e.clientY - boxOffsetTop + "px";
                }
                break;
            case "ver":
                if (e.clientY > boxOffsetTop) {
                    this.el.style.height = e.clientY - boxOffsetTop + "px";
                }
                break;

            case "all":
                if (e.clientX > boxOffsetLeft) {
                    this.el.style.width = e.clientX - boxOffsetLeft + "px";
                }
                if (e.clientY > boxOffsetTop) {
                    this.el.style.height = e.clientY - boxOffsetTop + "px";
                }
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
        var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g)
        // 包括两段距离 1,div左上角距离最左边的距离 2,div质点距离div左边的距离
        var boxOffsetLeft = e.clientX - (elAdress && parseInt(elAdress[0]) * this.scale || 0);
        var boxOffsetTop = e.clientY - (elAdress && parseInt(elAdress[1]) * this.scale || 0);
        document.onmousemove = (e1) => {
            e1.stopPropagation();
            this.onDragBoxMove(e1, boxOffsetLeft, boxOffsetTop);
        }
        // 释放鼠标
        document.onmouseup = () => {
            this.isDomDrag = false;
            document.onmousemove = null;
            document.onmouseup = null;
            this.cyDrag.emit(this.el);
        }
    }

    // 拖动box方法
    onDragBoxMove(e, boxOffsetLeft: number, boxOffsetTop: number) {
        var left = (e.clientX - boxOffsetLeft) / this.scale,
            top = (e.clientY - boxOffsetTop) / this.scale,
            winW = this.el.closest("datascreen-canvas").querySelector(".drag_container").clientWidth,
            winH = this.el.closest("datascreen-canvas").querySelector(".drag_container").clientHeight,
            maxW = winW - this.el.offsetWidth - 10,
            maxH = winH - this.el.offsetHeight;
        if (left < 0) {
            left = 0;
        } else if (left > maxW) {
            left = maxW;
        }
        if (top < 0) {
            top = 0;
        } else if (top > maxH) {
            top = maxH;
        }
        this.el.style.transform = this.el.style.transform.replace(/translate(.*px, .*px)/g, `translate(${left}px, ${top}px`);
    }


    handleDomChoose(e) {
        e.preventDefault()
        e.stopPropagation();
        this.changeZIndexByChoose(true)
        this.choose.emit()
    }

    changeZIndexByChoose(isChoose: boolean) {
        if (isChoose) {
            this.el.style.zIndex = 999 + "";
        } else {
            this.el.style.zIndex = 1 + "";
        }
    }

    render() {
        return (
            <div class={this.isHover && !this.isChoose ? "sacleBox border" : "sacleBox"}
                onMouseEnter={() => { this.isHover = true }}
                onMouseLeave={() => { this.isHover = false }}
                onClick={(e) => { this.canModify && this.handleDomChoose(e) }}
                onMouseDown={(e) => { this.canModify && this.isChoose && this.onDragBoxDown(e) }}>
                {/* 编辑才显示的dom */}
                {/* 拖拽box的背景元素 */}
                {/* 悬浮上去才显示dom 操作 */}
                <div class={this.canModify && this.isChoose || this.isDomDrag ? "draggable_over" : "draggable_over hiddlen"}>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_righttop" onMouseDown={(e) => { this.onDragScaleDown(e, 'righttop') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_right" onMouseDown={(e) => { this.onDragScaleDown(e, 'right') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_rightbottom" onMouseDown={(e) => { this.onDragScaleDown(e, 'rightbottom') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_bottom" onMouseDown={(e) => { this.onDragScaleDown(e, 'bottom') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_leftbottom" onMouseDown={(e) => { this.onDragScaleDown(e, 'leftbottom') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_left" onMouseDown={(e) => { this.onDragScaleDown(e, 'left') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_lefttop" onMouseDown={(e) => { this.onDragScaleDown(e, 'lefttop') }}></i>
                    <i style={{ transform: `scale(${(1 / this.scale).toFixed(4)}, ${(1 / this.scale).toFixed(4)})` }} class="drag_tag drag_tag_top" onMouseDown={(e) => { this.onDragScaleDown(e, 'top') }}></i>
                </div>

                {/* 一直显示的dom */}
                <div class="container">
                    <slot />
                </div>
            </div>
        );
    }
}