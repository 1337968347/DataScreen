# app-create



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type            | Default     |
| --------- | --------- | ----------- | --------------- | ----------- |
| `history` | --        |             | `RouterHistory` | `undefined` |


## Events

| Event   | Description | Type               |
| ------- | ----------- | ------------------ |
| `alert` |             | `CustomEvent<any>` |
| `toast` |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- ion-split-pane
- ion-menu
- ion-header
- ion-toolbar
- ion-title
- ion-content
- ion-item
- ion-thumbnail
- ion-label
- ion-buttons
- ion-menu-button
- [datascreen-canvas-content](../datascreen-canvas-content)
- [datascreen-canvas](../datascreen-canvas)
- ion-button

### Graph
```mermaid
graph TD;
  app-create --> ion-split-pane
  app-create --> ion-menu
  app-create --> ion-header
  app-create --> ion-toolbar
  app-create --> ion-title
  app-create --> ion-content
  app-create --> ion-item
  app-create --> ion-thumbnail
  app-create --> ion-label
  app-create --> ion-buttons
  app-create --> ion-menu-button
  app-create --> datascreen-canvas-content
  app-create --> datascreen-canvas
  app-create --> ion-button
  ion-menu --> ion-backdrop
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-menu-button --> ion-icon
  ion-menu-button --> ion-ripple-effect
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
  style app-create fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
