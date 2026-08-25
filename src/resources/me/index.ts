import type { GraphQLClient } from "graphql-request";
import { createRecordResource } from "./record";
import { createStatusResource } from "./status";

/**
 * `Me` namespace, grouping mutations scoped to the authenticated user.
 */
export const createMeResource = (client: GraphQLClient) => ({
  Record: createRecordResource(client),
  Status: createStatusResource(client),
});
