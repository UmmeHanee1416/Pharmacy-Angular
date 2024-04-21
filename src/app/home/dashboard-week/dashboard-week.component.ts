import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-week',
  templateUrl: './dashboard-week.component.html',
  styleUrls: ['./dashboard-week.component.scss']
})
export class DashboardWeekComponent implements OnInit {
  ngOnInit(): void {
    this.createChartWeek();
  }

  salesValue: string[] = ['467', '476', '572', '500', '92',
    '574', '573'];
  // profitValue:string[] = ['542', '542', '536', '327', '17', '100', '538'];

  public chart: any;
  createChartWeek() {

    this.chart = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['sat', 'sun', 'mon', 'tue',
          'wed', 'thu', 'fri'],
        datasets: [
          {
            label: "Sales",
            data: this.salesValue,
            backgroundColor: 'blue'
          },
          // {
          //   label: "Profit",
          //   data: this.profitValue,
          //   backgroundColor: 'limegreen'
          // }  
        ]
      },
      options: {
        aspectRatio: 3
      }

    });
  }

  
}
