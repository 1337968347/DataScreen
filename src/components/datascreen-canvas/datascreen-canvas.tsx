import { Component, State, Watch, Method, Element, Event, EventEmitter, h, Prop } from '@stencil/core';

import { ComData, CanvasConfig, DataScreen } from "../../interfaces";
import { setDataScreen, getDataScreen, initCanvasComponent, getComponentDatas, changeChooseComponent, getCanvasConfig, setComDataChange } from "../../util/datascreen-controller"

@Component({
    tag: 'datascreen-canvas',
    styleUrl: 'datascreen-canvas.css',
})
export class DatascreenCanvas {
    @Prop() scale: number = 100.0;
    @Prop() canModify: boolean = true;
    @Element() el: HTMLElement;
    @State() chooseComId: string = "";
    @State() canvasOption: CanvasConfig;
    @State() comOptionList: ComData[] = [];
    @Event() popover: EventEmitter;
    @Event() canvasChange: EventEmitter;

    @Watch('scale')
    watchHandler(newScaleValue) {
        this.upDateElSize(this.canvasOption, newScaleValue)
    }

    componentDidLoad() {
        initCanvasComponent(this.el);
        this.canvasOption = getCanvasConfig();
        this.mapComDatasToState(getComponentDatas())
    }

    upDateElSize(canvasOption: CanvasConfig, scale: number) {
        this.el.style.width = Math.floor((scale / 100) * parseInt(canvasOption.w)) + "px";
        this.el.style.height = Math.floor((scale / 100) * parseInt(canvasOption.h)) + "px"
    }

    /**
     * 初始化设置大屏数据
     * @param DataScreenId 传一个唯一id ，作为大屏的id
     * @param dataScreen 大屏相关数据
     * @param isLocalUpDate 是否更新 大屏相关的数据到localstorage
     */
    @Method()
    async setDataScreen(DataScreenId: string, dataScreen: DataScreen, isLocalUpDate: boolean = true) {
        setDataScreen(DataScreenId, dataScreen, isLocalUpDate);
    }

    /**
     * 获取大屏数据
     * @param DataScreenId 传一个唯一id ，作为大屏的id
     */
    @Method()
    async getDataScreen(DataScreenId: string) {
        return await getDataScreen(DataScreenId);
    }

    @Method()
    async getCanvasSize() {
        if (this.canvasOption) {
            return {
                w: parseInt(this.canvasOption.w),
                h: parseInt(this.canvasOption.h)
            }
        } else {
            return null
        }
    }

    @Method()
    async mapComDatasToState(comList: ComData[]) {
        this.comOptionList = comList;
    }

    @Method()
    async chooseComponentById(comId) {
        if (comId !== this.chooseComId) {
            this.chooseComId = comId;
            await changeChooseComponent(comId)
        }
    }

    @Method()
    async setCanvasConfig(config: CanvasConfig) {
        this.canvasOption = { ...config };
        this.canvasChange.emit();
        this.upDateElSize(this.canvasOption, this.scale)

    }

    handleDraggableDrag(e: CustomEvent, changeComponentData: ComData) {
        if (changeComponentData.data.view.x !== e.detail.x || changeComponentData.data.view.y !== e.detail.y) {
            // 引用地址类型
            changeComponentData.data.view.x = e.detail.x + "";
            changeComponentData.data.view.y = e.detail.y + "";
            setComDataChange(changeComponentData, true, true)
        }
    }

    handleDraggableScale(e: CustomEvent, changeComponentData: ComData) {
        if (changeComponentData.data.view.w !== e.detail.w || changeComponentData.data.view.h !== e.detail.h) {
            changeComponentData.data.view.w = e.detail.w + "";
            changeComponentData.data.view.h = e.detail.h + "";
            changeComponentData.data.view.x = e.detail.x + "";
            changeComponentData.data.view.y = e.detail.y + "";
            setComDataChange(changeComponentData, true, true)
        }
    }

    async popoverContextMenu(e: MouseEvent, onComId: string) {
        e.preventDefault();
        e.stopPropagation();
        await this.chooseComponentById(onComId);
        this.popover.emit({
            component: 'popover-draggable-contextmenu',
            cssClass: "contextmenu-popover",
            event: e,
            showBackdrop: false,
            componentProps: {
                comId: onComId
            }
        })
    }

    render() {
        if (this.canvasOption) {
            return (
                <div class="drag_container" style={{
                    "transform": `scale(${this.scale / 100})`,
                    "width": this.canvasOption.w + "px",
                    "height": this.canvasOption.h + "px",
                    "background-color": this.canvasOption.bgc + "",
                    "background-image": this.canvasOption.bgi ? `url(${this.canvasOption.bgi})` : "",
                    "overflow": this.canModify ? "inherit" : "hidden"
                }}>
                    {this.comOptionList.map((comDarggable) =>
                        <cy-draggable key={comDarggable.id}
                            onContextMenu={(e) => { this.canModify && this.popoverContextMenu(e, comDarggable.id) }}
                            isChoose={this.chooseComId == comDarggable.id} canModify={this.canModify} scale={Math.round(this.scale) / 100}
                            onCyDrag={(e) => { this.handleDraggableDrag(e, comDarggable) }}
                            onCyScale={(e) => { this.handleDraggableScale(e, comDarggable) }}
                            onChoose={() => { this.chooseComponentById(comDarggable.id) }}
                            style={{
                                "position": "absolute",
                                "transform": `translate(${comDarggable.data.view.x}px, ${comDarggable.data.view.y}px) rotate(${comDarggable.data.view.deg}deg)`,
                                "width": comDarggable.data.view.w + "px", "height": comDarggable.data.view.h + "px",
                                "--opacity": comDarggable.data.view.opacity + ""
                            }}>
                            <draggable-adapter
                                key={comDarggable.id}
                                comOptionData={comDarggable}
                                canModify={this.canModify}
                            ></draggable-adapter>
                        </cy-draggable>
                    )}
                </div>
            );
        } else {
            // loading
            return null;
        }

    }
}