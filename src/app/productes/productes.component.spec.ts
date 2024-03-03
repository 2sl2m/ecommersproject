import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductesComponent } from './productes.component';

describe('ProductesComponent', () => {
  let component: ProductesComponent;
  let fixture: ComponentFixture<ProductesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductesComponent]
    });
    fixture = TestBed.createComponent(ProductesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
