const router = require("express").Router();
const { Player, Deck } = require("../db/models");
module.exports = router;

// get user by id

router.get("/:id", async (req, res, next) => {
  try {
    const playerId = req.params.id;
    const userData = await Player.findAll({
      where: {
        id: playerId,
      },
      include: { model: Deck },
    });
    res.json(userData);
  } catch (error) {
    next(error);
  }
});
