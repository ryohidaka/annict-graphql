import type { GraphQLClient } from "graphql-request";
import type { ViewerQuery, UserFieldsFragment } from "@/generated/graphql";
import { USER_FIELDS_FRAGMENT } from "./fragments";

const VIEWER_QUERY = /* GraphQL */ `
  ${USER_FIELDS_FRAGMENT}
  query Viewer {
    viewer {
      ...UserFields
    }
  }
`;

export type AnnictViewer = UserFieldsFragment;

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
});
