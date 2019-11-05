# datascreen-layer



<!-- Auto Generated Below -->


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `checkMenu` |             | `CustomEvent<any>` |


## Methods

### `chooseComponent(comId: any) => Promise<void>`



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
  datascreen-layer --> cy-fast-click
  datascreen-layer --> ion-item
  datascreen-layer --> ion-thumbnail
  datascreen-layer --> cy-iconfont
  datascreen-layer --> ion-label
  datascreen-layer --> ion-header
  datascreen-layer --> ion-toolbar
  datascreen-layer --> ion-title
  datascreen-layer --> ion-buttons
  datascreen-layer --> ion-button
  datascreen-layer --> ion-icon
  datascreen-layer --> ion-content
  datascreen-layer --> ion-reorder-group
  datascreen-layer --> ion-reorder
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  ion-reorder --> ion-icon
  app-home --> datascreen-layer
  style datascreen-layer fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
