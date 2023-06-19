import { Component, HostListener, OnInit } from "@angular/core";

@Component({
  selector: "app-stopwatch",
  templateUrl: "./stopwatch.component.html",
  styleUrls: ["./stopwatch.component.scss"],
})
export class StopwatchComponent implements OnInit, StopwatchInterface {
  lapNumber = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  time!: string;
  isStart = false;
  id!: IntervalId;

  @HostListener("window:keypress", ["$event.key"])
  onKeyPress(key: string) {
    switch (key) {
      case " ":
        if (this.isStart) {
          this.stop();
        } else {
          this.start();
        }
        break;
      case "l":
        this.lap();
        break;
      case "R":
        this.reset();
        break;
    }
  }

  start = (): void => {
    if (!this.id && !this.isStart) {
      const addMs = () => {
        this.milliseconds++;
        this.updateTime();
      };
      this.isStart = true;
      addMs();
      this.id = setInterval(() => {
        addMs();
      }, 10);
    }
  };
  lap = (): void => {
    if (this.isStart) {
      this.lapNumber++;
      window.dispatchEvent(
        new CustomEvent("lap", {
          detail: {
            number: this.lapNumber,
            time: this.time,
          },
        })
      );
    }
  };
  stop = (): void => {
    if (this.id && this.isStart) {
      clearInterval(this.id);
      this.id = null;
      this.isStart = false;
    }
  };
  reset = (): void => {
    if (!this.isStart) {
      this.milliseconds = 0;
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
      this.updateTime();
      this.lapNumber = 0;
      window.dispatchEvent(new Event("clearLaps"));
    }
  };
  ngOnInit(): void {
    this.time = this.constructTime();
  }

  doubleZeroes(n: number): string {
    return (n < 10 ? "0" : "") + n;
  }
  constructTime(): string {
    const numbers: number[] = [
      this.hours,
      this.minutes,
      this.seconds,
      this.milliseconds,
    ];
    let str = "";
    numbers.forEach((v: number, k: number) => {
      str = str.concat(
        this.doubleZeroes(v),
        (() => {
          if (k === 2) {
            return ".";
          } else if (k === 3) {
            return "";
          } else {
            return ":";
          }
        })()
      );
    });
    return str;
  }
  updateTime(): void {
    if (this.milliseconds === 100) {
      this.seconds++;
      this.milliseconds = 0;
    }
    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
    if (this.hours === 24) {
      this.stop();
    }
    this.time = this.constructTime();
  }
}
