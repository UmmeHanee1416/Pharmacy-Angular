import { Component, OnInit } from '@angular/core';
import { Generic } from 'src/app/model/generic';
import { GenericServiceService } from 'src/app/services/generic-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-generic',
  templateUrl: './list-generic.component.html',
  styleUrls: ['./list-generic.component.scss']
})
export class ListGenericComponent implements OnInit{

  constructor(private genSer: GenericServiceService) { }
  ngOnInit(): void {
    this.getAllGeneric();
  }

  GenericList: Generic[] = []

  getAllGeneric() {
    this.genSer.getData().subscribe((res:any) => {
      this.GenericList = res;
      console.log(this.GenericList);
      
    })
  }

  delete(id: any) {
    this.genSer.deleteByID(id).subscribe((res: any) => {
      this.getAllGeneric()
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
