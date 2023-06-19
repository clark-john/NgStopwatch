import { Component, ElementRef, HostListener } from "@angular/core";
import { LapsToCSVService } from "src/app/lapstocsv.service";

@Component({
  selector: "stopwatch-laps",
  templateUrl: "./laps.component.html",
  styleUrls: ["./laps.component.scss"],
})
export class LapsComponent {
  laps: Lap[] = [];
  constructor(
    private lapsDownloader: LapsToCSVService,
    private elementRef: ElementRef
  ) {}

  @HostListener("window:lap", ["$event.detail"])
  onLap(lap: Lap) {
    this.laps.push(lap);
    const el = (this.elementRef.nativeElement as HTMLDivElement).querySelector(
      ".laps-container"
    );
    setTimeout(() => {
      el?.scroll({ top: 9 ** 20, behavior: "smooth" });
    }, 2);
  }

  @HostListener("window:clearLaps")
  onClearLaps() {
    this.laps = [];
  }

  @HostListener("window:downloadLaps")
  onDownloadLaps() {
    if (!this.laps.length) {
      alert("Laps empty");
    } else {
      this.lapsDownloader.download(this.laps);
    }
  }
}
