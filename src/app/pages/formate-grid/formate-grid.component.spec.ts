import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormateGridComponent } from './formate-grid.component';

describe('FormateGridComponent', () => {
  let component: FormateGridComponent;
  let fixture: ComponentFixture<FormateGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormateGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormateGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
