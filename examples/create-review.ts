import { AnnictClient, RATING_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const review = await annict.Me.Review.create({
  workId: "V29yay0xODA4",
  title: "A wonderful anime about anime production",
  body: "Really enjoyed the behind-the-scenes look at the industry.",
  ratingOverallState: RATING_STATE.Great,
});

console.log(review ? `Posted review (id: ${review.id})` : "Failed to post review");

// Output:
// Posted review (id: UmV2aWV3LTE5MTgxNA==)
