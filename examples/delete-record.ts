import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const episode = await annict.Me.Record.delete("UmVjb3JkLTg3MjMxNjc=");

console.log(episode ? `Deleted, episode: ${episode.id}` : "Failed to delete");

// Output:
// Deleted, episode: RXBpc29kZS0x
