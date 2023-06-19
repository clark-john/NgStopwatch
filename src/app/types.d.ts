type IntervalId = ReturnType<typeof setInterval> | null;

type Lap = {
  readonly number: number;
  time: string;
};

interface StopwatchInterface {
  start(): void;
  stop(): void;
  reset(): void;
}
