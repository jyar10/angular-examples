import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveLayout } from './responsive-layout';

describe('ResponsiveLayout', () => {
  let component: ResponsiveLayout;
  let fixture: ComponentFixture<ResponsiveLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResponsiveLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResponsiveLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
