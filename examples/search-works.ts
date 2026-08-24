import { AnnictClient, WORK_ORDER_FIELD, ORDER_DIRECTION } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const works = await annict.Work.search({
  seasons: ["2018-autumn"],
  orderBy: { field: WORK_ORDER_FIELD.WatchersCount, direction: ORDER_DIRECTION.Desc },
  first: 3,
});

for (const work of works) {
  console.log(`${work.title} — ${work.watchersCount} watchers`);
}

// Output:
// 青春ブタ野郎はバニーガール先輩の夢を見ない — 11750 watchers
// 転生したらスライムだった件 — 10727 watchers
// ソードアート・オンライン アリシゼーション — 9804 watchers
