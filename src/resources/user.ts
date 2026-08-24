import type { GraphQLClient } from "graphql-request";
import type { UserQuery, UserQueryVariables, UserFieldsFragment } from "@/generated/graphql";
import { USER_FIELDS_FRAGMENT } from "./fragments";

const USER_QUERY = /* GraphQL */ `
  ${USER_FIELDS_FRAGMENT}
  query User($username: String!) {
    user(username: $username) {
      ...UserFields
    }
  }
`;

export type AnnictUser = UserFieldsFragment;

export interface UserParams {
  /** Annict username */
  username: string;
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
});
