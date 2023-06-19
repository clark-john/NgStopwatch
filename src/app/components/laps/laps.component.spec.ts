import {
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect,
} from "@angular/core/testing";

import { LapsComponent } from "./laps.component";
import { StopwatchComponent } from "../stopwatch/stopwatch.component";
import { components } from "src/app/app.module";

describe("LapsComponent", () => {
  let component: LapsComponent;
  let swComponent: StopwatchComponent;
  let fixture: ComponentFixture<LapsComponent>;
  let swFixture: ComponentFixture<StopwatchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: components,
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    });
    jasmine.clock().install();
    fixture = TestBed.createComponent(LapsComponent);
    component = fixture.componentInstance;
    swFixture = TestBed.createComponent(StopwatchComponent);
    swComponent = swFixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should lap correctly", () => {
    swComponent.start();
    let count = 0;
    const id = setInterval(() => {
      swComponent.lap();
      count++;
      if (count === 3) {
        clearInterval(id);
      }
    }, 500);
    jasmine.clock().tick(1600);
    const booleanArr: boolean[] = [];
    const expectedTimes = ["00:00:00.50", "00:00:01.00", "00:00:01.50"];
    component.laps.forEach(({ time }, k) => {
      booleanArr.push(time === expectedTimes[k]);
    });
    expect(booleanArr.every(x => x)).toBeTrue();
  });

  it("should clear laps", () => {
    swComponent.start();
    setTimeout(() => {
      swComponent.lap();
      swComponent.lap();
      swComponent.lap();
      swComponent.stop();
    }, 500);
    jasmine.clock().tick(600);
    window.dispatchEvent(new Event("clearLaps"));
    expect(component.laps.length).toEqual(0);
  });

  afterEach(() => {
    fixture.destroy();
    swFixture.destroy();
    jasmine.clock().uninstall();
  });
});
