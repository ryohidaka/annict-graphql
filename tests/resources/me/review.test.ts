import { describe, it, expect, vi, afterEach } from "vite-plus/test";
import { GraphQLClient } from "graphql-request";
import { createReviewResource } from "@/resources/me/review";

describe("Me.Review.create", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the created review", async () => {
    const mockReview = {
      id: "UmV2aWV3LTE5MTgxNA==",
      annictId: 191814,
      title: "「氷菓」の記録",
      body:
        "A wonderful anime about anime production\n" +
        "\n" +
        "Really enjoyed the behind-the-scenes look at the industry.",
      ratingOverallState: "GREAT",
      ratingAnimationState: null,
      ratingMusicState: null,
      ratingStoryState: null,
      ratingCharacterState: null,
      likesCount: 0,
      impressionsCount: 0,
      modifiedAt: null,
      createdAt: "2026-08-20T13:04:32Z",
      updatedAt: "2026-08-20T13:04:32Z",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      createReview: { review: mockReview },
    });

    const review = createReviewResource(client);
    const result = await review.create({
      workId: "V29yay0x",
      body:
        "A wonderful anime about anime production\n" +
        "\n" +
        "Really enjoyed the behind-the-scenes look at the industry.",
      ratingOverallState: "GREAT",
    });

    expect(result).toEqual(mockReview);
  });

  it("returns null when creation fails", async () => {
    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      createReview: { review: null },
    });

    const review = createReviewResource(client);
    const result = await review.create({ workId: "invalid", body: "test" });

    expect(result).toBeNull();
  });
});

describe("Me.Review.update", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the updated review", async () => {
    const mockReview = {
      id: "UmV2aWV3LTE5MTgxNA==",
      annictId: 191814,
      title: "「氷菓」の記録",
      body: "Updated review after finishing the series.",
      ratingOverallState: "GOOD",
      ratingAnimationState: "GREAT",
      ratingMusicState: "GOOD",
      ratingStoryState: "GREAT",
      ratingCharacterState: "GREAT",
      likesCount: 0,
      impressionsCount: 0,
      modifiedAt: "2026-08-20T13:11:25Z",
      createdAt: "2026-08-20T13:04:32Z",
      updatedAt: "2026-08-20T13:11:25Z",
    };

    const client = new GraphQLClient("https://api.annict.com/graphql");
    vi.spyOn(client, "request").mockResolvedValue({
      updateReview: { review: mockReview },
    });

    const review = createReviewResource(client);
    const result = await review.update({
      reviewId: "UmV2aWV3LTE5MTgxNA==",
      body: "Updated review after finishing the series.",
      ratingOverallState: "GOOD",
      ratingAnimationState: "GREAT",
      ratingMusicState: "GOOD",
      ratingStoryState: "GREAT",
      ratingCharacterState: "GREAT",
    });

    expect(result).toEqual(mockReview);
  });
});
