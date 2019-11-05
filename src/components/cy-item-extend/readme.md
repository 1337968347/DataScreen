# cy-item-extend



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description | Type               | Default |
| -------------- | --------------- | ----------- | ------------------ | ------- |
| `header`       | `header`        |             | `string`           | `""`    |
| `iconPosition` | `icon-position` |             | `"end" \| "start"` | `"end"` |


## Dependencies

### Used by

 - [datascreen-setting-panel](../datascreen-setting-panel)
 - [setting-chart-series](../setting-chart-series)
 - [setting-data-config](../setting-data-config)

### Depends on

- ion-list
- ion-item
- ion-label
- ion-icon
- ion-item-group

### Graph
```mermaid
graph TD;
  cy-item-extend --> ion-list
  cy-item-extend --> ion-item
  cy-item-extend --> ion-label
  cy-item-extend --> ion-icon
  cy-item-extend --> ion-item-group
  ion-item --> ion-icon
  ion-item --> ion-ripple-effect
  datascreen-setting-panel --> cy-item-extend
  setting-chart-series --> cy-item-extend
  setting-data-config --> cy-item-extend
  style cy-item-extend fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
