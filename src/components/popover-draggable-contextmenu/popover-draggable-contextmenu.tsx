import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { popoverController } from "@ionic/core"
import { removeComponentData, updateLayerMove, getComponentDatas } from "../../util/datascreen-controller"
import { ComData } from '../../interfaces';

@Component({
    tag: 'popover-draggable-contextmenu',
    styleUrl: 'popover-draggable-contextmenu.scss'
})
export class PopoverDraggableContextmenu {
    @Prop() comId: string;
    @Event() toast: EventEmitter;
    comIndex: number;
    comDatas: ComData[];

    componentWillLoad() {
        this.comDatas = getComponentDatas()
        this.comDatas.map((com, index) => {
            if (com.id == this.comId) {
                this.comIndex = index
            }
        })
    }

    async deletecomponentData() {
        await removeComponentData(this.comId);
        this.toast.emit("删除成功!");
        popoverController.dismiss()
    }

    setToTop() {
        if(this.comIndex!==this.comDatas.length){
            updateLayerMove(this.comIndex, this.comDatas.length, true, true, true);
        }
        popoverController.dismiss()
    }

    setToBottom() {
        if(this.comIndex !== 0){
            updateLayerMove(this.comIndex, 0, true, true, true);
        }
        popoverController.dismiss()
    }

    setToTopMore() {
        if(this.comIndex < this.comDatas.length){
            updateLayerMove(this.comIndex, this.comIndex + 1, true, true, true);
        }
        popoverController.dismiss()
    }

    setToBottomMore() {
        if(this.comIndex > 0){
            updateLayerMove(this.comIndex, this.comIndex - 1, true, true, true);
        }
        popoverController.dismiss()
    }

    render() {
        return (
            <ion-list>
                <ion-item button color="secondary" onClick={() => { this.setToTop() }}>
                    <ion-icon name="arrow-round-up" slot="start"></ion-icon>
                    <ion-label>
                        置顶
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary" onClick={() => { this.setToBottom() }}>
                    <ion-icon name="arrow-round-down" slot="start"></ion-icon>
                    <ion-label>
                        置底
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary" onClick={() => { this.setToTopMore() }}>
                    <ion-icon name="trending-up" slot="start"></ion-icon>
                    <ion-label>
                        上移一层
                    </ion-label>
                </ion-item>
                <ion-item button color="secondary" onClick={() => { this.setToBottomMore() }}>
                    <ion-icon name="trending-down" slot="start"></ion-icon>
                    <ion-label>
                        下移一层
                    </ion-label>
                </ion-item>
                <ion-item button onClick={() => { this.deletecomponentData() }} color="secondary">
                    <ion-icon name="trash" slot="start"></ion-icon>
                    <ion-label>
                        删除
                    </ion-label>
                </ion-item>
            </ion-list>
        );
    }
}