const Deck = require("./deck");
const Tournament = require("./tournament");
const Player = require("./player");

// -------Associations --------------

Player.hasMany(Deck);
Deck.belongsTo(Tournament);

//------------------------------------

module.exports = {
  Player,
  Deck,
  Tournament,
};
