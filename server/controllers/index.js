var models = require('../models');

module.exports = {

  names: {
    get: function (req, res) {
      models.names.get(function(err, results) {
        if (err) { /* do something */ }
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [req.body.name];
      models.names.post(params, function(err, results) {
        if (err) { /* do something */ }
        res.sendStatus(201);
      });
    }
  },
};

