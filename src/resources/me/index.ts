import type { GraphQLClient } from "graphql-request";
import { createRecordResource } from "./record";
import { createStatusResource } from "./status";
import { createReviewResource } from "./review";

/**
 * `Me` namespace, grouping mutations scoped to the authenticated user.
 */
export const createMeResource = (client: GraphQLClient) => ({
  Record: createRecordResource(client),
  Status: createStatusResource(client),
  Review: createReviewResource(client),
});
