import { AnnictClient, STATUS_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const entries = await annict.User.library({
  username: "shimbaco",
  states: [STATUS_STATE.Watching],
  first: 3,
});

for (const entry of entries) {
  console.log(`${entry.work.title} — ${entry.note}`);
}

// Output:
// ちいかわ —
// 【推しの子】 —
// ちいかわ 新シリーズ —
