import { Injectable } from "@angular/core";
import { Effect, Actions } from "@ngrx/effects";
import { TickerActionsTypes, TimerElapsed } from "app/ticker/store/actions";
import { Observable } from "rxjs/Observable";
import { map, concat } from "rxjs/operators";
import "rxjs/add/operator/do";
import "rxjs/add/operator/switchMap";
import { UpdateTicker } from "app/ticker/store";

@Injectable()
export class TickerEffect {
  // @Effect()
  // timerStart$ = this.actions$.ofType(TickerActionsTypes.TIMER_START).pipe(
  //   map(() => {
  //     console.log("timer start");
  //   }),
  //   switchMap(() =>
  //     Observable.interval(1000).pipe(
  //       switchMap(() => Observable.of(new TimerElapsed()))
  //     )
  //   )
  // );

  @Effect()
  timerElapsed$ = this.actions$
    .ofType(TickerActionsTypes.TIMER_ELAPSED)
    .do(() => {
      console.log("ticker.effect :::", "TIMER_ELAPSED");
    });
  /*
    .switchMap(() => {
      return new UpdateTicker({
        symbol: "BTC",
        last: 100,
        percentChange: 0.2,
        pairMapping: "AA-BTC"
      });
    });
      return concat([
        new UpdateTicker({
          symbol: "ETH",
          last: 5,
          percentChange: 0.25,
          pairMapping: "AA-ETH"
        })
      ]);
      */

  constructor(private actions$: Actions) {}
}
