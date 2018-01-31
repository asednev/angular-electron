import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/interval";
import { IntervalObservable } from "rxjs/Observable/IntervalObservable";
import { Store, createSelector } from "@ngrx/store";
import {
  TickerState,
  UpdateTicker,
  tickersListSelector,
  TimerStart
} from "app/ticker/store";
import { Poloniex, TickerItem } from "app/ticker/models";
import { HttpClient } from "@angular/common/http";
import * as _ from "lodash";
import { TimerService } from "app/ticker/services/timer.service";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
  selector: "app-ticker",
  templateUrl: "./ticker.component.html",
  styleUrls: ["./ticker.component.scss"]
})
export class TickerComponent implements OnInit, OnDestroy {
  tickers$: Observable<TickerItem[]>;

  constructor(
    private store: Store<TickerState>,
    private httpClient: HttpClient,
    private timerService: TimerService
  ) {}

  ngOnInit() {
    this.store.subscribe(console.log);

    this.timerService.start();
    // this.store.dispatch(new TimerStart());

    this.tickers$ = this.store.select(tickersListSelector);

    IntervalObservable.create(5000).subscribe(() => {
      console.log("interval fired");
    });
  }

  ngOnDestroy() {
    this.timerService.stop();
  }
}
