# `jsonp`

### A promise based JSON wrapper.

## Install

```
npm i @develephant/jsonp --save
```

## Usage

```js
const jsonp = require('@develephant/jsonp')
```

## Example

_async_

```js
async function doJSONStuff() {
  let json_str = await jsonp.stringify(js_obj)
}
```

_promise_

```js
jsonp.parse(json_str)
  .then(res => console.log(res))
  .catch(err => console.error(err))
```

## Methods

- `stringify`

- `pretty` (formatted stringify)

- `parse`

---

#### `jsonp` &Star; &copy; 2017 develephant &Star; MIT license
