import { Action } from "@ngrx/store";
import { TickerItem } from "../../models/ticker-item.model";

export const UPDATE_TICKER = "[Ticker] Update Ticker";

export class UpdateTicker implements Action {
  readonly type = UPDATE_TICKER;

  constructor(public payload: TickerItem) {}
}

export type TickerAction = UpdateTicker;
