declare function afterEach(callback: () => void): void;
declare function it(description: string, spec: () => void): void;
declare function describe(description: string, spec: () => void): void;
declare var describe : {
  (description: string, spec: () => void): void;
  only(description: string, spec: () => void): void;
  skip(description: string, spec: () => void): void;
  timeout(ms: number): void;
}
