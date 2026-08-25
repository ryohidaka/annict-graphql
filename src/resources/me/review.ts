import type { GraphQLClient } from "graphql-request";
import type {
  CreateReviewMutation,
  CreateReviewMutationVariables,
  UpdateReviewMutation,
  UpdateReviewMutationVariables,
  ReviewFieldsFragment,
} from "@/generated/graphql";
import type { RatingState } from "@/generated/types";
import { REVIEW_FIELDS_FRAGMENT } from "../fragments";

const CREATE_REVIEW_MUTATION = /* GraphQL */ `
  ${REVIEW_FIELDS_FRAGMENT}
  mutation CreateReview(
    $workId: ID!
    $title: String
    $body: String!
    $ratingOverallState: RatingState
    $ratingAnimationState: RatingState
    $ratingMusicState: RatingState
    $ratingStoryState: RatingState
    $ratingCharacterState: RatingState
    $shareTwitter: Boolean
    $shareFacebook: Boolean
  ) {
    createReview(
      input: {
        workId: $workId
        title: $title
        body: $body
        ratingOverallState: $ratingOverallState
        ratingAnimationState: $ratingAnimationState
        ratingMusicState: $ratingMusicState
        ratingStoryState: $ratingStoryState
        ratingCharacterState: $ratingCharacterState
        shareTwitter: $shareTwitter
        shareFacebook: $shareFacebook
      }
    ) {
      review {
        ...ReviewFields
      }
    }
  }
`;

const UPDATE_REVIEW_MUTATION = /* GraphQL */ `
  ${REVIEW_FIELDS_FRAGMENT}
  mutation UpdateReview(
    $reviewId: ID!
    $title: String
    $body: String!
    $ratingOverallState: RatingState!
    $ratingAnimationState: RatingState!
    $ratingMusicState: RatingState!
    $ratingStoryState: RatingState!
    $ratingCharacterState: RatingState!
    $shareTwitter: Boolean
    $shareFacebook: Boolean
  ) {
    updateReview(
      input: {
        reviewId: $reviewId
        title: $title
        body: $body
        ratingOverallState: $ratingOverallState
        ratingAnimationState: $ratingAnimationState
        ratingMusicState: $ratingMusicState
        ratingStoryState: $ratingStoryState
        ratingCharacterState: $ratingCharacterState
        shareTwitter: $shareTwitter
        shareFacebook: $shareFacebook
      }
    ) {
      review {
        ...ReviewFields
      }
    }
  }
`;

export type AnnictReview = ReviewFieldsFragment;

export interface CreateReviewParams {
  /** Global ID of the work being reviewed */
  workId: string;
  /** Review title */
  title?: string;
  /** Review body */
  body: string;
  /** Overall rating */
  ratingOverallState?: RatingState;
  /** Animation rating */
  ratingAnimationState?: RatingState;
  /** Music rating */
  ratingMusicState?: RatingState;
  /** Story rating */
  ratingStoryState?: RatingState;
  /** Character rating */
  ratingCharacterState?: RatingState;
  /** Share this review on Twitter */
  shareTwitter?: boolean;
  /** Share this review on Facebook */
  shareFacebook?: boolean;
}

export interface UpdateReviewParams {
  /** Global ID of the review to update */
  reviewId: string;
  /** New title */
  title?: string;
  /** New body */
  body: string;
  /** Overall rating (required by the API) */
  ratingOverallState: RatingState;
  /** Animation rating (required by the API) */
  ratingAnimationState: RatingState;
  /** Music rating (required by the API) */
  ratingMusicState: RatingState;
  /** Story rating (required by the API) */
  ratingStoryState: RatingState;
  /** Character rating (required by the API) */
  ratingCharacterState: RatingState;
  /** Share this review on Twitter */
  shareTwitter?: boolean;
  /** Share this review on Facebook */
  shareFacebook?: boolean;
}

export const createReviewResource = (client: GraphQLClient) => ({
  /**
   * Creates a review for a work.
   *
   * @param params - Review fields
   * @returns The created review, or `null` if creation failed
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/mutations/create-review
   */
  async create(params: CreateReviewParams): Promise<AnnictReview | null> {
    const variables: CreateReviewMutationVariables = params;
    const { createReview } = await client.request<CreateReviewMutation>(
      CREATE_REVIEW_MUTATION,
      variables,
    );
    return createReview?.review ?? null;
  },

  /**
   * Updates an existing review.
   *
   * Note: unlike CreateReview, `body` and all five rating fields are
   * required by UpdateReviewInput.
   *
   * @param params - Review ID and fields to update
   * @returns The updated review, or `null` if the update failed
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/mutations/update-review
   */
  async update(params: UpdateReviewParams): Promise<AnnictReview | null> {
    const variables: UpdateReviewMutationVariables = params;
    const { updateReview } = await client.request<UpdateReviewMutation>(
      UPDATE_REVIEW_MUTATION,
      variables,
    );
    return updateReview?.review ?? null;
  },
});
