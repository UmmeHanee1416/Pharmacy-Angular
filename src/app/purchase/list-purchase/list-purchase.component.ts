import { Component, OnInit } from '@angular/core';
import { Purchase } from 'src/app/model/purchase';
import { PurchaseServiceService } from 'src/app/services/purchase-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.scss']
})
export class ListPurchaseComponent implements OnInit{

  constructor(public purservice: PurchaseServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  purchaseList: Purchase[] = [];

  getAll() {
    this.purservice.getData().subscribe((res: any) => {
      this.purchaseList = res;
      console.log(this.purchaseList);
    })
  }

  delete(id: any) {
    this.purservice.deleteByID(id).subscribe((res: any) => {
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

}
