import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { NgFor } from '@angular/common';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'student-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {

  students: any[] = [];

  constructor(private studentDataService: StudentDataService, private shareDataService: ShareDataService) {}

  ngOnInit() {
    this.studentDataService.getStudents().subscribe((data: any[]) => {
      this.students = data;
      this.shareDataService.dataSource.next(this.students);
    });
  }

  generateCSVReport() {
    console.log('Hello from generate CSV report');
    this.studentDataService.generateCSVReport(this.students).subscribe(data => {
      console.log('Generate CSV response: ' + data);
    });
  }
}