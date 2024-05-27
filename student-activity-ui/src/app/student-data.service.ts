import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private studentApiUrl: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.studentApiUrl + '/students');
  }
}
