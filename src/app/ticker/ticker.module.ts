import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { reducer } from "./store";
import { TickerComponent } from "./ticker/ticker.component";
import { TickerEffect } from "./store/effects";
import { TimerService } from "./services/timer.service";

const components = [TickerComponent];

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature("ticker", reducer),
    EffectsModule.forFeature([TickerEffect])
  ],
  declarations: [...components],
  providers: [TimerService],
  exports: [...components]
})
export class TickerModule {}
