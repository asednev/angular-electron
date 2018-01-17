import * as fromTickers from "../actions";
import { TickerItem } from "../../models/ticker-item.model";
import { TickerMap } from "app/ticker/models/ticker-map.model";
import * as _ from "lodash";

export interface TickerState {
  tickers: TickerMap;
}

export const initialState: TickerState = {
  tickers: {}
};

export function reducer(
  state = initialState,
  action: fromTickers.TickerAction
): TickerState {
  switch (action.type) {
    case fromTickers.UPDATE_TICKER:
      let newState = _.cloneDeep(state);
      newState.tickers[action.payload.symbol] = _.cloneDeep(action.payload);
      return newState;
  }

  return state;
}
