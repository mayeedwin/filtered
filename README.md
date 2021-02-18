## Introducing filtered

![CI](https://github.com/mayeedwin/filtered/workflows/CI/badge.svg)

Text based **filter and search service** for firebase <b>cloud firestore</b> collections and any array of objects

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

### API Spec

Filtered receives an object with three **required** keys as shown below;

#### Firebase cloud firestore collection

Pass an additional **firestore** param for firebase cloud firestone text-based collection document search.

```js
// Do some awesome filtering....
//...
const result = filtered({
  data,
  firestore: true,
  filter,
  query,
});
```

#### For any array of objects

```js
// Do some awesome filtering....
//...
const result = filtered({
  data,
  filter,
  query,
});
```

#### Parameters

| Name      | Type             | Required | Description                                                                            |
| --------- | ---------------- | -------- | -------------------------------------------------------------------------------------- |
| data      | array of objects | true     | An array of objects or firebase cloud firestore collection documents array                 |
| firestore | boolean          | false    | Must be set to `true` if passing firebase cloud firestore collection documents         |
| filter    | string           | true     | The field or key to filter against in an object or cloud firestore collection document |
| query     | string           | true     | The query string to filter with                                                        |

#### Response

| Name   | Type             | Description                                                         |
| ------ | ---------------- | ------------------------------------------------------------------- |
| result | array of objects | Query result - an array of found items, could be empty if no result |

Enjoy!
