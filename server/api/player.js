const router = require("express").Router();
const { Player } = require("../db/models");
module.exports = router;

// get all user information
router.get("/", async (req, res, next) => {
  try {
    // const players = await Player.findAll({});
    res.json(console.log("hello"));
  } catch (err) {
    next(err);
  }
});
