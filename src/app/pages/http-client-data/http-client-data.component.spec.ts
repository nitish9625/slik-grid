import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientDataComponent } from './http-client-data.component';

describe('HttpClientDataComponent', () => {
  let component: HttpClientDataComponent;
  let fixture: ComponentFixture<HttpClientDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpClientDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpClientDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
