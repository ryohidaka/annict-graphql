import type { GraphQLClient } from "graphql-request";
import type {
  SearchCharactersQuery,
  SearchCharactersQueryVariables,
  CharacterFieldsFragment,
} from "@/generated/graphql";
import type { CharacterOrderField, OrderDirection } from "@/generated/types";
import { CHARACTER_FIELDS_FRAGMENT } from "./fragments";

const SEARCH_CHARACTERS_QUERY = /* GraphQL */ `
  ${CHARACTER_FIELDS_FRAGMENT}
  query SearchCharacters(
    $names: [String!]
    $annictIds: [Int!]
    $orderBy: CharacterOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    searchCharacters(
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
          ...CharacterFields
        }
      }
    }
  }
`;

export type AnnictCharacter = CharacterFieldsFragment;

export interface SearchCharactersParams {
  /** Filter by character names */
  names?: string[];
  /** Filter by Annict IDs */
  annictIds?: number[];
  /** Sort order */
  orderBy?: { field: CharacterOrderField; direction: OrderDirection };
  /** Returns the elements in the list that come after the specified cursor */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor */
  before?: string;
  /** Returns the first n elements from the list */
  first?: number;
  /** Returns the last n elements from the list */
  last?: number;
}

export const createCharacterResource = (client: GraphQLClient) => ({
  /**
   * Searches characters by name or Annict ID.
   *
   * @param params - Search filters, sort order, and pagination options
   * @returns Matching characters
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/search-characters
   */
  async search(params: SearchCharactersParams = {}): Promise<AnnictCharacter[]> {
    const variables: SearchCharactersQueryVariables = params;
    const { searchCharacters } = await client.request<SearchCharactersQuery>(
      SEARCH_CHARACTERS_QUERY,
      variables,
    );
    return (searchCharacters?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((node): node is AnnictCharacter => node != null);
  },
});
