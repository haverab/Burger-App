var express = require("express");

var router = express.Router();


var burger = require("../models/burgers.js");


router.get("/", function (req, res) {
  burger.selectAll(function (data) {
   
    var burgersObject = {
      burgers: data
    };
    console.log(burgersObject);
    res.render("index", burgersObject);
  });
});

router.post("/api/burgers", function (req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function (result) {

  });
});

router.put("/api/burgers/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.updateOne(
    {
      devoured: req.body.devoured
    },
    condition,
    function (result) {
      if (result.changedRows === 0) {
        
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

module.exports = router;