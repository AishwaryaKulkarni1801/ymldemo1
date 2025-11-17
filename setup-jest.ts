// setup-jest.ts
import 'jest-preset-angular/setup-jest';

// Optional global mocks for browser APIs used in Angular tests
Object.defineProperty(window, 'CSS', { value: null });
(window as any).getComputedStyle = () => {
  return {
    getPropertyValue: () => ''
  } as any;
};
