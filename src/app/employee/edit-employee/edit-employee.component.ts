import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/model/employee';
import { EmployeeDetail } from 'src/app/model/employeeDetail';
import { EmpFServiceService } from 'src/app/services/emp-fservice.service';
import { EmpserviceService } from 'src/app/services/empservice.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  constructor(public rest: EmpserviceService, private route: ActivatedRoute, private router: Router, public empdetser: EmpFServiceService) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getByID(this.id)
  }

  idd!: any;
  id!: any;
  employee!: Employee;
  empDetails!: EmployeeDetail;
  expression = false;


  empForm: FormGroup = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    education: new FormControl(''),
    experience: new FormControl(''),
    reference: new FormControl(''),
    employeeDetail: new FormControl()
  })

  empdetForm: FormGroup = new FormGroup({
    id: new FormControl(),
    currentAdd: new FormControl(''),
    permanentAdd: new FormControl(''),
    familyMembers: new FormControl(''),
  })

  getByID(id: any) {
    this.rest.getById(id).subscribe((val: any) => {
      this.employee = val;
      this.idd = this.employee.employeeDetail
      this.empdetser.getById(this.idd).subscribe((val: any) => {
        this.empDetails = val;
        console.log(this.empDetails);
        this.empdetForm.setValue(this.empDetails)
      })
      this.empForm.setValue(this.employee)
    })
  }

  onsubmit() {
    this.rest.addData(this.empForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/emplist')
    })
  }

  onsubmitdet() {
    this.empdetser.addData(this.empdetForm.value).subscribe((val: any) => {
      this.empDetails = val;
      console.log(this.empDetails.id);
    })
    this.expression = false
  }

  onclick() {
    this.expression = true
  }

}
