import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsdivComponent } from './productsdiv.component';

describe('ProductsdivComponent', () => {
  let component: ProductsdivComponent;
  let fixture: ComponentFixture<ProductsdivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsdivComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsdivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
