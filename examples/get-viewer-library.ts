import { AnnictClient, STATUS_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const entries = await annict.Viewer.library({
  states: [STATUS_STATE.Watching],
  first: 3,
});

for (const entry of entries) {
  console.log(`${entry.work.title} — ${entry.note}`);
}

// Output:
// 青春ブタ野郎はバニーガール先輩の夢を見ない —
// 転生したらスライムだった件 —
// ソードアート・オンライン アリシゼーション —
