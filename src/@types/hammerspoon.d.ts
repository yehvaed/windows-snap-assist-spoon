declare class Geometry {
  x: number;
  y: number;
  w: number;
  h: number;
}

declare class GeometryNamespace {
  rect(this: void): Geometry;
}

declare class Screen {
  fullFrame(): Geometry;
}

declare class ScreenNamespace {
  mainScreen(this: void): Screen;
}

interface Point {
  x: number;
  y: number;
}

declare class MouseNamespace {
  getRelativePosition(this: void): Point;
  getButtons(): boolean[];
}

declare class Timer {
  start(): Timer;
  stop(): Timer;
}

declare class TimerNamespace {
  doEvery(this: void, interval: number, fn: () => void): Timer;
}

declare class Logger {
  i(...messages: any[]): void;
}

declare class LoggerNamespace {
  new(this: void, loggerName: string): Logger;
}

declare interface Hammerspoon {
  logger: LoggerNamespace;
  timer: TimerNamespace;
  mouse: MouseNamespace;
  screen: ScreenNamespace;
  geometry: GeometryNamespace;
}

declare var hs: Hammerspoon;
