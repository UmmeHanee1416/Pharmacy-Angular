import { Component, OnInit } from '@angular/core';
import { ReturnedtoCompany } from 'src/app/model/returnedto-company';
import { ReturnCompanyServiceService } from 'src/app/services/return-company-service.service';

@Component({
  selector: 'app-returnto-company-list',
  templateUrl: './returnto-company-list.component.html',
  styleUrls: ['./returnto-company-list.component.scss']
})
export class ReturntoCompanyListComponent implements OnInit{

  constructor(public proservice: ReturnCompanyServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  productList: ReturnedtoCompany[] = [];

  getAll() {
    this.proservice.getData().subscribe((res: any) => {
      this.productList = res;
      console.log(this.productList);
    })
  }

  delete(id: any) {
    this.proservice.deleteByID(id).subscribe((res: any) => {
      alert("Deleted");
      this.getAll()
    });
  }
}