/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  ComDraggAble,
} from './types/comDraggAble';

export namespace Components {
  interface AppHome {}
  interface AppRoot {}
  interface CyDatascreenSetting {}
  interface CyDraggable {
    'boxZindex': number;
    'canModify': boolean;
  }
  interface CyDraggableCanvas {}
  interface CyDraggableComponent {
    'canModify': boolean;
    'comDraggableoption': ComDraggAble;
  }
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

  interface HTMLCyDatascreenSettingElement extends Components.CyDatascreenSetting, HTMLStencilElement {}
  var HTMLCyDatascreenSettingElement: {
    prototype: HTMLCyDatascreenSettingElement;
    new (): HTMLCyDatascreenSettingElement;
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

  interface HTMLPopoverThemeElement extends Components.PopoverTheme, HTMLStencilElement {}
  var HTMLPopoverThemeElement: {
    prototype: HTMLPopoverThemeElement;
    new (): HTMLPopoverThemeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
    'app-root': HTMLAppRootElement;
    'cy-datascreen-setting': HTMLCyDatascreenSettingElement;
    'cy-draggable': HTMLCyDraggableElement;
    'cy-draggable-canvas': HTMLCyDraggableCanvasElement;
    'cy-draggable-component': HTMLCyDraggableComponentElement;
    'popover-theme': HTMLPopoverThemeElement;
  }
}

declare namespace LocalJSX {
  interface AppHome extends JSXBase.HTMLAttributes<HTMLAppHomeElement> {
    'onAlert'?: (event: CustomEvent<any>) => void;
    'onPopover'?: (event: CustomEvent<any>) => void;
    'onToast'?: (event: CustomEvent<any>) => void;
  }
  interface AppRoot extends JSXBase.HTMLAttributes<HTMLAppRootElement> {}
  interface CyDatascreenSetting extends JSXBase.HTMLAttributes<HTMLCyDatascreenSettingElement> {}
  interface CyDraggable extends JSXBase.HTMLAttributes<HTMLCyDraggableElement> {
    'boxZindex'?: number;
    'canModify'?: boolean;
    'onCyDrag'?: (event: CustomEvent<any>) => void;
    'onCyScale'?: (event: CustomEvent<any>) => void;
  }
  interface CyDraggableCanvas extends JSXBase.HTMLAttributes<HTMLCyDraggableCanvasElement> {
    'onPopover'?: (event: CustomEvent<any>) => void;
  }
  interface CyDraggableComponent extends JSXBase.HTMLAttributes<HTMLCyDraggableComponentElement> {
    'canModify'?: boolean;
    'comDraggableoption'?: ComDraggAble;
    'onAlert'?: (event: CustomEvent<any>) => void;
    'onToast'?: (event: CustomEvent<any>) => void;
  }
  interface PopoverTheme extends JSXBase.HTMLAttributes<HTMLPopoverThemeElement> {}

  interface IntrinsicElements {
    'app-home': AppHome;
    'app-root': AppRoot;
    'cy-datascreen-setting': CyDatascreenSetting;
    'cy-draggable': CyDraggable;
    'cy-draggable-canvas': CyDraggableCanvas;
    'cy-draggable-component': CyDraggableComponent;
    'popover-theme': PopoverTheme;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


