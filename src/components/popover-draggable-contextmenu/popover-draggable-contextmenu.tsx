import { Component, Prop,Event,EventEmitter, h } from '@stencil/core';
import { popoverController } from "@ionic/core"
import { removeComponentData } from "../../util/datascreen-controller"

@Component({
    tag: 'popover-draggable-contextmenu',
    styleUrl: 'popover-draggable-contextmenu.scss'
})
export class PopoverDraggableContextmenu {
    @Prop() comId: string;
    @Event() toast: EventEmitter;

    componentWillLoad() {
    }

    async deletecomponentData() {
        await removeComponentData(this.comId);
        this.toast.emit("删除成功!");
        popoverController.dismiss()
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
                <ion-item button onClick={()=>{this.deletecomponentData()}} color="secondary">
                    <ion-icon name="trash" slot="start"></ion-icon>
                    <ion-label>
                        删除
                    </ion-label>
                </ion-item>
            </ion-list>
        );
    }
}