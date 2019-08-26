import { Component,Event, EventEmitter,h } from '@stencil/core';

@Component({
    tag: 'cy-draggable-canvas',
    styleUrl: 'cy-draggable-canvas.css',
    shadow: true
})
export class CyDraggableCanvas {
    @Event() popover: EventEmitter;

    handleContentMenuClick(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div class="drag_container" onContextMenu={(e) => { this.handleContentMenuClick(e) }}>
                <slot></slot>
            </div>
        );
    }
}