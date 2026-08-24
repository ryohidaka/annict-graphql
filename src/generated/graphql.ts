/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };

export type UserFieldsFragment = {
  id: string;
  annictId: number;
  name: string;
  username: string;
  avatarUrl: string | null;
  backgroundImageUrl: string | null;
  description: string;
  url: string | null;
  email: string | null;
  createdAt: string;
  followersCount: number;
  followingsCount: number;
  notificationsCount: number | null;
  recordsCount: number;
  wannaWatchCount: number;
  watchingCount: number;
  watchedCount: number;
  onHoldCount: number;
  stopWatchingCount: number;
  viewerCanFollow: boolean;
  viewerIsFollowing: boolean;
};

export type NodeQueryVariables = Exact<{
  id: string;
}>;

export type NodeQuery = {
  node:
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | null;
};

export type NodesQueryVariables = Exact<{
  ids: Array<string> | string;
}>;

export type NodesQuery = {
  nodes: Array<
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | { id: string }
    | null
  >;
};

export type UserQueryVariables = Exact<{
  username: string;
}>;

export type UserQuery = {
  user: {
    id: string;
    annictId: number;
    name: string;
    username: string;
    avatarUrl: string | null;
    backgroundImageUrl: string | null;
    description: string;
    url: string | null;
    email: string | null;
    createdAt: string;
    followersCount: number;
    followingsCount: number;
    notificationsCount: number | null;
    recordsCount: number;
    wannaWatchCount: number;
    watchingCount: number;
    watchedCount: number;
    onHoldCount: number;
    stopWatchingCount: number;
    viewerCanFollow: boolean;
    viewerIsFollowing: boolean;
  } | null;
};

export type ViewerQueryVariables = Exact<{ [key: string]: never }>;

export type ViewerQuery = {
  viewer: {
    id: string;
    annictId: number;
    name: string;
    username: string;
    avatarUrl: string | null;
    backgroundImageUrl: string | null;
    description: string;
    url: string | null;
    email: string | null;
    createdAt: string;
    followersCount: number;
    followingsCount: number;
    notificationsCount: number | null;
    recordsCount: number;
    wannaWatchCount: number;
    watchingCount: number;
    watchedCount: number;
    onHoldCount: number;
    stopWatchingCount: number;
    viewerCanFollow: boolean;
    viewerIsFollowing: boolean;
  } | null;
};
