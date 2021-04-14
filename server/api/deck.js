const router = require("express").Router();
const { Deck, Player } = require("../db/models");
module.exports = router;

// get all user information
router.get("/", async (req, res, next) => {
  try {
    const decks = await Deck.findAll({
      attributes: ["id", "name", "image", "points", "tournPlayed"],
      include: { model: Player },
    });
    res.json(decks);
  } catch (err) {
    next(err);
  }
});
