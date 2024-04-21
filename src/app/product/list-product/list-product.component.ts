import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Products } from 'src/app/model/products';
import { ProdServiceService } from 'src/app/services/prod-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit{

  constructor(public proservice: ProdServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  productList: Products[] = [];

  getAll() {
    this.proservice.getData().subscribe((res: any) => {
      this.productList = res;
      console.log(this.productList);
    })
  }

  delete(id: any) {
    this.proservice.deleteByID(id).subscribe((res: any) => {
      // alert("Deleted");
      this.getAll()
    });
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
        this.delete(data.tradeName)
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

  searchForm: FormGroup = new FormGroup({
    selectvalue: new FormControl(''),
  })

  searchbox :any

  getByParam() {
    if (this.searchForm.value.selectvalue === "tName") {
      this.productList = [];
      let productList2: Products[] = []
      this.proservice.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox === product.tradeName) {
            this.productList.push(product);
          }
        })
      })
    } else if (this.searchForm.value.selectvalue === "cName") {
      this.productList = [];
      let productList2: Products[] = []
      this.proservice.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox == product.companyName) {
            this.productList.push(product);
          }
        })
      })
    } else if (this.searchForm.value.selectvalue === "gName") {
      this.productList = [];
      let productList2: Products[] = []
      this.proservice.getData().subscribe((val: any) => {
        productList2 = val;
        productList2.forEach(product => {
          if (this.searchbox == product.generics) {
            this.productList.push(product);
          }
        })
      })
    }
    
    console.log(this.searchForm.value.selectvalue);
  }
}
