import type { GraphQLClient } from "graphql-request";
import type {
  NodeQuery,
  NodeQueryVariables,
  NodesQuery,
  NodesQueryVariables,
} from "@/generated/graphql";

const NODE_QUERY = /* GraphQL */ `
  query Node($id: ID!) {
    node(id: $id) {
      id
    }
  }
`;

const NODES_QUERY = /* GraphQL */ `
  query Nodes($ids: [ID!]!) {
    nodes(ids: $ids) {
      id
    }
  }
`;

export interface AnnictNode {
  id: string;
}

export const createNodeResource = (client: GraphQLClient) => ({
  /**
   * Fetches a single object by its global ID.
   *
   * @param id - Global ID of the object
   * @returns The object, or `null` if not found
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/node
   */
  async get(id: string): Promise<AnnictNode | null> {
    const variables: NodeQueryVariables = { id };
    const { node } = await client.request<NodeQuery>(NODE_QUERY, variables);
    return node ?? null;
  },

  /**
   * Fetches multiple objects by their global IDs.
   *
   * @param ids - Global IDs of the objects
   * @returns The matching objects
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/queries/nodes
   */
  async getMany(ids: string[]): Promise<(AnnictNode | null)[]> {
    const variables: NodesQueryVariables = { ids };
    const { nodes } = await client.request<NodesQuery>(NODES_QUERY, variables);
    return nodes;
  },
});
