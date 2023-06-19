import { Component, Input } from "@angular/core";

@Component({
  selector: "app-button",
  template: `
    <button (click)="(onClick || noop)()" [class.small]="small">
      {{ text }}
    </button>
  `,
  styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
  @Input() onClick!: () => void;
  @Input() text!: string;
  @Input() small!: boolean;
  noop() {
    return;
  }
}
