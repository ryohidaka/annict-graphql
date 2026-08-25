import { AnnictClient, RATING_STATE } from "annict-graphql";

const annict = new AnnictClient(process.env.ANNICT_ACCESS_TOKEN!);

const review = await annict.Me.Review.update({
  reviewId: "UmV2aWV3LTE5MTgxNA==",
  body: "Updated review after finishing the series.",
  ratingOverallState: RATING_STATE.Good,
  ratingAnimationState: RATING_STATE.Great,
  ratingMusicState: RATING_STATE.Good,
  ratingStoryState: RATING_STATE.Great,
  ratingCharacterState: RATING_STATE.Great,
});

console.log(review);

console.log(review ? `Updated review (id: ${review.id})` : "Failed to update review");

// Output:
// Updated review (id: UmV2aWV3LTE5MTgxNA==)
