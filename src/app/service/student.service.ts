import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from '../model/student.model';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  private dataSubject = new BehaviorSubject<string>('');
  public data$ = this.dataSubject.asObservable();

  createTest(): Observable<string> {
    return this.http.post('http://localhost:6001/api/students/Saving', {}, { responseType: 'text' });
  }

  deleteTest(): Observable<string> {
    return this.http.delete('http://localhost:6001/api/students/Delete', { responseType: 'text' });
  }
}
