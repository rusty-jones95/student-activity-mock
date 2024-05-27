import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentTableComponent } from './student-table/student-table.component';
import { StudentBarChartComponent } from './student-bar-chart/student-bar-chart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentTableComponent, StudentBarChartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'student-activity-ui';
}
