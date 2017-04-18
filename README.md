# VK Wrapper

Small wrapper for calling VK methods API.

## Install

```
$ npm install vk-wrapper --save
```

## Usage

```javascript
api('users.get', {
  user_ids: 1
}).then(body => {
  console.log(body) // => { response: [ { id: 1, first_name: 'Павел', last_name: 'Дуров' } ] }
})
```

## License

MIT.
