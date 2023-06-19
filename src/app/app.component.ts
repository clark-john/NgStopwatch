import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "NgStopwatch";
  downloadLaps() {
    window.dispatchEvent(new Event("downloadLaps"));
  }
}
