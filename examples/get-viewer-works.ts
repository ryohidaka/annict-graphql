import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);
const works = await annict.Viewer.works({ first: 3 });

for (const work of works) console.log(work.title);

// Output:
// 青春ブタ野郎はバニーガール先輩の夢を見ない
// 転生したらスライムだった件
// ソードアート・オンライン アリシゼーション
