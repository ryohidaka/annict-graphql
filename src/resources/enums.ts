import type { OrderDirection, WorkOrderField } from "@/generated/types";

export const ORDER_DIRECTION = {
  Asc: "ASC",
  Desc: "DESC",
} as const satisfies Record<string, OrderDirection>;

export const WORK_ORDER_FIELD = {
  CreatedAt: "CREATED_AT",
  Season: "SEASON",
  WatchersCount: "WATCHERS_COUNT",
} as const satisfies Record<string, WorkOrderField>;
