import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpFServiceService } from 'src/app/services/emp-fservice.service';
import { EmpserviceService } from 'src/app/services/empservice.service';
import { EmployeeDetail } from 'src/app/model/employeeDetail';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {

  constructor(public proApi: EmpserviceService, private router: Router, public empdetser: EmpFServiceService) { }
  
  size!: number;

  empdetList: EmployeeDetail[] = []

  getSize() {
    this.empdetser.getData().subscribe((val: any) => {
      this.empdetList = val;
      this.size = this.empdetList.length;
    })
  }

  empForm: FormGroup = new FormGroup({
    name: new FormControl(''),
    education: new FormControl(''),
    experience: new FormControl(''),
    reference: new FormControl(''),
    employeeDetail: new FormControl()
  })

  epmloyee = this.empForm.value

  empdetForm: FormGroup = new FormGroup({
    currentAdd: new FormControl(''),
    permanentAdd: new FormControl(''),
    familyMembers: new FormControl(''),
  })

  onsubmit() {
    console.log(this.empForm.value);
    this.empForm.value.employeeDetail = this.empDetails.id;
    this.proApi.addData(this.empForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/emplist');
    })
  }

  expression = false;
  onclick() {
    // this.router.navigateByUrl('/addEmpDet');
    this.expression = true
  }
  empDetails!: EmployeeDetail;

  onsubmitdet() {
    this.empdetser.addData(this.empdetForm.value).subscribe((val: any) => {
      this.empDetails = val;
      console.log(this.empDetails.id);
      // this.router.navigateByUrl('/addEmp');
    })
    this.expression = false
    this.getSize();
  }

 
}
