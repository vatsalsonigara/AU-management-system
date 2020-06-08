import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OppTableComponent } from './opp-table.component';

describe('OppTableComponent', () => {
  let component: OppTableComponent;
  let fixture: ComponentFixture<OppTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OppTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OppTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
