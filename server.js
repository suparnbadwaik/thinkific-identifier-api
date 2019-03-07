const identifier = require('./Identifier');

var ApiBuilder = require('claudia-api-builder'),
  api = new ApiBuilder();

module.exports = api;

api.get('/v1/current', () => {
  let counter = identifier.counter;
  return 'Current : ' + counter;
});

api.get('/v1/next', () => {
  let counter = identifier.increment();
  return 'Next : ' + counter;
});

api.put('/v1/current', function (request) {
//  let reqObj = JSON.parse(request.body);
  let resetVal = Number(request.body.current);
  if(resetVal >= 0){
    identifier.counter = resetVal;
    return 'Identifier updated successfully';
  }
  else {
      return 'Identifier cannot be reset. Non negative integer value required';
  }
});
