import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Generic } from 'src/app/model/generic';
import { Products } from 'src/app/model/products';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { GenericServiceService } from 'src/app/services/generic-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent  implements OnInit {

  constructor(public proApi: ProdServiceService, private router: Router, private route: ActivatedRoute, private compser: CompServiceService, private genSer: GenericServiceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id)
    this.getCompany();
    this.getAllGeneric();
  }
  id!: any;

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
    soldQuantity: new FormControl(''),
    remainedQuantity: new FormControl(),
    mfd: new FormControl(''),
    exp: new FormControl(''),
    sellPrice: new FormControl(''),
    generics: new FormControl()
  })

  onsubmit() {
    this.proApi.addProduct(this.productForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/prolist');
      },
      error: res => {
        console.log('Error');
      }
    })
  }

  product!:any

  getByID(id:any){
    this.proApi.getById(id).subscribe((val: any) => {
      this.product = val;      
      this.productForm.setValue(this.product)
  })
}


}
