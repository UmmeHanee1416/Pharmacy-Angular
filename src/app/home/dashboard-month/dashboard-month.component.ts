import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard-month',
  templateUrl: './dashboard-month.component.html',
  styleUrls: ['./dashboard-month.component.scss']
})
export class DashboardMonthComponent implements OnInit {
  ngOnInit(): void {
    this.createChartMonth();
  }


  // profitValue:string[] = ['542', '542', '536', '327', '17', '100', '538'];
  salesValueMonth: string[] = ['467', '476', '572', '500'];

  public chartMonth: any;


  createChartMonth() {

    this.chartMonth = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['1st Week', '2nd Week', '3rd Week', '4th Week'],
        datasets: [
          {
            label: "Sales",
            data: this.salesValueMonth,
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
        aspectRatio: 2
      }

    });
  }
}
