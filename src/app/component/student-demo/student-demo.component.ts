import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { AlertOptions } from 'src/app/model/alert.model';
import { Student } from 'src/app/model/student.model';
import { AlertService } from 'src/app/service/alert.service';
import { StudentService } from 'src/app/service/student.service';

@Component({
  selector: 'app-student-demo',
  templateUrl: './student-demo.component.html',
  styleUrls: ['./student-demo.component.css']
})
export class StudentDemoComponent implements OnInit {
  alertOptions: AlertOptions = { autoClose: false, keepAfterRouteChange: true };
  studentForm!: FormGroup;
  student!:Student;
  queryParams?: Params;
  isDisabled: boolean = false;
  actionBtn = "Save";
  isIdDisabled: boolean = true;

  constructor(
   private fb: FormBuilder,
   private studentService:StudentService,
   private route: ActivatedRoute,
   private alertService: AlertService,    
    ) {}

toggleIdField() {
  this.isIdDisabled = false;
}
  ngOnInit(): void {
      this.initForm();
      this.studentForm
      .get('name')
      ?.valueChanges.subscribe((value: string) => {
        this.studentForm
          .get('name')
          ?.setValue(value.toUpperCase(), { emitEvent: false });
      });
  }
  initForm() {
    this.studentForm = this.fb.group({
      id: [''],
      name:['',Validators.required],
      age:['',Validators.required]     
    });
  }

  onSubmit()
  {
    if (this.actionBtn == "Save"){
      
      this.studentService.createStudent(this.studentForm.value).subscribe((response: Student) => {
        this.alertService.success('Record Added Successfully', this.alertOptions);
      }, error => {
        this.alertService.warn(error?.error?.message);
      });
    }
  }
  
}