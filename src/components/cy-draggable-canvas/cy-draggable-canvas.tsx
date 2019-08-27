import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';

@Component({
    tag: 'cy-draggable-canvas',
    styleUrl: 'cy-draggable-canvas.css',
    shadow: true
})
export class CyDraggableCanvas {
    @Prop() comOptionList: any[] = [];
    @Event() popover: EventEmitter;

    handleContentMenuClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div class="drag_container" onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
                {this.comOptionList.map((comDarggable) =>
                    <cy-draggable-component
                        comDraggableoption={comDarggable}
                        canModify={true}
                    ></cy-draggable-component>
                )}
            </div>
        );
    }
}