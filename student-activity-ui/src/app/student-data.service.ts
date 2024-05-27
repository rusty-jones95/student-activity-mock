import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private canvasApiUrl: string = 'http://localhost:3000';
  private studentActivityApiUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.canvasApiUrl + '/students');
  }

  generateCSVReport(students: any[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
    return this.httpClient.post<any[]>(this.studentActivityApiUrl + '/generateCSVReport', students, httpOptions);
  }
}
