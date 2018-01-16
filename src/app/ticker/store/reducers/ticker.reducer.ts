import * as fromTickers from "../actions";
import { TickerItem } from "../../models/ticker-item.model";
import { TickerMap } from "app/ticker/models/ticker-map.model";

export interface TickerState {
  tickers: TickerMap;
}

export const initialState: TickerState = {
  tickers: {
    ABC: {
      symbol: "ABC",
      last: 999,
      percentChange: 0,
      pairMapping: ""
    }
  }
};

export function reducer(
  state = initialState,
  action: fromTickers.TickerAction
): TickerState {
  console.log("reducer, state=", state);

  switch (action.type) {
    case fromTickers.UPDATE_TICKER:
      const newTicker = {};
      newTicker[action.payload.symbol] = action.payload;

      let newTickers = { ...state.tickers, ...newTicker };

      state.tickers = newTickers;

      console.log("newState", state);
      return state;
  }

  return state;
}
