const db = require("../server/db");
const { Deck, Player, Tournament } = require("../server/db/models");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const players = await Promise.all([
    Player.create({
      name: "Amy",
      id: 1,
    }),
    Player.create({
      name: "Bruce",
      id: 2,
    }),
    Player.create({
      name: "Corvus",
      id: 3,
    }),
  ]);

  console.log(`seeded ${players.length} players`);

  const decks = await Promise.all([
    Deck.create({
      commander: "Omnath",
      playerId: 1,
    }),
    Deck.create({
      commander: "Daretti",
      playerId: 1,
    }),
    Deck.create({
      commander: "Kaalia",
      playerId: 2,
    }),
  ]);

  console.log(`seeded ${decks.length} decks`);

  const tournaments = await Promise.all([
    Tournament.create({
      name: "First Tourna",
      description: "Fun Times",
      image:
        "https://res.cloudinary.com/dsi0jbonx/image/upload/v1609452416/clean_z0xiif.jpg",
      totalPoints: 2000,
      entry: single,
    }),
  ]);

  console.log(`seeded ${tournaments.length} tournaments`);

  console.log(`seeded successfully`);
}
