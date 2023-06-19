import { Injectable } from "@angular/core";
import dayjs from "dayjs";

@Injectable({
  providedIn: "root",
})
export class LapsToCSVService {
  download(laps: Lap[]) {
    let csvString = "";
    for (const { number, time } of laps) {
      csvString += `${number}, ${time}\n`;
    }
    const blob = new Blob([csvString], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `laps-${dayjs().format("YYYY-MM-DD-HH-mm-ss")}.csv`;
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }
}
