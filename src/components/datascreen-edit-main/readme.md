# datascreen-edit-main



<!-- Auto Generated Below -->


## Dependencies

### Used by

 - [app-home](../app-home)

### Depends on

- [datascreen-canvas-content](../datascreen-canvas-content)
- [datascreen-canvas](../datascreen-canvas)
- ion-button
- ion-label
- ion-range
- ion-icon

### Graph
```mermaid
graph TD;
  datascreen-edit-main --> datascreen-canvas-content
  datascreen-edit-main --> datascreen-canvas
  datascreen-edit-main --> ion-button
  datascreen-edit-main --> ion-label
  datascreen-edit-main --> ion-range
  datascreen-edit-main --> ion-icon
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
  ion-button --> ion-ripple-effect
  app-home --> datascreen-edit-main
  style datascreen-edit-main fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
