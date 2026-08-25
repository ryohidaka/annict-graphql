import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const organizations = await annict.Organization.search({ names: ["京都アニメーション"] });

for (const organization of organizations) {
  console.log(`${organization.name} — ${organization.staffsCount} staff members`);
}

// Output:
// 京都アニメーション — 95 staff members
