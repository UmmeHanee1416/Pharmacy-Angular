import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Customer } from 'src/app/model/customer';
import { Employee } from 'src/app/model/employee';
import { Sales } from 'src/app/model/sales';
import { CustServiceService } from 'src/app/services/cust-service.service';
import { EmpserviceService } from 'src/app/services/empservice.service';
import { SalesServiceService } from 'src/app/services/sales-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit{

  constructor(public custser: CustServiceService, public salesser:SalesServiceService, public empSer:EmpserviceService) { }
  ngOnInit(): void {
    this.getAllSales();
  }

  salesList: Sales[] = []
 
  getAllSales() {
    this.salesser.getData().subscribe((res: any) => {
      this.salesList = res;
      console.log(this.salesList);
    })
  }

  delete(code: any) {
    this.salesser.deleteByID(code).subscribe((val: any) => {
      // alert("Do you want to delete " + code + " ?")
      this.getAllSales();
    })
  }

  confirmBox(data: any) {
    Swal.fire({
      title: 'Are you sure you want to delete ' + data.name + ' ?',
      text: 'You will not be able to recover it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, Delete it',
      cancelButtonText: 'No, Keep it'
    }).then((result) => {
      if (result.value) {
        this.delete(data.id)
        Swal.fire(
          'Deleted!',
          'Your file has been deleted',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your file is safe!',
          'error'
        )
      }
    })
  }

  customerList: Customer[] = []
  employeeList:Employee[]=[]

  searchForm: FormGroup = new FormGroup({
    selectvalue: new FormControl(''),
  })

  searchbox :any

  getByParam() {
    if (this.searchForm.value.selectvalue === "customer") {
      this.salesList = [];
      let productList2: Sales[] = []
      this.salesser.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox === product.customerId) {
            this.salesList.push(product);
          }
        })
      })
    } else if (this.searchForm.value.selectvalue === "employee") {
      this.salesList = [];
      let productList2: Sales[] = []
      this.salesser.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox == product.empName) {
            this.salesList.push(product);
          }
        })
      })
    }
    console.log(this.searchForm.value.selectvalue);
  }

}
