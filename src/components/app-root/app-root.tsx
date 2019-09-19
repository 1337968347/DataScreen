import { Component,  Listen, h } from '@stencil/core';
import { popoverController, toastController, alertController, actionSheetController, loadingController } from '@ionic/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  @Listen('toast')
  async presentToast(message) {
    const toastElement = await toastController.create({ message: message.detail, position: "bottom", showCloseButton: false, duration: 600 });
    return await toastElement.present();
  }
  // 弹窗方法
  @Listen('popover')
  async presentPopover(opts) {
    popoverController.create(opts.detail).then((popoverElement) => {
      popoverElement.present()
    });
  }
  // alert方法
  @Listen('alert')
  async presentAlert(opts) {
    alertController.create(opts.detail).then((alert) => {
      alert.present();
    });
  }
  @Listen('actionSheet')
  async presentActionSheet(opts) {
    actionSheetController.create(opts.detail).then((actionSheetElement) => {
      actionSheetElement.present();
    });
  }
  @Listen('loading')
  async  presentLoadingWithOptions(opts: CustomEvent) {
    loadingController.create(opts.detail).then((loadingElement) => {
      loadingElement.present();
    });
  }

  componentWillLoad() {
    this.setCurrentTheme()
  }

  setCurrentTheme() {
    if (localStorage.getItem("theme")) {
      document.querySelector("body").className = localStorage.getItem("theme") + ""
    }
  }

  @Listen('swUpdate', { target: 'window' })
  async onSWUpdate() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      return;
    }

    const toast = await toastController.create({
      message: "新的版本可用",
      showCloseButton: true,
      closeButtonText: "确定"
    });

    await toast.present();
    await toast.onWillDismiss();

    registration.waiting.postMessage("skipWaiting");
    window.location.reload();
  }

  render() {
    return (
      <ion-app>
        <ion-router useHash={false}>
          <ion-route url="/" component="app-manage"></ion-route>
          <ion-route url="/canvas/edit" component="app-home" />
          <ion-route url="/canvas/preview" component="app-preview"></ion-route>
        </ion-router>
        <ion-nav animated={false} />
      </ion-app>
    );
  }
}
