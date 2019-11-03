import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'cy-iconfont',
    styleUrl: 'cy-iconfont.scss'
})
export class CyIconfont {
    @Prop() name: string;

    render() {
        return (
            <svg class="icon" aria-hidden="true">
                <use xlinkHref={"#"+this.name}></use>
            </svg>
        );
    }
}