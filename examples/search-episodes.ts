import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const episodes = await annict.Episode.search({ annictIds: [1, 2, 3] });

for (const episode of episodes) {
  console.log(`${episode.numberText}: ${episode.title ?? "(no title)"}`);
}

// Output:
// 第1話: 伝統ある古典部の再生
// 第2話: 名誉ある古典部の活動
// 第3話: 事情ある古典部の末裔
