import type { GraphQLClient } from "graphql-request";
import type {
  UserQuery,
  UserQueryVariables,
  UserFieldsFragment,
  UserLibraryQuery,
  UserLibraryQueryVariables,
  LibraryEntryFieldsFragment,
} from "@/generated/graphql";
import type { LibraryEntryOrderField, OrderDirection, StatusState } from "@/generated/types";
import { LIBRARY_ENTRY_FIELDS_FRAGMENT, USER_FIELDS_FRAGMENT } from "./fragments";

const USER_QUERY = /* GraphQL */ `
  ${USER_FIELDS_FRAGMENT}
  query User($username: String!) {
    user(username: $username) {
      ...UserFields
    }
  }
`;

const USER_LIBRARY_QUERY = /* GraphQL */ `
  ${LIBRARY_ENTRY_FIELDS_FRAGMENT}
  query UserLibrary(
    $username: String!
    $states: [StatusState!]
    $seasons: [String!]
    $seasonFrom: String
    $seasonUntil: String
    $orderBy: LibraryEntryOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    user(username: $username) {
      libraryEntries(
        states: $states
        seasons: $seasons
        seasonFrom: $seasonFrom
        seasonUntil: $seasonUntil
        orderBy: $orderBy
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        edges {
          node {
            ...LibraryEntryFields
          }
        }
      }
    }
  }
`;

export type AnnictUser = UserFieldsFragment;

export interface UserParams {
  /** Annict username */
  username: string;
}

export interface UserLibraryParams {
  username: string;
  states?: StatusState[];
  seasons?: string[];
  seasonFrom?: string;
  seasonUntil?: string;
  orderBy?: { field: LibraryEntryOrderField; direction: OrderDirection };
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export const createUserResource = (client: GraphQLClient) => ({
  /**
   * Gets a user by username.
   *
   * @param params - Target username
   * @returns The user, or `null` if not found
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/user
   */
  async get(params: UserParams): Promise<AnnictUser | null> {
    const variables: UserQueryVariables = { username: params.username };
    const { user } = await client.request<UserQuery>(USER_QUERY, variables);
    return user ?? null;
  },

  /**
   * Gets library entries for a user.
   *
   * @param params - Username, library filters, sorting, and pagination options
   * @returns Matching library entries
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/objects/library-entry
   */
  async library(params: UserLibraryParams): Promise<LibraryEntryFieldsFragment[]> {
    const variables: UserLibraryQueryVariables = params;
    const { user } = await client.request<UserLibraryQuery>(USER_LIBRARY_QUERY, variables);
    return (user?.libraryEntries?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((entry): entry is LibraryEntryFieldsFragment => entry != null);
  },
});
