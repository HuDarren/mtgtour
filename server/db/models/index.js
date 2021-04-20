const Deck = require("./deck");
const Tournament = require("./tournament");
const Player = require("./player");

// -------Associations --------------

Deck.belongsTo(Player);
Player.hasMany(Deck);

Deck.belongsTo(Tournament);
Tournament.hasMany(Deck);

//------------------------------------

module.exports = {
  Player,
  Deck,
  Tournament,
};
