import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Products } from 'src/app/model/products';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { ReturnCompanyServiceService } from 'src/app/services/return-company-service.service';

@Component({
  selector: 'app-returnto-companyadd',
  templateUrl: './returnto-companyadd.component.html',
  styleUrls: ['./returnto-companyadd.component.scss']
})
export class ReturntoCompanyaddComponent implements OnInit{

  constructor(public proApi: ReturnCompanyServiceService, private router: Router, public proser: ProdServiceService, public compser: CompServiceService) { }
  ngOnInit(): void {
    this.getCompany();
    this.getallproduct();
  }

  companyList: Company[] = []

  productList: Products[] = []

  getallproduct() {
    this.proser.getData().subscribe((res: any) => {
      this.productList = res
    })
  }

  getCompany() {
    this.compser.getData().subscribe((res: any) => {
      this.companyList = res;
    })
  }

  productForm: FormGroup = new FormGroup({
    tradeName: new FormControl(''),
    returnedAmount: new FormControl()
  })

  onsubmit() {
    this.proApi.addData(this.productForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/returncomplist');
    })
  }

}
