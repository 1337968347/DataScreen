import { Component, State, Element, Event, EventEmitter, Prop, h } from '@stencil/core';
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
    
    // 是否被拖拽放大缩小拖动 flag;
    @State() isDomDrag: boolean = false;

    @State() isHover: boolean =false;
    // 拖拽方法
    @Event() cyScale: EventEmitter;
    // 拖动方法
    @Event() cyDrag: EventEmitter;

    @Event() choose: EventEmitter;


    componentDidLoad() {
        // 如果是修改模式 添加css类
        this.el.oncontextmenu = function () { return false };
        if (!this.el.style.zIndex) {
            this.el.style.zIndex = 1 + "";
        }
    }

    // type 拖放的类型
    // 拖动缩放方法
    onDragScaleDown(e, type) {
        e.preventDefault()
        e.stopPropagation();
        this.isDomDrag = true;
        // 用刚点下去的clinetx计算出this.el.offsetLeft 左边 算不到的那块距离
        var boxOffsetLeft = e.clientX - this.el.offsetWidth;
        var boxOffsetTop = e.clientY - this.el.offsetHeight;
        document.onmousemove = (e1) => {
            e1.stopPropagation();
            this.onDragScaleMove(e1, type, boxOffsetLeft, boxOffsetTop);
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
        switch (type) {
            case "hor":
                if (e.clientX > boxOffsetLeft) {
                    this.el.style.width = e.clientX - boxOffsetLeft + "px";
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
        // 距离点击当前box左上角的距离
        var elAdress = this.el.style.transform.match(/\-?[0-9]+\.?[0-9]*/g)
        var boxOffsetLeft = e.clientX - (elAdress&& parseInt(elAdress[0]) || 0);
        var boxOffsetTop = e.clientY -  (elAdress&& parseInt(elAdress[1]) || 0);
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
        var left = e.clientX - boxOffsetLeft,
            top = e.clientY - boxOffsetTop,
            winW = this.el.closest("cy-draggable-canvas").querySelector(".drag_container").clientWidth,
            winH = this.el.closest("cy-draggable-canvas").querySelector(".drag_container").clientHeight,
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
        this.el.style.transform = `translate(${left}px, ${top}px)`;
    }

    
    handleDomChoose(e){
        e.preventDefault()
        e.stopPropagation();
        this.el.style.zIndex = 999 + "";
        this.choose.emit()
    }

    render() {
        return (
            <div class={this.isHover&&!this.isChoose? "sacleBox border": "sacleBox"}
                onMouseEnter = {()=>{this.isHover = true}}
                onMouseLeave = {()=>{ this.isHover = false}}
                onClick={(e)=>{this.canModify && this.handleDomChoose(e) }}
                onMouseDown={(e) => { this.canModify&&this.isChoose && this.onDragBoxDown(e) }}>
                {/* 编辑才显示的dom */}
                {/* 拖拽box的背景元素 */}
                {/* 悬浮上去才显示dom 操作 */}
                <div class={this.canModify && this.isChoose || this.isDomDrag ? "draggable_over" : "draggable_over hiddlen"}>
                    <div class="drag_tag drag_tag_right" onMouseDown={(e) => { this.onDragScaleDown(e, 'hor') }}></div>
                    <div class="drag_tag drag_tag_bottom" onMouseDown={(e) => { this.onDragScaleDown(e, 'ver') }}></div>
                    <div class="drag_tag drag_tag_rightbottom" onMouseDown={(e) => { this.onDragScaleDown(e, 'all') }}></div>
                </div>

                {/* 一直显示的dom */}
                <div class="container">
                    <slot />
                </div>
            </div>
        );
    }
}