import type { GraphQLClient } from "graphql-request";
import type {
  ViewerQuery,
  UserFieldsFragment,
  ViewerLibraryQuery,
  ViewerLibraryQueryVariables,
  LibraryEntryFieldsFragment,
} from "@/generated/graphql";
import type { LibraryEntryOrderField, OrderDirection, StatusState } from "@/generated/types";
import { LIBRARY_ENTRY_FIELDS_FRAGMENT, USER_FIELDS_FRAGMENT } from "./fragments";

const VIEWER_QUERY = /* GraphQL */ `
  ${USER_FIELDS_FRAGMENT}
  query Viewer {
    viewer {
      ...UserFields
    }
  }
`;

const VIEWER_LIBRARY_QUERY = /* GraphQL */ `
  ${LIBRARY_ENTRY_FIELDS_FRAGMENT}
  query ViewerLibrary(
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
    viewer {
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

export type AnnictViewer = UserFieldsFragment;

export interface ViewerLibraryParams {
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

export const createViewerResource = (client: GraphQLClient) => ({
  /**
   * Gets the authenticated user.
   *
   * @returns The authenticated user
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/viewer
   */
  async get(): Promise<AnnictViewer> {
    const { viewer } = await client.request<ViewerQuery>(VIEWER_QUERY);
    if (!viewer) {
      throw new Error("Failed to fetch viewer");
    }
    return viewer;
  },

  /**
   * Gets library entries for the authenticated user.
   *
   * @param params - Library filters, sorting, and pagination options
   * @returns Matching library entries
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/objects/library-entry
   */
  async library(params: ViewerLibraryParams = {}): Promise<LibraryEntryFieldsFragment[]> {
    const variables: ViewerLibraryQueryVariables = params;
    const { viewer } = await client.request<ViewerLibraryQuery>(VIEWER_LIBRARY_QUERY, variables);
    return (viewer?.libraryEntries?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((entry): entry is LibraryEntryFieldsFragment => entry != null);
  },
});
