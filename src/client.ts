import { GraphQLClient } from "graphql-request";
import { createViewerResource } from "@/resources/viewer";
import { createUserResource } from "@/resources/user";
import { createNodeResource } from "@/resources/node";
import { createWorkResource } from "@/resources/work";
import { createEpisodeResource } from "@/resources/episode";
import { createCharacterResource } from "@/resources/character";
import { createPersonResource } from "@/resources/person";
import { createOrganizationResource } from "@/resources/organization";
import { createMeResource } from "@/resources/me";

const ANNICT_ENDPOINT = "https://api.annict.com/graphql";

/**
 * GraphQL client for the Annict API.
 */
export class AnnictClient {
  readonly Viewer: ReturnType<typeof createViewerResource>;
  readonly User: ReturnType<typeof createUserResource>;
  readonly Node: ReturnType<typeof createNodeResource>;
  readonly Work: ReturnType<typeof createWorkResource>;
  readonly Episode: ReturnType<typeof createEpisodeResource>;
  readonly Character: ReturnType<typeof createCharacterResource>;
  readonly Person: ReturnType<typeof createPersonResource>;
  readonly Organization: ReturnType<typeof createOrganizationResource>;
  readonly Me: ReturnType<typeof createMeResource>;

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
    this.Work = createWorkResource(client);
    this.Episode = createEpisodeResource(client);
    this.Character = createCharacterResource(client);
    this.Person = createPersonResource(client);
    this.Organization = createOrganizationResource(client);
    this.Me = createMeResource(client);
  }
}
