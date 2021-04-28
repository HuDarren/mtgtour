const Sequelize = require("sequelize");
const db = require("../db");

const Group = db.define("groups", {
  group: {
    type: Sequelize.TEXT,
  },
  wins: {
    type: Sequelize.TEXT,
  },
  points: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
});

module.exports = Group;
