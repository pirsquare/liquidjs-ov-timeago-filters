# liquidjs-ov-timeago-filters
Timeago filters for liquidjs used by OnVoard. Uses https://github.com/hustcc/timeago.js/ to output timeago string.

## Installation
```shell
yarn add liquidjs-ov-timeago-filters
```

## Examples
```shell
import { Liquid } from 'liquidjs';
import { timeagoFiltersPlugin } from 'liquidjs-ov-timeago-filters';

const engine = new Liquid();
engine.plugin(timeagoFiltersPlugin);

# Output: 5 minutes ago
const fiveMinsAgoTs = Math.floor(Date.now() / 1000) - 60*5;
const template = `{{ ${fiveMinsAgoTs}|timeago }}`;
const params = {};
engine.parseAndRenderSync(template, params);
```
