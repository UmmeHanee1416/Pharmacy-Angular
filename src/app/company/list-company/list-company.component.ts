import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompServiceService } from 'src/app/services/comp-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit{
companyList: Company[]=[];

constructor(public compSer: CompServiceService) { }
  ngOnInit(): void {
    this.getAllSales();
  }

  getAllSales() {
    this.compSer.getData().subscribe((res: any) => {
      this.companyList = res;
      // console.log(this.salesList);
    })
  }

  delete(code: any) {
    this.compSer.deleteByID(code).subscribe((val: any) => {
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
        this.delete(data.name)
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

}
