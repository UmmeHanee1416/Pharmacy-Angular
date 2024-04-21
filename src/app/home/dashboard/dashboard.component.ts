import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import { SalesDetailServiceService } from 'src/app/services/sales-detail-service.service';
import { SalesServiceService } from 'src/app/services/sales-service.service';
import { StorageServiceService } from 'src/app/services/storage-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private salesdet: SalesDetailServiceService, private salesSer: SalesServiceService, private storeSer: StorageServiceService) { }

  ngOnInit(): void {
    this.storeSer.isLoggedIn();
    this.getwedCharge("Monday");
    this.getwedCharge("Tuesday");
    this.getwedCharge("Wednesday");
    this.getwedCharge("Thursday");
    this.getwedCharge("Friday");
    this.getwedCharge("Saturday");
    this.getwedCharge("Sunday");
    this.createChartWeek();
  }

  wedcharge!: any;

  getwedCharge(day: any) {
    this.salesSer.getTotalCharge(day).subscribe((res: any) => {
      this.wedcharge = res;
      console.log("wednesday--- " + this.wedcharge);
      this.salesValue.push(this.wedcharge);
      this.createChartWeek();
    })
  }

  salesValue: number[] = [this.wedcharge];
  // profitValue:string[] = ['542', '542', '536', '327', '17', '100', '538'];

  public chart: any;
  createChartWeek() {

    this.chart = new Chart("MyChart2", {
      type: 'bar', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: ['sun', 'mon', 'tue',
          'wed', 'thu', 'fri', 'sat'],
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
