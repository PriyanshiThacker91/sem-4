import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { guards1Guard } from './guards-1.guard';

describe('guards1Guard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => guards1Guard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
