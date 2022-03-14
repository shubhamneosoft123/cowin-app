import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverageByStateComponent } from './coverage-by-state.component';

describe('CoverageByStateComponent', () => {
  let component: CoverageByStateComponent;
  let fixture: ComponentFixture<CoverageByStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoverageByStateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverageByStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
