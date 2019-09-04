import { Component,Watch,  State, Method,Element, Event, EventEmitter, h } from '@stencil/core';
import { ComType,CanvasConfig } from "../../interfaces";
import { getComponentDatas, changeChooseComponent,getCanvasConfig } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-canvas',
    styleUrl: 'datascreen-canvas.css',
})
export class DatascreenCanvas {
    @Element() el :HTMLElement;
    @State() chooseComId: string = "";
    @State() canvasOption: CanvasConfig;
    @State() comOptionList: ComType[] = [];
    @Event() popover: EventEmitter;

    @Watch('comOptionList')
    watchHandler(newValue) {
        console.log('The value of myProp is: ', newValue);
    }

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
                "width": this.canvasOption.w+"px", 
                "height": this.canvasOption.h+"px",
                "background-color": this.canvasOption.bgc+"",
                "background-image": this.canvasOption.bgi? `url(${this.canvasOption.bgi})`:""
        }}  
            onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
                {this.comOptionList.map((comDarggable) =>
                    <cy-draggable key={comDarggable.id} isChoose={this.chooseComId == comDarggable.id} canModify={true} onChoose={() => { this.chooseCurrentComponent(comDarggable.id) }}
                        style={{
                            "position": "absolute",
                            "top": comDarggable.data.view.y, "left": comDarggable.data.view.x,
                            "width": comDarggable.data.view.w, "height": comDarggable.data.view.h,
                            "opacity": comDarggable.data.view.opacity + "",
                            "transform": `rotate(${comDarggable.data.view.deg}deg)`
                        }}>
                        <cy-draggable-adapter
                            comOptionData={comDarggable}
                        ></cy-draggable-adapter>
                    </cy-draggable>
                )}
            </div>
        );
    }
}