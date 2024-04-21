import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Employee } from 'src/app/model/employee';
import { Generic } from 'src/app/model/generic';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { CustServiceService } from 'src/app/services/cust-service.service';
import { EmpserviceService } from 'src/app/services/empservice.service';
import { GenericServiceService } from 'src/app/services/generic-service.service';
import { ProdServiceService } from 'src/app/services/prod-service.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.scss']
})
export class EditCustomerComponent implements OnInit {

  constructor(public proApi: CustServiceService, 
              public empser: EmpserviceService,
              private router: Router, 
              private route: ActivatedRoute, 
              private compser: CompServiceService, 
              private genSer: GenericServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id)
    this.getCompany();
    this.getAllGeneric();
    this.getallemp();
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


  custForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    contact: new FormControl(''),
    purchaseDate: new FormControl(''),
    payMethod: new FormControl(),
    empId: new FormControl()
  })

  onsubmit() {
    this.proApi.addData(this.custForm.value).subscribe({
      next: res => {
        this.router.navigateByUrl('/custhome');
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
      this.custForm.setValue(this.product)
  })
}

empList: Employee[] = []

getallemp() {
  this.empser.getData().subscribe((res: any) => {
    this.empList = res;
  })
}


}
