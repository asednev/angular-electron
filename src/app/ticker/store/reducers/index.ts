import { createFeatureSelector } from "@ngrx/store";
import { TickerState } from ".";

export * from "./ticker.reducer";

export const tickerFeatureSelector = createFeatureSelector<TickerState>("ticker");
