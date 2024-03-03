import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandesdetailsComponent } from './brandesdetails.component';

describe('BrandesdetailsComponent', () => {
  let component: BrandesdetailsComponent;
  let fixture: ComponentFixture<BrandesdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandesdetailsComponent]
    });
    fixture = TestBed.createComponent(BrandesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
