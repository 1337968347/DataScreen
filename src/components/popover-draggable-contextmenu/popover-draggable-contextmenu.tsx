import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'popover-draggable-contextmenu',
    styleUrl: 'popover-draggable-contextmenu.scss'
})
export class PopoverDraggableContextmenu {
    @Prop() comId: string;

    componentWillLoad() {
    }

    render() {
        return (
            <ion-list>
                <ion-item button color="secondary">
                    <ion-icon name="arrow-round-up" slot="start"></ion-icon>
                    <ion-label>
                        置顶
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary">
                    <ion-icon name="arrow-round-down" slot="start"></ion-icon>
                    <ion-label>
                        置底
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary">
                    <ion-icon name="trending-up" slot="start"></ion-icon>
                    <ion-label>
                        上移一层
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary">
                    <ion-icon name="trending-down" slot="start"></ion-icon>
                    <ion-label>
                        下移一层
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary">
                    <ion-icon name="trash" slot="start"></ion-icon>
                    <ion-label>
                        删除
                    </ion-label>
                </ion-item>
            </ion-list>
        );
    }
}