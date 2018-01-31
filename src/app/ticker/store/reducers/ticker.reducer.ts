import * as fromTickers from "../actions";
import { TickerMap, TickerItem } from "app/ticker/models";
import * as _ from "lodash";

export interface TickerState {
  tickers: TickerMap;
}

export const initialState: TickerState = {
  tickers: {}
};

export function reducer(
  state = initialState,
  action: fromTickers.UpdateTicker
): TickerState {
  console.log("ticker reducer", action.type);

  switch (action.type) {
    case fromTickers.TickerActionsTypes.UPDATE_TICKER:
      console.log("ticker.reducer :::", "UpdateTicket", action.payload);

      const newState = _.cloneDeep(state);
      newState.tickers[action.payload.symbol] = _.cloneDeep(action.payload);
      return newState;
  }

  return state;
}
