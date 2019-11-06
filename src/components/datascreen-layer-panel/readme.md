# datascreen-layer-panel



<!-- Auto Generated Below -->


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `checkMenu` |             | `CustomEvent<any>` |


## Methods

### `chooseComponentById(comId: any) => Promise<void>`



#### Returns

Type: `Promise<void>`



### `mapComIdsToState(newComIdList: string[]) => Promise<void>`



#### Returns

Type: `Promise<void>`




## Dependencies

### Used by

 - [app-home](../app-home)

### Depends on

- [cy-fast-click](../cy-fast-click)
- ion-item
- ion-thumbnail
- [cy-iconfont](../cy-iconfont)
- ion-label
- ion-header
- ion-toolbar
- ion-title
- ion-buttons
- ion-button
- ion-icon
- ion-content
- ion-reorder-group
- ion-reorder

### Graph
```mermaid
graph TD;
  datascreen-layer-panel --> cy-fast-click
  datascreen-layer-panel --> ion-item
  datascreen-layer-panel --> ion-thumbnail
  datascreen-layer-panel --> cy-iconfont
  datascreen-layer-panel --> ion-label
  datascreen-layer-panel --> ion-header
  datascreen-layer-panel --> ion-toolbar
  datascreen-layer-panel --> ion-title
  datascreen-layer-panel --> ion-buttons
  datascreen-layer-panel --> ion-button
  datascreen-layer-panel --> ion-icon
  datascreen-layer-panel --> ion-content
  datascreen-layer-panel --> ion-reorder-group
  datascreen-layer-panel --> ion-reorder
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  ion-reorder --> ion-icon
  app-home --> datascreen-layer-panel
  style datascreen-layer-panel fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
