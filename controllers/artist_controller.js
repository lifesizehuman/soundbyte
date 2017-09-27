var express = require("express");

var router = express.Router();
var artist = require("../models/artist.js");

router.get("/", function(req, res) {
  artist.all(function(data) {
    var obj = {artists: data};
    res.render("index", obj);
  });
});

router.post("/", function(req, res) {
  console.log(req.body.artist);
  artist.create(["artist"], [req.body.artist], function(err, result) {
    if (err) {
      throw err;
    } res.redirect("/");
  });
  console.log("success");
});

router.put("/:id", function(req, res) {
  var cond = "id = " + req.params.id;
  artist.update({status: req.body.status}, cond, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  artist.delete(req.params.id, function(err, data) {
    if (err) throw err;
    res.redirect("/");
  });
});

module.exports = router;
