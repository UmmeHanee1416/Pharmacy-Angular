import { ImplicitReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/model/doctor';
import { DocServiceService } from 'src/app/services/doc-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-doctor',
  templateUrl: './list-doctor.component.html',
  styleUrls: ['./list-doctor.component.scss']
})
export class ListDoctorComponent implements OnInit {

  constructor(public compSer: DocServiceService) { }
  ngOnInit(): void {
    this.getAllSales();
  }

  doctorList: Doctor[] = [];

  getAllSales() {
    this.compSer.getData().subscribe((res: any) => {
      this.doctorList = res;
      // console.log(this.salesList);
    })
  }

  delete(id: any) {
    this.compSer.deleteByID(id).subscribe((val: any) => {
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



}
