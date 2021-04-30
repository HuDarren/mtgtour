const router = require("express").Router();
const { Deck, Player, Group, Tournament } = require("../db/models");
module.exports = router;

// get all user information
router.get("/", async (req, res, next) => {
  try {
    const decks = await Deck.findAll({
      include: [{ model: Player }],
      order: [["points", "DESC"]],
    });

    res.json(decks);
  } catch (err) {
    next(err);
  }
});

// get all user information
router.get("/:id", async (req, res, next) => {
  try {
    const deckId = req.params.id;
    const decks = await Deck.findAll({
      where: {
        id: deckId,
      },
      include: [
        {
          model: Group,
          include: [
            {
              model: Tournament,
            },
          ],
        },
      ],
      order: [["points", "DESC"]],
    });

    res.json(decks);
  } catch (err) {
    next(err);
  }
});
