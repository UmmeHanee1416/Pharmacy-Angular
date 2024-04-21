import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Generic } from 'src/app/model/generic';
import { Products } from 'src/app/model/products';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { GenericServiceService } from 'src/app/services/generic-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import { PurchaseServiceService } from 'src/app/services/purchase-service.service';

@Component({
  selector: 'app-add-purchase',
  templateUrl: './add-purchase.component.html',
  styleUrls: ['./add-purchase.component.scss']
})
export class AddPurchaseComponent implements OnInit{

  constructor(public proApi: ProdServiceService, private router: Router, private compser: CompServiceService, private genSer: GenericServiceService, private purSer: PurchaseServiceService) { }
  ngOnInit(): void {
    this.getCompany();
    this.getAllGeneric();
    this.getProducts();
  }

  productList: Products[] = []

  getProducts() {
    this.proApi.getData().subscribe((res: any) => {
      this.productList = res;
    })
  }

  companyList: Company[] = []

  getCompany() {
    this.compser.getData().subscribe((res: any) => {
      this.companyList = res;
    })
  }

  GenericList: Generic[] = []

  getAllGeneric() {
    this.genSer.getData().subscribe((res: any) => {
      this.GenericList = res;
      console.log(this.GenericList);
    })
  }

  onsubmit() {
    this.purSer.addProduct(this.purchaseForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/listpur');
        console.log(this.purchaseForm.value);
      },
      error: res => {
        console.log('-------------------------------------------Error-----------------------------------');
      }
    })
  }

  purchaseForm: FormGroup = new FormGroup({
    productId: new FormControl(''),
    batchId: new FormControl(''),
    purchaseQuantity: new FormControl(''),
    purchaseDate: new FormControl(''),
    MRP: new FormControl('')
  })

}
