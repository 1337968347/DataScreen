import { Component, State,h } from '@stencil/core';


@Component({
    tag: 'popover-theme',
    styleUrl: 'popover-theme.css'
})
export class PopoverTheme {

    @State() themeList = [{ name: "默认", value: "default-theme", isCheck: false }, { name: "中国红", value: "red-theme", isCheck: false }, { name: "黑夜", value: "black-theme", isCheck: false }]


    componentWillLoad() {
        var themeStr = localStorage.getItem("theme") || "";
        if (themeStr) {
            this.themeList.map((theme, index) => {
                if (themeStr == theme.value) {
                    this.themeList[index].isCheck = true;
                }
            })
            this.themeList = [...this.themeList]
        }
    }

    handleThemeChange(e) {
        document.querySelector("body").className = e.detail.value + ""
        localStorage.setItem("theme", e.detail.value);
        this.popoverDisMiss();
    }

    popoverDisMiss = async () => {
        const popoverController = document.querySelector('ion-popover-controller');
        popoverController.dismiss();
    }
    render() {
        return (
            <ion-list>
                <ion-radio-group onIonChange={(e) => { this.handleThemeChange(e) }}>
                    <ion-list-header>
                        <ion-label>请选择你的颜色主题</ion-label>
                    </ion-list-header>
                    <div>
                        {this.themeList.map((theme) =>
                            <ion-item>
                                <ion-label>{theme.name}</ion-label>
                                <ion-radio slot="start" value={theme.value} checked={theme.isCheck}></ion-radio>
                            </ion-item>
                        )}
                    </div>

                </ion-radio-group>
            </ion-list>
        );
    }
}