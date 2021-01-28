
const axios = require('axios');

// Make a request for a user with a given ID
axios.get('http swapi.dev/api/planets/1/')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });