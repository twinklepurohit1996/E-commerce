import { TestBed } from '@angular/core/testing';

import { AdminPanelAuthService } from './admin-panel-auth.service';

describe('AdminPanelAuthService', () => {
  let service: AdminPanelAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPanelAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
