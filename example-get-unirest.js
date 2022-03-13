var unirest = require('unirest');
unirest
  .post('http://localhost:3000/posts')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .send({ "title": "Redhat server", "author": "habib" })
  .then((response) => {
    console.log(response.body)
  })
