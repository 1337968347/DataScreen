import { Component, Prop, Event, EventEmitter, Element, h } from '@stencil/core';

@Component({
    tag: 'datascreen-header',
    styleUrl: 'datascreen-header.scss'
})
export class DatascreenHeader {
    @Element() el: HTMLElement;
    @Prop() checkMenuControl: boolean[] = [false, false, false];
    @Event() checkMenu: EventEmitter;
    @Event() popover: EventEmitter;

    popoverThemeSelectBox() {
        this.popover.emit({ component: 'popover-theme' });
    }

    previewCanvas() {
        this.el.closest('ion-nav').push("app-preview")
    }

    handleMenuChoose(index: number) {
        this.checkMenu.emit(index);
    }

    talkIsCheapShowMeTheCode(){
        this.popover.emit({
            component: 'popover-code-view',
            translucent: true,
            cssClass: "code-view-popover"
          })
    }

    render() {
        return (
            <ion-header>
                <ion-toolbar>
                    <ion-buttons slot="start" class="header-buttons">
                        <ion-button title="图层" color={this.checkMenuControl[0] ? "primary" : "secondary"} size="large" fill="solid" class="header-btn" onClick={() => { this.handleMenuChoose(0) }}>
                            <ion-icon name="logo-buffer"></ion-icon>
                        </ion-button>

                        <ion-button title="组件" color={this.checkMenuControl[1] ? "primary" : "secondary"} size="large" fill="solid" class="header-btn" onClick={() => { this.handleMenuChoose(1) }}>
                            <ion-icon name="cube"></ion-icon>
                        </ion-button>

                        <ion-button title="设置面板" color={this.checkMenuControl[2] ? "primary" : "secondary"} size="large" fill="solid" class="header-btn" onClick={() => { this.handleMenuChoose(2) }}>
                            <ion-icon name="settings"></ion-icon>
                        </ion-button>

                    </ion-buttons>
                    <ion-buttons slot="end" class="header-buttons">
                        <ion-button title="数据" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.talkIsCheapShowMeTheCode() }}>
                            <ion-icon name="code"></ion-icon>
                        </ion-button>

                        <ion-button title="预览" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.previewCanvas() }}>
                            <ion-icon slot="icon-only" name="easel"></ion-icon>
                        </ion-button>

                        <ion-button title="主题" color="secondary" size="large" fill="solid" class="header-btn" onClick={() => { this.popoverThemeSelectBox() }}>
                            <ion-icon slot="icon-only" name="color-palette"></ion-icon>
                        </ion-button>
                    </ion-buttons>
                </ion-toolbar>
            </ion-header>
        );
    }
}