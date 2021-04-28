const router = require("express").Router();
const { Tournament, Deck, Group } = require("../db/models");
module.exports = router;

// get all user information
router.get("/", async (req, res, next) => {
  try {
    const tourn = await Tournament.findAll({
      include: [{ model: Deck }],
      order: [["id", "DESC"]],
    });
    res.json(tourn);
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const tournId = req.params.id;
    const tourn = await Group.findAll({
      where: {
        tournamentId: tournId,
      },
      include: [{ model: Deck, include: [{ model: Tournament }] }],

      order: [["bracket", "DESC"]],
    });
    res.json(tourn);
  } catch (err) {
    next(err);
  }
});
