const router = require("express").Router();
const { Tournament } = require("../db/models");
module.exports = router;

// get all user information
router.get("/", async (req, res, next) => {
  try {
    // const players = await Player.findAll({});
    res.json(console.log("helli"));
  } catch (err) {
    next(err);
  }
});
