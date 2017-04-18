const api = require('../lib/index')

api('users.get', {
  user_ids: 1
}).then(body => {
  console.log(body) // => { response: [ { id: 1, first_name: 'Павел', last_name: 'Дуров' } ] }
})
