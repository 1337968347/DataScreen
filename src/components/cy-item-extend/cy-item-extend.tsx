import { Component, Prop, State, h } from '@stencil/core';


@Component({
    tag: 'cy-item-extend',
    styleUrl: 'cy-item-extend.scss',
    shadow: true
})
export class CyItemExtend {
    @Prop() header: string = ""
    @Prop() iconPosition: "start" | "end" = "end"
    @State() openTag: boolean = false;

    render() {
        return (
            <ion-list>
                <ion-item button lines="inset" onClick={() => { this.openTag = !!!this.openTag }}>
                    <ion-label>{this.header}</ion-label>
                    <ion-icon slot={this.iconPosition} name={!this.openTag ? "arrow-dropright" : "arrow-dropdown"}></ion-icon>
                </ion-item>
                {this.openTag ?
                    <ion-item-group>
                        <slot />
                    </ion-item-group> : null
                }
            </ion-list>
        );
    }
}