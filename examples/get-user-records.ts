import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const records = await annict.User.records({
  username: "shimbaco",
  hasComment: true,
  first: 3,
});

for (const record of records) {
  console.log(`${record.comment ?? "No comment"} — ${record.ratingState ?? "No rating"}`);
}

// Output:
// User comment — GOOD - 2026-01-01T00:00:00Z
// No comment — GOOD - 2026-01-01T00:00:00Z
// No comment — GREAT - 2026-01-01T00:00:00Z
