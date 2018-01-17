import { createSelector, createFeatureSelector } from "@ngrx/store";
import { TickerState } from ".";
import { TickerMap } from "app/ticker/models";

export * from "./ticker.reducer";

export const tickerFeatureSelector = createFeatureSelector<TickerState>(
  "ticker"
);

export const tickersSelector = createSelector(
  tickerFeatureSelector,
  (state: TickerState) => state.tickers
);

export const tickersListSelector = createSelector(
  tickersSelector,
  (map: TickerMap) => Object.values(map)
);
