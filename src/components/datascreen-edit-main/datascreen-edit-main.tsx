import { Component, State, h } from '@stencil/core';
import { ComType } from "../../interfaces"

@Component({
    tag: 'datascreen-edit-main',
    styleUrl: 'datascreen-edit-main.scss'
})
export class DatascreenEditMain {
    @State() mockData: ComType[] = []

    render() {
        return [
            <div class="datascreen-edit-container">
                <cy-draggable-canvas style={{ transform: "scale(1)" }} comOptionList={this.mockData}>
                </cy-draggable-canvas>
            </div>,
            <div class="datascreen-edit-footer">

            </div>
        ];
    }
}