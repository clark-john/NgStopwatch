import { TestBed } from "@angular/core/testing";

import { LapsToCSVService } from "./lapstocsv.service";

describe("LapsToCSVService", () => {
  let service: LapsToCSVService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LapsToCSVService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
