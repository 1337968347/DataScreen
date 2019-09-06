import { Component, State, Method,Element, Event, EventEmitter, h, Prop } from '@stencil/core';
import { ComType,CanvasConfig } from "../../interfaces";
import { getComponentDatas, changeChooseComponent,getCanvasConfig } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-canvas',
    styleUrl: 'datascreen-canvas.css',
})
export class DatascreenCanvas {
    @Prop() scale: number = 100;
    @Element() el :HTMLElement;
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
    async chooseCurrentComponent(comId) {
        this.chooseComId = comId;
        changeChooseComponent(comId)
    }

    @Method() 
    async updateComConfig(config:CanvasConfig){
        this.canvasOption =config;
    }

    render() {
        return (
            <div class="drag_container" style={{ 
                "transform": `scale(${this.scale / 100})`,
                "width": this.canvasOption.w+"px", 
                "height": this.canvasOption.h+"px",
                "background-color": this.canvasOption.bgc+"",
                "background-image": this.canvasOption.bgi? `url(${this.canvasOption.bgi})`:""
        }}  
            onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
                {this.comOptionList.map((comDarggable) =>
                    <cy-draggable key={comDarggable.id} 
                    isChoose={this.chooseComId == comDarggable.id} canModify={true} scale={Math.round(this.scale) / 100}
                    onChoose={() => { this.chooseCurrentComponent(comDarggable.id) }}
                        style={{
                            "position": "absolute",
                            "transform": `translate(${comDarggable.data.view.x}px, ${comDarggable.data.view.y}px) rotate(${comDarggable.data.view.deg}deg)`, 
                            "width": comDarggable.data.view.w+"px", "height": comDarggable.data.view.h+"px",
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