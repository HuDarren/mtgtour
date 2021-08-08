const Sequelize = require("sequelize");
const db = require("../db");
const crypto = require("crypto");

const Player = db.define("players", {
  name: {
    type: Sequelize.TEXT,
  },
  image: {
    type: Sequelize.STRING,
    defaultValue:
      "https://res.cloudinary.com/dsi0jbonx/image/upload/v1607142040/present_kjqse1.jpg",
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    // Making `.password` act like a func hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue("password");
    },
  },
  salt: {
    type: Sequelize.STRING,
    // Making `.salt` act like a function hides it when serializing to JSON.
    // This is a hack to get around Sequelize's lack of a "private" option.
    get() {
      return () => this.getDataValue("salt");
    },
  },
  googleId: {
    type: Sequelize.STRING,
  },
});

module.exports = Player;

/**
 * instanceMethods
 */
Player.prototype.correctPassword = function (candidatePwd) {
  return Player.encryptPassword(candidatePwd, this.salt()) === this.password();
};

/**
 * classMethods
 */
Player.generateSalt = function () {
  return crypto.randomBytes(16).toString("base64");
};

Player.encryptPassword = function (plainText, salt) {
  return crypto
    .createHash("RSA-SHA256")
    .update(plainText)
    .update(salt)
    .digest("hex");
};

/**
 * hooks
 */
const setSaltAndPassword = (user) => {
  if (user.changed("password")) {
    user.salt = Player.generateSalt();
    user.password = Player.encryptPassword(user.password(), user.salt());
  }
};

Player.beforeCreate(setSaltAndPassword);
Player.beforeUpdate(setSaltAndPassword);
Player.beforeBulkCreate((users) => {
  users.forEach(setSaltAndPassword);
});
