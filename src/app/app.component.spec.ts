import { AppComponent } from './app.component';

/**
 * Comprehensive Jest tests for AppComponent
 * - Follows direct-instantiation pattern from established analysis
 * - Uses jest spies/mocks (no TestBed)
 * - Exercises all lines in the component for full coverage
 */

describe('AppComponent (direct instantiation)', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('should create the component instance', () => {
    expect(component).toBeDefined();
  });

  it("should initialize title to 'Angular Demo App'", () => {
    expect(component.title).toBe('Angular Demo App');
  });

  it('should return the Angular version string from getAngularVersion', () => {
    const v = component.getAngularVersion();
    expect(v).toBe('16.x');
  });

  it('should execute someMethod and call console.log with expected message', () => {
    const spy = jest.spyOn(console, 'log').mockImplementation(() => {});
    // someMethod uses an old-style var internally; calling it executes that line too
    component.someMethod();
    expect(spy).toHaveBeenCalledWith('Method called');
  });

  it('should allow calling someMethod multiple times without throwing', () => {
    expect(() => {
      component.someMethod();
      component.someMethod();
    }).not.toThrow();
  });

  it('should expose the private unusedProperty via whitebox access for coverage', () => {
    // established pattern: whitebox access allowed for small components to reach 100% coverage
    const anyComp = component as any;
    expect(anyComp.unusedProperty).toBe('not used anywhere');
  });

  it('should preserve expected instance keys (structural contract)', () => {
    const keys = Object.getOwnPropertyNames(component).sort();
    expect(keys).toContain('title');
    // private properties are present on instance as TS emits them
    expect((component as any).unusedProperty).toBeDefined();
  });
});

