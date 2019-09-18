import { Component, State, Method, Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { ComType, CanvasConfig } from "../../interfaces";
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
    @State() comOptionList: ComType[] = [];
    @Event() popover: EventEmitter;

    componentWillLoad() {
        this.canvasOption = getCanvasConfig();
        this.mapComDatasToState(getComponentDatas())
    }

    handleContentMenuClick(e) {
        e.preventDefault();
    }

    @Method()
    async mapComDatasToState(comList: ComType[]) {
        this.comOptionList = comList;
    }

    @Method()
    async chooseComponent(comId) {
        this.chooseComId = comId;
        changeChooseComponent(comId)
    }

    @Method()
    async updateCanvasConfig(config: CanvasConfig) {
        this.canvasOption = config;
    }

    handleDraggableDrag(e: CustomEvent, changeComponentData: ComType) {
        if (changeComponentData.data.view.x !== e.detail.x || changeComponentData.data.view.y !== e.detail.y) {
            // 引用地址类型
            changeComponentData.data.view.x = e.detail.x+"";
            changeComponentData.data.view.y = e.detail.y+"";
            setComDataChange(changeComponentData, true, true)
        }
    }

    handleDraggableScale(e: CustomEvent, changeComponentData: ComType) {
        if (changeComponentData.data.view.w !== e.detail.w || changeComponentData.data.view.h !== e.detail.h ) {
            changeComponentData.data.view.w = e.detail.w;
            changeComponentData.data.view.h = e.detail.h;
            changeComponentData.data.view.x = e.detail.x+"";
            changeComponentData.data.view.y = e.detail.y+"";
            setComDataChange(changeComponentData, true, true)
        }
    }

    render() {
        return (
            <div class="drag_container" style={{
                "transform": `scale(${this.scale / 100})`,
                "width": this.canvasOption.w + "px",
                "height": this.canvasOption.h + "px",
                "background-color": this.canvasOption.bgc + "",
                "background-image": this.canvasOption.bgi ? `url(${this.canvasOption.bgi})` : "",
                "overflow": this.canModify ? "inherit" : "hidden"
            }} onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
                {this.comOptionList.map((comDarggable) =>
                    <cy-draggable key={comDarggable.id}
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
    }
}