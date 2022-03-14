import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistartionTrendsComponent } from './registartion-trends.component';

describe('RegistartionTrendsComponent', () => {
  let component: RegistartionTrendsComponent;
  let fixture: ComponentFixture<RegistartionTrendsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistartionTrendsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistartionTrendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
