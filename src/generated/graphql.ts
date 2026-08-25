/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
import * as Types from "./types";

export type EpisodeOrder = {
  direction: OrderDirection;
  field: EpisodeOrderField;
};

export type EpisodeOrderField = "CREATED_AT" | "SORT_NUMBER";

/** Media of anime */
export type Media = "MOVIE" | "OTHER" | "OVA" | "TV" | "WEB";

export type OrderDirection = "ASC" | "DESC";

/** Season name */
export type SeasonName = "AUTUMN" | "SPRING" | "SUMMER" | "WINTER";

export type StatusState =
  | "NO_STATE"
  | "ON_HOLD"
  | "STOP_WATCHING"
  | "WANNA_WATCH"
  | "WATCHED"
  | "WATCHING";

export type WorkOrder = {
  direction: OrderDirection;
  field: WorkOrderField;
};

export type WorkOrderField = "CREATED_AT" | "SEASON" | "WATCHERS_COUNT";

export type SearchEpisodesQueryVariables = Exact<{
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.EpisodeOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type SearchEpisodesQuery = {
  searchEpisodes: {
    edges: Array<{
      node: {
        id: string;
        annictId: number;
        title: string | null;
        number: number | null;
        numberText: string | null;
        sortNumber: number;
        recordsCount: number;
        recordCommentsCount: number;
        satisfactionRate: number | null;
        viewerDidTrack: boolean;
        viewerRecordsCount: number;
      } | null;
    } | null> | null;
  } | null;
};

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

export type WorkFieldsFragment = {
  id: string;
  annictId: number;
  title: string;
  titleEn: string | null;
  titleKana: string | null;
  titleRo: string | null;
  media: Types.Media;
  seasonName: Types.SeasonName | null;
  seasonYear: number | null;
  episodesCount: number;
  noEpisodes: boolean;
  watchersCount: number;
  reviewsCount: number;
  satisfactionRate: number | null;
  malAnimeId: string | null;
  syobocalTid: number | null;
  officialSiteUrl: string | null;
  officialSiteUrlEn: string | null;
  wikipediaUrl: string | null;
  wikipediaUrlEn: string | null;
  twitterUsername: string | null;
  twitterHashtag: string | null;
  viewerStatusState: Types.StatusState | null;
};

export type EpisodeFieldsFragment = {
  id: string;
  annictId: number;
  title: string | null;
  number: number | null;
  numberText: string | null;
  sortNumber: number;
  recordsCount: number;
  recordCommentsCount: number;
  satisfactionRate: number | null;
  viewerDidTrack: boolean;
  viewerRecordsCount: number;
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

export type SearchWorksQueryVariables = Exact<{
  titles?: Array<string> | string | null | undefined;
  seasons?: Array<string> | string | null | undefined;
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.WorkOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type SearchWorksQuery = {
  searchWorks: {
    edges: Array<{
      node: {
        id: string;
        annictId: number;
        title: string;
        titleEn: string | null;
        titleKana: string | null;
        titleRo: string | null;
        media: Types.Media;
        seasonName: Types.SeasonName | null;
        seasonYear: number | null;
        episodesCount: number;
        noEpisodes: boolean;
        watchersCount: number;
        reviewsCount: number;
        satisfactionRate: number | null;
        malAnimeId: string | null;
        syobocalTid: number | null;
        officialSiteUrl: string | null;
        officialSiteUrlEn: string | null;
        wikipediaUrl: string | null;
        wikipediaUrlEn: string | null;
        twitterUsername: string | null;
        twitterHashtag: string | null;
        viewerStatusState: Types.StatusState | null;
      } | null;
    } | null> | null;
  } | null;
};
