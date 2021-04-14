const Sequelize = require("sequelize");
const db = require("../db");

const Tournament = db.define("tournaments", {
  name: {
    type: Sequelize.TEXT,
  },
  description: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      "https://res.cloudinary.com/dsi0jbonx/image/upload/v1607142040/present_kjqse1.jpg",
  },
  totalPoints: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  distributedPoints: {
    type: Sequelize.JSON,
  },
  date: {
    type: Sequelize.DATE,
  },
  entry: {
    type: Sequelize.TEXT,
  },
});

module.exports = Tournament;
