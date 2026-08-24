import { AnnictClient } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const node = await annict.Node.get("VXNlci0y");
console.log(node);

const nodes = await annict.Node.getMany(["VXNlci0y", "V29yay0xODA4"]);
for (const n of nodes) {
  console.log(n ? n.id : "(not found)");
}

// Output:
// { id: 'VXNlci0y' }
// VXNlci0y
// V29yay0xODA4
