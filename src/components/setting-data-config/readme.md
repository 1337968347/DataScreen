# setting-data-config



<!-- Auto Generated Below -->


## Properties

| Property         | Attribute | Description | Type               | Default     |
| ---------------- | --------- | ----------- | ------------------ | ----------- |
| `comDataApiData` | --        |             | `DraggableApiData` | `undefined` |
| `comId`          | `com-id`  |             | `string`           | `undefined` |


## Events

| Event      | Description | Type               |
| ---------- | ----------- | ------------------ |
| `cyChange` |             | `CustomEvent<any>` |
| `toast`    |             | `CustomEvent<any>` |


## Dependencies

### Used by

 - [datascreen-setting-panel](../datascreen-setting-panel)

### Depends on

- ion-input
- ion-row
- ion-col
- ion-select
- ion-select-option
- [cy-table](../cy-table)
- ion-textarea
- ion-note
- [cy-item-extend](../cy-item-extend)
- ion-toggle
- ion-button

### Graph
```mermaid
graph TD;
  setting-data-config --> ion-input
  setting-data-config --> ion-row
  setting-data-config --> ion-col
  setting-data-config --> ion-select
  setting-data-config --> ion-select-option
  setting-data-config --> cy-table
  setting-data-config --> ion-textarea
  setting-data-config --> ion-note
  setting-data-config --> cy-item-extend
  setting-data-config --> ion-toggle
  setting-data-config --> ion-button
  cy-item-extend --> ion-list
  cy-item-extend --> ion-item
  cy-item-extend --> ion-label
  cy-item-extend --> ion-icon
  cy-item-extend --> ion-item-group
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  ion-button --> ion-ripple-effect
  datascreen-setting-panel --> setting-data-config
  style setting-data-config fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
