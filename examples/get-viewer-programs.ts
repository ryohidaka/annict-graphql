import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);
const programs = await annict.Viewer.programs({ unwatched: true, first: 3 });

for (const program of programs) console.log(`${program.work.title} — ${program.episode.title}`);

// Output:
// 氷菓 — 伝統ある古典部の再生
// 氷菓 — 名誉ある古典部の活動
// 氷菓 — 事情ある古典部の末裔
