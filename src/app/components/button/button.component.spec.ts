import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ButtonComponent } from "./button.component";

describe("Button component", () => {
  let fixture: ComponentFixture<ButtonComponent>;
  let button: ButtonComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonComponent],
    });
    fixture = TestBed.createComponent(ButtonComponent);
    button = fixture.componentInstance;
  });
  it("should be created", () => {
    button = fixture.componentInstance;
    expect(button).toBeTruthy();
  });
});
