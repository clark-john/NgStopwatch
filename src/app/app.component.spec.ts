import { TestBed } from "@angular/core/testing";
import { AppComponent } from "./app.component";
import { components } from "./app.module";

describe("AppComponent", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      declarations: components,
    })
  );

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'NgStopwatch'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual("NgStopwatch");
  });
});
