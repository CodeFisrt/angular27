import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { loadResolver } from './load.resolver';

describe('loadResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => loadResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
