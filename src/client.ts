import { GraphQLClient } from "graphql-request";
import { createViewerResource } from "@/resources/viewer";
import { createUserResource } from "@/resources/user";
import { createNodeResource } from "@/resources/node";

const ANNICT_ENDPOINT = "https://api.annict.com/graphql";

/**
 * GraphQL client for the Annict API.
 */
export class AnnictClient {
  readonly Viewer: ReturnType<typeof createViewerResource>;
  readonly User: ReturnType<typeof createUserResource>;
  readonly Node: ReturnType<typeof createNodeResource>;

  /**
   * @param accessToken - Annict personal access token
   */
  constructor(accessToken: string) {
    const client = new GraphQLClient(ANNICT_ENDPOINT, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    this.Viewer = createViewerResource(client);
    this.User = createUserResource(client);
    this.Node = createNodeResource(client);
  }
}
