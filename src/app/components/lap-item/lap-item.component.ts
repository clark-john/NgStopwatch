import { Component, Input } from "@angular/core";

@Component({
  selector: "lap-item",
  templateUrl: "./lap-item.component.html",
  styleUrls: ["./lap-item.component.scss"],
})
export class LapItemComponent {
  @Input() lapNumber!: number;
  @Input() time!: string;
}
