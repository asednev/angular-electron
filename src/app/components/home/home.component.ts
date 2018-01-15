import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { IntervalObservable } from 'rxjs/Observable/IntervalObservable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  symbols: string[] = [];
  details: { [symbol: string]: TickerItem} = {};

  ngOnInit() {

    this._createSymbol('BTC', 'USDT_BTC');
    this._createSymbol('ETH', 'USDT_ETH');    

    this.fetch();

    IntervalObservable.create(10000).subscribe(() => {

      this.fetch();

    });

  }

  fetch() {
    this.httpClient.get('https://poloniex.com/public?command=returnTicker').
    subscribe((result: Poloniex) => {

      Object.keys(this.details).forEach(key => {

        const val = this.details[key];
        if(val.pairMapping && result[val.pairMapping]) {

          const tickerItem = result[val.pairMapping];
          const storeItem = this.details[key];

          storeItem.last = tickerItem.last;
          storeItem.percentChange = tickerItem.percentChange;
        }

      });

    });
  }

  private _createSymbol = (symbol: string, pairMapping: string) => {
    this.symbols.push(symbol);
    this.details[symbol] = { symbol: symbol, last: -1, percentChange: 0, pairMapping};  
  };

}

type TickerItem = {
  symbol: string,
  last: number,
  percentChange: number,
  pairMapping: string
}

type Poloniex = {
  [pair: string]: PoloniexTicker;
}

type PoloniexTicker = {
  id: number,
  last: number
  lowestAsk: number,
  highestBid: number,
  percentChange: number,
  baseVolume: number
  quoteVolume: number
  isFrozen: boolean
  high24hr: number
  low24hr: number
};