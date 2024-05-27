import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { StudentDataService } from '../student-data.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'student-table',
  standalone: true,
  imports: [NgFor],
  templateUrl: './student-table.component.html',
  styleUrl: './student-table.component.css'
})
export class StudentTableComponent {

  students: any[] = [];

  constructor(private studentDataService: StudentDataService) {}

  ngOnInit() {
    this.studentDataService.getStudents().subscribe((data: any[]) => {
      this.students = data;
    });
  }
}