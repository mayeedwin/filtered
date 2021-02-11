## Introducing _filtered_ cdn and npm

Text based **filter service** for firebase firestore and array of objects

### Install filtered via NPM

```bash
 npm i filtered --save
```

### Get filtered over CDN as an E6 Module

```js
import { filtered } from "https://unpkg.com/filtered/esm/index.js";
```

### Install and import filtered in your app

```js
import { filtered } from "filtered";
```

#### API Spec

Filtered receives an object with three **required** keys as shown below;

```js
// Do some awesome filtering....
//...
const result = filtered({
  data,
  filter,
  query,
});
```

## Parameters

| Name   | Type             | Description                                                |
| ------ | ---------------- | ---------------------------------------------------------- |
| data   | array of objects | Required : Must be an array of objects                     |
| filter | string           | Required : The field or key to filter against in an object |
| query  | string           | Required : The query parameter to filter with              |

## Chat : Join the conversation
