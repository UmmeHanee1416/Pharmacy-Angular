import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Generic } from 'src/app/model/generic';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { GenericServiceService } from 'src/app/services/generic-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  constructor(public proApi: ProdServiceService, private router: Router, private compser: CompServiceService, private genSer: GenericServiceService) { }
  ngOnInit(): void {
    this.getCompany();
    this.getAllGeneric();
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


  productForm: FormGroup = new FormGroup({
    tradeName: new FormControl(''),
    companyName: new FormControl(''),
    regsrtQuantity: new FormControl(''),
    // soldQuantity: new FormControl(''),
    mfd: new FormControl(''),
    exp: new FormControl(''),
    sellPrice: new FormControl(''),
    generics: new FormControl()
  })

  onsubmit() {
    this.proApi.addProduct(this.productForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/prolist'); 
        console.log(this.productForm.value);
      },
      error: res => {
        console.log('-------------------------------------------Error-----------------------------------');
      }
    })
  }



}
