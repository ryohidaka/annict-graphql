import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const viewer = await annict.Viewer.get();
console.log(`${viewer.name} (@${viewer.username})`);
console.log(`Member since: ${viewer.createdAt}`);
console.log(`Watched: ${viewer.watchedCount} / Watching: ${viewer.watchingCount}`);

// Output:
// Shimba, Koji (@shimbaco)
// Followers: 318
// Watched: 556
