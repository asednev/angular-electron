import { Injectable } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { IntervalObservable } from "rxjs/Observable/IntervalObservable";
import { Subscribable } from "rxjs/Observable";
import { TickerState, TimerElapsed } from "app/ticker/store";
import { Store } from "@ngrx/store";

@Injectable()
export class TimerService {
  timerSubscription: Subscription;

  constructor(private store: Store<TickerState>) {}

  start(): Subscription {
    if (this.timerSubscription) {
      throw new Error("timer subscription already exists");
    }

    this.timerSubscription = IntervalObservable.create(1000).subscribe(() =>
      this.elapsed()
    );

    return this.timerSubscription;
  }

  stop(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerSubscription = null;
    }
  }

  private elapsed() {
    this.store.dispatch(new TimerElapsed());
  }
}
