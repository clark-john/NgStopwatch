import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LapItemComponent } from "./lap-item.component";

describe("LapItemComponent", () => {
  let component: LapItemComponent;
  let fixture: ComponentFixture<LapItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LapItemComponent],
    });
    fixture = TestBed.createComponent(LapItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
