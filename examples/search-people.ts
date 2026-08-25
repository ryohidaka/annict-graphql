import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const people = await annict.Person.search({ names: ["花澤香菜"] });

for (const person of people) {
  console.log(`${person.name} (${person.nameEn})`);
}

// Output:
// 花澤香菜 (Hanazawa, Kana)
