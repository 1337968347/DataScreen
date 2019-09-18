import { Component, State, Event, EventEmitter, h } from '@stencil/core';
import { popoverController } from '@ionic/core';

import { CanvasConfig } from "../../interfaces";
import { getComponentDatas, getCanvasConfig, setComponentDatas,saveCanvasConfig } from "../../util/datascreen-controller";


@Component({
    tag: 'popover-code-view',
    styleUrl: 'popover-code-view.css'
})
export class PopoverCodeView {
    @State() codeAll: string;
    @Event() toast: EventEmitter;

    componentWillLoad() {
        let allOption = getCanvasConfig();
        allOption.componentsData = getComponentDatas();
        this.codeAll = JSON.stringify(allOption, null, 1)
    }

    handleCodeChange(e) {
        this.codeAll = e.detail.value;
    }

    checkDataOJBK(objStr: string) {
        try {
            let parseObj: CanvasConfig = JSON.parse(objStr)
            if (parseObj.w && parseObj.h && parseObj.bgc &&
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

    saveComponentsData() {
        if (this.checkDataOJBK(this.codeAll)) {
            console.log("success")
            let canvasOption:CanvasConfig = JSON.parse(this.codeAll);
            setComponentDatas(canvasOption.componentsData, true, true);
            delete canvasOption.componentsData;
            saveCanvasConfig(canvasOption);
            this.dismissPopover()
        }
    }

    dismissPopover() {
        popoverController.dismiss()
    }

    render() {
        return (
            <ion-content>
                <ion-toolbar color="secondary">
                    <ion-title>show me the code</ion-title>
                </ion-toolbar>
                <ion-list>
                    <ion-item>
                        <ion-textarea debounce={300} rows={18} wrap="soft" onIonChange={(e) => { this.handleCodeChange(e) }} value={this.codeAll}></ion-textarea>
                    </ion-item>
                    <ion-row>
                        <ion-col><ion-button onClick={() => { this.saveComponentsData() }} color="primary" expand="block">保存</ion-button></ion-col>
                        <ion-col><ion-button onClick={() => { this.dismissPopover() }} color="primary" fill="outline" expand="block">取消</ion-button></ion-col>
                    </ion-row>
                </ion-list>
            </ion-content>
        );
    }
}