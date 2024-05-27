import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {

  dataSource: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor() { }

  sendStudentData(data: any[]) {
    this.dataSource.next(data);
  }
}
