/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface AppHome {}
  interface AppRoot {}
  interface CyDraggable {
    'boxZindex': number;
    'canModify': boolean;
  }
  interface CyDraggableCanvas {
    'comOptionList': any[];
  }
  interface CyDraggableComponent {
    'canModify': boolean;
    'comDraggableoption': any;
  }
  interface DatascreenComponent {}
  interface DatascreenEditMain {}
  interface DatascreenHeader {
    'checkMenuControl': boolean[];
  }
  interface DatascreenLayer {}
  interface DatascreenSetting {}
  interface PopoverTheme {}
}

declare global {


  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLCyDraggableElement extends Components.CyDraggable, HTMLStencilElement {}
  var HTMLCyDraggableElement: {
    prototype: HTMLCyDraggableElement;
    new (): HTMLCyDraggableElement;
  };

  interface HTMLCyDraggableCanvasElement extends Components.CyDraggableCanvas, HTMLStencilElement {}
  var HTMLCyDraggableCanvasElement: {
    prototype: HTMLCyDraggableCanvasElement;
    new (): HTMLCyDraggableCanvasElement;
  };

  interface HTMLCyDraggableComponentElement extends Components.CyDraggableComponent, HTMLStencilElement {}
  var HTMLCyDraggableComponentElement: {
    prototype: HTMLCyDraggableComponentElement;
    new (): HTMLCyDraggableComponentElement;
  };

  interface HTMLDatascreenComponentElement extends Components.DatascreenComponent, HTMLStencilElement {}
  var HTMLDatascreenComponentElement: {
    prototype: HTMLDatascreenComponentElement;
    new (): HTMLDatascreenComponentElement;
  };

  interface HTMLDatascreenEditMainElement extends Components.DatascreenEditMain, HTMLStencilElement {}
  var HTMLDatascreenEditMainElement: {
    prototype: HTMLDatascreenEditMainElement;
    new (): HTMLDatascreenEditMainElement;
  };

  interface HTMLDatascreenHeaderElement extends Components.DatascreenHeader, HTMLStencilElement {}
  var HTMLDatascreenHeaderElement: {
    prototype: HTMLDatascreenHeaderElement;
    new (): HTMLDatascreenHeaderElement;
  };

  interface HTMLDatascreenLayerElement extends Components.DatascreenLayer, HTMLStencilElement {}
  var HTMLDatascreenLayerElement: {
    prototype: HTMLDatascreenLayerElement;
    new (): HTMLDatascreenLayerElement;
  };

  interface HTMLDatascreenSettingElement extends Components.DatascreenSetting, HTMLStencilElement {}
  var HTMLDatascreenSettingElement: {
    prototype: HTMLDatascreenSettingElement;
    new (): HTMLDatascreenSettingElement;
  };

  interface HTMLPopoverThemeElement extends Components.PopoverTheme, HTMLStencilElement {}
  var HTMLPopoverThemeElement: {
    prototype: HTMLPopoverThemeElement;
    new (): HTMLPopoverThemeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'cy-draggable': HTMLCyDraggableElement;
    'cy-draggable-canvas': HTMLCyDraggableCanvasElement;
    'cy-draggable-component': HTMLCyDraggableComponentElement;
    'datascreen-component': HTMLDatascreenComponentElement;
    'datascreen-edit-main': HTMLDatascreenEditMainElement;
    'datascreen-header': HTMLDatascreenHeaderElement;
    'datascreen-layer': HTMLDatascreenLayerElement;
    'datascreen-setting': HTMLDatascreenSettingElement;
    'popover-theme': HTMLPopoverThemeElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {
    'onAlert'?: (event: CustomEvent<any>) => void;
    'onToast'?: (event: CustomEvent<any>) => void;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface CyDraggable extends JSXBase.HTMLAttributes<HTMLCyDraggableElement> {
    'boxZindex'?: number;
    'canModify'?: boolean;
    'onCyDrag'?: (event: CustomEvent<any>) => void;
    'onCyScale'?: (event: CustomEvent<any>) => void;
  }
  interface CyDraggableCanvas extends JSXBase.HTMLAttributes<HTMLCyDraggableCanvasElement> {
    'comOptionList'?: any[];
    'onPopover'?: (event: CustomEvent<any>) => void;
  }
  interface CyDraggableComponent extends JSXBase.HTMLAttributes<HTMLCyDraggableComponentElement> {
    'canModify'?: boolean;
    'comDraggableoption'?: any;
    'onAlert'?: (event: CustomEvent<any>) => void;
    'onToast'?: (event: CustomEvent<any>) => void;
  }
  interface DatascreenComponent extends JSXBase.HTMLAttributes<HTMLDatascreenComponentElement> {
    'onCheckMenu'?: (event: CustomEvent<any>) => void;
  }
  interface DatascreenEditMain extends JSXBase.HTMLAttributes<HTMLDatascreenEditMainElement> {}
  interface DatascreenHeader extends JSXBase.HTMLAttributes<HTMLDatascreenHeaderElement> {
    'checkMenuControl'?: boolean[];
    'onCheckMenu'?: (event: CustomEvent<any>) => void;
    'onPopover'?: (event: CustomEvent<any>) => void;
  }
  interface DatascreenLayer extends JSXBase.HTMLAttributes<HTMLDatascreenLayerElement> {
    'onCheckMenu'?: (event: CustomEvent<any>) => void;
  }
  interface DatascreenSetting extends JSXBase.HTMLAttributes<HTMLDatascreenSettingElement> {}
  interface PopoverTheme extends JSXBase.HTMLAttributes<HTMLPopoverThemeElement> {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-root': AppRoot;
    'cy-draggable': CyDraggable;
    'cy-draggable-canvas': CyDraggableCanvas;
    'cy-draggable-component': CyDraggableComponent;
    'datascreen-component': DatascreenComponent;
    'datascreen-edit-main': DatascreenEditMain;
    'datascreen-header': DatascreenHeader;
    'datascreen-layer': DatascreenLayer;
    'datascreen-setting': DatascreenSetting;
    'popover-theme': PopoverTheme;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


