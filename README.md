# liquidjs-ov-timeago-filters
Timeago filters for liquidjs used by OnVoard.

Uses https://github.com/hustcc/timeago.js/ to output timeago string.

## Installation
```shell
yarn add liquidjs-ov-timeago-filters
```

## Examples
Setup plugin

```shell
import { Liquid } from 'liquidjs';
import { timeagoFiltersPlugin } from 'liquidjs-ov-money-filters';

const engine = new Liquid();
engine.plugin(timeagoFiltersPlugin);
```

### timeago
Render timeago string with unix timestamp.
```shell
# Output: 5 minutes ago
const fiveMinsAgoTs = Math.floor(Date.now() / 1000) - 60*5;
const template = `{{ ${fiveMinsAgoTs}|timeago }}`;
const params = {};
engine.parseAndRenderSync(template, params);
```
