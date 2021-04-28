const router = require("express").Router();
const { Tournament, Deck } = require("../db/models");
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
    const tourn = await Tournament.findAll({
      where: {
        id: tournId,
      },
      include: [{ model: Deck }],
      order: [["id", "DESC"]],
    });
    res.json(tourn);
  } catch (err) {
    next(err);
  }
});
