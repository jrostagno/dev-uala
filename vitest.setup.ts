// vitest.setup.ts

import "@testing-library/jest-dom/vitest";

//  Mock de ResizeObserver
global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} as any;
