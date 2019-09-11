import { Component,h, State } from '@stencil/core';

import { ComType, CanvasConfig } from "../../interfaces";

@Component({
    tag: 'app-preview',
    styleUrl: 'app-preview.scss'
})
export class AppPreview {
    @State() canvasOption: CanvasConfig;
    @State() comOptionList: ComType[] = [];

    componentWillLoad() {
        this.canvasOption = JSON.parse(localStorage.getItem("canvasConfig"));
        this.comOptionList = JSON.parse(localStorage.getItem("comList"));
    }

    render() {
        return (
            <ion-content>
                <div class="drag_container" style={{
                "width": this.canvasOption.w + "px",
                "height": this.canvasOption.h + "px",
                "background-color": this.canvasOption.bgc + "",
                "background-image": this.canvasOption.bgi ? `url(${this.canvasOption.bgi})` : ""
            }} >
                {this.comOptionList.map((comDarggable) =>
                    <cy-draggable key={comDarggable.id}  canModify={false} 
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
            </ion-content>
        );
    }
}