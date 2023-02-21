import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssummaryComponent } from './productssummary.component';

describe('ProductssummaryComponent', () => {
  let component: ProductssummaryComponent;
  let fixture: ComponentFixture<ProductssummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductssummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductssummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
