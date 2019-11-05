# draggable-adapter



<!-- Auto Generated Below -->


## Properties

| Property        | Attribute    | Description | Type      | Default     |
| --------------- | ------------ | ----------- | --------- | ----------- |
| `canModify`     | `can-modify` |             | `boolean` | `false`     |
| `comOptionData` | --           |             | `ComData` | `undefined` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `alert` |             | `CustomEvent<any>` |
| `toast` |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [datascreen-canvas](../../components/datascreen-canvas)

### Depends on

- [media-adapter](../media-adapter)
- [chart-adapter](../chart-adapter)
- [text-adapter](../text-adapter)
- [table-adapter](../table-adapter)

### Graph
```mermaid
graph TD;
  draggable-adapter --> media-adapter
  draggable-adapter --> chart-adapter
  draggable-adapter --> text-adapter
  draggable-adapter --> table-adapter
  media-adapter --> ion-slides
  media-adapter --> ion-slide
  media-adapter --> cy-lazy-img
  table-adapter --> cy-table
  datascreen-canvas --> draggable-adapter
  style draggable-adapter fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
