import { Employee } from './../../model/employee';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { EmployeeDetail } from 'src/app/model/employeeDetail';
import { CompServiceService } from 'src/app/services/comp-service.service';
import { EmpFServiceService } from 'src/app/services/emp-fservice.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit{

constructor(public proApi: EmpFServiceService, private router: Router) { }
  ngOnInit(): void {
  }

employee!:EmployeeDetail


  empdetForm: FormGroup = new FormGroup({
    currentAdd: new FormControl(''),
    permanentAdd: new FormControl(''),
    familyMembers: new FormControl(''),
  })

  onsubmit() {
    this.proApi.addData(this.empdetForm.value).subscribe((val: any) => {
      this.router.navigateByUrl('/addEmp');
    })
  }

  abc!:number
}
