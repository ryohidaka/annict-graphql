import type { GraphQLClient } from "graphql-request";
import type {
  CreateReviewMutation,
  CreateReviewMutationVariables,
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
});
