import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOppDialogComponent } from './create-opp-dialog.component';

describe('CreateOppDialogComponent', () => {
  let component: CreateOppDialogComponent;
  let fixture: ComponentFixture<CreateOppDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateOppDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOppDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
