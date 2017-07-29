import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPpanelComponent } from './admin-ppanel.component';

describe('AdminPpanelComponent', () => {
  let component: AdminPpanelComponent;
  let fixture: ComponentFixture<AdminPpanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminPpanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPpanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
