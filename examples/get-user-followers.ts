import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);
const followers = await annict.User.followers({ username: "shimbaco", first: 3 });

for (const follower of followers) {
  console.log(`${follower.name} (@${follower.username})`);
}

// Output:
// Sample User (@sample)
