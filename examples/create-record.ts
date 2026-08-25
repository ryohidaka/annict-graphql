import { AnnictClient, RATING_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const record = await annict.Me.Record.create({
  episodeId: "RXBpc29kZS0x",
  comment: "Great episode!",
  ratingState: RATING_STATE.Great,
});

console.log(record ? `Recorded (id: ${record.id})` : "Failed to record");

// Output:
// Recorded (id: UmVjb3JkLTE=)
