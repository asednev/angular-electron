import { Component, OnInit } from "@angular/core";
import { IntervalObservable } from "rxjs/Observable/IntervalObservable";
import { Store, createSelector } from "@ngrx/store";
import {
  TickerState,
  UpdateTicker,
  tickerFeatureSelector
} from "app/ticker/store";
import { Poloniex, TickerItem } from "app/ticker/models";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TickerMap } from "app/ticker/models/ticker-map.model";

@Component({
  selector: "app-ticker",
  templateUrl: "./ticker.component.html",
  styleUrls: ["./ticker.component.scss"]
})
export class TickerComponent implements OnInit {
  constructor(
    private store: Store<TickerState>,
    private httpClient: HttpClient
  ) {}

  tickers$: Observable<TickerMap>;
  tickerKeys: string[];

  ngOnInit() {
    console.log("ngOnInit, store=", this.store);

    this.store.subscribe(x => {
      console.log("store update", x);
    });

    this.tickers$ = this.store.select(
      createSelector(
        tickerFeatureSelector,
        (state: TickerState) => state.tickers
      )
    );
    this.tickers$.subscribe(value => {
      console.log("!!", value);
      if (!value) {
        return;
      }
      this.tickerKeys = Object.keys(value);
    });

    IntervalObservable.create(5000).subscribe(() => {
      console.log("interval fired");

      this.store.dispatch(
        new UpdateTicker({
          symbol: "BTC",
          last: 100,
          percentChange: 0.2,
          pairMapping: "AA-BTC"
        })
      );

      this.store.dispatch(
        new UpdateTicker({
          symbol: "ETH",
          last: 5,
          percentChange: 0.25,
          pairMapping: "AA-ETH"
        })
      );
    });
  }
}
