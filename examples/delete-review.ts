import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const work = await annict.Me.Review.delete("UmV2aWV3LTE5MTgxNA==");

console.log(work);

console.log(work ? `Deleted, work: ${work.id}` : "Failed to delete");

// Output:
// Deleted, work: V29yay0xODA4
