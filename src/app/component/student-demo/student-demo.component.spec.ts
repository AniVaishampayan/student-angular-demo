import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDemoComponent } from './student-demo.component';

describe('StudentDemoComponent', () => {
  let component: StudentDemoComponent;
  let fixture: ComponentFixture<StudentDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentDemoComponent]
    });
    fixture = TestBed.createComponent(StudentDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
