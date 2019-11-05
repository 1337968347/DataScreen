# datascreen-header



<!-- Auto Generated Below -->


## Properties

| Property           | Attribute        | Description | Type            | Default                 |
| ------------------ | ---------------- | ----------- | --------------- | ----------------------- |
| `checkMenuControl` | --               |             | `boolean[]`     | `[false, false, false]` |
| `dataScreenId`     | `data-screen-id` |             | `string`        | `undefined`             |
| `history`          | --               |             | `RouterHistory` | `undefined`             |


## Events

| Event       | Description | Type               |
| ----------- | ----------- | ------------------ |
| `checkMenu` |             | `CustomEvent<any>` |
| `popover`   |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [app-home](../app-home)

### Depends on

- ion-header
- ion-toolbar
- ion-buttons
- ion-button
- ion-icon
- ion-title

### Graph
```mermaid
graph TD;
  datascreen-header --> ion-header
  datascreen-header --> ion-toolbar
  datascreen-header --> ion-buttons
  datascreen-header --> ion-button
  datascreen-header --> ion-icon
  datascreen-header --> ion-title
  ion-button --> ion-ripple-effect
  app-home --> datascreen-header
  style datascreen-header fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
