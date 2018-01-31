import { Action } from "@ngrx/store";
import { TickerItem } from "../../models/ticker-item.model";

export enum TickerActionsTypes {
  UPDATE_TICKER = "[Ticker] Update Ticker",
  TIMER_START = "[Ticker] Timer Start",
  TIMER_ELAPSED = "[Ticker] Timer Elapsed"
}

export class UpdateTicker implements Action {
  readonly type = TickerActionsTypes.UPDATE_TICKER;

  constructor(public payload: TickerItem) {}
}

export class TimerStart implements Action {
  readonly type = TickerActionsTypes.TIMER_START;
}

export class TimerElapsed implements Action {
  readonly type = TickerActionsTypes.TIMER_ELAPSED;
}

export type TickerActions = UpdateTicker | TimerStart | TimerElapsed;
