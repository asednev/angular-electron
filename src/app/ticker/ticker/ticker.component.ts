import { Component, OnInit } from "@angular/core";
import { IntervalObservable } from "rxjs/Observable/IntervalObservable";
import { Store, createSelector } from "@ngrx/store";
import {
  TickerState,
  UpdateTicker,
  tickersListSelector
} from "app/ticker/store";
import { Poloniex, TickerItem } from "app/ticker/models";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import * as _ from "lodash";

@Component({
  selector: "app-ticker",
  templateUrl: "./ticker.component.html",
  styleUrls: ["./ticker.component.scss"]
})
export class TickerComponent implements OnInit {
  tickers$: Observable<TickerItem[]>;

  constructor(
    private store: Store<TickerState>,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.tickers$ = this.store.select(tickersListSelector);

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
