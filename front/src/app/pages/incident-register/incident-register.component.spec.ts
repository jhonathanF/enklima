import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentRegisterComponent } from './incident-register.component';

describe('IncidentRegisterComponent', () => {
  let component: IncidentRegisterComponent;
  let fixture: ComponentFixture<IncidentRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
