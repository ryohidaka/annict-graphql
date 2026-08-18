import { GraphQLClient } from "graphql-request";
import { createViewerResource } from "@/resources/viewer";

const ANNICT_ENDPOINT = "https://api.annict.com/graphql";

/**
 * GraphQL client for the Annict API.
 */
export class AnnictClient {
  readonly Viewer: ReturnType<typeof createViewerResource>;

  /**
   * @param accessToken - Annict personal access token
   */
  constructor(accessToken: string) {
    const client = new GraphQLClient(ANNICT_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    this.Viewer = createViewerResource(client);
  }
}
