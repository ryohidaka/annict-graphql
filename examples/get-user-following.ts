import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);
const following = await annict.User.following({ username: "shimbaco", first: 3 });

for (const user of following) {
  console.log(`${user.name} (@${user.username})`);
}
