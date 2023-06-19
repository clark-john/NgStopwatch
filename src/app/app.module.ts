import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { StopwatchComponent } from "./components/stopwatch/stopwatch.component";
import { LapsComponent } from "./components/laps/laps.component";
import { ButtonComponent } from "./components/button/button.component";
import { LapItemComponent } from "./components/lap-item/lap-item.component";

export const components = [
  AppComponent,
  StopwatchComponent,
  LapsComponent,
  ButtonComponent,
  LapItemComponent,
];

@NgModule({
  declarations: components,
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
