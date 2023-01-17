var express = require("express");
var router = express.Router();
var models = require("../models");

router.route("/").get(async function (req, res) {
  try {
    const Contacts = await models.Phonebook.findAll({});
    res.send(Contacts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router