import { GraphQLClient } from "graphql-request";

const ANNICT_ENDPOINT = "https://api.annict.com/graphql";

/**
 * GraphQL client for the Annict API.
 */
export class AnnictClient {
  /**
   * @param accessToken - Annict personal access token
   */
  constructor(accessToken: string) {
    new GraphQLClient(ANNICT_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
  }
}
