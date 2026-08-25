---
"annict-graphql": minor
---

Add `Me.Review.create()`, `Me.Review.update()`, and `Me.Review.delete()` for managing reviews.

Note: `Me.Review.update()` requires all five rating fields (unlike `create`, where they're optional), matching `UpdateReviewInput` in the GraphQL schema. `Me.Review.delete()` returns the parent work, not the deleted review.
