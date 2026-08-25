import type {
  CharacterOrderField,
  EpisodeOrderField,
  OrderDirection,
  PersonOrderField,
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
