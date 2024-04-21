import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Generic } from 'src/app/model/generic';
import { Products } from 'src/app/model/products';
import { GenericServiceService } from 'src/app/services/generic-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-edit-generic',
  templateUrl: './edit-generic.component.html',
  styleUrls: ['./edit-generic.component.scss']
})
export class EditGenericComponent implements OnInit {


  constructor(private genSer: GenericServiceService, private router: Router, private route: ActivatedRoute, private proSer: ProdServiceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id)
    this.getProduct()
  }

  id!: any;
  generic!: Generic
  productList: Products[] = [];

  getProduct() {
    this.proSer.getData().subscribe((res: any) => {
      this.productList = res;
      // console.log(this.productList);

    })
  }

  genericForm: FormGroup = new FormGroup({
    id: new FormControl(),
    // productId: new FormControl(''),
    genericName: new FormControl(''),
    registeredQuantity: new FormControl(''),
  })

  getByID(id: any) {
    this.genSer.getById(id).subscribe((val: any) => {
      this.generic = val;
      // console.log(this.generic);
      this.genericForm.setValue(this.generic)
      
      
    })
  }

  onsubmit() {
    this.genSer.addData(this.genericForm.value).subscribe((res: any) => {
      console.log(this.genericForm.value);
      this.router.navigateByUrl("/listgeneric")
    })
  }

}
