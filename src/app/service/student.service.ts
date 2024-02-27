import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  private dataSubject = new BehaviorSubject<string>('');
  public data$ = this.dataSubject.asObservable();

  createStudent(student: Student): Observable<Student> {
    return this.http.post<Student>('http://localhost:8090/api/students/save',student);
  }

  getStudents(): Observable<Array<Student>> {
    return this.http.get<Array<Student>>('http://localhost:8090/api/students/list');
  }

  searchStudentById(id: number): Observable<Student> {
    return this.http.get<Student>('http://localhost:8090/api/students/' + id);
  }

}
