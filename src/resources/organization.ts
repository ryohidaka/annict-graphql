import type { GraphQLClient } from "graphql-request";
import type {
  SearchOrganizationsQuery,
  SearchOrganizationsQueryVariables,
  OrganizationFieldsFragment,
} from "@/generated/graphql";
import type { OrganizationOrderField, OrderDirection } from "@/generated/types";
import { ORGANIZATION_FIELDS_FRAGMENT } from "./fragments";

const SEARCH_ORGANIZATIONS_QUERY = /* GraphQL */ `
  ${ORGANIZATION_FIELDS_FRAGMENT}
  query SearchOrganizations(
    $names: [String!]
    $annictIds: [Int!]
    $orderBy: OrganizationOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    searchOrganizations(
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
          ...OrganizationFields
        }
      }
    }
  }
`;

export type AnnictOrganization = OrganizationFieldsFragment;

export interface SearchOrganizationsParams {
  /** Filter by organization names */
  names?: string[];
  /** Filter by Annict IDs */
  annictIds?: number[];
  /** Sort order */
  orderBy?: { field: OrganizationOrderField; direction: OrderDirection };
  /** Returns the elements in the list that come after the specified cursor */
  after?: string;
  /** Returns the elements in the list that come before the specified cursor */
  before?: string;
  /** Returns the first n elements from the list */
  first?: number;
  /** Returns the last n elements from the list */
  last?: number;
}

export const createOrganizationResource = (client: GraphQLClient) => ({
  /**
   * Searches organizations by name or Annict ID.
   *
   * @param params - Search filters, sort order, and pagination options
   * @returns Matching organizations
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/search-organizations
   */
  async search(params: SearchOrganizationsParams = {}): Promise<AnnictOrganization[]> {
    const variables: SearchOrganizationsQueryVariables = params;
    const { searchOrganizations } = await client.request<SearchOrganizationsQuery>(
      SEARCH_ORGANIZATIONS_QUERY,
      variables,
    );
    return (searchOrganizations?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((node): node is AnnictOrganization => node != null);
  },
});
