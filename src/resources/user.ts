import type { GraphQLClient } from "graphql-request";
import type {
  UserQuery,
  UserQueryVariables,
  UserFieldsFragment,
  UserLibraryQuery,
  UserLibraryQueryVariables,
  LibraryEntryFieldsFragment,
  UserRecordsQuery,
  UserRecordsQueryVariables,
  RecordFieldsFragment,
  UserWorksQuery,
  UserWorksQueryVariables,
  WorkFieldsFragment,
  UserProgramsQuery,
  UserProgramsQueryVariables,
  ProgramFieldsFragment,
} from "@/generated/graphql";
import type {
  LibraryEntryOrderField,
  OrderDirection,
  StatusState,
  RecordOrderField,
  WorkOrderField,
  ProgramOrderField,
} from "@/generated/types";
import {
  LIBRARY_ENTRY_FIELDS_FRAGMENT,
  RECORD_FIELDS_FRAGMENT,
  USER_FIELDS_FRAGMENT,
  WORK_FIELDS_FRAGMENT,
  PROGRAM_FIELDS_FRAGMENT,
} from "./fragments";

const USER_QUERY = /* GraphQL */ `
  ${USER_FIELDS_FRAGMENT}
  query User($username: String!) {
    user(username: $username) {
      ...UserFields
    }
  }
`;

const USER_LIBRARY_QUERY = /* GraphQL */ `
  ${LIBRARY_ENTRY_FIELDS_FRAGMENT}
  query UserLibrary(
    $username: String!
    $states: [StatusState!]
    $seasons: [String!]
    $seasonFrom: String
    $seasonUntil: String
    $orderBy: LibraryEntryOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    user(username: $username) {
      libraryEntries(
        states: $states
        seasons: $seasons
        seasonFrom: $seasonFrom
        seasonUntil: $seasonUntil
        orderBy: $orderBy
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        edges {
          node {
            ...LibraryEntryFields
          }
        }
      }
    }
  }
`;

const USER_RECORDS_QUERY = /* GraphQL */ `
  ${RECORD_FIELDS_FRAGMENT}
  query UserRecords(
    $username: String!
    $hasComment: Boolean
    $orderBy: RecordOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    user(username: $username) {
      records(
        hasComment: $hasComment
        orderBy: $orderBy
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        edges {
          node {
            ...RecordFields
          }
        }
      }
    }
  }
`;

const USER_WORKS_QUERY = /* GraphQL */ `
  ${WORK_FIELDS_FRAGMENT}
  query UserWorks(
    $username: String!
    $state: StatusState
    $titles: [String!]
    $seasons: [String!]
    $annictIds: [Int!]
    $orderBy: WorkOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    user(username: $username) {
      works(
        state: $state
        titles: $titles
        seasons: $seasons
        annictIds: $annictIds
        orderBy: $orderBy
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        edges {
          node {
            ...WorkFields
          }
        }
      }
    }
  }
`;

const USER_PROGRAMS_QUERY = /* GraphQL */ `
  ${PROGRAM_FIELDS_FRAGMENT}
  query UserPrograms(
    $username: String!
    $unwatched: Boolean
    $orderBy: ProgramOrder
    $after: String
    $before: String
    $first: Int
    $last: Int
  ) {
    user(username: $username) {
      programs(
        unwatched: $unwatched
        orderBy: $orderBy
        after: $after
        before: $before
        first: $first
        last: $last
      ) {
        edges {
          node {
            ...ProgramFields
          }
        }
      }
    }
  }
`;

export type AnnictUser = UserFieldsFragment;

export interface UserParams {
  /** Annict username */
  username: string;
}

export interface UserLibraryParams {
  username: string;
  states?: StatusState[];
  seasons?: string[];
  seasonFrom?: string;
  seasonUntil?: string;
  orderBy?: { field: LibraryEntryOrderField; direction: OrderDirection };
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export interface UserRecordsParams {
  username: string;
  hasComment?: boolean;
  orderBy?: { field: RecordOrderField; direction: OrderDirection };
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export interface UserWorksParams {
  username: string;
  state?: StatusState;
  titles?: string[];
  seasons?: string[];
  annictIds?: number[];
  orderBy?: { field: WorkOrderField; direction: OrderDirection };
  after?: string;
  before?: string;
  first?: number;
  last?: number;
}

export interface UserProgramsParams {
  username: string;
  unwatched?: boolean;
  orderBy?: { field: ProgramOrderField; direction: OrderDirection };
  after?: string;
  before?: string;
  first?: number;
  last?: number;
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

  /**
   * Gets library entries for a user.
   *
   * @param params - Username, library filters, sorting, and pagination options
   * @returns Matching library entries
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/objects/library-entry
   */
  async library(params: UserLibraryParams): Promise<LibraryEntryFieldsFragment[]> {
    const variables: UserLibraryQueryVariables = params;
    const { user } = await client.request<UserLibraryQuery>(USER_LIBRARY_QUERY, variables);
    return (user?.libraryEntries?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((entry): entry is LibraryEntryFieldsFragment => entry != null);
  },

  /**
   * Gets records for a user.
   *
   * @param params - Username, record filters, sorting, and pagination options
   * @returns Matching records
   * @see https://developers.annict.com/docs/graphql-api/beta/reference/objects/record
   */
  async records(params: UserRecordsParams): Promise<RecordFieldsFragment[]> {
    const variables: UserRecordsQueryVariables = params;
    const { user } = await client.request<UserRecordsQuery>(USER_RECORDS_QUERY, variables);
    return (user?.records?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((record): record is RecordFieldsFragment => record != null);
  },

  /**
   * Gets works associated with a user.
   *
   * @param params - Username, work filters, sorting, and pagination options
   * @returns Matching works
   */
  async works(params: UserWorksParams): Promise<WorkFieldsFragment[]> {
    const variables: UserWorksQueryVariables = params;
    const { user } = await client.request<UserWorksQuery>(USER_WORKS_QUERY, variables);
    return (user?.works?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((work): work is WorkFieldsFragment => work != null);
  },

  /**
   * Gets programs associated with a user.
   *
   * @param params - Username, program filters, sorting, and pagination options
   * @returns Matching programs
   */
  async programs(params: UserProgramsParams): Promise<ProgramFieldsFragment[]> {
    const variables: UserProgramsQueryVariables = params;
    const { user } = await client.request<UserProgramsQuery>(USER_PROGRAMS_QUERY, variables);
    return (user?.programs?.edges ?? [])
      .map((edge) => edge?.node)
      .filter((program): program is ProgramFieldsFragment => program != null);
  },
});
