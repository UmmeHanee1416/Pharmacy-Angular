import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/model/employee';
import { EmpserviceService } from 'src/app/services/empservice.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.scss']
})
export class ListEmployeeComponent implements OnInit {

  constructor(public proservice: EmpserviceService) { }

  ngOnInit(): void {
    this.getAll();
  }

  employeeList: Employee[] = [];

  getAll() {
    this.proservice.getData().subscribe((res: any) => {
      this.employeeList = res;
    })
  }

  emp!: Employee

  getbyid(id: any) {
    this.proservice.getById(id).subscribe((val: any) => {
      this.emp = val;
    })
  }
  
  delete(id: any) {
    this.proservice.deleteByID(id).subscribe((res: any) => {
      alert("Deleted");
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
