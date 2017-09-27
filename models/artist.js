var orm = require("../config/orm.js");

var artist = {
  all: function(cb) {
    orm.all("artists", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("artists", cols, vals, function(res) {
      cb(res);
    });
  },
  rename: function(objColVals, condition, cb) {
    orm.move("artists", objColVals, condition, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, id, cb) {
    orm.update("artists", objColVals, id, function(res) {
      cb(res);
    });
  },
  delete: function(req, cb) {
    orm.delete("artists", req, function(res) {
      cb(res);
    });
  }
};

module.exports = artist;
