import { Component } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import Chart from 'chart.js/auto';

@Component({
  selector: 'student-bar-chart',
  standalone: true,
  imports: [],
  templateUrl: './student-bar-chart.component.html',
  styleUrl: './student-bar-chart.component.css'
})
export class StudentBarChartComponent {
  public studentChart: any;
  private students: any[] = [];
  private activityMap: Map<string, number> = new Map<string, number>();
  private subscriptionCallCount: number = 1;

  constructor(private shareDataService: ShareDataService) { }

  ngOnInit() {
    this.shareDataService.dataSource.subscribe((data) => {
      if (this.subscriptionCallCount > 1) {
        this.students = data;
        this.createLabelsAndDataSets();
        this.createStudentChart();
      }
      this.subscriptionCallCount = this.subscriptionCallCount + 1;
    });
  }

  createLabelsAndDataSets() {
    this.students.forEach(student => {
      if (!this.activityMap.has(student.activity)) {
        this.activityMap.set(student.activity, 1);
      } else {
        var count = this.activityMap.get(student.activity);
        if (count != undefined && count != null) {
          count = count + 1;
          this.activityMap.set(student.activity, count);
        }
      }
    });
    console.log(Array.from(this.activityMap.keys()));
    console.log(Array.from(this.activityMap.values()));
    this.createStudentChart();
  }

  createStudentChart() {
    this.studentChart = new Chart("StudentChart", {
      type: 'bar',

      data: {
        labels: Array.from(this.activityMap.keys()), 
	       datasets: [
          {
            label: "Student Activity",
            data: Array.from(this.activityMap.values()),
            backgroundColor: 'blue'
          }
        ]
      },
      options: {
        aspectRatio:2.5,
        responsive: false
      }
    });
  }
}
