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
  studentForm!: FormGroup;
  response!:string;
  constructor(
   private studentService:StudentService) {}

  ngOnInit(): void {
  }

  onCreate()
  {
    this.studentService.createTest().subscribe(
      (response: string) => {
        this.response = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    ); 
}

onDelete()
  {
    this.studentService.deleteTest().subscribe(
      (response: string) => {
        this.response = response;
      },
      (error) => {
        console.error('Error:', error);
      }
    ); 
}
}