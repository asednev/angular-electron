import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";

import { reducer } from "./store";
import { TickerComponent } from "./ticker/ticker.component";

const components = [TickerComponent];

@NgModule({
  imports: [CommonModule, StoreModule.forFeature("ticker", reducer)],
  declarations: [...components],
  exports: [...components]
})
export class TickerModule {}
