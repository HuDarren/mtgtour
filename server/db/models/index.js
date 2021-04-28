const Deck = require("./deck");
const Tournament = require("./tournament");
const Player = require("./player");
const Group = require("./group");

// -------Associations --------------

Deck.belongsTo(Player);
Player.hasMany(Deck);

Deck.belongsTo(Tournament);
Tournament.hasMany(Deck);

Group.belongsTo(Deck);
Group.belongsTo(Tournament);
Deck.hasMany(Group);
Tournament.hasMany(Group);

//------------------------------------

module.exports = {
  Player,
  Deck,
  Tournament,
  Group,
};
