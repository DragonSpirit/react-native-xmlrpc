var request = require('superagent');
var Serializer = require('./Serializer');
var Deserializer = require('./Deserializer');

function Client(url) {
  this.url = url;
}

var proto = Client.prototype;
proto.call = function(method, params, cb) {
  var xml = Serializer.serializeMethodCall(method, params, 'UTF-8');
  request
    .post(this.url)
    .send(xml)
    .end(function(err, res) {
      if(err) return cb(err);
      var deserializer = new Deserializer("UTF-8")
      deserializer.deserializeMethodResponse(res.text, function(err, result) {
        cb(null, result)
      })
    });
};

module.exports = Client;
