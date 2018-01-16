export type Poloniex = {
  [pair: string]: PoloniexTicker;
};

export type PoloniexTicker = {
  id: number;
  last: number;
  lowestAsk: number;
  highestBid: number;
  percentChange: number;
  baseVolume: number;
  quoteVolume: number;
  isFrozen: boolean;
  high24hr: number;
  low24hr: number;
};
