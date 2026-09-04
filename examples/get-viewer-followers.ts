import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);
const users = await annict.Viewer.followers({ first: 3 });

for (const user of users) console.log(`${user.name} (@${user.username})`);

// Output:
// Sample User (@sample)
