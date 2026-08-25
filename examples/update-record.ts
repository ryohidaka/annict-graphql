import { AnnictClient, RATING_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const record = await annict.Me.Record.update({
  recordId: "UmVjb3JkLTg3MjIxMzA=",
  comment: "Updated after a rewatch.",
  ratingState: RATING_STATE.Good,
});

console.log(record ? `Updated (id: ${record.id})` : "Failed to update");

// Output:
// Updated (id: UmVjb3JkLTg3MjIxMzA=)
