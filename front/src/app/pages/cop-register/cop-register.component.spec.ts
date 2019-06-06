import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CopRegisterComponent } from './cop-register.component';

describe('CopRegisterComponent', () => {
  let component: CopRegisterComponent;
  let fixture: ComponentFixture<CopRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CopRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CopRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
