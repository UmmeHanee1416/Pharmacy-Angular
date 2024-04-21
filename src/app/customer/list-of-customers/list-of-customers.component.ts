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
  selector: 'app-list-of-customers',
  templateUrl: './list-of-customers.component.html',
  styleUrls: ['./list-of-customers.component.scss']
})
export class ListOfCustomersComponent implements OnInit {



  constructor(public custser: CustServiceService, public sealesSer:SalesServiceService, public empSer:EmpserviceService) { }
  ngOnInit(): void {
    this.getAllCustomer();
  }

  customerList: Customer[] = []
  salesList: Sales[]=[]
  employeeList:Employee[]=[]
  getAllCustomer() {
    this.custser.getData().subscribe((res: any) => {
      this.customerList = res;
      console.log(this.customerList);
    })
  }

  delete(code: any) {
    this.custser.deleteByID(code).subscribe((val: any) => {
      // alert("Do you want to delete " + code + " ?")
      this.getAllCustomer();
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

  arr: any = {
    selectvalue: null
  }

  searchForm: FormGroup = new FormGroup({
    selectvalue: new FormControl(''),
  })

  searchbox :any
  expression = false;

  getByParam() {
    if (this.searchForm.value.selectvalue === "customer") {
      // this.searchbox = "";
      this.customerList = [];
      let productList2: Customer[] = []
      this.custser.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox === product.contact) {
            this.customerList.push(product);
          }
        })
      })
    } else if (this.searchForm.value.selectvalue === "sales") {
      this.expression = true
      this.customerList = [];
      let productList2: Customer[] = []
      this.custser.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox == product.purchaseDate) {
            this.customerList.push(product);
          }
        })
      })
    }else if (this.searchForm.value.selectvalue === "employee") {
      this.customerList = [];
      let productList2: Customer[] = []
      this.custser.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox == product.empId) {
            this.customerList.push(product);
          }
        })
      })
    }
    console.log(this.searchForm.value.selectvalue);
  }

  getOption() {

  }

}
