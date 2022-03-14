import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AefiRuralTrendComponent } from './aefi-rural-trend.component';

describe('AefiRuralTrendComponent', () => {
  let component: AefiRuralTrendComponent;
  let fixture: ComponentFixture<AefiRuralTrendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AefiRuralTrendComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AefiRuralTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
