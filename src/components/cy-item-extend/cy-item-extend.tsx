import { Component, Prop, State, h } from '@stencil/core';


@Component({
    tag: 'cy-item-extend',
    styleUrl: 'cy-item-extend.scss',
    shadow: true
})
export class CyItemExtend {
    @Prop() header: string = ""
    @Prop() isOpen: boolean = true;

    @State() openTag: boolean = true;


    componentDidLoad() {
        this.openTag = this.isOpen;
    }

    render() {
        return (
            <ion-list>
                <ion-item lines="inset" onClick={() => { this.openTag = !!!this.openTag }}>
                    <ion-label>{this.header}</ion-label>
                    <ion-icon slot="end" name={this.openTag ? "arrow-dropright" : "arrow-dropdown"}></ion-icon>
                </ion-item>
                <ion-item-group style={{ "display": !this.openTag ? "inherit" : "none" }}>
                    <slot />
                </ion-item-group>
            </ion-list>
        );
    }
}