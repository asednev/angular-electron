import { TickerItem } from "app/ticker/models";

export type TickerMap = {
  [symbol: string]: TickerItem;
};
