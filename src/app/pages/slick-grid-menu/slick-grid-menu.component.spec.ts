import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlickGridMenuComponent } from './slick-grid-menu.component';

describe('SlickGridMenuComponent', () => {
  let component: SlickGridMenuComponent;
  let fixture: ComponentFixture<SlickGridMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlickGridMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlickGridMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
