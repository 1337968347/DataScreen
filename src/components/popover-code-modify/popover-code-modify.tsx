import { Component, Prop, State, Event, EventEmitter, Host, h } from '@stencil/core';
import { popoverController } from '@ionic/core';
import uuid from "uuid";

import { DataScreen } from "../../interfaces";
import { DataScreenData } from "../../providers/datascreen-data";

@Component({
    tag: 'popover-code-modify',
    styleUrl: 'popover-code-modify.css'
})
export class PopoverCodeModify {
    @Prop() dataScreenId: string;
    @Prop() dismissCallBack?: Function;
    @State() codeAll: string = "";
    @Event() toast: EventEmitter;

    componentWillLoad() {
        this.initCodeAll()
    }

    async initCodeAll() {
        if (this.dataScreenId) {
            let dataScreenOption = await DataScreenData.getDataScreen(this.dataScreenId);
            delete dataScreenOption.id;
            this.codeAll = JSON.stringify(dataScreenOption, null, 1)
        }
    }

    handleCodeChange(e) {
        this.codeAll = e.detail.value;
    }

    checkDataOJBK(objStr: string) {
        try {
            let parseObj: DataScreen = JSON.parse(objStr)
            if (parseObj.canvasOption.w && parseObj.canvasOption.h && parseObj.canvasOption.bgc &&
                (Object.prototype.toString.call(parseObj.componentsData).indexOf('Array') !== -1)) {
                return true;
            } else {
                this.toast.emit("缺少必要参数!");
                return false;
            }
        } catch (error) {
            console.error(error)
            this.toast.emit("数据格式错误!");
            return false;
        }
    }

    async saveComponentsData() {
        if (this.checkDataOJBK(this.codeAll)) {
            let dataScreenOptionModify: DataScreen = JSON.parse(this.codeAll);
            // modify
            if (this.dataScreenId) {
                let dataScreenOptionLocal: DataScreen = await DataScreenData.getDataScreen(this.dataScreenId);
                dataScreenOptionModify.id = dataScreenOptionLocal.id;
                await DataScreenData.setDataScreenById(dataScreenOptionLocal.id, dataScreenOptionModify);
            } else {
                dataScreenOptionModify.id = uuid.v4()
                await DataScreenData.addDataScreen(dataScreenOptionModify);
            }
            this.closePopover(dataScreenOptionModify.id);
        }
    }

    cancelModify() {
        this.closePopover("")
    }

    closePopover(id: string) {
        this.dismissCallBack && this.dismissCallBack(id);
        popoverController.dismiss()
    }

    render() {
        return (
            <Host style={{ "flex": "1", "display": "flex", "flex-direction": "column" }}>
                <ion-toolbar color="secondary">
                    <ion-title>show me the code</ion-title>
                </ion-toolbar>
                <div class="popover_content">
                    <ion-textarea placeholder="复制大屏数据到这导入" debounce={300} wrap="soft" onIonChange={(e) => { this.handleCodeChange(e) }} value={this.codeAll}></ion-textarea>
                    <ion-row>
                        <ion-col><ion-button onClick={() => { this.saveComponentsData() }} color="primary" expand="block">保存</ion-button></ion-col>
                        <ion-col><ion-button onClick={() => { this.cancelModify() }} color="primary" fill="outline" expand="block">取消</ion-button></ion-col>
                    </ion-row>
                </div>

            </Host>
        );
    }
}