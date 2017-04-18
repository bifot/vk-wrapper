[![VK Wrapper](https://img.shields.io/npm/v/vk-wrapper.svg?style=flat-square)](https://www.npmjs.com/package/vk-wrapper)
[![VK Wrapper](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

# VK Wrapper

Small wrapper for calling VK methods API.

## Install

```
$ npm install vk-wrapper --save
```

## Usage

```javascript
const api = require('vk-wrapper')

api('users.get', {
  user_ids: 1
}).then(body => {
  console.log(body) // => { response: [ { id: 1, first_name: 'Павел', last_name: 'Дуров' } ] }
})
```

## License

MIT.
