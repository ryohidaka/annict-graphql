import { AnnictClient, STATUS_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const work = await annict.Me.Status.update({
  workId: "V29yay0xODA4",
  state: STATUS_STATE.Watching,
});

console.log(work ? `${work.title}: ${work.viewerStatusState}` : "Failed to update");

// Output:
// 氷菓: WATCHING
