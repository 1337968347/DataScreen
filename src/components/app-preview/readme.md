# app-preview



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description | Type           | Default     |
| -------- | --------- | ----------- | -------------- | ----------- |
| `match`  | --        |             | `MatchResults` | `undefined` |


## Dependencies

### Depends on

- [datascreen-canvas](../datascreen-canvas)

### Graph
```mermaid
graph TD;
  app-preview --> datascreen-canvas
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
  style app-preview fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
