import type {
  CharacterOrderField,
  EpisodeOrderField,
  OrderDirection,
  OrganizationOrderField,
  PersonOrderField,
  RatingState,
  StatusState,
  WorkOrderField,
} from "@/generated/types";

export const ORDER_DIRECTION = {
  Asc: "ASC",
  Desc: "DESC",
} as const satisfies Record<string, OrderDirection>;

export const WORK_ORDER_FIELD = {
  CreatedAt: "CREATED_AT",
  Season: "SEASON",
  WatchersCount: "WATCHERS_COUNT",
} as const satisfies Record<string, WorkOrderField>;

export const EPISODE_ORDER_FIELD = {
  CreatedAt: "CREATED_AT",
  SortNumber: "SORT_NUMBER",
} as const satisfies Record<string, EpisodeOrderField>;

export const CHARACTER_ORDER_FIELD = {
  CreatedAt: "CREATED_AT",
  FavoriteCharactersCount: "FAVORITE_CHARACTERS_COUNT",
} as const satisfies Record<string, CharacterOrderField>;

export const PERSON_ORDER_FIELD = {
  CreatedAt: "CREATED_AT",
  FavoritePeopleCount: "FAVORITE_PEOPLE_COUNT",
} as const satisfies Record<string, PersonOrderField>;

export const ORGANIZATION_ORDER_FIELD = {
  CreatedAt: "CREATED_AT",
  FavoriteOrganizationsCount: "FAVORITE_ORGANIZATIONS_COUNT",
} as const satisfies Record<string, OrganizationOrderField>;

export const RATING_STATE = {
  Great: "GREAT",
  Good: "GOOD",
  Average: "AVERAGE",
  Bad: "BAD",
} as const satisfies Record<string, RatingState>;

export const STATUS_STATE = {
  WannaWatch: "WANNA_WATCH",
  Watching: "WATCHING",
  Watched: "WATCHED",
  OnHold: "ON_HOLD",
  StopWatching: "STOP_WATCHING",
  NoState: "NO_STATE",
} as const satisfies Record<string, StatusState>;
