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

export type LibraryEntryOrder = {
  direction: OrderDirection;
  field: LibraryEntryOrderField;
};

export type LibraryEntryOrderField =
  /** 最後に記録またはスキップした日時 */
  "LAST_TRACKED_AT";

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

export type ProgramOrder = {
  direction: OrderDirection;
  field: ProgramOrderField;
};

export type ProgramOrderField = "STARTED_AT";

export type ProgramState = "HIDDEN" | "PUBLISHED";

export type RatingState = "AVERAGE" | "BAD" | "GOOD" | "GREAT";

export type RecordOrder = {
  direction: OrderDirection;
  field: RecordOrderField;
};

export type RecordOrderField = "CREATED_AT" | "LIKES_COUNT";

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

export type LibraryEntryFieldsFragment = {
  id: string;
  note: string;
  status: { state: Types.StatusState } | null;
  user: { id: string; username: string };
  work: { id: string; annictId: number; title: string };
  nextEpisode: {
    id: string;
    annictId: number;
    title: string | null;
    number: number | null;
    numberText: string | null;
  } | null;
  nextProgram: { id: string } | null;
};

export type ProgramFieldsFragment = {
  id: string;
  annictId: number;
  startedAt: string;
  state: Types.ProgramState;
  rebroadcast: boolean;
  episode: {
    id: string;
    annictId: number;
    title: string | null;
    number: number | null;
    numberText: string | null;
  };
  work: { id: string; annictId: number; title: string };
  channel: { id: string; annictId: number; name: string };
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

export type ReviewFieldsFragment = {
  id: string;
  annictId: number;
  title: string | null;
  body: string;
  ratingOverallState: Types.RatingState | null;
  ratingAnimationState: Types.RatingState | null;
  ratingMusicState: Types.RatingState | null;
  ratingStoryState: Types.RatingState | null;
  ratingCharacterState: Types.RatingState | null;
  likesCount: number;
  impressionsCount: number;
  modifiedAt: string | null;
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

export type CreateReviewMutationVariables = Exact<{
  workId: string;
  title?: string | null | undefined;
  body: string;
  ratingOverallState?: Types.RatingState | null | undefined;
  ratingAnimationState?: Types.RatingState | null | undefined;
  ratingMusicState?: Types.RatingState | null | undefined;
  ratingStoryState?: Types.RatingState | null | undefined;
  ratingCharacterState?: Types.RatingState | null | undefined;
  shareTwitter?: boolean | null | undefined;
  shareFacebook?: boolean | null | undefined;
}>;

export type CreateReviewMutation = {
  createReview: {
    review: {
      id: string;
      annictId: number;
      title: string | null;
      body: string;
      ratingOverallState: Types.RatingState | null;
      ratingAnimationState: Types.RatingState | null;
      ratingMusicState: Types.RatingState | null;
      ratingStoryState: Types.RatingState | null;
      ratingCharacterState: Types.RatingState | null;
      likesCount: number;
      impressionsCount: number;
      modifiedAt: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
  } | null;
};

export type UpdateReviewMutationVariables = Exact<{
  reviewId: string;
  title?: string | null | undefined;
  body: string;
  ratingOverallState: Types.RatingState;
  ratingAnimationState: Types.RatingState;
  ratingMusicState: Types.RatingState;
  ratingStoryState: Types.RatingState;
  ratingCharacterState: Types.RatingState;
  shareTwitter?: boolean | null | undefined;
  shareFacebook?: boolean | null | undefined;
}>;

export type UpdateReviewMutation = {
  updateReview: {
    review: {
      id: string;
      annictId: number;
      title: string | null;
      body: string;
      ratingOverallState: Types.RatingState | null;
      ratingAnimationState: Types.RatingState | null;
      ratingMusicState: Types.RatingState | null;
      ratingStoryState: Types.RatingState | null;
      ratingCharacterState: Types.RatingState | null;
      likesCount: number;
      impressionsCount: number;
      modifiedAt: string | null;
      createdAt: string;
      updatedAt: string;
    } | null;
  } | null;
};

export type DeleteReviewMutationVariables = Exact<{
  reviewId: string;
}>;

export type DeleteReviewMutation = { deleteReview: { work: { id: string } | null } | null };

export type UpdateStatusMutationVariables = Exact<{
  workId: string;
  state: Types.StatusState;
}>;

export type UpdateStatusMutation = {
  updateStatus: {
    work: {
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
  } | null;
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

export type UserLibraryQueryVariables = Exact<{
  username: string;
  states?: Array<Types.StatusState> | Types.StatusState | null | undefined;
  seasons?: Array<string> | string | null | undefined;
  seasonFrom?: string | null | undefined;
  seasonUntil?: string | null | undefined;
  orderBy?: Types.LibraryEntryOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type UserLibraryQuery = {
  user: {
    libraryEntries: {
      edges: Array<{
        node: {
          id: string;
          note: string;
          status: { state: Types.StatusState } | null;
          user: { id: string; username: string };
          work: { id: string; annictId: number; title: string };
          nextEpisode: {
            id: string;
            annictId: number;
            title: string | null;
            number: number | null;
            numberText: string | null;
          } | null;
          nextProgram: { id: string } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type UserRecordsQueryVariables = Exact<{
  username: string;
  hasComment?: boolean | null | undefined;
  orderBy?: Types.RecordOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type UserRecordsQuery = {
  user: {
    records: {
      edges: Array<{
        node: {
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
      } | null> | null;
    } | null;
  } | null;
};

export type UserWorksQueryVariables = Exact<{
  username: string;
  state?: Types.StatusState | null | undefined;
  titles?: Array<string> | string | null | undefined;
  seasons?: Array<string> | string | null | undefined;
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.WorkOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type UserWorksQuery = {
  user: {
    works: {
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
  } | null;
};

export type UserProgramsQueryVariables = Exact<{
  username: string;
  unwatched?: boolean | null | undefined;
  orderBy?: Types.ProgramOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type UserProgramsQuery = {
  user: {
    programs: {
      edges: Array<{
        node: {
          id: string;
          annictId: number;
          startedAt: string;
          state: Types.ProgramState;
          rebroadcast: boolean;
          episode: {
            id: string;
            annictId: number;
            title: string | null;
            number: number | null;
            numberText: string | null;
          };
          work: { id: string; annictId: number; title: string };
          channel: { id: string; annictId: number; name: string };
        } | null;
      } | null> | null;
    } | null;
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

export type ViewerLibraryQueryVariables = Exact<{
  states?: Array<Types.StatusState> | Types.StatusState | null | undefined;
  seasons?: Array<string> | string | null | undefined;
  seasonFrom?: string | null | undefined;
  seasonUntil?: string | null | undefined;
  orderBy?: Types.LibraryEntryOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type ViewerLibraryQuery = {
  viewer: {
    libraryEntries: {
      edges: Array<{
        node: {
          id: string;
          note: string;
          status: { state: Types.StatusState } | null;
          user: { id: string; username: string };
          work: { id: string; annictId: number; title: string };
          nextEpisode: {
            id: string;
            annictId: number;
            title: string | null;
            number: number | null;
            numberText: string | null;
          } | null;
          nextProgram: { id: string } | null;
        } | null;
      } | null> | null;
    } | null;
  } | null;
};

export type ViewerRecordsQueryVariables = Exact<{
  hasComment?: boolean | null | undefined;
  orderBy?: Types.RecordOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type ViewerRecordsQuery = {
  viewer: {
    records: {
      edges: Array<{
        node: {
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
      } | null> | null;
    } | null;
  } | null;
};

export type ViewerWorksQueryVariables = Exact<{
  state?: Types.StatusState | null | undefined;
  titles?: Array<string> | string | null | undefined;
  seasons?: Array<string> | string | null | undefined;
  annictIds?: Array<number> | number | null | undefined;
  orderBy?: Types.WorkOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type ViewerWorksQuery = {
  viewer: {
    works: {
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
  } | null;
};

export type ViewerProgramsQueryVariables = Exact<{
  unwatched?: boolean | null | undefined;
  orderBy?: Types.ProgramOrder | null | undefined;
  after?: string | null | undefined;
  before?: string | null | undefined;
  first?: number | null | undefined;
  last?: number | null | undefined;
}>;

export type ViewerProgramsQuery = {
  viewer: {
    programs: {
      edges: Array<{
        node: {
          id: string;
          annictId: number;
          startedAt: string;
          state: Types.ProgramState;
          rebroadcast: boolean;
          episode: {
            id: string;
            annictId: number;
            title: string | null;
            number: number | null;
            numberText: string | null;
          };
          work: { id: string; annictId: number; title: string };
          channel: { id: string; annictId: number; name: string };
        } | null;
      } | null> | null;
    } | null;
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
