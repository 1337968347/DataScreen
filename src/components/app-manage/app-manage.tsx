import { Component, State,Element, h } from '@stencil/core';
import uuid from "uuid";

@Component({
    tag: 'app-manage',
    styleUrl: 'app-manage.scss'
})
export class AppManage {
    @Element() el: HTMLElement;
    @State() chooseSeg: "my-canvas" | "my-component" | string = "my-canvas";

    componentWillLoad() {
        console.log(uuid.v1());
    }

    addNewCanvas(){
        this.el.closest("ion-nav").push("app-create");
    }

    jumpToCanvasEdit(){
        this.el.closest("ion-nav").push("app-home")
    }

    render() {
        return (
            <ion-content>
                <div class="header-box">
                    <h1><strong>震 惊！！！</strong><br /> 原来大屏还可以这么玩,隔壁小孩都会用了！ <br />SuperSuperDataV，简单粗暴易学。</h1>
                </div>

                <ion-segment color="primary" value={this.chooseSeg} onIonChange={(e) => { this.chooseSeg = e.detail.value }}>
                    <ion-segment-button value="my-canvas" layout="icon-start">
                        <ion-icon name="logo-buffer"></ion-icon>
                        <ion-label>我的可视化</ion-label>
                    </ion-segment-button>
                    <ion-segment-button value="my-component" layout="icon-start">
                        <ion-icon name="cube"></ion-icon>
                        <ion-label>我的组件</ion-label>
                    </ion-segment-button>
                </ion-segment>

                {this.chooseSeg == "my-canvas" ?
                    <div class="canvas-box">
                        <ion-card onClick={()=>{this.addNewCanvas()}} button class="add-canvas">
                            <div class="add-card-content">
                                <ion-icon name="add"></ion-icon>
                                <br/>
                                <span>新建大屏</span>
                            </div>
                        </ion-card>

                        <ion-card button onClick={()=>{ this.jumpToCanvasEdit() }}>
                            <div style={{"background-image": `url(${"../../assets/image/default-canvas.png"})`}} class="canvas-preivew"></div>
                            <ion-card-content>
                                Keep close to Nature's heart... and break clear away, once in awhile
                            </ion-card-content>
                        </ion-card>
                    </div> : null
                }

            </ion-content>
        );
    }
}