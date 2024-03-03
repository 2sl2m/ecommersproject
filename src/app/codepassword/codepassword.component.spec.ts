import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodepasswordComponent } from './codepassword.component';

describe('CodepasswordComponent', () => {
  let component: CodepasswordComponent;
  let fixture: ComponentFixture<CodepasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CodepasswordComponent]
    });
    fixture = TestBed.createComponent(CodepasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
