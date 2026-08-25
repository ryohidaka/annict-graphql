import type { GraphQLClient } from "graphql-request";
import type {
  SearchEpisodesQuery,
  SearchEpisodesQueryVariables,
  EpisodeFieldsFragment,
} from "@/generated/graphql";
import type { EpisodeOrderField, OrderDirection } from "@/generated/types";
import { EPISODE_FIELDS_FRAGMENT } from "./fragments";

const SEARCH_EPISODES_QUERY = /* GraphQL */ `
  ${EPISODE_FIELDS_FRAGMENT}
  query SearchEpisodes(
    $annictIds: [Int!]
    $orderBy: EpisodeOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    searchEpisodes(
      annictIds: $annictIds
      orderBy: $orderBy
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          ...EpisodeFields
        }
      }
    }
  }
`;

export type AnnictEpisode = EpisodeFieldsFragment;

export interface SearchEpisodesParams {
  /** Filter by Annict IDs */
  annictIds?: number[];
  /** Sort order */
  orderBy?: { field: EpisodeOrderField; direction: OrderDirection };
  /** Returns the elements in the list that come after the specified cursor */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor */
  before?: string;
  /** Returns the first n elements from the list */
  first?: number;
  /** Returns the last n elements from the list */
  last?: number;
}

export const createEpisodeResource = (client: GraphQLClient) => ({
  /**
   * Searches episodes by Annict ID.
   *
   * @param params - Search filters, sort order, and pagination options
   * @returns Matching episodes
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/search-episodes
   */
  async search(params: SearchEpisodesParams = {}): Promise<AnnictEpisode[]> {
    const variables: SearchEpisodesQueryVariables = params;
    const { searchEpisodes } = await client.request<SearchEpisodesQuery>(
      SEARCH_EPISODES_QUERY,
      variables,
    );
    return (searchEpisodes?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((node): node is AnnictEpisode => node != null);
  },
});
