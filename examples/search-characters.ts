import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const characters = await annict.Character.search({ names: ["千反田える"] });

for (const character of characters) {
  console.log(`${character.name} (${character.nameEn || "N/A"})`);
}

// Output:
// 千反田える (N/A)
