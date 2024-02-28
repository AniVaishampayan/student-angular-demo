import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StudentService {
  constructor(private http: HttpClient) {}

  private dataSubject = new BehaviorSubject<string>('');
  public data$ = this.dataSubject.asObservable();

  createTest(): Observable<string> {
    return this.http.post('http://192.168.1.16:6969/api/students/Saving', {}, { responseType: 'text' });
  }

  deleteTest(): Observable<string> {
    return this.http.delete('http://192.168.1.16:6969/api/students/Delete', { responseType: 'text' });
  }
}
