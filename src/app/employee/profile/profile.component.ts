import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeDetail } from 'src/app/model/employeeDetail';
import { EmpFServiceService } from 'src/app/services/emp-fservice.service';
import { EmpserviceService } from 'src/app/services/empservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  constructor(public rest: EmpserviceService, private route: ActivatedRoute, private router: Router, public empdetser: EmpFServiceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id)
  }

  idd!: any;
  id!: any;
  employee!: Employee;
  empDetails!: EmployeeDetail;

  getByID(id: any) {
    this.rest.getById(id).subscribe((val: any) => {
      this.employee = val;
      this.idd = this.employee.employeeDetail
      this.empdetser.getById(this.idd).subscribe((val: any) => {
        this.empDetails = val;
        console.log(this.empDetails);
      })
      // this.empForm.setValue(this.employee)
    })
  }

}
