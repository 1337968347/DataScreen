import { Component, State, Event, EventEmitter, h } from '@stencil/core';
import { setComponentDatas,saveCanvasConfig } from "../../util/datascreen-controller";

@Component({
    tag: 'app-home',
    styleUrl: 'app-home.scss'
})
export class AppHome {
    @State() showMenuControl: boolean[] = [false, false, false];
    @Event() alert: EventEmitter;
    @Event() toast: EventEmitter;

    componentWillLoad() {
       this.initDataFromLocal();
    }

    initDataFromLocal(){
        setComponentDatas(JSON.parse(localStorage.getItem("comList")),true,true)
        saveCanvasConfig(JSON.parse(localStorage.getItem("canvasConfig")));
        if(localStorage.getItem("show_menu_control")){
            this.showMenuControl =  [...JSON.parse(localStorage.getItem("show_menu_control"))]; 
        }else{
            this.saveMenuControlToLocal(this.showMenuControl);
        }
    }

    handleMenuChoose(e: CustomEvent) {
        this.showMenuControl[e.detail] = !!!this.showMenuControl[e.detail];
        this.showMenuControl = [...this.showMenuControl];
        this.saveMenuControlToLocal(this.showMenuControl);
    }

    saveMenuControlToLocal(showMenu: boolean[]){
        localStorage.setItem("show_menu_control",JSON.stringify(showMenu));
    }   


    render() {
        return [
            <datascreen-header checkMenuControl={this.showMenuControl} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-header>,
            <ion-content>
                <div class="datascreen-box">
                    <datascreen-layer style={{width: this.showMenuControl[0]? "200px":"0"}} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-layer>
                    <datascreen-com-panel  style={{width: this.showMenuControl[1]? "233px":"0"}} onCheckMenu={(e) => { this.handleMenuChoose(e) }}></datascreen-com-panel>
                    <datascreen-edit-main></datascreen-edit-main>
                    <datascreen-setting-panel  style={{width: this.showMenuControl[2]? "332px":"0"}}></datascreen-setting-panel>
                </div>
            </ion-content>
        ];
    }
}
