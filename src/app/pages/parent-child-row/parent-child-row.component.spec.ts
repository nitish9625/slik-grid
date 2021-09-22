import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentChildRowComponent } from './parent-child-row.component';

describe('ParentChildRowComponent', () => {
  let component: ParentChildRowComponent;
  let fixture: ComponentFixture<ParentChildRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentChildRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentChildRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
