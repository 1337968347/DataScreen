import { Component, State, Watch, Method, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { ComData, CanvasConfig } from "../../interfaces";
import { getComponentDatas, changeChooseComponent, getCanvasConfig, setComDataChange } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-canvas',
    styleUrl: 'datascreen-canvas.css',
})
export class DatascreenCanvas {
    @Prop() scale: number = 100;
    @Prop() canModify: boolean = true;
    @Element() el: HTMLElement;
    @State() chooseComId: string = "";
    @State() canvasOption: CanvasConfig;
    @State() comOptionList: ComData[] = [];
    @Event() popover: EventEmitter;
    @Event() canvasChange: EventEmitter;

    @Watch('scale')
    watchHandler(newScaleValue) {
        this.upDateElSize(this.canvasOption ,newScaleValue)
    }
 
    componentDidLoad() {
        this.canvasOption = getCanvasConfig();
        setTimeout(()=>{
            this.canvasChange.emit();
        },400)
        this.upDateElSize(this.canvasOption ,this.scale)
        this.mapComDatasToState(getComponentDatas())
    }

    upDateElSize(canvasOption: CanvasConfig, scale: number) {
        this.el.style.width = Math.floor((scale / 100) * parseInt(canvasOption.w)) + "px";
        this.el.style.height = Math.floor((scale / 100) * parseInt(canvasOption.h)) + "px"
    }

    @Method()
    async getCanvasSize(){
        return {
           w: parseInt(this.canvasOption.w) ,
           h: parseInt(this.canvasOption.h)
        }
    }

    @Method()
    async mapComDatasToState(comList: ComData[]) {
        this.comOptionList = comList;
    }

    @Method()
    async chooseComponent(comId) {
        this.chooseComId = comId;
        await changeChooseComponent(comId)
    }

    @Method()
    async updateCanvasConfig(config: CanvasConfig) {
        this.canvasOption = config;
        this.canvasChange.emit();
        this.upDateElSize(this.canvasOption ,this.scale)
    }

    handleDraggableDrag(e: CustomEvent, changeComponentData: ComData) {
        if (changeComponentData.data.view.x !== e.detail.x || changeComponentData.data.view.y !== e.detail.y) {
            // 引用地址类型
            changeComponentData.data.view.x = e.detail.x + "";
            changeComponentData.data.view.y = e.detail.y + "";
            setComDataChange(changeComponentData, true, true)
        }
    }

    handleDraggableScale(e: CustomEvent, changeComponentData: ComData) {
        if (changeComponentData.data.view.w !== e.detail.w || changeComponentData.data.view.h !== e.detail.h) {
            changeComponentData.data.view.w = e.detail.w;
            changeComponentData.data.view.h = e.detail.h;
            changeComponentData.data.view.x = e.detail.x + "";
            changeComponentData.data.view.y = e.detail.y + "";
            setComDataChange(changeComponentData, true, true)
        }
    }

    async popoverContextMenu(e: MouseEvent, onComId: string) {
        e.preventDefault();
        e.stopPropagation();
        await this.chooseComponent(onComId);
        this.popover.emit({
            component: 'popover-draggable-contextmenu',
            cssClass: "contextmenu-popover",
            event: e,
            showBackdrop: false,
            componentProps: {
                comId: onComId
            }
        })
    }

    render() {
        if(this.canvasOption){
            return (
                <div class="drag_container" style={{
                    "transform": `scale(${this.scale / 100})`,
                    "width": this.canvasOption.w + "px",
                    "height": this.canvasOption.h + "px",
                    "background-color": this.canvasOption.bgc + "",
                    "background-image": this.canvasOption.bgi ? `url(${this.canvasOption.bgi})` : "",
                    "overflow": this.canModify ? "inherit" : "hidden"
                }}>
                    {this.comOptionList.map((comDarggable) =>
                        <cy-draggable key={comDarggable.id}
                            onContextMenu={(e) => { this.canModify && this.popoverContextMenu(e, comDarggable.id) }}
                            isChoose={this.chooseComId == comDarggable.id} canModify={this.canModify} scale={Math.round(this.scale) / 100}
                            onCyDrag={(e) => { this.handleDraggableDrag(e, comDarggable) }}
                            onCyScale={(e) => { this.handleDraggableScale(e, comDarggable) }}
                            onChoose={() => { this.chooseComponent(comDarggable.id) }}
                            style={{
                                "position": "absolute",
                                "transform": `translate(${comDarggable.data.view.x}px, ${comDarggable.data.view.y}px) rotate(${comDarggable.data.view.deg}deg)`,
                                "width": comDarggable.data.view.w + "px", "height": comDarggable.data.view.h + "px",
                                "--opacity": comDarggable.data.view.opacity + ""
                            }}>
                            <draggable-adapter
                                key={comDarggable.id}
                                comOptionData={comDarggable}
                            ></draggable-adapter>
                        </cy-draggable>
                    )}
                </div>
            );
        }else{
            // loading
            return null;
        }
        
    }
}