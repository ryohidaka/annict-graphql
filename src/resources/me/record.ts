import type { GraphQLClient } from "graphql-request";
import type {
  CreateRecordMutation,
  CreateRecordMutationVariables,
  RecordFieldsFragment,
} from "@/generated/graphql";
import type { RatingState } from "@/generated/types";
import { RECORD_FIELDS_FRAGMENT } from "../fragments";

const CREATE_RECORD_MUTATION = /* GraphQL */ `
  ${RECORD_FIELDS_FRAGMENT}
  mutation CreateRecord(
    $episodeId: ID!
    $comment: String
    $ratingState: RatingState
    $shareTwitter: Boolean
    $shareFacebook: Boolean
  ) {
    createRecord(
      input: {
        episodeId: $episodeId
        comment: $comment
        ratingState: $ratingState
        shareTwitter: $shareTwitter
        shareFacebook: $shareFacebook
      }
    ) {
      record {
        ...RecordFields
      }
    }
  }
`;

export type AnnictRecord = RecordFieldsFragment;

export interface CreateRecordParams {
  /** Global ID of the episode to record */
  episodeId: string;
  /** Optional comment */
  comment?: string;
  /** Rating state */
  ratingState?: RatingState;
  /** Share this record on Twitter */
  shareTwitter?: boolean;
  /** Share this record on Facebook */
  shareFacebook?: boolean;
}

export const createRecordResource = (client: GraphQLClient) => ({
  /**
   * Creates a record for an episode.
   *
   * @param params - Record fields
   * @returns The created record, or `null` if creation failed
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/mutations/create-record
   */
  async create(params: CreateRecordParams): Promise<AnnictRecord | null> {
    const variables: CreateRecordMutationVariables = params;
    const { createRecord } = await client.request<CreateRecordMutation>(
      CREATE_RECORD_MUTATION,
      variables,
    );
    return createRecord?.record ?? null;
  },
});
