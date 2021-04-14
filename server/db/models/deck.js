const Sequelize = require("sequelize");
const db = require("../db");

const Deck = db.define("decks", {
  commander: {
    type: Sequelize.TEXT,
  },
  colors: {
    type: Sequelize.STRING,
    defaultValue: "",
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      "https://res.cloudinary.com/dsi0jbonx/image/upload/v1607142040/present_kjqse1.jpg",
  },
  //   points: {
  //     type: Sequelize.INTEGER,
  //     defaultValue: 0,
  //   },
  //   TournPlayed: {
  //     type: Sequelize.INTEGER,
  //     defaultValue: 0,
  //   },
});

module.exports = Deck;
