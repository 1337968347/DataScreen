import { Component, State, Method, Event, EventEmitter, h } from '@stencil/core';
import { ComType } from "../../interfaces";
import { getComponentDatas, changeChooseComponent } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-canvas',
    styleUrl: 'datascreen-canvas.css',
})
export class DatascreenCanvas {
    @State() chooseComId: string = "";
    @State() comOptionList: ComType[] = [];
    @Event() popover: EventEmitter;

    componentWillLoad() {
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

    render() {
        return (
            <div class="drag_container" onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
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