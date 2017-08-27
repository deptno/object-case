# object-case

> Object.entries MUST be supported

## installation

```bash
yarn add object-case
# or
npm i --save object-case
```

## api

> camelCase(a: T): T

> snakeCase(a: T): T

## usage

```typescript
import {camelCase, snakeCase} from 'object-case'

const tNum = 1
const tString = 'snake_case'
const tObject = {
  snake_key: 1,
  camelKey: 'immune',
}
const tArray = [tString, tNum, tObject]

console.log(camelCase(tNum))    // 1 ; unsupported types will return self
console.log(camelCase(tString)) // snakeCase
console.log(camelCase(tObject)) // { snakeKey: 1, camelKey: 1 }
console.log(camelCase(tArray))  // [ 'snakeCase', 1, { snakeKey: 1, camelKey: 'immune' } ]
```

## license

MIT
