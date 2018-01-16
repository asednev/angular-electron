import * as fromTickers from "../actions";
import { TickerItem } from "../../models/ticker-item.model";

export interface TickerState {
  [symbol: string]: TickerItem;
}

export const initialState: TickerState = {};

export function reducer(
  state = initialState,
  action: fromTickers.TickerAction
): TickerState {
  switch (action.type) {
    case fromTickers.UPDATE_TICKER:
      let newState = { ...state };
      newState[action.payload.symbol] = action.payload;

      console.log("newState", newState);
      return newState;
  }

  return state;
}
