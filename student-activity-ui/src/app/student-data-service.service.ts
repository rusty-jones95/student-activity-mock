import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentDataServiceService {

  private studentApiUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.studentApiUrl + '/students');
  }
}
