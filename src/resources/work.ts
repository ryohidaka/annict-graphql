import type { GraphQLClient } from "graphql-request";
import type {
  SearchWorksQuery,
  SearchWorksQueryVariables,
  WorkFieldsFragment,
} from "@/generated/graphql";
import type { WorkOrderField, OrderDirection } from "@/generated/types";
import { WORK_FIELDS_FRAGMENT } from "./fragments";

const SEARCH_WORKS_QUERY = /* GraphQL */ `
  ${WORK_FIELDS_FRAGMENT}
  query SearchWorks(
    $titles: [String!]
    $seasons: [String!]
    $annictIds: [Int!]
    $orderBy: WorkOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    searchWorks(
      titles: $titles
      seasons: $seasons
      annictIds: $annictIds
      orderBy: $orderBy
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          ...WorkFields
        }
      }
    }
  }
`;

export type AnnictWork = WorkFieldsFragment;

export interface SearchWorksParams {
  /** Filter by work titles */
  titles?: string[];
  /** Filter by seasons (e.g. "2014-autumn") */
  seasons?: string[];
  /** Filter by Annict IDs */
  annictIds?: number[];
  /** Sort order */
  orderBy?: { field: WorkOrderField; direction: OrderDirection };
  /** Returns the elements in the list that come after the specified cursor */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor */
  before?: string;
  /** Returns the first n elements from the list */
  first?: number;
  /** Returns the last n elements from the list */
  last?: number;
}

export const createWorkResource = (client: GraphQLClient) => ({
  /**
   * Searches works by title, season, or Annict ID.
   *
   * @param params - Search filters, sort order, and pagination options
   * @returns Matching works
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/search-works
   */
  async search(params: SearchWorksParams = {}): Promise<AnnictWork[]> {
    const variables: SearchWorksQueryVariables = params;
    const { searchWorks } = await client.request<SearchWorksQuery>(SEARCH_WORKS_QUERY, variables);
    return (searchWorks?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((node): node is AnnictWork => node != null);
  },
});
