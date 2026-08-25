import type { GraphQLClient } from "graphql-request";
import type {
  SearchPeopleQuery,
  SearchPeopleQueryVariables,
  PersonFieldsFragment,
} from "@/generated/graphql";
import type { PersonOrderField, OrderDirection } from "@/generated/types";
import { PERSON_FIELDS_FRAGMENT } from "./fragments";

const SEARCH_PEOPLE_QUERY = /* GraphQL */ `
  ${PERSON_FIELDS_FRAGMENT}
  query SearchPeople(
    $names: [String!]
    $annictIds: [Int!]
    $orderBy: PersonOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    searchPeople(
      names: $names
      annictIds: $annictIds
      orderBy: $orderBy
      after: $after
      before: $before
      first: $first
      last: $last
    ) {
      edges {
        node {
          ...PersonFields
        }
      }
    }
  }
`;

export type AnnictPerson = PersonFieldsFragment;

export interface SearchPeopleParams {
  /** Filter by person names */
  names?: string[];
  /** Filter by Annict IDs */
  annictIds?: number[];
  /** Sort order */
  orderBy?: { field: PersonOrderField; direction: OrderDirection };
  /** Returns the elements in the list that come after the specified cursor */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor */
  before?: string;
  /** Returns the first n elements from the list */
  first?: number;
  /** Returns the last n elements from the list */
  last?: number;
}

export const createPersonResource = (client: GraphQLClient) => ({
  /**
   * Searches people by name or Annict ID.
   *
   * @param params - Search filters, sort order, and pagination options
   * @returns Matching people
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/search-people
   */
  async search(params: SearchPeopleParams = {}): Promise<AnnictPerson[]> {
    const variables: SearchPeopleQueryVariables = params;
    const { searchPeople } = await client.request<SearchPeopleQuery>(
      SEARCH_PEOPLE_QUERY,
      variables,
    );
    return (searchPeople?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((node): node is AnnictPerson => node != null);
  },
});
