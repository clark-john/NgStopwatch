import { ComponentFixture, TestBed } from "@angular/core/testing";
import { StopwatchComponent } from "./stopwatch.component";
import { components } from "src/app/app.module";

describe("StopwatchComponent", () => {
  let fixture: ComponentFixture<StopwatchComponent>;
  let sw: StopwatchComponent;

  beforeEach(() => {
    jasmine.clock().install();
    TestBed.configureTestingModule({
      declarations: components,
    });
    fixture = TestBed.createComponent(StopwatchComponent);
    sw = fixture.componentInstance;
  });

  it("should create", () => {
    expect(sw).toBeTruthy();
  });

  it("should count to 1 second", () => {
    sw.start();
    setTimeout(() => {
      sw.stop();
    }, 1000);
    jasmine.clock().tick(1100);
    expect(sw.seconds).toEqual(1);
  });

  it("should count to 2 seconds", () => {
    sw.start();
    setTimeout(() => {
      sw.stop();
    }, 2000);
    jasmine.clock().tick(2100);
    expect(sw.seconds).toEqual(2);
  });

  it("should count to 1 minute", () => {
    sw.seconds = 59;
    sw.start();
    setTimeout(() => {
      sw.stop();
    }, 1000);
    jasmine.clock().tick(1100);
    expect(sw.minutes).toEqual(1);
  });

  it("should count to 1 hour", () => {
    sw.seconds = 59;
    sw.minutes = 59;
    sw.start();
    setTimeout(() => {
      sw.stop();
    }, 1000);
    jasmine.clock().tick(1100);
    expect(sw.hours).toEqual(1);
  });

  it("should stop after 24 hours", () => {
    sw.seconds = 59;
    sw.minutes = 59;
    sw.hours = 23;
    sw.start();
    setTimeout(() => {}, 1000);
    jasmine.clock().tick(1100);
    expect(sw.isStart).toBeFalse();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  });
});
