import type { GraphQLClient } from "graphql-request";
import type {
  UpdateStatusMutation,
  UpdateStatusMutationVariables,
  WorkFieldsFragment,
} from "@/generated/graphql";
import type { StatusState } from "@/generated/types";
import { WORK_FIELDS_FRAGMENT } from "../fragments";

const UPDATE_STATUS_MUTATION = /* GraphQL */ `
  ${WORK_FIELDS_FRAGMENT}
  mutation UpdateStatus($workId: ID!, $state: StatusState!) {
    updateStatus(input: { workId: $workId, state: $state }) {
      work {
        ...WorkFields
      }
    }
  }
`;

export interface UpdateStatusParams {
  /** Global ID of the work */
  workId: string;
  /** New watch status */
  state: StatusState;
}

export const createStatusResource = (client: GraphQLClient) => ({
  /**
   * Updates the watch status of a work.
   *
   * @param params - Work ID and new status
   * @returns The updated work, or `null` if the update failed
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/mutations/update-status
   */
  async update(params: UpdateStatusParams): Promise<WorkFieldsFragment | null> {
    const variables: UpdateStatusMutationVariables = params;
    const { updateStatus } = await client.request<UpdateStatusMutation>(
      UPDATE_STATUS_MUTATION,
      variables,
    );
    return updateStatus?.work ?? null;
  },
});
