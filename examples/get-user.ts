import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const user = await annict.User.get({ username: "shimbaco" });

if (user) {
  console.log(`${user.name} (@${user.username})`);
  console.log(`Followers: ${user.followersCount}`);
  console.log(`Watched: ${user.watchedCount}`);
} else {
  console.log("User not found");
}

// Output:
// Shimba, Koji (@shimbaco)
// Followers: 318
// Watched: 556
