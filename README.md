
[![Build Status](https://secure.travis-ci.org/soldair/lumber-nominal-size-table.png)](http://travis-ci.org/soldair/lumber-nominal-size-table)

# lumber-nominal-size-table
table of nominal sizes to actual sizes based on american lumber standards


```js
var table = require('lumber-nominal-size-table')

var size = table(2,4)
console.log(size)
// prints 

```

## INSTALL
```sh
npm install
```

## API

`module,exports(width,height)`

pass a nominal size and get the matching object in this format

```
{nominal_size:[w,h],actual_size:[w,h],weight_per_foot_lbs: number}
```

`.each(fn)`

pass a function as the each back and you can iterate the sizes.

return false to stop.
