/** Internal type. DO NOT USE DIRECTLY. */
type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** Internal type. DO NOT USE DIRECTLY. */
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
import * as Types from "./types";

export type CharacterOrder = {
  direction: OrderDirection;
  field: CharacterOrderField;
};

export type CharacterOrderField = "CREATED_AT" | "FAVORITE_CHARACTERS_COUNT";

export type EpisodeOrder = {
  direction: OrderDirection;
  field: EpisodeOrderField;
};

export type EpisodeOrderField = "CREATED_AT" | "SORT_NUMBER";

/** Media of anime */
export type Media = "MOVIE" | "OTHER" | "OVA" | "TV" | "WEB";

export type OrderDirection = "ASC" | "DESC";

export type OrganizationOrder = {
  direction: OrderDirection;
  field: OrganizationOrderField;
};

export type OrganizationOrderField = "CREATED_AT" | "FAVORITE_ORGANIZATIONS_COUNT";

export type PersonOrder = {
  direction: OrderDirection;
  field: PersonOrderField;
};

export type PersonOrderField = "CREATED_AT" | "FAVORITE_PEOPLE_COUNT";

export type RatingState = "AVERAGE" | "BAD" | "GOOD" | "GREAT";

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

export type SearchCharactersQueryVariables = Exact<{
  names?: Array<string> | string | null | undefined;
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.CharacterOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type SearchCharactersQuery = {
  searchCharacters: {
    edges: Array<{
      node: {
        id: string;
        annictId: number;
        name: string;
        nameEn: string;
        nameKana: string;
        nickname: string;
        nicknameEn: string;
        age: string;
        ageEn: string;
        birthday: string;
        birthdayEn: string;
        bloodType: string;
        bloodTypeEn: string;
        height: string;
        heightEn: string;
        weight: string;
        weightEn: string;
        nationality: string;
        nationalityEn: string;
        occupation: string;
        occupationEn: string;
        description: string;
        descriptionEn: string;
        descriptionSource: string;
        descriptionSourceEn: string;
        favoriteCharactersCount: number;
      } | null;
    } | null> | null;
  } | null;
};

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

export type CharacterFieldsFragment = {
  id: string;
  annictId: number;
  name: string;
  nameEn: string;
  nameKana: string;
  nickname: string;
  nicknameEn: string;
  age: string;
  ageEn: string;
  birthday: string;
  birthdayEn: string;
  bloodType: string;
  bloodTypeEn: string;
  height: string;
  heightEn: string;
  weight: string;
  weightEn: string;
  nationality: string;
  nationalityEn: string;
  occupation: string;
  occupationEn: string;
  description: string;
  descriptionEn: string;
  descriptionSource: string;
  descriptionSourceEn: string;
  favoriteCharactersCount: number;
};

export type PersonFieldsFragment = {
  id: string;
  annictId: number;
  name: string;
  nameEn: string;
  nameKana: string;
  nickname: string | null;
  nicknameEn: string;
  birthday: string | null;
  bloodType: string | null;
  height: string | null;
  genderText: string | null;
  castsCount: number;
  staffsCount: number;
  favoritePeopleCount: number;
  url: string | null;
  urlEn: string;
  wikipediaUrl: string | null;
  wikipediaUrlEn: string;
  twitterUsername: string | null;
  twitterUsernameEn: string;
};

export type OrganizationFieldsFragment = {
  id: string;
  annictId: number;
  name: string;
  nameEn: string;
  nameKana: string;
  url: string | null;
  urlEn: string;
  wikipediaUrl: string | null;
  wikipediaUrlEn: string;
  twitterUsername: string | null;
  twitterUsernameEn: string;
  staffsCount: number;
  favoriteOrganizationsCount: number;
};

export type RecordFieldsFragment = {
  id: string;
  annictId: number;
  comment: string | null;
  commentsCount: number;
  rating: number | null;
  ratingState: Types.RatingState | null;
  likesCount: number;
  facebookClickCount: number;
  twitterClickCount: number;
  modified: boolean;
  createdAt: string;
  updatedAt: string;
};

export type CreateRecordMutationVariables = Exact<{
  episodeId: string;
  comment?: string | null | undefined;
  ratingState?: Types.RatingState | null | undefined;
  shareTwitter?: boolean | null | undefined;
  shareFacebook?: boolean | null | undefined;
}>;

export type CreateRecordMutation = {
  createRecord: {
    record: {
      id: string;
      annictId: number;
      comment: string | null;
      commentsCount: number;
      rating: number | null;
      ratingState: Types.RatingState | null;
      likesCount: number;
      facebookClickCount: number;
      twitterClickCount: number;
      modified: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
  } | null;
};

export type UpdateRecordMutationVariables = Exact<{
  recordId: string;
  comment?: string | null | undefined;
  ratingState?: Types.RatingState | null | undefined;
}>;

export type UpdateRecordMutation = {
  updateRecord: {
    record: {
      id: string;
      annictId: number;
      comment: string | null;
      commentsCount: number;
      rating: number | null;
      ratingState: Types.RatingState | null;
      likesCount: number;
      facebookClickCount: number;
      twitterClickCount: number;
      modified: boolean;
      createdAt: string;
      updatedAt: string;
    } | null;
  } | null;
};

export type DeleteRecordMutationVariables = Exact<{
  recordId: string;
}>;

export type DeleteRecordMutation = { deleteRecord: { episode: { id: string } | null } | null };

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

export type SearchOrganizationsQueryVariables = Exact<{
  names?: Array<string> | string | null | undefined;
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.OrganizationOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type SearchOrganizationsQuery = {
  searchOrganizations: {
    edges: Array<{
      node: {
        id: string;
        annictId: number;
        name: string;
        nameEn: string;
        nameKana: string;
        url: string | null;
        urlEn: string;
        wikipediaUrl: string | null;
        wikipediaUrlEn: string;
        twitterUsername: string | null;
        twitterUsernameEn: string;
        staffsCount: number;
        favoriteOrganizationsCount: number;
      } | null;
    } | null> | null;
  } | null;
};

export type SearchPeopleQueryVariables = Exact<{
  names?: Array<string> | string | null | undefined;
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.PersonOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type SearchPeopleQuery = {
  searchPeople: {
    edges: Array<{
      node: {
        id: string;
        annictId: number;
        name: string;
        nameEn: string;
        nameKana: string;
        nickname: string | null;
        nicknameEn: string;
        birthday: string | null;
        bloodType: string | null;
        height: string | null;
        genderText: string | null;
        castsCount: number;
        staffsCount: number;
        favoritePeopleCount: number;
        url: string | null;
        urlEn: string;
        wikipediaUrl: string | null;
        wikipediaUrlEn: string;
        twitterUsername: string | null;
        twitterUsernameEn: string;
      } | null;
    } | null> | null;
  } | null;
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
