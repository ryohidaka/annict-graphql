import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const records = await annict.Viewer.records({
  hasComment: true,
  first: 3,
});

for (const record of records) {
  console.log(
    `${record.comment ?? "No comment"} — ${record.ratingState ?? "No rating"} - ${record.createdAt}`,
  );
}

// Output:
// Your comment — GOOD - 2026-01-01T00:00:00Z
// No comment — GOOD - 2026-01-01T00:00:00Z
// No comment — GREAT - 2026-01-01T00:00:00Z
