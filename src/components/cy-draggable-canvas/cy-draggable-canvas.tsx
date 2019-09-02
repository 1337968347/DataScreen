import { Component, State, Method, Event, EventEmitter, h } from '@stencil/core';
import { ComType } from "../../interfaces";
import { getComponentDatas } from "../../util/datascreen-controller"

@Component({
    tag: 'cy-draggable-canvas',
    styleUrl: 'cy-draggable-canvas.css',
})
export class CyDraggableCanvas {
    @State() chooseComId: string ="";
    @State() comOptionList: ComType[] = [];
    @Event() popover: EventEmitter;

    componentWillLoad() {
        this.mapComDatasToState(getComponentDatas())
    }

    handleContentMenuClick(e) {
        e.preventDefault();
    }

    @Method()
    mapComDatasToState(comList: ComType[]) {
        this.comOptionList = comList;
        console.log(this.comOptionList)
    }

    handleChooseCom(comId){
        this.chooseComId = comId;
    }

    render() {
        return (
            <div class="drag_container" onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
                {this.comOptionList.map((comDarggable) =>
                    <cy-draggable key={comDarggable.id} isChoose={this.chooseComId ==comDarggable.id} canModify={true} onChoose={()=>{this.handleChooseCom(comDarggable.id)}}
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