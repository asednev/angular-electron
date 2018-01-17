import { TickerItem } from "app/ticker/models";

export interface TickerMap {
  [symbol: string]: TickerItem;
}
