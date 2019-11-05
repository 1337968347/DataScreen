# datascreen-canvas



<!-- Auto Generated Below -->


## Properties

| Property    | Attribute    | Description | Type      | Default |
| ----------- | ------------ | ----------- | --------- | ------- |
| `canModify` | `can-modify` |             | `boolean` | `true`  |
| `scale`     | `scale`      |             | `number`  | `100.0` |


## Events

| Event          | Description | Type               |
| -------------- | ----------- | ------------------ |
| `canvasChange` |             | `CustomEvent<any>` |
| `popover`      |             | `CustomEvent<any>` |


## Methods

### `chooseComponent(comId: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `getCanvasSize() => Promise<{ w: number; h: number; }>`



#### Returns

Type: `Promise<{ w: number; h: number; }>`



### `mapComDatasToState(comList: ComData[]) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `updateCanvasConfig(config: CanvasConfig) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [app-create](../app-create)
 - [app-preview](../app-preview)
 - [datascreen-edit-main](../datascreen-edit-main)

### Depends on

- [cy-draggable](../cy-draggable)
- [draggable-adapter](../../adapter/draggable-adapter)

### Graph
```mermaid
graph TD;
  datascreen-canvas --> cy-draggable
  datascreen-canvas --> draggable-adapter
  draggable-adapter --> media-adapter
  draggable-adapter --> chart-adapter
  draggable-adapter --> text-adapter
  draggable-adapter --> table-adapter
  media-adapter --> ion-slides
  media-adapter --> ion-slide
  media-adapter --> cy-lazy-img
  table-adapter --> cy-table
  app-create --> datascreen-canvas
  app-preview --> datascreen-canvas
  datascreen-edit-main --> datascreen-canvas
  style datascreen-canvas fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
